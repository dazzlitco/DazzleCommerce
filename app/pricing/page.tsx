import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "eCommerce Management Pricing & Packages | Dazzle Commerce",
  description:
    "Transparent eCommerce management pricing. Three packages from $3,500/month covering store management, SEO, PPC, CRO and reporting. Free scoping audit.",
  alternates: { canonical: "https://dazzlecommerce.com/pricing/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/pricing/",
    siteName: "Dazzle Commerce",
    title: "eCommerce Management Pricing & Packages | Dazzle Commerce",
    description:
      "Transparent eCommerce management pricing. Three packages from $3,500/month covering store management, SEO, PPC, CRO and reporting. Free scoping audit.",
    images: [
      {
        url: "/images/pricing-hero.webp",
        width: 1920,
        height: 1280,
        alt: "Dazzle Commerce team reviewing pricing and revenue charts for an eCommerce brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Management Pricing & Packages | Dazzle Commerce",
    description:
      "Transparent eCommerce management pricing. Three packages from $3,500/month covering store management, SEO, PPC, CRO and reporting. Free scoping audit.",
  },
};

const faqs: Faq[] = [
  {
    q: "How much does eCommerce management cost?",
    a: "Most engagements sit between $3,500 and $18,000 per month. Where you land depends on channel count, catalog size and ad spend under management rather than on a headcount formula. Our Starter package begins at $3,500 a month for a single platform, Growth at $7,500 for multi-channel work, and Scale is scoped individually and typically starts around $15,000. The free audit produces the actual number before you commit to anything.",
  },
  {
    q: "What does a full service eCommerce agency actually include?",
    a: "In our case: store and marketplace management, eCommerce SEO, paid media, conversion optimisation, email and SMS retention, development and creative — delivered by one team against one strategy. The distinction that matters is not the list of eCommerce services on offer but whether one accountable person owns the outcome across all of them. Ours does, and they are named in your contract.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "There is an initial 90-day term, because nothing meaningful can be judged in less than one quarter. After that every package is month-to-month. We do not use auto-renewing annual lock-ins, and everything we build for you — tracking, templates, documentation, creative — remains yours if you leave.",
  },
  {
    q: "Can I start with one service instead of a full package?",
    a: "Yes, and roughly half of new clients do. A single discipline — usually eCommerce SEO, Amazon management or paid media — is a sensible way to start if cash flow is tight or you want to test how we work. Our standalone eCommerce SEO packages are scoped to the size of the catalogue rather than the size of the company, so a 200-SKU store is not paying for enterprise process it will never use. The audit will tell you which single service has the highest expected return for your situation, even when that is not the largest engagement we could sell you.",
  },
  {
    q: "Is advertising spend included in the monthly fee?",
    a: "No. Management fees and media spend are always separate and always billed separately. Your ad budget goes directly to the platforms on your own payment methods, so you keep ownership of the accounts and full visibility of every dollar. We will never mark up media or take a hidden percentage of spend.",
  },
  {
    q: "Are these packages suitable for a small business or a startup?",
    a: "Starter is built for exactly that — an eCommerce agency engagement for small business and early-stage brands, typically $25K to $100K a month in revenue, where the priority is fixing the operational floor before scaling spend. It is also the tier where affordable eCommerce SEO is realistic: a narrow scope on a small catalogue costs a fraction of a full-channel retainer, and we would rather do that one thing properly than sell you a tier you cannot yet use. Below roughly $25K a month we will usually tell you that outsourcing eCommerce management is premature and point you at what to do in-house first.",
  },
  {
    q: "What happens if we need to change package mid-engagement?",
    a: "You move up or down at the start of any month with no penalty and no re-onboarding. Growth is the tier most brands settle on, but moving from Growth to Starter after a strong quarter is a normal conversation rather than an awkward one. Add-ons can be attached to or removed from any tier independently.",
  },
  {
    q: "Why is the Scale tier priced as custom rather than published?",
    a: "Because publishing a number for that tier would be dishonest. At $500K a month and above the variables — market count, platform mix, engineering load, creative volume — swing the figure so widely that any single price would be wrong for most brands who read it. We publish the range it typically falls into, and the audit produces the specific number.",
  },
];

const tiers = [
  {
    name: "Starter",
    badge: null as string | null,
    tagline: "For single-storefront brands doing $25K–$100K a month.",
    description:
      "The operational floor fixed properly, by people who have done it before — so growth spend is not pouring into a leaking store.",
    price: "From $3,500",
    term: "per month · 3-month initial term",
    listHeading: "WHAT YOU GET",
    features: [
      "Store or marketplace management on one platform",
      "Product listing and catalog optimisation",
      "eCommerce SEO foundations and technical fixes",
      "One paid channel managed end to end",
      "Monthly report with contribution margin, not just ROAS",
      "A named senior strategist and a monthly call",
    ],
    cta: "Start with a free audit",
    ctaHref: "/book-a-strategy-call/",
    featured: false,
  },
  {
    name: "Growth",
    badge: "BEST FOR SCALING BRANDS",
    tagline: "For multi-channel brands doing $100K–$500K a month.",
    description:
      "The full growth stack under one accountable team, replanned every quarter instead of set once and forgotten.",
    price: "From $7,500",
    term: "per month · month-to-month after 90 days",
    listHeading: "EVERYTHING IN STARTER, PLUS",
    features: [
      "Storefront and marketplace managed together, two platforms",
      "Full eCommerce SEO programme including content",
      "Google, Meta and marketplace ads on margin-tiered structures",
      "Conversion optimisation with a documented test roadmap",
      "Email and SMS lifecycle programme",
      "Fortnightly calls and a rolling 90-day roadmap",
      "Shared Slack channel with the whole pod",
    ],
    cta: "Book your free strategy call",
    ctaHref: "/book-a-strategy-call/",
    featured: true,
  },
  {
    name: "Scale",
    badge: null as string | null,
    tagline: "For $500K a month and up, or multi-market operations.",
    description:
      "A dedicated pod with engineering capacity and reporting your board will actually accept.",
    price: "Custom",
    term: "typically $15,000+ per month",
    listHeading: "EVERYTHING IN GROWTH, PLUS",
    features: [
      "All platforms and all markets under one strategy",
      "A dedicated pod with named specialists per discipline",
      "In-house development and replatforming capacity",
      "International expansion and multi-currency architecture",
      "Creative and content production included",
      "Weekly calls plus a monthly business review",
      "Custom dashboards and board-ready reporting",
    ],
    cta: "Request a custom scope",
    ctaHref: "/request-a-proposal/",
    featured: false,
  },
];

const comparisonRows: { label: string; values: [string, string, string] }[] = [
  {
    label: "Best for",
    values: ["$25K–$100K / month", "$100K–$500K / month", "$500K+ / month or multi-market"],
  },
  {
    label: "Store Management",
    values: ["One platform", "Storefront + marketplace, two platforms", "All platforms and all markets"],
  },
  {
    label: "eCommerce SEO",
    values: [
      "Foundations and technical fixes",
      "Full programme including content",
      "Full programme plus international and hreflang",
    ],
  },
  {
    label: "PPC & Paid Media",
    values: [
      "One channel managed",
      "Google, Meta and marketplace ads",
      "All channels plus continuous creative testing",
    ],
  },
  {
    label: "CRO",
    values: [
      "Quarterly conversion review",
      "Documented test roadmap",
      "Continuous programme with dev resource",
    ],
  },
  {
    label: "Reporting",
    values: [
      "Monthly, with contribution margin",
      "Fortnightly, with channel-level margin",
      "Weekly plus a board-ready monthly pack",
    ],
  },
  {
    label: "Strategy",
    values: [
      "Monthly strategy call",
      "Rolling 90-day roadmap, replanned quarterly",
      "Quarterly business review with the leadership team",
    ],
  },
  {
    label: "Support",
    values: [
      "Email, one business day",
      "Email plus a shared Slack channel",
      "Dedicated pod, Slack, named specialists",
    ],
  },
];

const addOns = [
  {
    title: "Additional PPC Management",
    body: "Extra paid channels beyond your package — TikTok, Pinterest, Microsoft Ads or a second marketplace ad account, each with its own margin target.",
  },
  {
    title: "Marketplace Management",
    body: "Adding Walmart, eBay, Etsy or Noon to an existing engagement, including listing build, fee modelling and channel-level pricing.",
  },
  {
    title: "Shopify Development",
    body: "Theme work, Online Store 2.0 sections, app integration, headless builds and full replatforms with tested redirect maps.",
  },
  {
    title: "Amazon Management",
    body: "Seller or Vendor Central management: catalog rebuilds, Buy Box defence, A+ Content, Brand Store and account-health remediation.",
  },
  {
    title: "Product Photography",
    body: "Studio and lifestyle shoots built for conversion, sized and cropped per channel including Amazon main-image compliance.",
  },
  {
    title: "Creative Production",
    body: "Static and video ad creative produced on a testing cadence, plus UGC and creator briefs written for your category.",
  },
  {
    title: "Email Automation",
    body: "Klaviyo or Braze build-out: welcome, abandonment, post-purchase, replenishment and winback flows with revenue attribution.",
  },
  {
    title: "Conversion Rate Optimisation",
    body: "A dedicated CRO programme — research, prioritised hypotheses, build and analysis, with every test documented win or lose.",
  },
  {
    title: "Additional Markets",
    body: "A new country added to an existing engagement: viability model first, then hreflang, currency, localisation and local channel setup.",
  },
];

const included = [
  {
    title: "Dedicated Account Setup",
    body: "A structured onboarding: access audit, tracking verification, baseline capture and a documented account map before any work starts.",
  },
  {
    title: "Performance Reporting",
    body: "Reporting that leads with contribution margin next to ROAS, so you can see what a channel earns rather than only what it spends.",
  },
  {
    title: "Strategy & Recommendations",
    body: "A named senior strategist who owns the account, plus a standing recommendation each period about what to stop doing.",
  },
  {
    title: "Regular Optimization",
    body: "Two-week working cycles. Nothing ships without tracking attached, and every test is written up whether it wins or loses.",
  },
  {
    title: "Transparent Communication",
    body: "Scheduled calls in your business hours, notes circulated after every one, and problems raised by us before you notice them.",
  },
  {
    title: "Performance Tracking",
    body: "Analytics, server-side and platform tracking validated at onboarding and re-checked quarterly, because bad data makes every decision worse.",
  },
];

const pricingSteps = [
  {
    num: "01",
    title: "Business size",
    body: "Revenue band, order volume and catalog size. A 200-SKU brand and a 4,200-SKU seller need different operational capacity, and that is the biggest single cost driver.",
  },
  {
    num: "02",
    title: "Platforms & channels",
    body: "How many storefronts and marketplaces, and how many paid channels. Each additional channel adds management, reporting and creative load.",
  },
  {
    num: "03",
    title: "Scope of work",
    body: "Which disciplines you actually need. Most brands do not need all of them on day one, and we would rather sequence than sell everything at once.",
  },
  {
    num: "04",
    title: "Growth goals",
    body: "What you are trying to reach and by when. An aggressive target needs more testing velocity, which needs more hours.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Pricing &amp; Packages</p>
              <h1>eCommerce Management Pricing That Matches Your Stage</h1>
              <p className="lead">
                Three packages built around what actually drives cost — channel count, catalog
                size and ad spend under management. Most engagements sit between $3,500 and
                $18,000 per month, and we scope after a free audit so the number reflects real
                work rather than a guess.
              </p>
              <div className="btn-row">
                <Link className="btn" href="/book-a-strategy-call/">
                  Get Your Free Scoping Call
                </Link>
                <Link className="btn btn-outline" href="#compare">
                  Compare Packages
                </Link>
              </div>
              <p style={{ marginTop: "1.25rem", color: "var(--muted)" }}>
                No setup fees. No long lock-in. Month-to-month after the first 90 days.
              </p>
            </div>
            <div className="hero-img">
              <Image
                src="/images/pricing-hero.webp"
                alt="Dazzle Commerce team reviewing pricing and revenue charts for an eCommerce brand"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Choose Your Growth Package */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Choose Your Growth Package</p>
          <h2>Three packages, priced on what actually drives cost</h2>
          <p className="lead">
            Pick the tier that matches your stage. Every package can be extended with add-ons,
            and you can move between tiers at the start of any month.
          </p>
          <div className="card-grid">
            {tiers.map((t) => (
              <article
                className="card"
                key={t.name}
                style={
                  t.featured
                    ? { borderColor: "var(--blue)", borderWidth: "2px", boxShadow: "var(--shadow)" }
                    : undefined
                }
              >
                {t.badge ? (
                  <p
                    style={{
                      display: "inline-block",
                      background: "var(--blue)",
                      color: "#fff",
                      fontSize: "0.78rem",
                      fontWeight: 800,
                      letterSpacing: "0.06em",
                      padding: "6px 12px",
                      borderRadius: "999px",
                      marginBottom: "1rem",
                    }}
                  >
                    {t.badge}
                  </p>
                ) : null}
                <h3 style={{ fontSize: "1.5rem" }}>{t.name}</h3>
                <p style={{ fontWeight: 700, color: "var(--navy)" }}>{t.tagline}</p>
                <p>{t.description}</p>
                <p style={{ margin: "1.25rem 0 0" }}>
                  <strong style={{ fontSize: "2rem", color: "var(--navy)" }}>{t.price}</strong>
                </p>
                <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>{t.term}</p>
                <p
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    color: "var(--blue)",
                    marginTop: "1.25rem",
                  }}
                >
                  {t.listHeading}
                </p>
                <ul className="check-list">
                  {t.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <div style={{ marginTop: "1.5rem" }}>
                  <Link className={t.featured ? "btn" : "btn btn-outline"} href={t.ctaHref}>
                    {t.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Package comparison table */}
      <section className="section section-soft" id="compare">
        <div className="container">
          <p className="eyebrow">Compare Packages</p>
          <h2>Starter, Growth and Scale side by side</h2>
          <p className="lead">
            The same three packages, compared feature by feature — so you can see exactly what
            changes as you move up a tier.
          </p>
          <div style={{ overflowX: "auto", marginTop: "32px" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: "#fff",
                border: "1px solid var(--line)",
                borderRadius: "16px",
                overflow: "hidden",
                minWidth: "720px",
              }}
            >
              <thead>
                <tr style={{ background: "var(--navy)" }}>
                  <th
                    style={{
                      textAlign: "left",
                      padding: "16px 20px",
                      color: "#fff",
                      fontSize: "1rem",
                    }}
                  >
                    &nbsp;
                  </th>
                  {tiers.map((t) => (
                    <th
                      key={t.name}
                      style={{
                        textAlign: "left",
                        padding: "16px 20px",
                        color: "#fff",
                        fontSize: "1rem",
                      }}
                    >
                      {t.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr
                    key={row.label}
                    style={{ background: i % 2 === 0 ? "#fff" : "var(--bg-softer)" }}
                  >
                    <th
                      style={{
                        textAlign: "left",
                        padding: "14px 20px",
                        color: "var(--navy)",
                        borderTop: "1px solid var(--line)",
                      }}
                    >
                      {row.label}
                    </th>
                    {row.values.map((v) => (
                      <td
                        key={v}
                        style={{
                          padding: "14px 20px",
                          color: "var(--muted)",
                          borderTop: "1px solid var(--line)",
                          verticalAlign: "top",
                        }}
                      >
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Services & Add-Ons */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Services &amp; Add-Ons</p>
          <h2>Need something beyond your package?</h2>
          <p className="lead">
            Every package can be extended. Add-ons are scoped and priced individually so you
            are never paying for a tier you do not need in order to unlock one thing you do.
          </p>
          <div className="card-grid">
            {addOns.map((a) => (
              <article className="card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Included as Standard */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Included as Standard</p>
          <h2>What&rsquo;s included in every package</h2>
          <p className="lead">
            Whichever tier you choose, these are not upsells. They are the baseline we
            consider necessary to do the job honestly.
          </p>
          <div className="card-grid card-grid-2">
            {included.map((item) => (
              <article className="card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. How Our Pricing Works */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">How Our Pricing Works</p>
              <h2>No two eCommerce brands cost the same to run</h2>
              <p>
                Business size + platforms and channels + scope of work + growth goals → your
                investment. Four inputs, one number, and we show you the arithmetic rather than
                asking you to trust a bracket.
              </p>
              {pricingSteps.map((s) => (
                <div key={s.num} style={{ marginTop: "1.25rem" }}>
                  <p className="card-num" style={{ fontSize: "1.4rem" }}>
                    {s.num}
                  </p>
                  <h3>{s.title}</h3>
                  <p style={{ color: "var(--muted)" }}>{s.body}</p>
                </div>
              ))}
            </div>
            <div className="split-img">
              <Image
                src="/images/pricing-how-it-works.webp"
                alt="eCommerce specialists working through a store pricing and scoping worksheet"
                width={1920}
                height={1280}
              />
            </div>
          </div>
          <div className="card" style={{ marginTop: "40px", background: "var(--bg-soft)" }}>
            <h3>Your customised investment</h3>
            <p>
              One monthly figure, scoped after the free audit, with the working shown. You see
              which disciplines are in, how many hours sit behind each, and what we expect
              them to return — before you commit to anything.
            </p>
            <div className="btn-row">
              <Link className="btn" href="/book-a-strategy-call/">
                Get Your Free Scoping Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Pricing FAQs */}
      <section className="section section-soft">
        <div className="container center">
          <p className="eyebrow">Pricing FAQs</p>
          <h2>Straight answers before you enquire</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <div
            className="split"
            style={{ textAlign: "left", alignItems: "center", marginBottom: "8px" }}
          >
            <div>
              <h2>Want the actual number for your business?</h2>
              <p className="lead" style={{ color: "#c6d2e4" }}>
                The free audit takes three to five days, produces a scoped monthly figure with
                the reasoning attached, and is yours to keep whether or not you hire us.
              </p>
              <div className="btn-row">
                <Link className="btn btn-light" href="/book-a-strategy-call/">
                  Book Your Free Scoping Call
                </Link>
                <Link
                  className="btn"
                  href="/services/"
                  style={{ background: "transparent", borderColor: "#fff" }}
                >
                  See Our Services
                </Link>
              </div>
            </div>
            <div className="split-img">
              <Image
                src="/images/pricing-audit.webp"
                alt="eCommerce strategist presenting a free audit and scoped monthly figure on a video call"
                width={1920}
                height={1280}
              />
            </div>
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
