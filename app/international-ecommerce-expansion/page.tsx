import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";

export const metadata: Metadata = {
  title: "International eCommerce Expansion | Dazzle Commerce",
  description:
    "Cross-border eCommerce expansion run as one programme: market selection, localisation, marketplaces, acquisition, customer experience and operations.",
  alternates: { canonical: "https://dazzlecommerce.com/international-ecommerce-expansion/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/international-ecommerce-expansion/",
    siteName: "Dazzle Commerce",
    title: "International eCommerce Expansion | Dazzle Commerce",
    description:
      "Cross-border eCommerce expansion run as one programme: market selection, localisation, marketplaces, acquisition, customer experience and operations.",
  },
  twitter: {
    card: "summary_large_image",
    title: "International eCommerce Expansion | Dazzle Commerce",
    description:
      "Cross-border eCommerce expansion run as one programme: market selection, localisation, marketplaces, acquisition, customer experience and operations.",
  },
};

const faqs: Faq[] = [
  {
    q: "How many markets should we open at once?",
    a: "One. Almost always one. Opening several simultaneously means none of them gets the attention required to produce a repeatable playbook, and you learn nothing transferable. The exception is where two markets share a language, a currency and a fulfilment route — then they are effectively one launch.",
  },
  {
    q: "Should we lead with a marketplace or our own store?",
    a: "It depends what you are trying to prove. A marketplace tests demand fast and cheaply with no localisation project, but you do not own the customer. A localised storefront is slower and more expensive and builds an asset. Most expansions we run do the marketplace first and the storefront second, once demand is proven.",
  },
  {
    q: "Do you handle tax, duty and compliance?",
    a: "We model landed cost including duty and we identify the registration, labelling and claim requirements a market imposes — but we are not tax advisers and we do not file your returns. We work alongside your accountant or introduce one who specialises in the market.",
  },
  {
    q: "How long before a new market is profitable?",
    a: "On a marketplace with an existing catalogue, often within a quarter. On a localised storefront built from scratch, plan for two to three quarters before contribution turns positive. Anyone promising faster has not included the returns.",
  },
  {
    q: "Can you work with our existing agency in that country?",
    a: "Yes, and sometimes that is the right structure — particularly where local language paid social is involved. We are usually the team holding the strategy, the catalogue and the reporting, with a local partner executing in-market.",
  },
  {
    q: "What if the audit says we should not expand yet?",
    a: (
      <>
        Then that is what the audit says. A store whose home market is unprofitable does
        not become profitable by adding a second country, and we would rather fix the first
        market with you. The <Link href="/ecommerce-audit/">free audit</Link> is where
        that conversation starts.
      </>
    ),
  },
  {
    q: "Do you translate content, or do we?",
    a: "Either. We manage professional translation where you do not have it, and we work with your in-house translators where you do. What we insist on is that machine translation is not used for anything a customer reads before buying.",
  },
  {
    q: "How is this different from your location pages?",
    a: (
      <>
        The <Link href="/locations-we-serve/">location pages</Link> describe how we work in
        a market you are already in or committed to. This page is about the decision and the
        sequence — which market, in what order, through which channel, and what it will cost
        to serve.
      </>
    ),
  },
];

const areas = [
  {
    num: "Area 01",
    title: "Market research & selection",
    body: "Which market, in which order, and what it will cost to serve properly before you commit to it.",
    href: "#intl-research",
    img: "/images/locations-we-serve-hero.webp",
    alt: "World map illustrating international eCommerce markets served by Dazzle Commerce",
  },
  {
    num: "Area 02",
    title: "Localisation strategy",
    body: "Language, currency, sizing, payment methods and delivery promises rebuilt for the market rather than translated into it.",
    href: "#intl-localization",
    img: "/images/international-ecommerce-expansion-area-arabic-content.webp",
    alt: "Professional working on a laptop preparing Arabic language content",
  },
  {
    num: "Area 03",
    title: "Platforms & marketplaces",
    body: "Whether to lead with your own storefront or a regional marketplace, and how to run both without duplicating the catalogue.",
    href: "#intl-platforms",
    img: "/images/international-ecommerce-expansion-area-warehouse.webp",
    alt: "Warehouse operative arranging marketplace stock on shelving",
  },
  {
    num: "Area 04",
    title: "International customer acquisition",
    body: "Paid, organic and marketplace advertising planned per market against local cost and local competition.",
    href: "#intl-acquisition",
    img: "/images/ecommerce-ppc-hero.webp",
    alt: "Advertising performance dashboard on a laptop",
  },
  {
    num: "Area 05",
    title: "Customer experience & conversion",
    body: "The trust signals, payment options and delivery messaging that decide whether a foreign visitor completes a purchase.",
    href: "#intl-cx",
    img: "/images/conversion-rate-optimization-hero.webp",
    alt: "Online checkout screen showing payment details and cart",
  },
  {
    num: "Area 06",
    title: "Multi-market operations",
    body: "Catalogue, pricing, stock, returns and reporting kept coherent as the number of markets grows.",
    href: "#intl-ops",
    img: "/images/international-ecommerce-expansion-operations.webp",
    alt: "Aerial view of a logistics hub handling multi-market eCommerce fulfilment",
  },
];

const marketplaces = [
  { name: "Amazon", href: "/amazon-agency/", note: "North America, Europe, Japan, Australia and the Gulf", img: "/images/international-ecommerce-expansion-marketplace-usa.webp", alt: "Warehouse worker moving pallets of marketplace orders with a pallet jack" },
  { name: "Walmart Marketplace", href: "/walmart-marketplace-management/", note: "United States, with Canada and Mexico expanding", img: "/images/international-ecommerce-expansion-marketplace-eu-warehouse.webp", alt: "Interior of a large European fulfilment warehouse" },
  { name: "Shopee", href: "/shopee-seller-management/", note: "Singapore, Malaysia, Philippines, Thailand, Vietnam", img: "/images/international-ecommerce-expansion-marketplace-apac-aisle.webp", alt: "Warehouse aisle with tall shelves of marketplace stock" },
  { name: "Lazada", href: "/lazada-seller-management/", note: "Southeast Asia, with strong brand-mall positioning", img: "/images/international-ecommerce-expansion-marketplace-sea-walkway.webp", alt: "Walkway between shelves in a marketplace fulfilment warehouse" },
  { name: "noon", href: "/noon-seller-management/", note: "UAE, Saudi Arabia and Egypt", img: "/images/international-ecommerce-expansion-marketplace-gcc-worker.webp", alt: "Warehouse worker organising marketplace stock on shelves" },
  { name: "Daraz", href: "/daraz-seller-management/", note: "Pakistan, Bangladesh, Sri Lanka and Nepal", img: "/images/international-ecommerce-expansion-marketplace-bangkok-night-market.webp", alt: "Aerial view of a busy night market in Bangkok" },
  { name: "Jumia", href: "/jumia-seller-management/", note: "Nigeria, Egypt, Morocco, Kenya and beyond", img: "/images/international-ecommerce-expansion-marketplace-cairo-bazaar.webp", alt: "Khan El-Khalili bazaar in Cairo" },
  { name: "AliExpress", href: "/aliexpress-seller-management/", note: "Cross-border selling into Europe, LATAM and Asia", img: "/images/international-ecommerce-expansion-marketplace-sao-paulo-avenue.webp", alt: "Paulista Avenue in Sao Paulo" },
  { name: "Alibaba.com", href: "/alibaba-b2b-agency/", note: "B2B and wholesale demand across every region", img: "/images/international-ecommerce-expansion-marketplace-europe-shop-night.webp", alt: "European city shop lit at night" },
];

const acquisition = [
  {
    title: "Paid search & shopping",
    items: [
      "Feed localised per market, not translated",
      "Break-even ROAS derived from landed cost",
      "Bid strategy split by market maturity",
    ],
  },
  {
    title: "Organic search",
    items: [
      "hreflang and market routing verified",
      "Category layer translated before product copy",
      "Local demand mapped in the local language",
    ],
  },
  {
    title: "Marketplace advertising",
    items: [
      "Campaign structure per marketplace and market",
      "Competitor and category targeting capped separately",
      "Rank and review velocity bought deliberately",
    ],
  },
  {
    title: "Paid social & creative",
    items: [
      "Creative reshot or recaptioned per market",
      "Local proof, local faces, local seasonality",
      "Landing experience matched to the ad language",
    ],
  },
];

const opsRows = [
  {
    wrong: "Catalogue drifting per market until nothing matches",
    instead: "One source of product truth, with market-specific fields layered on top of it",
  },
  {
    wrong: "Pricing set to the same shelf price everywhere",
    instead: "Priced to the same contribution margin per market after duty, carriage and fees",
  },
  {
    wrong: "Stock committed to whichever market ordered first",
    instead: "Allocation rules agreed in advance, by margin and by service commitment",
  },
  {
    wrong: "Returns handled ad hoc, and expensively",
    instead: "A returns route per market decided before launch, with the cost in the model",
  },
  {
    wrong: "Reporting that cannot separate markets",
    instead: "Contribution reported per market, per channel, on one page",
  },
  {
    wrong: "Every market needing the founder’s attention",
    instead: "A written playbook so market four is a process rather than a project",
  },
];

const markets = [
  { name: "United States", href: "/ecommerce-agency-usa/", note: "Scale, and the most crowded market to earn it in", img: "/images/international-ecommerce-expansion-market-usa.webp", alt: "United States city skyline along the waterfront representing the national eCommerce market" },
  { name: "United Kingdom", href: "/ecommerce-agency-uk/", note: "Next-day delivery as the baseline expectation", img: "/images/international-ecommerce-expansion-market-uk.webp", alt: "Aerial view of the City of London financial district" },
  { name: "Canada", href: "/ecommerce-agency-canada/", note: "Concentrated demand and cross-border US selling", img: "/images/international-ecommerce-expansion-market-canada.webp", alt: "CN Tower and the Toronto skyline at sunset" },
  { name: "Australia", href: "/ecommerce-agency-australia/", note: "Distance, freight economics and delivery experience", img: "/images/international-ecommerce-expansion-market-australia.webp", alt: "Sydney harbour and the Opera House representing the Australian market" },
  { name: "Europe", href: null, note: "Many countries, many rules, one logistics problem", img: "/images/international-ecommerce-expansion-market-europe.webp", alt: "Canal houses in Amsterdam representing the European eCommerce market" },
  { name: "Dubai & the Gulf", href: "/ecommerce-agency-dubai/", note: "Amazon and noon, Arabic experiences, cash on delivery", img: "/images/international-ecommerce-expansion-market-dubai.webp", alt: "Dubai skyline with high-rise towers beside the water" },
  { name: "MENA", href: null, note: "Localisation and payment trust across the region", img: "/images/international-ecommerce-expansion-market-mena.webp", alt: "Aerial view of the historic Cairo skyline" },
  { name: "Asia Pacific", href: null, note: "A fragmented region planned market by market", img: "/images/international-ecommerce-expansion-market-apac.webp", alt: "Aerial view of the Singapore skyline and Marina Bay" },
  { name: "Southeast Asia", href: null, note: "Shopee, Lazada, TikTok Shop and live commerce", img: "/images/international-ecommerce-expansion-market-southeast-asia.webp", alt: "Busy night market street scene in Thailand" },
  { name: "Latin America", href: null, note: "Marketplace-led growth and instalment payments", img: "/images/international-ecommerce-expansion-market-latam.webp", alt: "Aerial night view of the Sao Paulo skyline" },
];

const processSteps = [
  {
    num: "01",
    title: "Opportunity and constraint review",
    body: "What you sell, where demand exists for it, and what is actually stopping you serving it. If the constraint is in your home market, we say so and you keep the money.",
  },
  {
    num: "02",
    title: "Market shortlist and landed cost model",
    body: "Three to five candidate markets sized against duty, carriage, returns, payment fees and support load. The output is a ranked sequence with numbers attached.",
  },
  {
    num: "03",
    title: "Channel decision per market",
    body: "Storefront, marketplace or both — and in which order. This decides the localisation scope and most of the cost.",
  },
  {
    num: "04",
    title: "Build and localise",
    body: "URL model, translation, currency, payment methods, delivery promises, catalogue and feeds. Done once, properly, for the first market.",
  },
  {
    num: "05",
    title: "Launch and prove",
    body: "One market, run hard, measured on contribution rather than revenue. We are looking for a repeatable playbook, not a good month.",
  },
  {
    num: "06",
    title: "Write the playbook, then repeat",
    body: "Everything learned in market one is written down so market two is a process. If it is not cheaper and faster than the first, something was not written down.",
  },
];

const goals = [
  {
    goal: "Test demand abroad before committing",
    start: "Enter on a marketplace with a narrow, high-margin range. Low fixed cost, fast signal, and no localisation project.",
  },
  {
    goal: "Own the customer relationship in a new market",
    start: "Localised storefront first, marketplace second. Slower and more expensive, and the only route that builds a list and a brand.",
  },
  {
    goal: "Grow an existing market that has plateaued",
    start: "Usually a channel problem rather than a country problem. We would audit the current market before recommending a new one.",
  },
  {
    goal: "Reduce dependence on one country",
    start: "Sequence two markets with different demand cycles, and set an allocation rule before stock becomes contested.",
  },
  {
    goal: "Follow demand you can already see",
    start: "Traffic and orders from a country you do not serve properly is the cheapest signal in eCommerce. Serve it before it cools.",
  },
  {
    goal: "Enter B2B or wholesale abroad",
    start: (
      <>
        A different motion entirely — see{" "}
        <Link href="/b2b-wholesale-ecommerce-agency/">B2B and wholesale</Link> and{" "}
        <Link href="/alibaba-b2b-agency/">Alibaba.com</Link>.
      </>
    ),
  },
];

const whyChoose = [
  {
    title: "One team, not one agency per country",
    body: "The people running your Gulf marketplace and your UK storefront sit in the same team and report to the same numbers. Nobody is optimising a country in isolation.",
  },
  {
    title: "Landed cost before launch cost",
    body: "Duty, carriage, returns and payment fees are modelled before a market is recommended. It is the reason we sometimes talk clients out of a market.",
  },
  {
    title: "Regional marketplaces, not just the famous ones",
    body: "noon, Daraz, Jumia, Shopee and Lazada are managed in-house. Most agencies stop at Amazon and quietly outsource the rest.",
  },
  {
    title: "Reported per market on contribution",
    body: "A blended ROAS across six countries hides the two that are losing money. Every market reports separately, after landed cost.",
  },
];

const cases = [
  {
    tag: "Marketplace · Amazon · Europe",
    title: "VAC Vacuums",
    href: "https://dazzlecommerce.com/vac-vacuums-amazon-marketplace-europe/",
    body: "Electronics brand entering European Amazon marketplaces from a single-country base.",
    img: "/images/international-ecommerce-expansion-case-vac.webp",
    alt: "Vacuum cleaner being used in a living room",
  },
  {
    tag: "SEO · noon · Gulf",
    title: "Sabaa Beauty",
    href: "https://dazzlecommerce.com/sabaa-beauty-noon-seo-gcc/",
    body: "Arabic-language organic growth and noon marketplace performance across the Gulf.",
    img: "/images/international-ecommerce-expansion-case-sabaa.webp",
    alt: "Luxury skincare products arranged for a beauty campaign",
  },
  {
    tag: "CRO · BigCommerce · Australia",
    title: "Verdano Foods",
    href: "https://dazzlecommerce.com/verdano-foods-bigcommerce-cro-australia/",
    body: "Conversion work on a distant market where freight economics decide the offer.",
    img: "/images/international-ecommerce-expansion-case-verdano.webp",
    alt: "Packaged food products displayed on a retail shelf",
  },
];

const compareStyle: CSSProperties = {
  marginTop: "32px",
  background: "#fff",
  border: "1px solid var(--line)",
  borderRadius: "var(--radius)",
  overflow: "hidden",
  fontSize: "0.98rem",
};

const compareHeadStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  background: "var(--bg-soft)",
  borderBottom: "1px solid var(--line)",
};

const compareRowStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  borderTop: "1px solid var(--line)",
};

const compareHStyle: CSSProperties = {
  margin: 0,
  padding: "14px 18px",
  color: "var(--navy)",
};

const comparePStyle: CSSProperties = {
  margin: 0,
  padding: "14px 18px",
  color: "var(--muted)",
};

export default function InternationalEcommerceExpansionPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" id="intl-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <Pill icon="fa-solid fa-earth-americas">Strategic service</Pill>
              <h1>International eCommerce Expansion &amp; Cross-Border Growth</h1>
              <p className="lead">
                Entering a market is a fulfilment, tax and localisation decision before it is a
                marketing one. We plan the sequence, choose the channels, localise the experience
                and run the operating work — across ten markets and sixteen platforms, with one
                team and one set of numbers.
              </p>
              <ul className="check-list">
                <li>Market sequencing, not scattergun launches into five countries at once</li>
                <li>Landed cost and duty modelled before entry, not discovered after it</li>
                <li>One accountable team across storefront, marketplaces and paid media</li>
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
                src="/images/international-ecommerce-expansion-hero.webp"
                alt="Container port at sunrise representing cross-border eCommerce trade"
                width={2352}
                height={1008}
                priority
              />
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>10</strong>
              <span>markets supported</span>
            </div>
            <div className="stat">
              <strong>16</strong>
              <span>platforms and marketplaces</span>
            </div>
            <div className="stat">
              <strong>1</strong>
              <span>team, one set of numbers</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The cross-border growth challenge */}
      <section className="section" id="intl-challenge">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-triangle-exclamation" center>The challenge</Pill>
              <h2>The cross-border growth challenge</h2>
              <p>
                Most international launches do not fail on demand. They fail on the things nobody
                costed before the first order shipped — which is why cross border eCommerce is a
                landed-cost question before it is a marketing one.
              </p>
              <p>
                Market selection is the decision that determines how expensive everything after it
                will be.
              </p>
              <p>
                A second market multiplies your operational load immediately and your revenue
                eventually. The gap between those two moments is where expansions quietly stall.
              </p>
            </div>
            <div className="split-img">
              <Image
                src="/images/international-ecommerce-expansion-challenge.webp"
                alt="Reviewing compliance documents with a pen and notepad"
                width={1920}
                height={1280}
              />
            </div>
          </div>
          <ul className="check-list">
            <li>Landed cost, duty and returns were modelled optimistically or not at all.</li>
            <li>
              The store was translated but not localised — sizing, payment and delivery still read
              as foreign.
            </li>
            <li>A marketplace was opened before the catalogue was ready for it.</li>
            <li>Paid media was copied from the home market and the cost per acquisition doubled.</li>
            <li>Five markets were opened at once, so none of them got the attention to work.</li>
            <li>Nobody owns the second market, so it loses every week to the first one.</li>
          </ul>
          <p className="lead" style={{ marginTop: "1.5rem" }}>
            Expansion works when it is sequenced: one market proven, the playbook written down,
            then the next one entered faster and cheaper than the last.
          </p>
        </div>
      </section>

      {/* 3. Our international eCommerce strategy & expansion services */}
      <section className="section section-soft" id="intl-services">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>What we do</Pill>
          <h2>Our international eCommerce strategy &amp; expansion services</h2>
          <p className="lead">
            Six areas, run as one programme rather than six workstreams that meet at a monthly
            call. One international eCommerce strategy, with the sequencing written down.
          </p>
          <div className="card-grid">
            {areas.map((a) => (
              <article className="card" key={a.num}>
                <div className="hero-img" style={{ marginBottom: "16px" }}>
                  <Image src={a.img} alt={a.alt} width={1920} height={1280} />
                </div>
                <p className="card-num" style={{ fontSize: "1rem" }}>
                  {a.num}
                </p>
                <h3>
                  <Link href={a.href}>{a.title}</Link>
                </h3>
                <p>{a.body}</p>
              </article>
            ))}
          </div>
          <p className="lead" style={{ marginTop: "2rem" }}>
            Not every engagement needs all six. Most start with the first two and add the rest as
            the first market proves out.
          </p>
        </div>
      </section>

      {/* 4. Area 01 — Market research & market selection */}
      <section className="section" id="intl-research">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-layer-group" center>Area 01</Pill>
              <h2>Market research &amp; market selection</h2>
              <p>
                The cheapest decision in an expansion, and the one most often made on instinct.
                eCommerce market entry is won or lost here, before a single localisation decision
                is taken.
              </p>
              <p>
                We size the opportunity against what it will actually cost you to serve it. That
                means demand, competition and price position on one side, and duty, carriage,
                returns, payment fees and support load on the other — before anything is committed.
              </p>
              <p>What the selection work covers:</p>
              <ul className="check-list">
                <li>Demand sizing by category, not by country population</li>
                <li>Competitive price position against local incumbents</li>
                <li>Landed cost modelled per SKU, including duty and returns</li>
                <li>Marketplace versus storefront economics compared per market</li>
                <li>Regulatory, labelling and claim requirements identified early</li>
                <li>A ranked market sequence, not a list of possibilities</li>
              </ul>
            </div>
            <div className="split-img">
              <Image
                src="/images/international-ecommerce-expansion-research.webp"
                alt="Marking target markets with pins on a world map during expansion planning"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Area 02 — Localisation strategy */}
      <section className="section section-soft" id="intl-localization">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-layer-group" center>Area 02</Pill>
              <h2>Localisation strategy</h2>
              <p>
                Translation is the smallest part of localisation and the part most often mistaken
                for all of it.
              </p>
              <p>
                A shopper decides you are foreign within seconds, and mostly not from the
                language. It is the currency, the sizing convention, the payment methods you do
                not offer and a delivery promise that reads as a guess.
              </p>
              <p>What localisation covers:</p>
              <ul className="check-list">
                <li>Language and tone, translated by people not machines</li>
                <li>Local currency pricing with rounded, credible price points</li>
                <li>Sizing, units and specification conventions converted properly</li>
                <li>Payment methods the market actually uses, including instalments</li>
                <li>Delivery promise stated as a date, with duty handling explained</li>
                <li>Returns process a local customer would consider reasonable</li>
              </ul>
              <p>
                Where the URL model matters — subfolders, subdomains, hreflang and market routing
                — that is settled before the first market goes live, because the second market is
                when it becomes expensive. Our{" "}
                <Link href="/guides/shopify-seo/#ch-international">Shopify SEO guide</Link>{" "}
                covers the mechanics in full.
              </p>
            </div>
            <div className="split-img">
              <Image
                src="/images/international-ecommerce-expansion-localization.webp"
                alt="Laptop showing a world map while planning localised store experiences"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. Area 03 — Platforms & marketplace expansion */}
      <section className="section" id="intl-platforms">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Area 03</Pill>
          <h2>Platforms &amp; marketplace expansion</h2>
          <p className="lead">
            In most markets the fastest route in is a marketplace and the most profitable route is
            your own storefront. The plan usually uses both, in that order.
          </p>
          <div className="card-grid">
            {marketplaces.map((m) => (
              <article className="card platform-card" key={m.name}>
                <div className="hero-img" style={{ marginBottom: "16px" }}>
                  <Image src={m.img} alt={m.alt} width={1920} height={1280} />
                </div>
                <h3 className="platform-name">
                  <Link href={m.href}>{m.name}</Link>
                </h3>
                <p>{m.note}</p>
              </article>
            ))}
          </div>
          <p className="lead" style={{ marginTop: "2rem" }}>
            Storefront platforms are covered separately — see{" "}
            <Link href="/platforms/">every platform we support</Link>, or the{" "}
            <Link href="/marketplace-management-marketing/">marketplace management</Link> service
            if marketplaces are the whole programme.
          </p>
        </div>
      </section>

      {/* 7. Area 04 — International customer acquisition */}
      <section className="section section-soft" id="intl-acquisition">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Area 04</Pill>
          <h2>International customer acquisition</h2>
          <p className="lead">
            A campaign that works in your home market rarely transfers. Local competition,
            local cost and local search behaviour all differ, and the budget has to be planned
            against them. International eCommerce SEO is the slowest and cheapest half of
            this: hreflang, market-specific category demand and local currency signals decide
            whether the right country even sees you before a single ad runs.
          </p>
          <div className="card-grid card-grid-4">
            {acquisition.map((c) => (
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
          <p className="lead" style={{ marginTop: "2rem" }}>
            Budget is planned per market against local cost, then reported against contribution
            rather than a blended ROAS across countries.
          </p>
        </div>
      </section>

      {/* 8. Area 05 — Customer experience & conversion */}
      <section className="section" id="intl-cx">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-layer-group" center>Area 05</Pill>
              <h2>Customer experience &amp; conversion</h2>
              <p>
                A foreign visitor abandons for reasons a domestic visitor never encounters. Most
                of them are fixable and none of them are subtle.
              </p>
              <p>
                Conversion in a new market is usually a trust problem before it is a persuasion
                problem. The visitor cannot tell whether the delivery will arrive, what duty they
                will owe, or whether returning something is realistic from where they live.
              </p>
              <p>What we change first:</p>
              <ul className="check-list">
                <li>Duty and tax stated at the point of decision, not at checkout</li>
                <li>Delivery date and carrier named for the destination country</li>
                <li>Local payment methods, including the ones cards cannot replace</li>
                <li>Returns address and process that a local customer believes</li>
                <li>Local reviews and proof, not translated testimonials</li>
                <li>Support hours and contact routes in the local time zone</li>
              </ul>
              <p>
                The first market teaches you which of these matter most for your category. The
                second market gets them on day one.
              </p>
            </div>
            <div className="split-img">
              <Image
                src="/images/international-ecommerce-expansion-checkout.webp"
                alt="Laptop with glasses and payment cards representing an abandoned online checkout"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Area 06 — Multi-market operations */}
      <section className="section section-soft" id="intl-ops">
        <div className="container">
          <div>
            <Pill icon="fa-solid fa-layer-group" center>Area 06</Pill>
            <h2>Multi-market operations</h2>
            <p>
              The work that decides whether market three is easier than market two or harder.
              Duty, returns and international shipping for eCommerce orders sit here, because
              the landed cost and the return path are what make a second market profitable
              rather than merely live. The international eCommerce shipping model you pick —
              local carrier, consolidator or third-party logistics — also decides what you can
              honestly promise at checkout.
            </p>
          </div>
          <div style={compareStyle}>
            <div style={compareHeadStyle}>
              <h4 style={compareHStyle}>What usually goes wrong</h4>
              <h4 style={compareHStyle}>How we run it instead</h4>
            </div>
            {opsRows.map((r) => (
              <div key={r.wrong} style={compareRowStyle}>
                <h4 style={compareHStyle}>{r.wrong}</h4>
                <p style={comparePStyle}>{r.instead}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Markets we support */}
      <section className="section" id="intl-markets">
        <div className="container">
          <Pill icon="fa-solid fa-globe" center>Where we work</Pill>
          <h2>Markets we support</h2>
          <p className="lead">
            Ten markets we run programmes in. The five that are linked have a dedicated page
            covering the demand, the channels, the payment behaviour and the delivery
            expectations that market actually has; the rest are covered inside an expansion
            engagement.
          </p>
          <div className="card-grid">
            {markets.map((m) => (
              <article className="card platform-card" key={m.name}>
                <div className="hero-img" style={{ marginBottom: "16px" }}>
                  <Image src={m.img} alt={m.alt} width={1920} height={1280} />
                </div>
                <h3 className="platform-name">
                  {m.href ? <Link href={m.href}>{m.name}</Link> : m.name}
                </h3>
                <p>{m.note}</p>
              </article>
            ))}
          </div>
          <p className="lead" style={{ marginTop: "2rem" }}>
            Or see <Link href="/locations-we-serve/">every market we serve</Link> in one place.
          </p>
        </div>
      </section>

      {/* 11. Our international expansion process */}
      <section className="section section-soft" id="intl-process">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>How it works</Pill>
          <h2>Our international expansion process</h2>
          <p className="lead">
            Six steps. The first three happen before anything is committed, which is the point of
            them.
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
          <p className="lead" style={{ marginTop: "2rem" }}>
            Typical time from first conversation to a live, localised first market is eight to
            fourteen weeks depending on platform and catalogue size.
          </p>
        </div>
      </section>

      {/* 12. Expansion by business goal */}
      <section className="section" id="intl-goals">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Fit</Pill>
          <h2>Expansion by business goal</h2>
          <p className="lead">
            The right first move depends on what you are actually trying to do, and the answers
            differ more than most plans allow for.
          </p>
          <div style={compareStyle}>
            <div style={compareHeadStyle}>
              <h4 style={compareHStyle}>Your goal</h4>
              <h4 style={compareHStyle}>Where we would start</h4>
            </div>
            {goals.map((g) => (
              <div key={g.goal} style={compareRowStyle}>
                <h4 style={compareHStyle}>{g.goal}</h4>
                <p style={comparePStyle}>{g.start}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Why choose us for international expansion */}
      <section className="section section-soft" id="intl-why">
        <div className="container">
          <Pill icon="fa-solid fa-award">Why us</Pill>
          <h2>Why choose us for international expansion</h2>
          <p className="lead">
            Four things that are unusual about how this is staffed and reported.
          </p>
          <div className="card-grid card-grid-2">
            {whyChoose.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Cross-border case studies */}
      <section className="section" id="intl-cases">
        <div className="container">
          <Pill icon="fa-solid fa-chart-line" center>Evidence</Pill>
          <h2>Cross-border case studies</h2>
          <p className="lead">
            Three engagements where the market, not the channel, was the deciding variable.
          </p>
          <div className="card-grid">
            {cases.map((c) => (
              <article className="case-card" key={c.title}>
                <Image src={c.img} alt={c.alt} width={1920} height={1280} />
                <div className="case-body">
                  <p className="case-cat">{c.tag}</p>
                  <h3>
                    <Link href={c.href}>{c.title}</Link>
                  </h3>
                  <p>{c.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "2rem" }}>
            <Link href="/blog/">Read the blog</Link>
          </p>
        </div>
      </section>

      {/* 15. International expansion FAQs */}
      <section className="section section-soft" id="intl-faqs">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>Questions</Pill>
          <h2>International expansion FAQs</h2>
          <p className="lead" style={{ margin: "0 auto 2rem" }}>
            Sequencing, cost, tax and what we will not do.
          </p>
          <FaqAccordion faqs={faqs} />
          <p style={{ marginTop: "2rem" }}>
            Prefer to read before you talk to anyone? Our{" "}
            <Link href="/guides/international-expansion/">
              International eCommerce Expansion Guide
            </Link>{" "}
            is the eight-chapter version of how we think about this work, published in full.
          </p>
        </div>
      </section>

      {/* 16. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Thinking about your next market?</h2>
          <p className="lead">
            Start with the landed cost, not the marketing plan. Our free audit covers your
            current markets and models what a new one would actually cost to serve.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Book a free growth audit
            </Link>
            <Link
              className="btn"
              href="/locations-we-serve/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              See the markets we serve
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
