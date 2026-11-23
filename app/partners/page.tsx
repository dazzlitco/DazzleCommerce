"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

// NOTE: this file is a client component because the partner application form
// needs client-side validation and a confirmation state. (A client module
// cannot export `metadata`; the page title/description from the extraction —
// "eCommerce Agency Partner Program | Dazzle Commerce" — should be added via
// a route-level metadata wrapper if the parent wants it.)
//
// Live-page note: the live /partners/ page has no in-page application form —
// its CTAs are links to /contact/, /pricing/, #become-a-partner and
// #partner-programs. The form below powers the "Become a Partner" anchor
// (#become-a-partner) in this clone so the CTA does real work instead of
// scrolling to links only. Its fields mirror the four live programs.

const faqs: Faq[] = [
  {
    q: "Who is the referral program actually a fit for?",
    a: "Consultants, fractional CMOs, accountants, 3PLs, freelance designers and developers — anyone whose clients run online stores and periodically ask who should manage or market them. There is no volume requirement. Partners who send us one good introduction a year are treated the same as partners who send us one a month.",
  },
  {
    q: "How much do partners earn, and when are they paid?",
    a: "Referral partners earn 22% of what we collect from the client for twelve months, paid monthly in arrears once the client’s invoice clears. Affiliate and creator partners earn a flat $500 per engagement that reaches month two. Agency and white-label partners do not earn a share — they buy delivery at a wholesale rate and keep the margin between that and what they bill their client.",
  },
  {
    q: "Will you contact or take over my client?",
    a: "No, and it is a contractual term rather than a promise. Agency and white-label agreements carry a 24-month non-solicitation clause covering the client and their staff. On white-label engagements we work under your brand, in your project tool, and we do not introduce ourselves as a separate vendor.",
  },
  {
    q: "What happens if you decide a referral is not a fit?",
    a: "We tell you first, with the reason — usually stage, margin structure or expectations that no agency could meet. You decide how to handle it with your client. Where we can, we point them at a better-suited option, including agencies we do not own any relationship with.",
  },
  {
    q: "Can we co-market, publish case studies or run webinars together?",
    a: "Yes, and technology partners in particular should expect to. We co-write case studies, run joint webinars and publish integration documentation. Every case study is approved by the merchant before publication, and we do not use client names or figures without written sign-off.",
  },
  {
    q: "How do white-label engagements handle reporting and client calls?",
    a: "Reporting is delivered in your template with your branding, on your reporting cycle. Our specialists can join client calls as members of your team, stay silent as observers, or skip them entirely — your call, agreed at kickoff and changeable at any point.",
  },
  {
    q: "Is there a cost or a commitment to becoming a partner?",
    a: "No fee to join and no minimum commitment in any of the four programs. Either side can end the arrangement with 30 days written notice, and referral share already earned on active clients continues to be paid for the remainder of its twelve months.",
  },
];

const badges = [
  { name: "Shopify Partner", mark: "S", note: "Partner since 2018" },
  { name: "Amazon Ads Partner", mark: "A", note: "Partner Network since 2021" },
  { name: "Google Partner", mark: "G", note: "Partner since 2019" },
  { name: "Meta Business Partner", mark: "M", note: "Verified annually" },
  { name: "Microsoft Advertising Partner", mark: "Mi", note: "Verified annually" },
  { name: "LinkedIn Marketing Partner", mark: "in", note: "Verified annually" },
];

const programs = [
  {
    name: "Referral Partner",
    audience:
      "For consultants, fractional CMOs, accountants and anyone whose clients keep asking “who should run our store?”",
    headline: "22% of collected revenue for 12 months",
    bullets: [
      "You make a warm intro; we take it from there",
      "22% of everything we collect, paid monthly for 12 months",
      "No minimum volume and no exclusivity clause",
      "You see the scope and the reporting your client sees",
    ],
    cta: "Refer a client",
    href: "/contact/",
  },
  {
    name: "Agency & White-Label Partner",
    audience:
      "For brand studios, web shops and marketing agencies who win eCommerce work but do not want a delivery bench for it.",
    headline: "Wholesale rate card, your brand on the front",
    bullets: [
      "Delivery under your logo, in your project tool, on your timeline",
      "Wholesale pricing so your margin stays yours",
      "Named specialists, not a rotating pool of juniors",
      "We never approach your client directly — contractually",
    ],
    cta: "Request the rate card",
    href: "/contact/",
  },
  {
    name: "Technology & App Partner",
    audience:
      "For SaaS platforms, apps and 3PLs who need a certified implementation team their merchants can be handed to.",
    headline: "Co-marketing and implementation coverage",
    bullets: [
      "Certified implementation and migration support for your merchants",
      "Joint case studies, webinars and integration documentation",
      "Structured product feedback from live merchant accounts",
      "Listed as an implementation partner in your directory",
    ],
    cta: "Talk integrations",
    href: "/contact/",
  },
  {
    name: "Affiliate & Creator Partner",
    audience:
      "For newsletter writers, course creators, YouTubers and community operators with an audience of store owners.",
    headline: "$500 per qualified engagement + bonuses",
    bullets: [
      "$500 for every engagement that reaches month two",
      "Tracked links, a live dashboard and monthly payouts",
      "Co-written content and data we have not published elsewhere",
      "Full disclosure required — see our affiliate disclaimer",
    ],
    cta: "Join the program",
    href: "/affiliate-disclaimer/",
  },
];

const whyPartner = [
  {
    title: "We will not poach your client",
    body: "Every agency and white-label agreement carries a non-solicitation clause that runs 24 months past the last invoice. We have never breached one, and we will put it in writing before you send us a name.",
  },
  {
    title: "Named people, not a pool",
    body: "Your account gets the same strategist and specialists every month. You will know their names, see them on calls, and reach them in the shared channel without going through an account manager first.",
  },
  {
    title: "Payouts you can audit",
    body: "Referral share is calculated on revenue we actually collected, shown line by line in a monthly statement. If a client churns or short-pays, you see exactly why the number moved.",
  },
  {
    title: "A 48-hour clock on every intro",
    body: "Referrals get a first call within two business days. You get told what happened either way — scoped, deferred or declined — so you are never the last to know about your own introduction.",
  },
  {
    title: "Six disciplines under one roof",
    body: "Store management, SEO, paid media, CRO, retention and development sit in one team. You are not stitching four vendors together on your client’s behalf.",
  },
  {
    title: "We say no in front of you",
    body: "If a referral is not a fit — wrong stage, wrong margin, wrong expectations — we tell you before we tell them, with the reasoning. Bad-fit engagements cost you more reputation than they earn us fees.",
  },
];

const stack = [
  {
    group: "Store platforms",
    tools: ["Shopify & Shopify Plus", "BigCommerce", "WooCommerce", "Magento / Adobe Commerce"],
  },
  {
    group: "Marketplaces",
    tools: ["Amazon Seller & Vendor Central", "Walmart Marketplace", "eBay", "Etsy"],
  },
  {
    group: "Ads & analytics",
    tools: ["Google Ads & GA4", "Meta Ads Manager", "Amazon Ads", "Microsoft Advertising"],
  },
  {
    group: "Email & retention",
    tools: ["Klaviyo", "Attentive", "Postscript", "Yotpo"],
  },
  {
    group: "CRO & testing",
    tools: ["Shopify native A/B", "Hotjar", "Microsoft Clarity", "Convert"],
  },
  {
    group: "SEO & data",
    tools: ["Ahrefs & Semrush", "Screaming Frog", "Google Search Console", "Looker Studio"],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Intro call",
    body: "Thirty minutes. We map what you sell, who you sell it to, and where our work would sit next to yours. If there is no overlap we say so on that call rather than scheduling a second one.",
  },
  {
    num: "02",
    title: "Terms in writing",
    body: "Program, rate, payment timing, non-solicitation and cancellation, all on two pages. Nothing is verbal and nothing is retroactive.",
  },
  {
    num: "03",
    title: "Enablement pack",
    body: "Scope templates, the qualifying questions we use, pricing bands, current case studies and the objections you will hear. You should be able to answer a client without calling us.",
  },
  {
    num: "04",
    title: "First engagement",
    body: "Your referral gets a call within 48 hours and a scope within five business days. You are copied on the scope and can join the kickoff.",
  },
  {
    num: "05",
    title: "Statements and reviews",
    body: "Monthly statements with the collected revenue behind every payout, and a quarterly review of what converted, what stalled and what we should stop sending each other.",
  },
];

const commitments = [
  "We will not solicit your clients. Non-solicitation runs 24 months past the final invoice, on every agency and white-label agreement.",
  "Your referral hears from us in 48 hours. And you hear the outcome, whether we scoped it, deferred it or turned it down.",
  "Payouts are calculated on collected revenue. Monthly statements show the invoices behind the number, not just the number.",
  "No exclusivity, no minimums, no lock-in. Either side can end the arrangement with 30 days notice and no clawback on earned share.",
  "We decline bad-fit referrals openly. You get the reasoning before your client does, so you are never contradicted in front of them.",
  "Your data stays yours. Client lists, pricing and scope documents are never used for our own outbound. Ever.",
];

const programOptions = [
  "Referral Partner",
  "Agency & White-Label Partner",
  "Technology & App Partner",
  "Affiliate & Creator Partner",
  "Not sure yet — help me choose",
];

type FormState = {
  name: string;
  company: string;
  email: string;
  program: string;
  message: string;
  consent: boolean;
};

const emptyForm: FormState = {
  name: "",
  company: "",
  email: "",
  program: programOptions[0],
  message: "",
  consent: false,
};

export default function PartnersPage() {
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.company.trim()) next.company = "Please enter your company or brand.";
    if (!form.email.trim()) {
      next.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "That email address does not look right — please check it.";
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
      const existing = JSON.parse(localStorage.getItem("dazzle-partner-enquiry") || "[]");
      existing.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem("dazzle-partner-enquiry", JSON.stringify(existing));
      setSubmitted(true);
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
      {/* 1. Hero */}
      <section className="hero" id="partners-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Partnership Program</p>
              <h1>Partnerships That Send Work Both Ways</h1>
              <p className="lead">
                We partner with agencies, platforms, consultants and app developers who serve
                online retailers but do not want to build an eCommerce delivery team. You keep
                the relationship. We do the work, or we send the work to you. Either way it is
                documented, revenue-shared and referenceable.
              </p>
              <div className="btn-row">
                <Link className="btn" href="#become-a-partner">
                  Become a Partner
                </Link>
                <Link className="btn btn-outline" href="#partner-programs">
                  See Partner Programs
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/partners-hero.webp"
                alt="Two people shaking hands on a partnership agreement"
                width={1600}
                height={1100}
                priority
              />
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>40+</strong>
              <span>Active partners</span>
            </div>
            <div className="stat">
              <strong>22%</strong>
              <span>Referral share</span>
            </div>
            <div className="stat">
              <strong>9 yrs</strong>
              <span>Operating history</span>
            </div>
            <div className="stat">
              <strong>48 hrs</strong>
              <span>Referral response</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Certified & Badged */}
      <section className="section" id="platform-partners">
        <div className="container">
          <p className="eyebrow">Certified &amp; Badged</p>
          <h2>The platforms we are accountable to</h2>
          <p className="lead">
            Badges are not decoration. Each one carries spend thresholds, certification exams
            and account reviews we have to keep passing. If a platform revokes a badge, it
            comes off this page the same week.
          </p>
          <div className="card-grid">
            {badges.map((b) => (
              <div className="card platform-card" key={b.name}>
                <span
                  aria-hidden="true"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "var(--bg-soft)",
                    color: "var(--blue)",
                    fontWeight: 800,
                    fontSize: "1.25rem",
                    marginBottom: "12px",
                  }}
                >
                  {b.mark}
                </span>
                <h3 className="platform-name">{b.name}</h3>
                <p>{b.note}</p>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--muted)", marginTop: "24px" }}>
            Partner status is verified annually. Shopify Partner since 2018 · Google Partner
            since 2019 · Amazon Ads Partner Network since 2021.
          </p>
        </div>
      </section>

      {/* 3. Four Ways In — Partnership programs */}
      <section className="section section-soft" id="partner-programs">
        <div className="container">
          <p className="eyebrow">Four Ways In</p>
          <h2>Partnership programs</h2>
          <p className="lead">
            Pick the one that matches how you already make money. Terms are written down
            before anything is signed, and every program is cancellable with 30 days notice.
          </p>
          <div className="card-grid card-grid-2">
            {programs.map((p) => (
              <article className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.audience}</p>
                <h4 style={{ color: "var(--blue)", margin: "1rem 0 0.75rem" }}>{p.headline}</h4>
                <ul className="check-list" style={{ margin: "0 0 1.25rem" }}>
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link className="btn btn-outline" href={p.href}>
                  {p.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Partner With Us */}
      <section className="section" id="why-partner">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Why Partner With Us</p>
              <h2>What you get that a referral fee does not cover</h2>
              <p>
                Most partner programs are a commission rate and a contact form. These are the
                six things partners tell us actually mattered once work started moving.
              </p>
            </div>
            <div className="split-img">
              <Image
                src="/images/partners-why.webp"
                alt="Dazzle Commerce team and a partner reviewing client work together"
                width={1920}
                height={1280}
              />
            </div>
          </div>
          <div className="card-grid">
            {whyPartner.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Working Stack */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Working Stack</p>
          <h2>The tools we are in every day</h2>
          <p className="lead">
            If your product is on this list, an integration conversation is short. If it is
            not, tell us what it does and we will say honestly whether our clients would use
            it.
          </p>
          <div className="card-grid">
            {stack.map((s) => (
              <article className="card" key={s.group}>
                <h3>{s.group}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "0.75rem 0 0" }}>
                  {s.tools.map((t) => (
                    <li
                      key={t}
                      style={{
                        padding: "0.35rem 0",
                        borderBottom: "1px solid var(--line)",
                        color: "var(--muted)",
                      }}
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Process */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">The Process</p>
              <h2>How a partnership actually starts</h2>
              <p>
                Five steps from first call to first statement. Most partners are enabled and
                taking referrals inside three weeks.
              </p>
              {processSteps.map((s) => (
                <div key={s.num} style={{ marginTop: "1.25rem" }}>
                  <p className="card-num" style={{ fontSize: "1.4rem" }}>
                    {s.num}
                  </p>
                  <h3>{s.title}</h3>
                  <p style={{ color: "var(--muted)" }}>{s.body}</p>
                </div>
              ))}
            </div>
            <div className="split-img">
              <Image
                src="/images/partners-process.webp"
                alt="A Dazzle Commerce strategist on a video call with a partner agency"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Side of It */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Our Side of It</p>
          <h2>What we commit to, in writing</h2>
          <p className="lead">
            A partnership is only worth having if the obligations run both ways. These six
            are in every agreement we sign, and every one of them is enforceable rather than
            aspirational.
          </p>
          <ul className="check-list">
            {commitments.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <div className="btn-row">
            <Link className="btn btn-outline" href="/contact/">
              Read our full terms
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Partner FAQs */}
      <section className="section" id="partner-faqs">
        <div className="container center">
          <p className="eyebrow">Partner FAQs</p>
          <h2>Questions partners ask before signing</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            Seven things worth settling before the first introduction. Anything else, the
            intro call covers.
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 9. Final CTA + Become a Partner form */}
      <section className="section section-blue final-cta" id="become-a-partner">
        <div className="container">
          <div className="split" style={{ textAlign: "left", alignItems: "start" }}>
            <div>
              <h2>Let’s find out if this is worth both our time</h2>
              <p style={{ color: "#c6d2e4", maxWidth: "560px" }}>
                Thirty minutes, no deck. Tell us who your clients are and what they keep
                asking for, and we will tell you honestly which of the four programs fits —
                or that none of them do.
              </p>
              <div className="btn-row">
                <Link className="btn btn-light" href="/contact/">
                  Book a partner call
                </Link>
                <Link
                  className="btn"
                  href="/pricing/"
                  style={{ background: "transparent", borderColor: "#fff" }}
                >
                  See our pricing
                </Link>
              </div>
              <p style={{ color: "#c6d2e4", marginTop: "1.5rem" }}>
                Prefer email?{" "}
                <a href="mailto:partners@dazzlecommerce.com" style={{ color: "#fff" }}>
                  partners@dazzlecommerce.com
                </a>{" "}
                — answered within one business day.
              </p>
              <ul className="final-checks" style={{ justifyContent: "flex-start" }}>
                <li>22% referral share</li>
                <li>No fee to join</li>
                <li>30 days notice to cancel</li>
              </ul>
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
                    Thank you, {form.name.split(" ")[0] || "there"} — your partner request is
                    in.
                  </h2>
                  <p style={{ color: "var(--muted)" }}>
                    We will reply to <strong>{form.email}</strong> within one business day
                    to book your thirty-minute intro call about the {form.program} program.
                    Your request has been saved.
                  </p>
                  <p style={{ color: "var(--muted)" }}>
                    Prefer email? Write to{" "}
                    <a href="mailto:partners@dazzlecommerce.com">
                      partners@dazzlecommerce.com
                    </a>
                    .
                  </p>
                  <div className="btn-row">
                    <button className="btn" type="button" onClick={resetForm}>
                      Send another request
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  className="card"
                  style={{ background: "#fff", textAlign: "left" }}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="Become a Partner"
                >
                  <h2 style={{ fontSize: "1.5rem" }}>Become a Partner</h2>
                  <p style={{ color: "var(--muted)" }}>
                    Tell us about your business and which program fits — we reply within one
                    business day.
                  </p>

                  <div className="form-field">
                    <label htmlFor="partner-name">
                      Full name <span className="required">*</span>
                    </label>
                    <input
                      id="partner-name"
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
                    <label htmlFor="partner-company">
                      Company / brand <span className="required">*</span>
                    </label>
                    <input
                      id="partner-company"
                      className="form-input"
                      type="text"
                      autoComplete="organization"
                      placeholder="Your agency or platform"
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      aria-invalid={Boolean(errors.company)}
                    />
                    {errors.company && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="partner-email">
                      Work email <span className="required">*</span>
                    </label>
                    <input
                      id="partner-email"
                      className="form-input"
                      type="email"
                      autoComplete="email"
                      placeholder="you@company.com"
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
                    <label htmlFor="partner-program">Partner program</label>
                    <select
                      id="partner-program"
                      className="form-select"
                      value={form.program}
                      onChange={(e) => set("program", e.target.value)}
                    >
                      {programOptions.map((o) => (
                        <option key={o} value={o}>
                          {o}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="partner-message">
                      Who are your clients, and what do they keep asking for?
                    </label>
                    <textarea
                      id="partner-message"
                      className="form-input"
                      rows={4}
                      placeholder="e.g. We are a brand studio; our Shopify clients keep asking who can run their paid media."
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      style={{ resize: "vertical" }}
                    />
                  </div>

                  <div className="form-field">
                    <label className="form-check" htmlFor="partner-consent">
                      <input
                        id="partner-consent"
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => set("consent", e.target.checked)}
                      />
                      <span>
                        I agree to the Privacy Policy and to receiving occasional emails.{" "}
                        <span className="required">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  {submitError && (
                    <p className="form-msg form-msg-dark err" role="alert">
                      {submitError}
                    </p>
                  )}

                  <button className="btn" type="submit" style={{ width: "100%", justifyContent: "center" }}>
                    Submit partner request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
