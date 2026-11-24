import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";

export const metadata: Metadata = {
  title: "Marketplace Management & Marketing Agency | Dazzle",
  description:
    "Marketplace management and marketing across Amazon, Walmart, eBay, Etsy, TikTok Shop and more: account operations, listings, SEO, advertising and expansion.",
  alternates: { canonical: "https://dazzlecommerce.com/marketplace-management-marketing/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/marketplace-management-marketing/",
    siteName: "Dazzle Commerce",
    title: "Marketplace Management & Marketing Agency | Dazzle",
    description:
      "Marketplace management and marketing across Amazon, Walmart, eBay, Etsy, TikTok Shop and more: account operations, listings, SEO, advertising and expansion.",
    images: [
      {
        url: "/images/marketplace-management-marketing-hero.webp",
        width: 1920,
        height: 1280,
        alt: "Aerial view of colourful shipping containers at a busy port",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketplace Management & Marketing Agency | Dazzle",
    description:
      "Marketplace management and marketing across Amazon, Walmart, eBay, Etsy, TikTok Shop and more: account operations, listings, SEO, advertising and expansion.",
  },
};

const faqs: Faq[] = [
  {
    q: "Which marketplaces do you manage?",
    a: "Twelve: Amazon, Walmart, eBay, Etsy and TikTok Shop across North America and globally; Daraz in South Asia; Shopee and Lazada in Southeast Asia; noon in the Gulf; Jumia across Africa; AliExpress for cross-border; and Alibaba.com for B2B wholesale. Each has its own page setting out exactly how we run it. If you sell somewhere not on that list, tell us — we will say honestly whether we already run it or would be learning it on your budget.",
  },
  {
    q: "Can you manage multiple marketplaces at once?",
    a: "Yes, and that is most of what we do. The value is not in running four accounts in parallel — anyone can do that. It is in one master catalog with per-channel variants, pricing set so your channels stop undercutting each other, stock allocated against a single forecast, and one contribution number per channel that your finance team can reconcile.",
  },
  {
    q: "Do you provide marketplace SEO?",
    a: (
      <>
        Yes, and it is a different discipline from web SEO. Marketplace search weighs
        relevance, information completeness, sales history, price competitiveness and seller
        performance together, and the keyword research has to come from how people search on
        that marketplace rather than on Google. Our web methodology is on the{" "}
        <Link href="/ecommerce-seo/">eCommerce SEO page</Link>; the marketplace application
        sits here and on each channel page.
      </>
    ),
  },
  {
    q: "Do you manage marketplace advertising?",
    a: (
      <>
        Yes — sponsored products, sponsored brands, display and the regional equivalents,
        structured by product line, margin band and objective. We measure on contribution
        after commission, fulfilment and returns rather than on ROAS alone, because a
        campaign can look excellent on ROAS and still lose money once the channel costs are
        in. General paid media sits on our <Link href="/ecommerce-ppc/">PPC page</Link>.
      </>
    ),
  },
  {
    q: "Can you optimize our product listings?",
    a: "Yes. Titles, bullets, descriptions, attributes, category placement, variations, imagery, infographics, video and enhanced content where the marketplace supports it. On most accounts we inherit, attribute completeness is the single highest-return fix available in the first ninety days, and it costs nothing but the work.",
  },
  {
    q: "Can you help us expand internationally?",
    a: "Yes, and we will usually argue for fewer markets than you have in mind. Adding a marketplace has a real operating cost — catalog work, content, advertising management, operational monitoring — and three channels done properly beats six done thinly every time. We model landed cost, localise the listings for real, and sequence the launches.",
  },
  {
    q: "Do you provide marketplace creative?",
    a: (
      <>
        Yes. Product imagery, specification graphics, lifestyle shots, scale references,
        video and enhanced content, built to each marketplace’s guidelines rather than
        reused from your own storefront. The full creative process and portfolio is on our{" "}
        <Link href="/ecommerce-creative-content/">creative &amp; content page</Link>.
      </>
    ),
  },
  {
    q: "Can you manage large catalogs?",
    a: "Yes. Bulk upload and update workflows, feed hygiene, variation and attribute management, and listing-health monitoring so suppressed or out-of-stock items surface as an exception list rather than being discovered a month later. Catalogs in the thousands of SKUs are normal work for us rather than an exception.",
  },
];

const stats = [
  { value: "12", label: "Marketplaces" },
  { value: "4", label: "Continents" },
  { value: "8", label: "Disciplines" },
  { value: "1", label: "Set of numbers" },
];

const trustBadges = [
  "Management and marketing under one team, because on marketplaces they are the same job",
  "Twelve marketplaces from North America to South Asia, the Gulf and Africa",
  "Measured on contribution after commission, fulfilment, ads and returns — not on GMV",
];

const problems = [
  {
    title: "Multiple accounts, no shared view",
    body: "Four seller dashboards, four logins, four definitions of a good week, and no way to compare them.",
  },
  {
    title: "Large catalogs nobody owns",
    body: "Thousands of SKUs across channels, each needing different attributes, and no one accountable for keeping them right.",
  },
  {
    title: "Inconsistent listings",
    body: "The same product described three different ways, with different images and different specs, on three marketplaces.",
  },
  {
    title: "Poor marketplace visibility",
    body: "Products that never surface in search or filtered browsing, because attributes and content were never completed.",
  },
  {
    title: "Rising advertising costs",
    body: "Cost per click climbing every quarter while campaign structure stays exactly as it was at launch.",
  },
  {
    title: "Twelve different algorithms",
    body: "What ranks on Amazon does not rank on Etsy, Shopee or Alibaba.com. One playbook cannot serve all of them.",
  },
  {
    title: "Different policies and requirements",
    body: "Category approvals, compliance rules and seller obligations that differ by marketplace and by country.",
  },
  {
    title: "Pricing and promotion complexity",
    body: "Vouchers, coupons, flash sales and shipping subsidies stacking into orders that lose money at volume.",
  },
  {
    title: "Weak product content",
    body: "Imagery and copy built for your own store, reused where the rules, sizes and buyer expectations are different.",
  },
  {
    title: "Operational issues found late",
    body: "Suppressed listings, stock-outs and rating drift discovered a month after they started costing money.",
  },
  {
    title: "Expansion that stalls",
    body: "A new market opened on optimism, with no localisation, no landed-cost model and no local demand research.",
  },
  {
    title: "Fragmented reporting",
    body: "Numbers that never reconcile against your accounts, so nobody can say which channel actually makes money.",
  },
];

type Pillar = { num: string; title: string; href?: string; body: string };

const pillars: Pillar[] = [
  {
    num: "01",
    title: "Marketplace Account Management",
    href: "/ecommerce-management/",
    body: "Day-to-day seller account operations, settings, compliance and the weekly rhythm that keeps accounts healthy.",
  },
  {
    num: "02",
    title: "Listings & Catalog Management",
    body: "Product data, listing creation, attributes, variations, categories and catalog hygiene at scale.",
  },
  {
    num: "03",
    title: "Marketplace SEO",
    href: "/ecommerce-seo/",
    body: "Keyword and attribute research built for marketplace search behaviour rather than for Google.",
  },
  {
    num: "04",
    title: "Marketplace Advertising",
    href: "/ecommerce-ppc/",
    body: "Sponsored products, brands and display, structured by product, margin band and objective.",
  },
  {
    num: "05",
    title: "Creative & Product Content",
    href: "/ecommerce-creative-content/",
    body: "Listing imagery, infographics, video and enhanced content built to each marketplace’s rules.",
  },
  {
    num: "06",
    title: "Marketplace Conversion Optimization",
    href: "/conversion-rate-optimization/",
    body: "Listing effectiveness, offer presentation, pricing position and the trust signals that close the sale.",
  },
  {
    num: "07",
    title: "Marketplace Operations",
    body: "Account health, promotions, catalog issues, inventory and seller-performance monitoring.",
  },
  {
    num: "08",
    title: "Marketplace Analytics & Growth",
    href: "/ecommerce-marketing/",
    body: "Contribution reporting by channel and product, plus the scaling and expansion strategy behind it.",
  },
];

type Marketplace = {
  region: string;
  name: string;
  icon: string;
  href: string;
  body: ReactNode;
  explore: string;
};

const marketplaces: Marketplace[] = [
  {
    region: "North America / Global",
    name: "Amazon",
    icon: "fa-solid fa-box",
    href: "/amazon-agency/",
    body: "Account and catalog management, Amazon SEO, Sponsored Products, Brands and Display, A+ content and Brand Store.",
    explore: "Explore Amazon services →",
  },
  {
    region: "North America",
    name: "Walmart",
    icon: "fa-solid fa-basket-shopping",
    href: "/walmart-marketplace-management/",
    body: "Seller Center operations, listing quality, Walmart Connect advertising and Pro Seller performance.",
    explore: "Explore Walmart services →",
  },
  {
    region: "North America / Global",
    name: "eBay",
    icon: "fa-solid fa-gavel",
    href: "/ebay-store-management/",
    body: "Listing management at scale, item specifics, Promoted Listings, pricing strategy and seller performance.",
    explore: "Explore eBay services →",
  },
  {
    region: "North America / Global",
    name: "Etsy",
    icon: "fa-solid fa-palette",
    href: "/etsy-shop-management/",
    body: (
      <>
        Etsy SEO, listing creative, shop branding, Etsy Ads and the shop-quality signals
        that drive placement. The method is published in full in our{" "}
        <Link href="/guides/etsy-seo/">guide to Etsy SEO</Link>.
      </>
    ),
    explore: "Explore Etsy services →",
  },
  {
    region: "North America / Global",
    name: "TikTok Shop",
    icon: "fa-solid fa-video",
    href: "/tiktok-shop-agency/",
    body: "Creator and affiliate programmes, shoppable video, LIVE commerce, product listings and Shop Ads.",
    explore: "Explore TikTok Shop services →",
  },
  {
    region: "South Asia",
    name: "Daraz",
    icon: "fa-solid fa-store",
    href: "/daraz-seller-management/",
    body: "Pakistan, Sri Lanka, Bangladesh, Nepal and Myanmar — store operations, campaigns and sponsored ads.",
    explore: "Explore Daraz services →",
  },
  {
    region: "Southeast Asia",
    name: "Shopee",
    icon: "fa-solid fa-bag-shopping",
    href: "/shopee-seller-management/",
    body: "Shop operations, campaigns and vouchers, Shopee Ads, Shopee Live and listing optimization.",
    explore: "Explore Shopee services →",
  },
  {
    region: "Southeast Asia",
    name: "Lazada",
    icon: "fa-solid fa-cart-flatbed",
    href: "/lazada-seller-management/",
    body: "Seller Center operations, Sponsored Solutions, campaigns and vouchers, LazLive and catalog quality.",
    explore: "Explore Lazada services →",
  },
  {
    region: "Middle East",
    name: "noon",
    icon: "fa-solid fa-sun",
    href: "/noon-seller-management/",
    body: "Saudi Arabia, the UAE and Egypt — Seller Lab operations, bilingual listings and Sponsored Products.",
    explore: "Explore noon services →",
  },
  {
    region: "Africa",
    name: "Jumia",
    icon: "fa-solid fa-earth-africa",
    href: "/jumia-seller-management/",
    body: "Nigeria, Kenya, Egypt, Morocco and West Africa — Seller Score, catalog, advertising and campaigns.",
    explore: "Explore Jumia services →",
  },
  {
    region: "Cross-Border",
    name: "AliExpress",
    icon: "fa-solid fa-globe",
    href: "/aliexpress-seller-management/",
    body: "Market localisation, landed-cost pricing, international catalog strategy, ads and promotions.",
    explore: "Explore AliExpress services →",
  },
  {
    region: "B2B / Wholesale",
    name: "Alibaba.com",
    icon: "fa-solid fa-industry",
    href: "/alibaba-b2b-agency/",
    body: "Supplier profile, wholesale catalog, search visibility, RFQ handling and buyer acquisition.",
    explore: "Explore Alibaba.com services →",
  },
];

const operationsChecklist = [
  "Seller account management — users, settings, notifications and compliance",
  "Storefront and brand-page management where the marketplace supports it",
  "Catalog maintenance, product creation and rejected-listing resolution",
  "Product updates — attributes, variations, imagery and specification changes",
  "Promotions, deals, vouchers and campaign registration across channels",
  "Pricing coordination so your channels stop undercutting each other",
  "Inventory and availability monitoring, including campaign stock cover",
  "Marketplace performance — seller ratings, defect rates and policy standing",
  "Operational issue monitoring with an exception list rather than a data dump",
  "Reporting on GMV, ad spend, account health and contribution by channel",
];

const visibilityFlow = [
  "Keyword & market research",
  "Product listing",
  "Content & creative",
  "Search visibility",
  "Conversion",
];

const visibilityGroups = [
  {
    title: "Research",
    items: [
      "Marketplace keyword research per channel and per language",
      "Competitor listing and price-position analysis",
      "Category, attribute and compliance requirement mapping",
    ],
  },
  {
    title: "Listing Build",
    items: [
      "Product titles written to each marketplace’s conventions and limits",
      "Bullets, descriptions and structured specifications",
      "Attributes completed in full, which drives filtered browsing",
      "Category placement, variations and catalog taxonomy",
    ],
  },
  {
    title: "Content & Creative",
    items: [
      "Main imagery meeting each platform’s guidelines",
      "Infographics and specification graphics",
      "Lifestyle imagery and scale references",
      "Video and enhanced content where the marketplace supports it",
    ],
  },
  {
    title: "Optimization",
    items: [
      "Search visibility tracked by keyword and product",
      "Content quality and completeness scored where exposed",
      "Conversion rate by product and by traffic source",
      "Continuous optimization cycles rather than a one-off rewrite",
    ],
  },
];

const paidFlow = ["Visibility", "Traffic", "Sales", "Efficiency", "Scale"];

const paidGroups = [
  {
    title: "Ad Formats",
    items: [
      "Sponsored product placement in search and browse",
      "Sponsored brand and storefront placement",
      "Display and off-platform retargeting where available",
    ],
  },
  {
    title: "Targeting",
    items: [
      "Keyword targeting with negative discipline",
      "Product and category targeting",
      "Audience and remarketing where the platform supports it",
    ],
  },
  {
    title: "Management",
    items: [
      "Campaign structure by product, margin band and objective",
      "Bid management by placement and competitive position",
      "Budget pacing built around the campaign calendar",
    ],
  },
  {
    title: "Measurement",
    items: [
      "Search-term analysis reviewed weekly, not monthly",
      "ACOS and TACOS read together rather than separately",
      "Performance judged on contribution after all channel cost",
    ],
  },
];

const expansionGroups = [
  {
    title: "Marketplace Selection",
    items: [
      "Channel selection by category demand rather than by marketplace size",
      "Competitive density and price-position analysis before you commit",
      "Operating-cost model per channel — the real cost of being there",
    ],
  },
  {
    title: "Market Research",
    items: [
      "Local demand, seasonality and category behaviour per country",
      "Buyer expectations on delivery, payment and returns",
      "Regulatory, certification and category-approval requirements",
    ],
  },
  {
    title: "Catalog Adaptation & Localization",
    items: [
      "Listing translation and genuine localisation, not machine output",
      "Sizing, voltage, compatibility and compliance stated per market",
      "SKU selection — not every product travels well",
      "Imagery and creative adapted to local buying context",
    ],
  },
  {
    title: "Pricing & Positioning",
    items: [
      "Landed-cost pricing including duty, shipping and payment fees",
      "Price position against local competitors, not against your home market",
      "Product positioning and range strategy per region",
      "Regional promotion calendars planned a quarter ahead",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit",
    body: "Account health, catalog, listings, marketplace SEO, advertising, content and operations reviewed together, per channel. You keep the document whether or not you hire us.",
  },
  {
    num: "02",
    title: "Research",
    body: "Keyword, competitor and price-position research per marketplace and market, plus a contribution model with commission, fulfilment, ads and returns in it.",
  },
  {
    num: "03",
    title: "Strategy",
    body: "A twelve-month plan with channel roles, catalog and pricing decisions, campaign calendars, named owners and target metrics per stage.",
  },
  {
    num: "04",
    title: "Setup & Optimize",
    body: "Catalog, listings and account health first, so advertising and campaigns land on channels that can actually convert the traffic.",
  },
  {
    num: "05",
    title: "Market & Manage",
    body: "Advertising, promotions, creative and day-to-day operations run together on a weekly rhythm rather than in separate workstreams.",
  },
  {
    num: "06",
    title: "Measure & Scale",
    body: "Contribution monitored weekly by channel, then scaling — more SKUs, more ad coverage, or a new marketplace once the current one is working.",
  },
];

const goalRows = [
  {
    goal: "Launch on a marketplace",
    help: "Account setup, catalog upload, category approval and listing build, with a launch plan per channel.",
  },
  {
    goal: "Increase product visibility",
    help: "Marketplace SEO — keyword research, attribute completion and content quality work.",
  },
  {
    goal: "Generate more sales",
    help: "Marketplace SEO plus advertising, sequenced so the listings are ready before the spend starts.",
  },
  {
    goal: "Improve conversion",
    help: "Listing and creative optimization — imagery, specifications, offer presentation and trust signals.",
  },
  {
    goal: "Improve ad efficiency",
    help: "Marketplace PPC restructure — separation by product and margin band, then pacing and negatives.",
  },
  {
    goal: "Manage large catalogs",
    help: "Catalog management — bulk operations, attribute completeness and listing-health monitoring.",
  },
  {
    goal: "Expand internationally",
    help: "Multi-marketplace strategy — channel selection, localisation, landed-cost pricing and regional execution.",
  },
  {
    goal: "Reduce operational workload",
    help: "Marketplace management — we run the accounts, you keep the ownership and the decisions.",
  },
  {
    goal: "Scale marketplace revenue",
    help: "Integrated management and marketing across every channel, on one catalog plan and one forecast.",
  },
];

const whyUs = [
  {
    title: "Management + Marketing Together",
    body: "Operations and growth in one team, because seller health and listing status control how much traffic your ads can even reach.",
  },
  {
    title: "Multi-Marketplace Expertise",
    body: "Twelve marketplaces run in-house, with specialists per channel rather than generalists rotating between accounts.",
  },
  {
    title: "Full-Funnel Approach",
    body: "Research, listing, content, search, advertising, conversion and operations treated as one chain, not seven quotes.",
  },
  {
    title: "Data-Driven Optimization",
    body: "Search terms, product-level conversion and platform data drive decisions rather than category folklore.",
  },
  {
    title: "Integrated Creative & Advertising",
    body: "The people making the listing assets and the people buying the placement work from the same brief.",
  },
  {
    title: "Regional Marketplace Knowledge",
    body: "Cash-on-delivery economics, campaign calendars, bilingual listings and seller-score mechanics, per region.",
  },
  {
    title: "Scalable Operations",
    body: "Add a channel or a market without rebuilding your team, your catalog process or your reporting.",
  },
  {
    title: "Transparent Reporting",
    body: "Contribution after commission, fulfilment, advertising and returns — less flattering, more useful.",
  },
];

type CaseStudy = {
  name: string;
  href?: string;
  subtitle: string;
  img: string;
  imgAlt: string;
  imgWidth: number;
  imgHeight: number;
  caption: string;
  challenge: string;
  services: string;
  strategy: string;
  result: string;
  metrics: { value: string; label: string }[];
};

const cases: CaseStudy[] = [
  {
    name: "Cadence Audio",
    subtitle: "Amazon brand — consumer audio, US and EU",
    img: "/images/marketplace-management-marketing-cadence-audio.webp",
    imgAlt: "Headphones photographed on a white surface",
    imgWidth: 1920,
    imgHeight: 1280,
    caption: "Cadence Audio listing creative",
    challenge:
      "Strong ad spend on a catalog where two thirds of listings had incomplete attributes and no enhanced content, so paid traffic hit pages that could not convert it.",
    services: "Listings and catalog management, marketplace SEO, creative, advertising.",
    strategy:
      "Rebuild the catalog and A+ content first, hold ad budget flat for a quarter, then restructure campaigns by margin band.",
    result:
      "Organic sessions up 2.9x, conversion rate from 8.4% to 13.1%, and ACOS down from 34% to 19% on the same annual spend.",
    metrics: [
      { value: "2.9x", label: "Organic sessions" },
      { value: "13.1%", label: "Conversion rate" },
      { value: "19%", label: "ACOS" },
    ],
  },
  {
    name: "Kitchenary",
    href: "/kitchenary-home-kitchen-shopify-usa/",
    subtitle: "Multi-marketplace seller — Amazon, Walmart, eBay",
    img: "/images/marketplace-management-marketing-kitchenary.webp",
    imgAlt: "Stainless steel kitchen utensils",
    imgWidth: 1920,
    imgHeight: 1280,
    caption: "Kitchenary catalog imagery",
    challenge:
      "Three marketplaces run by three freelancers with three price lists. Channels were undercutting each other and no one could say which was profitable.",
    services: "Marketplace management, analytics, advertising, catalog management.",
    strategy:
      "One master catalog with per-channel variants, one contribution model, and pricing set deliberately per channel rather than matched.",
    result:
      "Contribution up 34% on 9% higher GMV, with one channel deliberately shrunk and the freed budget moved to the two that paid.",
    metrics: [
      { value: "+34%", label: "Contribution" },
      { value: "3", label: "Channels aligned" },
      { value: "1", label: "Set of numbers" },
    ],
  },
  {
    name: "Aurelia Studio",
    subtitle: "International expansion — SEA and the Gulf",
    img: "/images/marketplace-management-marketing-aurelia-studio.webp",
    imgAlt: "A studio portrait for a fashion range",
    imgWidth: 1280,
    imgHeight: 1920,
    caption: "Aurelia localised listings",
    challenge:
      "A US apparel brand wanting six new marketplaces at once, with English listings, home-market sizing and no landed-cost model.",
    services: "Multi-marketplace strategy, localisation, catalog adaptation, advertising.",
    strategy:
      "Cut the launch list from six to three, localise those properly, build regional sizing and pricing, then scale into the rest.",
    result:
      "Three profitable channels within two quarters instead of six unprofitable ones, and return rate 22% below the brand’s domestic average.",
    metrics: [
      { value: "3", label: "Profitable channels" },
      { value: "2", label: "Quarters to break even" },
      { value: "-22%", label: "Return rate" },
    ],
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

const flowStyle: CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  alignItems: "center",
  marginTop: "28px",
};

const flowStepStyle: CSSProperties = {
  background: "#fff",
  border: "1px solid var(--line)",
  borderRadius: "999px",
  padding: "10px 18px",
  fontWeight: 700,
  color: "var(--navy)",
  fontSize: "0.95rem",
};

const flowArrowStyle: CSSProperties = {
  color: "var(--blue)",
  fontWeight: 800,
};

function Flow({ steps }: { steps: string[] }) {
  return (
    <div style={flowStyle} aria-label="Process flow">
      {steps.map((s, i) => (
        <span key={s} style={{ display: "inline-flex", alignItems: "center", gap: "10px" }}>
          <span style={flowStepStyle}>{s}</span>
          {i < steps.length - 1 ? <span style={flowArrowStyle}>→</span> : null}
        </span>
      ))}
    </div>
  );
}

export default function MarketplaceManagementMarketingPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <Pill icon="fa-solid fa-store">Marketplace Management &amp; Marketing</Pill>
              <h1>
                Marketplace Management &amp; Marketing Built to Grow Your Brand Across Leading
                Marketplaces
              </h1>
              <p className="lead">
                Account operations, catalog and listings, marketplace SEO, sponsored advertising,
                product creative and international expansion — run by one integrated team across
                twelve marketplaces on four continents, against one set of numbers. Marketplace
                management services, not a listings contractor: the same team owns the catalog,
                the advertising and the margin behind both.
              </p>
              <ul className="check-list">
                {trustBadges.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/contact/">
                  Discuss your marketplace strategy
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/marketplace-management-marketing-hero.webp"
                alt="Aerial view of colourful shipping containers at a busy port"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
          <div className="stat-row">
            {stats.map((s) => (
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
          <h2>The marketplace growth challenge</h2>
          <p className="lead">
            Selling on one marketplace is difficult. Managing growth across several is a
            different problem entirely — twelve of them below, and most sellers we meet are
            living with at least five. Multi marketplace management is the discipline that
            keeps one catalog, one price logic and one set of numbers across all of them, and
            a marketplace management agency earns its fee on exactly that.
          </p>
          <div className="card-grid card-grid-4">
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
      <section className="section section-soft" id="services">
        <div className="container">
          <Pill icon="fa-solid fa-globe" center>What We Do</Pill>
          <h2>Our marketplace management services &amp; marketing</h2>
          <p className="lead">
            Eight pillars covering the whole channel. Each links through to the specialist
            service behind it — the methodology lives there, the marketplace application lives
            here. Together they are what online marketplace management services should cover,
            rather than listings alone.
          </p>
          <div className="card-grid card-grid-4">
            {pillars.map((p) => (
              <article className="card" key={p.num}>
                <p className="card-num">{p.num}</p>
                <h3>
                  {p.href ? <Link href={p.href}>{p.title}</Link> : p.title}
                </h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "28px" }}>
            Running your own store as well? Our{" "}
            <Link href="/ecommerce-management/">eCommerce management</Link> and{" "}
            <Link href="/ecommerce-marketing/">eCommerce marketing</Link> services cover the
            storefront side, and <Link href="/platforms/">the platforms page</Link> lists
            everything we work on.
          </p>
        </div>
      </section>

      {/* 4. Where We Work */}
      <section className="section" id="marketplaces">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Where We Work</Pill>
          <h2>Marketplaces we manage</h2>
          <p className="lead">
            Twelve marketplaces, each with a dedicated team and its own page explaining exactly
            how we run it. Consumer marketplaces in seven regions, plus one B2B wholesale
            marketplace with an entirely different funnel.
          </p>
          <div className="card-grid">
            {marketplaces.map((m) => (
              <article className="card" key={m.name}>
                <h6 className="card-region">{m.region}</h6>
                <div className="card-icon" aria-hidden="true">
                  <i className={m.icon} aria-hidden="true" />
                </div>
                <h3>
                  <Link href={m.href}>{m.name}</Link>
                </h3>
                <p>{m.body}</p>
                <p style={{ marginTop: "1rem" }}>
                  <Link href={m.href}>{m.explore}</Link>
                </p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "28px" }}>
            Also selling on your own storefront? See{" "}
            <Link href="/shopify-agency/">Shopify</Link>,{" "}
            <Link href="/woocommerce-agency/">WooCommerce</Link>,{" "}
            <Link href="/bigcommerce-agency/">BigCommerce</Link> and{" "}
            <Link href="/adobe-commerce-agency/">Adobe Commerce</Link>, or{" "}
            <Link href="/platforms/">all sixteen platforms we support</Link>.
          </p>
        </div>
      </section>

      {/* 5. Operations */}
      <section className="section section-soft" id="operations">
        <div className="container">
          <Pill icon="fa-solid fa-compass" center>Operations</Pill>
          <h2>Marketplace account &amp; store management</h2>
          <p className="lead">
            The weekly operational work that most agencies leave to you. On marketplaces,
            seller health and listing status gate visibility directly, which makes operations
            commercial work rather than admin.
          </p>
          <ul className="check-list">
            {operationsChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Same operating model as our{" "}
            <Link href="/ecommerce-management/">eCommerce management</Link> service, applied
            across every marketplace account you run.
          </p>
        </div>
      </section>

      {/* 6. Visibility */}
      <section className="section" id="visibility">
        <div className="container">
          <Pill icon="fa-solid fa-box-open" center>Visibility</Pill>
          <h2>Marketplace listings, SEO &amp; content</h2>
          <p className="lead">
            These three are one workflow, not three services. Research feeds the listing, the
            listing carries the content, the content drives search placement, and placement is
            worth nothing if the listing does not convert.
          </p>
          <Flow steps={visibilityFlow} />
          <div className="card-grid card-grid-4" style={{ marginTop: "32px" }}>
            {visibilityGroups.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <ul className="check-list">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "28px" }}>
            Platform-specific implementation lives on each marketplace page. Our wider
            methodology sits on the <Link href="/ecommerce-seo/">eCommerce SEO</Link> and{" "}
            <Link href="/ecommerce-creative-content/">creative &amp; content</Link> pages.
          </p>
        </div>
      </section>

      {/* 7. Paid */}
      <section className="section section-soft" id="advertising">
        <div className="container">
          <Pill icon="fa-solid fa-bullseye" center>Paid</Pill>
          <h2>Marketplace advertising &amp; growth</h2>
          <p className="lead">
            Marketplace advertising buys placement next to purchase intent, which makes it
            efficient and easy to overspend on at the same time. The point is not more spend
            — it is spend that survives contribution.
          </p>
          <Flow steps={paidFlow} />
          <div className="card-grid card-grid-4" style={{ marginTop: "32px" }}>
            {paidGroups.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <ul className="check-list">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "28px" }}>
            Our general paid media methodology — Google, Shopping, Meta and Performance Max —
            sits on the <Link href="/ecommerce-ppc/">PPC &amp; paid advertising</Link> page.
            This section is about marketplace ad systems specifically.
          </p>
        </div>
      </section>

      {/* 8. Expansion */}
      <section className="section" id="expansion">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-map-location-dot" center>Expansion</Pill>
              <h2>Multi-marketplace management &amp; international expansion</h2>
              <p className="lead">
                This is the part most marketplace agencies do not do. Adding a marketplace is
                easy; adding one that earns its operating cost is a research, localisation and
                logistics decision before it is a listing decision.
              </p>
              <h3>Marketplace coverage map</h3>
            </div>
            <div className="split-img">
              <Image
                src="/images/marketplace-management-marketing-expansion.webp"
                alt="A designer working with a drawing tablet and colour swatches"
                width={1920}
                height={1280}
              />
            </div>
          </div>
          <div className="card-grid card-grid-4" style={{ marginTop: "32px" }}>
            {expansionGroups.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <ul className="check-list">
                  {g.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "28px" }}>
            We cover North America, South Asia, Southeast Asia, the Middle East, Africa and
            cross-border global selling. Each region has its own operational reality — cash on
            delivery in one, campaign calendars in another, bilingual listings in a third —
            and each gets planned separately rather than copied.
          </p>
        </div>
      </section>

      {/* 9. How It Works */}
      <section className="section section-soft" id="process">
        <div className="container">
          <Pill icon="fa-solid fa-arrow-trend-up" center>How It Works</Pill>
          <h2>Our online marketplace management services process</h2>
          <p className="lead">
            Six steps, applied the same way on every marketplace we run. The audit is the part
            that changes most by channel; everything after it follows the same discipline.
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
          <p style={{ marginTop: "28px" }}>
            The sequencing matters more than the tactics. Paying for traffic into a suppressed
            account or an incomplete catalog is the most common and most expensive mistake on
            marketplaces.
          </p>
        </div>
      </section>

      {/* 10. Fit */}
      <section className="section" id="goals">
        <div className="container">
          <Pill icon="fa-solid fa-cubes-stacked" center>Fit</Pill>
          <h2>Marketplace solutions by business goal</h2>
          <p className="lead">
            Start from the outcome you need this quarter. Most sellers need two of these, not
            nine.
          </p>
          <div style={compareStyle}>
            <div style={compareHeadStyle}>
              <h4 style={compareHStyle}>Business goal</h4>
              <h4 style={compareHStyle}>How we help</h4>
            </div>
            {goalRows.map((row) => (
              <div key={row.goal} style={compareRowStyle}>
                <h4 style={compareHStyle}>{row.goal}</h4>
                <p style={comparePStyle}>{row.help}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Why Us */}
      <section className="section section-soft" id="why-us">
        <div className="container">
          <Pill icon="fa-solid fa-award">Why Us</Pill>
          <h2>Why choose our marketplace management agency</h2>
          <p className="lead">
            One partner for marketplace management, marketing and expansion. Eight reasons you
            can check rather than take on trust.
          </p>
          <div className="card-grid card-grid-4">
            {whyUs.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Proof */}
      <section className="section" id="results">
        <div className="container">
          <Pill icon="fa-solid fa-chart-line" center>Proof</Pill>
          <h2>Marketplace results &amp; case studies</h2>
          <p className="lead">
            Three sellers in three different marketplace situations — a single-channel brand,
            a multi-marketplace seller and an international expansion. Full write-ups on the
            case studies page.
          </p>
          <div className="card-grid">
            {cases.map((c) => (
              <article className="case-card" key={c.name}>
                <Image
                  src={c.img}
                  alt={c.imgAlt}
                  width={c.imgWidth}
                  height={c.imgHeight}
                />
                <div className="case-body">
                  <p className="case-cat">{c.subtitle}</p>
                  <h3>
                    {c.href ? <Link href={c.href}>{c.name}</Link> : c.name}
                  </h3>
                  <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>{c.caption}</p>
                  <p>
                    <strong style={{ color: "var(--navy)" }}>Challenge — </strong>
                    {c.challenge}
                  </p>
                  <p>
                    <strong style={{ color: "var(--navy)" }}>Services — </strong>
                    {c.services}
                  </p>
                  <p>
                    <strong style={{ color: "var(--navy)" }}>Strategy — </strong>
                    {c.strategy}
                  </p>
                  <p>
                    <strong style={{ color: "var(--navy)" }}>Result — </strong>
                    {c.result}
                  </p>
                  <div className="case-metrics">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <strong>{m.value}</strong>
                        <span>{m.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="btn-row" style={{ marginTop: "32px" }}>
            <Link className="btn" href="/case-studies/">
              Read the full case studies
            </Link>
            <Link className="btn btn-outline" href="/portfolio/">
              See the portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 13. FAQs */}
      <section className="section section-soft">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>FAQs</Pill>
          <h2>Marketplace FAQs</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            Eight questions that come up in most marketplace conversations, including the ones
            worth asking any marketplace marketing agency before you sign. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link>.
          </p>
          <FaqAccordion faqs={faqs} />
          <p style={{ marginTop: "28px" }}>
            Prefer to read before you talk to anyone? Our{" "}
            <Link href="/guides/marketplace-selling/">
              Marketplace Selling &amp; Growth Guide
            </Link>{" "}
            is the eight-chapter version of how we think about this work, published in full.
          </p>
        </div>
      </section>

      {/* 14. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Ready to grow across the world’s leading marketplaces?</h2>
          <p className="lead">
            Book a marketplace audit. We will review your accounts, catalog, listings, search
            visibility, advertising and real contribution per channel, then tell you which
            channel to fix first and which one to add next — whether or not you hire us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/contact/">
              Discuss your marketplace strategy
            </Link>
            <Link
              className="btn"
              href="/platforms/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Explore marketplaces
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
