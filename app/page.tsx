import Image from "next/image";
import { Pill } from "@/components/Pill";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../components/FaqAccordion";

const faqs: Faq[] = [
  {
    q: "What does an eCommerce management agency actually do?",
    a: "We take ownership of the operational and marketing work that keeps an online store growing: product listing management, catalog and inventory hygiene, order and returns workflows, marketplace account health, and the full marketing stack — eCommerce SEO, paid search and shopping, marketplace advertising, email and SMS retention, and conversion rate optimization.",
  },
  {
    q: "Which eCommerce platforms and marketplaces do you support?",
    a: "Shopify and Shopify Plus, WooCommerce, BigCommerce and Magento on the storefront side, plus Amazon Seller and Vendor Central, Walmart Marketplace, eBay and Etsy. Most clients run a storefront and at least one marketplace, and we manage both under one strategy.",
  },
  {
    q: "How much does it cost to work with Dazzle Commerce?",
    a: "Most engagements sit between $3,500 and $18,000 per month depending on channel count, catalog size and ad spend under management. We scope after the free audit so the number reflects real work. There is no setup fee, and agreements are month-to-month after an initial 90-day period.",
  },
  {
    q: "How quickly will we see results?",
    a: "Technical and listing fixes usually move numbers within 30 days. Paid media restructures typically show a clear trend by week six. eCommerce SEO is the long game — expect meaningful organic movement between months four and seven, compounding from there.",
  },
  {
    q: "Do you work with small businesses and startups?",
    a: "Yes. We have a lighter-touch engagement for stores under roughly $50K per month in revenue that focuses on one or two channels done properly rather than everything done thinly. If we do not think we can generate a return at your stage, we will say so on the call.",
  },
  {
    q: "What happens on the free strategy call?",
    a: "Thirty minutes, no pitch deck. We review your store, ad accounts and marketplace health live, tell you the three things we would fix first and roughly what they are worth. You keep the notes whether or not you hire us.",
  },
];

const problems = [
  {
    title: "Traffic that never converts",
    body: "You are paying for clicks that bounce. Slow product pages, weak merchandising and a leaky checkout quietly cap your conversion rate below what your category supports.",
  },
  {
    title: "Ad spend outrunning profit",
    body: "ROAS looks fine on the surface, but blended margins are shrinking. Without proper attribution and contribution-margin tracking you scale the wrong campaigns.",
  },
  {
    title: "Marketplace chaos",
    body: "Amazon, Walmart and eBay each demand different listings, feeds and ad structures. Managing them in spreadsheets costs you the Buy Box and burns your team out.",
  },
  {
    title: "Invisible in organic search",
    body: "Thin collection pages, duplicate product copy and crawl-budget waste keep you off page one for the commercial keywords that actually drive revenue.",
  },
  {
    title: "One-and-done customers",
    body: "You acquire well but retain poorly. No lifecycle flows, no post-purchase journey and no reason for a second order means CAC keeps climbing.",
  },
  {
    title: "Agencies that vanish after onboarding",
    body: "You were sold by a senior partner and handed to a junior. Reporting is opaque, strategy is recycled and nobody owns the number that matters.",
  },
];

const services = [
  {
    title: "eCommerce Management",
    href: "/services/#management",
    body: "Day-to-day store and marketplace operations: product listing management, catalog and inventory hygiene, order and returns workflows, and dedicated account management.",
  },
  {
    title: "eCommerce Marketing",
    href: "/services/#marketing",
    body: "eCommerce SEO, Google Shopping, Amazon PPC, Meta and TikTok paid social, email and SMS retention, plus conversion rate optimization that compounds every channel.",
  },
  {
    title: "Development & Technology",
    href: "/services/#development",
    body: "Shopify and WooCommerce development, headless builds, replatforming and migrations, custom apps, integrations and Core Web Vitals performance work.",
  },
  {
    title: "Creative & Content",
    href: "/services/#creative",
    body: "Product photography and video, A+ / Enhanced Brand Content, landing pages, lifecycle creative and conversion copywriting built for testing at volume.",
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

const processSteps = [
  {
    num: "01",
    title: "Audit & Discovery",
    body: "We pull 12 months of analytics, ad accounts, marketplace health and technical SEO into a single scorecard, then rank every opportunity by revenue impact.",
  },
  {
    num: "02",
    title: "Strategy & Roadmap",
    body: "You get a 90-day growth roadmap with forecasted revenue, channel budgets, owners and milestones — agreed before a dollar of spend moves.",
  },
  {
    num: "03",
    title: "Build & Launch",
    body: "Listings, campaigns, flows, landing pages and tracking go live in structured sprints, with QA and measurement baked in from day one.",
  },
  {
    num: "04",
    title: "Optimize & Scale",
    body: "Weekly testing cadence, monthly business reviews and quarterly replanning. We double down on what compounds and cut what does not.",
  },
];

const cases = [
  {
    category: "Health & Supplements",
    name: "Nutriblend",
    href: "/nutriblend-supplements-retention-uk/",
    img: "/images/case-nutriblend.webp",
    imgAlt: "Dazzle Commerce SEO team working through category page structure",
    body: "Rebuilt the Shopify subscription funnel, restructured Google Shopping into a margin-tiered campaign set and launched a nine-email post-purchase flow.",
    metrics: [
      { value: "+214%", label: "Revenue YoY" },
      { value: "7.9x", label: "Blended ROAS" },
      { value: "-31%", label: "CAC" },
    ],
  },
  {
    category: "Home Electronics",
    name: "VAC Vacuums",
    href: "/vac-vacuums-amazon-marketplace-europe/",
    img: "/images/case-vac-vacuums.webp",
    imgAlt: "Dazzle Commerce marketplace team reviewing Amazon account performance",
    body: "Fixed a 4,200-SKU Amazon catalog, recovered the Buy Box on 18 hero ASINs and moved PPC from manual bids to a portfolio bidding structure, boosting monthly sales valume.",
    metrics: [
      { value: "+186%", label: "Amazon sales" },
      { value: "+64%", label: "Buy Box rate" },
      { value: "-42%", label: "TACoS" },
    ],
  },
  {
    category: "Home & Kitchen",
    name: "Kitchenary",
    href: "/kitchenary-home-kitchen-shopify-usa/",
    img: "/images/case-kitchenary.webp",
    imgAlt: "Dazzle Commerce paid media specialists reviewing campaign performance",
    body: "Replatformed from a slow legacy build to Shopify 2.0, cut LCP from 4.8s to 1.6s and rewrote 340 collection pages around commercial-intent keywords.",
    metrics: [
      { value: "+97%", label: "Organic traffic" },
      { value: "+52%", label: "CRO Opt" },
      { value: "1.6s", label: "Mobile LCP" },
    ],
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
      "“Our Amazon catalog was a mess after three years of quick fixes. Dazzle Commerce rebuilt it properly, and we recovered the Buy Box on our top sellers within a quarter.”",
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

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <Pill icon="fa-solid fa-wand-magic-sparkles">eCommerce Management &amp; Marketing Agency</Pill>
              <h1>
                Scale Your eCommerce Business With Proven Growth Strategies
              </h1>
              <p className="lead">
                From marketplace management to performance marketing, we are the eCommerce agency
                that runs all of it under one strategy — helping brands drive more traffic,
                increase sales and maximize profitability on Shopify, Amazon, WooCommerce and
                beyond.
              </p>
              <div className="btn-row">
                <Link className="btn" href="/book-a-strategy-call/">
                  Get Free Strategy Call
                </Link>
                <Link className="btn btn-outline" href="/services/">
                  View Our Services
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/home-hero.webp"
                alt="Dazzle Commerce eCommerce management and marketing team reviewing store performance"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
          <div className="trust-badges">
            <div className="trust-badge">
              <h3>100% Transparency</h3>
              <p>Clear reports and open communication</p>
            </div>
            <div className="trust-badge">
              <h3>No Long-Term Contracts</h3>
              <p>Flexibility you deserve. Results that matter.</p>
            </div>
            <div className="trust-badge">
              <h3>Free Growth Audit</h3>
              <p>In-depth analysis and an actionable plan</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trusted by */}
      <section className="trusted">
        <div className="container">
          <h2>Trusted by 100+ eCommerce brands worldwide</h2>
          <div className="brand-row">
            <span className="brand-word">nutriblend</span>
            <Link className="brand-word" href="/vac-vacuums-amazon-marketplace-europe/">
              VAC Vacuums
            </Link>
            <span className="brand-word">kitchenary</span>
            <span className="brand-word">petzz</span>
            <span className="brand-word">LUXURY Comforts</span>
            <span className="brand-word">FITNESS Gear</span>
          </div>
        </div>
      </section>

      {/* 3. Problems We Solve */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-bullseye" center>Problems We Solve</Pill>
          <h2>The six things quietly capping your revenue</h2>
          <p className="lead">
            Every store we audit has at least three of these. Most owners can feel them but
            cannot name them. Here is what we find — and fix — most often.
          </p>
          <div className="card-grid">
            {problems.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Services */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Our Services</Pill>
          <h2>One eCommerce agency for every part of growth</h2>
          <p className="lead">
            Most brands stitch together a marketplace VA, an SEO freelancer and a paid media
            agency who never speak to each other. Most eCommerce agencies deepen the problem
            rather than solving it, covering one lane properly and subcontracting the rest. We
            run all four disciplines under one strategy and one number, which is what an
            eCommerce digital agency ought to mean.
          </p>
          <div className="card-grid card-grid-2">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>
                  <Link href={s.href}>{s.title}</Link>
                </h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <div className="mt">
            <Link className="btn btn-outline" href="/services/">
              See all eCommerce services
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Platforms We Work With */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-globe" center>Platforms We Work With</Pill>
          <h2>Certified where it counts</h2>
          <p className="lead">
            We are platform-agnostic by principle and deeply specialized in practice. Your
            channel mix should follow your margins, not an agency’s comfort zone.
          </p>
          <div className="card-grid card-grid-4">
            {platforms.map((p) => (
              <div className="card platform-card" key={p.name}>
                <h3 className="platform-name">{p.name}</h3>
                <p>{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us */}
      <section className="section section-soft">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-award">Why Choose Us</Pill>
              <h2>An eCommerce growth partner, not another vendor</h2>
              <p>
                We built Dazzle Commerce after watching too many good brands get handed to
                junior account managers three weeks after signing. Senior ownership is not an
                upgrade here — it is the model. We work primarily as a B2C eCommerce agency,
                for consumer brands selling direct and on marketplaces, with a separate{" "}
                <Link href="/b2b-wholesale-ecommerce-agency/">B2B and wholesale practice</Link>{" "}
                for trade buyers.
              </p>
              <ul className="check-list">
                <li>A senior strategist owns your account from pitch to performance</li>
                <li>Contribution margin and blended CAC reported alongside ROAS, every week</li>
                <li>Certified partners across Shopify, Google, Meta and Amazon Ads</li>
                <li>Month-to-month agreements — we earn the renewal with results</li>
                <li>
                  Full channel coverage in one team: search, paid, marketplace, email, CRO and
                  dev
                </li>
                <li>Live dashboards you can open any time, plus a human who answers within a day</li>
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/about-us/">
                  Meet the team
                </Link>
                <Link className="btn btn-outline" href="/case-studies/">
                  See our results
                </Link>
              </div>
            </div>
            <div className="split-img">
              <Image
                src="/images/home-choose.webp"
                alt="eCommerce specialists planning a growth programme for an online store"
                width={1920}
                height={1280}
              />
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>+142%</strong>
              <span>Revenue growth</span>
            </div>
            <div className="stat">
              <strong>6.7x</strong>
              <span>Blended ROAS</span>
            </div>
            <div className="stat">
              <strong>+38%</strong>
              <span>Conversion lift</span>
            </div>
            <div className="stat">
              <strong>$48M+</strong>
              <span>GMV managed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Our Process */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-gear" center>Our Process</Pill>
          <h2>How a Dazzle Commerce engagement runs</h2>
          <p className="lead">
            Four phases, repeated quarterly. Transparent enough that you always know what is
            happening this week and why it matters to the forecast.
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

      {/* 8. Results & Success Metrics */}
      <section className="section section-blue">
        <div className="container">
          <Pill icon="fa-solid fa-chart-column" center>Results &amp; Success Metrics</Pill>
          <h2>Numbers our clients took to their board</h2>
          <p style={{ color: "#c6d2e4", maxWidth: "760px" }}>
            Aggregated across managed accounts. Individual results vary by category, margin
            structure and starting position — we will give you an honest range on the call.
          </p>
          <div className="stat-row">
            <div className="stat stat-dark">
              <strong>+142%</strong>
              <span>Average revenue growth</span>
              <p style={{ color: "#c6d2e4", fontSize: "0.9rem", margin: "0.5rem 0 0" }}>
                Across managed accounts in the first 12 months
              </p>
            </div>
            <div className="stat stat-dark">
              <strong>6.7x</strong>
              <span>Blended ROAS</span>
              <p style={{ color: "#c6d2e4", fontSize: "0.9rem", margin: "0.5rem 0 0" }}>
                Median across paid search, shopping and social
              </p>
            </div>
            <div className="stat stat-dark">
              <strong>+38%</strong>
              <span>Conversion rate lift</span>
              <p style={{ color: "#c6d2e4", fontSize: "0.9rem", margin: "0.5rem 0 0" }}>
                After the first two CRO test cycles
              </p>
            </div>
            <div className="stat stat-dark">
              <strong>$48M+</strong>
              <span>Client revenue managed</span>
              <p style={{ color: "#c6d2e4", fontSize: "0.9rem", margin: "0.5rem 0 0" }}>
                Annualized GMV across Shopify and marketplaces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Case Studies */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-briefcase" center>Case Studies</Pill>
          <h2>Success stories with the receipts</h2>
          <p className="lead">
            Three engagements, three very different problems. Same operating system underneath.
          </p>
          <div className="card-grid">
            {cases.map((c) => (
              <article className="case-card" key={c.name}>
                <Image src={c.img} alt={c.imgAlt} width={1200} height={800} />
                <div className="case-body">
                  <p className="case-cat">{c.category}</p>
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
                  <Link className="read-more" href="/case-studies/">
                    Read the full case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="center mt">
            <Link className="btn btn-outline" href="/case-studies/">
              View all case studies
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Testimonials */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-comment-dots" center>Testimonials</Pill>
          <h2>What it is like to work with us</h2>
          <p className="lead">
            We asked clients to be specific rather than generous. These are the answers we got.
          </p>
          <div className="card-grid">
            {testimonials.map((t) => (
              <div className="quote-card" key={t.name}>
                <p aria-label="Rated 5 out of 5" style={{ color: "var(--blue)", letterSpacing: "0.1em" }}>
                  ★★★★★
                </p>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>Rated 5 out of 5</p>
                <blockquote>{t.quote}</blockquote>
                <h3>{t.name}</h3>
                <p>{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Frequently Asked Questions */}
      <section className="section">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>Frequently Asked Questions</Pill>
          <h2>Questions we get on almost every call</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            Still unsure? The strategy call is free and genuinely useful even if you never hire
            us.
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Ready to scale your eCommerce business?</h2>
          <p className="lead">
            Book a free 30-minute strategy call. We will audit your store, benchmark your
            channels and show you exactly where the next 20–40% of revenue is hiding — no
            obligation, no pitch deck.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/book-a-strategy-call/">
              Get Free Strategy Call
            </Link>
            <Link
              className="btn"
              href="/case-studies/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Browse Case Studies
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
