import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Pill } from "@/components/Pill";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Locations We Serve | Global eCommerce Agency Coverage",
  description:
    "Dazzle Commerce is a global eCommerce agency working across North America, Europe, the Gulf, Asia Pacific and Latin America. Choose your market below.",
  alternates: { canonical: "https://dazzlecommerce.com/locations-we-serve/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/locations-we-serve/",
    siteName: "Dazzle Commerce",
    title: "Locations We Serve | Global eCommerce Agency Coverage",
    description:
      "Dazzle Commerce is a global eCommerce agency working across North America, Europe, the Gulf, Asia Pacific and Latin America. Choose your market below.",
    images: [
      {
        url: "/images/locations-we-serve-hero.webp",
        width: 900,
        height: 614,
        alt: "World map illustrating international eCommerce markets served by Dazzle Commerce",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locations We Serve | Global eCommerce Agency Coverage",
    description:
      "Dazzle Commerce is a global eCommerce agency working across North America, Europe, the Gulf, Asia Pacific and Latin America. Choose your market below.",
  },
};

const faqs: Faq[] = [
  {
    q: "Do I need to be based near your office to work with you?",
    a: "No. Almost all of our work is remote and always has been. What matters is whether we can staff your business hours properly, which is why we are explicit about the five regions we cover well rather than claiming to serve everywhere.",
  },
  {
    q: "Can you help us expand into a new country?",
    a: "Yes, and it is one of the most common reasons brands come to us. Expansion work starts with a viability model — local CAC benchmarks, duty and landed cost, returns rates, marketplace fee structures and realistic ramp time. Roughly one in four of those models ends with us recommending against the market.",
  },
  {
    q: "Do you handle multi-currency and multi-language storefronts?",
    a: "Yes. Shopify Markets, WooCommerce multilingual setups and headless implementations with proper hreflang, canonical and currency handling. We also localise creative and copy with native writers rather than running your US assets through a translation tool.",
  },
  {
    q: "Which marketplaces do you support internationally?",
    a: "Amazon across US, UK, EU, Canada, Australia and the UAE; Walmart Marketplace in the US; eBay in the US, UK and Australia; Etsy globally; and Noon in the Gulf. If you need a marketplace outside that list we will tell you honestly whether we have real experience with it.",
  },
  {
    q: "How do you handle time zones for meetings and support?",
    a: "Your account team is assigned based on your market, not on who has capacity. UK and EU clients work with our European hub, APAC clients get early-morning or evening CT coverage plus in-region hours, and Gulf clients are covered by our UK team’s afternoon.",
  },
  {
    q: "Do you charge more for international clients?",
    a: "No. Pricing is based on scope, channel count and spend under management, not geography. Currency is billed in USD, GBP or AUD depending on your entity.",
  },
];

const locations = [
  {
    name: "United States",
    body: "The largest and most competitive eCommerce market in the world. National reach with regional execution across your own store, Amazon and Walmart.",
    cities: "Austin · New York · Los Angeles · Chicago · Miami",
    bullets: [
      "Amazon US Seller & Vendor Central",
      "Walmart Marketplace & Walmart Connect",
      "Regional targeting and shipping zones",
      "Shopify Plus and headless builds",
    ],
    href: "/ecommerce-agency-usa/",
    linkText: "See our United States page",
  },
  {
    name: "United Kingdom",
    body: "A mature market where next-day delivery is the baseline and margin discipline decides who grows. Strong marketplace habit alongside healthy direct demand.",
    cities: "London · Manchester · Birmingham · Leeds · Glasgow",
    bullets: [
      "Amazon UK and eBay management",
      "Next-day and click-and-collect expectations",
      "VAT and post-Brexit EU trade",
      "Shopify and WooCommerce builds",
    ],
    href: "/ecommerce-agency-uk/",
    linkText: "See our United Kingdom page",
  },
  {
    name: "Canada",
    body: "Concentrated demand, expensive geography and a very large neighbour. Cross-border US selling planned on landed cost rather than optimism.",
    cities: "Toronto · Montreal · Vancouver · Calgary · Ottawa",
    bullets: [
      "Canada and US cross-border commerce",
      "Zone-based shipping economics",
      "English and French experiences",
      "Amazon.ca and marketplace management",
    ],
    href: "/ecommerce-agency-canada/",
    linkText: "See our Canada page",
  },
  {
    name: "Australia",
    body: "Metro-concentrated demand and freight economics that punish flat national shipping. Delivery experience run as a growth channel rather than a cost line.",
    cities: "Sydney · Melbourne · Brisbane · Perth · Adelaide",
    bullets: [
      "Amazon AU and eBay management",
      "Zone and weight-based shipping logic",
      "Mobile-first merchandising",
      "Post-purchase retention programmes",
    ],
    href: "/ecommerce-agency-australia/",
    linkText: "See our Australia page",
  },
  {
    name: "Europe",
    body: "Not one market but twenty-seven. Country prioritisation, localisation and cross-border logistics planned before anything is launched.",
    cities: "Amsterdam · Berlin · Paris · Madrid · Milan",
    bullets: [
      "Per-market localisation and hreflang",
      "VAT, OSS and consumer law",
      "Local payment methods per country",
      "Amazon EU and regional marketplaces",
    ],
    href: "/international-ecommerce-expansion/",
    linkText: "See our Europe page",
  },
  {
    name: "Gulf & UAE",
    body: "High order values, premium expectations and cash on delivery. Arabic and English experiences built properly rather than translated at the surface.",
    cities: "Dubai · Abu Dhabi · Riyadh · Jeddah · Doha",
    bullets: [
      "Amazon and Noon marketplace growth",
      "Arabic and English storefronts",
      "COD, prepaid mix and trust signals",
      "Ramadan and regional trading calendar",
    ],
    href: "/ecommerce-agency-dubai/",
    linkText: "See our Gulf page",
  },
  {
    name: "India",
    body: "Enormous volume, thin margins and a returns problem. Cash on delivery, pincode serviceability and the festive calendar decide whether growth is profitable.",
    cities: "Mumbai · Delhi NCR · Bengaluru · Hyderabad · Pune",
    bullets: [
      "Amazon.in, Flipkart and D2C storefront growth",
      "RTO reduction and prepaid conversion",
      "Tier 2 and Tier 3 demand planned separately",
      "Festive and Diwali trading calendar",
    ],
    href: "/ecommerce-agency-india/",
    iconHref: "/ecommerce-agency-dubai/",
    linkText: "See our India page",
  },
  {
    name: "London & UK",
    body: "The most expensive traffic in the UK and the fastest delivery. Earned search, same-day and locker collection are where London brands pull ahead.",
    cities: "London · Manchester · Birmingham · Leeds · Bristol",
    bullets: [
      "eCommerce SEO and Shopify development",
      "Amazon.co.uk and eBay marketplace growth",
      "Same-day and locker collection as a conversion lever",
      "Returns policy priced deliberately",
    ],
    href: "/ecommerce-agency-london/",
    iconHref: "/ecommerce-agency-dubai/",
    linkText: "See our London page",
  },
  {
    name: "Middle East & North Africa",
    body: "A region, not a market. Country-by-country planning, Arabic localisation and the payment behaviour that decides what actually gets banked.",
    cities: "Cairo · Casablanca · Amman · Riyadh · Dubai",
    bullets: [
      "Market sequencing across the region",
      "Arabic localisation end to end",
      "COD, wallets and customer trust",
      "Regional marketplaces including Jumia",
    ],
    href: "/international-ecommerce-expansion/",
    linkText: "See our MENA page",
  },
  {
    name: "Asia Pacific",
    body: "The most fragmented commerce region in the world. Marketplace-led entry, social and live commerce, and localisation deep enough to feel local.",
    cities: "Singapore · Tokyo · Seoul · Sydney · Mumbai",
    bullets: [
      "A different platform leader per market",
      "Social and live commerce as a core channel",
      "Multi-market localisation",
      "Shopee, Lazada, Amazon and Daraz",
    ],
    href: "/international-ecommerce-expansion/",
    linkText: "See our Asia Pacific page",
  },
  {
    name: "Southeast Asia",
    body: "Marketplace-first and increasingly social-first. Campaign-day planning, live selling and COD handling across six distinct markets.",
    cities: "Jakarta · Bangkok · Manila · Ho Chi Minh City · Kuala Lumpur",
    bullets: [
      "Shopee, Lazada and TikTok Shop",
      "Campaign-day inventory and offers",
      "Live selling as an operating rhythm",
      "Cross-border versus local stock",
    ],
    href: "/international-ecommerce-expansion/",
    linkText: "See our Southeast Asia page",
  },
  {
    name: "Latin America",
    body: "Marketplace-led, mobile-first and instalment-driven. Spanish and Portuguese treated as separate markets, because customers treat them that way.",
    cities: "Sao Paulo · Mexico City · Bogota · Buenos Aires · Santiago",
    bullets: [
      "Marketplace-led market entry",
      "Instalment pricing and display",
      "Spanish and Portuguese localisation",
      "Customs, duty and delivery reality",
    ],
    href: "/international-ecommerce-expansion/",
    linkText: "See our Latin America page",
  },
];

const expertise = [
  {
    title: "Local search & market nuance",
    body: "Search behaviour is not universal. Spelling, seasonality, sizing conventions and even category names differ by market, so we build separate keyword sets rather than translating one.",
  },
  {
    title: "Currency, tax & landed cost",
    body: "Pricing that accounts for VAT, GST, duties and shipping so your margin survives contact with a customs form.",
  },
  {
    title: "Regional promotional calendars",
    body: "Black Friday matters in the US, Boxing Day in the UK and Canada, Click Frenzy in Australia, and Ramadan and White Friday in the Gulf. We plan to the right calendar.",
  },
  {
    title: "Compliance & consumer law",
    body: "GDPR, UK GDPR, CCPA, Australian Consumer Law and UAE e-commerce regulation shape what you can claim, collect and automate. We build inside those lines from the start.",
  },
];

const capabilities = [
  "Multi-marketplace management across Amazon, Walmart, eBay, Etsy and Noon",
  "International SEO with correct hreflang, canonical and currency handling",
  "Multi-currency Shopify Markets and WooCommerce multilingual architecture",
  "Cross-border 3PL, duty and landed-cost modelling before you commit to a market",
  "Localised creative and copy — not machine translation of your US assets",
  "Consolidated reporting so global performance rolls up into one honest number",
];

const whyGlobal = [
  {
    title: "Your hours, not ours",
    body: "Account teams are staffed across five time zones. Your weekly call happens in your working day, and urgent issues get a human inside your business hours.",
  },
  {
    title: "One team, every market",
    body: "Expanding into a new country does not mean a new agency, a new contract and a new onboarding. Same strategist, extended scope.",
  },
  {
    title: "Consolidated, comparable reporting",
    body: "Every market reports into one dashboard on the same definitions, so you can actually tell which one deserves the next dollar.",
  },
  {
    title: "Honest expansion advice",
    body: "We have told clients not to enter markets. Where the margin maths does not work after duties, returns and local CAC, you will hear it before you spend.",
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div>
            <h1>eCommerce Growth, Wherever You Sell</h1>
            <p className="lead">
              We serve eCommerce brands and marketplace sellers across the United States,
              United Kingdom, Canada, Australia and the UAE — with account teams staffed in
              your business hours and expertise in your local channels.
            </p>
            <div className="btn-row">
              <Link className="btn" href="/book-a-strategy-call/">
                Get Free Strategy Call
              </Link>
              <Link className="btn btn-outline" href="/contact/">
                Talk to a Specialist
              </Link>
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>5</strong>
              <span>Core markets</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                US, UK, Canada, Australia, UAE
              </p>
            </div>
            <div className="stat">
              <strong>5</strong>
              <span>Time zones covered</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                Account teams in your working hours
              </p>
            </div>
            <div className="stat">
              <strong>12</strong>
              <span>Marketplaces managed</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                Amazon, Walmart, eBay, Etsy, Noon
              </p>
            </div>
            <div className="stat">
              <strong>40%</strong>
              <span>Clients outside the US</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                International is core, not an afterthought
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Where We Serve */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-location-dot" center>
            Where We Serve
          </Pill>
          <h2>Ten markets we know properly</h2>
          <p className="lead">
            We would rather cover five regions deeply than claim thirty on a map. Each has
            staffed hours, local marketplace experience and clients we can introduce you to.
          </p>
          <div className="card-grid">
            {locations.map((loc) => (
              <article className="card" key={loc.name}>
                <Link
                  href={loc.iconHref ?? loc.href}
                  aria-label={loc.name}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    background: "var(--bg-soft)",
                    color: "var(--blue)",
                    fontSize: "1.5rem",
                    marginBottom: "12px",
                  }}
                >
                  <i className="fa-solid fa-globe" aria-hidden="true" />
                </Link>
                <h3>
                  <Link href={loc.iconHref ?? loc.href}>{loc.name}</Link>
                </h3>
                <p>{loc.body}</p>
                <p style={{ fontWeight: 700, color: "var(--navy)", marginTop: "1rem" }}>
                  {loc.cities}
                </p>
                <ul className="check-list">
                  {loc.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <Link className="read-more" href={loc.href} style={{ fontWeight: 700 }}>
                  {loc.linkText}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Local Marketing Expertise */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-bullseye" center>
            Local Marketing Expertise
          </Pill>
          <h2>Why a copy-paste global strategy fails</h2>
          <p className="lead">
            The mechanics of eCommerce are portable. The details that decide profitability are
            not.
          </p>
          <div className="card-grid card-grid-2">
            {expertise.map((e) => (
              <article className="card" key={e.title}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global eCommerce Capabilities */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-globe" center>
                Global eCommerce Capabilities
              </Pill>
              <h2>Built for brands selling across borders</h2>
              <p>
                Multi-market selling breaks most agency operating models. Ours was designed
                around it from the point we opened our second hub in 2021.
              </p>
              <ul className="check-list">
                {capabilities.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/book-a-strategy-call/">
                  Get Free Strategy Call
                </Link>
                <Link className="btn btn-outline" href="/services/">
                  See our services
                </Link>
              </div>
            </div>
          </div>
          <div style={{ marginTop: "2.5rem" }}>
            <Image
              src="/images/locations-we-serve-hero.webp"
              alt="World map illustrating international eCommerce markets served by Dazzle Commerce"
              width={1920}
              height={1280}
            />
          </div>
        </div>
      </section>

      {/* 5. Why Brands Choose Us Globally */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-award" center>
            Why Brands Choose Us Globally
          </Pill>
          <h2>What multi-market clients say matters most</h2>
          <div className="card-grid card-grid-2">
            {whyGlobal.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Location FAQs */}
      <section className="section">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>
            Location FAQs
          </Pill>
          <h2>Working with us from anywhere</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Selling in one market and eyeing another?</h2>
          <p className="lead">
            Book a free call and we will model the expansion honestly — local CAC, duties,
            returns, marketplace fees and realistic ramp time. Sometimes the answer is “not
            yet”.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/book-a-strategy-call/">
              Book Your Free Strategy Call
            </Link>
            <Link
              className="btn"
              href="/industries/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Explore Industries
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
