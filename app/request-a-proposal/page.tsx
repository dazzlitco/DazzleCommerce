"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";

// NOTE: this file is a client component because the proposal form needs
// client-side validation, localStorage persistence and a confirmation state.
// (A client module cannot export `metadata`; the page title/description from
// the extraction — "Request a Proposal | Dazzle Commerce" — are exported by
// the route-level metadata wrapper in app/request-a-proposal/layout.tsx.)

const faqs: Faq[] = [
  {
    q: "Is the proposal really free?",
    a: "Yes, and there is no obligation attached to it. It takes a strategist the better part of two days to write, which is why we ask for enough detail to make it worth doing — but nothing is invoiced and nothing is owed if you decide against us.",
  },
  {
    q: "How long does it take?",
    a: "Five working days from the form to the document. If you need it sooner, say so in the form and we will tell you honestly whether a faster version would still be worth reading.",
  },
  {
    q: "Do I need to give you analytics access?",
    a: (
      <>
        No. A proposal is written from what is publicly visible plus what you tell
        us. Access only comes up later, if you go ahead or if you take the{" "}
        <Link href="/ecommerce-audit/">free audit</Link> .
      </>
    ),
  },
  {
    q: "Will the price be a range or a number?",
    a: "A number, with a note on what would move it. Ranges exist to protect the agency from being wrong, and a proposal that will not commit to a figure has not done the thinking.",
  },
  {
    q: "What if my budget is lower than your quote?",
    a: "Tell us the budget in the form. If the work cannot be done properly at that level we will say so and suggest what could be done instead, including doing it in-house. We would rather lose the engagement than scope something that fails.",
  },
  {
    q: "Can I get a proposal for one service only?",
    a: "Yes. Tick the single service in the form. Be aware that for a single channel a specialist agency will usually beat us on both price and depth, and the proposal will say so if that is the case for you.",
  },
  {
    q: "Do you sign NDAs before a proposal?",
    a: "We do not need one to write a proposal, because we do not need confidential material to write it. If your procurement process requires one, note it in the form and we will handle it before anything is exchanged.",
  },
  {
    q: "What if I would rather just talk first?",
    a: (
      <>
        Then do that. A{" "}
        <Link href="/book-a-strategy-call/">thirty-minute strategy call</Link>{" "}
        costs you less time than this form and often makes the proposal unnecessary,
        or much more specific if you still want one.
      </>
    ),
  },
];

const whatArrives = [
  {
    icon: "fa-solid fa-bullseye",
    title: "The constraint we think you have",
    points: [
      "Named in one sentence, before any scope is described",
      "The evidence that points at it, from your own data",
      "What we expect to move, and roughly by how much",
    ],
  },
  {
    icon: "fa-solid fa-list-ol",
    title: "Scope, in the order it happens",
    points: [
      "Which service lines run, and which deliberately do not",
      "A ninety-day sequence sized in weeks, not a wish list",
      "What is in month one versus what waits until month three",
    ],
  },
  {
    icon: "fa-solid fa-tag",
    title: "Price, with the reasoning",
    points: [
      "A monthly figure, not a range you have to call about",
      "What drives it up or down for your catalogue and channels",
      "Any one-off costs stated separately from the retainer",
    ],
  },
  {
    icon: "fa-solid fa-users",
    title: "The people, by name",
    points: [
      "Who runs each discipline on your account",
      "Who you speak to weekly, and who owns the number",
      "No sales engineers who then hand you to somebody else",
    ],
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "How it gets measured",
    points: [
      "The metric that decides whether this worked",
      "The baseline it is measured against, and the date it was taken",
      "When you would reasonably expect to see movement",
    ],
  },
  {
    icon: "fa-solid fa-circle-exclamation",
    title: "Assumptions and exclusions",
    points: [
      "What we have assumed that could turn out to be wrong",
      "What is explicitly not included, so nobody discovers it later",
      "What we need from your side, with the hours it will cost you",
    ],
  },
];

const needItems = [
  "Your store URL, and any marketplace storefronts",
  "Roughly what you turn over online each month",
  "The gross margin band your catalogue sits in",
  "What you are spending on marketing now, and where",
  "What you have already tried that did not work",
  "Whether there is a deadline or event driving this",
];

const timelineSteps = [
  {
    num: "01",
    title: "You send the form — day zero",
    body: "Ten fields, most of them optional. If something in it is unclear we email a single follow-up question rather than booking a call to ask it.",
  },
  {
    num: "02",
    title: "We look at your store — days one and two",
    body: "A strategist spends real time on the storefront, the category layer and whatever public marketplace presence exists, and forms a view on the constraint.",
  },
  {
    num: "03",
    title: "We write it — days three and four",
    body: "Scope, sequence, price and people, written by the person who would run the account. Reviewed by one other specialist before it leaves.",
  },
  {
    num: "04",
    title: "You get it — day five",
    body: "Sent as a document you keep. We will walk you through it if you want, and we will not chase you twice if you do not.",
  },
];

const premature = [
  {
    icon: "fa-solid fa-scale-balanced",
    title: "You are collecting three quotes to compare",
    body: "Proposals from different agencies are not comparable — the scopes differ, so the prices measure different things. Compare the reasoning on page one instead, or ask all three what they would not do.",
  },
  {
    icon: "fa-solid fa-question",
    title: "You do not know what is wrong yet",
    body: (
      <>
        If the brief is “grow revenue”, a proposal has to guess at the constraint.
        The{" "}
        <Link href="/ecommerce-growth-assessment/">growth assessment</Link> takes
        forty minutes and costs nothing, and makes the proposal far more specific.
      </>
    ),
  },
  {
    icon: "fa-solid fa-user-lock",
    title: "The decision-maker is not involved",
    body: "A proposal that cannot reach the person who signs is a document that gets forwarded, skimmed and forgotten. Bring them to a call first.",
  },
  {
    icon: "fa-solid fa-hourglass-half",
    title: "The budget is not agreed internally",
    body: "We will quote the number the work costs. If no number has been agreed on your side, that quote lands as a shock rather than a decision.",
  },
  {
    icon: "fa-solid fa-file-contract",
    title: "You need a document to satisfy procurement",
    body: "Tell us that in the form. It is a legitimate reason and it changes what we write — but a proposal written for procurement is a different document to one written to make a decision.",
  },
];

const goodFit = [
  "You are turning over roughly $25K to $2M a month online",
  "Somebody internally can own decisions and access",
  "You want one team across search, paid, retention and marketplace",
  "You would rather be told the brief is wrong than have it executed",
  "You are willing to be measured on margin rather than revenue",
];

const wrongFit = [
  "You want a single channel run cheaply — a specialist will beat us",
  "You need guaranteed rankings or guaranteed returns",
  "The site is pre-launch with no traffic to work from",
  "You want reporting access restricted to the agency",
  "The decision is being made purely on lowest monthly fee",
];

const afterwards = [
  {
    num: "01",
    label: "DAY ZERO",
    title: "You get a reply from a person",
    body: "Not an autoresponder sequence. A strategist confirms receipt, and asks one follow-up question only if something material is missing.",
    linkText: "Back to the form →",
    href: "#rp-form",
  },
  {
    num: "02",
    label: "DAY FIVE",
    title: "The proposal arrives",
    body: "A document you keep, with the price stated rather than ranged. Read it against our published packages if you want the comparison.",
    linkText: "See published pricing →",
    href: "/pricing/",
  },
  {
    num: "03",
    label: "YOUR CALL",
    title: "A walkthrough, if you want one",
    body: "Forty-five minutes with the strategist who wrote it, to argue with the reasoning rather than to be sold the scope.",
    linkText: "Book the call →",
    href: "/book-a-strategy-call/",
  },
  {
    num: "04",
    label: "AFTER THAT",
    title: "One follow-up, then silence",
    body: "We check in once. If we do not hear back, we stop. You can pick the conversation up whenever it suits you.",
    linkText: "Contact us anytime →",
    href: "/contact/",
  },
];

const otherRoutes = [
  {
    label: "THIRTY MINUTES",
    title: "Book a strategy call",
    href: "/book-a-strategy-call/",
    img: "/images/request-a-proposal-routes-call.webp",
    imgAlt: "Business team meeting in a modern office",
    body: "A conversation with a strategist about your constraint. No deck, no scope, no obligation to go further.",
  },
  {
    label: "FIVE DAYS",
    title: "Take the free audit",
    href: "/ecommerce-audit/",
    img: "/images/request-a-proposal-routes-audit.webp",
    imgAlt: "Senior strategists reviewing eCommerce performance charts during an audit session",
    body: "A ranked constraint list, a twelve-point scorecard and a ninety-day sequence. Yours to keep either way.",
  },
  {
    label: "FORTY MINUTES",
    title: "Run the assessment yourself",
    href: "/ecommerce-growth-assessment/",
    img: "/images/request-a-proposal-shape.webp",
    imgAlt: "Comparing a printed report against a laptop",
    body: "The same twelve points, published in full with every threshold, so you can find your constraint without us.",
  },
];

const roles = [
  "Founder / Owner",
  "Head of eCommerce",
  "Marketing lead",
  "Operations",
  "Procurement",
  "Other",
];

const platforms = [
  "Shopify / Shopify Plus",
  "WooCommerce",
  "BigCommerce",
  "Magento / Adobe Commerce",
  "Wix",
  "Squarespace",
  "Amazon Seller Central",
  "Walmart Marketplace",
  "Custom / Headless",
  "Other",
];

const revenues = [
  "Under $25K",
  "$25K – $100K",
  "$100K – $250K",
  "$250K – $1M",
  "Over $1M",
  "Prefer not to say",
];

const budgets = [
  "Not decided yet",
  "Under $3K",
  "$3K – $6K",
  "$6K – $12K",
  "$12K – $25K",
  "Over $25K",
];

const serviceOptions = [
  "Full eCommerce management",
  "eCommerce SEO",
  "PPC / paid media",
  "Conversion optimisation",
  "Email / retention",
  "Marketplace management",
  "Creative / content",
  "Development",
  "Not sure — advise me",
];

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  website: string;
  platform: string;
  revenue: string;
  budget: string;
  services: string[];
  context: string;
  deadline: string;
  consent: boolean;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  company: "",
  role: roles[0],
  website: "",
  platform: platforms[0],
  revenue: revenues[0],
  budget: budgets[0],
  services: [],
  context: "",
  deadline: "",
  consent: false,
};

export default function RequestProposalPage() {
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
    if (!form.company.trim()) next.company = "Please enter your company.";
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
    if (!form.context.trim())
      next.context = "Please tell us the main thing you want fixed, and what you have already tried.";
    if (!form.consent)
      next.consent = "Please agree to Dazzle Commerce using these details to prepare and send a proposal.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    try {
      const existing = JSON.parse(localStorage.getItem("dazzle-proposal-request") || "[]");
      existing.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem("dazzle-proposal-request", JSON.stringify(existing));
      setSubmitted(true);
      document.getElementById("rp-form")?.scrollIntoView({ behavior: "smooth" });
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
    <div className="rp-page">
      {/* 1. Hero */}
      <section className="hero" id="rp-hero">
        <div className="container">
          <p className="rp-breadcrumb">
            <Link href="/">Home</Link> › <Link href="/pricing/">Pricing</Link> › Request a Proposal
          </p>
          <div className="rp-hero-pills">
            <span className="rp-hero-pill">Proposal request</span>
            <span className="rp-hero-pill">Five working days</span>
          </div>
          <h1>Request a Proposal for Your Store</h1>
          <p className="lead">
            A written proposal with the scope, the sequence, the price and the named people
            who would do the work. Free, non-binding, and specific enough to take to a board.
            This page tells you exactly what arrives, what we need to write it, and when
            asking for one is premature.
          </p>
          <div className="rp-facts">
            <div className="rp-fact">
              <h4>TURNAROUND</h4>
              <p>Five working days</p>
            </div>
            <div className="rp-fact">
              <h4>TYPICAL LENGTH</h4>
              <p>Eight to twelve pages</p>
            </div>
            <div className="rp-fact">
              <h4>COST</h4>
              <p>Free</p>
            </div>
            <div className="rp-fact">
              <h4>OBLIGATION</h4>
              <p>None</p>
            </div>
          </div>
          <div className="rp-hero-btns">
            <Link className="tm-btn tm-btn-blue" href="#rp-form">
              <i className="fa-solid fa-file-signature" aria-hidden="true" />
              Go to the request form
            </Link>
            <Link className="tm-btn rp-btn-white" href="/book-a-strategy-call/">
              Book a call instead
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          <div className="rp-hero-media">
            <Image
              src="/images/request-a-proposal-buyers-coffee.webp"
              alt="Two business buyers discussing documents over coffee"
              width={2048}
              height={1152}
            />
          </div>
          <p className="rp-standalone">
            Every proposal is written against your numbers, not assembled from a template
            with your logo dropped on it.
          </p>
        </div>
      </section>

      {/* 2. What arrives */}
      <section className="section" id="rp-what">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-layer-group" center>What arrives</Pill>
            <h2 className="rp-h2">Six things, every time</h2>
            <p className="lead">
              A proposal that leaves any of these out is a brochure. Ours is structured the same
              way whether the engagement is $3,000 a month or $30,000.
            </p>
          </div>
          <div className="rp-arrives-grid">
            {whatArrives.map((c) => (
              <article className="rp-card rp-arrives-card" key={c.title}>
                <div className="rp-card-head">
                  <span className="rp-card-icon">
                    <i className={c.icon} aria-hidden="true" />
                  </span>
                  <h3>{c.title}</h3>
                </div>
                <ul className="check-list check-list-blue">
                  {c.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="rp-closing">
            Proposals are written by the strategist who would run the account, not by a business
            development team. That is why they take five days rather than one.
          </p>
        </div>
      </section>

      {/* 3. The shape of it */}
      <section className="section" id="rp-anatomy">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-layer-group" center>The shape of it</Pill>
            <h2 className="rp-h2">Front-loaded, deliberately</h2>
            <p className="lead">The first page is the argument. The scope and the price follow from it rather than leading it.</p>
          </div>
          <div className="rp-split">
            <div className="rp-split-text">
              <p>
                Most agency proposals open with an About Us section, a client logo wall and a
                description of the agency’s methodology. By the time anything about your business
                appears, the reader has skimmed four pages. Ours opens on page one with what we
                think is holding your revenue down and why we think it — then everything after
                that is the case for fixing it in a particular order.
              </p>
              <p>
                That structure has a side effect worth stating: if we cannot name a constraint
                from what you have given us, the proposal says so rather than padding.
                Occasionally the honest version of page one is that you should take the free
                audit first, and we will tell you that instead of quoting.
              </p>
              <ul className="check-list">
                <li>No logo wall, no methodology diagram, no filler case studies</li>
                <li>Every number in it traceable to something you sent us</li>
                <li>Written to be forwarded internally without a covering explanation</li>
              </ul>
            </div>
            <div className="rp-split-img">
              <Image
                src="/images/request-a-proposal-compliance-documents.webp"
                alt="Reviewing compliance documents with a pen and notepad"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. From your side */}
      <section className="section section-soft" id="rp-need">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-layer-group" center>From your side</Pill>
            <h2 className="rp-h2">What we need to write it</h2>
            <p className="lead">
              The form below asks for most of this. The more of it you can give, the more specific
              the proposal — and the less of it reads as assumption.
            </p>
          </div>
          <div className="rp-split">
            <div className="rp-split-img">
              <Image
                src="/images/request-a-proposal-compliance-manager.webp"
                alt="Compliance manager holding a folder of market documentation"
                width={1920}
                height={1280}
              />
            </div>
            <div className="rp-split-text">
              <p>
                None of this is a prerequisite. We will write a proposal from the store URL alone
                if that is all you want to share, it will simply carry more caveats and a wider
                price range.
              </p>
              <ul className="check-list">
                {needItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="rp-split-close">
                We do not ask for analytics access to write a proposal. That comes later, and only
                if you decide to go ahead or to take the{" "}
                <Link href="/ecommerce-audit/">free audit</Link> .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The timeline */}
      <section className="section" id="rp-timeline">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-calendar-days" center>The timeline</Pill>
            <h2 className="rp-h2">Request to proposal in five working days</h2>
            <p className="lead">
              No discovery workshop, no mutual NDA before anyone has said anything, no
              three-week scheduling exercise.
            </p>
          </div>
          <div className="rp-timeline-grid">
            {timelineSteps.map((s) => (
              <article className="rp-card rp-timeline-card" key={s.num}>
                <span className="rp-num-tile">{s.num}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p className="rp-closing">
            If you need it faster than five days, say so in the form. We will tell you honestly
            whether a rushed version is worth having.
          </p>
        </div>
      </section>

      {/* 6. On price */}
      <section className="section" id="rp-pricing">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-layer-group" center>On price</Pill>
            <h2 className="rp-h2">Why the number is in the proposal and not on the call</h2>
            <p className="lead">
              We publish packages. What we cannot publish is which one your catalogue actually
              needs.
            </p>
          </div>
          <div className="rp-split">
            <div className="rp-split-text">
              <p>
                Our <Link href="/pricing/">pricing page</Link> carries three packages and what
                drives the cost of each. For most brands one of those is the answer and the
                proposal simply confirms which. For the
                rest — multi-marketplace sellers, large catalogues, brands mid-replatform — the
                honest number sits outside a package, and quoting one on a first call would be a
                guess dressed as an answer.
              </p>
              <p>
                Either way the proposal states a figure rather than a range, along with what would
                move it. If the figure is higher than the band you gave us, it says so on page one
                instead of at the end.
              </p>
              <Link className="tm-btn rp-btn-white" href="/pricing/">
                See published pricing
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
            <div className="rp-split-img">
              <Image
                src="/images/request-a-proposal-banknote-pricing.webp"
                alt="Local banknote held beside pricing documents"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Before you ask */}
      <section className="section" id="rp-premature">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-circle-question" center>Before you ask</Pill>
            <h2 className="rp-h2">Five times a proposal is the wrong request</h2>
            <p className="lead">
              We would rather tell you this here than write you a document that cannot be acted
              on.
            </p>
          </div>
          <div className="rp-premature-grid">
            {premature.map((c) => (
              <article className="rp-card rp-premature-card" key={c.title}>
                <div className="rp-card-head">
                  <span className="rp-card-icon">
                    <i className={c.icon} aria-hidden="true" />
                  </span>
                  <h3>{c.title}</h3>
                </div>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
          <p className="rp-closing rp-closing-15">
            None of these are refusals. Say so in the form and we will write what is actually
            useful, or tell you plainly that a call would serve you better.
          </p>
        </div>
      </section>

      {/* 8. Fit */}
      <section className="section" id="rp-fit">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-layer-group" center>Fit</Pill>
            <h2 className="rp-h2">Who this works for, and who it does not</h2>
            <p className="lead">
              Stated before you spend ten minutes on a form rather than after we have both spent
              a week.
            </p>
          </div>
          <div className="rp-fit-grid">
            <article className="rp-card rp-fit-card">
              <h3>We are usually a good fit when</h3>
              <ul className="check-list check-list-blue">
                {goodFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="rp-card rp-fit-card">
              <h3>We are usually the wrong choice when</h3>
              <ul className="check-list check-list-blue">
                {wrongFit.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
          <p className="rp-closing">
            If you read the right-hand column and recognise your situation, the honest answer is
            that we would take your money and underperform. We would rather you knew now.
          </p>
        </div>
      </section>

      {/* 9. The request — proposal form */}
      <section className="section section-soft" id="rp-form">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-layer-group" center>The request</Pill>
            <h2 className="rp-h2">Tell us enough to write something useful</h2>
            <p className="lead">
              Six required fields, consent included. Everything else sharpens the proposal rather
              than gating it.
            </p>
          </div>
          {submitted ? (
            <div className="rp-form-card">
              <h3>
                Thank you, {form.name.split(" ")[0] || "there"} — your proposal request is in.
              </h3>
              <p style={{ color: "var(--muted)" }}>
                A strategist will reply to <strong>{form.email}</strong> within one business day
                to confirm receipt, and your written proposal will arrive within five working
                days. Your details go to one inbox and are used to write the proposal. No
                newsletter, no sequence, and no third parties.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Requested for <strong>{form.company || "your store"}</strong>
                {form.website ? (
                  <>
                    {" "}({form.website})
                  </>
                ) : null}
                {form.services.length > 0 ? (
                  <>
                    {" "}— covering {form.services.join(", ")}.
                  </>
                ) : (
                  "."
                )}
              </p>
              <div className="btn-row">
                <button className="tm-btn rp-btn-white" type="button" onClick={resetForm}>
                  Send another request
                </button>
                <Link className="tm-btn tm-btn-blue" href="/book-a-strategy-call/">
                  Book a Strategy Call
                </Link>
              </div>
            </div>
          ) : (
            <div className="rp-form-card">
              <form onSubmit={handleSubmit} noValidate>
                <div className="rp-form-grid">
                  <div className="form-field">
                    <label htmlFor="rp-name">
                      Full name <span className="required">*</span>
                    </label>
                    <input
                      id="rp-name"
                      className="form-input"
                      type="text"
                      placeholder="Jordan Avery"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      required
                    />
                    {errors.name && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="rp-email">
                      Work email <span className="required">*</span>
                    </label>
                    <input
                      id="rp-email"
                      className="form-input"
                      type="email"
                      placeholder="jordan@yourbrand.com"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      required
                    />
                    {errors.email && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="rp-company">
                      Company <span className="required">*</span>
                    </label>
                    <input
                      id="rp-company"
                      className="form-input"
                      type="text"
                      placeholder="Your brand"
                      value={form.company}
                      onChange={(e) => set("company", e.target.value)}
                      required
                    />
                    {errors.company && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.company}
                      </p>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="rp-role">Your role</label>
                    <select
                      id="rp-role"
                      className="form-select"
                      value={form.role}
                      onChange={(e) => set("role", e.target.value)}
                    >
                      {roles.map((r) => (
                        <option key={r} value={r}>
                          {r}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label htmlFor="rp-website">
                      Store website <span className="required">*</span>
                    </label>
                    <input
                      id="rp-website"
                      className="form-input"
                      type="url"
                      placeholder="https://"
                      value={form.website}
                      onChange={(e) => set("website", e.target.value)}
                      required
                    />
                    {errors.website && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.website}
                      </p>
                    )}
                  </div>
                  <div className="form-field">
                    <label htmlFor="rp-platform">Primary platform</label>
                    <select
                      id="rp-platform"
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
                    <label htmlFor="rp-revenue">Monthly online revenue</label>
                    <select
                      id="rp-revenue"
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
                    <label htmlFor="rp-budget">Monthly budget you have in mind</label>
                    <select
                      id="rp-budget"
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
                </div>
                <div className="form-field">
                  <label>What should the proposal cover?</label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                      gap: "4px 16px",
                    }}
                  >
                    {serviceOptions.map((s) => (
                      <label className="form-check" key={s} style={{ fontWeight: 400 }}>
                        <input
                          type="checkbox"
                          checked={form.services.includes(s)}
                          onChange={() => toggleService(s)}
                        />
                        {s}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="rp-context">
                    What is the main thing you want fixed, and what have you already tried?{" "}
                    <span className="required">*</span>
                  </label>
                  <textarea
                    id="rp-context"
                    className="form-input"
                    rows={5}
                    placeholder="The more specific you are here, the more specific the proposal."
                    value={form.context}
                    onChange={(e) => set("context", e.target.value)}
                    required
                    style={{ width: "100%", resize: "vertical" }}
                  />
                  {errors.context && (
                    <p className="form-msg form-msg-dark err" role="alert">
                      {errors.context}
                    </p>
                  )}
                </div>
                <div className="form-field">
                  <label htmlFor="rp-deadline">Any deadline or event driving this? (optional)</label>
                  <input
                    id="rp-deadline"
                    className="form-input"
                    type="text"
                    placeholder="Peak season, board review, contract ending"
                    value={form.deadline}
                    onChange={(e) => set("deadline", e.target.value)}
                  />
                </div>
                <div className="form-field form-check">
                  <input
                    id="rp-consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => set("consent", e.target.checked)}
                    required
                  />
                  <label htmlFor="rp-consent">
                    I agree to Dazzle Commerce using these details to prepare and send a proposal.
                  </label>
                </div>
                {errors.consent && (
                  <p className="form-msg form-msg-dark err" role="alert">
                    {errors.consent}
                  </p>
                )}
                <button className="tm-btn tm-btn-blue" type="submit">
                  <i className="fa-regular fa-calendar-check" aria-hidden="true" />
                  Request My Proposal
                </button>
                {submitError && (
                  <p className="form-msg form-msg-dark err" role="alert">
                    {submitError}
                  </p>
                )}
              </form>
            </div>
          )}
          <p className="rp-form-note" style={{ marginTop: "24px" }}>
            Your details go to one inbox and are used to write the proposal. No newsletter,
            no sequence, and no third parties. We reply within one business day.
          </p>
        </div>
      </section>

      {/* 10. Afterwards */}
      <section className="section" id="rp-after">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-layer-group" center>Afterwards</Pill>
            <h2 className="rp-h2">What happens once you send it</h2>
            <p className="lead">Four steps, and a firm limit on how often we contact you.</p>
          </div>
          <div className="rp-after-grid">
            {afterwards.map((s) => (
              <article className="rp-card rp-after-card" key={s.num}>
                <p className="rp-after-num">{s.num}</p>
                <p className="rp-after-tag">{s.label}</p>
                <h3>
                  <Link href={s.href}>{s.title}</Link>
                </h3>
                <p>{s.body}</p>
                <p>
                  <Link className="rp-after-link" href={s.href}>
                    {s.linkText}
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Questions — Proposal FAQs */}
      <section className="section" id="rp-faqs">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-circle-question" center>Questions</Pill>
            <h2 className="rp-h2">Proposal FAQs</h2>
            <p className="lead">The things people ask before filling in the form.</p>
          </div>
          <FaqAccordion faqs={faqs} rotateIcon />
        </div>
      </section>

      {/* 12. Other routes in */}
      <section className="section" id="rp-more">
        <div className="container">
          <div className="rp-header">
            <Pill icon="fa-solid fa-route" center>Other routes in</Pill>
            <h2 className="rp-h2">Three ways to start that are not this one</h2>
            <p className="lead">
              A proposal is the most committed of the four. These are the lighter options.
            </p>
          </div>
          <div className="rp-route-grid">
            {otherRoutes.map((r) => (
              <article className="rp-card rp-route-card" key={r.title}>
                <Image src={r.img} alt={r.imgAlt} width={1200} height={800} />
                <p className="rp-route-label">{r.label}</p>
                <h3>
                  <Link href={r.href}>{r.title}</Link>
                </h3>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
          <div className="rp-route-btn">
            <Link className="tm-btn rp-btn-white" href="/guides/">
              All guides
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section
        className="section final-cta final-cta-blue"
        style={{ padding: "90px 0 100px" }}
      >
        <div className="container">
          <h2>Not sure a proposal is the right next step?</h2>
          <p className="lead">
            Most brands get further with a thirty-minute call or the free audit first, and the
            proposal is better for having waited. All three cost nothing.
          </p>
          <div className="btn-row">
            <Link className="tm-btn tm-btn-white" href="/book-a-strategy-call/">
              <i className="fa-solid fa-calendar-days" aria-hidden="true" />
              Book a Strategy Call
            </Link>
            <Link className="tm-btn tm-btn-ghost" href="/ecommerce-audit/">
              Request the Free Audit
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
