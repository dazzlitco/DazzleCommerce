import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";

export const metadata: Metadata = {
  title: "eCommerce Marketing Agency Services | Dazzle Commerce",
  description:
    "Full-funnel eCommerce marketing: SEO, paid advertising, Google Shopping, paid social, email and retention, and CRO run as one plan measured on blended CAC.",
  alternates: { canonical: "https://dazzlecommerce.com/ecommerce-marketing/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/ecommerce-marketing/",
    siteName: "Dazzle Commerce",
    title: "eCommerce Marketing Agency Services | Dazzle Commerce",
    description:
      "Full-funnel eCommerce marketing: SEO, paid advertising, Google Shopping, paid social, email and retention, and CRO run as one plan measured on blended CAC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Marketing Agency Services | Dazzle Commerce",
    description:
      "Full-funnel eCommerce marketing: SEO, paid advertising, Google Shopping, paid social, email and retention, and CRO run as one plan measured on blended CAC.",
  },
};

const faqs: Faq[] = [
  {
    q: "What does eCommerce marketing actually include?",
    a: "Eight disciplines: eCommerce SEO, paid advertising, Google Shopping, paid social, email and retention, content marketing, conversion optimization, and remarketing. Which of those you need depends on category, margin and stage — most brands are best served by two or three run properly rather than eight run thinly.",
  },
  {
    q: "How is this different from your eCommerce management service?",
    a: (
      <>
        <Link href="/ecommerce-management/">eCommerce management</Link> covers running the
        store as a business — catalog, merchandising, operations and reporting — with
        marketing inside it. eCommerce marketing is the growth half on its own, for brands
        whose store operations are already handled internally. If you need both, management
        is the wider engagement.
      </>
    ),
  },
  {
    q: "Which channels should we actually be on?",
    a: "Fewer than you think. We would rather run two channels properly than six thinly, and the audit tells us which two. Category, margin, average order value and repeat rate decide it — a $40 consumable and a $2,000 considered purchase need almost opposite mixes.",
  },
  {
    q: "How do you measure success if platforms overcount?",
    a: "Blended CAC, contribution margin and cohort behaviour, reconciled against actual store revenue rather than the sum of platform dashboards. We treat platform-reported ROAS as a directional signal for optimisation inside a channel, never as the number that decides budget.",
  },
  {
    q: "What does eCommerce marketing cost?",
    a: (
      <>
        Engagements typically run $3,500–$18,000/month depending on channels, scope and
        growth goals, separate from ad spend. Most marketing-only engagements sit between
        $5,000 and $12,000. Our <Link href="/pricing/">pricing page</Link> explains how we
        scope it.
      </>
    ),
  },
  {
    q: "How long until we see results?",
    a: "Paid restructuring usually shows in 30–60 days. Conversion work shows as soon as tests reach significance, typically 3–8 weeks depending on traffic. SEO and content compound over 4–9 months. Retention shows on the second purchase cycle, so it depends on your replenishment window.",
  },
  {
    q: "Do you handle creative, or do we?",
    a: "Both models work. We can run creative strategy and production, or we can brief and test against creative your team or a studio produces. What we will not do is run paid social without a creative pipeline — on those channels creative volume is the lever, and without it there is nothing to optimise.",
  },
  {
    q: "Can you work alongside our in-house marketer?",
    a: "Yes, and it is common. We usually take the disciplines that need specialism or capacity — paid media, SEO, CRO — while your marketer keeps brand, content and relationships. We map ownership explicitly at onboarding so there is no overlap and no gap.",
  },
  {
    q: "Is an eCommerce digital marketing agency different from an eCommerce marketing agency?",
    a: "No — the labels are interchangeable in practice, and that is worth saying plainly. An eCommerce digital marketing agency, an eCommerce advertising agency and an eCommerce marketing agency are usually the same offer under three names, because the terms were set by how firms wanted to be found rather than by what they do differently. What actually varies is scope: whether creative production is in-house, whether SEO sits in the same team as paid, and whether anyone owns the number the channels are supposed to move. Ask about those three instead of the job title.",
  },
];

const heroStats = [
  { value: "6.7x", label: "Median blended ROAS" },
  { value: "+142%", label: "Average revenue growth" },
  { value: "-31%", label: "Average CAC reduction" },
  { value: "$48M+", label: "GMV managed" },
];

const problems = [
  {
    title: "Every channel claims the same order",
    body: "Google reports it, Meta reports it, Klaviyo reports it. Add the dashboards together and you are doing three times your actual revenue — so nobody can say what to fund next month.",
  },
  {
    title: "Rising acquisition costs, flat conversion",
    body: "CPCs go up every year. If the site converts the same, growth costs more each quarter until the maths stops working. Most brands respond by buying more traffic.",
  },
  {
    title: "Channels run in isolation",
    body: "The SEO plan targets keywords the paid team already owns cheaply. The email programme does not know what people browsed. Each channel is optimised, the system is not.",
  },
  {
    title: "All acquisition, no retention",
    body: "Budget goes to finding new customers in a category where the second and third order is where the margin lives. LTV never gets high enough to justify the CAC.",
  },
  {
    title: "Tracking that quietly broke",
    body: "iOS changes, consent mode, a theme update that dropped a tag. Decisions get made on numbers nobody has validated in eighteen months.",
  },
  {
    title: "Optimised for ROAS, not profit",
    body: "Campaigns tuned to a platform metric that ignores margin, shipping and returns. The best-performing campaign is often the one selling your worst-margin product.",
  },
];

const services = [
  {
    title: "eCommerce SEO",
    body: "Category, collection and product pages built around real search demand, plus the technical work that lets them rank.",
    link: { href: "/ecommerce-seo/", label: "Explore eCommerce SEO" },
  },
  {
    title: "Paid Advertising",
    body: "Google, Meta, Microsoft and Amazon managed against contribution margin, with campaign structures that scale without losing efficiency.",
    link: { href: "/ecommerce-ppc/", label: "Explore PPC & paid ads" },
  },
  {
    title: "Google Shopping",
    body: "Feed quality, product segmentation, Performance Max governance and bidding built around SKU-level profitability.",
    link: { href: "/ecommerce-ppc/", label: "See Shopping management" },
  },
  {
    title: "Social Media Advertising",
    body: "Meta, TikTok and Pinterest run as a creative testing system rather than a set of boosted posts. Creative volume is the lever, not bid tweaks.",
    link: null,
  },
  {
    title: "Email & Retention Marketing",
    body: "Lifecycle flows built on replenishment timing and browse behaviour, plus SMS and loyalty where the category supports it.",
    link: null,
  },
  {
    title: "Content Marketing",
    body: "Buying guides, comparison content and category copy that earn non-brand traffic and give paid campaigns somewhere useful to land.",
    link: null,
  },
  {
    title: "Conversion Optimization",
    body: "Structured testing on the pages that carry the revenue, so the traffic you already pay for converts harder.",
    link: { href: "/conversion-rate-optimization/", label: "Explore CRO" },
  },
  {
    title: "Remarketing & Customer Acquisition",
    body: "Dynamic remarketing, win-back and lapsed-subscriber audiences priced separately from cold prospecting, because they behave nothing alike.",
    link: null,
  },
];

const processSteps = [
  {
    num: "01",
    title: "Research",
    body: "Audience research and competitor analysis first. Who buys, what they search, what they compare you against, and where the category is actually won.",
  },
  {
    num: "02",
    title: "Strategy",
    body: "Channel selection and campaign planning against a stated goal. We name the channels we are not using and why, which is usually the more useful half.",
  },
  {
    num: "03",
    title: "Launch",
    body: "Creative and content strategy shipped into live campaigns, with tracking validated before spend rather than after the first bad month.",
  },
  {
    num: "04",
    title: "Measure",
    body: "Analytics built around blended CAC, contribution margin and cohort behaviour — one set of numbers everyone agrees on.",
  },
  {
    num: "05",
    title: "Optimize",
    body: "Conversion optimization and continuous campaign iteration on the assets already carrying revenue. Small compounding gains beat quarterly relaunches.",
  },
  {
    num: "06",
    title: "Scale",
    body: "Widen budget, channels and markets only where the unit economics already hold. Scaling an unprofitable funnel just loses money faster.",
  },
];

const cycleItems = [
  "Audience research",
  "Competitor analysis",
  "Channel selection",
  "Campaign planning",
  "Creative and content strategy",
  "Conversion optimization",
  "Analytics",
  "Continuous optimization",
];

const channels = [
  { title: "Search", items: ["Google", "Google Shopping", "Bing"] },
  { title: "Social", items: ["Meta", "Instagram", "TikTok", "Pinterest"] },
  { title: "Retention", items: ["Email", "SMS", "Remarketing"] },
  { title: "Organic", items: ["SEO", "Content", "Organic social"] },
];

const goals = [
  {
    title: "Increase Sales",
    mix: "Paid acquisition + CRO + Shopping",
    body: "Widen qualified demand while lifting the rate at which it converts, so added spend does not just add cost.",
  },
  {
    title: "Generate More Traffic",
    mix: "SEO + Content + Paid Search",
    body: "Build non-brand organic visibility for the compounding half, and buy search demand for the immediate half.",
  },
  {
    title: "Lower CAC",
    mix: "Campaign optimization + audience strategy",
    body: "Cut wasted spend, separate warm from cold audiences, and stop paying prospecting prices for people who already know you.",
  },
  {
    title: "Increase ROAS",
    mix: "Shopping + PPC + CRO",
    body: "Restructure around SKU profitability and fix the landing experience, rather than bidding harder on the same pages.",
  },
  {
    title: "Increase Repeat Purchases",
    mix: "Email + Retention",
    body: "Lifecycle flows timed to actual replenishment behaviour, plus subscription and loyalty mechanics where the category supports them.",
  },
  {
    title: "Launch a New Product",
    mix: "Product campaigns + content + paid media",
    body: "Coordinated launch across search, social and email with content that answers the questions a new product always generates.",
  },
  {
    title: "Scale an Existing Store",
    mix: "Multi-channel acquisition + optimization",
    body: "Add channels and markets only where unit economics already hold, with reporting that shows contribution per channel.",
  },
];

const whyChoose = [
  {
    title: "eCommerce-Focused Expertise",
    body: "We only work with online retailers. No lead-gen accounts, no B2B SaaS funnels — which means feed quality, margin structure and marketplace dynamics are things we deal with daily rather than occasionally.",
  },
  {
    title: "Full-Funnel Marketing",
    body: "Acquisition, conversion and retention planned together. Most agencies own the first third and hand you the rest, which is where the economics are actually decided.",
  },
  {
    title: "Data-Driven Decisions",
    body: "Every channel decision traces to search demand, a test result or contribution margin. Where the data is thin, we say so and price finding out.",
  },
  {
    title: "Integrated Channels",
    body: "Search, paid, social, email and CRO briefed off one strategy. The SEO plan knows what paid already owns cheaply; the email programme knows what people browsed.",
  },
  {
    title: "Continuous Optimization",
    body: "A prioritised backlog that runs monthly rather than a campaign that launches and drifts. Compounding gains beat quarterly relaunches.",
  },
  {
    title: "Transparent Reporting",
    body: "One reconciled report instead of five platform dashboards. It leads with blended performance and names what did not work.",
  },
  {
    title: "Revenue-Focused Strategy",
    body: "We optimise to contribution margin, not platform-reported ROAS. That occasionally means turning off a campaign the dashboard loves.",
  },
  {
    title: "Scalable Marketing Systems",
    body: "Documented campaign structures, naming conventions and creative processes. When budget doubles the system holds, and it comes with you if you ever bring it in-house.",
  },
];

const cases = [
  {
    name: "Nutriblend",
    cat: "Health & Supplements · Shopify Plus",
    img: "/images/case-nutriblend.webp",
    imgAlt: "Dazzle Commerce SEO team working through category page structure",
    href: "/nutriblend-supplements-retention-uk/",
    challenge:
      "$4.1M in revenue with a 3.2x blended ROAS, 18% repeat rate and 84% of paid budget going to cold prospecting on a product customers run out of monthly.",
    strategy:
      "Rebuilt the PDP around subscribe-and-save, added a day-21 conversion offer post-purchase, and split paid into prospecting, win-back and subscription-lapse audiences with separate targets.",
    metrics: [
      { value: "+214%", label: "Revenue growth" },
      { value: "7.9x", label: "Blended ROAS" },
      { value: "-31%", label: "CAC reduction" },
    ],
  },
  {
    name: "Kitchenary",
    cat: "Home & Kitchen · Shopify",
    img: "/images/case-kitchenary.webp",
    imgAlt: "Dazzle Commerce paid media specialists reviewing campaign performance",
    href: "/kitchenary-home-kitchen-shopify-usa/",
    challenge:
      "Heavy reliance on brand search and paid social, with almost no non-brand organic visibility and a 4.1 second mobile LCP suppressing both rankings and conversion.",
    strategy:
      "Rewrote 340 collection pages around real query clusters, shipped a Core Web Vitals pass, then redirected paid budget from terms organic had started winning.",
    metrics: [
      { value: "+97%", label: "Organic traffic growth" },
      { value: "+52%", label: "Conversion-rate lift" },
      { value: "-24%", label: "Paid dependency" },
    ],
  },
  {
    name: "VAC Vacuums",
    cat: "Home & Appliances · Amazon + Shopify",
    img: "/images/case-vac-vacuums.webp",
    imgAlt: "Dazzle Commerce marketplace team reviewing Amazon account performance",
    href: "/vac-vacuums-amazon-marketplace-europe/",
    challenge:
      "Marketplace and storefront advertising run by separate vendors, bidding against each other on brand terms with TACoS above 22% and no view of blended acquisition cost.",
    strategy:
      "Consolidated both channels under one plan, rebuilt Amazon advertising around SKU profitability, and reported blended contribution rather than per-channel ROAS.",
    metrics: [
      { value: "+186%", label: "Sales growth" },
      { value: "-42%", label: "TACoS" },
      { value: "+64%", label: "Buy Box rate" },
    ],
  },
];

export default function EcommerceMarketingPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <Pill icon="fa-solid fa-globe">eCommerce Marketing</Pill>
              <h1>eCommerce Marketing Built Around Revenue, Not Channel Reports</h1>
              <p className="lead">
                Search, paid media, shopping, social, email and conversion run as one plan
                against one number. We are the growth team for online retailers who are tired
                of four vendors each claiming credit for the same order — part eCommerce ad
                agency, part SEO team, part retention team, reporting as one.
              </p>
              <ul className="check-list">
                <li>Full-funnel: acquisition, conversion and retention in one strategy</li>
                <li>Measured on blended CAC and contribution, not platform-reported ROAS</li>
                <li>Named specialists per channel, one strategist who owns the outcome</li>
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Book a free growth audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/ecommerce-marketing-hero.webp"
                alt="Marketing team reviewing strategy at a whiteboard"
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
      <section className="section" id="problem">
        <div className="container">
          <Pill icon="fa-solid fa-triangle-exclamation" center>The Problem</Pill>
          <h2>The eCommerce marketing challenge</h2>
          <p className="lead">
            Most stores do not have a channel problem. They have a system problem — six
            channels each optimised for their own metric, with nobody accountable for the
            number that pays the bills.
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

      {/* 3. Our eCommerce marketing services */}
      <section className="section section-soft" id="services">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>What We Do</Pill>
          <h2>Our eCommerce marketing services</h2>
          <p className="lead">
            Eight disciplines, one plan. Four of them have dedicated pages if you already
            know which one you are shopping for — and you can buy the eCommerce marketing
            services you need rather than the whole retainer.
          </p>
          <div className="card-grid card-grid-4">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>
                  {s.body}
                  {s.link ? (
                    <>
                      {" "}
                      <Link href={s.link.href}>{s.link.label}</Link>
                    </>
                  ) : null}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Process */}
      <section className="section" id="process">
        <div className="container">
          <Pill icon="fa-solid fa-diagram-project" center>The Process</Pill>
          <h2>Our eCommerce digital marketing agency strategy</h2>
          <p className="lead">
            Research → Strategy → Launch → Measure → Optimize → Scale. The last three
            repeat every month; the first three get revisited every quarter.
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
          <h3 style={{ marginTop: "2rem" }}>What runs inside every cycle</h3>
          <ul className="check-list">
            {cycleItems.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. Channels */}
      <section className="section section-soft" id="channels">
        <div className="container">
          <Pill icon="fa-solid fa-compass" center>Channels</Pill>
          <h2>Channels we manage as your eCommerce advertising agency</h2>
          <p className="lead">
            Four groups, planned together. Which ones you actually need depends on category,
            margin and stage — most brands are best served by two or three run properly.
          </p>
          <div className="card-grid card-grid-4">
            {channels.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <ul className="check-list">
                  {c.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. By Goal */}
      <section className="section" id="by-goal">
        <div className="container">
          <Pill icon="fa-solid fa-bullseye" center>By Goal</Pill>
          <h2>eCommerce marketing by business goal</h2>
          <p className="lead">
            Tell us the outcome you are actually being measured on and we will tell you
            which mix earns it. These are the seven we hear most.
          </p>
          <div className="card-grid">
            {goals.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <h4>{g.mix}</h4>
                <p>{g.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Us */}
      <section className="section section-soft" id="why-us">
        <div className="container">
          <Pill icon="fa-solid fa-award">Why Us</Pill>
          <h2>Why choose our eCommerce marketing agency</h2>
          <p className="lead">
            Eight things clients tell us actually mattered once budget was moving, and the
            questions worth putting to any eCommerce advertising agency you shortlist
            against us.
          </p>
          <div className="card-grid card-grid-4">
            {whyChoose.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Marketing results */}
      <section className="section" id="results">
        <div className="container">
          <Pill icon="fa-solid fa-chart-line" center>Proof</Pill>
          <h2>Marketing results</h2>
          <p className="lead">
            Three engagements, each measured against the twelve months before we started.
            Client → challenge → strategy → result.
          </p>
          <div className="card-grid">
            {cases.map((c) => (
              <article className="case-card" key={c.name}>
                <Image src={c.img} alt={c.imgAlt} width={1200} height={800} />
                <div className="case-body">
                  <p className="case-cat">Client</p>
                  <h3>
                    <Link href={c.href}>{c.name}</Link>
                  </h3>
                  <p>{c.cat}</p>
                  <p className="case-cat">Challenge</p>
                  <p style={{ color: "var(--muted)" }}>{c.challenge}</p>
                  <p className="case-cat">Marketing strategy</p>
                  <p>{c.strategy}</p>
                  <p className="case-cat">Result</p>
                  <div className="case-metrics">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link className="read-more" href={c.href}>
                    Read case study
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: "2rem" }}>
            <Link className="btn" href="/case-studies/">
              See all case studies
            </Link>
            <Link className="btn btn-outline" href="/portfolio/">
              Browse the portfolio
            </Link>
          </div>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginTop: "24px" }}>
            Results vary considerably by category, margin structure and starting position.
            We will give you an honest range for your situation on the call.
          </p>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="section section-soft">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>FAQs</Pill>
          <h2>eCommerce marketing FAQs</h2>
          <p className="lead">
            Eight questions that come up before most engagements. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link>.
          </p>
          <FaqAccordion faqs={faqs} />
          <p style={{ marginTop: "2rem" }}>
            Prefer to read before you talk to anyone?{" "}
            <Link href="/guides/ecommerce-marketing/">
              The Complete Guide to eCommerce Marketing
            </Link>{" "}
            is the eight-chapter version of how we think about this work, published in
            full.
          </p>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Find out which two channels are worth your budget</h2>
          <p className="lead">
            Book a free growth audit. We will review your paid accounts, your search
            visibility and your conversion path, and tell you where the fastest return is
            — including the channels we would turn off.
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
