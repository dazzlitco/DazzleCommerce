import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";

export const metadata: Metadata = {
  title: "eCommerce Email & Retention Agency | Dazzle Commerce",
  description:
    "eCommerce email marketing and retention: lifecycle flows, segmentation, SMS, cart recovery and loyalty built on Klaviyo, Omnisend and Shopify data.",
  alternates: { canonical: "https://dazzlecommerce.com/email-retention-marketing/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/email-retention-marketing/",
    siteName: "Dazzle Commerce",
    title: "eCommerce Email & Retention Agency | Dazzle Commerce",
    description:
      "eCommerce email marketing and retention: lifecycle flows, segmentation, SMS, cart recovery and loyalty built on Klaviyo, Omnisend and Shopify data.",
    images: [
      {
        url: "/images/email-retention-marketing-hero.webp",
        width: 1920,
        height: 1280,
        alt: "Phone showing unread email notifications",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Email & Retention Agency | Dazzle Commerce",
    description:
      "eCommerce email marketing and retention: lifecycle flows, segmentation, SMS, cart recovery and loyalty built on Klaviyo, Omnisend and Shopify data.",
  },
};

const heroStats = [
  { value: "+87%", label: "Best repeat-rate lift" },
  { value: "38%", label: "Revenue from email" },
  { value: "+2.4x", label: "Best LTV / CAC shift" },
  { value: "+46%", label: "Best subscription rate" },
];

const heroBullets = [
  "Flows timed to your product’s real replenishment window, not a generic template",
  "Segmentation built from purchase and behaviour data you already own",
  "Reported on email-attributed revenue and repeat purchase rate, not open rate",
];

const problems = [
  {
    title: "Too many one-time buyers",
    body: "A customer base that looks large and behaves like a stream of strangers. Acquisition keeps refilling a bucket nobody has patched.",
  },
  {
    title: "Low repeat purchase rate",
    body: "A consumable category running at 18–20% repeat when it should sustain double that. The demand exists; nothing is asking for it.",
  },
  {
    title: "Abandoned carts",
    body: "Sessions that reached the cart and left, recovered by a single generic email sent four hours later, if at all.",
  },
  {
    title: "Weak post-purchase engagement",
    body: "The order confirmation is the last thing a customer hears until the next promo blast. The highest-intent window in the whole lifecycle, unused.",
  },
  {
    title: "Generic promotional emails",
    body: "The same 15% off to the whole list every fortnight. It trains people to wait for discounts and to ignore everything else.",
  },
  {
    title: "Poor customer segmentation",
    body: "One list, one message. First-time buyers, VIPs and lapsed customers all treated identically, so none of them get anything relevant.",
  },
  {
    title: "Underused customer data",
    body: "Purchase history, browse behaviour and product affinity sitting in the platform unused, while campaigns are planned on gut feel.",
  },
  {
    title: "Low customer lifetime value",
    body: "LTV that never grows enough to justify rising acquisition costs, so every CPC increase squeezes the same thin margin.",
  },
  {
    title: "Overdependence on paid acquisition",
    body: "Revenue that stops the week the ad spend stops. No owned channel doing meaningful work in the background.",
  },
];

const services = [
  {
    title: "Email Marketing Strategy",
    body: "Channel role, cadence, offer architecture and how email fits next to paid.",
  },
  {
    title: "Email Automation & Flows",
    body: "The always-on lifecycle programme that earns revenue without a send button.",
  },
  {
    title: "Campaign Management",
    body: "Planned promotional calendar, built, sent and reported on every month.",
  },
  {
    title: "Customer Segmentation",
    body: "Segments built from purchase, browse and product-affinity data you already hold.",
  },
  {
    title: "SMS Marketing",
    body: "Compliant SMS for the moments that genuinely justify interrupting someone.",
  },
  {
    title: "Abandoned Cart Recovery",
    body: "Cart, checkout and browse recovery sequences timed to actual drop-off behaviour.",
  },
  {
    title: "Post-Purchase Marketing",
    body: "Shipping, education, review request and the second-purchase prompt.",
  },
  {
    title: "Win-Back Campaigns",
    body: "Lapsed-customer automation triggered on your real purchase-cycle data.",
  },
  {
    title: "Loyalty & Retention Strategy",
    body: "VIP tiers, subscription mechanics and rewards where the category supports them.",
  },
  {
    title: "Email Testing & Optimization",
    body: "Subject lines, offers, timing and creative, tested on revenue per recipient.",
  },
];

const journey = [
  { num: "01", name: "Subscriber" },
  { num: "02", name: "Welcome Series" },
  { num: "03", name: "Browse" },
  { num: "04", name: "Cart" },
  { num: "05", name: "Purchase" },
  { num: "06", name: "Post-Purchase" },
  { num: "07", name: "Cross-Sell / Upsell" },
  { num: "08", name: "Repeat Purchase" },
  { num: "09", name: "Loyalty" },
  { num: "10", name: "Win-Back" },
];

const flows = [
  {
    title: "Welcome series",
    body: "Sets expectation, delivers the incentive and earns the first purchase.",
  },
  {
    title: "Browse abandonment",
    body: "Triggered on category and product views that did not reach the cart.",
  },
  {
    title: "Cart abandonment",
    body: "Multi-step recovery with escalating incentive only where margin allows.",
  },
  {
    title: "Checkout abandonment",
    body: "Separate from cart, because reaching checkout is a much stronger signal.",
  },
  {
    title: "Post-purchase",
    body: "Shipping updates, product education and setting up the second order.",
  },
  {
    title: "Product recommendations",
    body: "Driven by affinity and category, not by best-sellers for everyone.",
  },
  {
    title: "Cross-sell / upsell",
    body: "Timed to when the first product has actually been used.",
  },
  {
    title: "Review request",
    body: "Sent on delivery plus usage window, feeding social proof back to the PDP.",
  },
  {
    title: "Replenishment",
    body: "Timed per product from your real repurchase interval data.",
  },
  {
    title: "Customer win-back",
    body: "Triggered when a customer passes 1.5x their expected repurchase cycle.",
  },
  {
    title: "VIP / customer loyalty",
    body: "Recognition and early access for the cohort carrying your margin.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit & Analyze",
    body: "Your existing flows, list health, deliverability, purchase-interval data and where revenue is currently coming from. We quantify the gap before proposing anything.",
  },
  {
    num: "02",
    title: "Segment Customers",
    body: "Segments built on purchase history, product affinity, order value and recency — not on an arbitrary engagement window.",
  },
  {
    num: "03",
    title: "Build the Strategy",
    body: "Lifecycle map, channel split between email and SMS, offer architecture and the cadence each segment should actually receive.",
  },
  {
    num: "04",
    title: "Create & Automate",
    body: "Copy, creative and build. Flows go live in priority order so revenue starts before the full programme is finished.",
  },
  {
    num: "05",
    title: "Test & Optimize",
    body: "Subject lines, timing, offers and creative, measured on revenue per recipient rather than open rate.",
  },
  {
    num: "06",
    title: "Retain & Grow",
    body: "Monthly reporting on repeat rate, LTV and flow revenue, with the backlog re-prioritised on what moved.",
  },
];

const behindSteps = [
  "Customer data analysis",
  "Lifecycle mapping",
  "Segmentation",
  "Email/SMS strategy",
  "Copy and creative",
  "Automation setup",
  "Testing",
  "Performance analysis",
];

const ltvStages = [
  {
    num: "01",
    title: "Convert",
    intro: "Turn a subscriber or an abandoned session into a first order.",
    items: ["Welcome incentives", "Cart recovery", "First-purchase campaigns"],
  },
  {
    num: "02",
    title: "Engage",
    intro: "Stay relevant between purchases without training people to wait for discounts.",
    items: ["Personalized campaigns", "Relevant content", "Customer segmentation"],
  },
  {
    num: "03",
    title: "Retain",
    intro: "Earn the second and third order, where the margin actually lives.",
    items: ["Post-purchase communication", "Replenishment", "Loyalty programs"],
  },
  {
    num: "04",
    title: "Grow",
    intro: "Increase order value and reactivate the customers worth reactivating.",
    items: ["Cross-sells", "Upsells", "VIP campaigns", "Win-back strategies"],
  },
];

const goals = [
  {
    title: "Increase Repeat Purchases",
    subtitle: "Lifecycle + post-purchase campaigns",
    body: "Set up the second order in the window right after the first, when intent is highest and cost is zero.",
  },
  {
    title: "Recover Lost Sales",
    subtitle: "Cart & checkout abandonment",
    body: "Separate sequences for cart and checkout, timed to real drop-off behaviour rather than a fixed delay.",
  },
  {
    title: "Increase LTV",
    subtitle: "Segmentation + personalization",
    body: "Stop sending one message to everyone; relevance is what extends the customer relationship.",
  },
  {
    title: "Increase AOV",
    subtitle: "Cross-sell & upsell campaigns",
    body: "Pairing timed to when the first product has been used, measured on incremental revenue.",
  },
  {
    title: "Re-Engage Customers",
    subtitle: "Win-back automation",
    body: "Triggered on your actual purchase-cycle data, not a generic 90-day lapse rule.",
  },
  {
    title: "Build Customer Loyalty",
    subtitle: "Loyalty + VIP campaigns",
    body: "Recognition, early access and tiering for the cohort that already carries your margin.",
  },
  {
    title: "Reduce Paid Ad Dependency",
    subtitle: "Owned-channel revenue growth",
    body: "Shift a share of revenue to a channel with no media cost, so a CPC increase stops being existential.",
  },
];

const platforms = [
  {
    title: "Klaviyo",
    body: "Our default for Shopify. Deep flow logic and product-level segmentation.",
  },
  {
    title: "Mailchimp",
    body: "Campaign and audience management for lighter programmes.",
  },
  {
    title: "Omnisend",
    body: "Email and SMS in one workflow, strong on smaller Shopify stores.",
  },
  {
    title: "Shopify",
    body: "Customer, order and subscription data feeding every segment.",
  },
  {
    title: "WooCommerce",
    body: "WordPress-based stores, with the plugin and hosting realities that come with them.",
  },
  {
    title: "HubSpot",
    body: "Where retention needs to reconcile with a wider CRM or B2B pipeline.",
  },
  {
    title: "Attentive",
    body: "SMS at volume, with compliance and consent handled properly.",
  },
  {
    title: "Other CRM & email platforms",
    body: "Sendlane, Drip, Postscript, Yotpo and most mainstream ESPs.",
  },
];

const whyUs = [
  {
    title: "eCommerce-Focused Strategy",
    body: "Replenishment windows, subscription mechanics and category purchase cycles are our daily work. B2B nurture playbooks do not transfer to a consumables brand.",
  },
  {
    title: "Lifecycle-Based Marketing",
    body: "The programme is built as a journey, not a calendar of sends. Automation carries the revenue; campaigns add to it.",
  },
  {
    title: "Data-Driven Segmentation",
    body: "Segments come from purchase interval, product affinity and order value — data you already own and almost certainly are not using.",
  },
  {
    title: "Personalized Customer Journeys",
    body: "A first-time buyer, a lapsed customer and a VIP get genuinely different sequences, not the same email with a different name token.",
  },
  {
    title: "Revenue-Focused Automation",
    body: "Flows are measured on revenue per recipient. Open rate is a diagnostic; it has never paid an invoice.",
  },
  {
    title: "Continuous Testing",
    body: "Subject lines, offers, timing and creative tested on a running schedule, with results documented either way.",
  },
  {
    title: "Cross-Channel Retention",
    body: "Email, SMS and on-site coordinated so the same customer is not hit three times with the same offer in one afternoon.",
  },
  {
    title: "Transparent Reporting",
    body: "Email-attributed revenue reconciled against store revenue, plus repeat rate and LTV by cohort. Including the flows that underperformed.",
  },
];

const caseStudies = [
  {
    visual: "petzz — campaign visual",
    image: "/images/email-retention-marketing-petzz.webp",
    imageAlt: "A laptop open on a white desk",
    name: "petzz",
    nameHref: null as string | null,
    meta: "Pet Supplies · WooCommerce · Klaviyo",
    challenge:
      "A 21% repeat purchase rate in a consumables category that should sustain far more, with one generic monthly newsletter and no automation beyond an order confirmation.",
    strategy:
      "Rebuilt the programme around per-product replenishment timing rather than a single generic flow, segmented by product affinity and order interval, and added win-back triggered on 1.5x expected cycle.",
    implementation:
      "Eleven flows built over nine weeks, replenishment timing derived per SKU from two years of order data, and SMS added only for the replenishment and win-back moments.",
    metrics: [
      { value: "+87%", label: "Repeat purchase rate" },
      { value: "38%", label: "Revenue from email" },
      { value: "+2.4x", label: "LTV / CAC" },
      { value: "-19%", label: "Customer churn" },
    ],
  },
  {
    visual: "Nutriblend — campaign visual",
    image: "/images/email-retention-marketing-nutriblend.webp",
    imageAlt: "A supplement bottle with a blank label",
    name: "Nutriblend",
    nameHref: "/nutriblend-supplements-retention-uk/",
    meta: "Health & Supplements · Shopify Plus · Klaviyo",
    challenge:
      "Strong repeat intent with no subscription mechanic: 91% of second orders were placed manually between day 26 and day 38, and the subscribe option converted under 2%.",
    strategy:
      "Built a post-purchase flow offering subscription conversion at day 21, rebuilt the welcome series around the subscribe-and-save proposition, and added lapse-risk segmentation for subscribers.",
    implementation:
      "Post-purchase sequence timed to the observed 26–38 day window, PDP and email messaging aligned on per-unit saving, and a separate subscription-lapse win-back path.",
    metrics: [
      { value: "+46%", label: "Subscription rate" },
      { value: "+214%", label: "Revenue YoY" },
      { value: "58%", label: "Revenue recurring" },
      { value: "-31%", label: "Blended CAC" },
    ],
  },
  {
    visual: "Harvest Table — campaign visual",
    image: "/images/email-retention-marketing-harvest-table.webp",
    imageAlt: "A cardboard shipping box",
    name: "Harvest Table",
    nameHref: null as string | null,
    meta: "Food & Beverage · Shopify · Omnisend",
    challenge:
      "A subscription box launch with no owned-channel programme, relying entirely on paid social for both acquisition and the retention that a box model depends on.",
    strategy:
      "Built the full lifecycle from launch: welcome, cart and checkout recovery, onboarding for the first three boxes, pause-and-skip handling, and a referral-led loyalty layer.",
    implementation:
      "Cart and checkout treated as separate sequences, first-three-box onboarding to survive the highest-churn window, and a pause flow to catch cancellations before they happened.",
    metrics: [
      { value: "2,100", label: "Active subscribers" },
      { value: "31%", label: "Revenue from email" },
      { value: "+18%", label: "Average order value" },
      { value: "64%", label: "Cart recovery rate" },
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "How much revenue should email actually drive?",
    a: "For most eCommerce brands with a functioning lifecycle programme, 20–35% of total revenue is a realistic range, with consumables and subscription models at the top of it. If you are under 10%, the gap is almost always missing automation rather than insufficient campaign volume. Anyone quoting you a single benchmark without asking your category and repurchase cycle is guessing.",
  },
  {
    q: "What is the difference between flows and campaigns?",
    a: "Flows are automated and triggered by behaviour — someone subscribes, abandons a cart, or passes their replenishment window. Campaigns are one-off sends to a segment. Flows typically produce the majority of email revenue at a fraction of the effort, which is why we build them first and treat campaigns as the addition rather than the programme.",
  },
  {
    q: "How long before retention work shows results?",
    a: "Cart and checkout recovery usually shows within two weeks of going live. Welcome and post-purchase flows show inside a month. Replenishment and win-back take one full purchase cycle to prove out — so 30 days for a consumable, considerably longer for a durable good. Repeat purchase rate and LTV are cohort metrics and need two to three cycles to read honestly.",
  },
  {
    q: "Do we need SMS as well as email?",
    a: "Not always. SMS earns its place for genuinely time-sensitive moments — replenishment, back-in-stock, order issues, and sometimes cart recovery. Used as a second promotional channel it burns the list quickly and gets expensive. We would rather run email properly and add SMS to three or four specific triggers than launch both at half strength.",
  },
  {
    q: "What does email & retention cost?",
    a: (
      <>
        Standalone retention engagements typically run $2,500–$7,000/month depending on list
        size, platform, campaign cadence and how much creative production is in scope,
        separate from your ESP subscription. Inside a full{" "}
        <Link href="/ecommerce-management/">management engagement</Link> it is part of the
        wider fee. <Link href="/pricing/">Our pricing page</Link> explains how we scope it.
      </>
    ),
  },
  {
    q: "Will you migrate us to Klaviyo?",
    a: "Only if the current platform is genuinely limiting you. Klaviyo is our default recommendation for Shopify because of its flow logic and product-level segmentation, but a migration costs time and risks list health. If Mailchimp or Omnisend can do what your programme needs, we will build it there and say so.",
  },
  {
    q: "Who writes the emails and makes the creative?",
    a: "We do, unless you would rather your team did. Copy, layout and campaign graphics are in scope by default. If you have brand guidelines or an in-house designer we work to them; if you do not, we build a template system that stays consistent without needing a designer for every send.",
  },
  {
    q: "How do you handle deliverability and list health?",
    a: "It is part of the audit before anything is built. Authentication records, sending reputation, engagement-based sunsetting and re-permission where a list has gone stale. Building sophisticated flows on a domain with damaged reputation is wasted work, so we fix that first even when it is the least interesting part of the engagement.",
  },
];

export default function EmailRetentionMarketingPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <Pill icon="fa-solid fa-envelope-open-text">Email &amp; Retention</Pill>
              <h1>Turn First-Time Buyers Into Repeat Revenue</h1>
              <p className="lead">
                Lifecycle email and SMS built on how your customers actually buy — replenishment
                timing, browse behaviour and purchase history. Owned-channel revenue that
                compounds instead of resetting every month with your ad budget.
              </p>
              <ul className="check-list">
                {heroBullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Get a free retention audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/email-retention-marketing-hero.webp"
                alt="Phone showing unread email notifications"
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

      {/* 2. The customer retention challenge */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-triangle-exclamation" center>The Problem</Pill>
          <h2>The customer retention challenge</h2>
          <p className="lead">
            Nine reasons owned revenue stays flat. Most stores have six or seven of them, and
            every one is cheaper to fix than buying the equivalent revenue through ads.
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

      {/* 3. Our email & retention services */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>What We Do</Pill>
          <h2>Our email &amp; retention services</h2>
          <p className="lead">
            Ten workstreams. Flows and segmentation come first — campaigns sent into an
            unsegmented list are the least valuable thing on this page.
          </p>
          <div className="card-grid">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "24px" }}>
            Retention compounds fastest alongside{" "}
            <Link href="/conversion-rate-optimization/">conversion optimization</Link> and{" "}
            <Link href="/ecommerce-ppc/">paid advertising</Link>, or inside a full{" "}
            <Link href="/ecommerce-management/">eCommerce management</Link> engagement.
          </p>
        </div>
      </section>

      {/* 4. Email automations & lifecycle flows */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-compass" center>Lifecycle</Pill>
          <h2>Email automations &amp; lifecycle flows</h2>
          <p className="lead">
            One journey from first subscribe to win-back. Every stage has a trigger, a message
            and a metric — nothing runs because a template included it.
          </p>
          <h3>The automated customer journey</h3>
          <div className="card-grid card-grid-4">
            {journey.map((j) => (
              <article className="card" key={j.num}>
                <p className="card-num">{j.num}</p>
                <h3>{j.name}</h3>
              </article>
            ))}
          </div>
          <h3 style={{ marginTop: "40px" }}>The eleven flows that carry the revenue</h3>
          <div className="card-grid">
            {flows.map((f) => (
              <article className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Our email & retention process */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-diagram-project" center>The Process</Pill>
          <h2>Our email &amp; retention process</h2>
          <p className="lead">
            Six stages. The last two run continuously once the programme is live.
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
          <h3 style={{ marginTop: "40px" }}>What sits behind those steps</h3>
          <ul className="check-list">
            {behindSteps.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. How we grow customer lifetime value */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-user-group" center>Lifetime Value</Pill>
          <h2>How we grow customer lifetime value</h2>
          <p className="lead">
            Four stages, in order. Skipping to “grow” before “retain” works is how brands end
            up discounting their best customers.
          </p>
          <div className="card-grid card-grid-4">
            {ltvStages.map((s) => (
              <article className="card" key={s.num}>
                <p className="card-num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.intro}</p>
                <ul className="check-list">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Retention marketing by business goal */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-bullseye" center>By Goal</Pill>
          <h2>Retention marketing by business goal</h2>
          <p className="lead">Seven outcomes and the retention strategy each one needs.</p>
          <div className="card-grid">
            {goals.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <p>
                  <strong>{g.subtitle}</strong>
                </p>
                <p>{g.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Platforms & technology we work with */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-screwdriver-wrench" center>Platforms</Pill>
          <h2>Platforms &amp; technology we work with</h2>
          <p className="lead">
            We work in whatever you already have where it is capable. Migration is a
            recommendation, not a precondition.
          </p>
          <div className="card-grid">
            {platforms.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Why choose our eCommerce email marketing agency */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-award">Why Us</Pill>
          <h2>Why choose our eCommerce email marketing agency</h2>
          <p className="lead">
            Eight things that separate lifecycle retention from sending more newsletters, and
            worth asking of any eCommerce email marketing agency you shortlist.
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

      {/* 10. Retention results */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-chart-line" center>Proof</Pill>
          <h2>Retention results</h2>
          <p className="lead">
            Three engagements: challenge, retention strategy, implementation, result. Measured
            against the twelve months before we started.
          </p>
          <div className="card-grid">
            {caseStudies.map((c) => (
              <article className="case-card" key={c.name}>
                <Image
                  src={c.image}
                  alt={c.imageAlt}
                  width={1920}
                  height={1280}
                />
                <div className="case-body">
                  <p className="case-cat">{c.visual}</p>
                  <h3>
                    {c.nameHref ? (
                      <Link href={c.nameHref}>{c.name}</Link>
                    ) : (
                      c.name
                    )}
                  </h3>
                  <p>{c.meta}</p>
                  <p>
                    <strong>Challenge</strong>
                  </p>
                  <p>{c.challenge}</p>
                  <p>
                    <strong>Retention strategy</strong>
                  </p>
                  <p>{c.strategy}</p>
                  <p>
                    <strong>Implementation</strong>
                  </p>
                  <p>{c.implementation}</p>
                  <div className="case-metrics">
                    {c.metrics.map((m) => (
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
          <div className="btn-row" style={{ marginTop: "24px" }}>
            <Link className="btn" href="/case-studies/">
              See all case studies
            </Link>
            <Link className="btn btn-outline" href="/portfolio/">
              Browse the portfolio
            </Link>
          </div>
          <p style={{ marginTop: "24px" }}>
            Retention outcomes vary heavily by category. A consumable with a 30-day cycle has
            far more headroom than a once-every-five-years purchase, and we will tell you which
            one you are on the call.
          </p>
        </div>
      </section>

      {/* 11. Email & retention FAQs */}
      <section className="section section-soft">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>FAQs</Pill>
          <h2>Email &amp; retention FAQs</h2>
          <p className="lead">
            Eight questions that come up before most retention engagements. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link>.
          </p>
          <FaqAccordion faqs={faqs} />
          <p style={{ marginTop: "24px" }}>
            Prefer to read before you talk to anyone? Our{" "}
            <Link href="/guides/customer-retention/">
              Customer Retention &amp; Email Marketing Guide
            </Link>{" "}
            is the eight-chapter version of how we think about this work, published in full.
          </p>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Find out what your owned channels are leaving on the table</h2>
          <p className="lead">
            Get a free retention audit. We will review your flows, list health and repurchase
            data, and tell you what the missing automation is worth annually — whether or not
            you hire us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Get a free retention audit
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
