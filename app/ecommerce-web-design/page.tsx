import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "eCommerce Web Design Agency | UX & Templates",
  description:
    "UX research, information architecture, wireframes, accessible templates and a design system for online stores. Measured per template, handed over as components.",
  alternates: { canonical: "https://dazzlecommerce.com/ecommerce-web-design/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/ecommerce-web-design/",
    siteName: "Dazzle Commerce",
    title: "eCommerce Web Design Agency | UX & Templates",
    description:
      "UX research, information architecture, wireframes, accessible templates and a design system for online stores. Measured per template, handed over as components.",
    images: [
      {
        url: "/images/ecommerce-web-design-hero.webp",
        width: 1200,
        height: 800,
        alt: "Two people reviewing a design on a desktop screen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Web Design Agency | UX & Templates",
    description:
      "UX research, information architecture, wireframes, accessible templates and a design system for online stores. Measured per template, handed over as components.",
  },
};

const faqs: Faq[] = [
  {
    q: "How is this different from your development service?",
    a: "Design decides what the store should do and how it should behave; development makes it exist. They are usually bought together and they are genuinely different work: one produces research, architecture, templates and a design system, the other produces a working storefront, integrations and a release process. If your problem is that pages are slow or the platform cannot do something, that is development. If the pages work and customers still leave, that is this.",
  },
  {
    q: "Do we need a full redesign?",
    a: "Usually not, and we will say so. Most stores we review need three or four templates rebuilt rather than a full redesign — typically category, product and checkout — because those carry the revenue and are where the research points. A full rebuild is the right answer when you are replatforming anyway, when the navigation cannot carry the catalogue any more, or when there is no system and every page is bespoke.",
  },
  {
    q: "What does eCommerce web design cost?",
    a: "It depends on how many templates are in scope, whether a design system exists already, and whether research has to be done from scratch. A template programme on an existing store is the smallest piece of work here; a full replatform design is several times that; a design system on its own sits between them. We scope from the audit rather than quoting a package, and our pricing page explains the approach.",
  },
  {
    q: "How is this different from hiring a design studio?",
    a: "A studio optimises for the work looking right, and it is usually judged at presentation. We optimise for what the templates do to conversion rate and revenue per session, because the same team runs the store afterwards. In practice that changes three things: research comes before layout, every state gets designed rather than just the happy path, and we agree the number the work will be judged against before we start.",
  },
  {
    q: "Do you build what you design?",
    a: "We can, and often do, but it is a separate decision. Our development team works on Shopify, WooCommerce, BigCommerce and Adobe Commerce, and taking both halves means nobody argues about whether a handover was complete. If you have an in-house team or an existing agency, we hand over to them and we do not make that awkward — the design system is documented for exactly that case.",
  },
  {
    q: "What do you hand over?",
    a: "Editable source files, a design system with tokens and components, documented states for every template including empty, loading and error, accessibility annotations, and the written rationale for the decisions we made. Not a PDF of screenshots. The test we hold ourselves to is whether a developer who has never spoken to us could build it correctly from what we handed over.",
  },
  {
    q: "Is accessibility really necessary?",
    a: "Yes, for two reasons. It is a legal requirement in a growing number of markets, and the exposure sits with the retailer rather than the agency. Commercially it also overlaps almost entirely with good design: contrast, target sizes, focus order, clear labels and keyboard operation help every customer on a phone in bright sunlight, not only screen-reader users. We design to WCAG 2.2 AA because retrofitting it later costs several times more than building it in.",
  },
  {
    q: "How is a redesign measured?",
    a: "Against the baseline agreed before we start: conversion rate and revenue per session per template and per device, funnel progression between steps, Core Web Vitals, and an accessibility pass. We report the templates that got worse as well as the ones that improved, because a redesign almost never moves everything in one direction and pretending otherwise makes the next decision worse.",
  },
];

const heroChecks = [
  "Research before layout: your own session data, search queries and funnel drops",
  "A design system handed over as components your developers can actually build",
  "WCAG 2.2 AA as a build standard, not an audit you fail after launch",
];

const heroCards = [
  { title: "Research", body: "Before a single layout" },
  { title: "WCAG 2.2", body: "AA as the build standard" },
  { title: "Components", body: "Handed over, not screenshots" },
  { title: "Mobile first", body: "Designed on the handset, not the monitor" },
];

const problems = [
  {
    title: "It started with the homepage",
    body: "The page that gets the design budget is the page that carries the least revenue. Category and product templates are where buying decisions happen and where the work usually is not.",
  },
  {
    title: "No research went into it",
    body: "A redesign based on internal preference and a competitor screenshot. Nobody looked at the session recordings, the on-site search queries or where the funnel actually drops.",
  },
  {
    title: "Designed on a desktop monitor",
    body: "Signed off at 1440px by people on fast connections, then shipped to an audience that is three-quarters mobile on mid-range handsets.",
  },
  {
    title: "Delivered as pictures, not components",
    body: "Flat mockups of twelve screens, handed to developers who then invent the other two hundred states the catalogue actually needs.",
  },
  {
    title: "Accessibility came up after launch",
    body: "Contrast, focus states, target sizes and keyboard order treated as a remediation project rather than a design constraint. It costs several times more to retrofit.",
  },
  {
    title: "Nobody designed the empty and error states",
    body: "Out of stock, no search results, a declined card, a slow image. The states nobody mocked up are the ones that lose the order.",
  },
  {
    title: "It is unmaintainable by marketers",
    body: "A design that needs a developer for every landing page means the team stops shipping, and the site slowly diverges from the system it was designed around.",
  },
  {
    title: "No baseline was measured first",
    body: "Without before-and-after numbers per template and per device, nobody can say whether the redesign helped, and the next one will be argued on taste too.",
  },
];

const services = [
  {
    title: "UX Research & Funnel Review",
    body: "Session recordings, heatmaps, on-site search queries and funnel drops read per device, before any layout exists.",
  },
  {
    title: "Information Architecture",
    body: "Navigation, category hierarchy, filtering and on-site search structured around how your customers actually search rather than how the catalogue is organised internally.",
  },
  {
    title: "Wireframes & Prototypes",
    body: "Low-fidelity structure agreed before visual design, then clickable prototypes tested on real handsets.",
  },
  {
    title: "Template & Page Design",
    body: "Category, product, basket, checkout, search and account templates — including the empty, loading and error states.",
  },
  {
    title: "Design Systems",
    body: "Tokens, components and documented states, handed over as something your developers build from and your marketers can extend.",
  },
  {
    title: "Accessibility Design",
    body: "Contrast, focus states, target sizes, keyboard order and screen-reader semantics designed in to WCAG 2.2 AA rather than remediated afterwards.",
  },
  {
    title: "Replatform & Redesign Design",
    body: "The design half of a migration, mapped template by template so nothing that currently converts quietly disappears in the move.",
  },
  {
    title: "Landing Page Design",
    body: "Campaign and paid-media landing pages built from the system, so marketers can ship them without a developer.",
  },
];

const templates = [
  {
    num: "01",
    title: "Category & listing",
    points: [
      "Filtering and sort that works on a phone",
      "In-stock products in the first row",
      "Orienting copy above the grid",
      "Buying guidance below it",
    ],
  },
  {
    num: "02",
    title: "Product page",
    points: [
      "Price, delivery date and stock above the fold",
      "Imagery that answers scale and fit",
      "Specifications and objections, not a blurb",
      "Variant selection that cannot be misread",
    ],
  },
  {
    num: "03",
    title: "Basket & checkout",
    points: [
      "Delivery cost and date shown before the final step",
      "Guest checkout with equal visual weight",
      "Every field you do not use, removed",
      "Error and decline states designed, not inherited",
    ],
  },
  {
    num: "04",
    title: "Search & account",
    points: [
      "On-site search results that handle no-result queries",
      "Order tracking without a support ticket",
      "Returns initiated in the account area",
      "Reorder from history in two taps",
    ],
  },
];

const breakpoints = [
  { title: "Mobile", body: "Designed first, on a mid-range handset" },
  { title: "Tablet", body: "Where most grids quietly break" },
  { title: "Desktop", body: "More room, not a different experience" },
  { title: "Dark mode", body: "Handled in tokens, not retrofitted" },
  { title: "Accessibility", body: "WCAG 2.2 AA across every state" },
  { title: "Performance", body: "Image and layout budgets set in design" },
  { title: "Localisation", body: "Room for longer strings and RTL" },
];

const deliverables = [
  {
    title: "UX research findings",
    img: "/images/ecommerce-web-design-ux-research-findings.webp",
    alt: "A flat screen monitor in a design workspace",
  },
  {
    title: "Funnel analysis per device",
    img: "/images/ecommerce-web-design-funnel-analysis.webp",
    alt: "A white desk with a keyboard, mouse and other devices",
  },
  {
    title: "Information architecture map",
    img: "/images/ecommerce-web-design-information-architecture.webp",
    alt: "Desk at night with a laptop and lamp overlooking city lights",
  },
  {
    title: "Wireframes",
    img: "/images/ecommerce-web-design-wireframes.webp",
    alt: "Wooden desk with a monitor and keyboard in a design workspace",
  },
  {
    title: "Clickable prototype",
    img: "/images/ecommerce-web-design-clickable-prototype.webp",
    alt: "Two monitors on a wooden desk in a design studio",
  },
  {
    title: "Category template design",
    img: "/images/ecommerce-web-design-category-template.webp",
    alt: "A laptop on a plain surface",
  },
  {
    title: "Product template design",
    img: "/images/ecommerce-web-design-product-template.webp",
    alt: "A laptop open on a white desk",
  },
  {
    title: "Basket & checkout design",
    img: "/images/ecommerce-web-design-basket-checkout.webp",
    alt: "Laptop open on a wooden desk in a workspace",
  },
  {
    title: "Design system & components",
    img: "/images/ecommerce-web-design-design-system.webp",
    alt: "A laptop, mouse and phone laid out on a desk for comparison",
  },
  {
    title: "Accessibility annotations",
    img: "/images/ecommerce-web-design-accessibility-annotations.webp",
    alt: "A laptop being used at a desk",
  },
  {
    title: "Landing page kit",
    img: "/images/ecommerce-web-design-landing-page-kit.webp",
    alt: "A flat screen monitor on a wooden desk",
  },
  {
    title: "Developer handover pack",
    img: "/images/ecommerce-web-design-developer-handover.webp",
    alt: "A person working on a laptop computer",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Baseline",
    body: "Conversion rate, revenue per session and funnel drop-off recorded per template and per device before anything changes. This is the number the redesign will be judged against, agreed in writing first.",
  },
  {
    num: "02",
    title: "Research",
    body: "Session recordings, heatmaps, on-site search queries including the ones returning nothing, support tickets, and a usability pass on your current templates on real handsets.",
  },
  {
    num: "03",
    title: "Structure",
    body: "Information architecture, navigation and wireframes agreed before any visual design exists, because arguing about layout and colour at the same time is how both decisions get made badly.",
  },
  {
    num: "04",
    title: "Design",
    body: "Templates designed mobile-first, every state included, against a design system rather than as one-off screens. Accessibility and image-weight budgets applied as we go.",
  },
  {
    num: "05",
    title: "Handover",
    body: "Components, tokens and documented states handed to whoever builds it, with annotations for behaviour that a static file cannot show. Our development team can take it, or yours can.",
  },
  {
    num: "06",
    title: "Measure & iterate",
    body: "The baseline re-measured per template after launch, then conversion testing on what the data says to question. A redesign that is never measured cannot be defended or repeated.",
  },
];

const designAgainst = [
  "Information architecture",
  "Filtering and on-site search",
  "Above-the-fold hierarchy",
  "Variant and stock clarity",
  "Delivery and returns messaging",
  "Empty, loading and error states",
  "Target sizes and focus order",
  "Contrast and type scale",
  "Image weight budgets",
  "Component reuse across templates",
];

const measures = [
  {
    title: "Conversion rate",
    body: "Per template and per device, against the baseline agreed before we started.",
  },
  {
    title: "Revenue per session",
    body: "Because a conversion rate can be lifted while the business earns less.",
  },
  {
    title: "Funnel progression",
    body: "Category to product, product to basket, basket to order. The biggest relative drop is the work.",
  },
  {
    title: "Core Web Vitals",
    body: "Design decides most of LCP. A heavier page is a design choice, not just a build one.",
  },
  {
    title: "Accessibility",
    body: "Automated and manual checks against WCAG 2.2 AA, including keyboard-only completion of a purchase.",
  },
];

const businessNeeds = [
  { need: "Conversion Is Flat", work: "Template programme, not a rebuild" },
  { need: "Mobile Converts at Half of Desktop", work: "Mobile-first template redesign" },
  { need: "Replatforming", work: "Design mapped template by template" },
  { need: "Every Page Needs a Developer", work: "Design system & landing page kit" },
  { need: "Failed an Accessibility Review", work: "Accessibility design & remediation" },
  { need: "Catalogue Has Outgrown the Navigation", work: "Information architecture rework" },
  { need: "Brand Refresh Landing on the Store", work: "Design system rollout" },
  { need: "Nobody Can Agree on a Redesign", work: "Research and baseline first" },
];

const whyUs = [
  {
    title: "We Measure the Redesign",
    body: "A baseline per template and per device agreed in writing before work starts, and re-measured after launch. Most redesigns are never judged, which is why the next one is argued on taste.",
  },
  {
    title: "Research Before Layout",
    body: "Your own session recordings, on-site search queries and funnel drops come first. We are not redesigning from a competitor screenshot.",
  },
  {
    title: "Templates, Not Pages",
    body: "A store is a handful of templates producing thousands of URLs. We design the templates and their states, not twelve hero screens.",
  },
  {
    title: "Components, Not Screenshots",
    body: "Handover is a design system with tokens, components and documented states, so your developers build from it rather than interpreting it.",
  },
  {
    title: "Accessibility by Default",
    body: "WCAG 2.2 AA designed in across every state, including keyboard-only completion of a purchase. Retrofitting it after launch costs several times more.",
  },
  {
    title: "Designed on the Handset",
    body: "Mobile first on a mid-range phone on mobile data, because that is the audience. Desktop gets more room, not a different experience.",
  },
  {
    title: "The Team That Markets It",
    body: "The people designing the store also run its SEO, paid media and conversion testing, so nobody ships a template that cannot be marketed or measured.",
  },
  {
    title: "You Own the Files",
    body: "Editable source files, the design system and the written rationale, handed over whether or not we build it and whether or not you stay.",
  },
];

export default function EcommerceWebDesignPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" id="design-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Design &amp; UX</p>
              <h1>eCommerce Web Design Built Around the Decision to Buy</h1>
              <p className="lead">
                User research, information architecture, wireframes, a design system and
                accessible templates for online stores — designed by the team that then has to
                market the store and defend its conversion rate. We are an eCommerce web design
                agency that measures the work, not a studio that presents it.
              </p>
              <ul className="check-list">
                {heroChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Get a UX audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  How we scope and price
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/ecommerce-web-design-hero.webp"
                alt="Two people reviewing a design on a desktop screen"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
          <div className="trust-badges">
            {heroCards.map((c) => (
              <div className="trust-badge" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The Problem */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">The Problem</p>
          <h2>Why eCommerce stores get redesigned and convert no better</h2>
          <p className="lead">
            Eight reasons a redesign fails to move the number. Almost none of them is a taste
            problem, which is the difference between an eCommerce design agency and a studio
            that delivers a beautiful homepage and no category template.
          </p>
          <div className="card-grid">
            {problems.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h2>Our eCommerce web design services</h2>
          <p className="lead">
            Eight services covering the experience layer of an online store. Scope what you
            need from the audit rather than from a package — most engagements are a template
            programme plus a design system, not a full rebuild.
          </p>
          <div className="card-grid">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p className="mt">
            Design sits between three things rather than replacing any of them.{" "}
            <Link href="/ecommerce-development/">eCommerce development</Link> builds what we
            design; <Link href="/conversion-rate-optimization/">conversion optimization</Link>{" "}
            tests it once it is live and tells us what to change;{" "}
            <Link href="/ecommerce-creative-content/">creative and content</Link> produces the
            imagery, video and copy that fill it. If you only need one of the four, the audit
            will say which.
          </p>
        </div>
      </section>

      {/* 4. Coverage */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Coverage</p>
          <h2>The templates that actually decide the sale</h2>
          <p className="lead">
            A store is a small number of templates producing thousands of URLs, so design work
            is template work. These four carry almost all of the revenue, and they are ranked
            here in the order we normally take them — which is rarely the order a brand
            expects.
          </p>
          <div className="card-grid card-grid-2">
            {templates.map((t) => (
              <article className="card" key={t.title}>
                <p className="card-num">{t.num}</p>
                <h3>{t.title}</h3>
                <ul className="check-list">
                  {t.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <h3 className="mt">Designed per breakpoint</h3>
          <div className="card-grid card-grid-4">
            {breakpoints.map((b) => (
              <article className="card" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Deliverables */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Deliverables</p>
          <h2>What you get as an eCommerce UX agency engagement</h2>
          <p className="lead">
            Twelve deliverables. Everything here is handed over in a form your team can use
            without us — editable files, documented components and written rationale. An
            eCommerce UX agency that gives you a PDF of screenshots has handed over a
            document, not a system.
          </p>
          <div className="card-grid">
            {deliverables.map((d) => (
              <article className="case-card" key={d.title}>
                <Image src={d.img} alt={d.alt} width={1920} height={1280} />
                <div className="case-body">
                  <h4>{d.title}</h4>
                </div>
              </article>
            ))}
          </div>
          <p className="mt">
            Not every engagement needs all twelve. A template programme on an existing store
            is usually five or six of these; a replatform design is most of them.
          </p>
        </div>
      </section>

      {/* 6. The Process */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">The Process</p>
          <h2>Our eCommerce design process</h2>
          <p className="lead">
            Six stages. Stage one is measurement, and stage six is measurement again — without
            both, a redesign is an opinion with a budget.
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
        </div>
      </section>

      {/* 7. Accountability */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Accountability</p>
          <h2>How we judge whether the design worked</h2>
          <p className="lead">
            This is where we differ from a conventional design studio. A redesign is a change
            to a revenue-generating asset, so it is measured down the same funnel your media
            buyer reports on, per template and per device.
          </p>
          <h3 className="mt">What we design against</h3>
          <ul className="check-list">
            {designAgainst.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
          <h3 className="mt">What we measure, per template</h3>
          <div className="card-grid">
            {measures.map((m) => (
              <article className="card" key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
          <h3 className="mt">Design work by business need</h3>
          <div className="card-grid card-grid-2">
            {businessNeeds.map((b) => (
              <article className="card" key={b.need}>
                <h3>{b.need}</h3>
                <h4>{b.work}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Us */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Why Us</p>
          <h2>Why choose our eCommerce design agency</h2>
          <p className="lead">
            Eight things that separate this from a studio engagement. The questions worth
            asking are the same whether you are weighing an eCommerce website design agency,
            an eCommerce website agency or a freelancer against us: who does the research,
            what actually gets handed over, and which number is the work judged against.
          </p>
          <div className="card-grid">
            {whyUs.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Our work */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Our work</p>
          <h2>Design work in context</h2>
          <p className="lead">
            Our published case studies include the design and template work inside each
            engagement rather than separating it out, because on a live store the design, the
            build and the testing are one programme. The portfolio and the case studies both
            show the before-and-after figures per engagement.
          </p>
          <div className="btn-row">
            <Link className="btn" href="/portfolio/">
              See the portfolio
            </Link>
            <Link className="btn btn-outline" href="/case-studies/">
              Read the case studies
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="section">
        <div className="container center">
          <p className="eyebrow">FAQs</p>
          <h2>eCommerce web design FAQs</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            Eight questions that come up before most design engagements. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link>
            {" ."}
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Find out which templates are costing you</h2>
          <p className="lead">
            Get a UX audit. We will walk your category, product and checkout templates on a
            real handset, read your funnel per device, and tell you which two or three
            templates are worth redesigning — whether or not you hire us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Get a UX audit
            </Link>
            <Link
              className="btn"
              href="/pricing/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              See pricing and packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
