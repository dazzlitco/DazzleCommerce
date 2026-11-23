"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

/*
 * Portfolio — /portfolio/
 * Live source: https://dazzlecommerce.com/portfolio/ (fetched 2026-11-23).
 * Full word-for-word extraction: clone-plan/portfolio-extraction.md
 *
 * Client component because the "Browse Our Work" discipline filter must work
 * client-side (same approach as app/case-studies/page.tsx, so this file does
 * not export metadata — the root layout metadata applies).
 *
 * Live quirks reproduced here:
 * - No FAQ section and no form on the live page, so there is neither here.
 * - The live filter is Elementor nested tabs with a full copy of the grid in
 *   every tab panel; here one grid is filtered client-side instead.
 * - Only Nutriblend, VAC Vacuums and Kitchenary have links in the browse
 *   grid on the live page; the other nine names are plain text.
 * - The "Used in X of 12" counts in Work by Capability disagree with the
 *   browse-grid tag counts on the live site; both are reproduced verbatim.
 */

type Discipline =
  | "Management"
  | "SEO"
  | "PPC"
  | "Marketplaces"
  | "CRO"
  | "Retention"
  | "Development";

const filters: { label: string; value: "All" | Discipline }[] = [
  { label: "All", value: "All" },
  { label: "eCommerce Management", value: "Management" },
  { label: "SEO", value: "SEO" },
  { label: "PPC", value: "PPC" },
  { label: "Marketplaces", value: "Marketplaces" },
  { label: "CRO", value: "CRO" },
  { label: "Retention", value: "Retention" },
  { label: "Development", value: "Development" },
];

const featured = [
  {
    category: "Health & Supplements",
    platform: "Shopify Plus",
    name: "Nutriblend — Subscription-first rebuild",
    img: "/images/case-nutriblend.webp",
    imgAlt: "Dazzle Commerce SEO team working through category page structure",
    body: "A one-time-purchase supplement brand with strong repeat intent and no subscription mechanic. We rebuilt the PDP around subscribe-and-save, restructured the post-purchase flow and moved paid spend from prospecting-only to a blended acquisition and win-back model.",
    metrics: [
      { value: "+214%", label: "Revenue YoY" },
      { value: "7.9x", label: "Blended ROAS" },
      { value: "-31%", label: "Blended CAC" },
      { value: "+46%", label: "Subscription rate" },
    ],
    tags: ["eCommerce Management", "PPC", "CRO", "Email & Retention"],
  },
  {
    category: "Home & Appliances",
    platform: "Amazon + Shopify",
    name: "VAC Vacuums — Amazon catalog recovery",
    img: "/images/case-vac-vacuums.webp",
    imgAlt: "Dazzle Commerce marketplace team reviewing Amazon account performance",
    body: "Three years of ad-hoc listing edits had left duplicate ASINs, lost Buy Box on the top sellers and a TACoS climbing past 22%. We rebuilt the catalog structure, consolidated variations and rebuilt the advertising account around SKU profitability rather than category spend.",
    metrics: [
      { value: "+186%", label: "Amazon sales" },
      { value: "+64%", label: "Buy Box rate" },
      { value: "-42%", label: "TACoS" },
      { value: "+28%", label: "Conversion rate" },
    ],
    tags: ["Marketplaces", "PPC", "eCommerce Management"],
  },
  {
    category: "Home & Kitchen",
    platform: "Shopify",
    name: "Kitchenary — Collection-page SEO rebuild",
    img: "/images/case-kitchenary.webp",
    imgAlt: "Dazzle Commerce paid media specialists reviewing campaign performance",
    body: "340 collection pages organised around internal merchandising logic rather than search demand, on a theme with a 4.1 second mobile LCP. We rewrote the collection architecture around actual query clusters and shipped a performance pass alongside it.",
    metrics: [
      { value: "+97%", label: "Organic traffic" },
      { value: "+52%", label: "Conversion rate" },
      { value: "1.6s", label: "Mobile LCP" },
      { value: "0", label: "Rankings lost" },
    ],
    tags: ["SEO", "Development", "CRO"],
  },
  {
    category: "Home & Furniture",
    platform: "Magento to Shopify",
    name: "Luxury Comforts — Replatform without losing search",
    img: "/images/portfolio-luxury-comforts.webp",
    imgAlt: "A living room arranged around a large green sofa",
    body: "A 2,400-SKU furniture catalog on Adobe Commerce with rising hosting costs and an eighteen-month backlog. We migrated to Shopify Plus with a full redirect map, preserved the URL structure where it earned traffic and rebuilt the configurator as a native app.",
    metrics: [
      { value: "-38%", label: "Platform cost" },
      { value: "+61%", label: "Mobile revenue" },
      { value: "94%", label: "Rankings retained" },
      { value: "11 wk", label: "Migration time" },
    ],
    tags: ["Development", "SEO", "eCommerce Management"],
  },
  {
    category: "Sports & Fitness",
    platform: "Shopify + Walmart",
    name: "Fitness Gear — Marketplace expansion",
    img: "/images/portfolio-fitness-gear.webp",
    imgAlt: "A person training with dumbbells in a gym",
    body: "Strong D2C performance with no marketplace presence and a hesitancy about channel conflict. We launched Walmart Marketplace and Amazon with a deliberately narrowed SKU set, separate pricing logic and a reporting view that showed channel contribution rather than channel revenue.",
    metrics: [
      { value: "+128%", label: "Total revenue" },
      { value: "34%", label: "From marketplaces" },
      { value: "5.2x", label: "Marketplace ROAS" },
      { value: "+9%", label: "D2C revenue" },
    ],
    tags: ["Marketplaces", "eCommerce Management", "PPC"],
  },
  {
    category: "Pet Supplies",
    platform: "WooCommerce",
    name: "petzz — Retention and lifecycle rebuild",
    img: "/images/portfolio-petzz.webp",
    imgAlt: "A printed product box",
    body: "A pet consumables brand acquiring efficiently but with a 21% repeat rate on a category that should sustain far more. We rebuilt the email and SMS programme around replenishment timing per product rather than a single generic flow.",
    metrics: [
      { value: "+87%", label: "Repeat rate" },
      { value: "38%", label: "Revenue from email" },
      { value: "+2.4x", label: "LTV / CAC" },
      { value: "-19%", label: "Churn" },
    ],
    tags: ["Email & Retention", "CRO", "eCommerce Management"],
  },
];

type Project = {
  name: string;
  href?: string;
  subtitle: string;
  tags: Discipline[];
  metric: string;
  category: string;
  platform: string;
};

const projects: Project[] = [
  {
    name: "Nutriblend",
    href: "/nutriblend-supplements-retention-uk/",
    subtitle: "Subscription-first rebuild",
    tags: ["Management", "PPC", "CRO", "Retention"],
    metric: "+214% revenue YoY",
    category: "Health & Supplements",
    platform: "Shopify Plus",
  },
  {
    name: "VAC Vacuums",
    href: "/vac-vacuums-amazon-marketplace-europe/",
    subtitle: "Amazon catalog recovery",
    tags: ["Marketplaces", "PPC", "Management"],
    metric: "+186% Amazon sales",
    category: "Home & Appliances",
    platform: "Amazon",
  },
  {
    name: "Kitchenary",
    href: "/kitchenary-home-kitchen-shopify-usa/",
    subtitle: "Collection-page SEO rebuild",
    tags: ["SEO", "Development", "CRO"],
    metric: "+97% organic traffic",
    category: "Home & Kitchen",
    platform: "Shopify",
  },
  {
    name: "Luxury Comforts",
    subtitle: "Magento to Shopify replatform",
    tags: ["Development", "SEO", "Management"],
    metric: "94% rankings retained",
    category: "Home & Furniture",
    platform: "Shopify Plus",
  },
  {
    name: "Fitness Gear",
    subtitle: "Marketplace expansion",
    tags: ["Marketplaces", "Management", "PPC"],
    metric: "34% revenue from marketplaces",
    category: "Sports & Fitness",
    platform: "Walmart",
  },
  {
    name: "petzz",
    subtitle: "Retention and lifecycle rebuild",
    tags: ["Retention", "CRO", "Management"],
    metric: "+87% repeat rate",
    category: "Pet Supplies",
    platform: "WooCommerce",
  },
  {
    name: "Men’s grooming brand",
    subtitle: "Paid media restructure",
    tags: ["PPC", "CRO"],
    metric: "6.1x blended ROAS",
    category: "Beauty & Grooming",
    platform: "Shopify",
  },
  {
    name: "Aurelia Studio",
    subtitle: "Size-guide and returns overhaul",
    tags: ["CRO", "Development"],
    metric: "-27% return rate",
    category: "Fashion & Apparel",
    platform: "Shopify Plus",
  },
  {
    name: "Northline Supply",
    subtitle: "B2B quoting and net-terms portal",
    tags: ["Development", "Management"],
    metric: "+73% B2B orders",
    category: "B2B eCommerce",
    platform: "BigCommerce",
  },
  {
    name: "Verdant Skincare",
    subtitle: "Non-brand search programme",
    tags: ["SEO", "Retention"],
    metric: "+118% non-brand sessions",
    category: "Beauty & Cosmetics",
    platform: "Shopify",
  },
  {
    name: "Cadence Audio",
    subtitle: "PDP and A+ content rebuild",
    tags: ["Marketplaces", "CRO"],
    metric: "+41% conversion rate",
    category: "Consumer Electronics",
    platform: "Amazon + Shopify",
  },
  {
    name: "Harvest Table",
    subtitle: "Subscription box launch",
    tags: ["Management", "Retention", "PPC"],
    metric: "2,100 active subscribers",
    category: "Food & Beverage",
    platform: "Shopify",
  },
];

const capabilities = [
  {
    title: "eCommerce Management",
    body: "Catalog structure, merchandising, pricing logic, promotions and the day-to-day operations of the storefront.",
    bullets: [
      "Catalog and variation restructures",
      "Merchandising and collection strategy",
      "Promotion and pricing calendars",
      "Inventory and fulfilment coordination",
    ],
    used: "Used in 12 of 12 engagements on this page",
  },
  {
    title: "eCommerce SEO",
    body: "Category and collection architecture built around query demand, plus the technical work that lets it rank.",
    bullets: [
      "Collection and category architecture",
      "Product and PDP content at scale",
      "Technical SEO and Core Web Vitals",
      "Migration redirect mapping",
    ],
    used: "Used in 7 of 12 engagements on this page",
  },
  {
    title: "Paid Media & PPC",
    body: "Google, Meta, Amazon and Microsoft managed against contribution margin rather than platform-reported ROAS.",
    bullets: [
      "Shopping and Performance Max structures",
      "Amazon Sponsored Products and Brands",
      "Creative testing and iteration",
      "Blended CAC and MER reporting",
    ],
    used: "Used in 8 of 12 engagements on this page",
  },
  {
    title: "Conversion Rate Optimisation",
    body: "Structured testing on the pages that carry the revenue, with a documented hypothesis behind every test.",
    bullets: [
      "PDP and cart experiments",
      "Checkout and returns friction",
      "Mobile-first layout rebuilds",
      "Post-test rollout and monitoring",
    ],
    used: "Used in 9 of 12 engagements on this page",
  },
  {
    title: "Email & Retention",
    body: "Lifecycle programmes built on replenishment timing and product behaviour, not a single generic welcome flow.",
    bullets: [
      "Flow architecture and segmentation",
      "Replenishment and win-back timing",
      "SMS and push coordination",
      "Subscription and loyalty mechanics",
    ],
    used: "Used in 6 of 12 engagements on this page",
  },
  {
    title: "Development",
    body: "Theme, app and platform work — including the migrations nobody else wants to quote on.",
    bullets: [
      "Replatforms and migrations",
      "Custom theme and app development",
      "Performance and Core Web Vitals",
      "Integrations, ERP and 3PL",
    ],
    used: "Used in 5 of 12 engagements on this page",
  },
];

const spotlightSteps = [
  {
    num: "01",
    title: "The brief",
    body: "Nutriblend came to us with $4.1M in annual revenue, a 3.2x blended ROAS and a repeat rate of 18% on a product category where customers physically run out every thirty days. Their subscription option existed but converted at under 2% because it sat below the fold in a dropdown.",
  },
  {
    num: "02",
    title: "What we found",
    body: "Ninety-one percent of second orders were placed manually between day 26 and day 38. The demand for replenishment was already there; the store simply was not asking for it. Paid media was also spending 84% of budget on cold prospecting for a product with strong organic repeat intent.",
  },
  {
    num: "03",
    title: "What we shipped",
    body: "A rebuilt PDP with subscribe-and-save as the default selection and a visible per-unit saving. A post-purchase flow that offered conversion to subscription at day 21. A paid structure split between prospecting, win-back and subscription-lapse audiences with separate targets for each.",
  },
  {
    num: "04",
    title: "What happened",
    body: "Subscription rate moved from 2% to 46% of orders over seven months. Blended CAC fell 31% because win-back audiences converted at a fraction of prospecting cost. Revenue grew 214% year on year, with 58% of it now recurring.",
  },
  {
    num: "05",
    title: "What we would change",
    body: "We rolled the PDP change out to 100% of traffic rather than testing it, because the qualitative signal was strong and the deadline was a product launch. It worked, but we could not isolate how much of the lift came from the layout versus the pricing display. On the next account we split it.",
  },
];

const chipStyle: React.CSSProperties = {
  display: "inline-block",
  padding: "0.3rem 0.7rem",
  border: "1px solid var(--line)",
  borderRadius: "999px",
  fontSize: "0.85rem",
  fontWeight: 600,
  color: "var(--navy)",
  background: "var(--bg-soft)",
  textDecoration: "none",
};

const filterButtonStyle = (active: boolean): React.CSSProperties => ({
  padding: "0.6rem 1.1rem",
  borderRadius: "999px",
  border: active ? "2px solid var(--blue)" : "2px solid var(--line)",
  background: active ? "var(--blue)" : "#fff",
  color: active ? "#fff" : "var(--navy)",
  font: "inherit",
  fontSize: "0.95rem",
  fontWeight: 700,
  cursor: "pointer",
});

export default function PortfolioPage() {
  const [filter, setFilter] = useState<"All" | Discipline>("All");

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(filter)),
    [filter],
  );

  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Our Work</p>
              <h1>The Work, With the Numbers Attached</h1>
              <p className="lead">
                Twelve selected engagements across D2C storefronts, marketplaces and B2B
                catalogs. Every project below shows the starting position, what we actually
                shipped and what moved — including the ones where the first approach did not
                work.
              </p>
              <div className="btn-row">
                <Link className="btn" href="#browse-work">
                  Browse the work
                </Link>
                <Link className="btn btn-outline" href="/case-studies/">
                  Read full case studies
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/portfolio-hero.webp"
                alt="Desk at night with a laptop and lamp overlooking city lights"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>100+</strong>
              <span>Brands served</span>
            </div>
            <div className="stat">
              <strong>$48M+</strong>
              <span>GMV managed</span>
            </div>
            <div className="stat">
              <strong>+142%</strong>
              <span>Average revenue growth</span>
            </div>
            <div className="stat">
              <strong>31 mo</strong>
              <span>Average tenure</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Featured Work */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Featured Work</p>
          <h2>Six engagements worth walking through</h2>
          <p className="lead">
            Each of these has a full write-up with the baseline, the methodology and what we
            would do differently a second time. The numbers are measured against a
            pre-engagement baseline, not against a forecast.
          </p>
          <div className="card-grid">
            {featured.map((c) => (
              <article className="case-card" key={c.name}>
                <Image src={c.img} alt={c.imgAlt} width={1200} height={800} />
                <div className="case-body">
                  <p className="case-cat">
                    {c.category} · {c.platform}
                  </p>
                  <h3>{c.name}</h3>
                  <p style={{ color: "var(--muted)" }}>{c.body}</p>
                  <div
                    className="case-metrics"
                    style={{ gridTemplateColumns: "repeat(2, 1fr)" }}
                  >
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <div
                    style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "18px" }}
                  >
                    {c.tags.map((t) => (
                      <span key={t} style={chipStyle}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link className="read-more" href="/case-studies/">
                    Read the case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Browse Our Work — working discipline filter */}
      <section className="section section-soft" id="browse-work">
        <div className="container">
          <p className="eyebrow">Browse Our Work</p>
          <h2>Twelve engagements, filtered by discipline</h2>
          <p className="lead">
            Pick the capability you are actually shopping for. Every project appears under
            each discipline that did real work on it, not just the headline one.
          </p>
          <div
            role="tablist"
            aria-label="Filter projects by discipline"
            style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "28px" }}
          >
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                role="tab"
                aria-selected={filter === f.value}
                onClick={() => setFilter(f.value)}
                style={filterButtonStyle(filter === f.value)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="card-grid">
            {filtered.map((p) => (
              <article className="card" key={p.name}>
                <h3>
                  {p.href ? <Link href={p.href}>{p.name}</Link> : p.name}
                </h3>
                <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem" }}>
                  {p.subtitle}
                </p>
                <div
                  style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "14px" }}
                >
                  {p.tags.map((t) => (
                    <span key={t} style={chipStyle}>
                      {t}
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--navy)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {p.metric}
                </p>
                <p>
                  {p.category} · {p.platform}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Work by Capability */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Work by Capability</p>
          <h2>What each discipline actually shipped</h2>
          <p className="lead">
            Most of these engagements ran three or four disciplines at once. This is what
            each one contributed, and how often it was part of the work.
          </p>
          <div className="card-grid">
            {capabilities.map((cap) => (
              <article className="card" key={cap.title}>
                <h3>{cap.title}</h3>
                <p>{cap.body}</p>
                <ul className="check-list">
                  {cap.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <p style={{ fontWeight: 700, color: "var(--navy)", margin: "1rem 0" }}>
                  {cap.used}
                </p>
                <Link className="read-more" href="/services/" style={{ fontWeight: 700 }}>
                  See the service
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Project Spotlight — Nutriblend */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Project Spotlight</p>
          <h2>Nutriblend: turning repeat intent into recurring revenue</h2>
          <p className="lead">
            Health &amp; supplements · Shopify Plus · Seven-month engagement, still running
          </p>
          <div className="split" style={{ marginTop: "32px" }}>
            <div className="split-img">
              <Image
                src="/images/case-nutriblend.webp"
                alt="Dazzle Commerce SEO team working through category page structure"
                width={1200}
                height={800}
              />
            </div>
            <div>
              <div className="stat-row" style={{ gridTemplateColumns: "repeat(3, 1fr)", marginTop: 0 }}>
                <div className="stat">
                  <strong>+214%</strong>
                  <span>Revenue YoY</span>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                    Against a $4.1M baseline
                  </p>
                </div>
                <div className="stat">
                  <strong>46%</strong>
                  <span>Subscription rate</span>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                    Up from 2% of orders
                  </p>
                </div>
                <div className="stat">
                  <strong>-31%</strong>
                  <span>Blended CAC</span>
                  <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                    Across all paid channels
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "40px" }}>
            {spotlightSteps.map((s) => (
              <div key={s.num} style={{ marginTop: "1.5rem" }}>
                <p className="card-num" style={{ fontSize: "1.4rem" }}>
                  {s.num}
                </p>
                <h3>{s.title}</h3>
                <p style={{ color: "var(--muted)" }}>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn" href="/case-studies/">
              Read the full case study
            </Link>
            <Link className="btn btn-outline" href="/pricing/">
              See what this costs
            </Link>
          </div>

          {/* 6. How to read these numbers */}
          <div style={{ marginTop: "48px" }}>
            <h3>How to read these numbers</h3>
            <p style={{ color: "var(--muted)", maxWidth: "860px" }}>
              Every figure is measured against the twelve months before the engagement
              started, not against a forecast or a best month. Percentages are annualised
              where an engagement ran less than a year. Results vary considerably by
              category, margin structure and starting position — a brand at $400k does not
              move like one at $4M. On a call we will give you an honest range for your
              situation, including the cases where we would expect slower movement.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Want your store on this page next year?</h2>
          <p className="lead">
            Book a free growth audit. We will look at your storefront, your paid accounts
            and your search visibility, and tell you where the fastest movement is — whether
            or not you hire us.
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
