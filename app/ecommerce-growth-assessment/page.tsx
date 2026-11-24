import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import { Pill } from "@/components/Pill";

// NOTE: the live page has no interactive tool — its FAQ says "Not yet. This
// page is the framework in full, designed to be worked through on paper or in
// a spreadsheet. A scored interactive version is planned for our tools
// section". This page therefore presents the framework exactly as live does:
// the twelve points with their thresholds, as a list to work through on paper
// or in a spreadsheet. There is deliberately no score out of twelve.

const faqs: Faq[] = [
  {
    q: "How long does the assessment actually take?",
    a: "About forty minutes if the six data sources listed above are open before you start, and most of a day if they are not. The measuring is quick; assembling access is what takes time. Running it across two sittings is fine, as long as the same person marks all twelve points.",
  },
  {
    q: "Do I need to be technical to run it?",
    a: "No. Every check is readable from a standard analytics, Search Console, ads or email dashboard. None of the twelve requires a developer, a data warehouse or a paid tool. The two speed-related checks are the closest to technical, and both are read from a report rather than measured by hand.",
  },
  {
    q: "Why is there no score out of twelve?",
    a: "Because a score lets a store that is failing badly on one thing feel broadly fine. Ten out of twelve reads healthy, and a store losing a third of its checkout sessions is not healthy at any total. The framework is built to produce an ordered list with one item at the top, not a grade.",
  },
  {
    q: "What if a check does not apply to my store?",
    a: "Mark it not applicable and exclude it from the ranking. The marketplace control point is the common one — if you do not sell on marketplaces it is not a pass, it simply is not a question. Do not count exclusions as clears.",
  },
  {
    q: "Are these thresholds industry standards?",
    a: "Four are published research, cited on the page and linked to their sources. The rest are our own operating thresholds taken from accounts we run, and they are labelled as ours wherever they appear. If you disagree with one of ours, adjust it and keep the check.",
  },
  {
    q: "How often should I re-run it?",
    a: "Once a quarter, and again whenever a constraint clears — the second-ranked flag is rarely still second once the first is fixed. Re-running it monthly is wasted effort; nothing in this framework moves that fast.",
  },
  {
    q: "Will you run it for me for free?",
    a: "Yes. The free eCommerce audit covers the same twelve points with the specialist who runs each discipline, plus a ranked constraint list, a ninety-day sequence and a recorded walkthrough. Five working days, nothing owed afterwards.",
  },
  {
    q: "Is there an interactive version?",
    a: "Not yet. This page is the framework in full, designed to be worked through on paper or in a spreadsheet. A scored interactive version is planned for our tools section; when it exists it will use exactly these twelve points and these thresholds.",
  },
];

type Band = "high-low" | "high-high" | "low-low" | "low-high";

const BAND_LABELS: Record<Band, string> = {
  "high-low": "High impact · low effort",
  "high-high": "High impact · high effort",
  "low-low": "Low impact · low effort",
  "low-high": "Low impact · high effort",
};

type Check = {
  num: number;
  section: string;
  sectionId: string;
  title: string;
  threshold: ReactNode;
};

const CHECKS: Check[] = [
  {
    num: 1,
    section: "Store & experience",
    sectionId: "ga-store",
    title: "Largest Contentful Paint is under 2.5 seconds on your highest-traffic template",
    threshold: (
      <>
        <strong>Threshold: 2.5s or under, on mobile.</strong> This is Google’s
        published “good” boundary for the metric, not our opinion. Measure field
        data over the last 28 days rather than a lab score, and measure the template
        that receives the most sessions — usually a collection or product page. A
        homepage that loads in 1.4 seconds and a product page that loads in 5 tells
        you nothing useful as an average.
      </>
    ),
  },
  {
    num: 2,
    section: "Store & experience",
    sectionId: "ga-store",
    title: "Mobile converts at no less than two thirds of the desktop rate",
    threshold: (
      <>
        <strong>Threshold: mobile conversion rate at 0.66× desktop or better,</strong>{" "}
        on comparable traffic. Some gap is normal and expected; a gap wider than a
        third usually means a specific broken step rather than general mobile
        behaviour. This is our own operating threshold rather than a published
        benchmark, set from the accounts we run. Below it, check the basket and the
        first checkout step on a real handset before anything else.
      </>
    ),
  },
  {
    num: 3,
    section: "eCommerce SEO",
    sectionId: "ga-seo",
    title: "Seven in ten of your top fifty non-brand demand terms have a page built to rank for them",
    threshold: (
      <>
        <strong>Threshold: 70% coverage of your top fifty non-brand terms.</strong>{" "}
        Export your non-brand queries, group them into the fifty clusters that
        describe real buying demand, then check each one has a page whose main
        subject is that cluster. A product that happens to mention the phrase does
        not count. Most stores that fail this are organised around how their
        catalogue was built rather than how people shop it — the{" "}
        <Link href="/resources/checklists/ecommerce-seo-checklist/">SEO checklist</Link>{" "}
        works through the fix.
      </>
    ),
  },
  {
    num: 4,
    section: "eCommerce SEO",
    sectionId: "ga-seo",
    title: "Indexed URL count is within 20% of the number of pages you intend to rank",
    threshold: (
      <>
        <strong>Threshold: indexed pages no more than 1.2× intended pages.</strong>{" "}
        Compare Search Console’s indexed count against a list of the pages you
        actually want in search. A large gap almost always means crawlable filter
        and sort parameters have generated thousands of near-duplicates. This is our
        own threshold; the 20% allowance covers legitimate pagination.
      </>
    ),
  },
  {
    num: 5,
    section: "Paid media",
    sectionId: "ga-paid",
    title: "Bids are set against margin, not one blended return target across the whole catalogue",
    threshold: (
      <>
        <strong>
          Threshold: binary — either campaigns are segmented by margin tier or they
          are not.
        </strong>{" "}
        One return-on-spend target across a catalogue with a three-to-one margin
        spread guarantees you overpay for low-margin products and underspend on
        high. If a single target covers a $40 accessory and a $900 item, this point
        is flagged regardless of how good the blended number looks.
      </>
    ),
  },
  {
    num: 6,
    section: "Paid media",
    sectionId: "ga-paid",
    title: "Feed disapprovals are under 2% and matching attributes are populated on 95% of active SKUs",
    threshold: (
      <>
        <strong>
          Threshold: under 2% disapproved, 95%+ populated on GTIN, brand, condition
          and variant attributes.
        </strong>{" "}
        Read it from your Merchant Center diagnostics rather than your platform’s own
        report. Both numbers are our operating standard. Unpopulated attributes do
        not throw errors — they quietly remove you from the comparisons where the
        purchase decision happens.
      </>
    ),
  },
  {
    num: 7,
    section: "Conversion",
    sectionId: "ga-conversion",
    title: "Checkout abandonment is at or below 70.2%",
    threshold: (
      <>
        <strong>Threshold: 70.22%, the published average across 49 studies.</strong>{" "}
        Measure sessions that reach the first checkout step against completed orders
        — not basket additions, which produces a much worse number and a false alarm.
        The benchmark and its methodology are cited on our{" "}
        <Link href="/resources/statistics/cart-abandonment/">cart abandonment statistics</Link>{" "}
        page. Being at the average is a clear, not a triumph.
      </>
    ),
  },
  {
    num: 8,
    section: "Conversion",
    sectionId: "ga-conversion",
    title: "Total cost including delivery is visible before the final checkout step",
    threshold: (
      <>
        <strong>Threshold: binary — the full figure is shown early, or it is not.</strong>{" "}
        Unexpected extra cost at checkout is the most frequently stated reason
        people abandon, ahead of price itself. Showing it earlier feels like it
        should cost conversions and reliably does not: you lose the orders that were
        never going to complete and keep the ones that were.{" "}
        <Link href="/testimonials/verdano-foods-review/">Verdano Foods</Link> is the
        worked example.
      </>
    ),
  },
  {
    num: 9,
    section: "Email & retention",
    sectionId: "ga-retention",
    title: "At least four of the five core lifecycle flows are live and sending",
    threshold: (
      <>
        <strong>
          Threshold: 4 of 5 — welcome, browse abandonment, cart abandonment,
          post-purchase and win-back or replenishment.
        </strong>{" "}
        Live means sending to the segment it was built for, not built and paused. Our
        threshold, not an industry one. Which of the five matters most depends
        entirely on whether you sell consumables or considered purchases.
      </>
    ),
  },
  {
    num: 10,
    section: "Email & retention",
    sectionId: "ga-retention",
    title: "Recovery revenue is measured against a holdout, not attributed by last click",
    threshold: (
      <>
        <strong>Threshold: binary — a holdout group exists, or this is flagged.</strong>{" "}
        Hold back 5 to 10% of each flow’s audience and compare. Without it, every
        order a customer would have placed anyway gets credited to the email that
        happened to arrive first, and the flow looks two or three times more valuable
        than it is. Expect the honest number to be materially lower, and expect that
        to be uncomfortable.
      </>
    ),
  },
  {
    num: 11,
    section: "Marketplace & reporting",
    sectionId: "ga-marketplace",
    title: "You control your own listings, and variations reflect real product differences",
    threshold: (
      <>
        <strong>
          Threshold: binary — brand registry or equivalent control, a written pricing
          policy covering resellers, and no unattended repricer.
        </strong>{" "}
        Merged variations are the check most sellers assume they pass. Open your
        three best-selling parent listings and confirm every child is genuinely the
        same product in a different size or colour.{" "}
        <Link href="/testimonials/vac-vacuums-review/">Vac &amp; Vacuums</Link> failed
        this for three years without knowing.
      </>
    ),
  },
  {
    num: 12,
    section: "Marketplace & reporting",
    sectionId: "ga-marketplace",
    title: "One report shows contribution margin per order, including carriage, returns and fees",
    threshold: (
      <>
        <strong>Threshold: binary — the view exists and somebody reads it monthly.</strong>{" "}
        Per order, not per channel. Carriage, packaging, returns, marketplace fees
        and marketing cost in one place. Stores that fail this point usually discover
        that their best campaigns on revenue are their worst on margin, which is
        what{" "}
        <Link href="/testimonials/kitchenary-review/">Kitchenary</Link> found. If you
        fail only one point in this framework, hope it is not this one.
      </>
    ),
  },
];

const SECTIONS = [
  {
    id: "ga-store",
    num: "01",
    title: "Store & experience",
    intro:
      "Measured on the devices your traffic actually uses, on the templates it actually lands on. Testing the homepage on a desktop tells you almost nothing.",
    note: "Run both checks on your highest-traffic collection and product templates, not the homepage.",
    img: "/images/ecommerce-growth-assessment-shopper.webp",
    imgAlt: "Shopper browsing a collection grid on an online store using a laptop",
  },
  {
    id: "ga-seo",
    num: "02",
    title: "eCommerce SEO",
    intro:
      "Whether your category layer can capture the demand your catalogue is already able to serve. Both checks are about structure, not content volume.",
  },
  {
    id: "ga-paid",
    num: "03",
    title: "Paid media",
    intro:
      "Two checks that between them decide whether spend is buying profit or buying revenue. They are the two most commonly failed points in this framework.",
  },
  {
    id: "ga-conversion",
    num: "04",
    title: "Conversion",
    intro:
      "Where the funnel loses people, and whether the losses are the ones worth engineering against. Both thresholds here come from published research rather than from us.",
    note: "The final checkout step is where both of these checks are won or lost.",
    img: "/images/ecommerce-growth-assessment-checkout.webp",
    imgAlt: "Online checkout screen on a laptop against a plain background",
  },
  {
    id: "ga-retention",
    num: "05",
    title: "Email & retention",
    intro:
      "Coverage first, then honesty about what that coverage is really earning. The second check is failed by almost every store that runs it properly for the first time.",
  },
  {
    id: "ga-marketplace",
    num: "06",
    title: "Marketplace & reporting",
    intro:
      "Not every store sells on marketplaces. If you do not, mark point eleven not applicable and do not treat it as a clear. Point twelve applies to everybody.",
  },
];

const LAYERS = [
  {
    name: "Layer 1 · Foundations",
    body: "Measurement integrity, the margin model and technical performance. Before anything else, confirm that revenue in your store, your analytics and your ad platforms agree within about 5%. If they do not, every conversion rate, channel return and cohort chart below this layer is measured against a number that does not exist — and you will spend a quarter optimising toward it.",
  },
  {
    name: "Layer 2 · Demand",
    body: "Traffic composition and the shape of the funnel. No single channel carrying more than about 60% of sessions, branded and non-branded traffic separated, and session-to-cart, cart-to-checkout and checkout-to-order tracked as three distinct numbers rather than one.",
  },
  {
    name: "Layer 3 · Conversion",
    body: "Product page quality against a written standard, and the catalogue and feed health underneath it. There is little point auditing creative volume for a brand whose contribution margin after returns and carriage is four per cent — that constraint sits in layer one.",
  },
  {
    name: "Layer 4 · Channels and retention",
    body: "Ad account structure, creative supply, marketplace account health and lifecycle coverage. This is the layer most agencies start with, and the layer least likely to contain your actual constraint.",
  },
];

const SOURCES: { threshold: string; source: ReactNode }[] = [
  { threshold: "LCP under 2.5 seconds", source: "Google’s published boundary for a “good” Largest Contentful Paint. Not ours, not adjustable." },
  {
    threshold: "Checkout abandonment of 70.22%",
    source: (
      <>
        Baymard Institute, averaged across 49 separate studies. Methodology and
        date are on our{" "}
        <Link href="/resources/statistics/cart-abandonment/">cart abandonment statistics</Link>{" "}
        page.
      </>
    ),
  },
  { threshold: "Extra cost as the leading reason for abandonment", source: "Baymard, same source. The full stated-reason breakdown, with its sample, is published alongside it." },
  { threshold: "Mobile at 0.66× the desktop rate", source: (<><strong>Ours.</strong> Taken from the accounts we run rather than from published research. Treat it as a trigger to investigate, not a law.</>), },
  { threshold: "70% coverage of top non-brand demand", source: (<><strong>Ours.</strong> Below it, we have never seen a category layer that was not leaving obvious demand uncaptured.</>), },
  { threshold: "Indexed pages within 1.2× intended pages", source: (<><strong>Ours.</strong> The 20% allowance exists to cover legitimate pagination rather than to be generous.</>), },
  { threshold: "Feed under 2% disapproved, 95% populated", source: (<><strong>Ours.</strong> Both are achievable on any catalogue; neither is a stretch target.</>), },
  { threshold: "Four of five lifecycle flows live", source: (<><strong>Ours.</strong> Which four matters more than the count, and depends on whether you sell consumables.</>), },
  { threshold: "The five binary checks", source: "Conditions rather than benchmarks. Either margin-tiered bidding, early cost disclosure, a holdout, listing control and a contribution-margin view exist, or they do not." },
];

const BANDS: { band: Band; belongs: string; action: string; time: string }[] = [
  {
    band: "high-low",
    belongs: "A flag whose fix is configuration, copy or a policy rather than a build. Early cost disclosure and margin-tiered bidding usually land here.",
    action: "Start this week. This is your constraint unless something in the next band is demonstrably worse.",
    time: "Days to three weeks",
  },
  {
    band: "high-high",
    belongs: "A flag needing engineering, a catalogue rebuild or a data project. Category architecture and listing control usually land here.",
    action: "Scope it now, start it once the quick band is clear. Never run two of these at once.",
    time: "One to two quarters",
  },
  {
    band: "low-low",
    belongs: "Real but small. Worth doing because it is cheap, not because it moves the revenue line.",
    action: "Batch them into one pass, after the constraint is fixed. Not before.",
    time: "An afternoon",
  },
  {
    band: "low-high",
    belongs: "Expensive to fix, and the number would not move if you did.",
    action: "Write down why you are not doing it, and look again at the next assessment.",
    time: "Not this year",
  },
];

const STAGES = [
  {
    revenue: "Under $25K a month",
    body: "Expect to fail retention and reporting, and clear both cheaply. At this size the constraint is almost always demand rather than efficiency — points 3 and 5 are where the quarter goes. Do not build a contribution-margin dashboard yet; a spreadsheet is the correct tool.",
  },
  {
    revenue: "$25K to $250K a month",
    body: "The band where feed quality, lifecycle coverage and checkout transparency start paying for themselves properly. Reporting is usually the point that gets deferred one more quarter and should not be. Marketplace control matters only if you already sell there.",
  },
  {
    revenue: "$250K to $1M a month",
    body: "Efficiency now outranks demand. Margin-tiered bidding and the contribution-margin view are the two points that separate stores that scale profitably from stores that scale. Failing point 12 here is expensive in a way it was not at $50K.",
  },
  {
    revenue: "Over $1M a month",
    body: "Expect to clear ten or eleven and to have one structural failure that has been there for years — usually category architecture or listing control, because both were correct when the catalogue was a tenth of the size. That one point is worth more than the other eleven combined.",
  },
];

const MISTAKES = [
  { title: "Totalling the marks", body: "Ten out of twelve feels like a healthy store and tells you nothing about the two that are costing you money. There is no score here on purpose." },
  { title: "Letting each owner mark their own discipline", body: "Nobody flags their own area. Have one person mark all twelve against the stated thresholds, then let the owners argue with the marks afterwards." },
  { title: "Marking from memory", body: "If you did not open the report while marking the point, it is unknown rather than cleared. Most false clears come from a number somebody remembers from a good month." },
  { title: "Fixing all the flags at once", body: "Six parallel workstreams means six half-finished ones and no way to attribute what worked. One constraint, held until it clears." },
  { title: "Skipping the discipline nobody owns", body: "The point without an obvious owner is the point most likely to be failing, precisely because nobody has looked at it this year." },
  { title: "Running it once", body: "An assessment is a baseline, not an event. Re-run it after the constraint clears — the second-ranked flag is rarely still second by then." },
];

const OUTCOMES = [
  {
    num: "01",
    label: "NOTHING FLAGGED",
    title: "Mark it again, more strictly",
    body: "Twelve clears means the thresholds were read generously. Go back to the points you cleared from memory and measure them properly.",
    cta: "Back to the twelve points →",
    href: "#ga-list",
  },
  {
    num: "02",
    label: "ONE OR TWO FLAGS",
    title: "Fix it in-house and keep the money",
    body: "A constraint you can name and size does not need an agency. The checklists work through the common fixes step by step, and nothing on them is gated.",
    cta: "Browse the checklists →",
    href: "/resources/checklists/",
  },
  {
    num: "03",
    label: "THREE TO FIVE FLAGS",
    title: "Sequence it before you spend",
    body: "Enough flags that order matters more than effort. Read how we sequence a quarter, then decide whether you want help running it or just the plan.",
    cta: "See how we work →",
    href: "/how-we-work/",
  },
  {
    num: "04",
    label: "SIX OR MORE, OR MOSTLY UNKNOWN",
    title: "Have somebody run it properly",
    body: "Six flags usually means the reporting underneath is not trustworthy rather than that six things are broken. That is what the free audit establishes first.",
    cta: "Request the free audit →",
    href: "/ecommerce-audit/",
  },
];

const DATA_SOURCES = [
  "Analytics, with a device breakdown and last 90 days of conversion rate",
  "Search Console, for indexed pages and non-brand query data",
  "Your ad accounts, at campaign level with conversion values",
  "Your product feed diagnostics, if you run Shopping",
  "Your email platform, with flow-level revenue",
  "A gross margin figure per product category, however rough",
];

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "32px",
  textAlign: "left",
  fontSize: "0.98rem",
};
const thStyle: React.CSSProperties = {
  borderBottom: "2px solid var(--navy)",
  padding: "12px 16px 12px 0",
  color: "var(--navy)",
};
const tdStyle: React.CSSProperties = {
  borderBottom: "1px solid var(--line)",
  padding: "16px 16px 16px 0",
  verticalAlign: "top",
  color: "var(--muted)",
};
const tdStrongStyle: React.CSSProperties = { ...tdStyle, color: "var(--navy)", fontWeight: 700 };

export default function GrowthAssessmentPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: "1rem" }}>
            <Link href="/">Home</Link> ›{" "}
            <Link href="/ecommerce-audit/">eCommerce Audit</Link> › Growth Assessment
          </p>
          <div className="hero-grid">
            <div>
              <Link href="/ecommerce-audit/">
                <Pill>Assessment framework</Pill>
              </Link>
              <p style={{ fontWeight: 700, color: "var(--blue)", marginBottom: "0.5rem" }}>
                Free · nothing gated
              </p>
              <h1>The eCommerce Growth Assessment, Published in Full</h1>
              <p className="lead">
                Twelve checks across six disciplines, each with the threshold that decides
                whether it clears or gets flagged. This is the same framework our audit works
                from. It is here so you can run the short version yourself and decide whether
                you need us at all.
              </p>
              <div className="stat-row" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                <div className="stat">
                  <strong>12 checks</strong>
                  <span>Checks</span>
                </div>
                <div className="stat">
                  <strong>About 40 minutes</strong>
                  <span>Time to run</span>
                </div>
                <div className="stat">
                  <strong>September 2026</strong>
                  <span>Last updated</span>
                </div>
                <div className="stat">
                  <strong>In-house team</strong>
                  <span>Level</span>
                </div>
              </div>
              <div className="btn-row">
                <Link className="btn" href="#ga-list">
                  Go to the twelve points
                </Link>
                <Link className="btn btn-outline" href="/ecommerce-audit/">
                  Have us run it instead
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/ecommerce-growth-assessment-hero.webp"
                alt="Team reviewing an eCommerce growth plan in an office"
                width={1400}
                height={933}
                priority
              />
            </div>
          </div>
          <p style={{ marginTop: "32px", maxWidth: "760px" }}>
            The assessment is designed to be run by your own team, with the data you already
            have, in a single sitting.
          </p>
          <ul className="check-list">
            <li>Nothing here is gated, emailed or exchanged for a form</li>
            <li>Every threshold is stated, including the ones most stores fail</li>
            <li>Where a number comes from published research, it is cited</li>
          </ul>
        </div>
      </section>

      {/* 2. Why publish it */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-award" center>Why publish it</Pill>
              <h2>Most stores do not have twelve problems</h2>
              <p>They have one that matters and eleven that are fine for now. The point of an assessment is to find which is which.</p>
              <p>
                A store turning over a million a year rarely fails on everything. It usually
                clears nine or ten of these points comfortably and fails badly on one, and that
                one is holding the whole number down. Spend a quarter on any of the other
                eleven and the revenue line does not move.
              </p>
              <p>
                That is why this is published rather than gated. If you can run it yourself
                and find your constraint, you should — either you fix it in-house and keep the
                money, or you come to us already knowing what the conversation is about. Both
                are better than a discovery call spent establishing basic facts about your own
                store.
              </p>
            </div>
            <div className="split-img">
              <Image
                src="/images/ecommerce-growth-assessment-analyst.webp"
                alt="Analyst reviewing eCommerce performance charts on a tablet"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. What you need in front of you */}
      <section className="section section-soft">
        <div className="container">
          <div className="split">
            <div className="split-img">
              <Image
                src="/images/ecommerce-growth-assessment-stock-check.webp"
                alt="An inspector checking stock with a clipboard"
                width={1200}
                height={800}
              />
            </div>
            <div>
              <Pill icon="fa-solid fa-flag-checkered" center>Before you start</Pill>
              <h2>What you need in front of you</h2>
              <p>
                Forty minutes is only realistic if these are open before you begin. Chasing
                access mid-assessment is what turns it into a fortnight.
              </p>
              <p>
                Six things. If you cannot get two of them, run the assessment anyway and mark
                those points unknown rather than cleared — an unknown is a finding in itself.
              </p>
              <ul className="check-list">
                {DATA_SOURCES.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <p>
                You do not need a developer, a data warehouse or a paid tool for any of the
                twelve checks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. How to score it */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>How to score it</Pill>
          <h2>Three outcomes per check, and one rule</h2>
          <p className="lead">
            Each of the twelve points gets one of three marks. There is deliberately no
            partial credit and no weighting.
          </p>
          <div className="card-grid">
            <article className="card">
              <h3>Cleared</h3>
              <ul className="check-list">
                <li>The stated threshold is met, measured rather than assumed</li>
                <li>You could show somebody the number today</li>
                <li>Move on — a cleared point is not worth optimising further this quarter</li>
              </ul>
            </article>
            <article className="card">
              <h3>Flagged</h3>
              <ul className="check-list">
                <li>The threshold is missed, by any margin</li>
                <li>Write down the actual figure next to it, not just the flag</li>
                <li>A near miss and a catastrophic miss look identical here, on purpose</li>
              </ul>
            </article>
            <article className="card">
              <h3>Unknown</h3>
              <ul className="check-list">
                <li>You cannot measure it with the access you have</li>
                <li>Count it as flagged when you rank, not as cleared</li>
                <li>Three or more unknowns is itself the finding: you are flying blind</li>
              </ul>
            </article>
          </div>
          <div className="card" style={{ marginTop: "20px" }}>
            <h3>What not to do</h3>
            <ul className="check-list">
              <li>Do not add the marks up into a score out of twelve</li>
              <li>Do not weight the disciplines you happen to be good at</li>
              <li>Do not skip a discipline because it is somebody else’s job</li>
            </ul>
            <p style={{ marginBottom: 0 }}>
              A total out of twelve is the one output that makes this worse. Ten out of twelve
              reads like a healthy store, and a store failing badly on checkout is not healthy
              at any score. Ranking, not totalling, is covered further down.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Why the order matters */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Before the list</Pill>
          <h2>Why the order matters more than the checklist</h2>
          <p className="lead">
            Checklists are easy to find. The sequence they run in is what makes them useful.
            Each point assumes the layer above it has cleared, because a finding at point nine
            is meaningless if point one is broken.
          </p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Layer</th>
                <th style={thStyle}>What it governs, and why it comes first</th>
              </tr>
            </thead>
            <tbody>
              {LAYERS.map((l) => (
                <tr key={l.name}>
                  <td style={tdStrongStyle}>{l.name}</td>
                  <td style={tdStyle}>{l.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 7. The checklist index + the twelve points */}
      <section className="section" id="ga-list">
        <div className="container">
          <div className="ga-checklist-layout">
            <aside className="ga-checklist-sidebar">
              <div className="card">
                <p
                  style={{
                    color: "var(--blue)",
                    fontWeight: 800,
                    letterSpacing: "0.06em",
                    fontSize: "0.85rem",
                    marginBottom: "1rem",
                  }}
                >
                  THE CHECKLIST
                </p>
                <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                  {SECTIONS.map((s) => (
                    <li key={s.id} style={{ margin: "0 0 11px 0" }}>
                      <Link
                        href={`#${s.id}`}
                        style={{ color: "#1b2437", textDecoration: "none" }}
                      >
                        <strong style={{ color: "#0a4ed4" }}>{s.num}</strong>
                        &nbsp;&nbsp;{s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <div>
              {SECTIONS.map((s, i) => (
                <div
                  key={s.id}
                  id={s.id}
                  style={{ marginTop: i === 0 ? 0 : "56px", scrollMarginTop: "90px" }}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: "12px",
                      alignItems: "baseline",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <p
                      style={{
                        fontWeight: 800,
                        color: "var(--blue)",
                        letterSpacing: "0.06em",
                        fontSize: "0.85rem",
                        margin: 0,
                      }}
                    >
                      SECTION {s.num}
                    </p>
                    <p style={{ color: "var(--muted)", margin: 0 }}>2 checks</p>
                  </div>
                  <h2>{s.title}</h2>
                  <p className="lead">{s.intro}</p>
                  {s.img && (
                    <div className="split-img" style={{ marginTop: "24px" }}>
                      <Image src={s.img} alt={s.imgAlt ?? ""} width={1200} height={800} />
                    </div>
                  )}
                  {s.note && (
                    <p style={{ marginTop: "24px", fontWeight: 700 }}>{s.note}</p>
                  )}
                  {CHECKS.filter((c) => c.sectionId === s.id).map((c) => (
                    <article className="card" key={c.num} style={{ marginTop: "16px" }}>
                      <div
                        style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}
                      >
                        <i
                          className="fa-regular fa-square"
                          aria-hidden="true"
                          style={{ color: "var(--blue)", fontSize: "1.3rem", lineHeight: 1.4 }}
                        />
                        <div style={{ minWidth: 0 }}>
                          <h3>{c.title}</h3>
                          <p style={{ marginBottom: 0 }}>{c.threshold}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Where the numbers come from */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-globe" center>Where the numbers come from</Pill>
          <h2>Four thresholds are published research. The rest are ours.</h2>
          <p className="lead">
            A framework that presents its own house rules as industry standards is not worth
            running. Here is which is which, so you can weigh them differently if you
            disagree.
          </p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Threshold</th>
                <th style={thStyle}>Where it comes from</th>
              </tr>
            </thead>
            <tbody>
              {SOURCES.map((row) => (
                <tr key={row.threshold}>
                  <td style={tdStrongStyle}>{row.threshold}</td>
                  <td style={tdStyle}>{row.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 9. Do not add it up. Rank it. */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <Pill icon="fa-solid fa-book-open" center>Reading the result</Pill>
              <h2>Do not add it up. Rank it.</h2>
              <p>
                The output of this assessment is not a score. It is an ordered list, and only
                the top item matters this quarter.
              </p>
              <p>
                A total out of twelve is the most comfortable and least useful thing you can do
                with these marks. Ten out of twelve sounds like a healthy store. A store that
                clears ten points and fails catastrophically on checkout is not a healthy
                store — it is a store with one problem, and averaging hides it behind the
                eleven things that are fine.
              </p>
              <p>
                So take only your flagged points and order them twice: once by how much revenue
                moves if you fix it, once by how much work it takes. The item that is high on
                the first and low on the second is your constraint. Everything else waits,
                including the flags that are embarrassing.
              </p>
              <ul className="check-list">
                <li>One constraint at a time, held until it clears</li>
                <li>Unknowns rank as flags, not as passes</li>
                <li>A flag you cannot size is a flag you have not investigated yet</li>
              </ul>
            </div>
            <div className="split-img">
              <Image
                src="/images/ecommerce-growth-assessment-report.webp"
                alt="Comparing a printed report against a laptop"
                width={1200}
                height={800}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Impact against effort */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Ranking your flags</Pill>
          <h2>Impact against effort, in four bands</h2>
          <p className="lead">
            Put every flagged point into one of these. The band decides the order; the order
            decides your quarter.
          </p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Band</th>
                <th style={thStyle}>What belongs here</th>
                <th style={thStyle}>What to do with it</th>
                <th style={thStyle}>Typical time</th>
              </tr>
            </thead>
            <tbody>
              {BANDS.map((b) => (
                <tr key={b.band}>
                  <td style={tdStrongStyle}>{BAND_LABELS[b.band]}</td>
                  <td style={tdStyle}>{b.belongs}</td>
                  <td style={tdStyle}>{b.action}</td>
                  <td style={tdStyle}>{b.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ marginTop: "24px" }}>
            Impact means revenue that moves, not tidiness gained. If you cannot name the metric
            that changes and roughly by how much, the flag is not ready to rank yet — it is
            ready to be investigated.
          </p>
        </div>
      </section>

      {/* 11. By stage */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>By stage</Pill>
          <h2>What clearing looks like at your size</h2>
          <p className="lead">
            The twelve points do not change with revenue. Which failures are acceptable does.
          </p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Monthly revenue</th>
                <th style={thStyle}>What to expect, and what to prioritise</th>
              </tr>
            </thead>
            <tbody>
              {STAGES.map((st) => (
                <tr key={st.revenue}>
                  <td style={tdStrongStyle}>{st.revenue}</td>
                  <td style={tdStyle}>{st.body}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 12. Six ways a self-assessment goes wrong */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Getting it wrong</Pill>
          <h2>Six ways a self-assessment goes wrong</h2>
          <p className="lead">
            Most of these are ways of arriving at a comfortable answer. The assessment is only
            worth running if it can return one you do not like.
          </p>
          <div className="card-grid card-grid-2">
            {MISTAKES.map((m) => (
              <article className="card" key={m.title}>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "24px", fontWeight: 700 }}>
            If your assessment comes back with nothing flagged, it was marked too generously.
            We have never run this on a live store and found twelve clears.
          </p>
        </div>
      </section>

      {/* 13. What to do with the result */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-forward" center>What next</Pill>
          <h2>What to do with the result you got</h2>
          <p className="lead">
            Four outcomes, four different next steps. Only one of them involves us.
          </p>
          <div className="card-grid card-grid-2">
            {OUTCOMES.map((o) => (
              <article className="card" key={o.num}>
                <p className="card-num">{o.num}</p>
                <p className="case-cat">{o.label}</p>
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <Link className="read-more" href={o.href}>
                  {o.cta}
                </Link>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "24px", fontWeight: 700 }}>
            The assessment is deliberately capable of telling you not to hire anyone. That is
            the only version of it worth publishing.
          </p>
        </div>
      </section>

      {/* 14. Yourself, or us */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-hand-pointer" center>Yourself, or us</Pill>
          <h2>When this is enough, and when it is not</h2>
          <p className="lead">
            The assessment and the audit work from the same twelve points. What differs is who
            measures them and how deep the evidence goes.
          </p>
          <div className="card-grid card-grid-2">
            <article className="card">
              <h3>Run it yourself when</h3>
              <ul className="check-list">
                <li>You have access to the analytics, ad accounts and email platform</li>
                <li>You trust the numbers in them enough to act on a flag</li>
                <li>Somebody internally can own the fix once it is named</li>
                <li>You want a baseline before deciding whether to spend anything</li>
                <li>You would rather keep the budget than buy a second opinion</li>
              </ul>
            </article>
            <article className="card">
              <h3>Ask for the audit when</h3>
              <ul className="check-list">
                <li>Three or more points come back unknown rather than flagged</li>
                <li>Your flags contradict each other and you cannot rank them</li>
                <li>The reporting itself is what you suspect is wrong</li>
                <li>You need the finding evidenced well enough to take to a board</li>
                <li>You have inherited an account and do not trust its history</li>
              </ul>
            </article>
          </div>
          <p style={{ marginTop: "24px" }}>
            The audit covers the same twelve points with the specialists who run each
            discipline, adds a ranked constraint list and a ninety-day sequence, and takes
            five working days. It is free, and it is not a prerequisite for anything on this
            page.
          </p>
        </div>
      </section>

      {/* 15. Assessment FAQs */}
      <section className="section">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>Questions</Pill>
          <h2>Assessment FAQs</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            The questions we get asked about running this without us.
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 16. What to read once you have your flags */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-layer-group" center>Keep going</Pill>
          <h2>What to read once you have your flags</h2>
          <p className="lead">Each of these picks up where a flagged point leaves off.</p>
          <div className="card-grid">
            <article className="case-card">
              <Image
                src="/images/ecommerce-growth-assessment-checklist.webp"
                alt="A written checklist on a clipboard beside a laptop during eCommerce planning"
                width={1200}
                height={800}
              />
              <div className="case-body">
                <p className="case-cat">Checklists</p>
                <h3>
                  <Link href="/resources/checklists/">eCommerce checklists</Link>
                </h3>
                <p style={{ color: "var(--muted)" }}>
                  Working checklists for SEO, conversion and Amazon listings, every check
                  stating the action first and the reason second.
                </p>
              </div>
            </article>
            <article className="case-card">
              <Image
                src="/images/ecommerce-growth-assessment-statistics.webp"
                alt="Printed performance charts and a laptop used to review eCommerce market data"
                width={1200}
                height={800}
              />
              <div className="case-body">
                <p className="case-cat">Statistics</p>
                <h3>
                  <Link href="/resources/statistics/">eCommerce statistics</Link>
                </h3>
                <p style={{ color: "var(--muted)" }}>
                  The benchmarks behind the published thresholds, each carrying its original
                  source, year and sample.
                </p>
              </div>
            </article>
            <article className="case-card">
              <Image
                src="/images/ecommerce-growth-assessment-audit.webp"
                alt="Senior strategists reviewing eCommerce performance charts during an audit session"
                width={1200}
                height={800}
              />
              <div className="case-body">
                <p className="case-cat">Free audit</p>
                <h3>
                  <Link href="/ecommerce-audit/">The same twelve points, run by us</Link>
                </h3>
                <p style={{ color: "var(--muted)" }}>
                  Five working days, a ranked constraint list, a ninety-day sequence and a
                  recorded walkthrough. Nothing owed afterwards.
                </p>
              </div>
            </article>
          </div>
          <p style={{ marginTop: "32px" }}>
            <Link href="/guides/">All guides</Link> — Want the reasoning rather than the
            scorecard? Our{" "}
            <Link href="/guides/ecommerce-growth/">eCommerce Growth Guide</Link> covers the
            growth equation, stages, cash and cadence in eight chapters.
          </p>
        </div>
      </section>

      {/* 17. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Found your constraint, or found six of them?</h2>
          <p className="lead">
            If you can name it and size it, fix it — you do not need us for that. If the
            assessment raised more questions than it settled, the free audit answers them in
            five working days with the specialists who would do the work.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Request Your Free Audit
            </Link>
            <Link
              className="btn"
              href="/contact/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Talk It Through First
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
