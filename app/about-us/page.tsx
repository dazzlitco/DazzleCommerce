import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";
import { PartnerBadge, type PartnerBrandKey } from "@/components/PartnerBadge";

export const metadata: Metadata = {
  title: "About Dazzle Commerce | eCommerce Management Experts",
  description:
    "Meet Dazzle Commerce, an eCommerce growth agency since 2017. 38 specialists, 320+ stores managed, $180M+ client revenue influenced. Our story and team.",
  alternates: { canonical: "https://dazzlecommerce.com/about-us/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/about-us/",
    siteName: "Dazzle Commerce",
    title: "About Dazzle Commerce | eCommerce Management Experts",
    description:
      "Meet Dazzle Commerce, an eCommerce growth agency since 2017. 38 specialists, 320+ stores managed, $180M+ client revenue influenced. Our story and team.",
    images: [
      {
        url: "/images/about-story.webp",
        width: 900,
        height: 601,
        alt: "The Dazzle Commerce team working through an eCommerce growth plan together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Dazzle Commerce | eCommerce Management Experts",
    description:
      "Meet Dazzle Commerce, an eCommerce growth agency since 2017. 38 specialists, 320+ stores managed, $180M+ client revenue influenced. Our story and team.",
  },
};

const faqs: Faq[] = [
  {
    q: "How big is the team and who will I work with?",
    a: "Forty-two specialists across strategy, marketing, operations, engineering, retention and creative. You get a named senior strategist who owns the relationship plus a pod of specialists for your active channels. That strategist is on every call.",
  },
  {
    q: "Are you a full-service eCommerce agency or a specialist?",
    a: "Both, deliberately. Full-service in coverage, but each discipline is run by a specialist rather than a generalist. What we are not is a general digital agency that also does eCommerce.",
  },
  {
    q: "What size of business do you typically work with?",
    a: "Most clients run between $500K and $30M in annual online revenue. We do have a lighter engagement for smaller stores focused on one or two channels.",
  },
  {
    q: "Do you work with businesses outside the United States?",
    a: "Yes. Roughly 40% of clients are outside the US, mainly in the UK, Canada, Australia and the UAE. We staff across five time zones so account calls happen in your working hours.",
  },
  {
    q: "What makes you different from the last agency we hired?",
    a: "Three things clients tell us repeatedly: the senior strategist genuinely stays on the account, we report contribution margin instead of only ROAS, and the agreement is month-to-month so we have to keep earning it.",
  },
  {
    q: "Can we speak to a current client before signing?",
    a: "Yes. After the audit we will connect you with a client in a comparable category and at a comparable stage. We do not screen the conversation.",
  },
];

const commitments = [
  {
    title: "Margin over vanity",
    body: "We report contribution margin next to ROAS because you cannot bank a return on ad spend. If a channel looks good on the dashboard and bad on the P&L, we say so.",
  },
  {
    title: "Radical transparency",
    body: "You own every account, every asset and every dashboard. No black-box reporting, no proprietary metric invented to make a bad month look survivable.",
  },
  {
    title: "Senior people, on your account",
    body: "The strategist who scopes your engagement is the strategist who runs it. We cap accounts per strategist so that stays true at scale.",
  },
  {
    title: "Earn the renewal monthly",
    body: "Month-to-month after the first 90 days. Long contracts protect agencies from their own performance. We would rather not need one.",
  },
];

const principles = [
  {
    num: "01",
    title: "Diagnose before prescribing",
    body: "Nobody gets a strategy in the first week. We spend fifteen days inside your analytics, ad accounts, marketplace health and technical stack, because most growth problems are misdiagnosed as marketing problems.",
  },
  {
    num: "02",
    title: "Fix the floor before raising the ceiling",
    body: "Broken tracking, a slow product page or a suppressed listing will eat every dollar you add to spend. Operational and technical debt gets cleared first.",
  },
  {
    num: "03",
    title: "Compound, do not spike",
    body: "Anyone can buy a good month. We build systems — retention flows, organic rankings, creative libraries, clean catalog data — that keep paying after the campaign ends.",
  },
  {
    num: "04",
    title: "Kill things honestly",
    body: "Every quarter we recommend cutting something. Sometimes a channel, occasionally a service we provide. Advice you can trust has to include advice against ourselves.",
  },
];

const reasons = [
  "100+ eCommerce brands and marketplace sellers served since 2017",
  "$48M+ in annualized client GMV under active management",
  "Certified partners across Shopify, Google Ads, Meta, Amazon Ads and Klaviyo",
  "Average client tenure of 31 months on month-to-month agreements",
  "Specialists in-house — no white-label subcontracting, ever",
  "Coverage across five countries and five time zones",
];

const disciplines = [
  {
    title: "Organic & Technical SEO",
    body: "Catalog-scale technical SEO, collection architecture and content built for commercial intent.",
  },
  {
    title: "Paid Media & Marketplace Ads",
    body: "Google, Meta, TikTok, Amazon, Walmart and eBay, managed to margin.",
  },
  {
    title: "Marketplace Operations",
    body: "Listings, feeds, Buy Box defence and account health across four marketplaces.",
  },
  {
    title: "Storefront Engineering",
    body: "Shopify, Shopify Plus, WooCommerce, headless builds and migrations.",
  },
  {
    title: "Lifecycle & Retention",
    body: "Klaviyo and Attentive programmes that reliably reach a quarter of revenue.",
  },
  {
    title: "Analytics & Attribution",
    body: "GA4, server-side tagging and reporting that reconciles with finance.",
  },
];

const team = [
  {
    name: "Alina Whitfield",
    role: "Founder & Managing Partner",
    img: "/images/about-team-1.webp",
    imgAlt: "Dazzle Commerce account management team in a client planning session",
    bio: "Fifteen years in eCommerce, previously head of digital for a nine-figure home goods retailer. Founded Dazzle Commerce after one too many agencies handed her account to a junior.",
  },
  {
    name: "Marcus Ellery",
    role: "Head of Performance Marketing",
    img: "/images/about-team-6.webp",
    imgAlt: "Dazzle Commerce retention team mapping an email lifecycle programme",
    bio: "Manages $30M+ in annual ad spend across Google, Meta and Amazon. Built the margin-tiered bidding framework we run on every paid account.",
  },
  {
    name: "Sana Iqbal",
    role: "Director of eCommerce Operations",
    img: "/images/about-team-5.webp",
    imgAlt: "Dazzle Commerce team reviewing eCommerce reporting and margin data",
    bio: "Marketplace specialist who has recovered Buy Box on more suppressed ASINs than she cares to count. Runs our catalog and account-health practice.",
  },
  {
    name: "Tomas Berger",
    role: "Head of Engineering",
    img: "/images/about-team-2.webp",
    imgAlt: "Dazzle Commerce team researching AI search and product discovery",
    bio: "Shopify Plus and WooCommerce architect. Has led 40+ replatforms without a ranking loss, which he will tell you is mostly redirect discipline.",
  },
  {
    name: "Ruth Adeyemi",
    role: "Head of Retention",
    img: "/images/about-team-4.webp",
    imgAlt: "Dazzle Commerce conversion team reviewing product page designs",
    bio: "Lifecycle strategist specialising in Klaviyo and Attentive. Typically takes email and SMS from 8% to 30% of revenue inside two quarters.",
  },
  {
    name: "Daniel Cortez",
    role: "Creative Director",
    img: "/images/about-team-7.webp",
    imgAlt: "Dazzle Commerce team preparing a marketplace launch checklist",
    bio: "Runs production and the creative testing calendar. Believes the brief matters more than the camera, and has the test data to argue it.",
  },
];

const badges: { name: string; note: string; brand: PartnerBrandKey }[] = [
  {
    name: "Shopify Partners",
    note: "Certified Shopify and Shopify Plus development partner",
    brand: "shopify",
  },
  { name: "Google Partner", note: "Certified across search, shopping and Performance Max", brand: "google" },
  {
    name: "Meta Business Partner",
    note: "Badged partner for Meta advertising and commerce",
    brand: "meta",
  },
  { name: "Amazon Ads Partner Network", note: "Verified partner in the Amazon Ads Partner Network", brand: "amazon" },
  { name: "LinkedIn Marketing Partner", note: "Top-tier partner status for lifecycle and retention", brand: "linkedin" },
  { name: "Microsoft Advertising Partner", note: "Verified partner in the Microsoft Partner Network", brand: "microsoft" },
];

const journey = [
  {
    year: "2017",
    title: "Founded in Austin, Texas",
    body: "Started as a two-person Shopify consultancy working out of a shared office on East 6th.",
  },
  {
    year: "2019",
    title: "Marketplace practice launched",
    body: "Added Amazon Seller Central management after clients kept asking. It is now a third of the business.",
  },
  {
    year: "2021",
    title: "Crossed $10M in managed GMV",
    body: "Grew to 18 people and opened a second operating hub to cover UK and EU hours.",
  },
  {
    year: "2023",
    title: "Engineering team brought in-house",
    body: "Stopped subcontracting development. Replatforming and performance work became core services.",
  },
  {
    year: "2025",
    title: "100th client onboarded",
    body: "Reached 42 specialists across five time zones, with $48M+ in annualized GMV under management.",
  },
  {
    year: "2026",
    title: "Retention and creative studios opened",
    body: "Full lifecycle and in-house production capability, closing the last gap in the growth stack.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <h1>We Are the eCommerce Team You Wish You Had In-House</h1>
          <p className="lead">
            Dazzle Commerce is a full-service eCommerce management and marketing agency built
            on a simple, unfashionable premise: senior people should stay on the account, and
            the numbers should be honest.
          </p>
          <div className="btn-row">
            <Link className="btn" href="/book-a-strategy-call/">
              Get Free Strategy Call
            </Link>
            <Link className="btn btn-outline" href="/contact/">
              Talk to a Specialist
            </Link>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>2017</strong>
              <span>Founded</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                Austin, Texas — now five time zones
              </p>
            </div>
            <div className="stat">
              <strong>100+</strong>
              <span>Brands served</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                Across storefronts and marketplaces
              </p>
            </div>
            <div className="stat">
              <strong>$48M+</strong>
              <span>GMV managed</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                Annualized, under active management
              </p>
            </div>
            <div className="stat">
              <strong>31 mo</strong>
              <span>Average tenure</span>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}>
                On month-to-month agreements
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-book" center>Our Story</Pill>
              <h2>How it all started</h2>
              <p>
                In 2017 our founder was running digital for a nine-figure home goods retailer
                and cycling through agencies at an embarrassing rate.
              </p>
              <p>
                The pattern never changed. A senior partner would win the pitch, promise
                strategic partnership, and then hand the account to someone three months out of
                university. Reporting arrived as a deck full of impressions. Nobody could answer
                the only question that mattered: is this channel making us money after costs?
              </p>
              <p>
                So she left and started the agency she had been trying to hire. Two people, one
                Shopify client, and a rule that has survived every stage of growth since: the
                person who sells the work does the work.
              </p>
              <p>
                Nine years later that rule still constrains how fast we grow. We cap the number
                of accounts each strategist carries, which means we turn away business most
                quarters. It is the least scalable thing about us and the reason clients stay an
                average of 31 months.
              </p>
            </div>
            <div className="split-img">
              <Image
                src="/images/about-story.webp"
                alt="The Dazzle Commerce team working through an eCommerce growth plan together"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Core Values */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-award" center>Our Core Values</Pill>
          <h2>Our commitments we are willing to lose business over</h2>
          <div className="card-grid card-grid-2" style={{ marginBottom: "20px" }}>
            <article className="card">
              <h3>Our Mission</h3>
              <p>
                To give eCommerce brands the calibre of growth team normally reserved for
                companies ten times their size — and to report on it honestly enough that they
                could take our numbers to their board without translation.
              </p>
            </article>
            <article className="card">
              <h3>Our Vision</h3>
              <p>
                An industry where agency performance is measured in contribution margin rather
                than impressions, where contracts are short because results are real, and where
                “strategic partner” means something specific.
              </p>
            </article>
          </div>
          <div className="card-grid card-grid-2">
            {commitments.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-gear" center>Our Approach</Pill>
              <h2>How we think about eCommerce growth</h2>
              <p>
                Not a methodology with a trademark. Four operating principles that decide what
                we do first, second and not at all.
              </p>
              {principles.map((p) => (
                <div key={p.num} style={{ marginTop: "1.25rem" }}>
                  <p className="card-num" style={{ fontSize: "1.4rem" }}>
                    {p.num}
                  </p>
                  <h3>{p.title}</h3>
                  <p style={{ color: "var(--muted)" }}>{p.body}</p>
                </div>
              ))}
            </div>
            <div className="split-img">
              <Image
                src="/images/about-why-choose.webp"
                alt="eCommerce specialists reviewing store performance data with a client"
                width={1920}
                height={1280}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Businesses Choose Us */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-regular fa-thumbs-up" center>Why Businesses Choose Us</Pill>
          <h2>The reasons clients actually give</h2>
          <p className="lead">
            We asked in exit and renewal interviews. These are the answers, in the order they
            came up most often.
          </p>
          <ul className="check-list">
            {reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
          <div className="btn-row">
            <Link className="btn" href="/book-a-strategy-call/">
              Get Free Strategy Call
            </Link>
            <Link className="btn btn-outline" href="/contact/">
              Read Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Our Expertise */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Our Expertise</Pill>
          <h2>Six disciplines, one accountable team</h2>
          <p className="lead">Each one led by a specialist who does nothing else.</p>
          <div className="card-grid">
            {disciplines.map((d) => (
              <article className="card" key={d.title}>
                <h3>{d.title}</h3>
                <p>{d.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Meet The Team */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-user-group" center>Meet The Team</Pill>
          <h2>The people who will be on your calls</h2>
          <p className="lead">
            No account-manager layer between you and the specialists.You work with the people
            doing the work.
          </p>
          <div className="card-grid">
            {team.map((m) => (
              <article className="case-card" key={m.name}>
                <Image src={m.img} alt={m.imgAlt} width={1200} height={800} />
                <div className="case-body">
                  <h3>{m.name}</h3>
                  <p style={{ fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem" }}>
                    {m.role}
                  </p>
                  <p style={{ color: "var(--muted)" }}>{m.bio}</p>
                  <div className="team-socials">
                    <Link href="https://x.com/#">X-twitter</Link>
                    <Link href="https://www.linkedin.com/in/#">Linkedin</Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Certifications & Partnerships */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-award" center>Certifications &amp; Partnerships</Pill>
          <h2>Badged where badges mean something</h2>
          <p className="lead">
            Certification is table stakes rather than a differentiator — but its absence tells
            you something, so here it is.
          </p>
          <div className="card-grid">
            {badges.map((b) => (
              <div className="card platform-card" key={b.name}>
                <PartnerBadge brand={b.brand} name={b.name} />
                <p>{b.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Journey Milestones */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-arrow-trend-up" center>Journey Milestones</Pill>
          <h2>Our growth journey</h2>
          <p className="lead">
            Nine years, deliberately unglamorous. Every step below was a response to something
            clients kept asking for.
          </p>
          <div className="timeline">
            {journey.map((j) => (
              <div className="timeline-item" key={j.year}>
                <p className="timeline-year">{j.year}</p>
                <h3>{j.title}</h3>
                <p style={{ color: "var(--muted)" }}>{j.body}</p>
              </div>
            ))}
          </div>
          <div className="split-img" style={{ marginTop: "32px" }}>
            <Image
              src="/images/about-milestones.webp"
              alt="The Dazzle Commerce team marking a milestone in the agency history"
              width={1920}
              height={1280}
            />
          </div>
        </div>
      </section>

      {/* 10. FAQs About the Agency */}
      <section className="section">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>FAQs About the Agency</Pill>
          <h2>What people ask before the first call</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Let’s grow together</h2>
          <p className="lead">
            Start with a free 30-minute strategy call. You will meet the senior strategist
            who would actually run your account — not a salesperson — and leave with three
            specific things to fix.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/contact/">
              Book Your Free Call
            </Link>
            <Link
              className="btn"
              href="/services/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              See Our Services
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
