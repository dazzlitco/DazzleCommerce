import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";

export const metadata: Metadata = {
  title: "eCommerce Store Management Services | Dazzle Commerce",
  description:
    "Full-service eCommerce store management: catalog, merchandising, marketing, CRO, operations and reporting across Shopify, Amazon, Walmart, eBay and WooCommerce.",
  alternates: { canonical: "https://dazzlecommerce.com/ecommerce-management/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/ecommerce-management/",
    siteName: "Dazzle Commerce",
    title: "eCommerce Store Management Services | Dazzle Commerce",
    description:
      "Full-service eCommerce store management: catalog, merchandising, marketing, CRO, operations and reporting across Shopify, Amazon, Walmart, eBay and WooCommerce.",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Store Management Services | Dazzle Commerce",
    description:
      "Full-service eCommerce store management: catalog, merchandising, marketing, CRO, operations and reporting across Shopify, Amazon, Walmart, eBay and WooCommerce.",
  },
};

const faqs: Faq[] = [
  {
    q: "What exactly does eCommerce store management include?",
    a: "Six areas: store management (updates, products, collections, promotions, content), catalog management (listings, descriptions, images, attributes, pricing), marketing management (SEO, PPC, promotions, email, retargeting), conversion optimization (product and landing pages, checkout, UX, testing), operations management (order workflows, inventory coordination, customer experience, marketplace coordination) and analytics (KPI tracking, reporting, opportunity identification, recommendations). Every engagement covers all six — the weighting changes with your stage.",
  },
  {
    q: "How is this different from hiring a marketing agency?",
    a: "A marketing agency runs campaigns against your store. We run the store as well — the catalog, the merchandising, the operational workflows and the reporting, alongside the marketing. That matters because most stalled stores are limited by catalog structure, page experience or operational friction rather than by media spend, and a marketing-only vendor has no mandate to fix any of it.",
  },
  {
    q: "Do you replace our in-house team or work alongside it?",
    a: "Either. At the growing-store end we usually are the team. At the established and enterprise end we more often work alongside an internal marketer or eCommerce manager, taking the disciplines they do not have capacity or specialism for. We map that explicitly during onboarding so there is no overlap and no gap — eCommerce outsourcing goes wrong when nobody writes that boundary down.",
  },
  {
    q: "What does eCommerce management cost?",
    a: (
      <>
        Engagements run from $3,500/month for growing stores to $18,000/month for
        multi-channel and enterprise accounts, with most established brands between $7,500
        and $12,000. The number is driven by business size, platforms and channels, scope
        of work and growth goals rather than by a fixed package.{" "}
        <Link href="/pricing/">Our pricing page</Link> explains how we scope it.
      </>
    ),
  },
  {
    q: "How long before we see results?",
    a: "Operational and conversion fixes usually show inside 30–60 days. Paid media restructuring typically shows in 60–90. SEO and catalog work compounds over 4–9 months depending on category competitiveness and how much technical debt is in the way. We will give you a specific range for your situation on the call rather than a generic one here.",
  },
  {
    q: "Are we locked into a contract?",
    a: "The first 90 days are committed, because the audit, roadmap and foundational work do not produce a fair read in less time. After that it is month-to-month with 30 days notice. We would rather you stay because the reporting justifies it than because a contract does.",
  },
  {
    q: "Can you manage marketplaces and our storefront together?",
    a: "Yes, and we would argue that is the only sensible way to run both. Managed separately they compete on price, cannibalise each other on brand search and give you two irreconcilable views of stock. We coordinate pricing logic, content, inventory and advertising across Shopify, Amazon, Walmart, eBay and Etsy, and report channel contribution rather than channel revenue.",
  },
  {
    q: "Who actually does the work on our account?",
    a: "A named strategist plus the specialists each discipline needs — the same people every month. You will know their names, see them on calls and reach them in a shared channel without going through an account manager first. If someone changes, we tell you before it happens and introduce the replacement.",
  },
];

const heroChecks = [
  "One team across store management, SEO, paid media, CRO and operations",
  "Named strategist and specialists — the same people every month",
  "Month-to-month after the first 90 days, no long lock-in",
];

const stats = [
  { value: "100+", label: "Brands served" },
  { value: "$48M+", label: "GMV managed" },
  { value: "+142%", label: "Average revenue growth" },
  { value: "31 mo", label: "Average client tenure" },
];

const problems = [
  {
    title: "Too many vendors, no owner",
    body: "An SEO agency, a paid media freelancer, a developer on retainer and a VA for listings. Each reports on their own metric, none of them owns revenue, and coordinating them has quietly become your job.",
  },
  {
    title: "The catalog drifts",
    body: "Titles written three years ago, attributes half-filled, collections built around how the warehouse is organised rather than how people search. It works until it silently caps everything else.",
  },
  {
    title: "Firefighting beats strategy",
    body: "Stock issues, a broken feed, a promo that needs building by Friday. Urgent work always wins, so the compounding work — structure, testing, retention — never gets started.",
  },
  {
    title: "Reporting that explains nothing",
    body: "Platform dashboards each claim credit for the same order. Nobody can say what actually drove the month, so next month is another guess with a bigger budget.",
  },
  {
    title: "Hiring in-house is slow and expensive",
    body: "A merchandiser, a paid media manager, an SEO and a developer is a payroll most stores cannot justify before the revenue exists — and the revenue needs them first.",
  },
  {
    title: "Marketplaces run as an afterthought",
    body: "Amazon, Walmart and eBay treated as a side channel with its own pricing logic, its own stock and no view of what it costs you on the storefront.",
  },
];

const disciplines = [
  {
    title: "Store Management",
    body: "The day-to-day running of the storefront itself.",
    items: [
      "Store updates",
      "Product management",
      "Collections and categories",
      "Promotions",
      "Content updates",
    ],
  },
  {
    title: "Catalog Management",
    body: "The data layer everything else depends on.",
    items: [
      "Product listings",
      "Descriptions",
      "Images",
      "Attributes",
      "Pricing information",
    ],
  },
  {
    title: "Marketing Management",
    body: "Demand capture and demand creation, run as one plan.",
    items: ["SEO", "PPC", "Promotions", "Email", "Retargeting"],
  },
  {
    title: "Conversion Optimization",
    body: "Turning the traffic you already pay for into orders.",
    items: ["Product pages", "Landing pages", "Checkout", "UX", "A/B testing"],
  },
  {
    title: "Operations Management",
    body: "The workflows behind every order that ships. eCommerce operations is the half of the job nobody advertises — stock accuracy, fulfilment lanes, returns, supplier lead times, the reconciliation between what the store says and what the warehouse holds. It is also the half that quietly caps growth once marketing starts working.",
    items: [
      "Order workflows",
      "Inventory coordination",
      "Customer experience",
      "Marketplace coordination",
    ],
  },
  {
    title: "Analytics & Reporting",
    body: "Knowing what moved, why, and what to do next.",
    items: [
      "KPI tracking",
      "Performance reporting",
      "Opportunity identification",
      "Strategic recommendations",
    ],
  },
];

const platforms = [
  {
    name: "Shopify & Shopify Plus",
    note: "Theme, apps, markets, B2B and Flow automation",
  },
  {
    name: "Amazon",
    note: "Seller and Vendor Central, FBA, Brand Registry, A+",
  },
  {
    name: "WooCommerce",
    note: "WordPress builds, plugins, performance and hosting",
  },
  {
    name: "Walmart Marketplace",
    note: "Listing quality, WFS, repricing and item health",
  },
  {
    name: "eBay",
    note: "Store design, listing structure and promoted listings",
  },
  {
    name: "Etsy",
    note: "Shop sections, tags, Etsy Ads and handmade policy",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit & discovery",
    body: "Two weeks inside your store, your analytics, your ad accounts and your search visibility. We come back with what is actually capping revenue, ranked by how much it is worth and how hard it is to fix — not a list of everything that is wrong.",
  },
  {
    num: "02",
    title: "Strategy & roadmap",
    body: "A ninety-day plan with named owners, sequencing and the metric each workstream is accountable for. You approve it before anything is touched, and you can see why each item sits where it does.",
  },
  {
    num: "03",
    title: "Onboarding & handover",
    body: "Access, tooling, brand rules, supplier constraints and the things that have already been tried. We document the current state so nothing gets rebuilt twice, and set up the shared channel and reporting.",
  },
  {
    num: "04",
    title: "Execute & optimise",
    body: "Weekly delivery against the roadmap: catalog, merchandising, campaigns, tests and operations. Work in flight is visible in your board, not summarised at month end.",
  },
  {
    num: "05",
    title: "Report & review",
    body: "A monthly report that leads with the number, explains what moved it and names what did not work. A quarterly review resets the roadmap on evidence rather than on a renewal date.",
  },
  {
    num: "06",
    title: "Scale",
    body: "Once the floor is fixed, we widen: new channels, new markets, new categories. Only after the existing ones are compounding — scaling a leaky funnel just costs more.",
  },
];

const tiers = [
  {
    title: "Growing Stores",
    range: "Roughly $30k–$150k/month",
    badge: null as string | null,
    body: "You have product-market fit and a store that works, but growth has flattened and everything depends on you personally.",
    items: [
      "Catalog and collection structure rebuilt for search demand",
      "One or two acquisition channels run properly, not five run badly",
      "Conversion work on the pages that already carry the revenue",
      "Email and SMS foundations so repeat purchase starts compounding",
      "A single monthly report you can actually act on",
    ],
    price: "From $3,500/month",
  },
  {
    title: "Established Brands",
    range: "Roughly $150k–$600k/month",
    badge: "MOST COMMON",
    body: "Multiple channels running, a small internal team, and the constraint has moved from traffic to margin and coordination.",
    items: [
      "Full six-discipline management with a named strategist",
      "Blended CAC and contribution reporting across every channel",
      "A structured testing programme with a prioritised backlog",
      "Retention and lifecycle built around product replenishment timing",
      "Marketplace and storefront coordinated on price, stock and content",
    ],
    price: "From $7,500/month",
  },
  {
    title: "Enterprise / Multi-Channel",
    range: "$600k/month and above",
    badge: null as string | null,
    body: "Several storefronts, marketplaces or regions, an internal team to work alongside, and real operational complexity.",
    items: [
      "Dedicated pod: strategist, specialists and a delivery lead",
      "Multi-region and multi-storefront governance and rollout",
      "ERP, PIM, 3PL and marketplace integration ownership",
      "Custom reporting warehouse and executive dashboards",
      "Quarterly business reviews with your leadership, not just your marketer",
    ],
    price: "Custom — typically $12,000–$18,000/month",
  },
];

const whyChoose = [
  {
    title: "One Integrated Team",
    body: "Store management, SEO, paid media, CRO, retention and development sit in one team under one strategy. No briefing four vendors on the same context, and no gap where the work between them should be.",
  },
  {
    title: "Data-Driven Decisions",
    body: "Every recommendation traces back to something measurable — search demand, a test result, contribution margin. Where the data is thin we say so and tell you what it would cost to find out.",
  },
  {
    title: "Continuous Optimization",
    body: "A prioritised backlog that runs every month rather than a project that finishes. Small compounding gains on the pages and campaigns that already carry revenue.",
  },
  {
    title: "Transparent Reporting",
    body: "One report, one set of numbers, reconciled across platforms. It leads with what moved and includes what did not work — the second half is what makes the first half worth reading.",
  },
  {
    title: "Scalable Processes",
    body: "Documented workflows for catalog, launches, promotions and reporting. When volume doubles the process holds, and if you ever bring it in-house the documentation comes with you.",
  },
  {
    title: "Strategic + Hands-On Execution",
    body: "We write the strategy and then do the work. Nobody hands you a deck and a list of recommendations to implement yourself.",
  },
];

const cases = [
  {
    name: "Nutriblend",
    href: "/nutriblend-supplements-retention-uk/",
    img: "/images/case-nutriblend.webp",
    imgAlt: "Dazzle Commerce SEO team working through category page structure",
    meta: "Health & Supplements · Shopify Plus",
    challenge:
      "Store growth had stalled at $4.1M with strong repeat intent and no subscription mechanic. Paid spend was 84% cold prospecting on a product customers physically run out of every thirty days.",
    did: "Management + CRO + PPC + Email & Retention",
    results: [
      { value: "+214%", label: "Revenue YoY" },
      { value: "+46%", label: "Subscription rate" },
      { value: "-31%", label: "Blended CAC" },
    ],
  },
  {
    name: "VAC Vacuums",
    href: "/vac-vacuums-amazon-marketplace-europe/",
    img: "/images/case-vac-vacuums.webp",
    imgAlt: "Dazzle Commerce marketplace team reviewing Amazon account performance",
    meta: "Home & Appliances · Amazon + Shopify",
    challenge:
      "Three years of ad-hoc listing edits had left duplicate ASINs, lost Buy Box on top sellers and TACoS climbing past 22%, with marketplace run entirely separately from the storefront.",
    did: "Management + Catalog + Marketplace Advertising",
    results: [
      { value: "+186%", label: "Amazon sales" },
      { value: "+64%", label: "Buy Box rate" },
      { value: "-42%", label: "TACoS" },
    ],
  },
  {
    name: "Kitchenary",
    href: "/kitchenary-home-kitchen-shopify-usa/",
    img: "/images/case-kitchenary.webp",
    imgAlt: "Dazzle Commerce paid media specialists reviewing campaign performance",
    meta: "Home & Kitchen · Shopify",
    challenge:
      "340 collection pages organised around internal merchandising logic rather than search demand, on a theme with a 4.1 second mobile LCP that capped both rankings and conversion.",
    did: "Management + SEO + CRO + Development",
    results: [
      { value: "+97%", label: "Organic traffic" },
      { value: "+52%", label: "Conversion rate" },
      { value: "1.6s", label: "Mobile LCP" },
    ],
  },
];

export default function EcommerceManagementPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" id="management-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <Pill icon="fa-solid fa-users">eCommerce Management</Pill>
              <h1>eCommerce Store Management, Run by People Who Own the Number</h1>
              <p className="lead">
                We take over the day-to-day running of your online store — catalog,
                merchandising, marketing, conversion, operations and reporting — so you get one
                accountable team instead of five vendors and a spreadsheet. Storefront and
                marketplace, managed together. Online store management as a job someone owns,
                not a list of tickets.
              </p>
              <ul className="check-list">
                {heroChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Book a free growth audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/ecommerce-management-hero.webp"
                alt="Warehouse aisle stacked with boxes and pallets"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
          <div className="stat-row">
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The Problem */}
      <section className="section" id="management-challenge">
        <div className="container">
          <Pill icon="fa-solid fa-triangle-exclamation" center>The Problem</Pill>
          <h2>The eCommerce management challenge</h2>
          <p className="lead">
            Most stores do not stall because the strategy was wrong. They stall because nobody
            owns the operating work end to end, and the compounding tasks keep losing to the
            urgent ones.
          </p>
          <div className="card-grid">
            {problems.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
          <h3 style={{ marginTop: "32px" }}>What managed properly actually looks like</h3>
          <p>
            One strategy, one team and one number everybody is measured against. The catalog is
            structured for search and merchandising, marketing runs against contribution rather
            than platform-reported ROAS, conversion work is scheduled instead of improvised,
            and the monthly report says what moved, why, and what happens next. That is the
            whole offer.
          </p>
        </div>
      </section>

      {/* 3. Scope of Work */}
      <section className="section section-soft" id="what-we-manage">
        <div className="container">
          <Pill icon="fa-solid fa-list-check" center>Scope of Work</Pill>
          <h2>What we manage: eCommerce management services in full</h2>
          <p className="lead">
            Six disciplines, one accountable team. Every engagement covers all six — the
            weighting changes with your stage, the ownership does not. Buying eCommerce
            management services one discipline at a time is how the gaps between them stop
            being anybody’s problem.
          </p>
          <div className="card-grid">
            {disciplines.map((d) => (
              <article className="card" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
                <ul className="check-list">
                  {d.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Platforms */}
      <section className="section" id="platforms-we-manage">
        <div className="container">
          <Pill icon="fa-solid fa-screwdriver-wrench" center>Platforms</Pill>
          <h2>Platforms we manage for online store management</h2>
          <p className="lead">
            Storefront and marketplace under one team, with pricing, stock and reporting that
            reconcile across all of them.
          </p>
          <div className="card-grid">
            {platforms.map((p) => (
              <div className="card platform-card" key={p.name}>
                <h3 className="platform-name">{p.name}</h3>
                <p>{p.note}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "24px" }}>
            On a different platform — BigCommerce, Magento, Adobe Commerce, Squarespace?{" "}
            <Link href="/contact/">Tell us what you are on</Link> and we will say honestly
            whether we are the right team for it.
          </p>
        </div>
      </section>

      {/* 5. The Process */}
      <section className="section section-soft" id="how-it-works">
        <div className="container">
          <Pill icon="fa-solid fa-diagram-project" center>The Process</Pill>
          <h2>How our eCommerce management works</h2>
          <p className="lead">
            Six stages, then the last three repeat every quarter. Most accounts are through
            onboarding and shipping work inside three weeks.
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

      {/* 6. By Stage */}
      <section className="section" id="by-business-stage">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>By Stage</Pill>
          <h2>Management by business stage</h2>
          <p className="lead">
            The same six disciplines, weighted differently. What changes with size is depth,
            governance and how much of the work sits with us rather than alongside your team.
          </p>
          <div className="card-grid">
            {tiers.map((t) => (
              <article className="card" key={t.title}>
                {t.badge ? (
                  <h6 className="label-plain">{t.badge}</h6>
                ) : null}
                <h3>{t.title}</h3>
                <p>
                  <strong>{t.range}</strong>
                </p>
                <p>{t.body}</p>
                <ul className="check-list">
                  {t.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h4>{t.price}</h4>
                <p style={{ marginTop: "1rem" }}>
                  <Link className="btn btn-outline" href="/contact/">
                    Talk about this tier
                  </Link>
                </p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "24px" }}>
            Not sure which fits? <Link href="/pricing/">See how our pricing works</Link> or{" "}
            <Link href="/contact/">book a call</Link> and we will tell you which tier your
            numbers actually justify — including when that is the smaller one.
          </p>
        </div>
      </section>

      {/* 7. Why Us */}
      <section className="section section-soft" id="why-choose">
        <div className="container">
          <Pill icon="fa-solid fa-award">Why Us</Pill>
          <h2>Why choose our eCommerce management</h2>
          <p className="lead">
            Six things clients say actually mattered once the work started — not the six things
            every agency page claims.
          </p>
          <div className="card-grid">
            {whyChoose.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Proof */}
      <section className="section" id="management-results">
        <div className="container">
          <Pill icon="fa-solid fa-chart-line" center>Proof</Pill>
          <h2>Results from managed accounts</h2>
          <p className="lead">
            Three engagements where we ran the store rather than advised on it. Figures are
            measured against the twelve months before we started, not against a forecast.
          </p>
          <div className="card-grid">
            {cases.map((c) => (
              <article className="card" key={c.name}>
                <div className="split-img" style={{ marginBottom: "1rem" }}>
                  <Image src={c.img} alt={c.imgAlt} width={1920} height={1280} />
                </div>
                <h6 className="label-plain">Client</h6>
                <h3>
                  <Link href={c.href}>{c.name}</Link>
                </h3>
                <p>{c.meta}</p>
                <h6 className="label-plain">Challenge</h6>
                <p>{c.challenge}</p>
                <h6 className="label-plain">What we did</h6>
                <p>{c.did}</p>
                <h6 className="label-plain">Result</h6>
                <div className="stat-row" style={{ marginTop: "12px" }}>
                  {c.results.map((r) => (
                    <div className="stat" key={r.label}>
                      <strong>{r.value}</strong>
                      <span>{r.label}</span>
                    </div>
                  ))}
                </div>
                <p style={{ marginTop: "1rem" }}>
                  <Link href="/case-studies/">Read case study</Link>
                </p>
              </article>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn" href="/case-studies/">
              See all case studies
            </Link>
            <Link className="btn btn-outline" href="/portfolio/">
              Browse the portfolio
            </Link>
          </div>
          <p style={{ marginTop: "24px" }}>
            Results vary considerably by category, margin structure and starting position. On a
            call we will give you an honest range for your situation, including where we would
            expect slower movement.
          </p>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="section section-soft" id="management-faqs">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>FAQs</Pill>
          <h2>eCommerce management FAQs</h2>
          <p className="lead">
            The eight questions that come up before almost every engagement. There are more on{" "}
            <Link href="/faqs/">our full FAQ page</Link> .
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Let us tell you what is actually capping your revenue</h2>
          <p className="lead">
            Book a free growth audit. We will look at your storefront, your catalog, your paid
            accounts and your search visibility, and come back with the three things worth
            fixing first — whether or not you hire us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Book a free growth audit
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
