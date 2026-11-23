import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "eCommerce CRO Agency | Conversion Optimization",
  description:
    "Research-led eCommerce CRO across product pages, category pages, cart and checkout, with prioritised A/B testing and full implementation.",
  alternates: { canonical: "https://dazzlecommerce.com/conversion-rate-optimization/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/conversion-rate-optimization/",
    siteName: "Dazzle Commerce",
    title: "eCommerce CRO Agency | Conversion Optimization",
    description:
      "Research-led eCommerce CRO across product pages, category pages, cart and checkout, with prioritised A/B testing and full implementation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce CRO Agency | Conversion Optimization",
    description:
      "Research-led eCommerce CRO across product pages, category pages, cart and checkout, with prioritised A/B testing and full implementation.",
  },
};

const faqs: Faq[] = [
  {
    q: "How much traffic do we need for CRO to work?",
    a: "For statistically valid A/B testing, roughly 10,000 sessions and 200–300 conversions per month on the page being tested. Below that we still do CRO — research, usability review and evidence-led implementation — we just do not pretend a test reached significance when it did not. Anyone running split tests on 400 sessions a month is selling you noise.",
  },
  {
    q: "What conversion rate should we be aiming for?",
    a: (
      <>
        It depends far more on category and price point than on any benchmark. Consumables
        and low-AOV goods often run 3–5%; considered purchases like furniture or high-end
        electronics can be healthy at 0.8%. Our{" "}
        <Link href="/resources/statistics/ecommerce-conversion-rate/">
          conversion rate benchmarks by industry
        </Link>{" "}
        page sets out the published figures with their sources, but the useful comparison is
        against your own baseline and your own margin, not an industry average that averages
        across both.
      </>
    ),
  },
  {
    q: "How long before we see results?",
    a: "Research and audit take two to three weeks. First implementations usually ship in week four. Tests need two to six weeks to reach significance depending on traffic. Most engagements show a measurable revenue-per-visitor improvement inside the first quarter, and compound from there.",
  },
  {
    q: "Do you make the changes or just recommend them?",
    a: "We implement. Front-end work on Shopify, WooCommerce and BigCommerce is in scope, and we work in your theme or a staging copy depending on your setup. If a change needs backend or app development beyond our scope, we scope it separately rather than handing you a recommendation and walking away.",
  },
  {
    q: "What does CRO cost?",
    a: (
      <>
        Standalone CRO engagements typically run $3,000–$8,000/month depending on traffic
        volume, testing cadence and how much implementation is in scope. Inside a full{" "}
        <Link href="/ecommerce-management/">management engagement</Link> it is part of the
        wider fee. <Link href="/pricing/">Our pricing page</Link> explains how we scope it.
      </>
    ),
  },
  {
    q: "Will you redesign our whole site?",
    a: "Almost never, and we would push back if you asked. A full redesign changes a hundred variables at once, so when conversion moves nobody can say why — and roughly half of redesigns we see reduced conversion. We change things incrementally and measure each one.",
  },
  {
    q: "What testing tools do you use?",
    a: "Shopify’s native A/B testing where it fits, Convert or similar for more complex experiments, plus Hotjar and Microsoft Clarity for behavioural research and GA4 for the quantitative side. We work in whatever you already have where it is capable, rather than forcing a tool migration to start.",
  },
  {
    q: "What happens when a test loses?",
    a: "We document it — the hypothesis, the result and what we think it tells us — and move on. Roughly half of well-designed tests do not win, and that is normal. The documented losses are genuinely valuable: they stop the same idea being proposed again in a year, and they usually sharpen the next hypothesis.",
  },
];

const heroStats = [
  { value: "+38%", label: "Average CR lift" },
  { value: "+52%", label: "Best CR improvement" },
  { value: "-27%", label: "Best return-rate cut" },
  { value: "+61%", label: "Best mobile revenue lift" },
];

const heroChecks = [
  "Research-led: behaviour data and session review before any test is written",
  "Prioritised backlog — we test what moves revenue, not what is easy",
  "Winners rolled out and monitored, losers documented so they are not retried",
];

const problems = [
  {
    title: "High traffic, low conversion",
    body: "Acquisition is working and the store is not. Every additional visitor costs more and earns the same, so growth gets progressively more expensive.",
  },
  {
    title: "Product pages that do not persuade",
    body: "Manufacturer copy, three images, no sizing guidance and no answer to the objection that actually stops the purchase.",
  },
  {
    title: "Complicated navigation",
    body: "Filters that return nothing, categories that overlap, and no obvious path from landing page to the product someone came for.",
  },
  {
    title: "Weak CTAs",
    body: "Buttons that blend into the theme, sit below the fold on mobile, or compete with four other calls to action on the same screen.",
  },
  {
    title: "Checkout abandonment",
    body: "Shipping cost revealed at the last step, forced account creation, or a payment method the customer expected and did not find.",
  },
  {
    title: "Poor mobile experience",
    body: "Most of the traffic, a fraction of the revenue. Tap targets too small, images too heavy, and a checkout designed on a desktop monitor.",
  },
  {
    title: "Missing trust signals",
    body: "No reviews near the buy button, no returns policy in view, no delivery estimate. First-time buyers need reasons to believe you.",
  },
  {
    title: "Slow or confusing journeys",
    body: "Four seconds to first paint, unclear next steps, and a cart that loses state between devices.",
  },
  {
    title: "No systematic testing",
    body: "Changes shipped on opinion and never measured, so nobody knows which of last year’s twelve redesign decisions helped.",
  },
];

const services = [
  {
    title: "CRO Audit & Analysis",
    body: "Quantitative and qualitative review of where revenue is actually leaking.",
  },
  {
    title: "UX & Usability Optimization",
    body: "Navigation, filtering, search and the paths people actually take.",
  },
  {
    title: "Product Page Optimization",
    body: "Imagery, copy, specification depth, social proof and buy-box layout.",
  },
  {
    title: "Category Page Optimization",
    body: "Merchandising order, filter design and above-the-fold clarity.",
  },
  {
    title: "Landing Page Optimization",
    body: "Campaign landing pages built to match the ad that earned the click.",
  },
  {
    title: "Checkout Optimization",
    body: "Friction, field count, payment methods and cost transparency.",
  },
  {
    title: "Mobile Conversion Optimization",
    body: "Mobile-first rebuilds of the pages carrying the most traffic.",
  },
  {
    title: "A/B Testing & Experimentation",
    body: "Hypothesis, sample size, significance and a documented result either way.",
  },
  {
    title: "Trust & Social Proof Optimization",
    body: "Reviews, guarantees, delivery estimates and returns clarity where they matter.",
  },
  {
    title: "Funnel Optimization",
    body: "The whole path from landing to purchase, not one page in isolation.",
  },
];

const research = [
  {
    title: "User Behavior",
    items: [
      "Session recordings and replays",
      "Heatmaps and scroll depth",
      "Click and rage-click patterns",
      "On-site search queries",
      "Post-purchase and exit surveys",
    ],
  },
  {
    title: "Website Experience",
    items: [
      "Navigation and information architecture",
      "Filtering and on-site search",
      "Page speed and Core Web Vitals",
      "Mobile usability",
      "Accessibility basics",
    ],
  },
  {
    title: "Conversion Elements",
    items: [
      "Product imagery and video",
      "Copy, specifications and objections",
      "CTA placement and hierarchy",
      "Reviews and trust signals",
      "Pricing, shipping and returns clarity",
    ],
  },
  {
    title: "Funnel",
    items: [
      "Landing to category drop-off",
      "Category to product drop-off",
      "Add-to-cart rate",
      "Cart to checkout progression",
      "Checkout step completion",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Research",
    body: "Analytics, session recordings, heatmaps, on-site search and customer feedback. We want to know what people are trying to do and where it breaks, before anyone has an opinion about button colour.",
  },
  {
    num: "02",
    title: "Audit",
    body: "A structured walk-through of every step from landing to purchase, on mobile first. Every friction point logged with the evidence behind it.",
  },
  {
    num: "03",
    title: "Identify Opportunities",
    body: "Findings turned into testable hypotheses: what we think is happening, what we would change, and what metric should move if we are right.",
  },
  {
    num: "04",
    title: "Prioritise",
    body: "Scored on expected impact, traffic volume on the affected page and implementation effort. High-traffic, high-friction, low-effort goes first.",
  },
  {
    num: "05",
    title: "Test & Implement",
    body: "A/B tests where traffic supports significance, and evidence-led direct implementation where it does not. Both are documented the same way.",
  },
  {
    num: "06",
    title: "Measure & Optimize",
    body: "Result recorded either way, winners rolled out and monitored for decay, losers written up so nobody retries them in eighteen months.",
  },
];

const journey = [
  {
    num: "01",
    title: "Homepage",
    body: "Clarity of proposition, entry paths into category, and whether returning visitors can resume where they left off.",
  },
  {
    num: "02",
    title: "Category Page",
    body: "Merchandising order, filter usability, above-the-fold product density and how quickly someone can narrow to a shortlist.",
  },
  {
    num: "03",
    title: "Product Page",
    body: "Imagery, specification depth, objection handling, reviews near the buy box, delivery and returns clarity.",
  },
  {
    num: "04",
    title: "Cart",
    body: "Shipping cost transparency, cross-sell relevance, edit friction and whether the cart survives a device switch.",
  },
  {
    num: "05",
    title: "Checkout",
    body: "Field count, guest checkout, payment method coverage, error handling and progress clarity.",
  },
  {
    num: "06",
    title: "Purchase",
    body: "Confirmation clarity, post-purchase upsell and the first touch of the retention programme.",
  },
];

const goals = [
  {
    title: "Increase Conversion Rate",
    approach: "UX + page optimization + testing",
    body: "Fix the friction the research surfaced, then test the changes that need proving rather than assuming.",
  },
  {
    title: "Increase Revenue",
    approach: "Funnel + product + checkout optimization",
    body: "Work the whole path rather than one page, so gains compound instead of relocating the drop-off.",
  },
  {
    title: "Reduce Cart Abandonment",
    approach: "Cart & checkout improvements",
    body: "Cost transparency earlier, fewer fields, guest checkout and the payment methods your buyers expect.",
  },
  {
    title: "Improve Product Sales",
    approach: "Product page optimization",
    body: "Imagery, specification depth, objection handling and social proof positioned where the decision is made.",
  },
  {
    title: "Increase AOV",
    approach: "Cross-sells, bundles & upsells",
    body: "Relevant pairing at the right moment, tested for incremental revenue rather than attach rate alone.",
  },
  {
    title: "Improve Mobile Sales",
    approach: "Mobile UX & checkout optimization",
    body: "Mobile-first rebuilds of the highest-traffic templates, where the gap between traffic and revenue is widest.",
  },
  {
    title: "Get More From Existing Traffic",
    approach: "Full-funnel CRO",
    body: "The cheapest growth available — no additional media spend, just a higher return on what you already buy.",
  },
];

const whyUs = [
  {
    title: "Data-Driven Decisions",
    body: "Every test starts from something observed — a recording, a drop-off, a search query — not from a best-practice list or somebody’s preference.",
  },
  {
    title: "eCommerce-Focused CRO",
    body: "Variant selection, filtering, shipping thresholds and returns anxiety are our daily problems. Lead-gen CRO advice does not transfer to a 2,000-SKU catalog.",
  },
  {
    title: "Customer-Centric Optimization",
    body: "We optimise for the buyer completing the task they came to do. Dark patterns lift this quarter and cost you the repeat purchase.",
  },
  {
    title: "Prioritized Testing",
    body: "Scored on impact, traffic and effort. We do not run a low-traffic homepage test for six weeks when the product template is losing more revenue daily.",
  },
  {
    title: "Full-Funnel Approach",
    body: "Landing through checkout, because a product-page win that dies in a broken cart is not a win at all.",
  },
  {
    title: "Continuous Experimentation",
    body: "A running backlog rather than a one-off project. Compounding small wins beats an annual redesign nobody can measure.",
  },
  {
    title: "Revenue-Focused Strategy",
    body: "We report revenue per visitor alongside conversion rate, because a rate lift that cuts average order value is not progress.",
  },
  {
    title: "Integrated With SEO & PPC",
    body: "The same team fixes the landing page your ads point at and the template your category rankings depend on — no cross-vendor backlog.",
  },
];

type CaseResult = { value: string; label: string };

type CaseStudy = {
  name: string;
  href?: string;
  img: string;
  imgAlt: string;
  industry: string;
  challenge: string;
  strategy: string;
  results: CaseResult[];
};

const cases: CaseStudy[] = [
  {
    name: "Kitchenary",
    href: "/kitchenary-home-kitchen-shopify-usa/",
    img: "/images/conversion-rate-optimization-kitchenary.webp",
    imgAlt: "Dazzle Commerce paid media specialists reviewing campaign performance",
    industry: "Home & Kitchen · Shopify",
    challenge:
      "Healthy organic and paid traffic converting at 1.4%, with a 4.1 second mobile LCP and category pages showing four products above the fold on a phone.",
    strategy:
      "Rebuilt category templates mobile-first, shipped a Core Web Vitals pass, moved reviews and delivery estimates above the buy button, and tested filter design across three iterations.",
    results: [
      { value: "+52%", label: "Conversion rate" },
      { value: "1.6s", label: "Mobile LCP" },
      { value: "+34%", label: "Revenue per visitor" },
    ],
  },
  {
    name: "Aurelia Studio",
    img: "/images/conversion-rate-optimization-aurelia.webp",
    imgAlt: "Customer opening a fashion parcel at home",
    industry: "Fashion & Apparel · Shopify Plus",
    challenge:
      "A 41% return rate driven by sizing uncertainty, with a size guide hidden behind a modal nobody opened and no fit feedback anywhere on the product page.",
    strategy:
      "Inline size guidance with model measurements, fit feedback pulled from review data, and a post-purchase survey feeding the next iteration. Checkout reduced from five steps to three.",
    results: [
      { value: "-27%", label: "Cart abandonment" },
      { value: "+19%", label: "Conversion rate" },
      { value: "+12%", label: "Average order value" },
    ],
  },
  {
    name: "Luxury Comforts",
    img: "/images/conversion-rate-optimization-luxury-comforts.webp",
    imgAlt: "A living room arranged around a large green sofa",
    industry: "Home & Furniture · Shopify Plus",
    challenge:
      "High-consideration furniture purchases with 71% of sessions on mobile and only 22% of revenue, plus a configurator that was effectively unusable below 768px.",
    strategy:
      "Rebuilt the configurator as a mobile-native flow, added finance messaging and delivery estimates to the buy box, and restructured checkout around saved carts and callback requests.",
    results: [
      { value: "+61%", label: "Mobile revenue" },
      { value: "+44%", label: "Checkout completion" },
      { value: "+28%", label: "Revenue per visitor" },
    ],
  },
];

export default function ConversionRateOptimizationPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1>Get More Revenue From the Traffic You Already Pay For</h1>
              <p className="lead">
                Structured eCommerce CRO across product pages, category pages, cart and
                checkout. Research first, prioritised testing second, and a documented
                hypothesis behind every change we ship.
              </p>
              <ul className="check-list">
                {heroChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Get a free CRO audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/conversion-rate-optimization-hero.webp"
                alt="Online checkout screen showing payment details and cart"
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

      {/* 2. The Problem */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">The Problem</p>
          <h2>Why you need an eCommerce CRO agency, not a testing tool</h2>
          <p className="lead">
            Nine reasons stores leak revenue. Most audits find five or six at once — and
            fixing the cheapest two usually pays for the whole engagement, which is the
            case for hiring an eCommerce CRO agency rather than buying another testing
            tool.
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

      {/* 3. What We Do */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h2>Our eCommerce conversion rate optimization services</h2>
          <p className="lead">
            Ten workstreams. The audit decides which two or three are worth starting with
            — running all ten at once means none of them can be measured. Engaging an
            eCommerce conversion rate optimization agency should narrow the work, not
            widen it.
          </p>
          <div className="card-grid">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "32px" }}>
            CRO compounds fastest next to <Link href="/ecommerce-ppc/">paid advertising</Link>{" "}
            and <Link href="/ecommerce-seo/">eCommerce SEO</Link> , or inside a full{" "}
            <Link href="/ecommerce-management/">eCommerce management</Link> engagement.
          </p>
        </div>
      </section>

      {/* 4. Research — What we analyze */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Research</p>
          <h2>What we analyze</h2>
          <p className="lead">
            Four inputs. Testing without all four is guessing with extra steps. Where the
            finding is that the template itself is wrong rather than one element on it,
            the work moves to <Link href="/ecommerce-web-design/">design</Link> .
          </p>
          <div className="card-grid card-grid-4">
            {research.map((r) => (
              <article className="card" key={r.title}>
                <h3>{r.title}</h3>
                <ul className="check-list">
                  {r.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Process */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">The Process</p>
          <h2>Our CRO process</h2>
          <p className="lead">
            Six stages, then it loops. Each cycle typically runs four to six weeks
            depending on traffic volume.
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

      {/* 6. The Journey */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">The Journey</p>
          <h2>Where eCommerce conversion optimization actually moves revenue</h2>
          <p className="lead">
            Homepage → category → product → cart → checkout → purchase. eCommerce
            conversion optimization on one step in isolation just moves the drop-off
            somewhere else.
          </p>
          <div className="card-grid">
            {journey.map((s) => (
              <article className="card" key={s.num}>
                <p className="card-num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. By Goal */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">By Goal</p>
          <h2>CRO by business goal</h2>
          <p className="lead">
            Seven outcomes and the approach each one needs. Average order value, repeat
            rate and basket size all pull in different directions, and conversion rate
            optimization for luxury eCommerce in particular trades raw conversion for
            considered purchase — a premium brand that doubles its conversion rate has
            usually damaged something more valuable.
          </p>
          <div className="card-grid">
            {goals.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <h4>{g.approach}</h4>
                <p>{g.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Us */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Why Us</p>
          <h2>Why choose our CRO services</h2>
          <p className="lead">
            Eight things that separate eCommerce CRO from generic conversion advice.
          </p>
          <div className="card-grid">
            {whyUs.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Proof — CRO results */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Proof</p>
          <h2>CRO results</h2>
          <p className="lead">
            Three engagements, measured against the twelve months before we started.
          </p>
          <div className="card-grid">
            {cases.map((c) => (
              <article className="card" key={c.name}>
                <div className="split-img" style={{ marginBottom: "20px" }}>
                  <Image src={c.img} alt={c.imgAlt} width={1920} height={1280} />
                </div>
                <p className="eyebrow">Client</p>
                <h3>
                  {c.href ? <Link href={c.href}>{c.name}</Link> : c.name}
                </h3>
                <p>{c.industry}</p>
                <p className="eyebrow">Challenge</p>
                <p>{c.challenge}</p>
                <p className="eyebrow">CRO Strategy</p>
                <p>{c.strategy}</p>
                <p className="eyebrow">Result</p>
                <div className="stat-row" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
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
          <p style={{ marginTop: "32px" }}>
            Conversion outcomes vary considerably by category, price point and starting
            position. A store already converting at 4% has less headroom than one at
            1.2%, and we will say so on the call.
          </p>
          <div className="btn-row">
            <Link className="btn" href="/case-studies/">
              See all case studies
            </Link>
            <Link className="btn btn-outline" href="/portfolio/">
              Browse the portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="section">
        <div className="container center">
          <p className="eyebrow">FAQs</p>
          <h2>CRO FAQs</h2>
          <p className="lead">
            Eight questions that come up before most CRO engagements. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link> .
          </p>
          <FaqAccordion faqs={faqs} />
          <p style={{ marginTop: "32px" }}>
            Prefer to read before you talk to anyone? Our{" "}
            <Link href="/guides/ecommerce-cro/">
              eCommerce Conversion Rate Optimization Guide
            </Link>{" "}
            is the eight-chapter version of how we think about this work, published in
            full.
          </p>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Find out where your store is leaking revenue</h2>
          <p className="lead">
            Get a free CRO audit. We will walk your funnel mobile-first, review your
            behaviour data and come back with the three highest-value fixes — whether or
            not you hire us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Get a free CRO audit
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
