"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// NOTE: this file is a client component because the "Testimonials by Service"
// filter needs client-side state. (A client module cannot export `metadata`;
// the page title/description from the extraction — "eCommerce Agency
// Testimonials & Reviews | Dazzle" — should be added via a route-level
// metadata wrapper if the parent wants it.)
// The live page has no FAQ section and no form in the body; the 6-tab filter
// is its only interactive element.

type Metric = { value: string; label: string };

type Featured = {
  quote: string;
  metrics: Metric[];
  initials: string;
  name: string;
  role: string;
  reviewHref: string;
  reviewLabel: string;
};

const featured: Featured[] = [
  {
    quote:
      "“They were the first agency that talked to us about contribution margin instead of vanity ROAS. Six months in, we are spending more and keeping more of it. The reporting changed how our whole team argues about budget.”",
    metrics: [
      { value: "+29%", label: "Subscriber LTV" },
      { value: "-34%", label: "Month-three churn" },
      { value: "+18%", label: "Revenue per email" },
    ],
    initials: "MC",
    name: "Marisa Chen",
    role: "VP Growth, Nutriblend",
    reviewHref: "/testimonials/nutriblend-review/",
    reviewLabel: "Read Marisa Chen’s full review →",
  },
  {
    quote:
      "“Our Amazon catalog was a mess after three years of quick fixes. They rebuilt it properly, and we recovered the Buy Box on our top sellers within a quarter. No drama, no rebuild of the rebuild.”",
    metrics: [
      { value: "+44%", label: "Buy-box share" },
      { value: "-17%", label: "Return rate" },
      { value: "+26%", label: "Marketplace revenue" },
    ],
    initials: "DO",
    name: "Devin Okafor",
    role: "Founder, VAC Vacuums",
    reviewHref: "/testimonials/vac-vacuums-review/",
    reviewLabel: "Read Devin Okafor’s full review →",
  },
  {
    quote:
      "“Every order now carries its own delivery cost, which sounds like an accounting change and turned out to be the whole strategy. Volume held, the margin came back, and we stopped paying to ship heavy things a long way for nothing.”",
    metrics: [
      { value: "+38%", label: "Contribution margin" },
      { value: "-21%", label: "Acquisition cost" },
      { value: "+12%", label: "Repeat purchase rate" },
    ],
    initials: "PR",
    name: "Priya Raghavan",
    role: "eCommerce Director, Kitchenary",
    reviewHref: "/testimonials/kitchenary-review/",
    reviewLabel: "Read Priya Raghavan’s full review →",
  },
  {
    quote:
      "“What we did not expect was being told to stop spending on a channel we had championed internally. They showed the margin working, we cut it, and the quarter was better for it. That is the reason we renewed.”",
    metrics: [],
    initials: "MG",
    name: "Head of eCommerce",
    role: "Men’s grooming brand",
    reviewHref: "/case-studies/",
    reviewLabel: "Read the full case studies",
  },
];

type ServiceTab =
  | "All"
  | "eCommerce Management"
  | "SEO"
  | "PPC"
  | "CRO"
  | "Development";

const tabs: ServiceTab[] = [
  "All",
  "eCommerce Management",
  "SEO",
  "PPC",
  "CRO",
  "Development",
];

type ServiceQuote = {
  quote: string;
  initials: string;
  name: string;
  role: string;
  category: Exclude<ServiceTab, "All">;
};

const serviceQuotes: ServiceQuote[] = [
  {
    quote:
      "“Our Amazon catalog was a mess after three years of quick fixes. They rebuilt it properly, and we recovered the Buy Box on our top sellers within a quarter.”",
    initials: "DO",
    name: "Devin Okafor",
    role: "Founder, VAC Vacuums",
    category: "eCommerce Management",
  },
  {
    quote:
      "“One team across search, paid and marketplace, and one person who answers for the number. After three agencies who each blamed the other two, that alone was worth the move.”",
    initials: "FG",
    name: "Head of Growth",
    role: "Fitness Gear",
    category: "eCommerce Management",
  },
  {
    quote:
      "“They rewrote 340 collection pages around what people actually search for rather than how our catalog happened to be organised. Non-brand traffic did the rest.”",
    initials: "KY",
    name: "Head of Organic Growth",
    role: "Kitchenary",
    category: "SEO",
  },
  {
    quote:
      "“The technical audit was the first one we had received that was ranked by revenue impact instead of by severity score. We knew what to fix first for once.”",
    initials: "PZ",
    name: "Marketing Director",
    role: "petzz",
    category: "SEO",
  },
  {
    quote:
      "“They were the first agency that talked to us about contribution margin instead of vanity ROAS. Six months in, we are spending more and keeping more of it.”",
    initials: "MC",
    name: "Marisa Chen",
    role: "VP Growth, Nutriblend",
    category: "PPC",
  },
  {
    quote:
      "“Shopping was one campaign bidding the same on a $40 throw and a $900 sofa. Splitting it by margin tier changed the economics of the whole account.”",
    initials: "LC",
    name: "Founder",
    role: "Luxury Comforts",
    category: "PPC",
  },
  {
    quote:
      "“Every test is written up, including the ones that lost. We now have a documented record of what does not work on our store, which is worth as much as the wins.”",
    initials: "MG",
    name: "Head of eCommerce",
    role: "Men’s grooming brand",
    category: "CRO",
  },
  {
    quote:
      "“Moving the subscription selector above the fold and reframing the annual saving did more for us in a fortnight than the previous year of ad testing.”",
    initials: "NB",
    name: "Retention Lead",
    role: "Nutriblend",
    category: "CRO",
  },
  {
    quote:
      "“Every order now carries its own delivery cost. Volume held, and the margin came back.”",
    initials: "PR",
    name: "Priya Raghavan",
    role: "eCommerce Director, Kitchenary",
    category: "Development",
  },
];

type Review = {
  header: string;
  brand: string;
  href: string;
  img: string;
  imgAlt: string;
  body: string;
};

const reviews: Review[] = [
  {
    header: "Marisa Chen · VP Growth",
    brand: "NutriBlend",
    href: "/testimonials/nutriblend-review/",
    img: "/images/testimonials-review-nutriblend.webp",
    imgAlt: "Supplement gummies photographed on a bright background",
    body: "Came to us planning to cut acquisition spend, and finished the quarter raising it.",
  },
  {
    header: "Devin Okafor · Founder",
    brand: "Vac & Vacuums",
    href: "/testimonials/vac-vacuums-review/",
    img: "/images/testimonials-review-vac.webp",
    imgAlt: "Seller packing marketplace orders beside a laptop showing account performance",
    body: "A price war and a returns problem that turned out to be one catalogue, told from the brand side.",
  },
  {
    header: "Priya Raghavan · Ecommerce Director",
    brand: "Kitchenary",
    href: "/testimonials/kitchenary-review/",
    img: "/images/testimonials-review-kitchenary.webp",
    imgAlt: "A cookware set arranged on floating shelves",
    body: "Revenue growing, profit flat, and a media brief that had to be rejected before anything worked.",
  },
  {
    header: "Violet Hina · Head of Growth",
    brand: "Lumen Atelier",
    href: "/testimonials/lumen-atelier-review/",
    img: "/images/testimonials-review-lumen.webp",
    imgAlt: "Rails of colourful garments in a fashion boutique",
    body: "Three agencies restructured an ad account that was never the thing holding them back.",
  },
  {
    header: "Shams Al-Gharbi · Managing Director",
    brand: "Sabaa Beauty",
    href: "/testimonials/sabaa-beauty-review/",
    img: "/images/testimonials-review-sabaa.webp",
    imgAlt: "Shelves stocked with skincare and cosmetics products",
    body: "An Arabic menu over an English catalogue, and what that cost them at the customer’s door.",
  },
  {
    header: "William Josh · Operations Director",
    brand: "Verdano Foods",
    href: "/testimonials/verdano-foods-review/",
    img: "/images/testimonials-review-verdano.webp",
    imgAlt: "A box of groceries packed on a wooden table",
    body: "Being told to quote a longer delivery window, and watching conversion rise when they did.",
  },
];

type Story = {
  name: string;
  href: string;
  img: string;
  imgAlt: string;
  title: string;
  body: string;
};

const stories: Story[] = [
  {
    name: "Nutriblend",
    href: "/nutriblend-supplements-retention-uk/",
    img: "/images/case-nutriblend.webp",
    imgAlt: "Dazzle Commerce SEO team working through category page structure",
    title: "Fixing the churn window",
    body: "How a UK supplements brand lifted subscriber lifetime value 29% by matching delivery to consumption.",
  },
  {
    name: "VAC Vacuums",
    href: "/vac-vacuums-amazon-marketplace-europe/",
    img: "/images/case-vac-vacuums.webp",
    imgAlt: "Dazzle Commerce marketplace team reviewing Amazon account performance",
    title: "Buy-box and catalogue recovery",
    body: "Buy-box share up 44% and returns down 17%, once one catalogue problem was found behind both.",
  },
  {
    name: "Kitchenary",
    href: "/kitchenary-home-kitchen-shopify-usa/",
    img: "/images/case-kitchenary.webp",
    imgAlt: "Dazzle Commerce paid media specialists reviewing campaign performance",
    title: "Contribution margin recovery",
    body: "Contribution margin up 38% once every order was made to carry its own delivery cost.",
  },
  {
    name: "Lumen Atelier",
    href: "/lumen-atelier-fashion-ppc-shopify-usa/",
    img: "/images/case-studies-lumen-atelier.webp",
    imgAlt: "Fashion studio with a clothing rack and styled garments",
    title: "Creative supply, not media",
    body: "Cost per acquisition down 31% net of returns, once the constraint turned out to be the creative pipeline.",
  },
  {
    name: "Sabaa Beauty",
    href: "/sabaa-beauty-noon-seo-gcc/",
    img: "/images/case-studies-sabaa-beauty.webp",
    imgAlt: "Luxury skincare products arranged for a beauty campaign",
    title: "Arabic search and prepaid trust",
    body: "Organic revenue 2.4x and prepaid share up 38 points, after the Arabic site stopped being a translation.",
  },
  {
    name: "Verdano Foods",
    href: "/verdano-foods-bigcommerce-cro-australia/",
    img: "/images/case-studies-verdano-foods.webp",
    imgAlt: "Packaged food products displayed on a retail shelf",
    title: "An honest delivery promise",
    body: "Conversion up 41% after the quoted delivery window got longer rather than shorter.",
  },
];

const avatarStyle: React.CSSProperties = {
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  background: "var(--navy)",
  color: "#fff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: 800,
  fontSize: "1rem",
  flexShrink: 0,
};

export default function TestimonialsPage() {
  const [activeTab, setActiveTab] = useState<ServiceTab>("All");

  const filtered = useMemo(
    () =>
      activeTab === "All"
        ? serviceQuotes
        : serviceQuotes.filter((q) => q.category === activeTab),
    [activeTab],
  );

  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Client Testimonials &amp; Reviews</p>
          <h1>What It Is Actually Like to Work With Us</h1>
          <p className="lead">
            Every quote below sits next to the work that produced it. Where a number is
            quoted, the methodology behind it is published on the case study — because a
            testimonial without a method is just a nice sentence.
          </p>
          <div className="btn-row">
            <Link className="btn" href="/book-a-strategy-call/">
              Get Your Free Strategy Call
            </Link>
            <Link className="btn btn-outline" href="/case-studies/">
              Read the Full Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Results Snapshot */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Results Snapshot</p>
          <h2>The aggregate, before the anecdotes</h2>
          <p className="lead">
            Individual results vary considerably by category, margin structure and
            starting position. We will give you an honest range for your situation on
            the call.
          </p>
          <div className="stat-row">
            <div className="stat">
              <strong>100+</strong>
              <span>Brands served</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                Across D2C and B2B, storefront and marketplace
              </p>
            </div>
            <div className="stat">
              <strong>$48M+</strong>
              <span>GMV managed</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                Annualised across all client accounts
              </p>
            </div>
            <div className="stat">
              <strong>6-12 wks</strong>
              <span>To payback on the fee</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                Range across all six published case studies
              </p>
            </div>
            <div className="stat">
              <strong>31 mo</strong>
              <span>Average client tenure</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                Month-to-month after the first 90 days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Client Stories */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Featured Client Stories</p>
          <h2>Four engagements, in their words</h2>
          <p className="lead">
            Each of these has a full case study with the methodology, the baseline and
            what we would do differently.
          </p>
          <div className="card-grid card-grid-2">
            {featured.map((f) => (
              <article className="quote-card" key={f.name}>
                <blockquote>{f.quote}</blockquote>
                {f.metrics.length > 0 && (
                  <div className="case-metrics">
                    {f.metrics.map((m) => (
                      <div key={m.label}>
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div style={{ display: "flex", gap: "14px", alignItems: "center", marginTop: "1rem" }}>
                  <span style={avatarStyle} aria-hidden="true">
                    {f.initials}
                  </span>
                  <div>
                    <h3 style={{ marginBottom: "0.15rem" }}>{f.name}</h3>
                    <p style={{ margin: 0 }}>{f.role}</p>
                  </div>
                </div>
                <p style={{ marginTop: "1rem", marginBottom: 0 }}>
                  <Link className="read-more" href={f.reviewHref} style={{ fontWeight: 700 }}>
                    {f.reviewLabel}
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials by Service (working filter) */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Testimonials by Service</p>
          <h2>Filter by the work that produced them</h2>
          <p className="lead">
            Nine quotes across the disciplines we run. Pick the one you are actually
            considering.
          </p>
          <div
            className="btn-row"
            role="tablist"
            aria-label="Filter testimonials by service"
            style={{ marginTop: "1.5rem" }}
          >
            {tabs.map((t) => {
              const active = activeTab === t;
              return (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-pressed={active}
                  onClick={() => setActiveTab(t)}
                  className="btn"
                  style={
                    active
                      ? undefined
                      : { background: "transparent", color: "var(--blue)" }
                  }
                >
                  {t}
                </button>
              );
            })}
          </div>
          <p
            style={{ color: "var(--muted)", marginTop: "1.25rem", marginBottom: 0 }}
            aria-live="polite"
          >
            Showing {filtered.length} of {serviceQuotes.length} testimonials
            {activeTab !== "All" ? ` in ${activeTab}` : ""}.
          </p>
          <div className="card-grid">
            {filtered.map((q) => (
              <div className="quote-card" key={`${q.name}-${q.role}`}>
                <blockquote>{q.quote}</blockquote>
                <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                  <span style={avatarStyle} aria-hidden="true">
                    {q.initials}
                  </span>
                  <div>
                    <h3 style={{ marginBottom: "0.15rem" }}>{q.name}</h3>
                    <p style={{ margin: 0 }}>{q.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {filtered.length === 0 && (
            <p style={{ color: "var(--muted)", marginTop: "2rem" }}>
              No testimonials in this category yet.
            </p>
          )}
        </div>
      </section>

      {/* 5. Client reviews */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Client reviews</p>
          <h2>Six engagements, reviewed by the people who paid for them</h2>
          <p className="lead">
            Each review covers why they went looking for an agency, what they had
            already tried, what surprised them, and what they would change. No star
            ratings: these are reviews of our own business on our own site, and we are
            not going to present them as independent.
          </p>
          <div className="card-grid">
            {reviews.map((r) => (
              <article className="case-card" key={r.brand}>
                <Image src={r.img} alt={r.imgAlt} width={1200} height={800} />
                <div className="case-body">
                  <p
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                      color: "var(--blue)",
                      marginBottom: "0.4rem",
                    }}
                  >
                    {r.header}
                  </p>
                  <h3>
                    <Link href={r.href}>{r.brand}</Link>
                  </h3>
                  <p style={{ color: "var(--muted)" }}>{r.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Client Stories */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Client Stories</p>
          <h2>The work behind the quotes</h2>
          <p className="lead">
            Six engagements told end to end, with every number measured against a
            pre-engagement baseline and the method published alongside it.
          </p>
          <div className="card-grid">
            {stories.map((s) => (
              <article className="case-card" key={s.name}>
                <Image src={s.img} alt={s.imgAlt} width={1200} height={800} />
                <div className="case-body">
                  <h3>
                    <Link href={s.href}>{s.name}</Link>
                  </h3>
                  <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem" }}>
                    {s.title}
                  </p>
                  <p style={{ color: "var(--muted)" }}>{s.body}</p>
                  <Link className="read-more" href={s.href}>
                    Read the full story
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p style={{ color: "var(--muted)", marginTop: "2rem", maxWidth: "760px" }}>
            Filmed testimonials are not published yet. Rather than mock them up, each
            story above links to the written case study, which carries the full
            methodology, the pre-engagement baseline and what we would do differently.
          </p>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Want to be the next story on this page?</h2>
          <p className="lead">
            Start with the free audit. We will show you where revenue is leaking, what
            it is worth to fix, and whether we are the right team to do it.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/book-a-strategy-call/">
              Book Your Free Strategy Call
            </Link>
            <Link
              className="btn"
              href="/pricing/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              See Pricing &amp; Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
