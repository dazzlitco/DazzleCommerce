"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

/*
 * eCommerce Creative Content — /ecommerce-creative-content/
 * Live source: https://dazzlecommerce.com/ecommerce-creative-content/ (fetched 2026-11-23).
 * Full word-for-word extraction: clone-plan/ecommerce-creative-content-extraction.md
 *
 * Client component because the "Featured creative work" asset-type filter must
 * work client-side (same approach as app/portfolio/page.tsx, so this file does
 * not export metadata — title/description are recorded in the extraction file).
 *
 * Live quirks reproduced here:
 * - Space before the comma in the section 3 closing paragraph ("paid advertising ,").
 * - Space before the period in the FAQ intro ("our full FAQ page .").
 * - Curly apostrophe in "this product’s margin" (Performance section, ROAS card).
 * - Section 5 intro: "Every tile below is a live image slot — the search terms are
 *   there so real work can replace them." (the live tiles are generic stock images).
 * - The live portfolio grid repeats the same 6 projects across 7 tab panels with a
 *   different stock image per panel; here one grid is filtered client-side instead,
 *   with one matching image per project.
 * - Only Nutriblend and Kitchenary have links in the portfolio grid on the live page;
 *   the other four brand names are plain text.
 * - The "Our pricing page" link inside FAQ 4's answer is rendered as plain text
 *   because the shared FaqAccordion renders answers as plain strings; the words are
 *   verbatim and /pricing/ is linked from the hero and the final CTA.
 */

const faqs: Faq[] = [
  {
    q: "Do you shoot photography, or only design?",
    a: "Both, depending on the engagement. We art-direct and produce product and lifestyle photography, and we also do image enhancement and retouching on existing assets. For large catalogs we will often build a repeatable shooting spec your team or a local studio can execute, because flying a photographer in for every new SKU is not a sustainable model.",
  },
  {
    q: "How much creative do we actually need for paid social?",
    a: "More than most brands expect. A Meta account spending $20k/month typically needs 8–15 genuinely distinct concepts per month — not resizes — to avoid fatigue. That is the single most common reason paid social plateaus, and it is a production capacity problem rather than a targeting problem.",
  },
  {
    q: "Can you work with our existing brand guidelines?",
    a: "Yes, and we prefer to. If guidelines exist we work inside them and flag where a rule is genuinely costing performance so you can decide. If they do not exist, we can build a lightweight system covering the things that actually matter for eCommerce — type, colour, imagery treatment and layout rules for the templates that repeat.",
  },
  {
    q: "What does creative & content cost?",
    a: "Creative retainers typically run $2,500–$9,000/month depending on volume, whether photography and video are in scope, and how many channels you are feeding. Project work — a catalog content rewrite, a launch campaign, a marketplace listing set — is quoted separately. Our pricing page explains the approach.",
  },
  {
    q: "How is this different from hiring a design agency?",
    a: "A design agency optimises for the work looking right. We optimise for what it does to CTR, conversion rate and ROAS, because the same team is buying the media and running the store. That changes the volume we produce, the way we brief, and our willingness to kill an attractive concept that lost its test.",
  },
  {
    q: "Who writes the product descriptions?",
    a: "Our copywriters, working from your specs, review data and the search terms people actually use. At catalog scale we build a structured template driven by your attribute data for the long tail, and write the revenue-carrying pages properly by hand. We will tell you honestly which SKUs justify which treatment.",
  },
  {
    q: "Do you produce video?",
    a: "Short-form product video, ad cuts, animation and motion graphics, yes — the formats paid social and PDPs consume. Full brand film production with a crew and location is outside what we do, and we would point you to a production company rather than pretend otherwise.",
  },
  {
    q: "How quickly can you turn creative around?",
    a: "A standard ad concept round is 5–7 business days from brief to first review. Product content at catalog scale depends on volume and how complete your attribute data is. Rush work is possible and we will say what it costs rather than quietly deprioritising something else to absorb it.",
  },
];

const heroStats = [
  { value: "+41%", label: "Best CR lift from PDP creative" },
  { value: "6.1x", label: "Blended ROAS on tested creative" },
  { value: "340", label: "Collection pages rewritten" },
  { value: "-27%", label: "Return rate cut with fit content" },
];

const heroChecks = [
  "Built by a team that also runs the ads and the store the creative lands on",
  "Volume production, because one hero asset a quarter cannot feed paid social",
  "Every concept tested and reported, including the ones that lost",
];

const challenge = [
  {
    title: "Products do not stand out",
    body: "The same manufacturer photography as forty other retailers, on a page that gives a shopper no reason to buy it from you.",
  },
  {
    title: "Inconsistent brand presentation",
    body: "The store, the ads, the emails and the marketplace listings each look like a different company, because three vendors made them.",
  },
  {
    title: "Weak product descriptions",
    body: "Spec sheets copied from the supplier. Nothing about who it is for, what it solves, or the objection that stops the purchase.",
  },
  {
    title: "Low-performing ad creative",
    body: "A handful of assets, all variations on one idea, fatiguing at the same time and taking CPMs up with them.",
  },
  {
    title: "Generic marketplace listings",
    body: "Amazon and Walmart images that meet the technical spec and communicate nothing, in a grid where the image is the entire pitch.",
  },
  {
    title: "Content that does not communicate value",
    body: "Beautiful assets that never say what the product does better, or why it costs what it costs.",
  },
  {
    title: "Constant demand for campaign assets",
    body: "Paid social consumes creative faster than any brand studio can produce it, so the calendar drives the work rather than performance.",
  },
  {
    title: "Creative not optimised per channel",
    body: "One asset resized for eight placements. It fits everywhere and works nowhere, because each channel rewards a different hook.",
  },
];

const services = [
  {
    title: "Product Content",
    body: "Product descriptions, category content and merchandising copy at catalog scale.",
  },
  {
    title: "Product Imagery & Visuals",
    body: "Product imagery, lifestyle visuals and image enhancement, produced or art-directed. Shot to the specs each channel enforces — see product photography for scope, process and pricing.",
    link: { href: "/ecommerce-product-photography/", label: "product photography" },
  },
  {
    title: "Performance Ad Creative",
    body: "Creative for Google, Meta, TikTok and the other paid channels, built for testing.",
  },
  {
    title: "Social Media Creative",
    body: "Organic and paid social graphics, carousels and content that suits each platform.",
  },
  {
    title: "Email Creative",
    body: "Campaign graphics, promotional assets and email content that matches the flow.",
  },
  {
    title: "Marketplace Content",
    body: "Amazon, Walmart and marketplace listing images, A+ content and gallery sequences.",
  },
  {
    title: "eCommerce Copywriting",
    body: "Landing pages, campaigns, promotional copy and brand messaging that converts.",
  },
  {
    title: "Video & Motion Creative",
    body: "Short-form product video, ad cuts, animation and motion assets for paid social.",
  },
];

const journey = [
  {
    stage: "Discover",
    items: ["Social creative", "Display ads", "Video", "Awareness content"],
  },
  {
    stage: "Consider",
    items: ["Product imagery", "Buying guides", "Category content", "Product education"],
  },
  {
    stage: "Convert",
    items: ["Product page creative", "Landing pages", "Ad creative", "Promotional content"],
  },
  {
    stage: "Retain",
    items: ["Email creative", "Loyalty campaigns", "Product launches", "Cross-sell content"],
  },
];

const channels = [
  { name: "eCommerce Store", body: "Product imagery, copy, banners, landing pages" },
  { name: "Google Ads", body: "Display & Shopping assets" },
  { name: "Meta", body: "Ads, video, carousels, social creative" },
  { name: "TikTok", body: "Short-form performance creative" },
  { name: "Amazon", body: "Listing images, A+ content, copy" },
  { name: "Email", body: "Campaign graphics & copy" },
  { name: "Social", body: "Posts, reels, promotional assets" },
];

const assetTiles = [
  {
    label: "Product images",
    img: "/images/ecommerce-creative-content-product-images.webp",
    alt: "A product styling set with studio lighting",
  },
  {
    label: "Product descriptions",
    img: "/images/ecommerce-creative-content-product-descriptions.webp",
    alt: "Typing on a laptop at a table",
  },
  {
    label: "Ad banners",
    img: "/images/ecommerce-creative-content-ad-banners.webp",
    alt: "Design books open beside a tablet and stylus",
  },
  {
    label: "Social graphics",
    img: "/images/ecommerce-creative-content-social-graphics.webp",
    alt: "A laptop, phone and payment card together",
  },
  {
    label: "Short-form videos",
    img: "/images/ecommerce-creative-content-short-form-videos.webp",
    alt: "A smartphone set up to film",
  },
  {
    label: "Landing page creative",
    img: "/images/ecommerce-creative-content-landing-page-creative.webp",
    alt: "A laptop on a wooden table",
  },
  {
    label: "Email graphics",
    img: "/images/ecommerce-creative-content-email-graphics.webp",
    alt: "A laptop open on a white table",
  },
  {
    label: "Marketplace listing images",
    img: "/images/ecommerce-creative-content-marketplace-listing-images.webp",
    alt: "An artist working on a digital tablet in a studio",
  },
  {
    label: "Infographics",
    img: "/images/ecommerce-creative-content-infographics.webp",
    alt: "A laptop being used for design work",
  },
  {
    label: "Promotional banners",
    img: "/images/ecommerce-creative-content-promotional-banners.webp",
    alt: "A designer reviewing work on screen",
  },
  {
    label: "Category content",
    img: "/images/ecommerce-creative-content-category-content.webp",
    alt: "Reviewing figures on a computer screen",
  },
  {
    label: "Buying guides",
    img: "/images/ecommerce-creative-content-buying-guides.webp",
    alt: "A large monitor on a wooden studio desk",
  },
];

const processSteps = [
  {
    title: "Discover",
    body: "Brand, product, margin structure and the audience you are actually selling to. Plus what has already been tried and what the previous creative failed to say.",
  },
  {
    title: "Research",
    body: "Competitor creative, review mining for the language customers use themselves, and the objections that show up in support tickets.",
  },
  {
    title: "Concept",
    body: "Distinct angles rather than variations on one idea — different hooks, different value propositions, different formats.",
  },
  {
    title: "Create",
    body: "Production at volume, built per placement rather than resized. Copy, design, photography and motion in one workflow.",
  },
  {
    title: "Review",
    body: "One consolidated review round against brand rules and platform specs, so feedback arrives together rather than in fragments.",
  },
  {
    title: "Test & Optimize",
    body: "Live testing with a documented result either way, and the winning angles fed back into the next concept round.",
  },
];

const testVariables = [
  "Hooks",
  "Headlines",
  "Offers",
  "CTAs",
  "Product positioning",
  "Images",
  "Video concepts",
  "Formats",
  "Messaging",
  "Audience & creative combinations",
];

const measured = [
  { name: "CTR", body: "Does the creative earn the click at an acceptable cost?" },
  { name: "Engagement", body: "Does it hold attention long enough to communicate the value?" },
  { name: "Conversion Rate", body: "Does the promise it makes survive the landing page?" },
  { name: "CPA", body: "What did the acquisition actually cost once it converted?" },
  { name: "ROAS", body: "And was it profitable against this product’s margin?" },
];

const goals = [
  { goal: "Launch a Product", detail: "Launch campaign + product creative" },
  { goal: "Increase Ad Performance", detail: "Performance creative + testing" },
  { goal: "Improve Product Sales", detail: "Product imagery + copy" },
  { goal: "Improve Conversion", detail: "CRO-focused page creative" },
  { goal: "Strengthen Brand", detail: "Consistent visual & content system" },
  { goal: "Enter a Marketplace", detail: "Marketplace listing content" },
  { goal: "Increase Engagement", detail: "Social & video content" },
  { goal: "Improve Retention", detail: "Email & lifecycle creative" },
];

const whyChoose = [
  {
    title: "eCommerce-Focused Creative",
    body: "Product grids, listing specs, feed images and PDP layouts are our normal constraints. A brand studio that mostly does campaigns treats those as an afterthought.",
  },
  {
    title: "Performance-Driven Thinking",
    body: "Every asset is briefed against a metric. If we cannot say what a concept is supposed to move, it does not get produced.",
  },
  {
    title: "Brand + Conversion Balance",
    body: "Creative that converts without eroding the brand, and brand work that does not quietly cost you conversion rate. Both constraints, one team.",
  },
  {
    title: "Multi-Channel Expertise",
    body: "Built per placement — Meta, TikTok, Shopping, Amazon and email each get an asset designed for them, not one asset resized eight ways.",
  },
  {
    title: "Data-Informed Creative",
    body: "Concepts come from review mining, search queries and previous test results, so the next round starts ahead of where the last one finished.",
  },
  {
    title: "Scalable Content Production",
    body: "Systems and templates that produce volume without every asset needing a designer, which is what paid social actually requires.",
  },
  {
    title: "Integrated Marketing Team",
    body: "The people making the creative sit next to the people buying the media and optimising the page it lands on.",
  },
  {
    title: "Consistent Brand Execution",
    body: "One system applied across store, ads, email and marketplace, so the brand looks like one company everywhere a customer meets it.",
  },
];

type AssetFilter = "All" | "Product" | "Ads" | "Social" | "Email" | "Marketplace" | "Video";

const filters: AssetFilter[] = ["All", "Product", "Ads", "Social", "Email", "Marketplace", "Video"];

type Project = {
  name: string;
  href?: string;
  project: string;
  objective: string;
  deliverables: string;
  channels: string;
  result: string;
  img: string;
  imgAlt: string;
  tags: Exclude<AssetFilter, "All">[];
};

const projects: Project[] = [
  {
    name: "Nutriblend",
    href: "/nutriblend-supplements-retention-uk/",
    project: "Subscription launch campaign",
    objective: "Convert one-time buyers to subscribers",
    deliverables: "PDP creative, email graphics, paid social video, landing page",
    channels: "Meta, Email, Store",
    result: "+46% subscription rate",
    img: "/images/ecommerce-creative-content-nutriblend.webp",
    imgAlt: "Protein powder containers beside a blender",
    tags: ["Product", "Ads", "Email"],
  },
  {
    name: "Cadence Audio",
    project: "PDP & A+ content rebuild",
    objective: "Lift conversion on a considered-purchase product",
    deliverables: "Product imagery, feature infographics, A+ modules, spec copy",
    channels: "Amazon, Store",
    result: "+41% conversion rate",
    img: "/images/ecommerce-creative-content-cadence-audio.webp",
    imgAlt: "Earphones on a white background",
    tags: ["Product", "Marketplace"],
  },
  {
    name: "Men’s grooming brand",
    project: "Paid social creative system",
    objective: "Stop creative fatigue at scale",
    deliverables: "48 ad concepts across 6 angles, video cuts, static variants",
    channels: "Meta, TikTok",
    result: "6.1x blended ROAS",
    img: "/images/ecommerce-creative-content-grooming-brand.webp",
    imgAlt: "A grooming tool on a wooden board",
    tags: ["Ads", "Social", "Video"],
  },
  {
    name: "Kitchenary",
    href: "/kitchenary-home-kitchen-shopify-usa/",
    project: "Category content programme",
    objective: "Earn non-brand organic and improve on-page conversion",
    deliverables: "340 collection pages, buying guides, category imagery",
    channels: "Store, Organic",
    result: "+97% organic traffic",
    img: "/images/ecommerce-creative-content-kitchenary.webp",
    imgAlt: "Three stainless steel pans on white tiles",
    tags: ["Product"],
  },
  {
    name: "Aurelia Studio",
    project: "Fit & sizing content",
    objective: "Reduce returns driven by sizing uncertainty",
    deliverables: "Model measurement imagery, fit guides, PDP modules",
    channels: "Store",
    result: "-27% return rate",
    img: "/images/ecommerce-creative-content-aurelia-studio.webp",
    imgAlt: "A model posing in a sleeveless top",
    tags: ["Product"],
  },
  {
    name: "Harvest Table",
    project: "Subscription box launch assets",
    objective: "Launch a box into a crowded category",
    deliverables: "Unboxing video, social creative, email sequence graphics",
    channels: "Meta, Email, Social",
    result: "2,100 subscribers",
    img: "/images/ecommerce-creative-content-harvest-table.webp",
    imgAlt: "A brown carton on a white table",
    tags: ["Social", "Email", "Video"],
  },
];

const filterButtonStyle = (active: boolean): React.CSSProperties => ({
  padding: "0.6rem 1.1rem",
  borderRadius: "999px",
  border: active ? "2px solid var(--blue)" : "2px solid var(--line)",
  background: active ? "var(--blue)" : "#fff",
  color: active ? "#fff" : "var(--navy)",
  font: "inherit",
  fontSize: "0.95rem",
  fontWeight: 700,
  cursor: "pointer",
});

export default function EcommerceCreativeContentPage() {
  const [filter, setFilter] = useState<AssetFilter>("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter))),
    [filter],
  );

  const countFor = (value: AssetFilter) =>
    value === "All" ? projects.length : projects.filter((p) => p.tags.includes(value)).length;

  return (
    <>
      {/* 1. Hero */}
      <section className="hero" id="creative-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Creative &amp; Content</p>
              <h1>Creative Built to Perform, Not Just to Look Right</h1>
              <p className="lead">
                Product content, ad creative, photography, video and copy for online retailers
                — produced at the volume paid channels actually consume, and tested against
                CTR, conversion rate and ROAS rather than internal preference.
              </p>
              <ul className="check-list">
                {heroChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Get a creative audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  See pricing
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/ecommerce-creative-content-hero.webp"
                alt="Photographer setting up studio lighting for product photography"
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
      <section className="section" id="creative-challenge">
        <div className="container">
          <p className="eyebrow">The Problem</p>
          <h2>The eCommerce creative challenge</h2>
          <p className="lead">
            Eight reasons creative stops working. Most of them are production and testing
            problems rather than taste problems, which is what an eCommerce creative agency
            is for and a design studio is not.
          </p>
          <div className="card-grid">
            {challenge.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Do */}
      <section className="section section-soft" id="creative-services">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h2>Our eCommerce content marketing, creative &amp; content services</h2>
          <p className="lead">
            Eight services covering the assets an online retailer actually burns through in
            a year, planned against one eCommerce content strategy rather than briefed job
            by job.
          </p>
          <div className="card-grid">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>
                  {s.link ? (
                    <>
                      Product imagery, lifestyle visuals and image enhancement, produced or
                      art-directed. Shot to the specs each channel enforces — see{" "}
                      <Link href={s.link.href}>{s.link.label}</Link> for scope, process and
                      pricing.
                    </>
                  ) : (
                    s.body
                  )}
                </p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "2rem", maxWidth: "900px" }}>
            Creative feeds <Link href="/ecommerce-ppc/">paid advertising</Link> ,{" "}
            <Link href="/conversion-rate-optimization/">conversion optimization</Link> and{" "}
            <Link href="/email-retention-marketing/">email &amp; retention</Link> — which is
            why it sits in the same team rather than at a separate studio. The templates
            these assets live in are designed by the{" "}
            <Link href="/ecommerce-web-design/">web design and UX</Link> team. It is also
            what makes eCommerce content marketing work: the buying guides, category copy
            and comparison pages that earn organic traffic come off the same production
            line as the ad creative.
          </p>
        </div>
      </section>

      {/* 4. Coverage */}
      <section className="section" id="creative-journey-channels">
        <div className="container">
          <p className="eyebrow">Coverage</p>
          <h2>eCommerce content strategy across the customer journey</h2>
          <p className="lead">
            What the customer needs to see at each stage, and what each channel actually
            wants that asset to look like. Most of it doubles as SEO content for
            eCommerce, because the category and buying-guide pages that earn organic demand
            are the same pages a considering customer reads before deciding. If you are
            wondering how to start content for eCommerce at all, start there rather than
            with a blog: eCommerce SEO content that sits on a commercial template earns
            twice.
          </p>
          <div className="card-grid card-grid-4">
            {journey.map((j) => (
              <article className="card" key={j.stage}>
                <h3>{j.stage}</h3>
                <ul className="check-list">
                  {j.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <h3 style={{ marginTop: "3rem" }}>Creative by channel</h3>
          <div className="card-grid">
            {channels.map((c) => (
              <article className="card" key={c.name}>
                <h3>{c.name}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The Work */}
      <section className="section section-soft" id="what-we-create">
        <div className="container">
          <p className="eyebrow">The Work</p>
          <h2>What we create as an eCommerce content agency</h2>
          <p className="lead">
            Twelve asset types we produce regularly. Every tile below is a live image slot
            — the search terms are there so real work can replace them.
          </p>
          <div className="card-grid">
            {assetTiles.map((t) => (
              <article className="card" key={t.label}>
                <Image src={t.img} alt={t.alt} width={1200} height={800} />
                <h4 style={{ marginTop: "1rem" }}>{t.label}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. The Process */}
      <section className="section" id="creative-process">
        <div className="container">
          <p className="eyebrow">The Process</p>
          <h2>Our eCommerce content and creative process</h2>
          <p className="lead">
            Six stages that loop. Stage six is what makes stage three better next month.
          </p>
          <div className="card-grid">
            {processSteps.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Performance */}
      <section className="section section-soft" id="performance-creative">
        <div className="container">
          <p className="eyebrow">Performance</p>
          <h2>Performance creative, testing &amp; business goals</h2>
          <p className="lead">
            This is where we differ from a conventional design studio: creative is a
            variable we test, and it is measured down the same funnel your media buyer
            reports on.
          </p>
          <h3>Variables we test</h3>
          <ul className="check-list">
            {testVariables.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
          <h3 style={{ marginTop: "3rem" }}>How creative performance is measured</h3>
          <div className="card-grid">
            {measured.map((m) => (
              <article className="card" key={m.name}>
                <h3>{m.name}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
          <h3 style={{ marginTop: "3rem" }}>Creative by business goal</h3>
          <div className="card-grid card-grid-4">
            {goals.map((g) => (
              <article className="card" key={g.goal}>
                <h3>{g.goal}</h3>
                <h4>{g.detail}</h4>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Why Us */}
      <section className="section" id="why-choose-creative">
        <div className="container">
          <p className="eyebrow">Why Us</p>
          <h2>Why choose our eCommerce creative agency</h2>
          <p className="lead">
            Eight things that separate performance creative from a design retainer, and what
            to look for when you weigh one eCommerce content agency against another.
          </p>
          <div className="card-grid">
            {whyChoose.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Portfolio — working asset-type filter */}
      <section className="section section-soft" id="featured-creative-work">
        <div className="container">
          <p className="eyebrow">Portfolio</p>
          <h2>Featured creative work</h2>
          <p className="lead">
            Brand, objective, deliverables and channels for each project, with performance
            where we have it. Filter by asset type.
          </p>
          <div
            role="tablist"
            aria-label="Filter projects by asset type"
            style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "28px" }}
          >
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                style={filterButtonStyle(filter === f)}
              >
                {f} ({countFor(f)})
              </button>
            ))}
          </div>
          <p
            aria-live="polite"
            style={{ color: "var(--muted)", marginTop: "20px", marginBottom: 0 }}
          >
            Showing {filtered.length} of {projects.length} projects
            {filter !== "All" && <> — {filter}</>}.
          </p>
          <div className="card-grid">
            {filtered.map((p) => (
              <article className="card" key={p.name}>
                <Image src={p.img} alt={p.imgAlt} width={1200} height={800} />
                <h4 style={{ marginTop: "1rem" }}>
                  {p.name} — {p.project}
                </h4>
                <h3>
                  {p.href ? <Link href={p.href}>{p.name}</Link> : p.name}
                </h3>
                <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem" }}>
                  {p.project}
                </p>
                <p>
                  <strong>Objective</strong> — {p.objective}
                </p>
                <p>
                  <strong>Deliverables</strong> — {p.deliverables}
                </p>
                <p>
                  <strong>Channels</strong> — {p.channels}
                </p>
                <p
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "var(--navy)",
                    marginBottom: "0.25rem",
                  }}
                >
                  {p.result}
                </p>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <p style={{ color: "var(--muted)", marginTop: "24px" }}>
              No projects match this asset type yet.
            </p>
          )}
          <div className="btn-row">
            <Link className="btn" href="/portfolio/">
              See the full portfolio
            </Link>
            <Link className="btn btn-outline" href="/case-studies/">
              Read case studies
            </Link>
          </div>
        </div>
      </section>

      {/* 10. FAQs */}
      <section className="section" id="creative-faqs">
        <div className="container center">
          <p className="eyebrow">FAQs</p>
          <h2>Creative &amp; content FAQs</h2>
          <p className="lead">
            Eight questions that come up before most creative engagements. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link> .
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Find out what your creative is costing you</h2>
          <p className="lead">
            Get a creative audit. We will review your product content, ad creative and
            marketplace listings against what is actually performing in your category —
            whether or not you hire us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Get a creative audit
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
