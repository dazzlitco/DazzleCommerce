import Link from "next/link";
import { Pill } from "@/components/Pill";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

// FAQs — /faqs/
// Live source: https://dazzlecommerce.com/faqs/
// Full word-for-word extraction: clone-plan/faqs-extraction.md
//
// Fidelity notes (live is the authority):
// - The live page has NO search box and NO "ask a question" form anywhere in
//   <main> — navigation is by category anchor links only. Both were removed.
// - The live page has NO images inside <main> at all (text-only page). No
//   hero or group images here.
// - All 33 Q&As reproduced verbatim in 8 category accordion groups under the
//   3 group headings, with the same anchor ids as live. Every answer is a
//   plain single-paragraph string (no links, lists or extra paragraphs), so
//   no JSX answers are needed.

type Category = {
  id: string;
  title: string;
  faqs: Faq[];
};

type FaqGroup = {
  label: string;
  icon: string;
  heading: string;
  intro: string;
  categories: Category[];
};

const groups: FaqGroup[] = [
  {
    label: "General & Agency",
    icon: "fa-solid fa-diagram-project",
    heading: "How we work, and who does the work",
    intro: "Questions about the agency itself — scope, people and process.",
    categories: [
      {
        id: "faq-general",
        title: "General Services",
        faqs: [
          {
            q: "What exactly does an eCommerce management agency do?",
            a: "We run the commercial and operational side of an online business so the owner does not have to. In practice that means catalog and listing management, storefront merchandising, paid media, eCommerce SEO, conversion work, retention and reporting — delivered by one team against one strategy rather than by five vendors who never speak.",
          },
          {
            q: "Are you a full service eCommerce agency, or do you specialise?",
            a: "Both, deliberately. We are a full service eCommerce agency in that every discipline sits under one roof, but we specialise in online retail exclusively. We do not take on lead-generation, SaaS or local service clients, because the operating model that makes eCommerce work does not transfer.",
          },
          {
            q: "How are you different from a general digital marketing agency?",
            a: "A general agency optimises traffic and conversions. We optimise contribution margin, which means we care about catalog structure, returns rate, freight and marketplace fees as much as about ad creative. Most digital agencies have no view of the numbers that decide whether growth is profitable.",
          },
          {
            q: "Do you work with brands outside the industries and locations you list?",
            a: "Often, yes. The nine categories and five markets on our site are where our experience is deepest, not a closed list. Where we genuinely lack relevant experience we say so — we have turned down regulated categories where we could not reach competence fast enough to justify the fee.",
          },
          {
            q: "Can you work alongside our in-house team rather than replacing it?",
            a: "That is a common setup. We frequently run the disciplines a small in-house team cannot cover — marketplace management, technical SEO, development — while the internal team keeps brand, merchandising and customer service. We will tell you honestly which parts you should keep in-house.",
          },
        ],
      },
      {
        id: "faq-process",
        title: "Process & Communication",
        faqs: [
          {
            q: "Who will actually be working on our account?",
            a: "A named senior strategist who owns the outcome, plus specialists for each discipline in your scope. You meet all of them during onboarding and they are on your calls. We do not resell to white-label vendors and we do not rotate accounts to whoever has capacity.",
          },
          {
            q: "How often will we speak, and in what format?",
            a: "Monthly on Starter, fortnightly on Growth, weekly plus a monthly business review on Scale. Calls happen in your business hours, notes are circulated the same day, and Growth and Scale clients get a shared Slack channel with the whole pod.",
          },
          {
            q: "What does onboarding look like in the first 30 days?",
            a: "Access and tracking audit first, because bad data makes every later decision worse. Then a baseline capture, a documented account map, and a 90-day roadmap with named owners and a metric per workstream. Nothing ships in week one that we cannot measure by week four.",
          },
          {
            q: "What happens when something goes wrong?",
            a: "You hear it from us first. A missed forecast, a failed test or a channel that has stopped working gets raised in the next call or sooner — not buried in a report. That is the single behaviour we screen for hardest when we hire.",
          },
        ],
      },
    ],
  },
  {
    label: "Services & Platforms",
    icon: "fa-solid fa-screwdriver-wrench",
    heading: "What we actually do, discipline by discipline",
    intro: "Management, marketing, SEO and the platforms and marketplaces we run.",
    categories: [
      {
        id: "faq-management",
        title: "eCommerce Management",
        faqs: [
          {
            q: "What does eCommerce store management cover day to day?",
            a: "Product listings and catalog hygiene, pricing and promotional calendars, inventory and feed accuracy, merchandising and collection structure, order and returns oversight, and the operational fixes that quietly cost you margin. It is unglamorous work that decides whether marketing spend converts.",
          },
          {
            q: "Do you handle product listing and catalog management at scale?",
            a: "Yes. Our largest managed catalog is a little over 4,200 SKUs across marketplace and storefront. At that scale the work is variation families, attribute completeness, duplicate consolidation and feed rules — not writing individual descriptions by hand.",
          },
          {
            q: "Can you manage our storefront and our marketplaces together?",
            a: "That is the normal engagement. One strategy covering Shopify or WooCommerce alongside Amazon, Walmart, eBay and Etsy, so pricing, inventory, creative and promotional calendars stay aligned instead of competing with each other for the same customer.",
          },
          {
            q: "Do you offer eCommerce outsourcing for operations rather than marketing?",
            a: "Yes. Some clients use us purely for eCommerce operations management — listings, catalog, feeds, account health and reporting — while keeping marketing in-house. It is a legitimate scope and we price it as one rather than forcing a bundle.",
          },
        ],
      },
      {
        id: "faq-marketing",
        title: "Marketing & Advertising",
        faqs: [
          {
            q: "Which paid channels do you manage?",
            a: "Google Ads including Shopping and Performance Max, Meta, Microsoft Ads, and marketplace advertising on Amazon and Walmart. TikTok and Pinterest where the category justifies them. We will tell you when a channel is not worth opening rather than adding it to look comprehensive.",
          },
          {
            q: "How do you decide how much to spend on each channel?",
            a: "By contribution margin and incrementality, not by blended ROAS. Budget moves to the channel that earns the most after cost of goods, fees, shipping and returns. That sometimes means recommending you spend less overall, which we do in writing.",
          },
          {
            q: "Do you do email and SMS retention, or only acquisition?",
            a: "Both, and retention is usually where the fastest return is. Lifecycle programmes — welcome, abandonment, post-purchase, replenishment, winback — typically reach 25 to 35 per cent of revenue for our clients, at a fraction of acquisition cost.",
          },
          {
            q: "Who owns the ad accounts and the data?",
            a: "You do, always. Campaigns run on your own accounts and your own payment methods, we are granted access rather than holding the keys, and everything we build stays with you if the engagement ends. We never mark up media or take a hidden percentage of spend.",
          },
        ],
      },
      {
        id: "faq-seo",
        title: "SEO",
        faqs: [
          {
            q: "How long does eCommerce SEO take to show results?",
            a: "Technical and on-page fixes often move within six to ten weeks. Content and authority work compounds over six to twelve months. Our median payback across the SEO book is around six months, but a brand starting from a penalised or replatformed position will take longer and we will say so up front.",
          },
          {
            q: "Do you do technical SEO, content, or both?",
            a: "Both, sequenced. Technical and architectural work first, because publishing content onto a broken crawl path wastes the budget. Then collection and category structure around commercial intent, then content and digital PR to build the authority those pages need to rank.",
          },
          {
            q: "Can you do SEO on Shopify given its URL structure limitations?",
            a: "Yes, and the limitations are more manageable than their reputation suggests. Collection and product URL conventions, faceted navigation handling, pagination and duplicate variant pages all have workable patterns on Shopify and Shopify Plus. We have taken Shopify stores to category-leading organic positions.",
          },
          {
            q: "How do you measure eCommerce SEO when last-click undervalues it?",
            a: "We report non-brand organic revenue separately from brand, track assisted conversions and new-user cohorts, and use holdout comparisons where the account size allows. Judging SEO on last-click alone systematically understates it, which is how good programmes get cut.",
          },
        ],
      },
      {
        id: "faq-platforms",
        title: "Platforms & Marketplaces",
        faqs: [
          {
            q: "Which eCommerce platforms do you work on?",
            a: "Shopify and Shopify Plus, WooCommerce, BigCommerce, Magento and Adobe Commerce, and custom or headless builds. On marketplaces: Amazon Seller and Vendor Central, Walmart Marketplace, eBay, Etsy and Noon in the Gulf.",
          },
          {
            q: "Do you manage Amazon Seller Central and Vendor Central?",
            a: "Both. Seller Central work covers catalog rebuilds, Buy Box strategy, PPC restructuring, A+ Content, Brand Store and account health. Vendor Central adds purchase order and chargeback management, which is a genuinely different discipline that most agencies quietly avoid.",
          },
          {
            q: "Should we sell on marketplaces at all if our D2C store is strong?",
            a: "Not automatically. Marketplaces buy you reach and lose you margin and customer data. The right answer depends on your category, your fee exposure and whether competitors are already ranking for your brand there. We build the model before recommending either way.",
          },
          {
            q: "Can you migrate us to another platform without losing rankings?",
            a: "Yes, and it is one of the things we are most careful about. A full URL map, tested redirects, parity checks on templates and structured data, and a staged launch. Our last major replatform moved 4,100 redirects with no measurable ranking loss.",
          },
        ],
      },
    ],
  },
  {
    label: "Pricing, Reporting & Results",
    icon: "fa-solid fa-tags",
    heading: "What it costs and how you will know it worked",
    intro: "The commercial questions, answered without hedging.",
    categories: [
      {
        id: "faq-pricing",
        title: "Pricing & Packages",
        faqs: [
          {
            q: "How much does it cost to hire an eCommerce agency?",
            a: "Most of our engagements sit between $3,500 and $18,000 per month. Starter begins at $3,500 for a single platform, Growth at $7,500 for multi-channel work, and Scale is scoped individually, typically starting around $15,000. The free audit produces your actual number.",
          },
          {
            q: "What is included in your packages and what costs extra?",
            a: "Every package includes account setup, reporting, strategy, optimisation cycles and tracking validation. Additional paid channels, marketplace expansion, development, photography, creative production and new markets are priced as add-ons so you are never buying a tier to unlock one thing.",
          },
          {
            q: "Is there a minimum contract length?",
            a: "Ninety days, because nothing meaningful can be judged in less than a quarter. After that every package is month-to-month. No auto-renewing annual lock-ins, and everything we build for you remains yours if you leave.",
          },
          {
            q: "Do you charge a percentage of ad spend?",
            a: "No. Fees are based on scope, channel count and spend under management as a band — not a percentage. A percentage model rewards an agency for spending more of your money, which is precisely the incentive you do not want.",
          },
        ],
      },
      {
        id: "faq-results",
        title: "Results & Reporting",
        faqs: [
          {
            q: "What results can we realistically expect in the first 90 days?",
            a: "The first quarter is usually about fixing the floor: tracking accuracy, catalog and listing hygiene, wasted spend, and the conversion blockers found in the audit. Revenue movement in that window tends to come from efficiency rather than growth. We forecast the specific range for your account before we start.",
          },
          {
            q: "What metrics do you report on?",
            a: "Contribution margin next to ROAS, non-brand organic revenue, conversion rate by channel and device, customer acquisition cost and payback period, repeat rate and lifetime value, and marketplace-specific metrics such as Buy Box share and TACoS where relevant.",
          },
          {
            q: "How do you attribute revenue across channels?",
            a: "We use platform data as a directional input, not as truth. Reporting is reconciled against your own analytics and back-office numbers, with incrementality testing where the account size supports it. Where a figure is genuinely uncertain, the report says so.",
          },
          {
            q: "What happens if the results do not come?",
            a: "You will have heard it from us in a monthly review before you have to ask. The agreement is month-to-month after the first 90 days, so you can leave. We would rather tell you a channel is not working than wait for you to notice.",
          },
        ],
      },
    ],
  },
];

const allCategories: Category[] = groups.flatMap((g) => g.categories);

export default function FaqsPage() {
  return (
    <>
      {/* 1. Hero (text-only on live — no hero image) */}
      <section className="hero">
        <div className="container">
          <Pill icon="fa-solid fa-circle-question" center>
            Frequently Asked Questions
          </Pill>
          <h1>eCommerce Agency Questions, Answered Properly</h1>
          <p className="lead">
            Thirty-three questions we are actually asked, grouped by topic. Where the
            honest answer is &ldquo;it depends&rdquo;, we have said what it depends on
            rather than leaving you with a slogan.
          </p>
          <div className="btn-row">
            <Link className="btn" href="#categories">
              Browse by Category
            </Link>
            <Link className="btn btn-outline" href="/contact/">
              Ask Us Directly
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Browse FAQs by Category */}
      <section className="section" id="categories" style={{ paddingTop: "32px" }}>
        <div className="container">
          <Pill icon="fa-solid fa-store" center>
            Browse FAQs by Category
          </Pill>
          <h2>Eight topics, thirty-three answers</h2>
          <p className="lead">Jump straight to what you came for.</p>
          <div className="card-grid card-grid-4">
            {allCategories.map((c) => (
              <article className="card platform-card" key={c.id}>
                <h3 className="platform-name">
                  <Link href={`#${c.id}`}>{c.title}</Link>
                </h3>
                <p>
                  {c.faqs.length} question{c.faqs.length === 1 ? "" : "s"}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3–5. FAQ groups and categories */}
      {groups.map((g, gi) => (
        <div key={g.label}>
          {/* Group intro */}
          <section className={gi % 2 === 0 ? "section section-soft" : "section"}>
            <div className="container">
              <Pill icon={g.icon} center>
                {g.label}
              </Pill>
              <h2>{g.heading}</h2>
              <p className="lead">{g.intro}</p>
            </div>
          </section>
          {/* Categories in this group */}
          {g.categories.map((c, ci) => (
            <section
              key={c.id}
              id={c.id}
              className={ci % 2 === 0 ? "section" : "section section-soft"}
            >
              <div className="container center">
                <h2>{c.title}</h2>
                <FaqAccordion faqs={c.faqs} />
              </div>
            </section>
          ))}
        </div>
      ))}

      {/* 6. Still have questions? */}
      <section className="section section-soft">
        <div className="container center">
          <h2>Still have questions?</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            If your question is not here, it is probably a good one. Ask a senior
            strategist directly — the first reply comes from a person who does the work,
            not a sales development rep.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn" href="/book-a-strategy-call/">
              Book Your Free Strategy Call
            </Link>
            <Link className="btn btn-outline" href="/pricing/">
              See Pricing &amp; Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
