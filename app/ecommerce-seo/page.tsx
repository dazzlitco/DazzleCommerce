import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";

export const metadata: Metadata = {
  title: "eCommerce SEO Services & Agency | Dazzle Commerce",
  description:
    "eCommerce SEO services for Shopify, WooCommerce and marketplaces: technical SEO, category and product optimisation, content and schema.",
  alternates: { canonical: "https://dazzlecommerce.com/ecommerce-seo/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/ecommerce-seo/",
    siteName: "Dazzle Commerce",
    title: "eCommerce SEO Services & Agency | Dazzle Commerce",
    description:
      "eCommerce SEO services for Shopify, WooCommerce and marketplaces: technical SEO, category and product optimisation, content and schema.",
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce SEO Services & Agency | Dazzle Commerce",
    description:
      "eCommerce SEO services for Shopify, WooCommerce and marketplaces: technical SEO, category and product optimisation, content and schema.",
  },
};

const heroStats = [
  { value: "+97%", label: "Organic traffic growth" },
  { value: "+118%", label: "Non-brand sessions" },
  { value: "94%", label: "Rankings retained" },
  { value: "1.6s", label: "Mobile LCP achieved" },
];

const heroChecks = [
  "Store architecture built around query demand, not internal merchandising logic",
  "Technical, content and authority run together — not as three separate projects",
  "Reported on non-brand sessions and revenue, with rankings as a supporting metric",
];

const problems = [
  {
    title: "Architecture built for the warehouse",
    body: "Categories organised around how stock is managed rather than how people search. No amount of content fixes a structure that does not match demand.",
  },
  {
    title: "Thousands of near-duplicate pages",
    body: "Faceted navigation, variant URLs and pagination generating index bloat. Crawl budget goes to pages that will never rank while the ones that could stay undiscovered.",
  },
  {
    title: "Manufacturer descriptions on every PDP",
    body: "The same copy as forty other retailers. Nothing to rank on, nothing to differentiate, and no answer to the questions buyers actually have.",
  },
  {
    title: "A theme that fails Core Web Vitals",
    body: "Apps stacked on apps, render-blocking scripts and unoptimised imagery. Mobile LCP over four seconds caps rankings and conversion at the same time.",
  },
  {
    title: "All brand, no non-brand",
    body: "Traffic looks healthy until you segment it. Almost everything is people already searching your name — which paid was going to capture anyway.",
  },
  {
    title: "Migrations that lost the traffic",
    body: "A replatform or redesign without a redirect map. Six months of recovery for something that should have been a planning document.",
  },
];

const services = [
  {
    title: "eCommerce Keyword Research",
    body: "Commercial and long-tail demand mapped to the pages that should own it — including eCommerce internal search data, which is the cheapest keyword research available and the most consistently ignored.",
  },
  {
    title: "Technical SEO",
    body: "Crawlability, indexation, canonicals, speed and structured data.",
  },
  {
    title: "Category & Collection SEO",
    body: "The pages that carry most non-brand revenue, built to rank and convert.",
  },
  {
    title: "Product Page SEO",
    body: "Unique descriptions, specification depth and review signals at catalog scale.",
  },
  {
    title: "On-Page SEO",
    body: "Titles, headings, copy and internal signals aligned to search intent.",
  },
  {
    title: "Internal Linking",
    body: "Authority routed to the pages that make money, not just the homepage. Internal linking eCommerce sites properly means linking from the content that earns attention to the categories that earn revenue, which almost no store does by default.",
  },
  {
    title: "Site Architecture & URLs",
    body: "Hierarchy, faceted navigation rules and clean, stable URL patterns — within whatever your platform actually allows.",
    link: {
      href: "/guides/comparisons/best-ecommerce-platform-for-seo/",
      label: "your platform actually allows",
    },
  },
  {
    title: "Content Strategy",
    body: "Buying guides and comparison content that earn discovery-stage demand.",
  },
  {
    title: "Image & Media SEO",
    body: "Alt text, file naming, compression and next-gen formats across the catalog.",
  },
  {
    title: "eCommerce Schema Markup",
    body: "Product, offer, review, breadcrumb and FAQ markup that earns rich results.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "SEO Audit",
    body: "Crawl, index coverage, Core Web Vitals, architecture and content quality against the twelve months of Search Console data. Output is a ranked list of what is capping revenue, not a 90-page PDF.",
  },
  {
    num: "02",
    title: "Keyword & Competitor Research",
    body: "Demand mapped by intent and mapped to pages — which categories exist, which should, and which competitor is winning each cluster and why.",
  },
  {
    num: "03",
    title: "SEO Strategy",
    body: "A sequenced plan: what gets fixed, what gets built, what gets consolidated and in what order. Approved before anything is touched.",
  },
  {
    num: "04",
    title: "Technical & On-Page Optimization",
    body: "Architecture, canonicals, faceted rules, speed, schema, then titles, headings and copy on the pages that carry revenue.",
  },
  {
    num: "05",
    title: "Content & Authority Building",
    body: "Category copy, buying guides and comparison content, plus digital PR and partnerships where the category needs authority to compete.",
  },
  {
    num: "06",
    title: "Monitor & Optimize",
    body: "Monthly reporting on non-brand sessions and revenue by page group, with the backlog re-prioritised on what actually moved.",
  },
];

const funnel = [
  {
    title: "Discovery",
    body: "People with a problem, not yet a product in mind.",
    bullets: ["Informational and category content", "Non-brand searches"],
  },
  {
    title: "Consideration",
    body: "Comparing options, narrowing the shortlist.",
    bullets: ["Category pages", "Comparison content", "Buying guides"],
  },
  {
    title: "Purchase",
    body: "Ready to buy, deciding where from.",
    bullets: ["Product pages", "Transactional keywords", "Commercial searches"],
  },
  {
    title: "Retention",
    body: "Already bought, coming back or needing help.",
    bullets: ["Brand searches", "Product and support content", "Customer-focused content"],
  },
];

const scopeGroups = [
  {
    title: "Store Structure",
    items: ["Categories", "Subcategories", "Products", "Filters", "Navigation"],
  },
  {
    title: "Search Visibility",
    items: [
      "Product keywords",
      "Category keywords",
      "Long-tail keywords",
      "Commercial queries",
      "Brand and non-brand searches",
    ],
  },
  {
    title: "Technical Foundation",
    items: [
      "Crawlability",
      "Indexation",
      "Canonicals",
      "Site speed",
      "Mobile usability",
      "Structured data",
    ],
  },
  {
    title: "Content",
    items: ["Product descriptions", "Category copy", "Buying guides", "Supporting content"],
  },
];

const platforms = [
  {
    title: "Shopify & Shopify Plus",
    body: "Collection logic, faceted rules, theme speed, app bloat",
  },
  {
    title: "WooCommerce",
    body: "Taxonomy design, plugin conflicts, hosting and caching",
  },
  {
    title: "Amazon",
    body: "Listing optimisation, backend keywords, A+ and Brand Store",
  },
  {
    title: "Walmart Marketplace",
    body: "Item content quality, attributes and search relevance",
  },
  {
    title: "eBay",
    body: "Listing titles, item specifics and store category structure",
  },
  {
    title: "Etsy",
    body: "Tags, attributes, shop sections and long-tail discovery",
  },
];

const whyUs = [
  {
    title: "eCommerce-Specific SEO Expertise",
    body: "Faceted navigation, variant handling, feed-driven pages and marketplace search are daily problems for us, not edge cases we read about once.",
  },
  {
    title: "Revenue-Focused SEO",
    body: "We report non-brand sessions and revenue by page group. Rankings are a diagnostic, not the deliverable — a page-one keyword nobody buys from is not a win.",
  },
  {
    title: "Technical + Content + Authority",
    body: "All three run together. Content on a broken foundation does not rank, and a perfect foundation with thin content has nothing to rank with.",
  },
  {
    title: "Data-Driven Strategy",
    body: "Priorities come from demand data, crawl data and your own Search Console history — not from a generic best-practice checklist.",
  },
  {
    title: "Scalable Optimization",
    body: "Templates, rules and generation workflows that work across thousands of SKUs, not page-by-page hand editing that stops when we do.",
  },
  {
    title: "Transparent Reporting",
    body: "One monthly report showing what was shipped, what moved and what did not. Including the tests that failed.",
  },
  {
    title: "Continuous Improvement",
    body: "A backlog re-prioritised every month against what actually moved, rather than a fixed twelve-month plan written before we knew anything.",
  },
];

const cases = [
  {
    title: "Kitchenary",
    titleHref: "/kitchenary-home-kitchen-shopify-usa/",
    meta: "Home & Kitchen · Shopify",
    img: "/images/case-kitchenary.webp",
    imgAlt: "Dazzle Commerce paid media specialists reviewing campaign performance",
    problem:
      "340 collection pages organised around internal merchandising logic rather than search demand, on a theme with a 4.1 second mobile LCP. Almost all organic traffic was brand.",
    strategy:
      "Rebuilt the collection architecture around real query clusters, wrote unique category copy, shipped a Core Web Vitals pass and rebuilt internal linking to route authority to revenue pages.",
    results: [
      { value: "+97%", label: "Organic traffic" },
      { value: "+52%", label: "Conversion rate" },
      { value: "1.6s", label: "Mobile LCP" },
    ],
  },
  {
    title: "Luxury Comforts",
    titleHref: null,
    meta: "Home & Furniture · Magento to Shopify",
    img: "/images/ecommerce-seo-luxury-comforts.webp",
    imgAlt: "Luxury Comforts home and furniture eCommerce replatform",
    problem:
      "A 2,400-SKU catalog migrating off Adobe Commerce, with a previous replatform that had already cost the brand six months of organic traffic.",
    strategy:
      "Full URL inventory and redirect map before build, preserved URL patterns where they had earned traffic, and a staged crawl-and-fix programme through the first eight weeks post-launch.",
    results: [
      { value: "94%", label: "Rankings retained" },
      { value: "+61%", label: "Mobile revenue" },
      { value: "11 wk", label: "Migration time" },
    ],
  },
  {
    title: "Verdant Skincare",
    titleHref: null,
    meta: "Beauty & Cosmetics · Shopify",
    img: "/images/ecommerce-seo-verdant-skincare.webp",
    imgAlt: "Verdant Skincare beauty and cosmetics organic search programme",
    problem:
      "Strong brand recognition and almost no non-brand visibility. Manufacturer copy on every PDP and no content answering the ingredient and routine questions buyers were searching.",
    strategy:
      "Built a buying-guide and ingredient content programme, rewrote PDP copy at catalog scale with a templated approach, and added product and FAQ schema across the store.",
    results: [
      { value: "+118%", label: "Non-brand sessions" },
      { value: "+63%", label: "Organic revenue" },
      { value: "2.4x", label: "Ranking keywords" },
    ],
  },
];

const faqs: Faq[] = [
  {
    q: "How long does eCommerce SEO take to work?",
    a: "Technical fixes and on-page work on existing ranking pages often show inside 30–90 days. New category and content targets typically take 4–9 months to reach their position, longer in highly competitive categories or on a domain with little authority. Anyone quoting you a fixed timeline before seeing your Search Console data is guessing.",
  },
  {
    q: "What is different about SEO for an online store?",
    a: "Scale and structure. A store has thousands of URLs generated by filters, variants and pagination, which creates index bloat and crawl waste that content sites never face. Category and collection pages — not blog posts — carry most non-brand revenue. And the same product data has to work for Google, Amazon and your own on-site search at once.",
  },
  {
    q: "Do you write product descriptions for the whole catalog?",
    a: "At scale, yes — but templated and prioritised rather than hand-writing ten thousand pages. We rewrite the pages that carry revenue or have demand behind them properly, and use structured templates driven by your attribute data for the long tail. Where a catalog genuinely needs full rewriting we price that separately and tell you honestly what it costs.",
  },
  {
    q: "Will SEO replace our paid search spend?",
    a: "It should reduce it, not replace it. Once organic owns a cluster you can pull back paid on those terms and redeploy the budget — we did exactly that on one engagement and cut paid dependency 24%. But paid still covers new products, seasonal peaks and terms organic will never win. Running them together is the point of doing both.",
  },
  {
    q: "What does eCommerce SEO cost?",
    a: (
      <>
        Standalone SEO engagements typically run $2,500–$8,000/month depending on catalog
        size, competitiveness and whether content production is in scope. Inside a full{" "}
        <Link href="/ecommerce-management/">management engagement</Link> it is part of the
        wider fee. <Link href="/pricing/">Our pricing page</Link> explains how we scope it.
      </>
    ),
  },
  {
    q: "Can you handle a replatform without losing rankings?",
    a: "Yes, and it is planning rather than luck. A full URL inventory, a mapped redirect for every URL that has earned a link or a ranking, preserved patterns where they carry equity, and a staged crawl-and-fix programme for the first eight weeks after launch. On the last one we retained 94% of rankings.",
  },
  {
    q: "Do you build links?",
    a: "Where the category needs authority to compete, yes — through digital PR, supplier and partner relationships, and content genuinely worth citing. We do not buy links or use private networks. If your gap is technical or structural rather than authority, we will tell you that instead of selling you links you do not need.",
  },
  {
    q: "How do you report on SEO?",
    a: "Monthly, on non-brand sessions and revenue segmented by page group — categories, products, content — against the pre-engagement baseline. Rankings and visibility scores are included as diagnostics. The report also lists what shipped that month and what did not work.",
  },
  {
    q: "Should you hire an eCommerce SEO agency, an eCommerce SEO expert, or build in-house?",
    a: "Three different things, and the right answer depends on what is already in place. An eCommerce SEO expert working solo is the cheapest way to get a diagnosis and a plan, and the slowest way to ship template changes across ten thousand URLs. An eCommerce SEO company with a production team behind it is the opposite. In-house works once someone owns the roadmap full-time and you have development capacity to feed. We take the agency side of that on the assumption your developers are already busy — the eCommerce SEO services we run include the implementation, not just the recommendation.",
  },
];

export default function EcommerceSeoPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <Pill icon="fa-solid fa-magnifying-glass">eCommerce SEO</Pill>
              <h1>eCommerce SEO That Grows Revenue, Not Just Rankings</h1>
              <p className="lead">
                We build category, collection and product pages around what people actually
                search, then fix the technical foundation that stops them ranking. Measured on
                non-brand revenue, not on a keyword report.
              </p>
              <ul className="check-list">
                {heroChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Get a free SEO audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/ecommerce-seo-hero.webp"
                alt="Search analytics charts on a laptop screen"
                width={1600}
                height={1100}
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
          <h2>The eCommerce SEO challenge</h2>
          <p className="lead">
            Store SEO is not content SEO with products attached. The constraints are
            structural, technical and commercial — and usually all three at once.
          </p>
          <div className="card-grid">
            {problems.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our eCommerce SEO services */}
      <section className="section section-soft" id="services">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>What We Do</Pill>
          <h2>Our eCommerce SEO services</h2>
          <p className="lead">
            Ten workstreams. Which of them you need depends on the audit — most stores are
            losing revenue to two or three of these, not all ten, and we scope eCommerce SEO
            services to the ones that move your numbers.
          </p>
          <div className="card-grid">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>
                  {s.link ? (
                    <>
                      Hierarchy, faceted navigation rules and clean, stable URL patterns —
                      within whatever{" "}
                      <Link href={s.link.href}>{s.link.label}</Link> .
                    </>
                  ) : (
                    s.body
                  )}
                </p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "2rem" }}>
            SEO usually runs alongside <Link href="/ecommerce-ppc/">paid search</Link> and{" "}
            <Link href="/conversion-rate-optimization/">conversion optimization</Link> , or
            inside a full <Link href="/ecommerce-management/">eCommerce management</Link>{" "}
            engagement.
          </p>
        </div>
      </section>

      {/* 4. The Process */}
      <section className="section" id="process">
        <div className="container">
          <Pill icon="fa-solid fa-diagram-project" center>The Process</Pill>
          <h2>How our eCommerce SEO expert team works</h2>
          <p className="lead">
            Six stages. The last one runs monthly and feeds back into stages three through
            five.
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

      {/* 5. Funnel Coverage */}
      <section className="section section-soft" id="funnel">
        <div className="container">
          <Pill icon="fa-solid fa-compass" center>Funnel Coverage</Pill>
          <h2>SEO for every level of the eCommerce funnel</h2>
          <p className="lead">
            Most store SEO only ever targets the purchase stage. That is the most competitive,
            most expensive third of the demand — and the least defensible.
          </p>
          <div className="card-grid card-grid-4">
            {funnel.map((f) => (
              <article className="card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <ul>
                  {f.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Scope */}
      <section className="section" id="scope">
        <div className="container">
          <Pill icon="fa-solid fa-list-check" center>Scope</Pill>
          <h2>What an eCommerce SEO company should be optimizing</h2>
          <p className="lead">
            The actual assets on your store, not a list of abstract SEO tactics.
          </p>
          <div className="card-grid card-grid-4">
            {scopeGroups.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <ul>
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Platforms we support */}
      <section className="section section-soft" id="platforms">
        <div className="container">
          <Pill icon="fa-solid fa-screwdriver-wrench" center>Platforms</Pill>
          <h2>Platforms we support</h2>
          <p className="lead">
            Storefront and marketplace search, handled by the same team so they stop competing
            on your own brand terms.
          </p>
          <div className="card-grid">
            {platforms.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "2rem" }}>
            Also working on BigCommerce, Magento and Adobe Commerce.{" "}
            <Link href="/contact/">Tell us what you are on.</Link>
          </p>
        </div>
      </section>

      {/* 8. Why Us */}
      <section className="section" id="why-us">
        <div className="container">
          <Pill icon="fa-solid fa-award">Why Us</Pill>
          <h2>Why choose our eCommerce SEO agency</h2>
          <p className="lead">
            Seven things that separate store SEO from the generic kind, and from what a
            general-purpose eCommerce SEO company tends to hand over.
          </p>
          <div className="card-grid">
            {whyUs.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Proof — SEO results */}
      <section className="section section-soft" id="results">
        <div className="container">
          <Pill icon="fa-solid fa-chart-line" center>Proof</Pill>
          <h2>SEO results</h2>
          <p className="lead">
            Three engagements: client, problem, strategy, results. Measured against the twelve
            months before we started.
          </p>
          <div className="card-grid">
            {cases.map((c) => (
              <article className="card" key={c.title}>
                <Image src={c.img} alt={c.imgAlt} width={800} height={533} />
                <p className="case-cat">Client</p>
                <h3>
                  {c.titleHref ? (
                    <Link href={c.titleHref}>{c.title}</Link>
                  ) : (
                    c.title
                  )}
                </h3>
                <p>
                  <strong>{c.meta}</strong>
                </p>
                <p className="case-cat">Problem</p>
                <p>{c.problem}</p>
                <p className="case-cat">Strategy</p>
                <p>{c.strategy}</p>
                <p className="case-cat">Results</p>
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
          <div className="btn-row" style={{ marginTop: "2rem" }}>
            <Link className="btn" href="/case-studies/">
              See all case studies
            </Link>
            <Link className="btn btn-outline" href="/portfolio/">
              Browse the portfolio
            </Link>
          </div>
          <p style={{ marginTop: "2rem" }}>
            SEO outcomes vary considerably by category competitiveness, domain history and how
            much technical debt is in the way. We will give you an honest range for your
            situation on the call.
          </p>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="section">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>FAQs</Pill>
          <h2>eCommerce SEO FAQs</h2>
          <p className="lead">
            Eight questions that come up before most SEO engagements. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link> .
          </p>
          <FaqAccordion faqs={faqs} />
          <p style={{ marginTop: "2rem" }}>
            Prefer to read before you talk to anyone?{" "}
            <Link href="/guides/ecommerce-seo/">The Complete Guide to eCommerce SEO</Link>{" "}
            is the eight-chapter version of how we think about this work, published in full.
          </p>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Find out what is actually capping your organic revenue</h2>
          <p className="lead">
            Get a free SEO audit. We will crawl the store, review your Search Console history
            and come back with the three structural fixes worth doing first — whether or not
            you hire us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Get a free SEO audit
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
