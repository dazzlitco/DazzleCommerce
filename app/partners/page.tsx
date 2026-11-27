import Image from "next/image";
import Link from "next/link";
import { Pill } from "@/components/Pill";
import PlatformLogo, { type PlatformLogoKey } from "@/components/PlatformLogo";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

// Live-page note: the live /partners/ page has no in-page application form —
// its CTAs are links to /contact/, /pricing/, #become-a-partner and
// #partner-programs. The final CTA below is therefore links only, as live.
// "Join the program" (Affiliate & Creator Partner) links to
// /affiliate-disclaimer/ on live — reproduced verbatim, not "fixed".

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

const heroStats = [
  { value: "40+", label: "Active partners", icon: "fa-solid fa-handshake" },
  { value: "22%", label: "Referral share", icon: "fa-solid fa-chart-line" },
  { value: "9 yrs", label: "Operating history", icon: "fa-solid fa-chart-column" },
  { value: "48 hrs", label: "Referral response", icon: "fa-solid fa-gauge-high" },
];

const badges: { name: string; logo?: PlatformLogoKey; icon?: string; color?: string }[] = [
  { name: "Shopify Partner", logo: "shopify" },
  { name: "Amazon Ads Partner", logo: "amazon" },
  { name: "Google Partner", icon: "fa-brands fa-google", color: "#4285f4" },
  { name: "Meta Business Partner", logo: "meta" },
  { name: "Microsoft Advertising Partner", icon: "fa-brands fa-microsoft", color: "#00a4ef" },
  { name: "LinkedIn Marketing Partner", icon: "fa-brands fa-linkedin-in", color: "#0a66c2" },
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
    icon: "fa-solid fa-shield-halved",
  },
  {
    title: "Named people, not a pool",
    body: "Your account gets the same strategist and specialists every month. You will know their names, see them on calls, and reach them in the shared channel without going through an account manager first.",
    icon: "fa-solid fa-user-check",
  },
  {
    title: "Payouts you can audit",
    body: "Referral share is calculated on revenue we actually collected, shown line by line in a monthly statement. If a client churns or short-pays, you see exactly why the number moved.",
    icon: "fa-solid fa-file-invoice",
  },
  {
    title: "A 48-hour clock on every intro",
    body: "Referrals get a first call within two business days. You get told what happened either way — scoped, deferred or declined — so you are never the last to know about your own introduction.",
    icon: "fa-solid fa-gauge-high",
  },
  {
    title: "Six disciplines under one roof",
    body: "Store management, SEO, paid media, CRO, retention and development sit in one team. You are not stitching four vendors together on your client’s behalf.",
    icon: "fa-solid fa-diagram-project",
  },
  {
    title: "We say no in front of you",
    body: "If a referral is not a fit — wrong stage, wrong margin, wrong expectations — we tell you before we tell them, with the reasoning. Bad-fit engagements cost you more reputation than they earn us fees.",
    icon: "fa-solid fa-comments",
  },
];

const stack = [
  {
    group: "Store platforms",
    icon: "fa-brands fa-shopify",
    tools: ["Shopify & Shopify Plus", "BigCommerce", "WooCommerce", "Magento / Adobe Commerce"],
  },
  {
    group: "Marketplaces",
    icon: "fa-solid fa-store",
    tools: ["Amazon Seller & Vendor Central", "Walmart Marketplace", "eBay", "Etsy"],
  },
  {
    group: "Ads & analytics",
    icon: "fa-solid fa-chart-line",
    tools: ["Google Ads & GA4", "Meta Ads Manager", "Amazon Ads", "Microsoft Advertising"],
  },
  {
    group: "Email & retention",
    icon: "fa-solid fa-envelope-open-text",
    tools: ["Klaviyo", "Attentive", "Postscript", "Yotpo"],
  },
  {
    group: "CRO & testing",
    icon: "fa-solid fa-flask",
    tools: ["Shopify native A/B", "Hotjar", "Microsoft Clarity", "Convert"],
  },
  {
    group: "SEO & data",
    icon: "fa-solid fa-magnifying-glass-chart",
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

const commitments: { statement: string; sub: string }[] = [
  {
    statement: "We will not solicit your clients.",
    sub: "Non-solicitation runs 24 months past the final invoice, on every agency and white-label agreement.",
  },
  {
    statement: "Your referral hears from us in 48 hours.",
    sub: "And you hear the outcome, whether we scoped it, deferred it or turned it down.",
  },
  {
    statement: "Payouts are calculated on collected revenue.",
    sub: "Monthly statements show the invoices behind the number, not just the number.",
  },
  {
    statement: "No exclusivity, no minimums, no lock-in.",
    sub: "Either side can end the arrangement with 30 days notice and no clawback on earned share.",
  },
  {
    statement: "We decline bad-fit referrals openly.",
    sub: "You get the reasoning before your client does, so you are never contradicted in front of them.",
  },
  {
    statement: "Your data stays yours.",
    sub: "Client lists, pricing and scope documents are never used for our own outbound. Ever.",
  },
];

export default function PartnersPage() {
  return (
    <div className="partners-page">
      {/* 1. Hero */}
      <section className="hero" id="partners-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <Pill icon="fa-solid fa-users">Partnership Program</Pill>
              <h1>Partnerships That Send Work Both Ways</h1>
              <p className="lead">
                We partner with agencies, platforms, consultants and app developers who serve
                online retailers but do not want to build an eCommerce delivery team. You keep
                the relationship. We do the work, or we send the work to you. Either way it is
                documented, revenue-shared and referenceable.
              </p>
              <div className="btn-row">
                <Link
                  className="tm-btn tm-btn-blue"
                  href="#become-a-partner"
                  style={{ boxShadow: "0 10px 26px -6px rgb(11 91 244 / .42)" }}
                >
                  Become a Partner <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
                <Link className="read-more" href="#partner-programs">
                  See Partner Programs
                </Link>
              </div>
            </div>
            <div>
              <div className="hero-img">
                <Image
                  src="/images/partners-hero.webp"
                  alt="Two people shaking hands on a partnership agreement"
                  width={1600}
                  height={1100}
                  priority
                />
              </div>
              <div className="pf-hero-stats">
                {heroStats.map((s) => (
                  <div className="pf-hero-stat" key={s.value}>
                    <span className="pf-hero-stat-icon">
                      <i className={s.icon} aria-hidden="true" />
                    </span>
                    <div>
                      <strong>{s.value}</strong>
                      <span>{s.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Certified & Badged */}
      <section className="section" id="platform-partners" style={{ padding: "100px 0" }}>
        <div className="container">
          <Pill icon="fa-solid fa-screwdriver-wrench" center>
            Certified &amp; Badged
          </Pill>
          <h2 className="pt-h2" style={{ textAlign: "center" }}>
            The platforms we are accountable to
          </h2>
          <p className="lead center">
            Badges are not decoration. Each one carries spend thresholds, certification exams
            and account reviews we have to keep passing. If a platform revokes a badge, it
            comes off this page the same week.
          </p>
          <div className="card-grid card-grid-6">
            {badges.map((b) => (
              <div className="pt-badge-card" key={b.name}>
                {b.logo ? (
                  <PlatformLogo brand={b.logo} size={56} />
                ) : (
                  <i className={b.icon} style={{ color: b.color }} aria-hidden="true" />
                )}
                <h4>{b.name}</h4>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--muted)", marginTop: "24px", textAlign: "center" }}>
            Partner status is verified annually. Shopify Partner since 2018 · Google Partner
            since 2019 · Amazon Ads Partner Network since 2021.
          </p>
        </div>
      </section>

      {/* 3. Four Ways In — Partnership programs */}
      <section
        className="section section-soft"
        id="partner-programs"
        style={{ padding: "100px 0" }}
      >
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>
            Four Ways In
          </Pill>
          <h2 className="pt-h2" style={{ textAlign: "center" }}>
            Partnership programs
          </h2>
          <p className="lead center">
            Pick the one that matches how you already make money. Terms are written down
            before anything is signed, and every program is cancellable with 30 days notice.
          </p>
          <div className="pt-program-grid">
            {programs.map((p) => (
              <article className="pt-program-card" key={p.name}>
                <h3>{p.name}</h3>
                <p className="pt-audience">{p.audience}</p>
                <h4>{p.headline}</h4>
                <ul className="check-list">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link className="read-more" href={p.href}>
                  {p.cta} <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Partner With Us */}
      <section className="section" id="why-partner" style={{ padding: "100px 0" }}>
        <div className="container">
          <Pill icon="fa-solid fa-award" center>
            Why Partner With Us
          </Pill>
          <h2 className="pt-h2" style={{ textAlign: "center" }}>
            What you get that a referral fee does not cover
          </h2>
          <p className="lead center">
            Most partner programs are a commission rate and a contact form. These are the
            six things partners tell us actually mattered once work started moving.
          </p>
          <div className="pt-why-grid">
            {whyPartner.map((w) => (
              <article
                className="fq-card"
                key={w.title}
                style={{ "--fq-tile": "#0B5BF4" } as React.CSSProperties}
              >
                <span
                  className="fq-card-icon"
                  style={{ background: "#EFF4FD", color: "#0B5BF4" }}
                >
                  <i className={w.icon} aria-hidden="true" />
                </span>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Working Stack */}
      <section className="section section-soft" style={{ padding: "100px 0" }}>
        <div className="container">
          <Pill icon="fa-solid fa-calendar-days" center>
            Working Stack
          </Pill>
          <h2 className="pt-h2" style={{ textAlign: "center" }}>
            The tools we are in every day
          </h2>
          <p className="lead center">
            If your product is on this list, an integration conversation is short. If it is
            not, tell us what it does and we will say honestly whether our clients would use
            it.
          </p>
          <div className="pt-stack-grid">
            {stack.map((s) => (
              <article className="pt-stack-cell" key={s.group}>
                <span className="pt-stack-icon">
                  <i className={s.icon} aria-hidden="true" />
                </span>
                <h3>{s.group}</h3>
                <ul className="check-list check-list-blue">
                  {s.tools.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Process */}
      <section className="section" style={{ padding: "100px 0" }}>
        <div className="container">
          <Pill icon="fa-solid fa-diagram-project" center>
            The Process
          </Pill>
          <h2 className="pt-h2" style={{ textAlign: "center" }}>
            How a partnership actually starts
          </h2>
          <p className="lead center">
            Five steps from first call to first statement. Most partners are enabled and
            taking referrals inside three weeks.
          </p>
          <div className="pt-process-grid">
            {processSteps.map((s) => (
              <article className="pt-process-card" key={s.num}>
                <p className="pt-step-num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our Side of It */}
      <section className="section section-soft" style={{ padding: "100px 0" }}>
        <div className="container">
          <div className="pt-commit">
            <div className="pt-commit-text">
              <Pill icon="fa-solid fa-compass" center>
                Our Side of It
              </Pill>
              <h2 className="pt-h2" style={{ textAlign: "left" }}>
                What we commit to, in writing
              </h2>
              <p className="lead">
                A partnership is only worth having if the obligations run both ways. These six
                are in every agreement we sign, and every one of them is enforceable rather
                than aspirational.
              </p>
              <Link className="read-more" href="/contact/">
                Read our full terms <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>
            <div className="pt-commit-card">
              <ul className="check-list">
                {commitments.map((c) => (
                  <li key={c.statement}>
                    <strong>{c.statement}</strong> {c.sub}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Partner FAQs */}
      <section className="section" id="partner-faqs" style={{ padding: "100px 0" }}>
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>
            Partner FAQs
          </Pill>
          <h2 className="pt-h2" style={{ textAlign: "center" }}>
            Questions partners ask before signing
          </h2>
          <p className="lead center">
            Seven things worth settling before the first introduction. Anything else, the
            intro call covers.
          </p>
          <FaqAccordion faqs={faqs} rotateIcon />
        </div>
      </section>

      {/* 9. Final CTA (links only on live — no in-page form) */}
      <section className="section final-cta final-cta-blue" id="become-a-partner">
        <div className="container">
          <h2>Let’s find out if this is worth both our time</h2>
          <p className="lead">
            Thirty minutes, no deck. Tell us who your clients are and what they keep
            asking for, and we will tell you honestly which of the four programs fits —
            or that none of them do.
          </p>
          <div className="btn-row">
            <Link className="tm-btn tm-btn-white" href="/contact/">
              <i className="fa-solid fa-calendar-days" aria-hidden="true" /> Book a partner
              call
            </Link>
            <Link className="tm-btn tm-btn-ghost" href="/pricing/">
              See our pricing <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
          <p style={{ color: "#fff", marginTop: "1.5rem" }}>
            Prefer email?{" "}
            <a href="mailto:partners@dazzlecommerce.com" style={{ color: "#fff" }}>
              partners@dazzlecommerce.com
            </a>{" "}
            — answered within one business day.
          </p>
        </div>
      </section>
    </div>
  );
}
