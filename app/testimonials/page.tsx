"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pill } from "@/components/Pill";

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
  color: string;
  name: string;
  role: string;
  reviewHref: string;
  reviewLabel: string;
};

const featured: Featured[] = [
  {
    quote:
      "They were the first agency that talked to us about contribution margin instead of vanity ROAS. Six months in, we are spending more and keeping more of it. The reporting changed how our whole team argues about budget.",
    metrics: [
      { value: "+29%", label: "Subscriber LTV" },
      { value: "-34%", label: "Month-three churn" },
      { value: "+18%", label: "Revenue per email" },
    ],
    initials: "MC",
    color: "#0B5BF4",
    name: "Marisa Chen",
    role: "VP Growth, Nutriblend",
    reviewHref: "/testimonials/nutriblend-review/",
    reviewLabel: "Read Marisa Chen’s full review →",
  },
  {
    quote:
      "Our Amazon catalog was a mess after three years of quick fixes. They rebuilt it properly, and we recovered the Buy Box on our top sellers within a quarter. No drama, no rebuild of the rebuild.",
    metrics: [
      { value: "+44%", label: "Buy-box share" },
      { value: "-17%", label: "Return rate" },
      { value: "+26%", label: "Marketplace revenue" },
    ],
    initials: "DO",
    color: "#8B5CF6",
    name: "Devin Okafor",
    role: "Founder, VAC Vacuums",
    reviewHref: "/testimonials/vac-vacuums-review/",
    reviewLabel: "Read Devin Okafor’s full review →",
  },
  {
    quote:
      "Every order now carries its own delivery cost, which sounds like an accounting change and turned out to be the whole strategy. Volume held, the margin came back, and we stopped paying to ship heavy things a long way for nothing.",
    metrics: [
      { value: "+38%", label: "Contribution margin" },
      { value: "-21%", label: "Acquisition cost" },
      { value: "+12%", label: "Repeat purchase rate" },
    ],
    initials: "PR",
    color: "#10B981",
    name: "Priya Raghavan",
    role: "eCommerce Director, Kitchenary",
    reviewHref: "/testimonials/kitchenary-review/",
    reviewLabel: "Read Priya Raghavan’s full review →",
  },
  {
    quote:
      "What we did not expect was being told to stop spending on a channel we had championed internally. They showed the margin working, we cut it, and the quarter was better for it. That is the reason we renewed.",
    metrics: [],
    initials: "MG",
    color: "#F97316",
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
  color: string;
  name: string;
  role: string;
  category: Exclude<ServiceTab, "All">;
};

const serviceQuotes: ServiceQuote[] = [
  {
    quote:
      "Our Amazon catalog was a mess after three years of quick fixes. They rebuilt it properly, and we recovered the Buy Box on our top sellers within a quarter.",
    initials: "DO",
    color: "#8B5CF6",
    name: "Devin Okafor",
    role: "Founder, VAC Vacuums",
    category: "eCommerce Management",
  },
  {
    quote:
      "One team across search, paid and marketplace, and one person who answers for the number. After three agencies who each blamed the other two, that alone was worth the move.",
    initials: "FG",
    color: "#0B5BF4",
    name: "Head of Growth",
    role: "Fitness Gear",
    category: "eCommerce Management",
  },
  {
    quote:
      "They rewrote 340 collection pages around what people actually search for rather than how our catalog happened to be organised. Non-brand traffic did the rest.",
    initials: "KY",
    color: "#10B981",
    name: "Head of Organic Growth",
    role: "Kitchenary",
    category: "SEO",
  },
  {
    quote:
      "The technical audit was the first one we had received that was ranked by revenue impact instead of by severity score. We knew what to fix first for once.",
    initials: "PZ",
    color: "#0B5BF4",
    name: "Marketing Director",
    role: "petzz",
    category: "SEO",
  },
  {
    quote:
      "They were the first agency that talked to us about contribution margin instead of vanity ROAS. Six months in, we are spending more and keeping more of it.",
    initials: "MC",
    color: "#0B5BF4",
    name: "Marisa Chen",
    role: "VP Growth, Nutriblend",
    category: "PPC",
  },
  {
    quote:
      "Shopping was one campaign bidding the same on a $40 throw and a $900 sofa. Splitting it by margin tier changed the economics of the whole account.",
    initials: "LC",
    color: "#F97316",
    name: "Founder",
    role: "Luxury Comforts",
    category: "PPC",
  },
  {
    quote:
      "Every test is written up, including the ones that lost. We now have a documented record of what does not work on our store, which is worth as much as the wins.",
    initials: "MG",
    color: "#F97316",
    name: "Head of eCommerce",
    role: "Men’s grooming brand",
    category: "CRO",
  },
  {
    quote:
      "Moving the subscription selector above the fold and reframing the annual saving did more for us in a fortnight than the previous year of ad testing.",
    initials: "NB",
    color: "#8B5CF6",
    name: "Retention Lead",
    role: "Nutriblend",
    category: "CRO",
  },
  {
    quote:
      "Every order now carries its own delivery cost. Volume held, and the margin came back.",
    initials: "PR",
    color: "#10B981",
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
    img: "/images/portfolio-nutriblend.webp",
    imgAlt: "Dazzle Commerce SEO team working through category page structure",
    title: "Fixing the churn window",
    body: "How a UK supplements brand lifted subscriber lifetime value 29% by matching delivery to consumption.",
  },
  {
    name: "VAC Vacuums",
    href: "/vac-vacuums-amazon-marketplace-europe/",
    img: "/images/portfolio-vac-vacuums.webp",
    imgAlt: "Dazzle Commerce marketplace team reviewing Amazon account performance",
    title: "Buy-box and catalogue recovery",
    body: "Buy-box share up 44% and returns down 17%, once one catalogue problem was found behind both.",
  },
  {
    name: "Kitchenary",
    href: "/kitchenary-home-kitchen-shopify-usa/",
    img: "/images/portfolio-kitchenary.webp",
    imgAlt: "Dazzle Commerce paid media specialists reviewing campaign performance",
    title: "Contribution margin recovery",
    body: "Contribution margin up 38% once every order was made to carry its own delivery cost.",
  },
  {
    name: "Lumen Atelier",
    href: "/lumen-atelier-fashion-ppc-shopify-usa/",
    img: "/images/testimonials-story-lumen.webp",
    imgAlt: "Fashion studio with a clothing rack and styled garments",
    title: "Creative supply, not media",
    body: "Cost per acquisition down 31% net of returns, once the constraint turned out to be the creative pipeline.",
  },
  {
    name: "Sabaa Beauty",
    href: "/sabaa-beauty-noon-seo-gcc/",
    img: "/images/testimonials-story-sabaa.webp",
    imgAlt: "Luxury skincare products arranged for a beauty campaign",
    title: "Arabic search and prepaid trust",
    body: "Organic revenue 2.4x and prepaid share up 38 points, after the Arabic site stopped being a translation.",
  },
  {
    name: "Verdano Foods",
    href: "/verdano-foods-bigcommerce-cro-australia/",
    img: "/images/testimonials-story-verdano.webp",
    imgAlt: "Packaged food products displayed on a retail shelf",
    title: "An honest delivery promise",
    body: "Conversion up 41% after the quoted delivery window got longer rather than shorter.",
  },
];

function Stars({ size }: { size: number }) {
  return (
    <div className="tm-stars" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <i
          key={i}
          className="fa-solid fa-star"
          style={{ fontSize: size }}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

function Person({
  initials,
  color,
  name,
  role,
}: {
  initials: string;
  color: string;
  name: string;
  role: string;
}) {
  return (
    <div className="tm-person">
      <span
        className="tm-avatar"
        style={{ backgroundColor: color }}
        aria-hidden="true"
      >
        {initials}
      </span>
      <div>
        <p className="tm-person-name">{name}</p>
        <p className="tm-person-role">{role}</p>
      </div>
    </div>
  );
}

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
      <section className="hero" style={{ background: "#F7F9FC", padding: "92px 0 84px" }}>
        <div className="container center">
          <Pill icon="fa-solid fa-users" center>Client Testimonials &amp; Reviews</Pill>
          <h1>What It Is Actually Like to Work With Us</h1>
          <p className="lead center">
            Every quote below sits next to the work that produced it. Where a number is
            quoted, the methodology behind it is published on the case study — because a
            testimonial without a method is just a nice sentence.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="tm-btn tm-btn-blue" href="/book-a-strategy-call/">
              <i className="fa-solid fa-calendar-days" aria-hidden="true" />
              Get Your Free Strategy Call
            </Link>
            <Link className="read-more" href="/case-studies/">
              <i className="fa-solid fa-briefcase" aria-hidden="true" />
              Read the Full Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Results Snapshot */}
      <section className="section" style={{ padding: "100px 0" }}>
        <div className="container center">
          <Pill icon="fa-solid fa-chart-line" center>Results Snapshot</Pill>
          <h2>The aggregate, before the anecdotes</h2>
          <p className="lead center">
            Individual results vary considerably by category, margin structure and
            starting position. We will give you an honest range for your situation on
            the call.
          </p>
          <div className="tm-stat-grid">
            <div className="tm-stat">
              <strong>100+</strong>
              <span className="tm-stat-label">Brands served</span>
              <span className="tm-stat-sub">Across D2C and B2B, storefront and marketplace</span>
            </div>
            <div className="tm-stat">
              <strong>$48M+</strong>
              <span className="tm-stat-label">GMV managed</span>
              <span className="tm-stat-sub">Annualised across all client accounts</span>
            </div>
            <div className="tm-stat">
              <strong>6-12 wks</strong>
              <span className="tm-stat-label">To payback on the fee</span>
              <span className="tm-stat-sub">Range across all six published case studies</span>
            </div>
            <div className="tm-stat">
              <strong>31 mo</strong>
              <span className="tm-stat-label">Average client tenure</span>
              <span className="tm-stat-sub">Month-to-month after the first 90 days</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Client Stories */}
      <section className="section section-soft" style={{ padding: "100px 0" }}>
        <div className="container center">
          <Pill icon="fa-solid fa-star" center>Featured Client Stories</Pill>
          <h2>Four engagements, in their words</h2>
          <p className="lead center">
            Each of these has a full case study with the methodology, the baseline and
            what we would do differently.
          </p>
          <div className="card-grid card-grid-2" style={{ gap: "28px", textAlign: "left" }}>
            {featured.map((f) => (
              <article className="tm-featured-card" key={f.initials}>
                <Stars size={16} />
                <blockquote>{f.quote}</blockquote>
                {f.metrics.length > 0 && (
                  <div className="tm-metrics">
                    {f.metrics.map((m) => (
                      <div key={m.label} className="tm-metric">
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <Person initials={f.initials} color={f.color} name={f.name} role={f.role} />
                <Link className="tm-featured-link" href={f.reviewHref}>
                  {f.reviewLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Testimonials by Service (working filter) */}
      <section className="section" style={{ padding: "100px 0" }}>
        <div className="container center">
          <Pill icon="fa-solid fa-quote-left" center>Testimonials by Service</Pill>
          <h2>Filter by the work that produced them</h2>
          <p className="lead center">
            Nine quotes across the disciplines we run. Pick the one you are actually
            considering.
          </p>
          <div
            className="tm-tabs"
            role="tablist"
            aria-label="Filter testimonials by service"
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
                  className={active ? "tm-tab tm-tab-active" : "tm-tab"}
                >
                  {t}
                </button>
              );
            })}
          </div>
          <div className="card-grid" style={{ gap: "24px", textAlign: "left" }}>
            {filtered.map((q) => (
              <article className="tm-quote-card" key={`${q.initials}-${q.category}`}>
                <Stars size={15} />
                <blockquote>{q.quote}</blockquote>
                <Person initials={q.initials} color={q.color} name={q.name} role={q.role} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Client reviews */}
      <section className="section section-soft" style={{ padding: "100px 0" }}>
        <div className="container center">
          <Pill icon="fa-solid fa-users" center>Client reviews</Pill>
          <h2>Six engagements, reviewed by the people who paid for them</h2>
          <p className="lead center">
            Each review covers why they went looking for an agency, what they had
            already tried, what surprised them, and what they would change. No star
            ratings: these are reviews of our own business on our own site, and we are
            not going to present them as independent.
          </p>
          <div className="card-grid" style={{ gap: "24px", textAlign: "left" }}>
            {reviews.map((r) => (
              <article className="tm-review-card" key={r.brand}>
                <Image src={r.img} alt={r.imgAlt} width={1200} height={800} />
                <h4 className="tm-review-head">{r.header}</h4>
                <h3>
                  <Link href={r.href}>{r.brand}</Link>
                </h3>
                <p>{r.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Client Stories */}
      <section className="section" style={{ padding: "100px 0" }}>
        <div className="container center">
          <Pill icon="fa-solid fa-layer-group" center>Client Stories</Pill>
          <h2>The work behind the quotes</h2>
          <p className="lead center">
            Six engagements told end to end, with every number measured against a
            pre-engagement baseline and the method published alongside it.
          </p>
          <div className="card-grid" style={{ gap: "28px", textAlign: "left" }}>
            {stories.map((s) => (
              <article className="tm-story-card" key={s.name}>
                <Link href={s.href} aria-label={s.name}>
                  <Image src={s.img} alt={s.imgAlt} width={1200} height={800} />
                </Link>
                <div className="tm-story-body">
                  <p className="tm-story-brand">
                    <Link href={s.href}>{s.name}</Link>
                  </p>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <Link className="read-more" href={s.href}>
                    Read the full story
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="tm-note">
            <i className="fa-solid fa-circle-info" aria-hidden="true" />
            <p>
              Filmed testimonials are not published yet. Rather than mock them up, each
              story above links to the written case study, which carries the full
              methodology, the pre-engagement baseline and what we would do differently.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="section final-cta final-cta-blue">
        <div className="container">
          <h2>Want to be the next story on this page?</h2>
          <p className="lead center">
            Start with the free audit. We will show you where revenue is leaking, what
            it is worth to fix, and whether we are the right team to do it.
          </p>
          <div className="btn-row">
            <Link className="tm-btn tm-btn-white" href="/book-a-strategy-call/">
              <i className="fa-solid fa-calendar-days" aria-hidden="true" />
              Book Your Free Strategy Call
            </Link>
            <Link className="tm-btn tm-btn-ghost" href="/pricing/">
              See Pricing &amp; Packages
              <i className="fa-solid fa-arrow-right" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
