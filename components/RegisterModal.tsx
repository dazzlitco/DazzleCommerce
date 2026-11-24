"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PLATFORMS = [
  "Shopify / Shopify Plus",
  "WooCommerce",
  "Amazon Seller Central",
  "Walmart Marketplace",
  "eBay",
  "Etsy",
  "BigCommerce",
  "Magento / Adobe Commerce",
  "Not selling online yet",
];

export default function RegisterModal() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [platform, setPlatform] = useState(PLATFORMS[0]);
  const [consent, setConsent] = useState(false);
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);

  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener("open-register", onOpen);
    // No auto-open: the live homepage shows no popup on load (verified
    // 2026-11-24 rendered walkthrough). The modal opens only from the
    // footer "Get the eCommerce benchmarks" trigger.
    return () => {
      window.removeEventListener("open-register", onOpen);
    };
  }, []);

  if (!open) return null;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) {
      setMessage({ ok: false, text: "Please enter your full name." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage({ ok: false, text: "Please enter a valid work email address." });
      return;
    }
    if (!consent) {
      setMessage({ ok: false, text: "Please agree to the Privacy Policy to continue." });
      return;
    }
    try {
      const existing = JSON.parse(localStorage.getItem("dazzle-register") || "[]");
      existing.push({ name: name.trim(), company: company.trim(), email: email.trim(), platform, at: new Date().toISOString() });
      localStorage.setItem("dazzle-register", JSON.stringify(existing));
    } catch {
      // storage unavailable — still confirm
    }
    setMessage({
      ok: true,
      text: `Thanks, ${name.trim().split(" ")[0]} — your free account request is in. We will email your benchmarks to ${email.trim()}.`,
    });
  }

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" aria-label="Free account">
      <div className="modal">
        <button className="modal-close" type="button" aria-label="Close" onClick={() => setOpen(false)}>
          ✕
        </button>
        <p className="eyebrow">Free account</p>
        <h2>Get the eCommerce benchmarks other agencies charge for</h2>
        <p>
          Register for free access to our quarterly benchmark reports, the growth audit
          template we run on every new client, and the Margin Memo newsletter.
        </p>
        <ul className="check-list">
          <li>Category benchmarks: CR, AOV, CAC and repeat rate</li>
          <li>The 40-point growth audit checklist</li>
          <li>Marketplace fee and margin calculator</li>
          <li>No credit card, unsubscribe in one click</li>
        </ul>
        <form onSubmit={submit} noValidate>
          <div className="form-field">
            <label htmlFor="reg-name">
              Full name <span className="required">*</span>
            </label>
            <input
              id="reg-name"
              className="form-input"
              type="text"
              placeholder="Jordan Avery"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="reg-company">Brand / company</label>
            <input
              id="reg-company"
              className="form-input"
              type="text"
              placeholder="Your brand"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="form-field">
            <label htmlFor="reg-email">
              Work email <span className="required">*</span>
            </label>
            <input
              id="reg-email"
              className="form-input"
              type="email"
              placeholder="you@yourbrand.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-field">
            <label htmlFor="reg-platform">Primary platform</label>
            <select
              id="reg-platform"
              className="form-select"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
            >
              {PLATFORMS.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div className="form-field form-check">
            <input
              id="reg-consent"
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
            />
            <label htmlFor="reg-consent">
              Consent <span className="required">*</span> — I agree to the{" "}
              <Link href="/privacy-policy/">Privacy Policy</Link> and to receiving occasional
              emails.
            </label>
          </div>
          <button className="btn" type="submit">
            Create my free account
          </button>
          {message && (
            <p className={`form-msg form-msg-dark ${message.ok ? "ok" : "err"}`} role="status">
              {message.text}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
