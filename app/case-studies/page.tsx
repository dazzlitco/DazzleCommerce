"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

const faqs: Faq[] = [
  {
    q: "Are these results typical?",
    a: "No result is typical, which is why we publish the methodology alongside the number. What is consistent is the process: diagnose properly, fix the operational floor, then scale what compounds. On the audit call we will give you a realistic range for your category, margin structure and starting position rather than pointing at someone else’s best quarter.",
  },
  {
    q: "Why don't you show more clients?",
    a: "Several of our largest accounts are under NDA or would rather competitors not know who runs their growth. We will connect you with references in your category privately after the audit, including ones whose numbers are less flattering than these.",
  },
  {
    q: "How long did each of these engagements take?",
    a: "Nutriblend hit those figures at month eleven. VAC Vacuums recovered the Buy Box within one quarter, with sales figures at month nine. Kitchenary’s replatform ran fourteen weeks, with the traffic and conversion numbers measured twelve months post-launch.",
  },
  {
    q: "Do you work in my industry?",
    a: "Probably. The nine categories listed above cover most of our book, and the operating system underneath is the same. Where we genuinely lack experience, we say so — we have turned down regulated categories where we could not add value fast enough to justify the fee.",
  },
  {
    q: "What happens if the results do not come?",
    a: "The agreement is month-to-month after the first 90 days, so you can leave. Before that, we will have flagged the problem ourselves in a monthly review — we would rather tell you a channel is not working than wait for you to notice.",
  },
  {
    q: "Can I see the actual audit you would run for us?",
    a: "Yes. Book the free strategy call and we will run it on your accounts before we speak. You keep the scorecard regardless of what happens next.",
  },
];

type Chip = { label: string; href: string };

type CaseStudy = {
  name: string;
  href: string;
  img: string;
  imgAlt: string;
  body: string;
  metrics: { value: string; label: string }[];
  service: string;
  platform: string;
  industry: string;
  market: string;
  chips: Chip[];
};

const cases: CaseStudy[] = [
  {
    name: "Kitchenary",
    href: "/kitchenary-home-kitchen-shopify-usa/",
    img: "/images/case-kitchenary.webp",
    imgAlt: "Modern stainless steel kitchenware set styled for an online store",
    body: "A free-shipping promise was quietly eating the margin on the products the ads pushed hardest.",
    metrics: [
      { value: "+38%", label: "contribution margin" },
      { value: "-21%", label: "blended CAC" },
      { value: "+12%", label: "repeat rate" },
    ],
    service: "eCommerce Management",
    platform: "Shopify",
    industry: "Home & Furniture",
    market: "USA",
    chips: [
      { label: "eCommerce Management", href: "/ecommerce-management/" },
      { label: "Shopify", href: "/shopify-agency/" },
      { label: "Home & Furniture", href: "/home-furniture-ecommerce-agency/" },
      { label: "USA", href: "/ecommerce-agency-usa/" },
    ],
  },
  {
    name: "Lumen Atelier",
    href: "/lumen-atelier-fashion-ppc-shopify-usa/",
    img: "/images/case-studies-lumen-atelier.webp",
    imgAlt: "Fashion studio with a clothing rack and styled garments",
    body: "The paid account was competent. One seasonal shoot was being asked to supply a whole quarter of advertising.",
    metrics: [
      { value: "-31%", label: "cost per acquisition" },
      { value: "+24%", label: "new customer revenue" },
      { value: "-9pt", label: "return rate" },
    ],
    service: "eCommerce PPC",
    platform: "Shopify",
    industry: "Fashion & Apparel",
    market: "USA",
    chips: [
      { label: "eCommerce PPC", href: "/ecommerce-ppc/" },
      { label: "Shopify", href: "/shopify-agency/" },
      { label: "Fashion & Apparel", href: "/fashion-ecommerce-agency/" },
      { label: "USA", href: "/ecommerce-agency-usa/" },
    ],
  },
  {
    name: "Vac & Vacuums",
    href: "/vac-vacuums-amazon-marketplace-europe/",
    img: "/images/case-vac-vacuums.webp",
    imgAlt: "Vacuum cleaner being used in a living room",
    body: "A brand competing against its own resellers, with returns and buy-box share tracing to the same catalogue.",
    metrics: [
      { value: "+44%", label: "buy-box share" },
      { value: "-17%", label: "return rate" },
      { value: "+26%", label: "marketplace revenue" },
    ],
    service: "Marketplace Management",
    platform: "Amazon",
    industry: "Electronics",
    market: "Europe",
    chips: [
      { label: "Marketplace Management", href: "/marketplace-management-marketing/" },
      { label: "Amazon", href: "/amazon-agency/" },
      { label: "Electronics", href: "/electronics-ecommerce-agency/" },
      { label: "Europe", href: "/international-ecommerce-expansion/" },
    ],
  },
  {
    name: "NutriBlend",
    href: "/nutriblend-supplements-retention-uk/",
    img: "/images/case-nutriblend.webp",
    imgAlt: "Supplement capsules and powder arranged for product photography",
    body: "Churn clustered in months two and three because every product shipped on the same fixed cycle.",
    metrics: [
      { value: "+29%", label: "subscriber LTV" },
      { value: "-34%", label: "month-three churn" },
      { value: "+18%", label: "revenue per email" },
    ],
    service: "Email & Retention",
    platform: "WooCommerce",
    industry: "Health & Wellness",
    market: "UK",
    chips: [
      { label: "Email & Retention", href: "/email-retention-marketing/" },
      { label: "WooCommerce", href: "/woocommerce-agency/" },
      { label: "Health & Wellness", href: "/health-wellness-ecommerce-agency/" },
      { label: "UK", href: "/ecommerce-agency-uk/" },
    ],
  },
  {
    name: "Sabaa Beauty",
    href: "/sabaa-beauty-noon-seo-gcc/",
    img: "/images/case-studies-sabaa-beauty.webp",
    imgAlt: "Luxury skincare products arranged for a beauty campaign",
    body: "An Arabic menu over English product pages, and a cash-on-delivery share that reflected exactly that.",
    metrics: [
      { value: "2.4x", label: "organic revenue" },
      { value: "+38pt", label: "prepaid share" },
      { value: "-26%", label: "COD refusals" },
    ],
    service: "eCommerce SEO",
    platform: "Noon",
    industry: "Beauty & Cosmetics",
    market: "Gulf",
    chips: [
      { label: "eCommerce SEO", href: "/ecommerce-seo/" },
      { label: "Noon", href: "/noon-seller-management/" },
      { label: "Beauty & Cosmetics", href: "/beauty-ecommerce-agency/" },
      { label: "Gulf", href: "/ecommerce-agency-dubai/" },
    ],
  },
  {
    name: "Verdano Foods",
    href: "/verdano-foods-bigcommerce-cro-australia/",
    img: "/images/case-studies-verdano-foods.webp",
    imgAlt: "Packaged food products displayed on a retail shelf",
    body: "Quoting a longer, honest delivery window converted better than promising a fast one and missing it.",
    metrics: [
      { value: "+41%", label: "conversion rate" },
      { value: "-23%", label: "delivery complaints" },
      { value: "+19%", label: "average order value" },
    ],
    service: "CRO",
    platform: "BigCommerce",
    industry: "Food & Beverage",
    market: "Australia",
    chips: [
      { label: "CRO", href: "/conversion-rate-optimization/" },
      { label: "BigCommerce", href: "/bigcommerce-agency/" },
      { label: "Food & Beverage", href: "/food-beverage-ecommerce-agency/" },
      { label: "Australia", href: "/ecommerce-agency-australia/" },
    ],
  },
];

const methodology = [
  {
    num: "01",
    title: "Diagnose",
    body: "Fifteen days inside analytics, ad accounts, marketplace health and the technical stack. Every finding scored by revenue impact and effort.",
  },
  {
    num: "02",
    title: "Prioritise",
    body: "A 90-day roadmap agreed before work starts, with a forecast, named owners and the metric each workstream answers to.",
  },
  {
    num: "03",
    title: "Execute",
    body: "Two-week sprints. Nothing ships without tracking attached, and every test is documented whether it wins or loses.",
  },
  {
    num: "04",
    title: "Compound",
    body: "Monthly business reviews, quarterly replanning, and a standing recommendation each quarter about what to stop doing.",
  },
];

const disciplines = [
  {
    title: "eCommerce SEO",
    body: "+97% organic traffic (Kitchenary) · +64% non-brand clicks across the SEO book · median 6-month payback",
  },
  {
    title: "PPC & Google Shopping",
    body: "7.9x blended ROAS (Nutriblend) · -31% blended CAC · margin-tiered structures on 100% of accounts",
  },
  {
    title: "Amazon & Marketplace",
    body: "+186% Amazon sales (VAC) · +64% Buy Box rate · -42% TACoS on restructured accounts",
  },
  {
    title: "Conversion Optimization",
    body: "+52% CR (Kitchenary) · +38% average lift after two test cycles · every test documented",
  },
  {
    title: "Email & Retention",
    body: "Lifecycle programmes reaching 25–35% of revenue · +46% subscription rate (Nutriblend)",
  },
  {
    title: "Development & Performance",
    body: "1.6s mobile LCP (Kitchenary) · 40+ replatforms with zero ranking loss · Core Web Vitals passed",
  },
];

const testimonials = [
  {
    quote:
      "“They were the first agency that talked to us about contribution margin instead of vanity ROAS. Six months in, we are spending more and keeping more of it.”",
    name: "Marisa Chen",
    role: "VP Growth, Nutriblend",
  },
  {
    quote:
      "“Our Amazon catalog was a mess after three years of quick fixes. They rebuilt it properly, and we recovered the Buy Box on our top sellers within a quarter.”",
    name: "Devin Okafor",
    role: "Founder, VAC Vacuums",
  },
  {
    quote:
      "“The replatform was the smoothest project our team has run. No traffic dip, no ranking loss, and the site is three times faster.”",
    name: "Priya Raghavan",
    role: "eCommerce Director, Kitchenary",
  },
];

const industries = [
  { name: "Fashion & Apparel", note: "Sizing, returns and seasonality" },
  { name: "Beauty & Cosmetics", note: "Regulated claims and replenishment" },
  { name: "Health & Supplements", note: "Subscriptions and compliance" },
  { name: "Home & Furniture", note: "High AOV and freight" },
  { name: "Consumer Electronics", note: "Marketplace-heavy, price-sensitive" },
  { name: "Jewelry & Accessories", note: "Trust and consideration cycles" },
  { name: "Sports & Fitness", note: "Community and creator-led demand" },
  { name: "Food & Beverage", note: "Perishability and repeat rate" },
  { name: "B2B eCommerce", note: "Quotes, tiered pricing, net terms" },
];

const filterInputStyle: React.CSSProperties = {
  flex: "1 1 220px",
  minWidth: "200px",
  padding: "0.7rem 0.9rem",
  border: "1px solid var(--line)",
  borderRadius: "8px",
  font: "inherit",
  fontSize: "0.95rem",
  background: "#fff",
  color: "var(--ink)",
};

const filterSelectStyle: React.CSSProperties = {
  flex: "1 1 160px",
  minWidth: "150px",
  padding: "0.7rem 0.9rem",
  border: "1px solid var(--line)",
  borderRadius: "8px",
  font: "inherit",
  fontSize: "0.95rem",
  background: "#fff",
  color: "var(--ink)",
};

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

export default function CaseStudiesPage() {
  const [query, setQuery] = useState("");
  const [service, setService] = useState("All services");
  const [platform, setPlatform] = useState("All platforms");
  const [industry, setIndustry] = useState("All industries");
  const [market, setMarket] = useState("All markets");

  const options = useMemo(() => {
    const unique = (key: keyof CaseStudy) =>
      Array.from(new Set(cases.map((c) => c[key] as string))).sort();
    return {
      services: unique("service"),
      platforms: unique("platform"),
      industries: unique("industry"),
      markets: unique("market"),
    };
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return cases.filter((c) => {
      if (service !== "All services" && c.service !== service) return false;
      if (platform !== "All platforms" && c.platform !== platform) return false;
      if (industry !== "All industries" && c.industry !== industry) return false;
      if (market !== "All markets" && c.market !== market) return false;
      if (q) {
        const haystack = [
          c.name,
          c.body,
          c.service,
          c.platform,
          c.industry,
          c.market,
          ...c.metrics.map((m) => `${m.value} ${m.label}`),
        ]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [query, service, platform, industry, market]);

  const hasActiveFilter =
    query.trim() !== "" ||
    service !== "All services" ||
    platform !== "All platforms" ||
    industry !== "All industries" ||
    market !== "All markets";

  const clearFilters = () => {
    setQuery("");
    setService("All services");
    setPlatform("All platforms");
    setIndustry("All industries");
    setMarket("All markets");
  };

  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <h1>eCommerce Case Studies With the Working Shown</h1>
          <p className="lead">
            Three engagements, three different problems, one operating system. Every number
            below comes with the methodology that produced it — because a metric without a
            method is just a claim.
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

      {/* 2. Results at a Glance */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Results at a Glance</p>
          <h2>Aggregated across managed accounts</h2>
          <p className="lead">
            Individual results vary considerably by category, margin structure and starting
            position. We will give you an honest range for your situation on the call.
          </p>
          <div className="stat-row">
            <div className="stat">
              <strong>+142%</strong>
              <span>Average revenue growth</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                First 12 months
              </p>
            </div>
            <div className="stat">
              <strong>6.7x</strong>
              <span>Median blended ROAS</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                Paid search, shopping and social
              </p>
            </div>
            <div className="stat">
              <strong>+38%</strong>
              <span>Average CR lift</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                After two CRO test cycles
              </p>
            </div>
            <div className="stat">
              <strong>31 mo</strong>
              <span>Average client tenure</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                On month-to-month terms
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The work — case study index with working filters */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">The work</p>
          <h2>Six engagements, with the working shown</h2>
          <p className="lead">
            Every case study is classified on four axes — service, platform, industry and
            market — so you can find the one that matches your situation rather than the one
            we happened to feature. Each chip links to the page that owns that term.
          </p>

          <div
            role="search"
            aria-label="Filter case studies"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              margin: "28px 0 8px",
            }}
          >
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search case studies…"
              aria-label="Search case studies"
              style={filterInputStyle}
            />
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              aria-label="Filter by service"
              style={filterSelectStyle}
            >
              <option>All services</option>
              {options.services.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              aria-label="Filter by platform"
              style={filterSelectStyle}
            >
              <option>All platforms</option>
              {options.platforms.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
              aria-label="Filter by industry"
              style={filterSelectStyle}
            >
              <option>All industries</option>
              {options.industries.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            <select
              value={market}
              onChange={(e) => setMarket(e.target.value)}
              aria-label="Filter by market"
              style={filterSelectStyle}
            >
              <option>All markets</option>
              {options.markets.map((o) => (
                <option key={o}>{o}</option>
              ))}
            </select>
            {hasActiveFilter && (
              <button
                type="button"
                className="btn btn-outline"
                onClick={clearFilters}
                style={{ padding: "0.7rem 1.1rem" }}
              >
                Clear filters
              </button>
            )}
          </div>
          <p
            aria-live="polite"
            style={{ color: "var(--muted)", fontSize: "0.95rem", margin: "0.5rem 0 0" }}
          >
            Showing {filtered.length} of {cases.length} case{" "}
            {cases.length === 1 ? "study" : "studies"}
            {hasActiveFilter ? " matching your filters" : ""}.
          </p>

          {filtered.length === 0 ? (
            <div className="card" style={{ marginTop: "24px" }}>
              <h3>No case studies match those filters</h3>
              <p>
                Try a different search term or clear the filters to see all six engagements.
              </p>
              <button type="button" className="btn btn-outline" onClick={clearFilters}>
                Clear filters
              </button>
            </div>
          ) : (
            <div className="card-grid" style={{ marginTop: "24px" }}>
              {filtered.map((c) => (
                <article className="case-card" key={c.name}>
                  <Image src={c.img} alt={c.imgAlt} width={1200} height={800} />
                  <div className="case-body">
                    <p className="case-cat">{c.service}</p>
                    <h3>
                      <Link href={c.href}>{c.name}</Link>
                    </h3>
                    <p style={{ color: "var(--muted)" }}>{c.body}</p>
                    <div className="case-metrics">
                      {c.metrics.map((m) => (
                        <div key={m.label}>
                          <strong>{m.value}</strong>
                          <span>{m.label}</span>
                        </div>
                      ))}
                    </div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        fontWeight: 800,
                        letterSpacing: "0.08em",
                        color: "var(--muted)",
                        margin: "0 0 0.5rem",
                      }}
                    >
                      FILED UNDER
                    </p>
                    <div
                      style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1rem" }}
                    >
                      {c.chips.map((chip) => (
                        <Link key={chip.label} href={chip.href} style={chipStyle}>
                          {chip.label}
                        </Link>
                      ))}
                    </div>
                    <Link className="read-more" href={c.href}>
                      Read the case study
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginTop: "24px" }}>
            Client names are the ones we publish under. Figures are measured against the same
            period a year earlier, and count kept orders net of returns.
          </p>
        </div>
      </section>

      {/* 4. Our Methodology */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our Methodology</p>
          <h2>Why these engagements worked</h2>
          <p className="lead">
            The same four-phase system runs on every account. It is deliberately boring —
            consistency is what makes results repeatable rather than lucky.
          </p>
          <div className="card-grid card-grid-4">
            {methodology.map((s) => (
              <article className="card" key={s.num}>
                <p className="card-num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p style={{ color: "var(--muted)", marginTop: "24px", maxWidth: "820px" }}>
            <strong style={{ color: "var(--navy)" }}>A note on attribution.</strong> Every
            figure on this page is measured against a pre-engagement baseline over an
            equivalent trailing period, using the client’s own analytics and platform
            reporting rather than our platform-attributed numbers. Where seasonality or a
            product launch contributed materially, we say so in the full case study document.
          </p>
        </div>
      </section>

      {/* 5. Results by Service */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Results by Service</p>
          <h2>What each discipline typically delivers</h2>
          <div className="card-grid">
            {disciplines.map((d) => (
              <article className="card" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Client Testimonials */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Client Testimonials</p>
          <h2>In their words</h2>
          <div className="card-grid">
            {testimonials.map((t) => (
              <div className="quote-card" key={t.name}>
                <blockquote>{t.quote}</blockquote>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industries */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Industries &amp; Business Types We Help</p>
          <h2>Where our experience is deepest</h2>
          <p className="lead">
            Nine categories cover most of our book. The operating system underneath is the
            same — the constraints are what change.
          </p>
          <div className="card-grid">
            {industries.map((ind) => (
              <div className="card platform-card" key={ind.name}>
                <h3 className="platform-name">{ind.name}</h3>
                <p>{ind.note}</p>
              </div>
            ))}
          </div>
          <div className="mt">
            <Link className="btn btn-outline" href="/industries/">
              Explore industries in detail
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Case Study FAQs */}
      <section className="section">
        <div className="container center">
          <p className="eyebrow">Case Study FAQs</p>
          <h2>Fair questions about these numbers</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Want a case study with your name on it?</h2>
          <p className="lead">
            Start with the free audit. We will show you where your revenue is leaking, what it
            is worth to fix, and whether we are the right team to do it.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/book-a-strategy-call/">
              Book Your Free Strategy Call
            </Link>
            <Link
              className="btn"
              href="/services/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              See Our Services
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
