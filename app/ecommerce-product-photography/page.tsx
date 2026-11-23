import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "eCommerce Product Photography Services | Dazzle Commerce",
  description:
    "Product photography for online retailers, shot to each channel specs, tested against conversion rate and priced per SKU. See scope, process and pricing.",
  alternates: { canonical: "https://dazzlecommerce.com/ecommerce-product-photography/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/ecommerce-product-photography/",
    siteName: "Dazzle Commerce",
    title: "eCommerce Product Photography Services | Dazzle Commerce",
    description:
      "Product photography for online retailers, shot to each channel specs, tested against conversion rate and priced per SKU. See scope, process and pricing.",
    images: [
      {
        url: "/images/ecommerce-product-photography-hero.webp",
        width: 1920,
        height: 1280,
        alt: "Product photographer shooting a product on a white studio background with softbox lights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce Product Photography Services | Dazzle Commerce",
    description:
      "Product photography for online retailers, shot to each channel specs, tested against conversion rate and priced per SKU. See scope, process and pricing.",
  },
};

const faqs: Faq[] = [
  {
    q: "What exactly is included in product photography services?",
    a: "Six production lines: hero and catalogue frames, lifestyle sets, detail and macro, scale and fit imagery, 360 spins and short-form video, and infographic or A+ modules. Every engagement also includes the gallery audit, the shot list, retouching and a per-channel export set. What you will not get is a folder of raw files and a goodbye.",
  },
  {
    q: "Do you shoot in a studio or on location?",
    a: "Both, and the choice is driven by the product rather than by convenience. Hero, detail and 360 work belongs in a controlled studio set-up. Lifestyle and in-context sets usually do not, because a room that looks like a room outperforms a room that looks like a set.",
  },
  {
    q: "How does product photography pricing work?",
    a: "Per SKU, against a frame count agreed in the shot list, with the rate stepping down as volume rises. Product photography pricing quoted as a day rate hides the number that matters, which is cost per finished, channel-ready image. Send a SKU list and we will quote on that basis; our pricing page explains how engagements are structured more generally.",
  },
  {
    q: "Do we ship you product, or do you come to us?",
    a: "Ship to us for studio work — it is cheaper and the lighting is already dialled in. We travel for lifestyle sets, oversized items, anything that cannot safely be couriered, and for on-model apparel work where the fit has to be checked live.",
  },
  {
    q: "How long does a shoot take end to end?",
    a: "Five to seven business days from approved brief to final files for a standard set, assuming product is with us and the sample SKU is signed off promptly. Large catalogues run as cycles rather than as one long shoot, so you get usable files in batches instead of waiting for the whole run.",
  },
  {
    q: "Who owns the images and the usage rights?",
    a: "You do, outright. Full-resolution masters plus every channel export, with usage rights assigned to you on delivery — no licence window, no per-channel surcharge, no re-licensing when you want to run the same shot as an ad.",
  },
  {
    q: "Can you match our existing imagery?",
    a: "Yes, and on a mixed catalogue it is usually the right call — a gallery where half the SKUs were shot differently reads as careless. We match lighting, angle, crop and background from your existing set, and we will say plainly if the existing look is the thing holding the page back.",
  },
  {
    q: "Do you handle Amazon A+ and marketplace modules too?",
    a: "Yes. A+ content, Walmart rich media and marketplace infographics come out of the same shoot rather than being commissioned separately, which is the main reason marketplace modules usually look like they belong to a different brand. Our Amazon team briefs them.",
  },
];

const heroChecks = [
  "One team across store management, SEO, paid media, CRO and operations",
  "Named strategist and specialists — the same people every month",
  "Month-to-month after the first 90 days, no long lock-in",
];

const heroStats = [
  { value: "+41%", label: "Best PDP conversion lift" },
  { value: "-27%", label: "Return rate cut with fit imagery" },
  { value: "12", label: "Image types produced in-house" },
  { value: "5–7 days", label: "Brief to final files" },
];

const problems = [
  {
    title: "One set of images, five channels",
    body: "A square marketplace hero and a vertical crop for paid social are different shots, not the same shot resized.",
  },
  {
    title: "Specs rejected at upload",
    body: "Pixel floors, background rules, frame fill and overlay policy differ per channel, and failed items sit unlisted for weeks.",
  },
  {
    title: "Nothing answers the buying question",
    body: "Scale, fit, material and what is in the box are why people leave a product page, and most galleries never show them.",
  },
  {
    title: "Returns the imagery caused",
    body: "If a photograph oversells the colour or the size, the order comes back and the margin goes with it.",
  },
  {
    title: "Shoots that cannot keep up",
    body: "A catalogue adding sixty SKUs a quarter cannot be served by one studio day every spring.",
  },
  {
    title: "Nobody tests the gallery",
    body: "Image order, first frame and image count all move conversion, and almost nobody measures which version won.",
  },
];

const scope = [
  {
    title: "Hero & Catalogue Frames",
    body: "White-background hero shots with consistent angles and crops, built to each marketplace’s pixel and frame-fill rules.",
    list: [
      "Store updates",
      "Product management",
      "Collections and categories",
      "Promotions",
      "Content updates",
    ],
  },
  {
    title: "Lifestyle & In-Context Sets",
    body: "The product in use, in the setting the buyer pictures, shot for paid social and the middle of the PDP gallery.",
    list: ["Product listings", "Descriptions", "Images", "Attributes", "Pricing information"],
  },
  {
    title: "Detail, Macro & Material",
    body: "Texture, stitching, finish and construction — the frames that answer a quality objection before support has to.",
    list: ["SEO", "PPC", "Promotions", "Email", "Retargeting"],
  },
  {
    title: "Scale, Fit & Sizing Imagery",
    body: "Measurement overlays, on-model fit and side-by-side comparison frames. This is the set that reduces returns.",
    list: ["Product pages", "Landing pages", "Checkout", "UX", "A/B testing"],
  },
  {
    title: "360 Spins & Short-Form Video",
    body: "360 product photography, turntable sequences and the six-to-fifteen-second cuts paid channels actually consume.",
    list: [
      "Order workflows",
      "Inventory coordination",
      "Customer experience",
      "Marketplace coordination",
    ],
  },
  {
    title: "Infographics & A+ Modules",
    body: "Feature callouts, comparison tables and enhanced-content modules for Amazon and Walmart listings.",
    list: [
      "KPI tracking",
      "Performance reporting",
      "Opportunity identification",
      "Strategic recommendations",
    ],
  },
];

const channels = [
  {
    title: "Shopify & Shopify Plus",
    body: "Gallery order, zoom-safe resolution, variant imagery and theme crop ratios",
  },
  {
    title: "Amazon product photography",
    body: "Pure-white hero, 85% frame fill, the 1600px zoom threshold and A+ modules",
  },
  {
    title: "Walmart",
    body: "Listing-quality scoring, 2000px minimum and rich media modules",
  },
  {
    title: "Google Shopping",
    body: "Feed image policy, no promotional overlays, background and framing rules",
  },
  {
    title: "Meta & TikTok",
    body: "Vertical crops, safe zones and first-frame discipline for paid social",
  },
  {
    title: "Etsy & eBay",
    body: "Square-first galleries, handmade context shots and thumbnail legibility",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Gallery audit",
    body: "We review your current imagery against each channel’s specs and against the questions your returns and support tickets say buyers are actually asking.",
  },
  {
    num: "02",
    title: "Shot list & brief",
    body: "A per-SKU shot list with frame counts, angles, props and the export set each channel needs, signed off before anything is shot.",
  },
  {
    num: "03",
    title: "Sample & styling approval",
    body: "One SKU shot and approved first, so the brand rules are settled before the other two hundred go through.",
  },
  {
    num: "04",
    title: "Production",
    body: "Shooting at volume against the approved look, with naming conventions applied at capture rather than retrofitted in post.",
  },
  {
    num: "05",
    title: "Retouch & per-channel export",
    body: "One retouched master set, then every channel’s export generated from it to that channel’s own rules.",
  },
  {
    num: "06",
    title: "Test & iterate",
    body: "Gallery order, first frame and image count tested on the pages that carry revenue, with the winning version documented either way.",
  },
];

const tiers = [
  {
    name: "Small Catalogue",
    size: "Up to 50 SKUs",
    badge: null as string | null,
    body: "One focused shoot: hero frames, a lifestyle set and detail shots per SKU, with per-channel exports. Suits a launch or a brand refresh.",
    list: [
      "Catalog and collection structure rebuilt for search demand",
      "One or two acquisition channels run properly, not five run badly",
      "Conversion work on the pages that already carry the revenue",
      "Email and SMS foundations so repeat purchase starts compounding",
      "A single monthly report you can actually act on",
    ],
    price: "Quoted per SKU",
  },
  {
    name: "Growing Catalogue",
    size: "50–500 SKUs",
    badge: "MOST COMMON",
    body: "A quarterly production cycle against a standing shot list, so new arrivals are photographed on a schedule instead of in a panic.",
    list: [
      "Full six-discipline management with a named strategist",
      "Blended CAC and contribution reporting across every channel",
      "A structured testing programme with a prioritised backlog",
      "Retention and lifecycle built around product replenishment timing",
      "Marketplace and storefront coordinated on price, stock and content",
    ],
    price: "Quoted per SKU, per cycle",
  },
  {
    name: "Large / Multi-Channel",
    size: "500+ SKUs",
    badge: null as string | null,
    body: "A continuous pipeline with per-channel export automation, seasonal lifestyle refreshes and a tested gallery template for each category.",
    list: [
      "Dedicated pod: strategist, specialists and a delivery lead",
      "Multi-region and multi-storefront governance and rollout",
      "ERP, PIM, 3PL and marketplace integration ownership",
      "Custom reporting warehouse and executive dashboards",
      "Quarterly business reviews with your leadership, not just your marketer",
    ],
    price: "Custom pipeline quote",
  },
];

const whyChoose = [
  {
    title: "Shot to Channel Specs",
    body: "Every export meets its destination’s rules on delivery, so nothing fails at upload.",
  },
  {
    title: "Tested, Not Presented",
    body: "Gallery variants go live and get measured. The winning version is documented either way.",
  },
  {
    title: "Built for Catalogue Scale",
    body: "Naming, versioning and exports are pipeline work here, not a per-shoot favour.",
  },
  {
    title: "Answers the Buying Question",
    body: "Scale, fit, material and contents are briefed in deliberately, because they are why people hesitate.",
  },
  {
    title: "One Team With the Marketers",
    body: "The people who shoot it also run the ads and the product page, so the brief starts from what has to convert.",
  },
  {
    title: "Files You Own Outright",
    body: "Full-resolution masters and every channel export, delivered with usage rights assigned to you.",
  },
];

const proof = [
  {
    image: "/images/ecommerce-product-photography-cadence-audio.webp",
    alt: "Premium wireless headphones hero product shot on a white background with travel case",
    width: 1920,
    height: 1280,
    client: "Cadence Audio",
    meta: "Consumer Audio · Amazon + Shopify",
    challenge:
      "A considered purchase with six near-identical SKUs and a gallery that showed the box rather than the build quality or how the product actually sat in a bag.",
    did: "Product photography + A+ modules + PDP gallery test",
    results: [
      { value: "+41%", label: "Conversion rate" },
      { value: "Hero, macro, in-use", label: "Frame set delivered" },
      { value: "Amazon, Shopify, Meta", label: "Channel exports" },
    ],
  },
  {
    image: "/images/ecommerce-product-photography-aurelia-apparel.webp",
    alt: "Model wearing a neutral linen garment in a bright studio, on-model fit photography",
    width: 1120,
    height: 2240,
    client: "Aurelia Studio",
    meta: "Apparel · Shopify",
    challenge:
      "Returns were running well above category norm and the reason given, repeatedly, was that the garment did not look or fit the way the photographs implied.",
    did: "Fit & sizing imagery + measurement overlays + PDP modules",
    results: [
      { value: "-27%", label: "Return rate" },
      { value: "On-model, flat, detail", label: "Frame set delivered" },
      { value: "Shopify, Meta", label: "Channel exports" },
    ],
  },
  {
    image: "/images/ecommerce-product-photography-nutriblend-lifestyle.webp",
    alt: "Health supplement jars and a smoothie in a bright kitchen, lifestyle photography",
    width: 1920,
    height: 1280,
    client: "Nutriblend",
    meta: "Health & Supplements · Shopify Plus",
    challenge:
      "A subscription launch with no imagery that showed the ritual — only pack shots, which sell a product once but not a habit.",
    did: "Lifestyle photography + unboxing video + email and paid social creative",
    results: [
      { value: "+46%", label: "Subscription rate" },
      { value: "Lifestyle, pack, video", label: "Frame set delivered" },
      { value: "Store, Email, Meta", label: "Channel exports" },
    ],
  },
];

export default function EcommerceProductPhotographyPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero" id="management-hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">eCommerce Management</p>
              <h1>Product Photography That Sells the Product, Not the Studio</h1>
              <p className="lead">
                eCommerce product photography produced at catalogue scale — hero frames,
                lifestyle sets, detail macros and 360 spins — shot to the exact specs each
                channel enforces and tested against conversion rate rather than taste.
              </p>
              <ul className="check-list">
                {heroChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
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
                src="/images/ecommerce-product-photography-hero.webp"
                alt="Product photographer shooting a product on a white studio background with softbox lights"
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
          <h2>The product imagery problem</h2>
          <p className="lead">
            Most catalogues do not fail on photographic quality. They fail because the images
            were produced once, for one channel, by someone who was never told what the listing
            had to do.
          </p>
          <div className="card-grid">
            {problems.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
          <div className="card-grid" style={{ marginTop: "20px" }}>
            <article className="card">
              <h3>What a working image set looks like</h3>
              <p>
                One shoot, one naming convention, one delivery pipeline, and every channel
                export generated from the same masters — so adding a marketplace is an export,
                not a reshoot.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 3. Scope of Work */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Scope of Work</p>
          <h2>eCommerce product photography: what we shoot</h2>
          <p className="lead">
            Six production lines, one brief. Most catalogues need three of them, and we scope
            product photography services from a gallery audit rather than from a package list.
          </p>
          <div className="card-grid">
            {scope.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <ul className="check-list">
                  {s.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Channel specs */}
      <section className="section" id="platforms">
        <div className="container">
          <p className="eyebrow">Platforms</p>
          <h2>Channel specs we shoot to</h2>
          <p className="lead">
            Every channel enforces different image rules, and the cheapest moment to satisfy
            all of them is at the shoot. Amazon product photography and a Shopify PDP gallery
            are not the same deliverable.
          </p>
          <div className="card-grid">
            {channels.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "24px" }}>
            Imagery is one part of the wider{" "}
            <Link href="/ecommerce-creative-content/">creative &amp; content</Link> practice,
            and it feeds <Link href="/ecommerce-ppc/">paid advertising</Link>,{" "}
            <Link href="/conversion-rate-optimization/">conversion optimization</Link> and{" "}
            <Link href="/marketplace-management-marketing/">marketplace management</Link>.
            Selling somewhere we have not listed — noon, Daraz, Shopee or a B2B catalogue? The
            specs differ again and we hold the current ones.{" "}
            <Link href="/contact/">Ask us.</Link>
          </p>
        </div>
      </section>

      {/* 5. The Process */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">The Process</p>
          <h2>How our product photography services run</h2>
          <p className="lead">
            Six stages. Stage one is a gallery audit rather than a studio booking, because the
            brief is usually the problem.
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

      {/* 6. Pricing */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">By Stage</p>
          <h2>How product photography pricing works</h2>
          <p className="lead">
            Product photography pricing is driven by SKU count and by how many frames each SKU
            needs, not by studio days. Three catalogue shapes cover almost everyone, and we
            quote from your SKU list.
          </p>
          <div className="card-grid">
            {tiers.map((t) => (
              <article className="card" key={t.name}>
                {t.badge ? <p className="eyebrow">{t.badge}</p> : null}
                <h3>{t.name}</h3>
                <p>
                  <strong>{t.size}</strong>
                </p>
                <p>{t.body}</p>
                <ul className="check-list">
                  {t.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p style={{ marginTop: "1rem" }}>
                  <strong style={{ fontSize: "1.25rem", color: "var(--navy)" }}>
                    {t.price}
                  </strong>
                </p>
                <p style={{ marginTop: "1rem" }}>
                  <Link href="/contact/">Talk about this tier</Link>
                </p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "24px" }}>
            Not sure which shape fits? <Link href="/pricing/">See how our pricing works</Link>
            , or <Link href="/book-a-strategy-call/">book a call</Link> and we will quote
            against your SKU list and frame counts.
          </p>
        </div>
      </section>

      {/* 7. Why Us */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Why Us</p>
          <h2>Why choose our product photography</h2>
          <p className="lead">
            Six things that separate production built for a catalogue from a studio booking.
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

      {/* 8. Proof */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Proof</p>
          <h2>Imagery work and what it moved</h2>
          <p className="lead">
            Three engagements where the imagery was the variable being changed. Headline
            figures are measured against the twelve months before we started.
          </p>
          <div className="card-grid">
            {proof.map((c) => (
              <article className="card" key={c.client}>
                <div className="hero-img" style={{ marginBottom: "16px" }}>
                  <Image src={c.image} alt={c.alt} width={c.width} height={c.height} />
                </div>
                <p className="eyebrow">Client</p>
                <h3>{c.client}</h3>
                <p>{c.meta}</p>
                <p>
                  <strong>Challenge</strong>
                </p>
                <p>{c.challenge}</p>
                <p>
                  <strong>What we did</strong>
                </p>
                <p>{c.did}</p>
                <p>
                  <strong>Result</strong>
                </p>
                {c.results.map((r) => (
                  <p key={r.label}>
                    <strong style={{ fontSize: "1.25rem", color: "var(--navy)" }}>
                      {r.value}
                    </strong>
                    <br />
                    {r.label}
                  </p>
                ))}
                <p style={{ marginTop: "1rem" }}>
                  <Link href="/case-studies/">Read case study</Link>
                </p>
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
            Conversion and return-rate figures above are the same engagements reported on our{" "}
            <Link href="/ecommerce-creative-content/">creative &amp; content</Link> page,
            measured on the pages the imagery changed. Results vary considerably by category,
            price point and how weak the starting gallery was.
          </p>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="section section-soft">
        <div className="container center">
          <p className="eyebrow">FAQs</p>
          <h2>Product photography FAQs</h2>
          <p className="lead">
            Eight questions that come up before most photography engagements. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link>.
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Find out what your current gallery is costing you</h2>
          <p className="lead">
            Send us three product URLs and your SKU list. We will audit the galleries against
            each channel’s specs and against the questions buyers actually ask, then come back
            with a shot list and a quote.
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
