"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

// NOTE: this file is a client component because the strategy-call booking form
// needs client-side validation, localStorage persistence and a confirmation
// state. The live page has no calendar or date/time picker: times are arranged
// by email after the form is submitted (see the "How soon can we speak?" FAQ),
// so the form reproduces the live page's nine fields exactly and says so in
// the confirmation.
// (A client module cannot export `metadata`; the page title/description from
// the extraction — "Book a Strategy Call | Dazzle Commerce" / "Thirty minutes
// with an eCommerce strategist about your constraint. No deck, no discovery
// questionnaire, and no obligation to go any further." — should be added via
// a route-level metadata wrapper if the parent wants it.)

const faqs: Faq[] = [
  {
    q: "Is it really free, and is there a catch?",
    a: "It is free and there is no catch beyond the obvious one: we hope the conversation is good enough that you consider working with us. Nothing is invoiced, nothing is owed, and the written summary is yours regardless.",
  },
  {
    q: "Will I be speaking to a salesperson?",
    a: "No. You will be booked with the strategist whose discipline matches your likely constraint, and that is the same person who would run the work. We do not have a business development layer for you to get through.",
  },
  {
    q: "What if thirty minutes is not enough?",
    a: "It often is not, and that is fine. We will either run over a little or tell you which of the free routes suits your situation better — usually the audit. We will not book a second call purely to keep the conversation going.",
  },
  {
    q: "Do I need to share analytics access?",
    a: "No. Bring whatever numbers you are comfortable with, or none. We prepare from what is publicly visible on your store, which is usually enough to form a view worth arguing with.",
  },
  {
    q: "How soon can we speak?",
    a: "We reply within one business day with two or three times that fit your timezone. Most calls happen within the same week.",
  },
  {
    q: "Can other people from my team join?",
    a: "Yes, and it usually helps if the person who owns the budget is there. Beyond about four people it stops being a conversation and starts being a presentation, which is the thing we are trying to avoid.",
  },
  {
    q: "What happens if I do not want to go further?",
    a: "Nothing. You keep the summary, we send one follow-up, and if you do not reply we stop. You are welcome to come back months later; the resources stay free and ungated in the meantime.",
  },
  {
    q: "Will you tell me if we do not need an agency?",
    a: "Yes, and it happens regularly. The most common version is that the constraint is something your own team can fix faster and cheaper than we could, in which case we will say so and point you at the relevant checklist.",
  },
];

const timezones = [
  "Americas – Pacific",
  "Americas – Central / Eastern",
  "UK / Ireland",
  "Europe",
  "Gulf / Middle East",
  "Africa",
  "India / South Asia",
  "Southeast Asia",
  "Australia / New Zealand",
];

const bestTimes = ["Morning", "Early afternoon", "Late afternoon", "Flexible"];

const revenues = [
  "Under $25K",
  "$25K – $100K",
  "$100K – $250K",
  "$250K – $1M",
  "Over $1M",
  "Prefer not to say",
];

const focuses = [
  "I am not sure — help me work it out",
  "Organic search and category pages",
  "Paid media efficiency",
  "Conversion and checkout",
  "Email and retention",
  "Marketplaces and listings",
  "Reporting and margin visibility",
  "Choosing between agency and in-house",
];

const halfHourSteps = [
  {
    num: "01",
    title: "Where you are — about ten minutes",
    body: "Revenue, channels, margin shape, what changed recently and what you have already tried. We listen more than we talk here, and we will not read your answers back to you from the form.",
  },
  {
    num: "02",
    title: "What we think is wrong — about ten minutes",
    body: "A view on the constraint, formed from your store and whatever you have shared. Sometimes we are wrong, and the useful part of the call is you explaining why.",
  },
  {
    num: "03",
    title: "What we would do about it — about five minutes",
    body: "The first thing we would change, the order after that, and roughly what it would cost in time and money. Including when the answer is that you should do it in-house.",
  },
  {
    num: "04",
    title: "What happens next — about five minutes",
    body: "Which of the free routes fits: the audit, a proposal, or nothing at all. We will tell you if we think you do not need an agency yet.",
  },
];

const commitments = [
  {
    title: "Present slides at you",
    body: "Nobody has ever bought an agency because of slide fourteen. If we send anything afterwards it is a written summary, not a deck.",
  },
  {
    title: "Create artificial urgency",
    body: "No expiring discounts, no “we only take two clients a quarter”, no pressure to decide on the call. The pricing is published and does not move because you hesitated.",
  },
  {
    title: "Run a qualification script",
    body: "You will not be asked to rate your pain out of ten, or which of four personas you identify with. It is a conversation between two people who know eCommerce.",
  },
  {
    title: "Hand you to somebody else afterwards",
    body: "The strategist on the call is the strategist on the account. There is no transition to an implementation team you have not met.",
  },
  {
    title: "Quote numbers we cannot stand behind",
    body: (
      <>
        No promised percentages, no guaranteed rankings, no case study that happens
        to match your category exactly. Our{" "}
        <Link href="/case-studies/">case studies</Link> carry their methodology.
      </>
    ),
  },
  {
    title: "Put you into a nurture sequence",
    body: "One follow-up after the call. If you do not reply, we stop. You will not receive a monthly newsletter you did not ask for.",
  },
];

const afterwards = [
  {
    num: "01",
    tag: "WITHIN A DAY",
    title: "A written summary",
    body: "The constraint we named, the reasoning behind it, and the first thing we would change. Written so you can forward it internally without explaining the call.",
    linkText: "Book the call →",
    href: "#bc-form",
  },
  {
    num: "02",
    tag: "IF YOU WANT MORE",
    title: "The free audit",
    body: "Five working days, six disciplines, a ranked constraint list and a ninety-day sequence. Still nothing owed.",
    linkText: "See the audit →",
    href: "/ecommerce-audit/",
  },
  {
    num: "03",
    tag: "IF YOU ARE CLOSE",
    title: "A scoped proposal",
    body: "Price, sequence and named people, five working days after you ask. Usually much sharper for having had the call first.",
    linkText: "Request a proposal →",
    href: "/request-a-proposal/",
  },
  {
    num: "04",
    tag: "IF NOT NOW",
    title: "Nothing at all",
    body: "One follow-up, then we leave you alone. The checklists and the assessment stay free and ungated for whenever you want them.",
    linkText: "Browse the resources →",
    href: "/resources/checklists/",
  },
];

const timingCards = [
  {
    title: "You have never measured the basics",
    body: "If you do not know your conversion rate, your abandonment rate or your margin by category, the call becomes us asking questions you cannot answer. Run the growth assessment first — forty minutes, free, and it makes this call twice as useful.",
    linkText: "growth assessment",
    href: "/ecommerce-growth-assessment/",
  },
  {
    title: "You need evidence, not an opinion",
    body: "A thirty-minute conversation produces a view. If you need something defensible enough to take to a board or to settle an internal argument, ask for the free audit instead.",
    linkText: "free audit",
    href: "/ecommerce-audit/",
  },
  {
    title: "You have already decided and need a number",
    body: "If you know what you want built and just need scope and price, skip the conversation and request a proposal. We will call you if something in it needs discussing.",
    linkText: "request a proposal",
    href: "/request-a-proposal/",
  },
];

const otherRoutes = [
  {
    tag: "FORTY MINUTES",
    title: "Run the growth assessment yourself",
    href: "/ecommerce-growth-assessment/",
    img: "/images/book-a-strategy-call-assessment.webp",
    imgAlt: "Comparing a printed report against a laptop",
    body: "Twelve points with every threshold published, so you can find your constraint without speaking to anybody.",
  },
  {
    tag: "FIVE DAYS",
    title: "Take the free audit",
    href: "/ecommerce-audit/",
    img: "/images/book-a-strategy-call-audit.webp",
    imgAlt: "Senior strategists reviewing eCommerce performance charts during an audit session",
    body: "Six disciplines reviewed by the specialists who run them, ranked into one constraint and a ninety-day sequence.",
  },
  {
    tag: "FIVE DAYS",
    title: "Request a proposal",
    href: "/request-a-proposal/",
    img: "/images/book-a-strategy-call-proposal.webp",
    imgAlt: "Two business buyers discussing documents over coffee",
    body: "Scope, sequence, price and named people, if you already know what you want and need the document.",
  },
];

type FormState = {
  name: string;
  email: string;
  website: string;
  timezone: string;
  when: string;
  revenue: string;
  focus: string;
  context: string;
  consent: boolean;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  website: "",
  timezone: timezones[0],
  when: bestTimes[0],
  revenue: revenues[0],
  focus: focuses[0],
  context: "",
  consent: false,
};

export default function BookStrategyCallPage() {
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
    if (!form.email.trim()) {
      next.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "That email address does not look right — please check it.";
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
    if (!form.context.trim()) {
      next.context = "One or two sentences is plenty — tell us what has been bothering you.";
    }
    if (!form.consent) {
      next.consent = "Please agree so we can use these details to arrange and prepare for the call.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    try {
      const existing = JSON.parse(localStorage.getItem("dazzle-strategy-call") || "[]");
      existing.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem("dazzle-strategy-call", JSON.stringify(existing));
      setSubmitted(true);
      document.getElementById("bc-form")?.scrollIntoView({ behavior: "smooth" });
    } catch {
      setSubmitError("Something went wrong saving your booking. Please try again.");
    }
  }

  function resetForm() {
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
  }

  const err = (key: keyof FormState) =>
    errors[key] ? (
      <p className="form-msg form-msg-dark err" role="alert" style={{ margin: "6px 0 0" }}>
        {errors[key]}
      </p>
    ) : null;

  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "1rem" }}>
            <Link href="/">Home</Link> › <Link href="/contact/">Contact</Link> › Book a
            Strategy Call
          </p>
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Strategy call</p>
              <p style={{ fontWeight: 700, color: "var(--blue)", marginBottom: "0.5rem" }}>
                Thirty minutes · free
              </p>
              <h1>Book a Thirty-Minute Strategy Call</h1>
              <p className="lead">
                A conversation with the strategist who would actually run your account,
                about the one thing most likely to be holding your revenue down. No slide
                deck, no discovery questionnaire, no second call to meet the real team.
                You get a written summary afterwards whether or not anything follows.
              </p>
              <div className="btn-row">
                <Link className="btn" href="#bc-form">
                  Go to the booking form
                </Link>
                <Link className="btn btn-outline" href="/request-a-proposal/">
                  Ask for a proposal instead
                </Link>
              </div>
              <p style={{ marginTop: "1.25rem", color: "var(--muted)" }}>
                One strategist, one call, and a written summary you keep — including the
                parts where we tell you not to hire us.
              </p>
            </div>
            <div className="hero-img">
              <Image
                src="/images/book-a-strategy-call-hero.webp"
                alt="Business team meeting in a modern office"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
          <div className="trust-badges">
            <div className="trust-badge">
              <h3>LENGTH</h3>
              <p>Thirty minutes</p>
            </div>
            <div className="trust-badge">
              <h3>WHO YOU MEET</h3>
              <p>A senior strategist</p>
            </div>
            <div className="trust-badge">
              <h3>COST</h3>
              <p>Free</p>
            </div>
            <div className="trust-badge">
              <h3>SLIDES</h3>
              <p>None</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. What it is, and what it is not */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">The call</p>
          <h2>What it is, and what it is not</h2>
          <p className="lead">
            Most agency “discovery calls” are qualification interviews with a demo at the
            end. This is not that, and it is worth being specific about the difference.
          </p>
          <div className="card-grid card-grid-2">
            <article className="card">
              <h3>What it is</h3>
              <ul className="check-list">
                <li>A working conversation about your numbers, not about us</li>
                <li>Run by the strategist who would own your account</li>
                <li>An honest read on what we think your constraint is</li>
                <li>A place to argue with that read and change our mind</li>
              </ul>
            </article>
            <article className="card">
              <h3>What it is not</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "1.25rem 0" }}>
                {[
                  "A slide deck about our methodology and client logos",
                  "A qualification call that hands you to somebody senior later",
                  "A pricing negotiation — the numbers are already published",
                  "A commitment to anything, including a second call",
                ].map((item) => (
                  <li key={item} style={{ padding: "0.45rem 0 0.45rem 2rem", position: "relative" }}>
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "0.45rem",
                        width: "1.4rem",
                        height: "1.4rem",
                        borderRadius: "50%",
                        background: "var(--bg-soft)",
                        color: "#dc2626",
                        fontWeight: 800,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                      }}
                    >
                      ✕
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p style={{ marginTop: "1.5rem", color: "var(--muted)" }}>
            If thirty minutes is not enough for your situation, we will say so on the call
            and tell you which of the free routes fits better.
          </p>
        </div>
      </section>

      {/* 3. How the thirty minutes is actually spent */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">The half hour</p>
          <h2>How the thirty minutes is actually spent</h2>
          <p className="lead">
            Roughly this shape, though we will follow whatever turns out to matter.
          </p>
          <div className="card-grid card-grid-4">
            {halfHourSteps.map((s) => (
              <article className="card" key={s.num}>
                <p className="card-num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem", color: "var(--muted)" }}>
            You will get a written summary within one business day, with the constraint
            we named and the reasoning behind it. It is yours to use with or without us.
          </p>
        </div>
      </section>

      {/* 4. Which eCommerce consultant you will actually be speaking to */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">The other side</p>
              <h2>Which eCommerce consultant you will actually be speaking to</h2>
              <p>
                The eCommerce consultant on the call is the person who would run the work.
                This is the whole point.
              </p>
              <p>
                Depending on what your form says, you will be booked with the strategist
                whose discipline matches your likely constraint — search, paid, retention,
                conversion or marketplace. If the constraint is unclear from the form, you
                get the strategist who covers management across all of them.
              </p>
              <p>
                There is no business development layer to get through. Nobody on the call
                will need to “check with the team and come back to you” about whether
                something is possible, because the person answering is the person who
                would do it. You can read{" "}
                <Link href="/how-we-work/">how we work</Link> for what happens if you go
                further, and it is an accurate description rather than a brochure.
              </p>
              <ul className="check-list">
                <li>One person, not a panel of four on a grid</li>
                <li>Matched to your likely constraint, not to your revenue band</li>
                <li>The same person you would work with if you went ahead</li>
              </ul>
            </div>
            <div className="split-img">
              <Image
                src="/images/book-a-strategy-call-consultant.webp"
                alt="eCommerce strategists brainstorming a growth plan around a meeting table"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. What to have open, and what not to bother with */}
      <section className="section section-soft">
        <div className="container">
          <div className="split">
            <div className="split-img">
              <Image
                src="/images/book-a-strategy-call-preparation.webp"
                alt="Tablet showing eCommerce performance charts on a desk"
                width={1920}
                height={1280}
              />
            </div>
            <div>
              <p className="eyebrow">Preparation</p>
              <h2>What to have open, and what not to bother with</h2>
              <p>
                Thirty minutes goes quickly. Five minutes of preparation roughly doubles
                what you get out of it.
              </p>
              <p>
                None of this is required. If you turn up with nothing we will still have
                a useful conversation from what is publicly visible on your store.
              </p>
              <ul className="check-list">
                <li>Your last three months of revenue, by channel if you have it</li>
                <li>Roughly what you spend on marketing, and where</li>
                <li>A rough gross margin band for your main categories</li>
                <li>The one thing that has been bothering you for months</li>
              </ul>
              <p>
                <strong>What not to prepare:</strong> a brief, a deck, a list of agency
                questions, or a tidied-up version of your numbers. Messy and real is more
                useful to us than clean and approximate.
              </p>
              <p>
                If you would like to arrive already knowing your constraint, the{" "}
                <Link href="/ecommerce-growth-assessment/">growth assessment</Link> takes
                about forty minutes and is published in full.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Six things we will not do on this call */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our commitments</p>
          <h2>Six things we will not do on this call</h2>
          <p className="lead">
            Each of these costs us conversions. They are on the page because the
            alternative is a worse conversation.
          </p>
          <div className="card-grid">
            {commitments.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem", color: "var(--muted)" }}>
            If any of that happens on your call, reply to the summary email and tell us.
            It would be a failure of ours, not a tactic.
          </p>
        </div>
      </section>

      {/* 7. Booking form */}
      <section className="section section-soft" id="bc-form">
        <div className="container">
          <p className="eyebrow">Book it</p>
          <h2>Nine fields, five of them required</h2>
          <p className="lead">
            We use the answers to pick which strategist you speak to and to prepare, so
            the first ten minutes is not spent on basics.
          </p>
          {submitted ? (
            <div className="card" role="status" style={{ background: "#fff", marginTop: "32px" }}>
              <p className="eyebrow">Call booked</p>
              <h2 style={{ fontSize: "1.5rem" }}>
                Thank you, {form.name.split(" ")[0] || "there"} — your strategy call is
                requested.
              </h2>
              <p style={{ color: "var(--muted)" }}>
                We will reply to <strong>{form.email}</strong> within one business day
                with two or three times that fit your timezone ({form.timezone}
                {form.when ? `, ${form.when.toLowerCase()}` : ""}). Most calls happen
                within the same week. Your written summary follows within one business day
                of the call, whether or not anything follows.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Focus for the call: <strong>{form.focus}</strong>
              </p>
              <div className="btn-row">
                <button className="btn" type="button" onClick={resetForm}>
                  Book another call
                </button>
                <Link className="btn btn-outline" href="/case-studies/">
                  Read case studies first
                </Link>
              </div>
            </div>
          ) : (
            <form
              className="card"
              style={{ background: "#fff", marginTop: "32px" }}
              onSubmit={handleSubmit}
              noValidate
              aria-label="Strategy Call Booking"
            >
              <div className="card-grid card-grid-2" style={{ marginTop: 0 }}>
                <div className="form-field">
                  <label htmlFor="bc-name">
                    Full name <span className="required">*</span>
                  </label>
                  <input
                    id="bc-name"
                    className="form-input"
                    type="text"
                    autoComplete="name"
                    placeholder="Jordan Avery"
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                  />
                  {err("name")}
                </div>
                <div className="form-field">
                  <label htmlFor="bc-email">
                    Work email <span className="required">*</span>
                  </label>
                  <input
                    id="bc-email"
                    className="form-input"
                    type="email"
                    autoComplete="email"
                    placeholder="jordan@yourbrand.com"
                    value={form.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                  {err("email")}
                </div>
                <div className="form-field">
                  <label htmlFor="bc-website">
                    Store website <span className="required">*</span>
                  </label>
                  <input
                    id="bc-website"
                    className="form-input"
                    type="url"
                    autoComplete="url"
                    placeholder="https://"
                    value={form.website}
                    onChange={(e) => set("website", e.target.value)}
                  />
                  {err("website")}
                </div>
                <div className="form-field">
                  <label htmlFor="bc-timezone">Your timezone</label>
                  <select
                    id="bc-timezone"
                    className="form-select"
                    value={form.timezone}
                    onChange={(e) => set("timezone", e.target.value)}
                  >
                    {timezones.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="bc-when">Best time of day</label>
                  <select
                    id="bc-when"
                    className="form-select"
                    value={form.when}
                    onChange={(e) => set("when", e.target.value)}
                  >
                    {bestTimes.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label htmlFor="bc-revenue">Monthly online revenue</label>
                  <select
                    id="bc-revenue"
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
                <div className="form-field" style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="bc-focus">What should we spend the time on?</label>
                  <select
                    id="bc-focus"
                    className="form-select"
                    value={form.focus}
                    onChange={(e) => set("focus", e.target.value)}
                  >
                    {focuses.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-field" style={{ gridColumn: "1 / -1" }}>
                  <label htmlFor="bc-context">
                    What has been bothering you for months?{" "}
                    <span className="required">*</span>
                  </label>
                  <textarea
                    id="bc-context"
                    className="form-input"
                    rows={4}
                    placeholder="One or two sentences is plenty. Messy and real beats tidy and approximate."
                    value={form.context}
                    onChange={(e) => set("context", e.target.value)}
                  />
                  {err("context")}
                </div>
                <div className="form-field" style={{ gridColumn: "1 / -1" }}>
                  <label className="form-check" htmlFor="bc-consent">
                    <input
                      id="bc-consent"
                      type="checkbox"
                      checked={form.consent}
                      onChange={(e) => set("consent", e.target.checked)}
                    />
                    <span>
                      Consent <span className="required">*</span> — I agree to Dazzle
                      Commerce using these details to arrange and prepare for the call.
                    </span>
                  </label>
                  {err("consent")}
                </div>
              </div>
              {submitError && (
                <p className="form-msg form-msg-dark err" role="alert">
                  {submitError}
                </p>
              )}
              <button className="btn" type="submit">
                Book My Strategy Call
              </button>
              <p style={{ color: "var(--muted)", marginTop: "1rem", marginBottom: 0 }}>
                One inbox, one reply, one follow-up if we do not hear back. No sequence,
                no newsletter, no third parties.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* 8. What you get, whether or not you hire us */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Afterwards</p>
          <h2>What you get, whether or not you hire us</h2>
          <p className="lead">The summary is the deliverable. Everything else is optional.</p>
          <div className="card-grid card-grid-4">
            {afterwards.map((a) => (
              <article className="card" key={a.num}>
                <p className="card-num">{a.num}</p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    color: "var(--blue)",
                    marginBottom: "0.4rem",
                  }}
                >
                  {a.tag}
                </p>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
                <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                  <Link href={a.href} style={{ fontWeight: 700 }}>
                    {a.linkText}
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Three times a call is the wrong first step */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Timing</p>
          <h2>Three times a call is the wrong first step</h2>
          <p className="lead">Not a refusal — just a better use of your half hour.</p>
          <div className="card-grid">
            {timingCards.map((t) => (
              <article className="card" key={t.title}>
                <h3>{t.title}</h3>
                <p>
                  {t.title === "You have never measured the basics" ? (
                    <>
                      If you do not know your conversion rate, your abandonment rate or
                      your margin by category, the call becomes us asking questions you
                      cannot answer. Run the{" "}
                      <Link href={t.href}>{t.linkText}</Link> first — forty minutes, free,
                      and it makes this call twice as useful.
                    </>
                  ) : t.title === "You need evidence, not an opinion" ? (
                    <>
                      A thirty-minute conversation produces a view. If you need something
                      defensible enough to take to a board or to settle an internal
                      argument, ask for the <Link href={t.href}>{t.linkText}</Link>{" "}
                      instead.
                    </>
                  ) : (
                    <>
                      If you know what you want built and just need scope and price, skip
                      the conversation and <Link href={t.href}>{t.linkText}</Link>. We will
                      call you if something in it needs discussing.
                    </>
                  )}
                </p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem", color: "var(--muted)" }}>
            All four routes are free and none of them requires the others. Pick whichever
            matches where you actually are.
          </p>
        </div>
      </section>

      {/* 10. Strategy call FAQs */}
      <section className="section">
        <div className="container center">
          <p className="eyebrow">Questions</p>
          <h2>Strategy call FAQs</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            What people ask before booking.
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 11. Three alternatives to a call */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Other routes in</p>
          <h2>Three alternatives to a call</h2>
          <p className="lead">All free, all ungated, none of them requiring this one.</p>
          <div className="card-grid">
            {otherRoutes.map((r) => (
              <article className="case-card" key={r.title}>
                <Image src={r.img} alt={r.imgAlt} width={1200} height={800} />
                <div className="case-body">
                  <p className="case-cat">{r.tag}</p>
                  <h3>
                    <Link href={r.href}>{r.title}</Link>
                  </h3>
                  <p style={{ color: "var(--muted)" }}>{r.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="center mt">
            <Link className="btn btn-outline" href="/guides/">
              All guides
            </Link>
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Half an hour, and you keep the summary either way</h2>
          <p className="lead">
            Tell us what has been bothering you for months. We will tell you what we
            think is causing it, in writing, whether or not anything follows.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="#bc-form">
              Book Your Strategy Call
            </Link>
            <Link
              className="btn"
              href="/pricing/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              See Pricing &amp; Packages
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
