import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "eCommerce PPC Agency & Paid Advertising | Dazzle Commerce",
  description:
    "eCommerce PPC management across Google Ads, Shopping, Performance Max, Meta and Amazon, structured around SKU margin and reported on blended CAC.",
  alternates: { canonical: "https://dazzlecommerce.com/ecommerce-ppc/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/ecommerce-ppc/",
    siteName: "Dazzle Commerce",
    title: "eCommerce PPC Agency & Paid Advertising | Dazzle Commerce",
    description:
      "eCommerce PPC management across Google Ads, Shopping, Performance Max, Meta and Amazon, structured around SKU margin and reported on blended CAC.",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce PPC Agency & Paid Advertising | Dazzle Commerce",
    description:
      "eCommerce PPC management across Google Ads, Shopping, Performance Max, Meta and Amazon, structured around SKU margin and reported on blended CAC.",
  },
};

const faqs: Faq[] = [
  {
    q: "How much should we spend on eCommerce PPC?",
    a: "Enough that the data is statistically useful and not so much that a bad month is existential. Practically, most stores need at least $5,000–$8,000/month in media before paid search produces reliable signal, and paid social needs more because creative testing consumes budget. We would rather tell you the floor honestly than take on an account that cannot get there.",
  },
  {
    q: "What is your management fee?",
    a: (
      <>
        PPC management typically runs $2,000–$7,000/month depending on channels, spend
        level and complexity, separate from your ad spend. We do not work on
        percentage-of-spend, because it rewards us for spending more rather than earning
        more. <Link href="/pricing/">Our pricing page</Link> explains how we scope it.
      </>
    ),
  },
  {
    q: "Who owns the ad accounts?",
    a: "You do, always. We work inside your Google, Meta and Amazon accounts under your billing. If the engagement ends you keep every campaign, every audience and the full history. Agencies that run your ads through their own accounts are holding your data hostage, and it is worth asking any agency this before you sign.",
  },
  {
    q: "Why do you not just optimise to ROAS?",
    a: "Because platform ROAS ignores COGS, shipping and returns. A 4x campaign selling a 20% margin product loses money; a 2.5x campaign selling a 60% margin product prints it. We set targets per product group based on contribution margin, which sometimes means turning off the campaign your dashboard likes best.",
  },
  {
    q: "How long until PPC improves?",
    a: "Waste reduction and structural fixes usually show in 30–45 days. A full restructure needs 60–90 days because smart bidding has to relearn, and performance often dips in weeks two and three before it recovers — we tell you that up front so it is not a surprise.",
  },
  {
    q: "Do you handle Amazon and marketplace advertising?",
    a: "Yes, and we would strongly recommend running it alongside your storefront advertising rather than separately. Run by different vendors they bid against each other on brand terms and give you two irreconcilable views of acquisition cost. On the VAC Vacuums account, consolidating them was most of the 42% TACoS reduction.",
  },
  {
    q: "Do you produce the ad creative?",
    a: "We can, or we can brief and test against creative your team or a studio produces. What we will not do is run paid social without a creative pipeline — on those platforms creative volume is the primary lever, and without new assets there is nothing meaningful left to optimise after the first month.",
  },
  {
    q: "Can you fix our tracking?",
    a: "Yes, and it is usually the first thing we do. Server-side tracking, consent mode configuration, conversion deduplication and validation against actual store orders. There is no point optimising against numbers nobody has checked since the last theme update.",
  },
];

const heroStats = [
  { value: "6.7x", label: "Median blended ROAS" },
  { value: "-31%", label: "Average CAC reduction" },
  { value: "-42%", label: "Best TACoS reduction" },
  { value: "$48M+", label: "GMV managed" },
];

const heroChecks = [
  "Campaigns built around product margin, not category-level budgets",
  "Blended CAC and contribution reporting, reconciled to actual store revenue",
  "Your accounts stay yours — we work in them, we do not hold them hostage",
];

const problems = [
  {
    title: "Rising CPCs",
    body: "Auction prices climb every year. If nothing else improves, the same performance costs more each quarter until the maths stops working.",
  },
  {
    title: "Low ROAS",
    body: "Return that looks acceptable on the dashboard and unacceptable once you subtract COGS, shipping and returns. The reported number is not the real one.",
  },
  {
    title: "Wasted ad spend",
    body: "Budget going to search terms that never convert, audiences already coming organically, and SKUs whose margin cannot support any acquisition cost.",
  },
  {
    title: "Poor campaign structure",
    body: "Everything in one Performance Max campaign, or 400 ad groups nobody has touched in a year. Neither gives you levers to pull.",
  },
  {
    title: "Weak targeting",
    body: "Cold prospecting and warm remarketing in the same campaign at the same bid, so the algorithm spends where it is easiest rather than where it is most valuable.",
  },
  {
    title: "Low-converting landing and product pages",
    body: "Traffic quality is fine; the page is the problem. Paying more for clicks to a page that converts at 1.1% is an expensive way to avoid a CRO project.",
  },
  {
    title: "Poor tracking",
    body: "Consent mode, iOS changes, a theme update that dropped a tag. Decisions made on data nobody has validated since it broke.",
  },
  {
    title: "Difficulty scaling profitably",
    body: "Performance holds at $20k/month and falls apart at $50k, because the structure was built for the smaller number.",
  },
];

const services = [
  {
    title: "Google Ads",
    body: "Search, Display and demand-gen campaigns structured by intent and margin.",
  },
  {
    title: "Google Shopping",
    body: "Feed quality, product segmentation and bidding driven by SKU profitability.",
  },
  {
    title: "Meta Ads",
    body: "Facebook and Instagram run as a creative testing system, not a boosted-post budget.",
  },
  {
    title: "Remarketing & Retargeting",
    body: "Dynamic product remarketing, cart abandonment and win-back, priced separately from cold.",
  },
  {
    title: "Performance Max",
    body: "Asset groups, audience signals and exclusions that give you back control of a black box.",
  },
  {
    title: "Paid Social Advertising",
    body: "TikTok and Pinterest where the category and creative pipeline actually support them.",
  },
  {
    title: "Campaign Management & Optimization",
    body: "Weekly optimisation against a documented plan, not monthly bid tinkering.",
  },
  {
    title: "Conversion Tracking & Analytics",
    body: "Server-side tracking, consent mode and reporting that reconciles to store revenue.",
  },
];

const platforms = [
  { name: "Google", items: ["Search", "Shopping", "Performance Max", "Display"] },
  { name: "Meta", items: ["Facebook", "Instagram"] },
  {
    name: "Other Platforms",
    items: ["TikTok", "Pinterest", "Microsoft Ads", "Amazon Ads"],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit & Research",
    body: "Account structure, search term waste, feed quality, tracking validity and competitor positioning. We come back with what the account is losing and where, quantified.",
  },
  {
    num: "02",
    title: "Strategy & Planning",
    body: "Channel mix, budget allocation by margin contribution, target CAC by product group, and the campaign architecture — agreed before anything is rebuilt.",
  },
  {
    num: "03",
    title: "Campaign Setup",
    body: "Rebuild or restructure: campaign hierarchy, feed optimisation, audience signals, exclusions, naming conventions and conversion tracking validated end to end.",
  },
  {
    num: "04",
    title: "Launch & Testing",
    body: "Staged rollout with the old structure running until the new one proves out. Creative and offer tests queued from day one rather than after the first flat month.",
  },
  {
    num: "05",
    title: "Optimize",
    body: "Weekly optimisation on search terms, bids, budgets, creative and feed. Every change logged, so when performance moves we know which change moved it.",
  },
  {
    num: "06",
    title: "Scale",
    body: "Budget expansion into what is already profitable, plus new channels and markets. Only once contribution holds at the current level.",
  },
];

const scopeLayers = [
  {
    title: "Campaigns",
    items: ["Structure", "Targeting", "Bidding", "Budgets"],
  },
  { title: "Ads", items: ["Headlines", "Copy", "Creative", "Offers"] },
  {
    title: "eCommerce",
    items: ["Product feeds", "Shopping campaigns", "Product pages", "Landing pages"],
  },
  {
    title: "Performance",
    items: ["CPC", "CTR", "Conversion rate", "CPA / CAC", "ROAS", "Revenue"],
  },
];

const goals = [
  {
    title: "Generate More Sales",
    sub: "Shopping + Search + Paid Social",
    body: "Capture existing demand first, then widen with paid social once the economics on capture are proven.",
  },
  {
    title: "Increase ROAS",
    sub: "Campaign restructuring + optimization",
    body: "Segment by margin, cut the waste, and rebuild the structure so bidding can actually respond to value.",
  },
  {
    title: "Reduce CAC",
    sub: "Audience + creative + funnel optimization",
    body: "Stop paying prospecting prices for warm traffic, then fix the landing experience that inflates cost per acquisition.",
  },
  {
    title: "Launch a Product",
    sub: "Product campaigns + paid social",
    body: "Isolated budget and measurement so the launch does not cannibalise your proven campaigns or hide behind them.",
  },
  {
    title: "Retarget Visitors",
    sub: "Remarketing + dynamic campaigns",
    body: "Dynamic product remarketing and abandonment sequences, capped and separated so they do not inflate blended ROAS.",
  },
  {
    title: "Scale Revenue",
    sub: "Budget expansion + winning-campaign optimization",
    body: "Push budget into what already clears target CAC, and rebuild what cannot take more spend before adding any.",
  },
];

const whyUs = [
  {
    title: "eCommerce-Focused Paid Media",
    body: "Feeds, variants, marketplace advertising and margin structures are our daily work. We are not a lead-gen agency applying the same playbook to products.",
  },
  {
    title: "Revenue & Profitability Focus",
    body: "Targets are set on contribution margin per product group, not a blanket ROAS number that ignores what each SKU actually earns.",
  },
  {
    title: "Data-Driven Optimization",
    body: "Every change is logged against the metric it was meant to move. When performance shifts we can say which change did it.",
  },
  {
    title: "Full-Funnel Advertising",
    body: "Cold, warm and returning audiences separated, measured and budgeted differently, because they behave nothing alike.",
  },
  {
    title: "Transparent Reporting",
    body: "One reconciled report against store revenue. Your accounts, your data, your billing — we work inside them and never hold them.",
  },
  {
    title: "Continuous Testing",
    body: "A running queue of creative, offer and landing tests. On paid social especially, creative volume is the lever that actually moves cost.",
  },
  {
    title: "Scalable Campaign Structures",
    body: "Built for the budget you want, not the one you have. Structures that hold when spend triples instead of collapsing at the next tier.",
  },
  {
    title: "Integrated With SEO, CRO & Marketing",
    body: "Paid stops bidding on terms organic already owns, and landing pages get fixed by the same team rather than added to your backlog.",
  },
];

type CaseResult = { value: string; label: string };

type CaseCard = {
  client: string;
  href: string | null;
  category: string;
  img: string;
  imgAlt: string;
  challenge: string;
  strategy: string;
  results: CaseResult[];
};

const cases: CaseCard[] = [
  {
    client: "VAC Vacuums",
    href: "/vac-vacuums-amazon-marketplace-europe/",
    category: "Home & Appliances · Amazon + Shopify",
    img: "/images/case-vac-vacuums.webp",
    imgAlt: "Dazzle Commerce marketplace team reviewing Amazon account performance",
    challenge:
      "TACoS above 22%, duplicate ASINs splitting ad spend, and marketplace advertising run by a separate vendor bidding against the storefront on brand terms.",
    strategy:
      "Consolidated both channels under one plan, rebuilt Amazon advertising around SKU profitability, restructured Shopping by margin band and added brand-term negatives across accounts.",
    results: [
      { value: "-42%", label: "TACoS" },
      { value: "+186%", label: "Sales growth" },
      { value: "+64%", label: "Buy Box rate" },
    ],
  },
  {
    client: "Nutriblend",
    href: "/nutriblend-supplements-retention-uk/",
    category: "Health & Supplements · Shopify Plus",
    img: "/images/case-nutriblend.webp",
    imgAlt: "Dazzle Commerce SEO team working through category page structure",
    challenge:
      "84% of paid budget going to cold prospecting on a consumable product, with a 3.2x blended ROAS and no separation between acquisition and win-back audiences.",
    strategy:
      "Split the account into prospecting, win-back and subscription-lapse with separate targets and budgets, then rebuilt creative testing around subscription messaging.",
    results: [
      { value: "7.9x", label: "Blended ROAS" },
      { value: "-31%", label: "CPA reduction" },
      { value: "+214%", label: "Revenue generated" },
    ],
  },
  {
    client: "Fitness Gear",
    href: null,
    category: "Sports & Fitness · Shopify + Walmart",
    img: "/images/ecommerce-ppc-fitness-gear.webp",
    imgAlt: "A person training with dumbbells in a gym",
    challenge:
      "Strong D2C paid performance with no marketplace presence, and concern that launching would cannibalise existing campaigns and inflate blended acquisition cost.",
    strategy:
      "Launched Walmart and Amazon advertising on a deliberately narrowed SKU set with separate pricing logic, and built channel-contribution reporting rather than channel-revenue reporting.",
    results: [
      { value: "5.2x", label: "Marketplace ROAS" },
      { value: "+128%", label: "Revenue growth" },
      { value: "+9%", label: "D2C revenue held" },
    ],
  },
];

export default function EcommercePpcPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" id="ppc-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">PPC &amp; Paid Advertising</p>
              <h1>eCommerce PPC Managed on Profit, Not Platform ROAS</h1>
              <p className="lead">
                Google, Shopping, Performance Max, Meta and marketplace advertising, structured
                around SKU-level margin. We buy customers profitably and tell you when a
                campaign the dashboard loves is quietly losing you money.
              </p>
              <ul className="check-list">
                {heroChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Get a free PPC audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/ecommerce-ppc-hero.webp"
                alt="Advertising performance dashboard on a laptop"
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
      <section className="section" id="ppc-challenge">
        <div className="container">
          <p className="eyebrow">The Problem</p>
          <h2>The paid advertising challenge</h2>
          <p className="lead">
            Eight reasons paid accounts stop working. Most audits we run find four or five of
            them at once, and usually the structural ones are causing the rest.
          </p>
          <div className="card-grid card-grid-4">
            {problems.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="section section-soft" id="ppc-services">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h2>Our eCommerce PPC services &amp; paid advertising</h2>
          <p className="lead">
            Eight services covering paid acquisition end to end. This page is the full
            solution — individual channels get their own detail as we publish them, and the
            eCommerce PPC services below can be bought separately.
          </p>
          <div className="card-grid card-grid-4">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "32px" }}>
            Paid works hardest next to <Link href="/ecommerce-seo/">eCommerce SEO</Link> and{" "}
            <Link href="/conversion-rate-optimization/">conversion optimization</Link> , or
            inside a full <Link href="/ecommerce-management/">eCommerce management</Link>{" "}
            engagement.
          </p>
        </div>
      </section>

      {/* 4. Platforms */}
      <section className="section" id="ppc-platforms">
        <div className="container">
          <p className="eyebrow">Platforms</p>
          <h2>Advertising platforms we manage</h2>
          <p className="lead">
            Storefront and marketplace advertising planned together, so they stop bidding
            against each other on your own brand terms.
          </p>
          <div className="card-grid">
            {platforms.map((p) => (
              <article className="card" key={p.name}>
                <h3>{p.name}</h3>
                <ul className="check-list">
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Process */}
      <section className="section section-soft" id="ppc-process">
        <div className="container">
          <p className="eyebrow">The Process</p>
          <h2>Our eCommerce PPC management process</h2>
          <p className="lead">
            Six stages. Stages five and six run continuously; the first four repeat when the
            account changes shape. eCommerce PPC management is a rhythm, not a setup project.
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

      {/* 6. Scope */}
      <section className="section" id="ppc-what-we-optimize">
        <div className="container">
          <p className="eyebrow">Scope</p>
          <h2>What we optimize in PPC for eCommerce</h2>
          <p className="lead">
            Four layers. Most agencies only touch the first two, which is why performance
            plateaus — PPC for eCommerce lives or dies in the bottom two, where the feed and
            the landing experience sit.
          </p>
          <div className="card-grid card-grid-4">
            {scopeLayers.map((l) => (
              <article className="card" key={l.title}>
                <h3>{l.title}</h3>
                <ul className="check-list">
                  {l.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PPC by Business Goal */}
      <section className="section section-soft" id="ppc-by-goal">
        <div className="container">
          <p className="eyebrow">By Goal</p>
          <h2>PPC by business goal</h2>
          <p className="lead">
            Tell us the outcome you are measured on and we will tell you the approach that
            earns it.
          </p>
          <div className="card-grid">
            {goals.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <h4>{g.sub}</h4>
                <p>{g.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Us */}
      <section className="section" id="why-choose-ppc">
        <div className="container">
          <p className="eyebrow">Why Us</p>
          <h2>Why choose our eCommerce PPC agency</h2>
          <p className="lead">
            Eight things that separate eCommerce paid media from the generic kind, and what to
            expect from an eCommerce PPC agency that reports on margin rather than platform
            ROAS.
          </p>
          <div className="card-grid card-grid-4">
            {whyUs.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Proof — PPC results */}
      <section className="section section-soft" id="ppc-results">
        <div className="container">
          <p className="eyebrow">Proof</p>
          <h2>PPC results</h2>
          <p className="lead">
            Three paid engagements, measured against the twelve months before we took the
            accounts over.
          </p>
          <div className="card-grid">
            {cases.map((c) => (
              <article className="case-card" key={c.client}>
                <Image src={c.img} alt={c.imgAlt} width={1920} height={1280} />
                <div className="case-body">
                  <p className="case-cat">CLIENT</p>
                  <h3>
                    {c.href ? <Link href={c.href}>{c.client}</Link> : c.client}
                  </h3>
                  <p>{c.category}</p>
                  <h4>CHALLENGE</h4>
                  <p>{c.challenge}</p>
                  <h4>PAID STRATEGY</h4>
                  <p>{c.strategy}</p>
                  <h4>RESULT</h4>
                  <div className="case-metrics">
                    {c.results.map((r) => (
                      <div key={r.label}>
                        <strong>{r.value}</strong>
                        <span>{r.label}</span>
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
          <div className="btn-row" style={{ marginTop: "32px" }}>
            <Link className="btn" href="/case-studies/">
              See all case studies
            </Link>
            <Link className="btn btn-outline" href="/portfolio/">
              Browse the portfolio
            </Link>
          </div>
          <p style={{ marginTop: "24px" }}>
            Paid results vary considerably by category, margin structure and auction
            competitiveness. We will give you an honest range for your account on the call,
            including where we would not expect a quick win.
          </p>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="section" id="ppc-faqs">
        <div className="container center">
          <p className="eyebrow">FAQs</p>
          <h2>PPC &amp; paid advertising FAQs</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            Eight questions that come up before most paid engagements. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link> .
          </p>
          <FaqAccordion faqs={faqs} />
          <p style={{ marginTop: "32px" }}>
            Prefer to read before you talk to anyone? Our{" "}
            <Link href="/guides/ecommerce-ppc/">eCommerce PPC &amp; Paid Advertising Guide</Link>{" "}
            is the eight-chapter version of how we think about this work, published in full.
          </p>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Find out what your paid accounts are actually losing</h2>
          <p className="lead">
            Get a free PPC audit. We will review structure, search term waste, feed quality
            and tracking, and come back with what it is costing you — whether or not you hire
            us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Get a free PPC audit
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
