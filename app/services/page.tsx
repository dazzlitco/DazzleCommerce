import type { Metadata } from "next";
import { Pill } from "@/components/Pill";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "eCommerce Management & Marketing Services | Dazzle Commerce",
  description:
    "Full-service eCommerce services: store management, SEO, PPC, marketplace management, CRO, retention, development and creative. Book a free strategy call.",
  alternates: { canonical: "https://dazzlecommerce.com/services/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/services/",
    siteName: "Dazzle Commerce",
    title: "eCommerce Management & Marketing Services | Dazzle Commerce",
    description:
      "Full-service eCommerce services: store management, SEO, PPC, marketplace management, CRO, retention, development and creative. Book a free strategy call.",
    images: [
      {
        url: "/images/services-why-choose.webp",
        width: 900,
        height: 641,
        alt: "Analytics dashboard showing eCommerce revenue, conversion rate and channel performance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Management & Marketing Services | Dazzle Commerce",
    description:
      "Full-service eCommerce services: store management, SEO, PPC, marketplace management, CRO, retention, development and creative. Book a free strategy call.",
  },
};

const faqs: Faq[] = [
  {
    q: "Can we start with a single service instead of a full service eCommerce agency engagement?",
    a: "Yes, and often you should. Roughly half of new clients start with one channel — usually eCommerce SEO, Amazon management or paid media — and expand once the first workstream is producing. We will tell you on the audit which single service has the highest expected return.",
  },
  {
    q: "Do you handle both storefront and marketplace under one contract?",
    a: "That is the normal setup. A single strategy covers Shopify or WooCommerce alongside Amazon, Walmart, eBay and Etsy, so pricing, inventory, creative and promotional calendars stay aligned instead of competing.",
  },
  {
    q: "Who actually does the work?",
    a: "An in-house pod: a senior strategist who owns the account, plus specialists for each discipline. We do not resell to white-label vendors. You will meet the people doing the work during onboarding.",
  },
  {
    q: "How do you report on performance?",
    a: "A live dashboard you can open any time, a written weekly summary, and a monthly business review covering revenue, contribution margin, blended CAC, channel mix and what we are changing next month.",
  },
  {
    q: "What is the minimum engagement length?",
    a: "Ninety days, because nothing meaningful can be judged faster than that. After the initial period the agreement is month-to-month with 30 days’ notice.",
  },
  {
    q: "Do you offer eCommerce consulting without ongoing management?",
    a: "Yes. Fixed-scope consulting engagements cover channel strategy, replatforming decisions, in-house team structure and due diligence.",
  },
];

const management = [
  {
    title: "Product Listing & Catalog Management",
    body: "Listing creation, bulk enrichment, variant logic, attribute mapping and taxonomy clean-up across every storefront and marketplace you sell on.",
  },
  {
    title: "eCommerce Operations Management",
    body: "Order routing, returns and RMA workflows, inventory sync across channels, supplier feeds and fulfilment exception handling.",
  },
  {
    title: "Dedicated Account Management",
    body: "A named senior manager plus a specialist pod. Weekly stand-ups, a shared board you can see, and one person who owns your number.",
  },
  {
    title: "Marketplace Account Health",
    body: "Buy Box monitoring, policy compliance, suppressed-listing recovery, case management and performance-metric defence.",
  },
  {
    title: "eCommerce Support & Virtual Assistance",
    body: "Trained eCommerce virtual assistant services for customer service, data entry, listing uploads and daily store admin.",
  },
  {
    title: "Reporting & Business Intelligence",
    body: "A single dashboard covering revenue, contribution margin, blended CAC, channel mix and inventory velocity.",
  },
];

const marketing = [
  {
    title: "eCommerce SEO",
    body: "Technical SEO, collection and product page optimization, internal linking at catalog scale, schema and content that targets commercial intent.",
  },
  {
    title: "PPC & Google Shopping Management",
    body: "Google Ads, Performance Max, Shopping feed optimization and margin-tiered campaign structures. We bid to contribution margin.",
  },
  {
    title: "Marketplace Advertising",
    body: "Amazon PPC, Walmart Connect and eBay Promoted Listings, managed to TACoS and true profitability rather than raw ad sales.",
  },
  {
    title: "Paid Social & Performance Marketing",
    body: "Meta, TikTok and Pinterest built around a creative testing engine. New concepts weekly, winners scaled, fatigue caught early.",
  },
  {
    title: "Email, SMS & Retention Marketing",
    body: "Klaviyo and Attentive lifecycle programmes: welcome, browse and cart abandonment, post-purchase, winback and VIP.",
  },
  {
    title: "Conversion Rate Optimization",
    body: "Heuristic audit, session analysis, hypothesis backlog, then A/B tests on product pages, cart and checkout. Every test documented.",
  },
];

const development = [
  {
    title: "Shopify & Shopify Plus Development",
    body: "Theme development, Online Store 2.0 sections, headless builds, checkout extensibility and custom app work.",
  },
  {
    title: "WooCommerce Development",
    body: "WordPress-native storefronts, custom plugins, high-volume catalog handling and hosting architecture that survives a Black Friday spike.",
  },
  {
    title: "Replatforming & Migrations",
    body: "Magento, BigCommerce and legacy builds moved to Shopify or WooCommerce with URL mapping and redirect strategy planned first.",
  },
  {
    title: "Performance & Core Web Vitals",
    body: "LCP, CLS and INP remediation, image and script strategy, caching and CDN tuning. Speed is a conversion lever and a ranking factor.",
  },
  {
    title: "Integrations & Automation",
    body: "ERP, PIM, 3PL, subscription and CRM integrations, plus middleware that removes the spreadsheets your team has quietly built a business on.",
  },
  {
    title: "Analytics & Tracking Architecture",
    body: "GA4, server-side tagging, consent mode, marketplace attribution and a data layer that reconciles with your finance numbers.",
  },
  {
    title: "Mobile & Progressive Web Apps",
    body: "Cross-platform shopping apps, installable progressive web apps and private platform apps — scoped only where purchase frequency justifies one.",
    link: { href: "/ecommerce-app-development/", label: "See eCommerce app development" },
  },
  {
    title: "Web Design & UX",
    body: "UX research, information architecture, wireframes, accessible templates and a design system handed over as components.",
    link: { href: "/ecommerce-web-design/", label: "See eCommerce web design" },
  },
];

const creative = [
  {
    title: "Product Photography & Video",
    body: "Studio, lifestyle and UGC-style production built for the exact aspect ratios each channel rewards.",
  },
  {
    title: "Conversion Copywriting",
    body: "Product detail pages, collection copy, ad angles and email sequences written to be tested, not admired.",
  },
  {
    title: "A+ Content & Brand Stores",
    body: "Amazon A+ / Enhanced Brand Content, Brand Stores and Walmart rich media that lift conversion and defend your listing.",
  },
  {
    title: "Landing Pages & Creative Testing",
    body: "Campaign landing pages and a running creative test calendar so paid media never starves for new angles.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit & Discovery",
    body: "A full technical, commercial and channel audit scored by revenue impact. You get the scorecard whether or not we work together.",
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    body: "A costed 90-day plan with forecast, channel budgets, named owners and the metrics each workstream is accountable to.",
  },
  {
    num: "03",
    title: "Build & Launch",
    body: "Two-week sprints. Listings, campaigns, flows, pages and tracking ship with QA and measurement attached from the start.",
  },
  {
    num: "04",
    title: "Optimize & Scale",
    body: "Weekly tests, monthly business reviews, quarterly replanning. Budget follows evidence.",
  },
];

const platforms = [
  { name: "Shopify", note: "Plus & standard" },
  { name: "Amazon", note: "Seller & Vendor" },
  { name: "WooCommerce", note: "WordPress" },
  { name: "Walmart", note: "Marketplace" },
  { name: "eBay", note: "Stores & listings" },
  { name: "Etsy", note: "Handmade & craft" },
];

const platformDetails = [
  {
    title: "Shopify & Shopify Plus",
    body: "Shopify agency services spanning store management, Shopify SEO, Shopify PPC, conversion optimization and custom Shopify development — from first launch to Plus-scale operations.",
  },
  {
    title: "Amazon Seller & Vendor",
    body: "Amazon marketplace management covering listing optimization, Amazon SEO, Amazon PPC management, brand registry, A+ content and account health defense.",
  },
  {
    title: "WooCommerce & WordPress",
    body: "WooCommerce development agency work: custom builds, plugin engineering, large-catalog performance and WooCommerce SEO services for content-led brands.",
  },
  {
    title: "Walmart Marketplace",
    body: "Walmart agency services spanning store management, Walmart SEO, Walmart PPC, conversion optimization and custom Walmart consultation — from first launch to Plus-scale operations.",
  },
  {
    title: "eBay Stores & Listings",
    body: "eBay marketplace management covering listing optimization, eBay SEO, eBay PPC management, brand registry, A+ content and account health defense.",
  },
  {
    title: "Etsy Handmade & Crafts",
    body: "Etsy agency work: custom products ideas, handmade inventry production, large-catalog performance and Etsy SEO services for content-led brands.",
  },
];

const whyChoose = [
  "Senior strategist ownership from first call through to renewal",
  "Contribution margin reported next to ROAS on every dashboard",
  "One accountable team across search, paid, marketplace, email, CRO and development",
  "Certified partners: Shopify, Google Ads, Meta, Amazon Ads and Klaviyo",
  "Month-to-month after the initial 90 days — no hostage clauses",
  "Everything we build, from tracking to templates, remains yours if you leave",
];

export default function ServicesPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <h1>eCommerce Services That Move Revenue, Not Just Metrics</h1>
          <p className="lead">
            Management, marketing, development and creative under one roof — delivered by
            one senior team accountable to a single number. Our eCommerce services run from
            catalogue and order operations through to paid media, and the eCommerce agency
            services listed below can be taken individually or as one programme. Engagements
            run either ongoing or, where you only need the thinking, as an eCommerce
            consulting agency arrangement scoped to a single decision.
          </p>
          <div className="btn-row">
            <Link className="btn" href="/book-a-strategy-call/">
              Get Free Strategy Call
            </Link>
            <Link className="btn btn-outline" href="/contact/">
              Talk to a Specialist
            </Link>
          </div>
        </div>
      </section>

      {/* 2. eCommerce Management Services */}
      <section className="section" id="management">
        <div className="container">
          <Pill icon="fa-solid fa-box" center>eCommerce Management Services</Pill>
          <h2>Run the store properly, then grow it</h2>
          <p className="lead">
            The operational layer most agencies will not touch. Clean data, healthy accounts
            and reliable fulfilment are what make marketing spend work at all.
          </p>
          <div className="card-grid">
            {management.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. eCommerce Marketing Services */}
      <section className="section section-soft" id="marketing">
        <div className="container">
          <Pill icon="fa-solid fa-arrow-trend-up" center>eCommerce Marketing Services</Pill>
          <h2>Demand capture and demand creation, measured honestly</h2>
          <p className="lead">
            Six disciplines, one budget, one forecast. We move spend between channels based
            on evidence rather than whichever team shouts loudest.
          </p>
          <div className="card-grid">
            {marketing.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. eCommerce Development & Technology */}
      <section className="section" id="development">
        <div className="container">
          <Pill icon="fa-solid fa-code" center>eCommerce Development &amp; Technology</Pill>
          <h2>A storefront that is fast, stable and easy to change</h2>
          <p className="lead">
            Development is not a separate department here. The people building your site sit
            next to the people responsible for your conversion rate.
          </p>
          <div className="card-grid">
            {development.map((s) => (
              <article className="card" key={s.title}>
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
        </div>
      </section>

      {/* 5. Creative & Content */}
      <section className="section section-soft" id="creative">
        <div className="container">
          <Pill icon="fa-solid fa-palette" center>Creative &amp; Content</Pill>
          <h2>Assets built for testing, not for the brand book</h2>
          <p className="lead">
            Creative is the biggest remaining lever in paid media. We produce at a cadence
            that lets the algorithm actually learn.
          </p>
          <div className="card-grid card-grid-2">
            {creative.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Our eCommerce Growth Process */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-gear" center>Our eCommerce Growth Process</Pill>
          <h2>Four phases, repeated every quarter</h2>
          <p className="lead">
            Structured enough to be predictable, flexible enough to chase a result when we find
            one.
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

      {/* 7. Platforms We Support */}
      <section className="section section-soft" id="platforms">
        <div className="container">
          <Pill icon="fa-solid fa-globe" center>Platforms We Support</Pill>
          <h2>Storefronts and marketplaces, managed together</h2>
          <p className="lead">
            Certified where certification matters, experienced everywhere else. Your channel mix
            should follow your margins.
          </p>
          <div className="card-grid card-grid-4">
            {platforms.map((p) => (
              <div className="card platform-card" key={p.name}>
                <h3 className="platform-name">{p.name}</h3>
                <p>{p.note}</p>
              </div>
            ))}
          </div>
          <div className="card-grid">
            {platformDetails.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Choose Our Services */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-award" center>Why Choose Our Services</Pill>
              <h2>
                What a full service eCommerce agency should give you that you are probably not
                getting now
              </h2>
              <p>
                We are deliberately not the cheapest option. We are the one that tells you when
                a channel is not worth the money, including when that channel is ours. An
                eCommerce growth agency that cannot say that is selling you retainer, not
                growth.
              </p>
              <ul className="check-list">
                {whyChoose.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/book-a-strategy-call/">
                  Get Free Strategy Call
                </Link>
                <Link className="btn btn-outline" href="/case-studies/">
                  See the results
                </Link>
              </div>
            </div>
            <div className="split-img">
              <Image
                src="/images/services-why-choose.webp"
                alt="Analytics dashboard showing eCommerce revenue, conversion rate and channel performance"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Service FAQs */}
      <section className="section section-soft">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>Service FAQs</Pill>
          <h2>Practical questions before you commit</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Not sure which service you actually need?</h2>
          <p className="lead">
            That is exactly what the free audit answers. We will rank every opportunity in your
            account by revenue impact and tell you which one to start with — even if it is not
            the one we would sell you.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Book Your Free Audit
            </Link>
            <Link
              className="btn"
              href="/case-studies/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Explore Case Studies
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
