import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "How We Work | Dazzle Commerce",
  description:
    "The way a Dazzle Commerce engagement actually runs: the first 30 days, the weekly rhythm, who you work with, how work is prioritised and how it is reported.",
  alternates: { canonical: "https://dazzlecommerce.com/how-we-work/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/how-we-work/",
    siteName: "Dazzle Commerce",
    title: "How We Work | Dazzle Commerce",
    description:
      "The way a Dazzle Commerce engagement actually runs: the first 30 days, the weekly rhythm, who you work with, how work is prioritised and how it is reported.",
    images: [
      {
        url: "/images/how-we-work-hero.webp",
        width: 1400,
        height: 933,
        alt: "eCommerce team working through a growth plan around a table",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How We Work | Dazzle Commerce",
    description:
      "The way a Dazzle Commerce engagement actually runs: the first 30 days, the weekly rhythm, who you work with, how work is prioritised and how it is reported.",
  },
};

const faqs: Faq[] = [
  {
    q: "How long before we see results?",
    a: "It depends entirely on which constraint is binding. Conversion and merchandising fixes can move within weeks because the traffic already exists. Organic search typically takes two to three months to show and longer to compound. Marketplace rank responds to sales velocity, so it follows the work rather than leading it. Anyone promising a timeline before seeing your account is guessing.",
  },
  {
    q: "Do we have to sign a long contract?",
    a: "No. Engagements run for an initial ninety days — the minimum honest window for the work to produce a readable result — and then month to month. Our average client tenure is considerably longer than that, which is the only argument for our retention we think is worth making.",
  },
  {
    q: "Who owns the accounts and the data?",
    a: "You do, throughout. We work inside your ad accounts, your analytics and your store rather than agency-owned equivalents. A handover document is maintained from month one, so leaving is an administrative task rather than a negotiation.",
  },
  {
    q: "Will we work with the people we meet in the pitch?",
    a: "Yes. The account lead and the specialists in the first conversation are the ones on the account. We do not run a separate new business team, which is partly why we take on fewer clients than we could.",
  },
  {
    q: "What if we already have an internal team?",
    a: "Common, and usually the better setup. We work alongside internal teams frequently, either covering a discipline they do not have or taking the execution load while they keep strategy. The plan says explicitly who owns what, because that is where these arrangements usually break.",
  },
  {
    q: "How do you charge?",
    a: "A monthly fee scoped to the plan, with media spend and third-party tooling billed separately and transparently. We do not take a percentage of ad spend, because it rewards us for spending more rather than for spending well. Pricing covers the structure in more detail.",
  },
  {
    q: "What happens if a month goes badly?",
    a: "You hear about it that week, not at the monthly review. The report leads with what went wrong, what we think caused it and what changes. Accounts that go quiet during a bad month are accounts where somebody is hoping it recovers before anyone notices.",
  },
  {
    q: "Can we start with just one discipline?",
    a: "Yes, and often that is the right way in. Plenty of engagements start with a single service and widen only when the numbers justify it. Starting with everything at once is usually a sign nobody has decided what the constraint actually is.",
  },
];

const principles = [
  {
    title: "Contribution, not vanity metrics",
    bullets: [
      "Every plan is argued in contribution margin, not revenue",
      "Platform-reported ROAS is used to optimise, never to decide",
      "Returns and fulfilment sit inside the numbers we report",
      "If growth is not profitable, we say so rather than celebrating it",
    ],
  },
  {
    title: "Say the inconvenient thing early",
    bullets: [
      "A bad month is reported in the week it happens, not at quarter end",
      "If the brief is wrong, we argue before we execute",
      "We tell you when a channel should be cut, including ours",
      "No finding is withheld because it is awkward to explain",
    ],
  },
  {
    title: "Sequence beats effort",
    bullets: [
      "Work is ranked by revenue impact against effort before it starts",
      "Fewer things done properly, in an order that compounds",
      "Nothing enters the plan without an owner and a date",
      "We decline work that would produce activity rather than results",
    ],
  },
  {
    title: "You own everything",
    bullets: [
      "Accounts, data, creative and documentation are yours throughout",
      "No agency-owned ad accounts or pixels holding your history",
      "Month-to-month terms, so leaving is never the expensive option",
      "A handover document exists from month one, not from your notice",
    ],
  },
];

const first30Days = [
  {
    num: "01",
    title: "Days 1–5: access and instrumentation",
    body: "We take read access to analytics, ad accounts, the store admin and marketplace consoles, then check whether the numbers reconcile with each other. On roughly half the accounts we inherit, they do not, and everything downstream depends on fixing that first.",
  },
  {
    num: "02",
    title: "Days 6–15: the audit",
    body: "The same twelve-point review we publish, run against your store with your figures: traffic quality, product pages, checkout, retention, marketplace health, margin. Every finding scored on revenue impact and effort.",
  },
  {
    num: "03",
    title: "Days 16–22: the plan",
    body: "A ninety-day plan with a forecast, named owners, and the sequence in which the work happens. You see it before anything is executed, and you are welcome to disagree with the order.",
  },
  {
    num: "04",
    title: "Days 23–30: first work ships",
    body: "The highest-impact, lowest-effort items go live. Usually these are unglamorous — a delivery threshold, a broken canonical, a suppressed listing — and usually they pay for the first month.",
  },
];

const cadence = [
  {
    label: "Weekly",
    body: "a written update — what shipped, what moved, what is next",
  },
  {
    label: "Fortnightly",
    body: "a working call with the specialists, not a status read-out",
  },
  {
    label: "Monthly",
    body: "performance review against the plan, in contribution terms",
  },
  {
    label: "Quarterly",
    body: "re-plan, with the next ninety days re-scored from scratch",
  },
  {
    label: "Always",
    body: "a shared channel for the things that will not wait a week",
  },
];

const insideWork = [
  {
    time: "Week one",
    title: "Making the numbers agree",
    body: "Platform, analytics and ad reporting rarely reconcile on an account nobody has audited. Everything downstream depends on fixing that before any conclusion is drawn from it.",
    img: "/images/how-we-work-numbers-agree.webp",
    imgAlt: "Printed performance charts and a notebook laid out for cross-checking reporting figures",
  },
  {
    time: "Weeks two and three",
    title: "Scoring the findings",
    body: "Every finding from the audit gets an impact estimate built from your own traffic, conversion and margin, and an effort estimate from the person who would do the work.",
    img: "/images/how-we-work-strategy-board.webp",
    imgAlt: "Planning board covered in notes during an eCommerce growth strategy session",
  },
  {
    time: "Week four",
    title: "Agreeing the sequence",
    body: "The plan is presented before anything is executed, including the work we are recommending against. You are welcome to disagree with the order.",
    img: "/images/how-we-work-agree-sequence.webp",
    imgAlt: "A written schedule setting out the order work will be carried out in",
  },
  {
    time: "Month two onward",
    title: "Shipping, then reading the result",
    body: "Work goes live in a sequence slow enough that the result can be attributed. Changing forty things in a week teaches you nothing about which one mattered.",
    img: "/images/how-we-work-reading-result.webp",
    imgAlt: "A performance graph on a laptop screen being read after work has gone live",
  },
];

const teamRows = [
  {
    role: "Account lead",
    body: "Owns the plan, the commercial relationship and the numbers. Your single point of escalation, and the person who tells you when something is not working. Present in every call.",
  },
  {
    role: "Discipline specialists",
    body: "The people doing the actual work in SEO, paid media, conversion, retention or marketplaces. You speak to them directly rather than through a relay.",
  },
  {
    role: "Analyst",
    body: "Owns measurement: making sure platform, analytics and finance data agree, and that the reporting means what it says. The least visible role and frequently the most valuable.",
  },
  {
    role: "Creative and content",
    body: "Production capacity for imagery, video and copy, brought in at the volume the plan actually needs rather than as a fixed retainer line.",
  },
  {
    role: "Developer",
    body: "Available for the store changes the plan depends on, through eCommerce development. Scoped per piece of work rather than assumed.",
  },
];

const prioritisingChecks = [
  "Impact estimated from your traffic, conversion and margin",
  "Effort estimated in days by the person who would do the work",
  "Dependencies mapped, so work does not get undone later",
  "The plan shows what we are not doing, and why",
  "Re-scored every quarter, because the constraint moves",
];

const sequenceRows = [
  {
    band: "High impact, low effort",
    sits: "Delivery thresholds, indexation errors, guest checkout, suppressed listings, break-even calculations",
    when: "Weeks 1–4",
  },
  {
    band: "High impact, high effort",
    sits: "Category architecture, product content at scale, replatforming, marketplace catalogue rebuilds",
    when: "Weeks 4–12, sequenced",
  },
  {
    band: "Low impact, low effort",
    sits: "Alt text, minor copy fixes, small template tidying",
    when: "Absorbed alongside larger work",
  },
  {
    band: "Low impact, high effort",
    sits: "Homepage redesigns, tooling migrations, brand refreshes without a commercial trigger",
    when: "Declined, with the reasoning written down",
  },
];

const reportingChecks = [
  "Contribution and contribution margin, not just revenue and ROAS",
  "Blended figures alongside platform-reported ones, with the gap explained",
  "Results against the plan, including the items that slipped",
  "What we would do differently, stated plainly",
  "The next thirty days, with owners and dates",
];

const yourSide = [
  {
    title: "Access, early",
    bullets: [
      "Admin or read access to analytics, ad accounts and the store",
      "Marketplace seller central access where relevant",
      "Cost of goods and fulfilment costs, so margin work is possible",
      "Delays here push the whole plan back, one day for one day",
    ],
  },
  {
    title: "Decisions, within a week",
    bullets: [
      "A named person who can approve work without a committee",
      "A week is our working assumption for a decision to come back",
      "Where approval genuinely takes longer, we plan around it",
      "Unmade decisions are the most common cause of a slipped quarter",
    ],
  },
  {
    title: "A few hours a month",
    bullets: [
      "One monthly review, one fortnightly working call",
      "Occasional questions that only you can answer",
      "Less than most brands expect, and not zero",
      "An engagement with no client time in it does not work",
    ],
  },
  {
    title: "Candour about constraints",
    bullets: [
      "Tell us about the stock problem, the cash position, the politics",
      "A plan built without the real constraints is a plan for a different business",
      "We would rather work within a limit than discover it late",
      "Nothing you tell us changes what we report back to you",
    ],
  },
];

const boundaries = [
  {
    title: "Own your accounts",
    body: "Ad accounts, analytics properties, pixels, domains and marketplace accounts stay in your name throughout. If leaving us would mean losing your advertising history, the relationship is being held together by the wrong thing.",
  },
  {
    title: "Report metrics we know are misleading",
    body: "We will not lead a report with platform-reported ROAS summed across channels, or with revenue growth that contribution does not support. If a number flatters the work but misleads the decision, it does not go at the top of the page.",
  },
  {
    title: "Tie you into a long contract",
    body: "Engagements run month to month after an initial ninety days, which is the minimum honest window for the work to show a result. If the work is good, the contract is unnecessary; if it is not, the contract is just an expensive way to delay the conversation.",
  },
];

const gettingStarted = [
  {
    num: "01",
    step: "Step one",
    title: "A conversation",
    body: "Thirty minutes on what you sell, where it sells and what is not working. No deck, no discovery process.",
    cta: "Talk to us →",
    href: "/contact/",
  },
  {
    num: "02",
    step: "Step two",
    title: "The free audit",
    body: "We run the twelve-point review against your store and hand you the findings ranked by revenue impact. Yours to keep either way.",
    cta: "Request an audit →",
    href: "/ecommerce-audit/",
  },
  {
    num: "03",
    step: "Step three",
    title: "A plan and a price",
    body: "A ninety-day plan with a forecast and a scope. You see what the work is before you agree to any of it.",
    cta: "See how pricing works →",
    href: "/pricing/",
  },
  {
    num: "04",
    step: "Step four",
    title: "The first thirty days",
    body: "Access, audit, plan, first work shipped — in that order, with nothing launched in the first fortnight.",
    cta: "Back to month one →",
    href: "#hww-onboarding",
  },
];

const readOn = [
  {
    title: "The 12-point growth assessment",
    href: "/ecommerce-growth-assessment/",
    body: "The review we run in the first fortnight, published in full so you can run it yourself if you would rather.",
  },
  {
    title: "Case studies",
    href: "/case-studies/",
    body: "Six engagements with the analysis, the sequence and the numbers, including what would not have worked.",
  },
  {
    title: "Pricing",
    href: "/pricing/",
    body: "How engagements are scoped and charged, and what sits inside a monthly fee.",
  },
];

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "32px",
  background: "#fff",
  border: "1px solid var(--line)",
  borderRadius: "var(--radius)",
  overflow: "hidden",
  fontSize: "0.98rem",
};

const thStyle: React.CSSProperties = {
  textAlign: "left",
  padding: "14px 18px",
  background: "var(--bg-soft)",
  color: "var(--navy)",
  fontWeight: 800,
  borderBottom: "1px solid var(--line)",
};

const tdStyle: React.CSSProperties = {
  padding: "16px 18px",
  borderBottom: "1px solid var(--line)",
  color: "var(--muted)",
  verticalAlign: "top",
};

export default function HowWeWorkPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Our process</p>
              <h1>How We Work</h1>
              <p className="lead">
                Most agency process pages describe a methodology nobody follows. This one
                describes what actually happens: what the first month looks like, who you
                speak to each week, how work gets prioritised when everything looks urgent,
                and what we report when the numbers are not good.
              </p>
              <ul className="check-list">
                <li>A named team, not an account manager relaying messages</li>
                <li>Work ranked by revenue impact against effort, agreed before it starts</li>
                <li>Month-to-month terms — the work holds the account, not the contract</li>
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Start with a free audit
                </Link>
                <Link className="btn btn-outline" href="#hww-onboarding">
                  See the first 30 days
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/how-we-work-hero.webp"
                alt="eCommerce team working through a growth plan around a table"
                width={1400}
                height={933}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Principles */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Principles</p>
          <h2>Four rules that govern every engagement</h2>
          <p className="lead">
            These are not values on a wall. Each one changes a decision we make regularly,
            and each one occasionally costs us money.
          </p>
          <div className="card-grid card-grid-2">
            {principles.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <ul className="check-list">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="lead" style={{ marginTop: "32px" }}>
            The last one is the one prospects check. Agency-owned ad accounts are the most
            common way a brand discovers it cannot leave.
          </p>
        </div>
      </section>

      {/* 3. The first 30 days */}
      <section className="section section-soft" id="hww-onboarding">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">
                The first thirty days decide whether the following twelve months are any good.
              </p>
              <h2>What actually happens in month one</h2>
              <p>
                Nothing is launched in the first fortnight. That is deliberate: the most
                expensive mistakes we see were made quickly by people who wanted to look busy.
              </p>
              {first30Days.map((s) => (
                <div key={s.num} style={{ marginTop: "1.25rem" }}>
                  <p className="card-num" style={{ fontSize: "1.4rem" }}>
                    {s.num}
                  </p>
                  <h3>{s.title}</h3>
                  <p style={{ color: "var(--muted)" }}>{s.body}</p>
                </div>
              ))}
              <p style={{ marginTop: "1.5rem" }}>
                If we find nothing worth doing, we tell you that too. It is rare, and it has
                happened.
              </p>
              <p style={{ color: "var(--muted)" }}>
                Kickoff is a working session with the people who will run the account, not a
                presentation.
              </p>
            </div>
            <div className="split-img">
              <Image
                src="/images/how-we-work-kickoff.webp"
                alt="Kickoff meeting with a team reviewing documents together"
                width={1400}
                height={933}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. The rhythm */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div className="split-img">
              <Image
                src="/images/how-we-work-rhythm.webp"
                alt="Weekly team call running on a laptop from a home workspace"
                width={1400}
                height={933}
              />
            </div>
            <div>
              <p className="eyebrow">The rhythm</p>
              <h2>What a normal month looks like once you are running</h2>
              <p>
                Predictable contact, so nobody has to chase for an update and nobody sits
                through a meeting that could have been a number.
              </p>
              <p>
                The fortnightly call is with the people doing the work, which is the part
                most brands say was missing before.
              </p>
              <p>
                The cadence below is the default. It flexes for peak trading, launches and
                migrations, but the principle does not: you should always know what is being
                worked on this week and what it is expected to produce.
              </p>
              <ul className="check-list">
                {cadence.map((c) => (
                  <li key={c.label}>
                    <strong>{c.label}:</strong> {c.body}
                  </li>
                ))}
              </ul>
              <p>
                Everything is written down. If a decision was made on a call, it appears in
                the weekly update, because verbal-only decisions are how accounts drift.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Inside the work */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Inside the work</p>
          <h2>What the first ninety days actually look like</h2>
          <p className="lead">
            Not a methodology diagram. These are the four things that take up most of the time
            in a new engagement.
          </p>
          <div className="card-grid card-grid-2">
            {insideWork.map((w) => (
              <article className="case-card" key={w.title}>
                <Image src={w.img} alt={w.imgAlt} width={1200} height={800} />
                <div className="case-body">
                  <p className="case-cat">{w.time}</p>
                  <h3>{w.title}</h3>
                  <p style={{ color: "var(--muted)" }}>{w.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="lead" style={{ marginTop: "32px" }}>
            The unglamorous first week is the one that most often gets skipped elsewhere, and
            the one that decides whether the reporting can be trusted.
          </p>
        </div>
      </section>

      {/* 6. Your team */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Your team</p>
          <h2>Who you actually work with</h2>
          <p className="lead">
            Small, named and stable. You are not handed to a different pod when something
            goes wrong.
          </p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Role</th>
                <th style={thStyle}>What they own</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ ...tdStyle, fontWeight: 700, color: "var(--navy)" }}>
                  Account lead
                </td>
                <td style={tdStyle}>{teamRows[0].body}</td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, fontWeight: 700, color: "var(--navy)" }}>
                  Discipline specialists
                </td>
                <td style={tdStyle}>
                  The people doing the actual work in{" "}
                  <Link href="/ecommerce-seo/">SEO</Link>,{" "}
                  <Link href="/ecommerce-ppc/">paid media</Link>,{" "}
                  <Link href="/conversion-rate-optimization/">conversion</Link>,{" "}
                  <Link href="/email-retention-marketing/">retention</Link> or{" "}
                  <Link href="/marketplace-management-marketing/">marketplaces</Link>. You
                  speak to them directly rather than through a relay.
                </td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, fontWeight: 700, color: "var(--navy)" }}>
                  Analyst
                </td>
                <td style={tdStyle}>{teamRows[2].body}</td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, fontWeight: 700, color: "var(--navy)" }}>
                  Creative and content
                </td>
                <td style={tdStyle}>
                  Production capacity for{" "}
                  <Link href="/ecommerce-creative-content/">imagery, video and copy</Link>,
                  brought in at the volume the plan actually needs rather than as a fixed
                  retainer line.
                </td>
              </tr>
              <tr>
                <td style={{ ...tdStyle, fontWeight: 700, color: "var(--navy)" }}>
                  Developer
                </td>
                <td style={tdStyle}>
                  Available for the store changes the plan depends on, through{" "}
                  <Link href="/ecommerce-development/">eCommerce development</Link>. Scoped
                  per piece of work rather than assumed.
                </td>
              </tr>
            </tbody>
          </table>
          <div className="card" style={{ marginTop: "24px" }}>
            <h3>Who you will not meet</h3>
            <p>
              A dedicated account manager whose role is to relay questions between you and
              the team. We do not have that role, deliberately.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Prioritising */}
      <section className="section section-soft">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">Prioritising</p>
              <h2>How we decide what to do first when everything looks urgent</h2>
              <p>
                Every audit produces more findings than any team can act on. The scoring is
                what turns a list into a plan.
              </p>
              <p>
                Each finding gets two scores: the revenue impact if it were fixed, and the
                effort to fix it. Impact is estimated from your own numbers — traffic,
                conversion rate, margin — rather than from a general benchmark, so the
                estimate can be argued with rather than accepted on faith.
              </p>
              <ul className="check-list">
                {prioritisingChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p>
                You see the scores. If you disagree with an impact estimate, that is a useful
                conversation rather than an inconvenience — you know things about your
                business that the data does not show.
              </p>
              <p>
                Findings are scored in the open. Nothing enters the plan because it is the
                work we happen to enjoy.
              </p>
            </div>
            <div className="split-img">
              <Image
                src="/images/how-we-work-audit-figure.webp"
                alt="Hands pointing at printed data charts while a team works through audit findings"
                width={1400}
                height={933}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. The sequence */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">The sequence</p>
          <h2>How the scores turn into an order</h2>
          <p className="lead">
            A simplified view of how a quarter typically sequences on a store with no
            previous agency work.
          </p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Band</th>
                <th style={thStyle}>What tends to sit here</th>
                <th style={thStyle}>When it happens</th>
              </tr>
            </thead>
            <tbody>
              {sequenceRows.map((r) => (
                <tr key={r.band}>
                  <td style={{ ...tdStyle, fontWeight: 700, color: "var(--navy)" }}>
                    {r.band}
                  </td>
                  <td style={tdStyle}>{r.sits}</td>
                  <td style={tdStyle}>{r.when}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="lead" style={{ marginTop: "32px" }}>
            The fourth row is the one that matters. Work we decline is documented, so the
            decision can be revisited when circumstances change.
          </p>
        </div>
      </section>

      {/* 9. Reporting */}
      <section className="section section-soft">
        <div className="container">
          <div className="split">
            <div className="split-img">
              <Image
                src="/images/how-we-work-report.webp"
                alt="Reviewing performance reporting on a laptop with printed figures"
                width={1400}
                height={933}
              />
            </div>
            <div>
              <p className="eyebrow">Reporting</p>
              <h2>What lands in your inbox, and what it says</h2>
              <p>
                Reporting exists so you can make decisions, not so we can demonstrate
                activity.
              </p>
              <p>
                If the month was poor, the report says so in the first paragraph rather than
                the appendix.
              </p>
              <p>
                The monthly report leads with contribution, not revenue, and it states what
                we got wrong alongside what worked. A report where everything went well every
                month is a report nobody is reading carefully.
              </p>
              <ul className="check-list">
                {reportingChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <p>
                The{" "}
                <Link href="/resources/templates/ecommerce-kpi-dashboard-template/">
                  KPI dashboard template
                </Link>{" "}
                we publish is a simplified version of the model behind these reports, if you
                want to run the same numbers yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Your side */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Your side</p>
          <h2>What we need from you</h2>
          <p className="lead">
            Engagements fail for predictable reasons, and three of the four are on the client
            side. Being explicit about this at the start avoids the conversation six months
            in.
          </p>
          <div className="card-grid card-grid-2">
            {yourSide.map((c) => (
              <article className="card" key={c.title}>
                <h3>{c.title}</h3>
                <ul className="check-list">
                  {c.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="lead" style={{ marginTop: "32px" }}>
            None of this requires a dedicated internal resource. It requires one person who
            can decide things.
          </p>
        </div>
      </section>

      {/* 11. Boundaries */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Boundaries</p>
          <h2>What we will not do</h2>
          <p className="lead">
            Stated here so it never has to be an awkward conversation later.
          </p>
          <div className="card-grid">
            {boundaries.map((b) => (
              <article className="card" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
          <p className="lead" style={{ marginTop: "32px" }}>
            We also decline work we do not think will pay. It happens a few times a year,
            and it is usually the most useful call a prospect has that month.
          </p>
        </div>
      </section>

      {/* 12. Getting started */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Getting started</p>
          <h2>Four steps, and you can stop at any of them</h2>
          <p className="lead">
            Nothing here commits you to anything until the third step.
          </p>
          <div className="card-grid card-grid-4">
            {gettingStarted.map((s) => (
              <article className="card" key={s.num}>
                <p className="card-num">{s.num}</p>
                <p className="case-cat">{s.step}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <p style={{ marginTop: "1rem" }}>
                  <Link href={s.href} style={{ fontWeight: 700 }}>
                    {s.cta}
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 13. FAQs */}
      <section className="section section-soft">
        <div className="container center">
          <p className="eyebrow">Questions</p>
          <h2>How we work — FAQs</h2>
          <p className="lead" style={{ margin: "0 auto" }}>
            The questions prospects ask before signing anything.
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 14. Read on */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Read on</p>
          <h2>The detail behind the process</h2>
          <p className="lead">
            Three pages that show the method rather than describe it.
          </p>
          <div className="card-grid">
            {readOn.map((r) => (
              <article className="card" key={r.title}>
                <h3>
                  <Link href={r.href}>{r.title}</Link>
                </h3>
                <p>{r.body}</p>
                <p style={{ marginTop: "1rem" }}>
                  <Link href={r.href} style={{ fontWeight: 700 }}>
                    Read more →
                  </Link>
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 15. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>The first step is a free audit, not a contract</h2>
          <p className="lead">
            We run the twelve-point review against your store, rank every finding by revenue
            impact, and tell you what we would do first. You keep the findings whether or
            not you work with us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Get your free eCommerce audit
            </Link>
            <Link
              className="btn"
              href="/contact/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
