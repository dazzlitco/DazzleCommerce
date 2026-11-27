import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";

// Case Studies — /case-studies/
// Live source: https://dazzlecommerce.com/case-studies/
// Full word-for-word extraction: clone-plan/case-studies-extraction.md
//
// Fidelity notes (live is the authority):
// - The live page has NO filter/search form elements in its main content
//   (no form, select, input or button). "Filter by service, platform,
//   industry and market" appears only in the meta description; the live
//   filtering mechanism is the FILED UNDER chips, each linking to the page
//   that owns that term. So this page renders the six cards statically with
//   the chips as links — no client-side filter, no search box.
// - Hero intro says "Three engagements" while the page lists six — the live
//   quirk, kept verbatim.
// - Metrics are THIS page's own live figures for each client, not the
//   homepage's figures for the same clients.

export const metadata: Metadata = {
  title: "eCommerce Case Studies & Results | Dazzle Commerce",
  description:
    "Six eCommerce case studies with the constraint we found, the work we did and the numbers that moved. Filter by service, platform, industry and market.",
  alternates: { canonical: "https://dazzlecommerce.com/case-studies/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/case-studies/",
    siteName: "Dazzle Commerce",
    title: "eCommerce Case Studies & Results | Dazzle Commerce",
    description:
      "Six eCommerce case studies with the constraint we found, the work we did and the numbers that moved. Filter by service, platform, industry and market.",
    images: [
      {
        url: "/images/case-nutriblend.webp",
        width: 800,
        height: 534,
        alt: "Dazzle Commerce SEO team working through category page structure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Case Studies & Results | Dazzle Commerce",
    description:
      "Six eCommerce case studies with the constraint we found, the work we did and the numbers that moved. Filter by service, platform, industry and market.",
  },
};

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
    icon: "fa-solid fa-magnifying-glass",
    tint: { bg: "#E6F6F0", color: "#16a34a" },
  },
  {
    title: "PPC & Google Shopping",
    body: "7.9x blended ROAS (Nutriblend) · -31% blended CAC · margin-tiered structures on 100% of accounts",
    icon: "fa-solid fa-bullseye",
    tint: { bg: "#EFF4FD", color: "#0B5BF4" },
  },
  {
    title: "Amazon & Marketplace",
    body: "+186% Amazon sales (VAC) · +64% Buy Box rate · -42% TACoS on restructured accounts",
    icon: "fa-solid fa-box-open",
    tint: { bg: "#FEF0E7", color: "#ea580c" },
  },
  {
    title: "Conversion Optimization",
    body: "+52% CR (Kitchenary) · +38% average lift after two test cycles · every test documented",
    icon: "fa-solid fa-arrow-trend-up",
    tint: { bg: "#F1ECFE", color: "#7c3aed" },
  },
  {
    title: "Email & Retention",
    body: "Lifecycle programmes reaching 25–35% of revenue · +46% subscription rate (Nutriblend)",
    icon: "fa-solid fa-envelope",
    tint: { bg: "#E6F6F0", color: "#16a34a" },
  },
  {
    title: "Development & Performance",
    body: "1.6s mobile LCP (Kitchenary) · 40+ replatforms with zero ranking loss · Core Web Vitals passed",
    icon: "fa-solid fa-code",
    tint: { bg: "#F1ECFE", color: "#7c3aed" },
  },
];

const testimonials = [
  {
    quote:
      "“They were the first agency that talked to us about contribution margin instead of vanity ROAS. Six months in, we are spending more and keeping more of it.”",
    name: "Marisa Chen",
    role: "VP Growth, Nutriblend",
    img: "/images/testimonial-marisa.webp",
    ring: "#0B5BF4",
  },
  {
    quote:
      "“Our Amazon catalog was a mess after three years of quick fixes. They rebuilt it properly, and we recovered the Buy Box on our top sellers within a quarter.”",
    name: "Devin Okafor",
    role: "Founder, VAC Vacuums",
    img: "/images/testimonial-devin.webp",
    ring: "#7c3aed",
  },
  {
    quote:
      "“The replatform was the smoothest project our team has run. No traffic dip, no ranking loss, and the site is three times faster.”",
    name: "Priya Raghavan",
    role: "eCommerce Director, Kitchenary",
    img: "/images/testimonial-priya.webp",
    ring: "#16a34a",
  },
];

const industries = [
  { name: "Fashion & Apparel", note: "Sizing, returns and seasonality", icon: "fa-solid fa-shirt", tint: { bg: "#F4F8EC", color: "#65a30d" } },
  { name: "Beauty & Cosmetics", note: "Regulated claims and replenishment", icon: "fa-solid fa-spray-can-sparkles", tint: { bg: "#F1ECFE", color: "#7c3aed" } },
  { name: "Health & Supplements", note: "Subscriptions and compliance", icon: "fa-solid fa-hand-holding-heart", tint: { bg: "#E6F6F0", color: "#16a34a" } },
  { name: "Home & Furniture", note: "High AOV and freight", icon: "fa-solid fa-couch", tint: { bg: "#FEF0E7", color: "#ea580c" } },
  { name: "Consumer Electronics", note: "Marketplace-heavy, price-sensitive", icon: "fa-solid fa-plug-circle-bolt", tint: { bg: "#EFF4FD", color: "#0B5BF4" } },
  { name: "Jewelry & Accessories", note: "Trust and consideration cycles", icon: "fa-solid fa-gem", tint: { bg: "#F1ECFE", color: "#7c3aed" } },
  { name: "Sports & Fitness", note: "Community and creator-led demand", icon: "fa-solid fa-dumbbell", tint: { bg: "#E6F6F0", color: "#16a34a" } },
  { name: "Food & Beverage", note: "Perishability and repeat rate", icon: "fa-solid fa-utensils", tint: { bg: "#FEF0E7", color: "#ea580c" } },
  { name: "B2B eCommerce", note: "Quotes, tiered pricing, net terms", icon: "fa-solid fa-globe", tint: { bg: "#EFF4FD", color: "#0B5BF4" } },
];

const chipStyle: React.CSSProperties = {
  flex: "1 1 0",
  padding: "7px 14px",
  border: "1px solid #E6EBF3",
  borderRadius: "999px",
  fontSize: "0.85rem",
  fontWeight: 400,
  color: "#1B2437",
  background: "#EFF4FD",
  textDecoration: "none",
  textAlign: "left",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" style={{ background: "#F7F9FC", padding: "92px 0 84px" }}>
        <div className="container center">
          <h1>eCommerce Case Studies With the Working Shown</h1>
          <p className="lead center">
            Three engagements, three different problems, one operating system. Every number
            below comes with the methodology that produced it — because a metric without a
            method is just a claim.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
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
          <Pill icon="fa-solid fa-chart-simple" center>Results at a Glance</Pill>
          <h2 className="center">Aggregated across managed accounts</h2>
          <p className="lead center">
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

      {/* 3. The work — six case-study cards, filed-under chips link out */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-diagram-project" center>The work</Pill>
          <h2 className="center">Six engagements, with the working shown</h2>
          <p className="lead center">
            Every case study is classified on four axes — service, platform, industry and
            market — so you can find the one that matches your situation rather than the one
            we happened to feature. Each chip links to the page that owns that term.
          </p>
          <div className="card-grid" style={{ marginTop: "24px" }}>
            {cases.map((c) => (
              <article className="case-card" key={c.name}>
                <Image src={c.img} alt={c.imgAlt} width={1200} height={800} />
                <div className="case-body">
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
                    <i className="fa-solid fa-arrow-right" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <p
            style={{
              color: "var(--muted)",
              fontSize: "0.95rem",
              marginTop: "24px",
              textAlign: "center",
            }}
          >
            Client names are the ones we publish under. Figures are measured against the same
            period a year earlier, and count kept orders net of returns.
          </p>
        </div>
      </section>

      {/* 4. Our Methodology */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-gear" center>Our Methodology</Pill>
          <h2 className="center">Why these engagements worked</h2>
          <p className="lead center">
            The same four-phase system runs on every account. It is deliberately boring —
            consistency is what makes results repeatable rather than lucky.
          </p>
          <div className="card-grid card-grid-4">
            {methodology.map((s) => (
              <article className="card" key={s.num}>
                <p className="step-num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <div
            style={{
              background: "var(--bg-soft)",
              borderLeft: "4px solid var(--blue)",
              borderRadius: "10px 14px 14px 10px",
              padding: "22px 26px",
              marginTop: "40px",
            }}
          >
            <p style={{ color: "var(--muted)", margin: 0 }}>
              <strong style={{ color: "var(--navy)" }}>A note on attribution.</strong> Every
              figure on this page is measured against a pre-engagement baseline over an
              equivalent trailing period, using the client’s own analytics and platform
              reporting rather than our platform-attributed numbers. Where seasonality or a
              product launch contributed materially, we say so in the full case study document.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Results by Service */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Results by Service</Pill>
          <h2 className="center">What each discipline typically delivers</h2>
          <div className="card-grid">
            {disciplines.map((d) => (
              <article className="card" key={d.title}>
                <span
                  className="card-icon"
                  style={{ background: d.tint.bg, color: d.tint.color, border: "none" }}
                >
                  <i className={d.icon} aria-hidden="true" />
                </span>
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
          <Pill icon="fa-solid fa-comment-dots" center>Client Testimonials</Pill>
          <h2 className="center">In their words</h2>
          <div className="card-grid">
            {testimonials.map((t) => (
              <div className="quote-card" key={t.name} aria-label="Rated 5 out of 5">
                <div
                  style={{ display: "flex", gap: "4px", marginBottom: "1rem" }}
                  aria-hidden="true"
                >
                  {[0, 1, 2, 3, 4].map((i) => (
                    <i
                      key={i}
                      className="fa-solid fa-star"
                      style={{ color: "#FBBF24", fontSize: "1rem" }}
                    />
                  ))}
                </div>
                <blockquote>{t.quote}</blockquote>
                <hr />
                <div className="quote-person">
                  <Image
                    src={t.img}
                    alt={`${t.name}, ${t.role}`}
                    width={112}
                    height={112}
                    style={{ borderColor: t.ring }}
                  />
                  <div>
                    <h3>{t.name}</h3>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industries */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-briefcase" center>Industries &amp; Business Types We Help</Pill>
          <h2 className="center">Where our experience is deepest</h2>
          <p className="lead center">
            Nine categories cover most of our book. The operating system underneath is the
            same — the constraints are what change.
          </p>
          <div className="card-grid">
            {industries.map((ind) => (
              <div className="card industry-card" key={ind.name}>
                <span
                  className="industry-icon"
                  style={{ background: ind.tint.bg, color: ind.tint.color }}
                >
                  <i className={ind.icon} aria-hidden="true" />
                </span>
                <div>
                  <h3>{ind.name}</h3>
                  <p>{ind.note}</p>
                </div>
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
          <Pill icon="fa-solid fa-circle-question" center>Case Study FAQs</Pill>
          <h2>Fair questions about these numbers</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="section final-cta final-cta-blue">
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
