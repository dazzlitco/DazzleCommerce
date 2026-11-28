"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";

// NOTE: this file is a client component because the audit request form needs
// client-side validation, localStorage persistence and a confirmation state.
// (A client module cannot export `metadata`; the page title/description from
// the extraction — "Free eCommerce Audit: Store, SEO, Ads & CRO | Dazzle" /
// "A free eCommerce audit across store experience, SEO, paid media,
// conversion, retention and marketplaces, with a ranked list of what to fix
// first." — are exported by the route-level metadata wrapper in
// app/ecommerce-audit/layout.tsx.)
//
// REDO 2026-11-28 (Batch 1, page 18) against the live control DOM/CSS
// (elementor-1911, served HTML fetched 2026-11-28, 391,058 bytes). The
// walkthrough that day landed on the SEVENTEENTH A/B experiment variant
// (rewritten hero intro, deliverables, process, fit and why-us copy; a
// two-column hero, a dark-navy form panel and a pale-blue closing panel) —
// 0/16 variant strings and 17/17 control strings in the served HTML, so the
// control copy below is the extraction copy. Layouts are from the control
// DOM/CSS, not the variant: hero 55%/40% split with the 3-stat 2-column grid
// overlapping the image by 42px; scope 3-col cards; deliverables 4-col,
// process 3+2, fit 3-col, why-us 4-col icon-head cards; form 62%/33% with
// the form on a white card; closing CTA a blue gradient panel inside the
// request section. No interactive audit tool on live — none here either.
//
// NOTE: the live audit page has no interactive tool of its own — it presents
// the six disciplines, the five-step process and the request form, and points
// to the twelve-point framework published at /ecommerce-growth-assessment/.
// This page reproduces that: no self-audit scorer, no totals.

const faqs: Faq[] = [
  {
    q: "Is the audit really free?",
    a: "Yes. There is no fee, no card and no contract. We do it because a properly diagnosed prospect is a better conversation than a cold pitch, and because a reasonable share of the people we audit come back later. You keep the document and the recording either way.",
  },
  {
    q: "What access do you need?",
    a: "Read-only access to your analytics, ad accounts, store admin and any marketplace seller accounts in scope. We send one checklist and set everything up ourselves. We never ask for a password — access is granted through each platform’s own user permissions.",
  },
  {
    q: "How long does it take?",
    a: "About a week from the day access is granted: two days for setup and data, three for the review, then the ranking session and the walkthrough. The scoping call happens before any of that and takes thirty minutes.",
  },
  {
    q: "What if I do not sell on marketplaces?",
    a: "Then that discipline is out of scope and we spend the time elsewhere. The same applies to email if you have no programme, or paid media if you spend nothing. We audit what you actually run.",
  },
  {
    q: "Will you just recommend your own services?",
    a: (
      <>
        The ranked list frequently includes work we would not do — changing a
        pricing model, hiring a merchandiser, fixing a returns process. Where the
        answer is to build the capability in-house, that is what the document says.
        Read{" "}
        <a href="/blog/when-to-outsource-ecommerce-management/">
          when to outsource eCommerce management
        </a>{" "}
        for the version of that argument we published.
      </>
    ),
  },
  {
    q: "What happens after the walkthrough?",
    a: "Nothing, unless you want it to. There is no follow-up sequence and no sales cadence. If you want a proposal we will write one against the ranked list; if you want to run the work yourself, the ninety-day sequence is written so you can.",
  },
  {
    q: "Do you sign an NDA?",
    a: "Yes, gladly, and we can sign yours rather than ours. Nothing from an audit is used as a case study without written permission, and client names are never used without it.",
  },
  {
    q: "How is this different from the free audits other agencies offer?",
    a: "Most are an automated crawl plus a call. Ours is a week of specialist attention against a published framework, delivered as a written document with a ranked answer. If you have had one of the automated kind, you will know the difference within the first ten minutes of the walkthrough.",
  },
];

const heroStats = [
  { icon: "fa-solid fa-chart-column", num: "12", label: "audit points" },
  { icon: "fa-solid fa-clock", num: "5 days", label: "typical turnaround" },
  { icon: "fa-solid fa-gauge-high", num: "0", label: "cost or obligation" },
];

const symptoms = [
  "Traffic is up and revenue is not.",
  "Your ROAS looks healthy but the bank balance disagrees.",
  "Conversion has not moved in a year, despite a redesign.",
  "Marketplace sales dropped and nobody can say exactly when or why.",
  "Every proposal you receive recommends the service that agency happens to sell.",
  "You have a list of forty things to fix and no way to rank them.",
];

const disciplines = [
  {
    num: "01",
    title: "Store & UX",
    body: "The storefront experience end to end, on the devices your traffic actually uses.",
    img: "/images/ecommerce-audit-ux.webp",
    imgAlt: "Shopper using a store on a laptop while a merchandiser reviews the experience",
    checks: [
      "Navigation, search and category structure",
      "Product page standard on your top 20 SKUs",
      "Cart and checkout friction, measured on mobile",
    ],
  },
  {
    num: "02",
    title: "eCommerce SEO audit",
    body: "Whether your category layer is capturing the demand your catalogue can serve. The eCommerce SEO audit covers demand mapping, category architecture, indexation and the technical faults that cap organic revenue.",
    img: "/images/ecommerce-audit-seo.webp",
    imgAlt: "Laptop showing a search engine results page used to research category page demand",
    checks: [
      "Category and collection architecture",
      "Indexation, canonicals and crawl waste",
      "Non-branded visibility against three competitors",
    ],
  },
  {
    num: "03",
    title: "Paid media",
    body: "Account structure, feed quality and whether spend is priced against margin.",
    img: "/images/ecommerce-audit-paid.webp",
    imgAlt: "Laptop showing an advertising analytics dashboard used to manage Amazon ACoS",
    checks: [
      "Campaign segmentation by intent and margin",
      "Product feed completeness and disapprovals",
      "Break-even ROAS derived, not inherited",
    ],
  },
  {
    num: "04",
    title: "Conversion",
    body: "Where the funnel loses people, and which losses are worth the engineering.",
    img: "/images/ecommerce-audit-conversion.webp",
    imgAlt: "Shopper comparing product details on a laptop while browsing an online store",
    checks: [
      "Session-to-cart-to-order, tracked separately",
      "Delivery promise, returns and risk messaging",
      "Test history reviewed for what was actually learned",
    ],
  },
  {
    num: "05",
    title: "Email & retention",
    body: "Lifecycle coverage, and whether reported recovery survives a holdout.",
    img: "/images/ecommerce-audit-email.webp",
    imgAlt: "Laptop with glasses and payment cards representing an abandoned online checkout",
    checks: [
      "Flow coverage against stage of maturity",
      "Cart and browse sequences, timing and order",
      "Attribution windows and double counting",
    ],
  },
  {
    num: "06",
    title: "Marketplace & technology",
    body: "Account health, catalogue ownership, and the platform work underneath both.",
    img: "/images/ecommerce-audit-marketplace.webp",
    imgAlt: "Warehouse team preparing marketplace orders for dispatch",
    checks: [
      "Account health, buy box and suppression",
      "Catalogue completeness across every channel",
      "Theme, apps and template performance",
    ],
  },
];

const deliverables = [
  {
    icon: "fa-solid fa-list-ol",
    title: "A ranked constraint list",
    body: "Three to five findings ranked by revenue impact against effort, each with the evidence that identified it and the metric that will move if it is fixed.",
  },
  {
    icon: "fa-solid fa-clipboard-check",
    title: "A twelve-point scorecard",
    body: "Every point either cleared or flagged, with the threshold stated, so you can see what passed as well as what did not.",
  },
  {
    icon: "fa-solid fa-calendar-days",
    title: "A ninety-day sequence",
    body: "What to do in what order, sized in weeks, with the owner named — including the work you should do in-house rather than buy.",
  },
  {
    icon: "fa-solid fa-video",
    title: "A 45-minute walkthrough",
    body: "A live session with the specialists who did the review, recorded so the people who could not attend still get it.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Scoping call — 30 minutes",
    body: "We establish what you think the problem is, what you have already tried, and which disciplines are actually in scope. If the audit is not the right thing for you, this is where we say so.",
  },
  {
    num: "02",
    title: "Access and data — days 1 to 2",
    body: "Read-only access to analytics, ad accounts, the store admin and marketplace seller accounts. We send a single checklist; you do not have to prepare anything else.",
  },
  {
    num: "03",
    title: "The review — days 2 to 5",
    body: "Each specialist works through their discipline against the twelve points. Findings are written as they are made, with the evidence attached.",
  },
  {
    num: "04",
    title: "Ranking and sequencing — day 5",
    body: "The whole team argues the findings against each other and ranks them. This is the part that turns six reports into one answer.",
  },
  {
    num: "05",
    title: "Walkthrough — days 6 to 7",
    body: "A 45-minute session with the people who did the work. You keep the document and the recording regardless of what happens next.",
  },
];

const fitItems = [
  {
    icon: "fa-solid fa-chart-line",
    title: "Stores doing $25K to $2M a month",
    body: "Enough volume for the data to mean something, and enough at stake that ranking the work properly is worth a week.",
  },
  {
    icon: "fa-solid fa-scale-balanced",
    title: "Teams choosing between hiring and appointing",
    body: "You are about to commit to a salary or a retainer and want the constraint named before you commit to either.",
  },
  {
    icon: "fa-solid fa-arrows-rotate",
    title: "Anyone who has just inherited an account",
    body: "A new head of eCommerce, a new owner, or a team taking work back in-house after an agency relationship ended.",
  },
];

const differences = [
  {
    icon: "fa-solid fa-book-open",
    title: "The framework is published",
    body: "The twelve points we work through are on this site in full, with the thresholds. You can run the short version yourself before deciding whether to ask us.",
    link: { href: "/ecommerce-growth-assessment/", text: "twelve points we work through" },
  },
  {
    icon: "fa-solid fa-user-check",
    title: "Done by the people who would do the work",
    body: "Not by a sales engineer and not by a template. The specialist who reviews your paid media is the person who would run it.",
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "One constraint, not forty recommendations",
    body: "A scored audit lets everyone feel moderately good about a store that is failing badly on one thing. We rank instead, and we defend the ranking.",
  },
  {
    icon: "fa-solid fa-hand",
    title: "We tell you when to walk away",
    body: "If the answer is that you should hire in-house rather than appoint us, that is in the document. It costs us engagements and it is the reason people send us their friends.",
  },
];

const nextSteps = [
  {
    title: "Within one business day",
    body: "a senior strategist replies — not an SDR, and not an automated sequence.",
  },
  {
    title: "A 30-minute scoping call",
    body: "establishes what is in scope. If the audit is not right for you, we say so here.",
  },
  {
    title: "Read-only access",
    body: "is granted through each platform’s own permissions. We never ask for a password.",
  },
  {
    title: "About a week later",
    body: "you get the document, the ranked list and a recorded walkthrough.",
  },
];

const PLATFORMS = [
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
const REVENUES = [
  "Pre-launch",
  "Under $25K / month",
  "$25K - $100K / month",
  "$100K - $500K / month",
  "$500K - $2M / month",
  "$2M+ / month",
];
const BUDGETS = [
  "Under $2,500 / month",
  "$2,500 - $5,000 / month",
  "$5,000 - $10,000 / month",
  "$10,000 - $25,000 / month",
  "$25,000+ / month",
  "Not sure yet",
];
const SERVICES = [
  "eCommerce Store Management",
  "eCommerce SEO",
  "PPC & Google Shopping",
  "Amazon PPC & Marketplace",
  "Conversion Rate Optimization",
  "Email & SMS Retention",
  "Shopify / WooCommerce Development",
  "Creative & Content Production",
];

const FORM_STORAGE_KEY = "dazzle-ecommerce-audit-requests";

export default function EcommerceAuditPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    store: "",
    platform: PLATFORMS[0],
    revenue: REVENUES[0],
    budget: BUDGETS[0],
    services: [] as string[],
    fix: "",
    consent: false,
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<string, string>>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  function toggleService(service: string) {
    setForm((f) => ({
      ...f,
      services: f.services.includes(service)
        ? f.services.filter((s) => s !== service)
        : [...f.services, service],
    }));
  }

  function submitForm(e: FormEvent) {
    e.preventDefault();
    const errors: Partial<Record<string, string>> = {};
    if (!form.name.trim()) errors.name = "Please enter your full name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      errors.email = "Please enter a valid work email.";
    if (!form.store.trim()) errors.store = "Please enter your store website.";
    if (!form.fix.trim())
      errors.fix = "Please tell us the main thing you want to fix.";
    if (!form.consent) errors.consent = "Please agree to the Privacy Policy to continue.";
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      setFormError("Please fix the highlighted fields and try again.");
      return;
    }
    setFormError("");
    try {
      const existing = JSON.parse(localStorage.getItem(FORM_STORAGE_KEY) || "[]");
      existing.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem(FORM_STORAGE_KEY, JSON.stringify(existing));
    } catch {
      setFormError("Your request could not be saved in this browser. Please try again.");
      return;
    }
    setFormSubmitted(true);
  }

  return (
    <div className="ea-page">
      {/* 1. Hero — flat #F7F9FC, 55%/40% split, stats grid inside the image column */}
      <section className="hero ea-hero">
        <div className="container">
          <div className="ea-hero-split">
            <div className="ea-hero-text">
              <Pill icon="fa-solid fa-clipboard-check">Free eCommerce audit</Pill>
              <h1>Get a Free eCommerce Audit That Names Your Constraint</h1>
              <p className="lead">
                A week of senior attention across store experience, SEO, paid media, conversion,
                retention and marketplaces. You get a ranked list of what to fix first, the
                evidence behind each finding, and the order to do it in — and you keep it
                whether or not we ever work together.
              </p>
              <ul className="check-list ea-hero-checks">
                <li>Six disciplines, reviewed by the specialists who run them</li>
                <li>A named constraint, ranked — not a forty-item backlog</li>
                <li>Yours to keep, with no obligation and no lock-in</li>
              </ul>
              <div className="ea-hero-btns">
                <Link className="tm-btn tm-btn-blue" href="#audit-request">
                  <i className="fa-solid fa-calendar-days" aria-hidden="true" />
                  Request your free audit
                </Link>
                <Link className="tm-btn ea-btn-white" href="/pricing/">
                  <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  See pricing
                </Link>
              </div>
            </div>
            <div className="ea-hero-media">
              <Image
                src="/images/ecommerce-audit-hero.webp"
                alt="Senior strategists reviewing eCommerce performance charts during an audit session"
                width={1600}
                height={1000}
                priority
              />
              <div className="ea-stats">
                {heroStats.map((s) => (
                  <div className="ea-stat-card" key={s.label}>
                    <span className="ea-stat-icon">
                      <i className={s.icon} aria-hidden="true" />
                    </span>
                    <div className="ea-stat-text">
                      <h3>{s.num}</h3>
                      <p>{s.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The symptom — white; centred header; image left, text right */}
      <section className="section">
        <div className="container">
          <div className="ea-header">
            <Pill icon="fa-solid fa-triangle-exclamation" center>The symptom</Pill>
            <h2 className="ea-h2">Is your store leaving growth on the table?</h2>
            <p className="lead">
              Most stores do not stall because the strategy was wrong. They stall because
              nobody owns the operating work end to end, and the compounding tasks keep
              losing to the urgent ones. An eCommerce store audit is the cheapest way to find
              out which of those is true for you.
            </p>
          </div>
          <div className="ea-split">
            <div className="ea-split-img">
              <Image
                src="/images/ecommerce-audit-problem.webp"
                alt="Store owner reviewing sales data for an online business that has stopped growing"
                width={1600}
                height={1000}
              />
              <p className="ea-img-caption">
                The audit is a diagnosis. It is deliberately not a proposal.
              </p>
            </div>
            <div className="ea-split-text">
              <p>
                If more than two of these are true, the constraint on your business is probably
                not the thing you were about to spend money on.
              </p>
              <ul className="ea-symptom-list">
                {symptoms.map((s) => (
                  <li key={s}>
                    <i className="fa-solid fa-circle-check" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
              <p className="ea-split-closing">
                An audit exists to turn that list into one sentence:{" "}
                <strong>this is the constraint, and this is what removing it is worth.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What we audit — #F7F9FC; 3-col discipline cards */}
      <section className="section ea-soft">
        <div className="container">
          <div className="ea-header">
            <Pill icon="fa-solid fa-magnifying-glass" center>What we audit</Pill>
            <h2 className="ea-h2">Six disciplines, one ranked answer</h2>
            <p className="lead">
              Each area is reviewed by the specialist who runs it day to day — the eCommerce
              SEO site audit by the person who owns organic search, the ad account by the
              person who spends in it — then the findings are ranked against each other rather
              than reported in six separate silos. That ranking is what makes an eCommerce
              website audit useful rather than merely long.
            </p>
          </div>
          <div className="ea-scope-grid">
            {disciplines.map((d) => (
              <article className="ea-scope-card" key={d.num}>
                <Image src={d.img} alt={d.imgAlt} width={1200} height={800} />
                <p className="ea-scope-label">Discipline {d.num}</p>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <ul className="check-list check-list-blue">
                  {d.checks.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="ea-closing">
            Not every discipline applies to every store. If you do not sell on marketplaces
            we say so and spend the time elsewhere — the framework we work from is{" "}
            <Link href="/ecommerce-growth-assessment/">published in full</Link>.
          </p>
        </div>
      </section>

      {/* 4. What you receive — white; 4-col icon-head cards */}
      <section className="section">
        <div className="container">
          <div className="ea-header">
            <Pill icon="fa-solid fa-layer-group" center>What you receive</Pill>
            <h2 className="ea-h2">Four things, all of them yours</h2>
            <p className="lead">
              A written document you keep, not a slide deck we present and take away with us.
            </p>
          </div>
          <div className="ea-deliv-grid">
            {deliverables.map((d) => (
              <article className="ea-card" key={d.title}>
                <div className="ea-card-head">
                  <span className="ea-card-icon">
                    <i className={d.icon} aria-hidden="true" />
                  </span>
                  <h3>{d.title}</h3>
                </div>
                <p>{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. How it works — #F7F9FC; 3+2 numbered steps */}
      <section className="section ea-soft">
        <div className="container">
          <div className="ea-header">
            <Pill icon="fa-solid fa-layer-group" center>How it works</Pill>
            <h2 className="ea-h2">Our audit process</h2>
            <p className="lead">
              Five steps, about a week from the day access is granted. Most of the elapsed time
              is us reading, not you filling anything in.
            </p>
          </div>
          <div className="ea-process-grid">
            {processSteps.map((s) => (
              <article className="ea-process-card" key={s.num}>
                <span className="ea-step-num">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p className="ea-closing">
            No payment, no contract and no commitment at any point in this sequence.
          </p>
        </div>
      </section>

      {/* 6. Fit — white; 3-col icon-head cards + exclusion block */}
      <section className="section">
        <div className="container">
          <div className="ea-header">
            <Pill icon="fa-solid fa-layer-group" center>Fit</Pill>
            <h2 className="ea-h2">Who this audit is for</h2>
            <p className="lead">
              The audit is most useful when there is enough data to read and a real decision
              waiting on the answer.
            </p>
          </div>
          <div className="ea-fit-grid">
            {fitItems.map((f) => (
              <article className="ea-card" key={f.title}>
                <div className="ea-card-head">
                  <span className="ea-card-icon">
                    <i className={f.icon} aria-hidden="true" />
                  </span>
                  <h3>{f.title}</h3>
                </div>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
          <div className="ea-exclusion">
            <p className="ea-exclusion-label">NOT WRITTEN FOR</p>
            <p>
              Pre-launch stores with no data to read, and businesses whose unit economics do
              not work. If contribution margin after returns, carriage and fees is negative,
              no audit fixes that — pricing, product mix or cost base has to change first, and
              we will tell you so on the scoping call rather than after a week of work.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Why us — #F7F9FC; 4-col icon-head cards */}
      <section className="section ea-soft">
        <div className="container">
          <div className="ea-header">
            <Pill icon="fa-solid fa-award" center>Why us</Pill>
            <h2 className="ea-h2">Why our audit is different</h2>
            <p className="lead">Four things that are unusual, and one of them costs us work.</p>
          </div>
          <div className="ea-deliv-grid">
            {differences.map((d) => (
              <article className="ea-card" key={d.title}>
                <div className="ea-card-head">
                  <span className="ea-card-icon">
                    <i className={d.icon} aria-hidden="true" />
                  </span>
                  <h3>{d.title}</h3>
                </div>
                <p>
                  {d.link ? (
                    <>
                      The <Link href={d.link.href}>{d.link.text}</Link> are on this site in
                      full, with the thresholds. You can run the short version yourself before
                      deciding whether to ask us.
                    </>
                  ) : (
                    d.body
                  )}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Audit FAQs — white; nested accordion */}
      <section className="section">
        <div className="container">
          <div className="ea-header">
            <Pill icon="fa-solid fa-circle-question" center>Questions</Pill>
            <h2 className="ea-h2">Audit FAQs</h2>
            <p className="lead">What it costs, what we need, and what happens afterwards.</p>
          </div>
          <FaqAccordion faqs={faqs} rotateIcon />
        </div>
      </section>

      {/* 9. Request form + what happens next + closing CTA — white */}
      <section className="section ea-request" id="audit-request">
        <div className="container">
          <div className="ea-header">
            <Pill icon="fa-solid fa-flag-checkered" center>Start here</Pill>
            <h2 className="ea-h2">Request your free audit</h2>
            <p className="lead">
              Ten questions, about three minutes. A senior strategist replies within one
              business day with either a scoping call or an honest reason why the audit is not
              right for you.
            </p>
          </div>
          <div className="ea-form-row">
            <div className="ea-form-col">
              {formSubmitted ? (
                <div className="ea-form-card">
                  <h3>Request received — thank you, {form.name.split(" ")[0]}.</h3>
                  <p style={{ color: "var(--muted)" }}>
                    A senior strategist will reply to {form.email} within one business day
                    with either a scoping call or an honest reason why the audit is not right for
                    you. Your request has been saved in this browser.
                  </p>
                  <p style={{ color: "var(--muted)" }}>
                    Store: {form.store}
                    {form.platform ? ` · Platform: ${form.platform}` : ""}
                    {form.revenue ? ` · Revenue: ${form.revenue}` : ""}
                  </p>
                  <button
                    type="button"
                    className="tm-btn ea-btn-white"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form className="ea-form-card" onSubmit={submitForm} noValidate>
                  <div className="ea-form-grid">
                    <div className="form-field">
                      <label htmlFor="audit-name">
                        Full name <span className="required">*</span>
                      </label>
                      <input
                        id="audit-name"
                        className="form-input"
                        type="text"
                        placeholder="Jordan Avery"
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      />
                      {formErrors.name && (
                        <p className="form-msg form-msg-dark err">{formErrors.name}</p>
                      )}
                    </div>
                    <div className="form-field">
                      <label htmlFor="audit-email">
                        Work email <span className="required">*</span>
                      </label>
                      <input
                        id="audit-email"
                        className="form-input"
                        type="email"
                        placeholder="jordan@yourbrand.com"
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      />
                      {formErrors.email && (
                        <p className="form-msg form-msg-dark err">{formErrors.email}</p>
                      )}
                    </div>
                    <div className="form-field">
                      <label htmlFor="audit-phone">Phone</label>
                      <input
                        id="audit-phone"
                        className="form-input"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        pattern="[0-9()#&+*-=.]+"
                        title="Only numbers and phone characters (#, -, *, etc) are accepted."
                        value={form.phone}
                        onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="audit-store">
                        Store website <span className="required">*</span>
                      </label>
                      <input
                        id="audit-store"
                        className="form-input"
                        type="url"
                        placeholder="https://yourbrand.com"
                        value={form.store}
                        onChange={(e) => setForm((f) => ({ ...f, store: e.target.value }))}
                      />
                      {formErrors.store && (
                        <p className="form-msg form-msg-dark err">{formErrors.store}</p>
                      )}
                    </div>
                    <div className="form-field">
                      <label htmlFor="audit-platform">Primary platform</label>
                      <select
                        id="audit-platform"
                        className="form-select"
                        value={form.platform}
                        onChange={(e) => setForm((f) => ({ ...f, platform: e.target.value }))}
                      >
                        {PLATFORMS.map((p) => (
                          <option key={p} value={p}>
                            {p}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="form-field">
                      <label htmlFor="audit-revenue">Monthly online revenue</label>
                      <select
                        id="audit-revenue"
                        className="form-select"
                        value={form.revenue}
                        onChange={(e) => setForm((f) => ({ ...f, revenue: e.target.value }))}
                      >
                        {REVENUES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="form-field">
                    <label htmlFor="audit-budget">Monthly budget for growth</label>
                    <select
                      id="audit-budget"
                      className="form-select"
                      value={form.budget}
                      onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                    >
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <fieldset className="form-field ea-services" style={{ border: 0, padding: 0 }}>
                    <legend>Which services are you interested in?</legend>
                    <div className="ea-services-grid">
                      {SERVICES.map((s) => (
                        <label key={s} className="ea-service-option">
                          <input
                            type="checkbox"
                            checked={form.services.includes(s)}
                            onChange={() => toggleService(s)}
                          />{" "}
                          {s}
                        </label>
                      ))}
                    </div>
                  </fieldset>
                  <div className="form-field">
                    <label htmlFor="audit-fix">
                      What is the main thing you want to fix?{" "}
                      <span className="required">*</span>
                    </label>
                    <textarea
                      id="audit-fix"
                      className="form-input"
                      rows={5}
                      placeholder="e.g. Our Amazon sales dropped 30% after a listing suppression and we have not recovered. Shopify is flat and paid social CAC is up 40% year on year."
                      value={form.fix}
                      onChange={(e) => setForm((f) => ({ ...f, fix: e.target.value }))}
                    />
                    {formErrors.fix && (
                      <p className="form-msg form-msg-dark err">{formErrors.fix}</p>
                    )}
                  </div>
                  <div className="form-field">
                    <label>
                      Consent <span className="required">*</span>
                    </label>
                    <label className="form-check" style={{ fontWeight: 400 }}>
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, consent: e.target.checked }))
                        }
                      />
                      <span>
                        I agree to the <Link href="/privacy-policy/">Privacy Policy</Link>.
                        We will never sell your data.
                      </span>
                    </label>
                    {formErrors.consent && (
                      <p className="form-msg form-msg-dark err">{formErrors.consent}</p>
                    )}
                  </div>
                  {formError && <p className="form-msg form-msg-dark err">{formError}</p>}
                  <button type="submit" className="tm-btn tm-btn-blue ea-submit">
                    <i className="fa-regular fa-calendar-check" aria-hidden="true" />
                    Request my free audit
                  </button>
                </form>
              )}
            </div>
            <div className="ea-side-col">
              <div className="ea-next-card">
                <p className="ea-side-label">WHAT HAPPENS NEXT</p>
                <div className="ea-next-steps">
                  {nextSteps.map((s, i) => (
                    <div className="ea-next-step" key={s.title}>
                      <span className="ea-next-num">{i + 1}</span>
                      <p>
                        <strong>{s.title}</strong> {s.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ea-talk-card">
                <p className="ea-side-label">PREFER TO TALK FIRST?</p>
                <p>
                  If you would rather ask questions before requesting anything, the{" "}
                  <Link href="/contact/">contact page</Link> has our direct details and the same
                  form without the audit framing.
                </p>
                <p>
                  Or read the{" "}
                  <Link href="/ecommerce-growth-assessment/">twelve-point framework</Link> first
                  and run the short version yourself.
                </p>
              </div>
            </div>
          </div>

          {/* 10. Not ready yet — blue gradient panel inside the request section */}
          <div className="ea-cta-wrap">
            <div className="final-cta final-cta-blue">
              <div className="container">
                <h2>Not ready for an audit yet?</h2>
                <p className="lead">
                  Run the twelve points yourself. The framework is published in full, with every
                  threshold, and you are welcome to come back only when you have a constraint to
                  name.
                </p>
                <div className="btn-row">
                  <Link className="tm-btn tm-btn-white" href="/ecommerce-growth-assessment/">
                    <i className="fa-solid fa-calendar-days" aria-hidden="true" />
                    Read the audit guide
                  </Link>
                  <Link className="tm-btn ea-ghost" href="/ecommerce-management/">
                    See how we work
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
