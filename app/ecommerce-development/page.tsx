import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "eCommerce Development Agency & Technology | Dazzle Commerce",
  description:
    "eCommerce website development on Shopify, WooCommerce and BigCommerce: custom builds, replatforming, integrations, performance and ongoing technical support.",
  alternates: { canonical: "https://dazzlecommerce.com/ecommerce-development/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/ecommerce-development/",
    siteName: "Dazzle Commerce",
    title: "eCommerce Development Agency & Technology | Dazzle Commerce",
    description:
      "eCommerce website development on Shopify, WooCommerce and BigCommerce: custom builds, replatforming, integrations, performance and ongoing technical support.",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Development Agency & Technology | Dazzle Commerce",
    description:
      "eCommerce website development on Shopify, WooCommerce and BigCommerce: custom builds, replatforming, integrations, performance and ongoing technical support.",
  },
};

const faqs: Faq[] = [
  {
    q: "How long does an eCommerce build take?",
    a: "A straightforward Shopify build on a customised theme is typically 6–10 weeks. A replatform with data migration and integrations runs 10–16. Custom functionality or B2B portals extend that further. The variable that moves timelines most is not development speed — it is how quickly content, product data and decisions come back from your side, which we scope explicitly at planning.",
  },
  {
    q: "What does eCommerce development cost?",
    a: "Project builds typically start around $15,000 for a well-specified Shopify store and run to $60,000+ for replatforms with custom functionality and integrations. Ongoing maintenance and development retainers run $1,500–$6,000/month. We scope from requirements rather than quoting a package. Our pricing page explains the approach.",
  },
  {
    q: "Which platform should we be on?",
    a: "For most D2C brands under roughly $20M, Shopify or Shopify Plus, because the ecosystem and hosting burden are solved problems. WooCommerce where content and WordPress integration genuinely matter. BigCommerce for complex B2B pricing. Adobe Commerce only where the catalog complexity truly demands it and you have budget for the maintenance. We will tell you if your current platform is fine — migrations are expensive and often unnecessary.",
  },
  {
    q: "Will a replatform cost us our search rankings?",
    a: "Not if it is planned properly. A full URL inventory, a mapped redirect for every URL that has earned a link or a ranking, preserved URL patterns where they carry equity, and a staged crawl-and-fix programme through the first eight weeks. On the Luxury Comforts migration we retained 94% of rankings. Migrations lose traffic when redirects are treated as a launch-day task rather than a planning-phase deliverable.",
  },
  {
    q: "Do you work with our existing developer or agency?",
    a: "Frequently. We can take a defined workstream, work alongside an in-house developer, or act as the escalation path for work beyond their specialism. What we ask for is clear ownership boundaries in writing, because shared codebases without them produce conflicts nobody wants to untangle at launch.",
  },
  {
    q: "What happens after launch?",
    a: "Either a maintenance retainer or a handover, and both are legitimate choices. A retainer covers monitoring, updates, small development and a named developer who knows the codebase. If you would rather take it in-house, we document the build and hand over cleanly — we will not hold your store hostage through undocumented custom code.",
  },
  {
    q: "Can you fix a store somebody else built?",
    a: "Yes, and about half our development work starts that way. The first step is an audit of the existing codebase to establish what is salvageable, because sometimes an honest answer is that a rebuild costs less than continuing to patch. We will tell you which one it is before you commit budget.",
  },
  {
    q: "Do you handle hosting and infrastructure?",
    a: "On Shopify and BigCommerce it is handled by the platform. On WooCommerce and Adobe Commerce we will specify and configure hosting, CDN and caching, and either manage it or work with your provider. We do not resell hosting, so the recommendation is based on what the store needs rather than what we margin on.",
  },
];

const heroStats = [
  { value: "1.6s", label: "Mobile LCP achieved" },
  { value: "94%", label: "Rankings retained" },
  { value: "11 wk", label: "Migration delivered" },
  { value: "-38%", label: "Platform cost cut" },
];

const heroChecks = [
  "Performance budgeted from the first commit, not retrofitted after launch",
  "Migrations planned around redirects and rankings, not just data transfer",
  "SEO and CRO considered during build, because the same team owns them after",
];

const challenges = [
  {
    title: "Slow or outdated stores",
    body: "Apps stacked on apps and a theme three major versions behind. Every added feature makes the next one slower.",
  },
  {
    title: "Poor mobile experiences",
    body: "Most of the traffic, a fraction of the revenue, on a layout that was designed and signed off on a desktop monitor.",
  },
  {
    title: "Limited platform functionality",
    body: "The business needs something the platform does not do natively, and the available app does 60% of it badly.",
  },
  {
    title: "Difficult integrations",
    body: "An ERP, a 3PL and a POS that each expect a different data shape, joined by a spreadsheet somebody exports weekly.",
  },
  {
    title: "Disconnected systems",
    body: "Stock in one system, orders in another, customers in a third. No single source of truth, so every report disagrees.",
  },
  {
    title: "Checkout friction",
    body: "Extra steps, missing payment methods and a shipping calculator that reveals cost at the worst possible moment.",
  },
  {
    title: "Scalability limitations",
    body: "A build that works at 500 orders a month and falls over at 5,000, because nothing was designed for the second number.",
  },
  {
    title: "Technical SEO problems",
    body: "Faceted URLs generating index bloat, broken canonicals and JavaScript rendering that hides content from crawlers.",
  },
  {
    title: "Frequent bugs",
    body: "Releases that break something else each time, because there is no staging environment and no regression testing.",
  },
  {
    title: "Difficult store maintenance",
    body: "Nobody left who understands the custom code, so every small change becomes a quote and a two-week wait.",
  },
  {
    title: "Legacy technology",
    body: "A stack chosen five years ago for reasons nobody documented, now expensive to host and impossible to hire for.",
  },
  {
    title: "Platform limitations",
    body: "A genuine ceiling on what the current platform can do, reached long before anybody admitted it was the constraint.",
  },
];

const services = [
  {
    num: "01",
    title: "eCommerce Website Development",
    body: "Custom, conversion-focused online stores built around how your customers actually buy. Hiring an eCommerce website developer by the hour gets you a build; this gets you a build the same team then has to market. Where the brief is the experience rather than the engineering, that is",
    link: { href: "/ecommerce-web-design/", label: "eCommerce web design" },
  },
  {
    num: "02",
    title: "Shopify Development",
    body: "Store builds, theme customization, apps and Shopify Plus functionality including Flow and Markets.",
  },
  {
    num: "03",
    title: "WooCommerce Development",
    body: "Flexible WordPress-based eCommerce, with the hosting and plugin discipline it needs to stay fast.",
  },
  {
    num: "04",
    title: "Custom eCommerce Development",
    body: "Bespoke functionality where the platform and its app ecosystem genuinely cannot deliver it, including",
    link: { href: "/ecommerce-app-development/", label: "private platform apps and mobile apps" },
  },
  {
    num: "05",
    title: "Store Redesign & Replatforming",
    body: "Modernization and platform migrations with rankings, redirects and data integrity planned first.",
  },
  {
    num: "06",
    title: "eCommerce Integrations",
    body: "Connecting the storefront to ERP, CRM, 3PL, POS and the rest of the systems that run the business.",
  },
  {
    num: "07",
    title: "Performance Optimization",
    body: "Core Web Vitals, front-end weight, app audit and the stability work that keeps it fast.",
  },
  {
    num: "08",
    title: "Maintenance & Technical Support",
    body: "Ongoing development, updates, monitoring and the troubleshooting that stops small issues compounding.",
  },
];

const platformGroups = [
  {
    title: "eCommerce Platforms",
    items: ["Shopify & Shopify Plus", "WooCommerce", "BigCommerce", "Adobe Commerce / Magento"],
  },
  {
    title: "Front-End & Technology",
    items: ["WordPress", "React", "Next.js", "HTML / CSS / JavaScript"],
  },
  {
    title: "Business & Marketing Integrations",
    items: [
      "CRM",
      "ERP",
      "Email platforms",
      "Analytics",
      "Payment systems",
      "Shipping & fulfillment systems",
    ],
  },
];

const scopeItems = [
  "New eCommerce stores",
  "Custom storefronts",
  "Product & category experiences",
  "Landing pages",
  "Subscription stores",
  "B2B eCommerce portals",
  "Multi-store experiences",
  "Custom checkout experiences",
  "Customer account areas",
  "Custom features & functionality",
];

const ecosystem = [
  {
    title: "Payments",
    body: "Gateways, wallets, BNPL and multi-currency settlement.",
  },
  {
    title: "Inventory",
    body: "Stock sync across storefront, marketplaces and warehouse.",
  },
  {
    title: "CRM",
    body: "Customer records, service history and segmentation.",
  },
  {
    title: "ERP",
    body: "Orders, invoicing, purchasing and financial reconciliation.",
  },
  {
    title: "Email / SMS",
    body: "Klaviyo, Omnisend and Attentive with full event data.",
  },
  {
    title: "Analytics",
    body: "GA4, server-side tracking and reporting warehouses.",
  },
  {
    title: "Shipping",
    body: "3PL, carrier rates, labels and tracking back to the customer.",
  },
  {
    title: "Marketplaces",
    body: "Amazon, Walmart, eBay and Etsy listing and order sync.",
  },
  {
    title: "Customer Support",
    body: "Helpdesk, live chat and returns portals with order context.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    body: "Business requirements, current technology and the systems already in place. What the store has to do, what it must not break, and who depends on it internally.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Architecture, functionality scope and a project roadmap with sequencing. Approved before any code is written, so scope changes are decisions rather than surprises.",
  },
  {
    num: "03",
    title: "Design",
    body: "UX and UI for a conversion-focused storefront — templates, states and edge cases, designed mobile-first because that is where the traffic is.",
  },
  {
    num: "04",
    title: "Develop",
    body: "Storefront, features and integrations built on a staging environment, in reviewable increments rather than one reveal at the end.",
  },
  {
    num: "05",
    title: "Test",
    body: "Performance, device coverage, checkout, functionality and QA. Including the failure paths — declined payments, out-of-stock races, integration timeouts.",
  },
  {
    num: "06",
    title: "Launch",
    body: "Deployment, data migration and redirect mapping, with a rollback plan and someone watching for the first 48 hours.",
  },
  {
    num: "07",
    title: "Optimize & Support",
    body: "Maintenance, monitoring and continuous technical improvement, so the build keeps working as the business changes shape.",
  },
];

const needs = [
  {
    need: "Launch a New Store",
    solution: "eCommerce design & development",
    body: "A build scoped around your catalog, margin and fulfilment reality rather than a template demo. If you have been looking for an eCommerce web developer and finding freelancers who will build what you specify, the difference here is that we will argue with the specification first. Most brands at this stage are weighing one eCommerce developer against an agency, and the honest distinction is not skill but accountability after launch — eCommerce web developers hand over a build, while the team that has to market the store afterwards has to live with it.",
  },
  {
    need: "Improve an Existing Store",
    solution: "Redesign & optimization",
    body: "Incremental rebuilds of the templates carrying revenue, measured rather than replaced wholesale.",
  },
  {
    need: "Change Platforms",
    solution: "Store migration / replatforming",
    body: "Full URL inventory, redirect map and staged crawl-and-fix so the traffic survives the move.",
  },
  {
    need: "Improve Site Speed",
    solution: "Performance optimization",
    body: "App audit, front-end weight, image pipeline and Core Web Vitals against a measured baseline.",
  },
  {
    need: "Add New Functionality",
    solution: "Custom development",
    body: "Built natively where the platform allows it, so it survives the next platform update.",
  },
  {
    need: "Connect Business Systems",
    solution: "API & third-party integrations",
    body: "ERP, CRM, 3PL and POS joined properly, with error handling for when one of them is down.",
  },
  {
    need: "Scale the Business",
    solution: "Scalable architecture",
    body: "Designed for the order volume and catalog size you are heading toward, not the current one.",
  },
  {
    need: "Maintain the Store",
    solution: "Technical support & maintenance",
    body: "Monitoring, updates and a named developer who already knows your codebase.",
  },
];

const foundations = [
  {
    title: "Performance",
    items: ["Page speed", "Core Web Vitals", "Front-end optimization"],
  },
  {
    title: "Reliability",
    items: ["Testing", "Error handling", "Stable releases"],
  },
  {
    title: "Security",
    items: ["Secure development practices", "Payment & data considerations", "Updates and maintenance"],
  },
  {
    title: "Scalability",
    items: ["Growing catalogs", "Increased traffic", "New markets & channels", "Future integrations"],
  },
];

const whyChoose = [
  {
    title: "eCommerce-Specific Expertise",
    body: "Variant logic, faceted navigation, feed generation and checkout constraints are our daily work, not something we look up when a ticket mentions them.",
  },
  {
    title: "Growth-Focused Development",
    body: "We build the store we then have to grow. That changes what gets prioritised — nobody here ships a beautiful build that cannot be marketed.",
  },
  {
    title: "UX + Technology Thinking",
    body: "Design and engineering in the same conversation, so the interface that tests well is also the one that can actually be built and maintained.",
  },
  {
    title: "Performance-First Approach",
    body: "A performance budget set before development starts and enforced at review, rather than a speed audit two months after launch.",
  },
  {
    title: "Scalable Architecture",
    body: "Built for the catalog and order volume you are heading toward. Rebuilding at 5,000 orders a month because it was scoped for 500 is an avoidable cost.",
  },
  {
    title: "Integration Expertise",
    body: "ERP, CRM, 3PL, POS and marketplace connections, including the error handling for the days one of them is unavailable.",
  },
  {
    title: "SEO & CRO Awareness",
    body: "URL structure, crawlability, schema and conversion patterns are decided during the build, by the team that owns those metrics afterwards.",
  },
  {
    title: "Ongoing Technical Support",
    body: "A named developer who already knows your codebase, rather than a support queue that starts from scratch each time.",
  },
];

type Project = {
  name: string;
  nameHref?: string;
  sub: string;
  requirement: string;
  technology: string;
  built: string;
  metrics: { value: string; label: string }[];
  desktop: { src: string; alt: string; width: number; height: number };
  mobile: { src: string; alt: string; width: number; height: number };
};

const projects: Project[] = [
  {
    name: "Luxury Comforts",
    sub: "Magento to Shopify Plus replatform",
    requirement:
      "A 2,400-SKU furniture catalog on Adobe Commerce with rising hosting costs, an eighteen-month development backlog and a configurator unusable below 768px.",
    technology: "Shopify Plus, custom configurator app, Next.js content layer, ERP and 3PL integration",
    built:
      "Full migration with a mapped redirect for every ranking URL, the product configurator rebuilt as a mobile-native flow, and finance messaging plus delivery estimates added to the buy box.",
    metrics: [
      { value: "-38%", label: "Platform cost" },
      { value: "94%", label: "Rankings retained" },
      { value: "+61%", label: "Mobile revenue" },
      { value: "11 wk", label: "Delivery time" },
    ],
    desktop: {
      src: "/images/ecommerce-development-luxury-comforts-desktop.webp",
      alt: "Desktop monitor showing an elegant modern furniture eCommerce storefront",
      width: 1920,
      height: 1280,
    },
    mobile: {
      src: "/images/ecommerce-development-luxury-comforts-mobile.webp",
      alt: "Smartphone showing a furniture product configurator with fabric colour options",
      width: 1920,
      height: 1280,
    },
  },
  {
    name: "Kitchenary",
    nameHref: "/kitchenary-home-kitchen-shopify-usa/",
    sub: "Performance rebuild & template overhaul",
    requirement:
      "A Shopify theme carrying fourteen apps, a 4.1 second mobile LCP and category templates showing four products above the fold on a phone.",
    technology: "Shopify, custom theme fork, image pipeline rework, app consolidation",
    built:
      "App audit removing six redundant apps, category and product templates rebuilt mobile-first, image delivery reworked, and render-blocking scripts deferred or eliminated.",
    metrics: [
      { value: "1.6s", label: "Mobile LCP" },
      { value: "+52%", label: "Conversion rate" },
      { value: "-61%", label: "Page weight" },
      { value: "6", label: "Apps removed" },
    ],
    desktop: {
      src: "/images/ecommerce-development-kitchenary-desktop.webp",
      alt: "Laptop on a kitchen counter showing a bright cookware eCommerce store",
      width: 1920,
      height: 1280,
    },
    mobile: {
      src: "/images/ecommerce-development-kitchenary-mobile.webp",
      alt: "Smartphone showing a fast mobile kitchenware product page",
      width: 1280,
      height: 1920,
    },
  },
  {
    name: "Northline Supply",
    sub: "B2B portal & net-terms checkout",
    requirement:
      "A B2B distributor taking trade orders by email and phone, with customer-specific pricing held in an ERP that the storefront could not see.",
    technology: "BigCommerce, custom B2B portal, ERP integration, net-terms checkout",
    built:
      "A customer account area exposing contract pricing from the ERP in real time, quote-to-order workflow, net-terms checkout with credit limit checks, and reorder from order history.",
    metrics: [
      { value: "+73%", label: "B2B orders" },
      { value: "-64%", label: "Order admin time" },
      { value: "2.1x", label: "Reorder rate" },
      { value: "9 wk", label: "Delivery time" },
    ],
    desktop: {
      src: "/images/ecommerce-development-northline-desktop.webp",
      alt: "Desktop monitor in a warehouse office showing a B2B wholesale supply eCommerce portal",
      width: 1920,
      height: 1280,
    },
    mobile: {
      src: "/images/ecommerce-development-northline-mobile.webp",
      alt: "Laptop at a warehouse desk showing a B2B order history and reorder page",
      width: 1920,
      height: 1280,
    },
  },
];

export default function EcommerceDevelopmentPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Development &amp; Technology</p>
              <h1>eCommerce Development That Holds Up After Launch</h1>
              <p className="lead">
                Shopify, WooCommerce and custom builds designed around conversion and speed,
                integrated with the systems that actually run your business. Built by people who
                then have to market the store they shipped.
              </p>
              <ul className="check-list">
                {heroChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Book a technical audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/ecommerce-development-hero.webp"
                alt="Developer editing code on a laptop screen"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
          <div className="stat-row">
            {heroStats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. The eCommerce technology challenge */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">The Problem</p>
          <h2>The eCommerce technology challenge</h2>
          <p className="lead">
            Twelve things that turn a store into a constraint. The audit usually finds the real
            bottleneck is one or two of them, and the rest are symptoms.
          </p>
          <div className="card-grid card-grid-4">
            {challenges.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our eCommerce development services */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h2>Our eCommerce development services</h2>
          <p className="lead">
            Eight services covering build, migration, integration and maintenance. Each will get
            its own detail page as we publish them. Scope the eCommerce development services you
            need from the audit, not from a package list.
          </p>
          <div className="card-grid card-grid-2">
            {services.map((s) => (
              <article className="card" key={s.num}>
                <p className="card-num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>
                  {s.body}
                  {s.link ? (
                    <>
                      {" "}
                      <Link href={s.link.href}>{s.link.label}</Link> .
                    </>
                  ) : null}
                </p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "32px" }}>
            Development sits underneath everything else — it is what makes{" "}
            <Link href="/ecommerce-seo/">SEO</Link> , <Link href="/conversion-rate-optimization/">CRO</Link>{" "}
            and <Link href="/email-retention-marketing/">retention</Link> possible, and it is
            included in a full <Link href="/ecommerce-management/">eCommerce management</Link>{" "}
            engagement. Mobile and progressive web apps are scoped separately under{" "}
            <Link href="/ecommerce-app-development/">eCommerce app development</Link> .
          </p>
        </div>
      </section>

      {/* 4. Platforms & technologies we work with */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Stack</p>
          <h2>Platforms &amp; technologies we work with</h2>
          <p className="lead">
            We recommend the platform that fits the business, not the one we would rather build
            on.
          </p>
          <div className="card-grid">
            {platformGroups.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <ul className="check-list">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What our eCommerce web development covers */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Scope</p>
          <h2>What our eCommerce web development covers</h2>
          <p className="lead">
            Ten things we ship regularly. If what you need is not on the list, it is worth a
            conversation rather than an assumption — most eCommerce website development work turns
            out to be two of these ten, not all of them. The question of how to build an
            eCommerce website is almost always really a question about which two.
          </p>
          <div className="card-grid">
            {scopeItems.map((item) => (
              <article className="card" key={item}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Integrations & eCommerce technology ecosystem */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Ecosystem</p>
          <h2>Integrations &amp; eCommerce technology ecosystem</h2>
          <p className="lead">
            The storefront sits at the centre. Everything below connects to it, and every
            connection is a place where data can silently stop matching.
          </p>
          <div className="card-grid">
            <article className="card">
              <h3>Your Storefront</h3>
              <p>Connected to the nine systems below</p>
            </article>
            {ecosystem.map((e) => (
              <article className="card" key={e.title}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our eCommerce development process */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">The Process</p>
          <h2>Our eCommerce development process</h2>
          <p className="lead">
            Seven stages. The last one is not an afterthought — it is where most of the value of
            a good build is either kept or lost.
          </p>
          <div className="card-grid card-grid-4">
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

      {/* 8. Development by business need */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">By Need</p>
          <h2>Development by business need</h2>
          <p className="lead">Eight needs and the solution each one calls for.</p>
          <div className="card-grid card-grid-2">
            {needs.map((n) => (
              <article className="card" key={n.need}>
                <h3>{n.need}</h3>
                <h4>{n.solution}</h4>
                <p>{n.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Performance, security & scalability */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Foundations</p>
          <h2>Performance, security &amp; scalability</h2>
          <p className="lead">
            Four non-negotiables. They are cheap to build in and expensive to add later, which is
            why they are in scope by default on every eCommerce web development project we take.
          </p>
          <div className="card-grid card-grid-4">
            {foundations.map((f) => (
              <article className="card" key={f.title}>
                <h3>{f.title}</h3>
                <ul className="check-list">
                  {f.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Why choose our eCommerce development company */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Why Us</p>
          <h2>Why choose our eCommerce development company</h2>
          <p className="lead">
            Eight things that separate an eCommerce build from a general web project, and what to
            ask any eCommerce development company before the statement of work is signed.
          </p>
          <div className="card-grid card-grid-4">
            {whyChoose.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Development projects */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Proof</p>
          <h2>Development projects</h2>
          <p className="lead">
            Three builds: requirement, technology, what we built and the business outcome.
          </p>
          <div className="card-grid">
            {projects.map((p) => (
              <article className="case-card" key={p.name}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0",
                  }}
                >
                  <div>
                    <h4 style={{ padding: "16px 16px 0", margin: 0, fontSize: "0.95rem" }}>
                      Desktop storefront
                    </h4>
                    <Image src={p.desktop.src} alt={p.desktop.alt} width={p.desktop.width} height={p.desktop.height} />
                  </div>
                  <div>
                    <h4 style={{ padding: "16px 16px 0", margin: 0, fontSize: "0.95rem" }}>
                      Mobile / feature detail
                    </h4>
                    <Image src={p.mobile.src} alt={p.mobile.alt} width={p.mobile.width} height={p.mobile.height} />
                  </div>
                </div>
                <div className="case-body">
                  <p className="case-cat">Client / Project</p>
                  <h3>
                    {p.nameHref ? <Link href={p.nameHref}>{p.name}</Link> : p.name}
                  </h3>
                  <p>{p.sub}</p>
                  <p>
                    <strong>Requirement</strong>
                  </p>
                  <p>{p.requirement}</p>
                  <p>
                    <strong>Technology</strong>
                  </p>
                  <p>{p.technology}</p>
                  <p>
                    <strong>What we built</strong>
                  </p>
                  <p>{p.built}</p>
                  <p>
                    <strong>Business outcome</strong>
                  </p>
                  <div className="case-metrics" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                    {p.metrics.map((m) => (
                      <div key={m.label}>
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <p className="read-more">
                    <Link href="/case-studies/">Read case study</Link>
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn" href="/case-studies/">
              See all case studies
            </Link>
            <Link className="btn btn-outline" href="/portfolio/">
              Browse the portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 12. eCommerce development FAQs */}
      <section className="section">
        <div className="container center">
          <p className="eyebrow">FAQs</p>
          <h2>eCommerce development FAQs</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            Eight questions that come up before most builds. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link> .
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Find out whether your store is the constraint</h2>
          <p className="lead">
            Book a technical audit. We will review your build, performance, integrations and
            technical SEO, and tell you what is worth fixing and what is worth replacing —
            whether or not you hire us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Book a technical audit
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
