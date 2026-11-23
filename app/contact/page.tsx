"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

// NOTE: this file is a client component because the growth-audit form needs
// client-side validation, localStorage persistence and a confirmation state.
// (A client module cannot export `metadata`; the page title/description from
// the extraction — "Contact Dazzle Commerce | Book a Free Strategy Call" —
// should be added via a route-level metadata wrapper if the parent wants it.)

const faqs: Faq[] = [
  {
    q: "How quickly will someone get back to me?",
    a: "Within one business day, and usually the same day if you write before mid-afternoon Central Time. The first reply comes from a senior strategist, not a sales development rep working from a script.",
  },
  {
    q: "Is the strategy call actually free, or is it a sales call?",
    a: "It is free and it is genuinely useful. We run the audit before the call and spend the thirty minutes walking you through what we found. There is a moment at the end where we tell you what working together would look like, and if you are not interested that is the end of it.",
  },
  {
    q: "What information should I have ready?",
    a: "Read-only access to Google Analytics, your ad accounts and your marketplace seller accounts makes the audit far more valuable. If you cannot share those before the call, come anyway.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Routinely. Send yours with the enquiry, or use ours. We can have it executed before any account access is shared.",
  },
  {
    q: "Do you work with clients in other time zones?",
    a: "Yes. Roughly 40% of our clients are outside the United States. We hold call slots in UK, EU, Gulf and APAC business hours.",
  },
  {
    q: "I am not ready to hire an agency. Can I still talk to you?",
    a: "Please do. A good number of our conversations end with us telling someone to hire in-house first, fix their tracking, or wait two quarters.",
  },
];

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

const steps = [
  {
    num: "01",
    title: "We reply within one business day",
    body: "A senior strategist reads your enquiry — not a bot and not an SDR. If we are not the right fit, we will say so in that first reply.",
  },
  {
    num: "02",
    title: "We run a free growth audit",
    body: "Before the call we review your store, ad accounts and marketplace health, then score every opportunity by revenue impact.",
  },
  {
    num: "03",
    title: "You get a 30-minute strategy call",
    body: "We walk you through the findings live, tell you the three things we would fix first and roughly what each is worth.",
  },
  {
    num: "04",
    title: "You keep the audit either way",
    body: "Whether or not you hire us, the scorecard and the recommendations are yours.",
  },
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

export default function ContactPage() {
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
    if (form.phone.trim() && !/^[0-9()#&+*\-.=\s]+$/.test(form.phone.trim())) {
      next.phone = "Only numbers and phone characters (#, -, +, spaces) please.";
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

  return (
    <>
      {/* 1. Hero + Growth Audit form */}
      <section className="hero" id="form">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Contact Dazzle Commerce</p>
              <h1>Let’s Talk About Your eCommerce Growth</h1>
              <p className="lead">
                Tell us where you are stuck and we will tell you what we would do about it.
                Free audit, free 30-minute strategy call, and an honest answer about whether
                we are the right fit.
              </p>
              <div className="hero-img" style={{ marginTop: "24px" }}>
                <Image
                  src="/images/contact-hero.webp"
                  alt="A Dazzle Commerce strategist reviewing an online store dashboard with a client"
                  width={1920}
                  height={1280}
                  priority
                />
              </div>
            </div>
            <div>
              {submitted ? (
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
              ) : (
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
                        gridTemplateColumns: "1fr 1fr",
                        gap: "8px 16px",
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
                      What is the main thing you want to fix?
                    </label>
                    <textarea
                      id="contact-message"
                      className="form-input"
                      rows={5}
                      placeholder="e.g. Our Amazon sales dropped 30% after a listing suppression and we have not recovered. Shopify is flat and paid social CAC is up 40% year on year."
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      style={{ resize: "vertical", width: "100%" }}
                    />
                  </div>

                  <div className="form-field">
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
                    Request My Free Audit
                  </button>
                  {submitError && (
                    <p className="form-msg form-msg-dark err" role="alert">
                      {submitError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Contact Information */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Contact Information</p>
          <h2>Talk to a human, quickly</h2>
          <p className="lead">
            No gatekeeping, no qualification quiz before you are allowed to speak to someone
            who knows what they are talking about.
          </p>
          <div className="card-grid">
            <article className="card">
              <h3>Head Office</h3>
              <p>
                1201 Commerce Street, Suite 480
                <br />
                Austin, TX 78701, United States
              </p>
            </article>
            <article className="card">
              <h3>Phone</h3>
              <p>
                <a href="tel:+15550102400">+1 (555) 010-2400</a>
                <br />
                Mon–Fri, 9:00–18:00 CT
              </p>
            </article>
            <article className="card">
              <h3>Email</h3>
              <p>
                <a href="mailto:hello@dazzlecommerce.com">hello@dazzlecommerce.com</a>
                <br />
                New business, support and partnerships
              </p>
            </article>
            <article className="card">
              <h3>Coverage</h3>
              <p>
                Account teams across five time zones
                <br />
                US, UK, EU, Gulf and APAC business hours
              </p>
            </article>
            <article className="card">
              <h3>Serving clients in</h3>
              <p>
                United States, United Kingdom, Canada, Australia and the UAE
                <br />
                <Link href="/locations-we-serve/">See all locations we serve</Link>
              </p>
            </article>
            <article className="card">
              <h3>Prefer to book first?</h3>
              <p>
                Skip the form and grab a slot that suits you — or read what clients say
                before you decide.
                <br />
                <Link href="/book-a-strategy-call/">Book a free strategy call</Link>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3. What Happens Next */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">What Happens Next</p>
          <h2>From enquiry to answers in about a week</h2>
          <p className="lead">
            No mystery, no chasing. Here is exactly what follows after you hit submit.
          </p>
          <div className="split" style={{ marginTop: "32px" }}>
            <div className="split-img">
              <Image
                src="/images/contact-team.webp"
                alt="Dazzle Commerce specialists running a strategy call and reviewing growth charts"
                width={1920}
                height={1280}
              />
            </div>
            <div>
              {steps.map((s) => (
                <div key={s.num} style={{ marginTop: "1.25rem" }}>
                  <p className="card-num" style={{ fontSize: "1.4rem" }}>
                    {s.num}
                  </p>
                  <h3>{s.title}</h3>
                  <p style={{ color: "var(--muted)" }}>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Alternative Ways to Connect */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Alternative Ways to Connect</p>
          <h2>Forms are not for everyone</h2>
          <p className="lead">
            Pick whichever is least annoying. They all reach the same team.
          </p>
          <div className="card-grid card-grid-2">
            <article className="card">
              <h3>Book directly in the calendar</h3>
              <p>
                Skip the form and grab a slot that suits you. Available Monday to Friday,
                9:00–18:00 CT, with early and late slots for UK, EU and APAC clients.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <Link className="btn btn-outline" href="#form">
                  Choose a time
                </Link>
              </p>
            </article>
            <article className="card">
              <h3>Call us</h3>
              <p>
                Speak to someone straight away during business hours. Outside those hours
                leave a voicemail and we will call back the next working morning.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <a href="tel:+15550102400" style={{ fontWeight: 700 }}>
                  +1 (555) 010-2400
                </a>
              </p>
            </article>
            <article className="card">
              <h3>Email us</h3>
              <p>
                Prefer to write it all out? Send context, links and any numbers you can
                share and we will come back with specific questions rather than a generic
                brochure.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <a href="mailto:hello@dazzlecommerce.com" style={{ fontWeight: 700 }}>
                  hello@dazzlecommerce.com
                </a>
              </p>
            </article>
            <article className="card">
              <h3>Connect on LinkedIn</h3>
              <p>
                Follow the team for teardowns, benchmark data and the occasional unpopular
                opinion about attribution modelling.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <a
                  href="https://www.linkedin.com/company/dazzlecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 700 }}
                >
                  Visit our page
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Find Us */}
      <section className="section section-soft">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Find Us</p>
              <h2>Head office in Austin, Texas</h2>
              <p>
                Visits are by appointment — most of our work happens remotely, so let us know
                you are coming.
              </p>
              <p style={{ color: "var(--muted)" }}>
                1201 Commerce Street, Suite 480
                <br />
                Austin, TX 78701, United States
              </p>
              <div className="btn-row">
                <a
                  className="btn"
                  href="https://maps.google.com/maps?q=1201%20Commerce%20Street%2C%20Austin%2C%20TX%2078701"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
                <Link className="btn btn-outline" href="/contact/">
                  Get in touch
                </Link>
              </div>
            </div>
            <div className="split-img">
              <Image
                src="/images/contact-office.webp"
                alt="Modern office building in downtown Austin, Texas, home of the Dazzle Commerce head office"
                width={1920}
                height={1280}
              />
            </div>
          </div>
          <div
            style={{
              marginTop: "32px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "var(--shadow)",
            }}
          >
            <iframe
              title="1201 Commerce Street, Austin, TX 78701"
              aria-label="1201 Commerce Street, Austin, TX 78701"
              src="https://maps.google.com/maps?q=1201%20Commerce%20Street%2C%20Austin%2C%20TX%2078701&t=m&z=14&output=embed&iwloc=near"
              loading="lazy"
              style={{ border: 0, width: "100%", height: "420px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* 6. Contact FAQs */}
      <section className="section">
        <div className="container center">
          <p className="eyebrow">Contact FAQs</p>
          <h2>Before you get in touch</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Still deciding? Book the call anyway.</h2>
          <p className="lead">
            The audit is free, the advice is specific, and the worst outcome is that you
            leave with a prioritised list of fixes and no agency invoice.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/book-a-strategy-call/">
              Book Your Free Strategy Call
            </Link>
            <Link
              className="btn"
              href="/case-studies/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Read Case Studies First
            </Link>
          </div>
          <ul className="final-checks">
            <li>Free 30-minute call</li>
            <li>No long-term contracts</li>
            <li>Actionable audit you keep</li>
          </ul>
        </div>
      </section>
    </>
  );
}
