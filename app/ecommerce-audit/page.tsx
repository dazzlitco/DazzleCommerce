"use client";

import { useEffect, useMemo, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

// NOTE: this file is a client component because the self-audit tool needs
// client-side state (marks, figures, ranking, result) and the audit request
// form needs client-side validation, localStorage persistence and a
// confirmation state.
// (A client module cannot export `metadata`; the page title/description from
// the extraction — "Free eCommerce Audit: Store, SEO, Ads & CRO | Dazzle" /
// "A free eCommerce audit across store experience, SEO, paid media,
// conversion, retention and marketplaces, with a ranked list of what to fix
// first." — should be added via a route-level metadata wrapper if the parent
// wants it.)
//
// NOTE: the live audit page has no interactive tool of its own — it presents
// the six disciplines, the five-step process and the request form, and points
// to the twelve-point framework published at /ecommerce-growth-assessment/.
// The self-audit tool below is the clone brief's addition: it uses exactly
// the live framework's twelve points and thresholds, and its result copy is
// the live framework page's own four outcomes ("What to do with the result
// you got"). The live framework deliberately has no score out of twelve, so
// the tool ranks flags instead of totalling them.

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
    a: "The ranked list frequently includes work we would not do — changing a pricing model, hiring a merchandiser, fixing a returns process. Where the answer is to build the capability in-house, that is what the document says.",
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
    checks: [
      "Account health, buy box and suppression",
      "Catalogue completeness across every channel",
      "Theme, apps and template performance",
    ],
  },
];

const deliverables = [
  {
    title: "A ranked constraint list",
    body: "Three to five findings ranked by revenue impact against effort, each with the evidence that identified it and the metric that will move if it is fixed.",
  },
  {
    title: "A twelve-point scorecard",
    body: "Every point either cleared or flagged, with the threshold stated, so you can see what passed as well as what did not.",
  },
  {
    title: "A ninety-day sequence",
    body: "What to do in what order, sized in weeks, with the owner named — including the work you should do in-house rather than buy.",
  },
  {
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
    title: "Stores doing $25K to $2M a month",
    body: "Enough volume for the data to mean something, and enough at stake that ranking the work properly is worth a week.",
  },
  {
    title: "Teams choosing between hiring and appointing",
    body: "You are about to commit to a salary or a retainer and want the constraint named before you commit to either.",
  },
  {
    title: "Anyone who has just inherited an account",
    body: "A new head of eCommerce, a new owner, or a team taking work back in-house after an agency relationship ended.",
  },
];

const differences = [
  {
    title: "The framework is published",
    body: "The twelve points we work through are on this site in full, with the thresholds. You can run the short version yourself before deciding whether to ask us.",
    link: { href: "/ecommerce-growth-assessment/", text: "twelve points we work through" },
  },
  {
    title: "Done by the people who would do the work",
    body: "Not by a sales engineer and not by a template. The specialist who reviews your paid media is the person who would run it.",
  },
  {
    title: "One constraint, not forty recommendations",
    body: "A scored audit lets everyone feel moderately good about a store that is failing badly on one thing. We rank instead, and we defend the ranking.",
  },
  {
    title: "We tell you when to walk away",
    body: "If the answer is that you should hire in-house rather than appoint us, that is in the document. It costs us engagements and it is the reason people send us their friends.",
  },
];

const nextSteps = [
  {
    num: "1",
    title: "Within one business day",
    body: "a senior strategist replies — not an SDR, and not an automated sequence.",
  },
  {
    num: "2",
    title: "A 30-minute scoping call",
    body: "establishes what is in scope. If the audit is not right for you, we say so here.",
  },
  {
    num: "3",
    title: "Read-only access",
    body: "is granted through each platform’s own permissions. We never ask for a password.",
  },
  {
    num: "4",
    title: "About a week later",
    body: "you get the document, the ranked list and a recorded walkthrough.",
  },
];

// The twelve points, verbatim from the published framework at
// /ecommerce-growth-assessment/ — the same framework the audit works from.
type Mark = "cleared" | "flagged" | "unknown" | "na";
type Band = "high-low" | "high-high" | "low-low" | "low-high";

const auditPoints = [
  {
    num: 1,
    discipline: "Store & experience",
    title: "Largest Contentful Paint is under 2.5 seconds on your highest-traffic template",
    threshold:
      "Threshold: 2.5s or under, on mobile. This is Google’s published “good” boundary for the metric, not our opinion. Measure field data over the last 28 days rather than a lab score, and measure the template that receives the most sessions — usually a collection or product page.",
    figureLabel: "Your LCP on that template (seconds)",
  },
  {
    num: 2,
    discipline: "Store & experience",
    title: "Mobile converts at no less than two thirds of the desktop rate",
    threshold:
      "Threshold: mobile conversion rate at 0.66× desktop or better, on comparable traffic. Some gap is normal and expected; a gap wider than a third usually means a specific broken step rather than general mobile behaviour.",
    figureLabel: "Mobile rate as a share of desktop (e.g. 0.52×)",
  },
  {
    num: 3,
    discipline: "eCommerce SEO",
    title: "Seven in ten of your top fifty non-brand demand terms have a page built to rank for them",
    threshold:
      "Threshold: 70% coverage of your top fifty non-brand terms. Export your non-brand queries, group them into the fifty clusters that describe real buying demand, then check each one has a page whose main subject is that cluster. A product that happens to mention the phrase does not count.",
    figureLabel: "Your coverage (e.g. 31 of 50)",
  },
  {
    num: 4,
    discipline: "eCommerce SEO",
    title: "Indexed URL count is within 20% of the number of pages you intend to rank",
    threshold:
      "Threshold: indexed pages no more than 1.2× intended pages. Compare Search Console’s indexed count against a list of the pages you actually want in search. A large gap almost always means crawlable filter and sort parameters have generated thousands of near-duplicates.",
    figureLabel: "Indexed pages vs intended pages",
  },
  {
    num: 5,
    discipline: "Paid media",
    title: "Bids are set against margin, not one blended return target across the whole catalogue",
    threshold:
      "Threshold: binary — either campaigns are segmented by margin tier or they are not. One return-on-spend target across a catalogue with a three-to-one margin spread guarantees you overpay for low-margin products and underspend on high.",
    figureLabel: "How many margin tiers do you bid against?",
  },
  {
    num: 6,
    discipline: "Paid media",
    title: "Feed disapprovals are under 2% and matching attributes are populated on 95% of active SKUs",
    threshold:
      "Threshold: under 2% disapproved, 95%+ populated on GTIN, brand, condition and variant attributes. Read it from your Merchant Center diagnostics rather than your platform’s own report.",
    figureLabel: "Disapproval % and populated %",
  },
  {
    num: 7,
    discipline: "Conversion",
    title: "Checkout abandonment is at or below 70.2%",
    threshold:
      "Threshold: 70.22%, the published average across 49 studies. Measure sessions that reach the first checkout step against completed orders — not basket additions, which produces a much worse number and a false alarm. Being at the average is a clear, not a triumph.",
    figureLabel: "Your checkout abandonment %",
  },
  {
    num: 8,
    discipline: "Conversion",
    title: "Total cost including delivery is visible before the final checkout step",
    threshold:
      "Threshold: binary — the full figure is shown early, or it is not. Unexpected extra cost at checkout is the most frequently stated reason people abandon, ahead of price itself.",
    figureLabel: "Where is the full cost first shown?",
  },
  {
    num: 9,
    discipline: "Email & retention",
    title: "At least four of the five core lifecycle flows are live and sending",
    threshold:
      "Threshold: 4 of 5 — welcome, browse abandonment, cart abandonment, post-purchase and win-back or replenishment. Live means sending to the segment it was built for, not built and paused.",
    figureLabel: "How many of the five are live?",
  },
  {
    num: 10,
    discipline: "Email & retention",
    title: "Recovery revenue is measured against a holdout, not attributed by last click",
    threshold:
      "Threshold: binary — a holdout group exists, or this is flagged. Hold back 5 to 10% of each flow’s audience and compare. Without it, every order a customer would have placed anyway gets credited to the email that happened to arrive first.",
    figureLabel: "Holdout size (e.g. 10% of each flow)",
  },
  {
    num: 11,
    discipline: "Marketplace & reporting",
    title: "You control your own listings, and variations reflect real product differences",
    threshold:
      "Threshold: binary — brand registry or equivalent control, a written pricing policy covering resellers, and no unattended repricer. Open your three best-selling parent listings and confirm every child is genuinely the same product in a different size or colour.",
    figureLabel: "Do you sell on marketplaces? (mark N/A if not)",
  },
  {
    num: 12,
    discipline: "Marketplace & reporting",
    title: "One report shows contribution margin per order, including carriage, returns and fees",
    threshold:
      "Threshold: binary — the view exists and somebody reads it monthly. Per order, not per channel. Carriage, packaging, returns, marketplace fees and marketing cost in one place. If you fail only one point in this framework, hope it is not this one.",
    figureLabel: "Does the view exist, and who reads it?",
  },
];

const BAND_LABELS: Record<Band, string> = {
  "high-low": "High impact · low effort",
  "high-high": "High impact · high effort",
  "low-low": "Low impact · low effort",
  "low-high": "Low impact · high effort",
};
const BAND_ORDER: Band[] = ["high-low", "high-high", "low-low", "low-high"];

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

const TOOL_STORAGE_KEY = "dazzle-ecommerce-audit-self-audit";
const FORM_STORAGE_KEY = "dazzle-ecommerce-audit-requests";

export default function EcommerceAuditPage() {
  const [marks, setMarks] = useState<Partial<Record<number, Mark>>>({});
  const [figures, setFigures] = useState<Partial<Record<number, string>>>({});
  const [bands, setBands] = useState<Partial<Record<number, Band>>>({});
  const [showResult, setShowResult] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    store: "",
    platform: "",
    revenue: "",
    budget: "",
    services: [] as string[],
    fix: "",
    consent: false,
  });
  const [formErrors, setFormErrors] = useState<Partial<Record<string, string>>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState("");

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(TOOL_STORAGE_KEY) || "null");
      if (saved) {
        if (saved.marks) setMarks(saved.marks);
        if (saved.figures) setFigures(saved.figures);
        if (saved.bands) setBands(saved.bands);
      }
    } catch {
      // Saved self-audit could not be read; start blank.
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        TOOL_STORAGE_KEY,
        JSON.stringify({ marks, figures, bands })
      );
    } catch {
      // Storage unavailable; the tool still works for this visit.
    }
  }, [marks, figures, bands]);

  const answered = Object.keys(marks).length;
  const flaggedNums = auditPoints
    .filter((p) => marks[p.num] === "flagged" || marks[p.num] === "unknown")
    .map((p) => p.num);
  const unknownCount = auditPoints.filter((p) => marks[p.num] === "unknown").length;
  const clearedCount = auditPoints.filter((p) => marks[p.num] === "cleared").length;

  // The live framework ranks flags, it does not total them. Unknowns rank as
  // flags, not as passes. Flags are ordered by their impact/effort band.
  const ranked = useMemo(() => {
    const flagged = auditPoints.filter((p) => flaggedNums.includes(p.num));
    return [...flagged].sort((a, b) => {
      const ba = bands[a.num] || "high-high";
      const bb = bands[b.num] || "high-high";
      return BAND_ORDER.indexOf(ba) - BAND_ORDER.indexOf(bb);
    });
  }, [flaggedNums, bands]);

  const outcome = useMemo(() => {
    if (flaggedNums.length === 0) return "none";
    if (unknownCount >= 3 || flaggedNums.length >= 6) return "many";
    if (flaggedNums.length >= 3) return "some";
    return "few";
  }, [flaggedNums, unknownCount]);

  function setMark(num: number, value: Mark) {
    setMarks((m) => ({ ...m, [num]: value }));
    setShowResult(false);
  }

  function resetTool() {
    setMarks({});
    setFigures({});
    setBands({});
    setShowResult(false);
    try {
      localStorage.removeItem(TOOL_STORAGE_KEY);
    } catch {
      // Nothing to clear.
    }
  }

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
    if (!form.platform) errors.platform = "Please choose your primary platform.";
    if (!form.revenue) errors.revenue = "Please choose your monthly online revenue.";
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
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Free eCommerce audit</p>
              <h1>Get a Free eCommerce Audit That Names Your Constraint</h1>
              <p className="lead">
                A week of senior attention across store experience, SEO, paid media, conversion,
                retention and marketplaces. You get a ranked list of what to fix first, the
                evidence behind each finding, and the order to do it in — and you keep it
                whether or not we ever work together.
              </p>
              <ul className="check-list">
                <li>Six disciplines, reviewed by the specialists who run them</li>
                <li>A named constraint, ranked — not a forty-item backlog</li>
                <li>Yours to keep, with no obligation and no lock-in</li>
              </ul>
              <div className="btn-row">
                <Link className="btn" href="#audit-request">
                  Request your free audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/ecommerce-audit-hero.webp"
                alt="Senior strategists reviewing eCommerce performance charts during an audit session"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>12</strong>
              <span>audit points</span>
            </div>
            <div className="stat">
              <strong>5 days</strong>
              <span>typical turnaround</span>
            </div>
            <div className="stat">
              <strong>0</strong>
              <span>cost or obligation</span>
            </div>
            <div className="stat">
              <strong>45 min</strong>
              <span>recorded walkthrough</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The symptom */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">The symptom</p>
              <h2>Is your store leaving growth on the table?</h2>
              <p>
                Most stores do not stall because the strategy was wrong. They stall because
                nobody owns the operating work end to end, and the compounding tasks keep
                losing to the urgent ones. An eCommerce store audit is the cheapest way to find
                out which of those is true for you.
              </p>
              <p>The audit is a diagnosis. It is deliberately not a proposal.</p>
              <p>
                If more than two of these are true, the constraint on your business is probably
                not the thing you were about to spend money on.
              </p>
              <ul className="check-list">
                {symptoms.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p>
                An audit exists to turn that list into one sentence:{" "}
                <strong>this is the constraint, and this is what removing it is worth.</strong>
              </p>
            </div>
            <div className="split-img">
              <Image
                src="/images/ecommerce-audit-problem.webp"
                alt="Store owner reviewing sales data for an online business that has stopped growing"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Run the twelve points yourself — interactive self-audit */}
      <section className="section section-soft" id="self-audit">
        <div className="container">
          <p className="eyebrow">Run it yourself first</p>
          <h2>Run the twelve points yourself</h2>
          <p className="lead">
            The framework is published in full, with every threshold. Mark each point
            against its threshold — Cleared, Flagged or Unknown — and write down the actual
            figure next to it, not just the flag. There is deliberately no partial credit
            and no weighting, and we do not add the marks up into a score out of twelve.
            Unknowns count as flagged when you rank, not as cleared.
          </p>
          <p style={{ color: "var(--muted)" }}>
            {answered} of 12 points marked · {clearedCount} cleared · {flaggedNums.length}{" "}
            flagged or unknown
          </p>
          <div style={{ display: "grid", gap: "16px", marginTop: "24px" }}>
            {auditPoints.map((p) => (
              <article className="card" key={p.num}>
                <p className="eyebrow" style={{ marginBottom: "0.25rem" }}>
                  Point {p.num} · {p.discipline}
                </p>
                <h3>{p.title}</h3>
                <p>{p.threshold}</p>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    margin: "12px 0",
                  }}
                >
                  {(
                    [
                      ["cleared", "Cleared"],
                      ["flagged", "Flagged"],
                      ["unknown", "Unknown"],
                      ["na", "Not applicable"],
                    ] as [Mark, string][]
                  ).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      className={marks[p.num] === value ? "btn" : "btn btn-outline"}
                      style={{ padding: "0.5rem 1.1rem", fontSize: "0.95rem" }}
                      aria-pressed={marks[p.num] === value}
                      onClick={() => setMark(p.num, value)}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                <div className="form-field">
                  <label htmlFor={`figure-${p.num}`}>{p.figureLabel}</label>
                  <input
                    id={`figure-${p.num}`}
                    className="form-input"
                    type="text"
                    value={figures[p.num] || ""}
                    onChange={(e) =>
                      setFigures((f) => ({ ...f, [p.num]: e.target.value }))
                    }
                    placeholder="Write down the actual figure"
                  />
                </div>
                {(marks[p.num] === "flagged" || marks[p.num] === "unknown") && (
                  <div className="form-field">
                    <label htmlFor={`band-${p.num}`}>
                      Rank this flag — impact against effort
                    </label>
                    <select
                      id={`band-${p.num}`}
                      className="form-select"
                      value={bands[p.num] || ""}
                      onChange={(e) =>
                        setBands((b) => ({
                          ...b,
                          [p.num]: e.target.value as Band,
                        }))
                      }
                    >
                      <option value="">Choose a band…</option>
                      {(Object.keys(BAND_LABELS) as Band[]).map((b) => (
                        <option key={b} value={b}>
                          {BAND_LABELS[b]}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              </article>
            ))}
          </div>
          <div className="btn-row">
            <button
              type="button"
              className="btn"
              disabled={answered === 0}
              onClick={() => setShowResult(true)}
            >
              Rank my flags
            </button>
            <button type="button" className="btn btn-outline" onClick={resetTool}>
              Start again
            </button>
          </div>
          {showResult && (
            <div className="card" style={{ marginTop: "24px" }}>
              <h3>Your ranked constraint list</h3>
              {flaggedNums.length === 0 ? (
                <>
                  <p style={{ color: "var(--muted)" }}>
                    Nothing flagged. Twelve clears means the thresholds were read generously.
                    Go back to the points you cleared from memory and measure them properly.
                  </p>
                  <p style={{ color: "var(--muted)" }}>
                    If your assessment comes back with nothing flagged, it was marked too
                    generously. We have never run this on a live store and found twelve clears.
                  </p>
                </>
              ) : (
                <>
                  <p style={{ color: "var(--muted)" }}>
                    Do not add it up. Rank it. The output is not a score — it is an ordered
                    list, and only the top item matters this quarter. Unknowns rank as flags,
                    not as passes.
                  </p>
                  <ol>
                    {ranked.map((p, i) => (
                      <li key={p.num} style={{ marginBottom: "0.75rem" }}>
                        <strong>
                          {i + 1}. Point {p.num} — {p.title}
                        </strong>
                        <br />
                        <span style={{ color: "var(--muted)" }}>
                          {marks[p.num] === "unknown" ? "Unknown — counts as flagged" : "Flagged"}
                          {bands[p.num] ? ` · ${BAND_LABELS[bands[p.num] as Band]}` : " · band not chosen yet"}
                          {figures[p.num] ? ` · figure: ${figures[p.num]}` : ""}
                        </span>
                      </li>
                    ))}
                  </ol>
                  {outcome === "few" && (
                    <p>
                      <strong>One or two flags — fix it in-house and keep the money.</strong>{" "}
                      A constraint you can name and size does not need an agency.
                    </p>
                  )}
                  {outcome === "some" && (
                    <p>
                      <strong>Three to five flags — sequence it before you spend.</strong>{" "}
                      Enough flags that order matters more than effort. Read how we sequence a
                      quarter, then decide whether you want help running it or just the plan.{" "}
                      <Link href="/how-we-work/">See how we work</Link>
                    </p>
                  )}
                  {outcome === "many" && (
                    <p>
                      <strong>Six or more, or mostly unknown — have somebody run it properly.</strong>{" "}
                      Six flags usually means the reporting underneath is not trustworthy rather
                      than that six things are broken. That is what the free audit establishes
                      first. <Link href="#audit-request">Request the free audit</Link>
                    </p>
                  )}
                  <p style={{ color: "var(--muted)" }}>
                    The full framework, with every threshold and the four impact-against-effort
                    bands, is published at{" "}
                    <Link href="/ecommerce-growth-assessment/">
                      /ecommerce-growth-assessment/
                    </Link>
                    .
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </section>

      {/* 4. What we audit */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">What we audit</p>
          <h2>Six disciplines, one ranked answer</h2>
          <p className="lead">
            Each area is reviewed by the specialist who runs it day to day — the eCommerce
            SEO site audit by the person who owns organic search, the ad account by the
            person who spends in it — then the findings are ranked against each other rather
            than reported in six separate silos. That ranking is what makes an eCommerce
            website audit useful rather than merely long.
          </p>
          <div className="split" style={{ marginTop: "32px" }}>
            <div className="split-img">
              <Image
                src="/images/ecommerce-audit-ux.webp"
                alt="Shopper using a store on a laptop while a merchandiser reviews the experience"
                width={1920}
                height={1280}
              />
            </div>
            <div className="split-img">
              <Image
                src="/images/ecommerce-audit-report.webp"
                alt="A printed audit report and scorecard with charts beside a laptop showing an eCommerce analytics dashboard"
                width={1920}
                height={1280}
              />
            </div>
          </div>
          <div className="card-grid">
            {disciplines.map((d) => (
              <article className="card" key={d.num}>
                <p className="card-num">Discipline {d.num}</p>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <ul className="check-list" style={{ marginBottom: 0 }}>
                  {d.checks.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "24px", color: "var(--muted)" }}>
            Not every discipline applies to every store. If you do not sell on marketplaces
            we say so and spend the time elsewhere — the framework we work from is{" "}
            <Link href="/ecommerce-growth-assessment/">published in full</Link>.
          </p>
        </div>
      </section>

      {/* 5. What you receive */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">What you receive</p>
          <h2>Four things, all of them yours</h2>
          <p className="lead">
            A written document you keep, not a slide deck we present and take away with us.
          </p>
          <div className="card-grid card-grid-2">
            {deliverables.map((d) => (
              <article className="card" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How it works */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2>Our audit process</h2>
          <p className="lead">
            Five steps, about a week from the day access is granted. Most of the elapsed time
            is us reading, not you filling anything in.
          </p>
          <div className="card-grid">
            {processSteps.map((s) => (
              <article className="card" key={s.num}>
                <p className="card-num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "24px" }}>
            <strong>No payment, no contract and no commitment at any point in this sequence.</strong>
          </p>
        </div>
      </section>

      {/* 7. Fit */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Fit</p>
          <h2>Who this audit is for</h2>
          <p className="lead">
            The audit is most useful when there is enough data to read and a real decision
            waiting on the answer.
          </p>
          <div className="card-grid">
            {fitItems.map((f) => (
              <article className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
          <div className="card" style={{ marginTop: "20px" }}>
            <h3>NOT WRITTEN FOR</h3>
            <p>
              Pre-launch stores with no data to read, and businesses whose unit economics do
              not work. If contribution margin after returns, carriage and fees is negative,
              no audit fixes that — pricing, product mix or cost base has to change first, and
              we will tell you so on the scoping call rather than after a week of work.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Why us */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Why us</p>
          <h2>Why our audit is different</h2>
          <p className="lead">Four things that are unusual, and one of them costs us work.</p>
          <div className="card-grid card-grid-2">
            {differences.map((d) => (
              <article className="card" key={d.title}>
                <h3>{d.title}</h3>
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

      {/* 9. FAQs */}
      <section className="section section-soft">
        <div className="container center">
          <p className="eyebrow">Questions</p>
          <h2>Audit FAQs</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            What it costs, what we need, and what happens afterwards.
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 10. Request form */}
      <section className="section" id="audit-request">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Start here</p>
              <h2>Request your free audit</h2>
              <p className="lead">
                Ten questions, about three minutes. A senior strategist replies within one
                business day with either a scoping call or an honest reason the audit is not
                right for you.
              </p>
              <h3 style={{ marginTop: "2rem" }}>WHAT HAPPENS NEXT</h3>
              {nextSteps.map((s) => (
                <div key={s.num} style={{ marginTop: "1rem" }}>
                  <p className="card-num" style={{ fontSize: "1.4rem" }}>
                    {s.num}
                  </p>
                  <h3>{s.title}</h3>
                  <p style={{ color: "var(--muted)" }}>{s.body}</p>
                </div>
              ))}
              <h3 style={{ marginTop: "2rem" }}>PREFER TO TALK FIRST?</h3>
              <p style={{ color: "var(--muted)" }}>
                If you would rather ask questions before requesting anything, the{" "}
                <Link href="/contact/">contact page</Link> has our direct details and the same
                form without the audit framing.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Or read the{" "}
                <Link href="/ecommerce-growth-assessment/">twelve-point framework</Link> first
                and run the short version yourself.
              </p>
            </div>
            <div>
              {formSubmitted ? (
                <div className="card">
                  <h3>Request received — thank you, {form.name.split(" ")[0]}.</h3>
                  <p style={{ color: "var(--muted)" }}>
                    A senior strategist will reply to {form.email} within one business day
                    with either a scoping call or an honest reason the audit is not right for
                    you. Your request has been saved in this browser.
                  </p>
                  <p style={{ color: "var(--muted)" }}>
                    Store: {form.store}
                    {form.platform ? ` · Platform: ${form.platform}` : ""}
                    {form.revenue ? ` · Revenue: ${form.revenue}` : ""}
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline"
                    onClick={() => setFormSubmitted(false)}
                  >
                    Send another request
                  </button>
                </div>
              ) : (
                <form className="card" onSubmit={submitForm} noValidate>
                  <div className="form-field">
                    <label htmlFor="audit-name">
                      Full name <span className="required">*</span>
                    </label>
                    <input
                      id="audit-name"
                      className="form-input"
                      type="text"
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
                      type="text"
                      placeholder="https://yourstore.com"
                      value={form.store}
                      onChange={(e) => setForm((f) => ({ ...f, store: e.target.value }))}
                    />
                    {formErrors.store && (
                      <p className="form-msg form-msg-dark err">{formErrors.store}</p>
                    )}
                  </div>
                  <fieldset className="form-field" style={{ border: 0, padding: 0 }}>
                    <legend style={{ fontWeight: 700, marginBottom: "6px" }}>
                      Primary platform <span className="required">*</span>
                    </legend>
                    {PLATFORMS.map((p) => (
                      <label
                        key={p}
                        style={{ display: "block", fontWeight: 400, marginBottom: "4px" }}
                      >
                        <input
                          type="radio"
                          name="platform"
                          value={p}
                          checked={form.platform === p}
                          onChange={() => setForm((f) => ({ ...f, platform: p }))}
                        />{" "}
                        {p}
                      </label>
                    ))}
                    {formErrors.platform && (
                      <p className="form-msg form-msg-dark err">{formErrors.platform}</p>
                    )}
                  </fieldset>
                  <div className="form-field">
                    <label htmlFor="audit-revenue">
                      Monthly online revenue <span className="required">*</span>
                    </label>
                    <select
                      id="audit-revenue"
                      className="form-select"
                      value={form.revenue}
                      onChange={(e) => setForm((f) => ({ ...f, revenue: e.target.value }))}
                    >
                      <option value="">Choose…</option>
                      {REVENUES.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                    {formErrors.revenue && (
                      <p className="form-msg form-msg-dark err">{formErrors.revenue}</p>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="audit-budget">Monthly budget for growth</label>
                    <select
                      id="audit-budget"
                      className="form-select"
                      value={form.budget}
                      onChange={(e) => setForm((f) => ({ ...f, budget: e.target.value }))}
                    >
                      <option value="">Choose…</option>
                      {BUDGETS.map((b) => (
                        <option key={b} value={b}>
                          {b}
                        </option>
                      ))}
                    </select>
                  </div>
                  <fieldset className="form-field" style={{ border: 0, padding: 0 }}>
                    <legend style={{ fontWeight: 700, marginBottom: "6px" }}>
                      Which services are you interested in?
                    </legend>
                    {SERVICES.map((s) => (
                      <label
                        key={s}
                        style={{ display: "block", fontWeight: 400, marginBottom: "4px" }}
                      >
                        <input
                          type="checkbox"
                          checked={form.services.includes(s)}
                          onChange={() => toggleService(s)}
                        />{" "}
                        {s}
                      </label>
                    ))}
                  </fieldset>
                  <div className="form-field">
                    <label htmlFor="audit-fix">What is the main thing you want to fix?</label>
                    <textarea
                      id="audit-fix"
                      className="form-input"
                      rows={4}
                      value={form.fix}
                      onChange={(e) => setForm((f) => ({ ...f, fix: e.target.value }))}
                    />
                  </div>
                  <div className="form-field">
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
                  <button type="submit" className="btn">
                    Request my free audit
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Not ready yet */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Not ready for an audit yet?</h2>
          <p className="lead">
            Run the twelve points yourself. The framework is published in full, with every
            threshold, and you are welcome to come back only when you have a constraint to
            name.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-growth-assessment/">
              Read the audit guide
            </Link>
            <Link
              className="btn"
              href="/ecommerce-management/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              See how we work
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
