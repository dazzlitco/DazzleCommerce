"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const platforms = [
  "Shopify / Shopify Plus",
  "WooCommerce",
  "Amazon Seller Central",
  "Amazon Vendor Central",
  "Walmart Marketplace",
  "eBay",
  "Etsy",
  "BigCommerce",
  "Magento / Adobe Commerce",
  "Custom / Headless",
  "Thinking to sell online",
];

const revenues = [
  "Pre-launch",
  "Under $25K / month",
  "$25K - $100K / month",
  "$100K - $500K / month",
  "$500K - $2M / month",
  "$2M+ / month",
];

const budgets = [
  "Under $2,500 / month",
  "$2,500 - $5,000 / month",
  "$5,000 - $10,000 / month",
  "$10,000 - $25,000 / month",
  "$25,000+ / month",
  "Not sure yet",
];

const services = [
  "eCommerce Store Management",
  "eCommerce SEO",
  "PPC & Google Shopping",
  "Amazon PPC & Marketplace",
  "Conversion Rate Optimization",
  "Email & SMS Retention",
  "Shopify / WooCommerce Development",
  "Creative & Content Production",
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  website: string;
  platform: string;
  revenue: string;
  budget: string;
  services: string[];
  message: string;
  consent: boolean;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  phone: "",
  website: "",
  platform: platforms[0],
  revenue: revenues[0],
  budget: budgets[0],
  services: [],
  message: "",
  consent: false,
};

// The live contact page carries the "Growth Audit Request" form (form id
// ec974e3, post id 23). The clone reproduces its fields, labels, placeholders
// and required status word-for-word, with client-side validation,
// localStorage persistence and a confirmation state.
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function toggleService(service: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) {
      next.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "That email address does not look right — please check it.";
    }
    if (form.phone.trim() && !/^[0-9()#&+*\-.=]+$/.test(form.phone.trim())) {
      next.phone = "Only numbers and phone characters (#, -, *, etc) are accepted.";
    }
    if (!form.website.trim()) {
      next.website = "Please enter your store website.";
    } else {
      let url = form.website.trim();
      if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
      try {
        new URL(url);
      } catch {
        next.website = "That website address does not look right — please check it.";
      }
    }
    if (!form.message.trim()) {
      next.message = "Please tell us the main thing you want to fix.";
    }
    if (!form.consent) next.consent = "Please agree to the Privacy Policy to continue.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    try {
      const existing = JSON.parse(localStorage.getItem("dazzle-contact-audit") || "[]");
      existing.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem("dazzle-contact-audit", JSON.stringify(existing));
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError("Something went wrong saving your request. Please try again.");
    }
  }

  function resetForm() {
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div
        className="card"
        role="status"
        style={{ background: "#fff", textAlign: "left" }}
      >
        <p className="eyebrow">Request received</p>
        <h2 style={{ fontSize: "1.5rem" }}>
          Thank you, {form.name.split(" ")[0] || "there"} — your free growth audit
          is on its way.
        </h2>
        <p style={{ color: "var(--muted)" }}>
          A senior strategist will reply to <strong>{form.email}</strong> within
          one business day — usually the same day if you wrote before mid-afternoon
          Central Time. Before the call we will review your store, ad accounts and
          marketplace health, then walk you through the three things we would fix
          first.
        </p>
        <p style={{ color: "var(--muted)" }}>
          Your request has been saved. If you would rather talk now, call us on{" "}
          <a href="tel:+15550102400">+1 (555) 010-2400</a>, Mon–Fri, 9:00–18:00 CT.
        </p>
        <div className="btn-row">
          <button className="btn" type="button" onClick={resetForm}>
            Send another enquiry
          </button>
          <Link className="btn btn-outline" href="/book-a-strategy-call/">
            Book Your Free Strategy Call
          </Link>
        </div>
      </div>
    );
  }

  return (
    <form
      className="card"
      style={{ background: "#fff" }}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Growth Audit Request"
    >
      <h2 style={{ fontSize: "1.5rem" }}>Request your free growth audit</h2>
      <p style={{ color: "var(--muted)" }}>
        Takes about two minutes. The more context you give us, the more specific
        the audit comes back.
      </p>

      <div className="form-field">
        <label htmlFor="contact-name">
          Full name <span className="required">*</span>
        </label>
        <input
          id="contact-name"
          className="form-input"
          type="text"
          autoComplete="name"
          placeholder="Jordan Avery"
          value={form.name}
          onChange={(e) => set("name", e.target.value)}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && (
          <p className="form-msg form-msg-dark err" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="contact-email">
          Work email <span className="required">*</span>
        </label>
        <input
          id="contact-email"
          className="form-input"
          type="email"
          autoComplete="email"
          placeholder="jordan@yourbrand.com"
          value={form.email}
          onChange={(e) => set("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && (
          <p className="form-msg form-msg-dark err" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="contact-phone">Phone</label>
        <input
          id="contact-phone"
          className="form-input"
          type="tel"
          autoComplete="tel"
          placeholder="+1 (555) 000-0000"
          pattern="[0-9()#&+*-=.]+"
          title="Only numbers and phone characters (#, -, *, etc) are accepted."
          value={form.phone}
          onChange={(e) => set("phone", e.target.value)}
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && (
          <p className="form-msg form-msg-dark err" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="contact-website">
          Store website <span className="required">*</span>
        </label>
        <input
          id="contact-website"
          className="form-input"
          type="url"
          autoComplete="url"
          placeholder="https://yourbrand.com"
          value={form.website}
          onChange={(e) => set("website", e.target.value)}
          aria-invalid={Boolean(errors.website)}
        />
        {errors.website && (
          <p className="form-msg form-msg-dark err" role="alert">
            {errors.website}
          </p>
        )}
      </div>

      <div className="form-field">
        <label htmlFor="contact-platform">Primary platform</label>
        <select
          id="contact-platform"
          className="form-select"
          value={form.platform}
          onChange={(e) => set("platform", e.target.value)}
        >
          {platforms.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="contact-revenue">Monthly online revenue</label>
        <select
          id="contact-revenue"
          className="form-select"
          value={form.revenue}
          onChange={(e) => set("revenue", e.target.value)}
        >
          {revenues.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="contact-budget">Monthly budget for growth</label>
        <select
          id="contact-budget"
          className="form-select"
          value={form.budget}
          onChange={(e) => set("budget", e.target.value)}
        >
          {budgets.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <fieldset
        className="form-field"
        style={{ border: 0, padding: 0, marginBottom: "14px" }}
      >
        <legend
          style={{
            fontWeight: 700,
            marginBottom: "6px",
            fontSize: "0.95rem",
          }}
        >
          Which services are you interested in?
        </legend>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "8px",
          }}
        >
          {services.map((s) => (
            <label
              key={s}
              className="form-check"
              style={{ fontWeight: 400, fontSize: "0.95rem" }}
            >
              <input
                type="checkbox"
                checked={form.services.includes(s)}
                onChange={() => toggleService(s)}
              />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="form-field">
        <label htmlFor="contact-message">
          What is the main thing you want to fix? <span className="required">*</span>
        </label>
        <textarea
          id="contact-message"
          className="form-input"
          rows={5}
          placeholder="e.g. Our Amazon sales dropped 30% after a listing suppression and we have not recovered. Shopify is flat and paid social CAC is up 40% year on year."
          value={form.message}
          onChange={(e) => set("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          style={{ resize: "vertical", width: "100%" }}
        />
        {errors.message && (
          <p className="form-msg form-msg-dark err" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <div className="form-field">
        <span
          style={{ display: "block", fontWeight: 700, marginBottom: "6px", fontSize: "0.95rem" }}
        >
          Consent
        </span>
        <label className="form-check" style={{ fontWeight: 400 }}>
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
          />
          <span>
            I agree to the{" "}
            <Link href="/privacy-policy/">Privacy Policy</Link>. We will never sell your data. <span className="required">*</span>
          </span>
        </label>
        {errors.consent && (
          <p className="form-msg form-msg-dark err" role="alert">
            {errors.consent}
          </p>
        )}
      </div>

      <button className="btn" type="submit" style={{ width: "100%", justifyContent: "center" }}>
        <i className="fa-solid fa-calendar-check" aria-hidden="true" /> Request My Free Audit
      </button>
      {submitError && (
        <p className="form-msg form-msg-dark err" role="alert">
          {submitError}
        </p>
      )}
    </form>
  );
}
