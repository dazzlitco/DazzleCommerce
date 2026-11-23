import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "Our Technology Stack | Dazzle Commerce",
  description:
    "The tool categories we run an eCommerce account on, what each one has to do, who touches it, and why every account stays in your name rather than ours.",
  alternates: { canonical: "https://dazzlecommerce.com/our-technology-stack/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/our-technology-stack/",
    siteName: "Dazzle Commerce",
    title: "Our Technology Stack | Dazzle Commerce",
    description:
      "The tool categories we run an eCommerce account on, what each one has to do, who touches it, and why every account stays in your name rather than ours.",
    images: [
      {
        url: "/images/our-technology-stack-hero.webp",
        width: 1400,
        height: 935,
        alt: "Workspace with computers showing eCommerce performance graphs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Technology Stack | Dazzle Commerce",
    description:
      "The tool categories we run an eCommerce account on, what each one has to do, who touches it, and why every account stays in your name rather than ours.",
  },
};

const faqs: Faq[] = [
  {
    q: "Who owns the Google Ads account?",
    a: "You do. It is opened under your business and your billing, and we are added as a user. You can remove our access at any time without asking us. The same applies to Meta, analytics, Search Console, marketplace seller accounts and any email platform we work in.",
  },
  {
    q: "What happens to the accounts if we stop working together?",
    a: "Nothing. They are already yours, so there is no transfer to negotiate and no history to hand back. We are removed as users and everything — campaign history, conversion data, audiences, reporting — stays where it is.",
  },
  {
    q: "Do you have your own platform or dashboard?",
    a: "No, deliberately. Everything we report is assembled from tools you already own, which is what makes it verifiable. An agency dashboard is a convenient place for numbers to become unfalsifiable.",
  },
  {
    q: "Do I have to pay for your tools?",
    a: "Not for ours. Where a category genuinely needs a paid licence for your account, it is bought at cost, named in the proposal, and billed without markup. Most of what runs a good account — analytics, Search Console, the platform consoles — is free.",
  },
  {
    q: "Can we keep the tools we already use?",
    a: "Yes, and we would prefer it. If you already run a testing tool, an email platform or a feed manager, we use yours. Migrating you to our preference costs you the history you have already paid for.",
  },
  {
    q: "Why do you not name every tool you use?",
    a: "Because the brands change and the requirements do not. What matters when you are choosing an agency is what a tool has to do before it is trusted with your account, not which vendor won that category this year. Ask us on a call and we will tell you exactly what is in use on an account like yours.",
  },
  {
    q: "How do you handle data and access security?",
    a: "Named-user access rather than shared logins, the minimum permission level the work needs, and access removed within one business day of somebody leaving either team. Client data is not exported into tools outside the categories on this page.",
  },
  {
    q: "What if a tool reports a different number to my store?",
    a: (
      <>
        Then the store is right and we investigate the tool. Reconciling analytics, ad
        platform and store revenue to within about 5% is the first check in our{" "}
        <a href="/ecommerce-growth-assessment/">growth assessment</a>, and nothing
        downstream is trustworthy until it clears.
      </>
    ),
  },
];

const rules = [
  {
    title: "You own the account",
    items: [
      "Opened under your billing and your domain wherever possible",
      "We are added as a user, and removed by you in one click",
      "No tool where the data would leave with us",
    ],
  },
  {
    title: "The working is visible",
    items: [
      "Any number it produces can be traced back to a source",
      "No modelled figures presented as measured ones",
      "If we cannot explain how it calculated something, we do not use it",
    ],
  },
  {
    title: "The data comes out",
    items: [
      "Raw export available without a support ticket",
      "History retained for at least the length of the engagement",
      "No format that only that vendor can read",
    ],
  },
  {
    title: "It earns its cost",
    items: [
      "A paid tool has to replace hours, not add a tab",
      "Anything billed to you is agreed in advance, at cost",
      "Most of what runs a good account is free, and we say so",
    ],
  },
];

const categories = [
  {
    title: "Analytics and measurement",
    items: [
      "GA4 and Google Search Console, both in your account",
      "Server-side or first-party measurement where consent allows",
      "Must reconcile to platform revenue within about 5%",
    ],
  },
  {
    title: "Search and content",
    items: [
      "A crawler that can render JavaScript, run on a schedule",
      "Rank tracking split by branded and non-branded",
      "Keyword data we can export rather than screenshot",
    ],
  },
  {
    title: "Paid media and feeds",
    items: [
      "Google Ads and Merchant Center, Meta Ads Manager",
      "A feed tool that can write rules per margin tier",
      "Disapproval monitoring that alerts rather than reports",
    ],
  },
  {
    title: "Marketplace management",
    items: [
      "Amazon Seller Central and the equivalent for each marketplace",
      "Buy-box and suppression monitoring at listing level",
      "Repricing that respects a written floor, never unattended",
    ],
  },
  {
    title: "Conversion and experimentation",
    items: [
      "Session replay and heatmaps, sampled rather than always-on",
      "A testing tool that reports confidence, not just a winner",
      "Every test written up, including the ones that lost",
    ],
  },
  {
    title: "Email and lifecycle",
    items: [
      "Flow-level revenue reporting, not campaign totals",
      "Holdout groups supported natively, or we build them",
      "Deliverability monitoring separate from the sending platform",
    ],
  },
  {
    title: "Reporting and margin",
    items: [
      "Contribution margin per order, with carriage and fees in it",
      "One view joining store, ads, marketplace and shipping data",
      "Rebuilt from raw exports, so you can audit any figure",
    ],
  },
  {
    title: "Planning and communication",
    items: [
      "A shared board you can see without asking for a login",
      "Decisions written down where they were made",
      "No work that exists only in somebody’s inbox",
    ],
  },
  {
    title: "Development and QA",
    items: [
      "Version control and a staging environment before anything ships",
      "Redirect testing on every URL change, not a sample",
      "Core Web Vitals measured on field data, not lab scores",
    ],
  },
];

const limits = [
  {
    title: "Sell you a proprietary platform",
    body: "There is no Dazzle dashboard you would lose access to. Everything we report is assembled from tools you already own, which is why you can verify it and why you can leave.",
  },
  {
    title: "Hold reporting access behind us",
    body: "You get direct logins to every source, not a weekly PDF. If the only way to see your own performance is to ask your agency, that is a governance problem rather than a reporting one.",
  },
  {
    title: "Mark up software licences",
    body: "Anything paid is bought at cost and named in the proposal. Reselling tooling at a margin quietly changes which tool gets recommended.",
  },
  {
    title: "Present modelled numbers as measured",
    body: "Platform-modelled conversions and attributed revenue are labelled as such in every report. They are useful; they are not the same as an order in your store.",
  },
  {
    title: "Let a tool make a decision nobody can explain",
    body: "Automation runs inside rules we wrote and can show you. An unattended repricer or a fully automated bidding strategy with no floor is how accounts quietly lose money for months.",
  },
];

const outputs = [
  "Contribution margin per order, with carriage, returns and fees inside it",
  "Channel performance measured net of returns, not on gross revenue",
  "A single constraint for the quarter, and progress against it",
  "Every test written up, including the ones that lost",
  "What we got wrong since the last report",
];

const maintenanceRows = [
  {
    trigger: "Twice-yearly review",
    what: "Every tool is re-tested against ownership, visibility, data portability and cost. Anything that has moved to a model where the data cannot be exported, or where the account cannot sit in the client’s name, comes out at that review regardless of how good it is.",
  },
  {
    trigger: "When a client asks for a different tool",
    what: "If you already run something in a category, we use yours. Standardising a client onto our preference is convenient for us and costs you the history in the tool you already paid for.",
  },
  {
    trigger: "When a category stops being necessary",
    what: "Tools accumulate. If nothing in the last two quarters of work depended on a tool, it leaves the stack rather than sitting there as a line item and a login.",
  },
];

const related = [
  {
    label: "FRAMEWORK",
    title: "The eCommerce Growth Assessment",
    href: "/ecommerce-growth-assessment/",
    img: "/images/our-technology-stack-report.webp",
    imgAlt: "Comparing a printed report against a laptop",
    body: "Twelve checks with published thresholds — the first of which is whether your measurement reconciles at all.",
  },
  {
    label: "RESOURCES",
    title: "eCommerce checklists",
    href: "/resources/checklists/",
    img: "/images/our-technology-stack-checklist.webp",
    imgAlt: "A written checklist on a clipboard beside a laptop during eCommerce planning",
    body: "Working checklists you can run on your own account, with the tools you already have.",
  },
  {
    label: "FREE AUDIT",
    title: "Have us run it for you",
    href: "/ecommerce-audit/",
    img: "/images/our-technology-stack-audit.webp",
    imgAlt: "Senior strategists reviewing eCommerce performance charts during an audit session",
    body: "Five working days across six disciplines, using your accounts rather than ours.",
  },
];

export default function TechnologyStackPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">How we work</p>
              <p>
                <strong>Nine categories</strong>
              </p>
              <h1>The Technology We Run Your Account On</h1>
              <p className="lead">
                Nine categories of tooling, what each one has to do to earn its place, and who
                on the team actually touches it. The important part is not which brands we use
                — it is that every account is opened in your name, and you keep all of it if
                we part company.
              </p>
              <div className="btn-row">
                <a className="btn" href="#ts-stack">
                  See the nine categories
                </a>
                <Link className="btn btn-outline" href="/how-we-work/">
                  How we work
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/our-technology-stack-hero.webp"
                alt="Workspace with computers showing eCommerce performance graphs"
                width={1400}
                height={935}
                priority
              />
            </div>
          </div>
          <div className="stat-row">
            <div className="stat">
              <strong>Nine</strong>
              <span>Categories</span>
            </div>
            <div className="stat">
              <strong>Always yours</strong>
              <span>Account ownership</span>
            </div>
            <div className="stat">
              <strong>None</strong>
              <span>Proprietary platform</span>
            </div>
            <div className="stat">
              <strong>Twice a year</strong>
              <span>Reviewed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Why publish it */}
      <section className="section">
        <div className="container">
          <p className="lead" style={{ marginBottom: "2rem" }}>
            A working stack is judged on what it lets you verify, not on how many logos it
            has in it.
          </p>
          <div className="split">
            <div>
              <p className="eyebrow">Why publish it</p>
              <h2>The stack is not the differentiator</h2>
              <p>
                Agencies sell tooling because it is easy to show. What actually matters is
                who owns the accounts and whether you could verify our numbers without us.
              </p>
              <p>
                Every competent agency in this market runs broadly the same categories of
                tool, and most of the important ones are free. Anyone claiming a decisive
                advantage from their software is usually describing a dashboard that sits on
                top of the same data you already have.
              </p>
              <p>
                So this page is not a capability list. It is a statement of two things that
                do matter: what each category has to do before we will run an account on it,
                and the fact that every account is opened in your name. If you leave, the
                history stays with you — which is the only part of a stack that is genuinely
                worth asking about.
              </p>
              <ul className="check-list">
                <li>Accounts opened in your name, not ours, from day one</li>
                <li>No proprietary platform you would lose access to</li>
                <li>Nothing in the reporting you could not rebuild yourself</li>
              </ul>
            </div>
            <div className="split-img">
              <Image
                src="/images/our-technology-stack-data-viz.webp"
                alt="Screen showing eCommerce performance data visualisation"
                width={1400}
                height={935}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. The test — Four rules */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">The test</p>
          <h2>Four rules any tool has to pass</h2>
          <p className="lead">
            Applied before anything is added, and again at the twice-yearly review. Tools
            that stop passing get removed rather than tolerated.
          </p>
          <div className="card-grid card-grid-2">
            {rules.map((r) => (
              <article className="card" key={r.title}>
                <h3>{r.title}</h3>
                <ul className="check-list">
                  {r.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            The first rule is the one that costs agencies money, which is why it is rarely
            published. An account you own is an account you can take somewhere else.
          </p>
        </div>
      </section>

      {/* 4. The stack — Nine categories */}
      <section className="section" id="ts-stack">
        <div className="container">
          <p className="eyebrow">The stack</p>
          <h2>Nine categories, and what each has to do</h2>
          <p className="lead">
            Named tools appear only where they are effectively universal — the platform
            consoles nobody has a choice about. For the rest, what matters is the
            requirement, not the badge.
          </p>
          <div className="card-grid">
            {categories.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <ul className="check-list">
                  {c.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            Where a category needs a paid tool, the licence is bought at cost and named in
            the proposal. We do not mark tooling up, and we do not bill you for software we
            would own anyway.
          </p>
        </div>
      </section>

      {/* 5. Ownership */}
      <section className="section section-soft">
        <div className="container">
          <div className="split">
            <div className="split-img">
              <Image
                src="/images/our-technology-stack-team.webp"
                alt="Colleagues cooperating in an office reviewing performance data"
                width={1400}
                height={935}
              />
            </div>
            <div>
              <p className="eyebrow">Ownership</p>
              <h2>Who owns the Google Ads account, and every other one</h2>
              <p>
                The question worth asking any agency before you sign, and the one most
                contracts leave vague.
              </p>
              <p>
                You do. Every advertising, analytics, search console, marketplace and email
                account we work in is opened under your business, billed to your card where
                billing exists, and administered by you. We are added as a user with the
                access the work requires, and you can remove us without speaking to us
                first.
              </p>
              <p>
                This is not universal. Plenty of agencies run client campaigns inside their
                own manager account, which is convenient for them and expensive for you:
                leave, and the campaign history, the conversion data and the machine
                learning that history trained all stay behind. You start from zero
                somewhere else, which is a switching cost disguised as an operational
                detail.
              </p>
              <ul className="check-list">
                <li>Ad accounts under your billing, not inside our manager</li>
                <li>Analytics and Search Console properties owned by your domain</li>
                <li>Marketplace seller accounts always yours, never intermediated</li>
                <li>Email and testing platforms on your subscription, at cost</li>
              </ul>
              <p style={{ marginTop: "1rem" }}>
                If we already manage an account we opened before this policy applied, we
                transfer it to you at no cost, on request, at any point in the engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Limits — Five things we will not do */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Limits</p>
          <h2>Five things we will not do with tooling</h2>
          <p className="lead">
            Each of these is normal in this industry. That is why they are listed.
          </p>
          <div className="card-grid">
            {limits.map((l) => (
              <article className="card" key={l.title}>
                <h3>{l.title}</h3>
                <p>{l.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            If a tool would break one of the four rules further up this page, we do not
            adopt it — including when it is the market leader in its category.
          </p>
        </div>
      </section>

      {/* 7. The output */}
      <section className="section section-soft">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">The output</p>
              <h2>What the stack actually produces</h2>
              <p>
                Nine categories of tool exist to generate about five things. If a tool is
                not feeding one of them, it is a tab nobody opens.
              </p>
              <p>
                Tooling is only justified by what reaches a human. Everything above
                converges on a monthly view that puts contribution margin next to the
                channels that produced it, and a weekly view that is short enough to read
                on a phone.
              </p>
              <ul className="check-list">
                {outputs.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
              <p style={{ marginTop: "1rem" }}>
                The reporting rhythm itself — weekly, fortnightly, monthly, quarterly — is
                set out on <Link href="/how-we-work/">how we work</Link>.
              </p>
            </div>
            <div className="split-img">
              <Image
                src="/images/our-technology-stack-analytics.webp"
                alt="Analytics workspace showing eCommerce performance charts"
                width={1400}
                height={935}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Maintenance */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Maintenance</p>
          <h2>How the stack changes, and how often</h2>
          <p className="lead">
            Twice a year, in March and September, against the same four rules. A tool that
            no longer passes is removed rather than tolerated.
          </p>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                background: "#fff",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <thead>
                <tr style={{ background: "var(--navy)", color: "#fff", textAlign: "left" }}>
                  <th style={{ padding: "1rem", width: "32%" }}>Trigger</th>
                  <th style={{ padding: "1rem" }}>What happens</th>
                </tr>
              </thead>
              <tbody>
                {maintenanceRows.map((row) => (
                  <tr
                    key={row.trigger}
                    style={{ borderTop: "1px solid var(--border, #e5e9f0)" }}
                  >
                    <td
                      style={{
                        padding: "1rem",
                        fontWeight: 700,
                        verticalAlign: "top",
                      }}
                    >
                      {row.trigger}
                    </td>
                    <td style={{ padding: "1rem", verticalAlign: "top" }}>{row.what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 style={{ marginTop: "1.5rem" }}>What never changes</h3>
          <p>
            The four rules. A tool that fails rule one — you own the account — does not get
            adopted no matter what it does, because the cost lands entirely on you and only
            at the moment you want to leave.
          </p>
        </div>
      </section>

      {/* 9. FAQs */}
      <section className="section section-soft">
        <div className="container center">
          <p className="eyebrow">Questions</p>
          <h2>Technology stack FAQs</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            What people ask about tooling before they sign anything.
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 10. Related */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Related</p>
          <h2>How this connects to the work</h2>
          <p className="lead">The stack exists to serve these three things.</p>
          <div className="card-grid">
            {related.map((r) => (
              <article className="case-card" key={r.title}>
                <Image src={r.img} alt={r.imgAlt} width={1200} height={800} />
                <div className="case-body">
                  <p className="case-cat">{r.label}</p>
                  <h3>
                    <Link href={r.href}>{r.title}</Link>
                  </h3>
                  <p style={{ color: "var(--muted)" }}>{r.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt">
            <Link className="btn btn-outline" href="/guides/">
              All guides
            </Link>
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Want to know exactly what would run on your account?</h2>
          <p className="lead">
            Ask on a call and we will name every tool we would use for your platform, your
            channels and your catalogue size — including the ones you already have and
            should keep.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/book-a-strategy-call/">
              Book a Strategy Call
            </Link>
            <Link
              className="btn"
              href="/ecommerce-audit/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Request the Free Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
