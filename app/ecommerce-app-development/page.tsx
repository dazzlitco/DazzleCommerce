import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";

export const metadata: Metadata = {
  title: "eCommerce App Development Company | Dazzle Commerce",
  description:
    "Cross-platform shopping apps, progressive web apps and private platform apps, built against a retention target. We will tell you if you do not need one.",
  alternates: { canonical: "https://dazzlecommerce.com/ecommerce-app-development/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/ecommerce-app-development/",
    siteName: "Dazzle Commerce",
    title: "eCommerce App Development Company | Dazzle Commerce",
    description:
      "Cross-platform shopping apps, progressive web apps and private platform apps, built against a retention target. We will tell you if you do not need one.",
    images: [
      {
        url: "/images/ecommerce-app-development-hero.webp",
        width: 1920,
        height: 1280,
        alt: "Shopper browsing an online store on a smartphone at home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "eCommerce App Development Company | Dazzle Commerce",
    description:
      "Cross-platform shopping apps, progressive web apps and private platform apps, built against a retention target. We will tell you if you do not need one.",
  },
};

const faqs: Faq[] = [
  {
    q: "Do we actually need an app?",
    a: "Probably not, and we would rather establish that before you spend anything. Apps earn their place when customers buy frequently and you have an owned channel capable of driving installs without paid spend. If purchases are occasional, or if the mobile site converts at half the desktop rate, the money goes further on fixing the mobile experience . We run that qualification first and we have talked brands out of app projects on the strength of it.",
  },
  {
    q: "How long does eCommerce app development take?",
    a: "A private platform app scoped to one job is the quickest. A progressive web app is next, because it shares a codebase with the website. A cross-platform shopping app with wallet checkout, push, deep links and analytics is the longest, and the store review queue adds time at the end that is outside anyone’s control. The variable that moves app timelines most is not development speed — it is how quickly product data, content and decisions come back from your side, which we scope explicitly at planning.",
  },
  {
    q: "What does an eCommerce app cost?",
    a: "It depends on which of the three build types fits and how much of the commerce layer already exists as a usable API. A private platform app is the smallest piece of work here; a progressive web app sits in the middle because it shares code with the website; a full cross-platform shopping app is several times either. We scope from requirements rather than quoting a package, and our pricing page explains the approach. Budget for the maintenance retainer as well as the build — an app without one stops working within about a year.",
  },
  {
    q: "Native or cross-platform?",
    a: "Cross-platform, unless there is a specific reason not to be. One React Native codebase shipping to both stores halves the maintenance and keeps the two platforms from drifting apart, which they always do when they are separate projects. Go native when you need device capabilities React Native does not reach well, when performance in a specific interaction genuinely matters, or when you already employ native engineers. Two native codebases is a standing commitment most brands underestimate.",
  },
  {
    q: "What about a progressive web app instead?",
    a: "Seriously consider it. A progressive web app gives you a home-screen icon, offline browsing, push notifications and no store review queue, from one codebase shared with your website, and nothing sold through it carries a store commission. The trade-offs are real: push on iOS is more limited, you get no app store listing as a discovery channel, and some device features are out of reach. For most brands who ask us for an app, this is the honest recommendation.",
  },
  {
    q: "Who owns the code and the store listings?",
    a: "You do, throughout. The repository, the Apple and Google developer accounts, the signing keys and the store listings are all in your name from the first day rather than transferred at the end. We document the build and the release process, so if you take it in-house or move to another agency the app keeps shipping. There is no version of this where leaving us breaks your app, and we would not ask you to sign one.",
  },
  {
    q: "How do we get people to install it?",
    a: "Installs are a marketing problem, not a build problem, and it is the half that usually goes unfunded. The channels that work are the ones you already own: email and SMS to existing customers, a prompt on the mobile site at the point of highest intent, packaging inserts, and post-purchase order tracking as the reason to install. Paid install campaigns are expensive and the installs are rarely worth what they cost. We scope the install plan alongside the build, because an app nobody installs is the most expensive thing on this page.",
  },
  {
    q: "Can you take over an app somebody else built?",
    a: "Yes. The first step is an audit of the codebase and the analytics together, because the two questions are whether the app is technically salvageable and whether anybody is using it. Sometimes the honest answer is that a rebuild costs less than continuing to patch, and sometimes it is that the app should be retired and the budget moved to the mobile site. We will tell you which before you commit anything.",
  },
];

const heroStats = [
  { value: "iOS + Android", note: "One shared codebase" },
  { value: "Your repo", note: "Code and accounts in your name" },
  { value: "Day 30", note: "Retention reviewed, not just launch" },
  { value: "Scoped", note: "Quoted from requirements" },
];

const heroChecks = [
  "We will tell you if a faster mobile site would beat an app for less money",
  "Built against a retention target, not a launch date, because an uninstalled app earns nothing",
  "Your repository, your developer accounts, your store listings — documented and handed over",
];

const problems = [
  {
    title: "It duplicates the mobile site",
    body: "An app that does exactly what your website already does on a phone gives a shopper no reason to install it, and no reason to keep it.",
  },
  {
    title: "Nobody owns installs",
    body: "The build gets budget and the acquisition does not. An app with no install channel is a product with no distribution.",
  },
  {
    title: "Retention was never a target",
    body: "Apps are judged on day-30 retention, not downloads. If nobody agreed a number before the build, nobody can tell afterwards whether it worked.",
  },
  {
    title: "The catalogue does not suit it",
    body: "Apps reward frequent, habitual purchase. A catalogue bought once every two years will not generate the reopen rate an app needs to justify itself.",
  },
  {
    title: "Two codebases, two release trains",
    body: "Separate native iOS and Android builds double the maintenance and guarantee the two drift apart. Most brands cannot resource that honestly.",
  },
  {
    title: "Checkout was rebuilt from scratch",
    body: "A hand-built app checkout rarely matches the hosted one it replaced, and wallet support is where it usually falls short.",
  },
  {
    title: "No plan for store review",
    body: "App Store and Play review can add a week to any release and can reject one outright. Teams that have not budgeted for it miss launch dates.",
  },
  {
    title: "Deep links were an afterthought",
    body: "Without universal links and app indexing, every campaign, email and search result sends app users back to the website.",
  },
  {
    title: "Push became spam",
    body: "Notification permission is granted once and revoked permanently. Overused in month one, the channel is gone by month three.",
  },
  {
    title: "Nobody budgeted for upkeep",
    body: "Two operating systems ship breaking changes every year. An app without a maintenance retainer stops working, and the first sign is usually a one-star review.",
  },
  {
    title: "Analytics never matched the website",
    body: "App and web analytics use different identity models. Without deliberate work the app looks either far better or far worse than it is.",
  },
  {
    title: "It was built on a template",
    body: "App-builder templates launch quickly and hit a ceiling almost immediately, and the code is rarely portable when you outgrow it.",
  },
];

const services = [
  {
    title: "Cross-Platform App Development",
    body: "One React Native codebase shipping to both iOS and Android, which is the right default for most brands.",
  },
  {
    title: "Native iOS & Android Development",
    body: "Separate native builds where device features, performance or an existing team genuinely justify two codebases.",
  },
  {
    title: "Progressive Web Apps",
    body: "An installable, offline-capable storefront with no app store dependency — often the honest alternative to an app.",
  },
  {
    title: "Custom Platform Apps",
    body: "Shopify, BigCommerce and WooCommerce apps built for your own store where no off-the-shelf app does the job properly.",
  },
  {
    title: "Headless Storefront Builds",
    body: "A React or Next.js front end on your existing commerce backend, where template control is the actual requirement.",
  },
  {
    title: "App Integrations & APIs",
    body: "Commerce, loyalty, search, reviews and support joined to the app through your platform APIs, with error handling.",
  },
  {
    title: "Release & Store Submission",
    body: "Signing, provisioning, store listings, review submissions and the staged rollouts that limit the damage of a bad build.",
  },
  {
    title: "App Maintenance & Support",
    body: "OS version upgrades, SDK deprecations, crash monitoring and the release cadence that keeps the app from quietly breaking.",
  },
];

const stack = [
  {
    title: "Commerce Backends",
    items: ["Shopify & Shopify Plus", "WooCommerce", "BigCommerce", "Adobe Commerce / Magento"],
  },
  {
    title: "App & Front-End",
    items: ["React Native", "Swift (iOS)", "Kotlin (Android)", "React & Next.js / PWA"],
  },
  {
    title: "App Infrastructure",
    items: [
      "Push notifications",
      "Deep & universal links",
      "App analytics & attribution",
      "Crash & performance monitoring",
      "Wallet & in-app payments",
      "CI, signing & staged rollout",
    ],
  },
];

const scope = [
  "Shopping apps",
  "Progressive web apps",
  "Product & browse experiences",
  "In-app checkout & wallets",
  "Subscription & reorder flows",
  "B2B ordering apps",
  "Loyalty & rewards",
  "Push & in-app messaging",
  "Account & order tracking",
  "Custom platform apps",
];

const ecosystem = [
  {
    title: "Payments",
    body: "Apple Pay, Google Pay, saved cards and in-app purchase rules.",
  },
  {
    title: "Catalogue & Stock",
    body: "Live availability, so the app never sells what the website knows is gone.",
  },
  {
    title: "Identity & CRM",
    body: "One customer record across app and web, including social and passkey sign-in.",
  },
  {
    title: "Orders & ERP",
    body: "App orders in the same queue as web orders, not a separate pile to reconcile.",
  },
  {
    title: "Push, Email & SMS",
    body: "One messaging plan across channels, so a customer is not told the same thing three times.",
  },
  {
    title: "Analytics & Attribution",
    body: "App events mapped to the same definitions as the website, or the two will never reconcile.",
  },
  {
    title: "Shipping & Tracking",
    body: "Live tracking in the app, which is the single most-used feature on most shopping apps.",
  },
  {
    title: "Search & Merchandising",
    body: "The same search engine and ranking rules as the site, not a second set of results.",
  },
  {
    title: "Support & Returns",
    body: "Helpdesk, chat and returns inside the app, with order context already attached.",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Qualify",
    body: "Purchase frequency, repeat rate, mobile revenue share and the install channel you actually have. If the numbers say a faster mobile site would beat an app, we say so and the project stops here.",
  },
  {
    num: "02",
    title: "Plan",
    body: "Native or cross-platform, a feature scope tied to a day-30 retention target, store accounts in your name, and a release calendar that assumes review delays rather than hoping against them.",
  },
  {
    num: "03",
    title: "Design",
    body: "Native patterns rather than a website in a frame — platform navigation, gestures, system fonts and dark mode, designed on the handset sizes your own analytics show.",
  },
  {
    num: "04",
    title: "Build",
    body: "Shipped to a test track in reviewable increments, with deep links, push, analytics and crash reporting wired in from the first build rather than retrofitted before launch.",
  },
  {
    num: "05",
    title: "Test",
    body: "Real devices across both operating systems and several OS versions, offline and poor-connection behaviour, and the failure paths — declined cards, expired sessions, an API that times out mid-checkout.",
  },
  {
    num: "06",
    title: "Submit & Release",
    body: "Signing, provisioning, store listings and privacy declarations, then a staged rollout to a small percentage first so a crash reaches dozens of customers rather than thousands.",
  },
  {
    num: "07",
    title: "Retain & Maintain",
    body: "Day-7 and day-30 retention reviewed against the target set at planning, alongside OS upgrades, SDK deprecations and crash triage. This is the stage that decides whether the build was worth it.",
  },
];

const byNeed = [
  {
    need: "Customers Buy Monthly or More",
    approach: "Cross-platform shopping app",
    body: "The one case where an app reliably pays: habitual reorder, saved payment, one-tap repeat and push that is actually useful.",
  },
  {
    need: "Mobile Site Is the Real Problem",
    approach: "Performance work, not an app",
    body: "If mobile converts at half of desktop, fix that first. It costs a fraction of an app and benefits every visitor rather than the few who install.",
  },
  {
    need: "You Want App-Like Without Stores",
    approach: "Progressive web app",
    body: "Installable, offline-capable and push-capable, with no review queue and no 30% store cut on anything sold inside it.",
  },
  {
    need: "Trade Buyers Reorder Constantly",
    approach: "B2B ordering app",
    body: "Contract pricing, order pads, approval flows and reorder from history, for buyers who place the same order every week.",
  },
  {
    need: "The Platform Cannot Do It",
    approach: "Custom platform app",
    body: "A private Shopify or BigCommerce app built for your store, which survives platform updates in a way a theme hack does not.",
  },
  {
    need: "An Existing App Is Failing",
    approach: "App audit & rebuild decision",
    body: "A code and analytics audit to establish what is salvageable. Sometimes the honest answer is that a rebuild costs less than continuing to patch.",
  },
  {
    need: "You Need Template Control",
    approach: "Headless storefront",
    body: "If the requirement is control over rendering and URLs rather than a phone icon, headless is the cheaper and more durable answer.",
  },
  {
    need: "The App Already Shipped",
    approach: "Maintenance & release retainer",
    body: "OS upgrades, SDK deprecations, crash triage and a named developer who already knows the codebase.",
  },
];

const foundations = [
  {
    title: "Performance",
    items: ["Cold start time", "Scroll and image performance", "Poor-connection behaviour"],
  },
  {
    title: "Reliability",
    items: ["Crash-free session rate", "Staged rollouts", "Rollback and forced-update paths"],
  },
  {
    title: "Privacy & Security",
    items: ["Store privacy declarations", "Tracking consent and ATT", "Token storage and session handling"],
  },
  {
    title: "Maintainability",
    items: [
      "One codebase where possible",
      "OS and SDK upgrade cadence",
      "Documented build and release",
      "Accounts and signing keys in your name",
    ],
  },
];

const whyUs = [
  {
    title: "We Will Talk You Out of It",
    body: "If your purchase frequency and install channel do not support an app, we will say so before quoting. That costs us the project and saves you the budget.",
  },
  {
    title: "Built Against a Retention Target",
    body: "Day-7 and day-30 retention agreed at planning and reviewed after launch. Downloads are a vanity number and we do not report them alone.",
  },
  {
    title: "The Team That Markets It",
    body: "The people building the app also have to drive installs and reopens afterwards, which changes what gets prioritised in the scope.",
  },
  {
    title: "Commerce, Not Generic Mobile",
    body: "Variant logic, wallet checkout, live stock and returns are our daily work rather than something looked up when a ticket mentions them.",
  },
  {
    title: "One Codebase by Default",
    body: "Cross-platform unless there is a specific reason not to be, because two native codebases double the maintenance and drift apart within a year.",
  },
  {
    title: "Store Submission Owned",
    body: "Signing, provisioning, privacy declarations and review responses handled by us, with the accounts and keys in your name throughout.",
  },
  {
    title: "Deep Links From Day One",
    body: "Universal links and app indexing built in, so email, search and paid campaigns open the app rather than bouncing users to the website.",
  },
  {
    title: "You Own Everything",
    body: "Your repository, your developer accounts, your signing keys, your store listings, documented at handover. There is no version of this where leaving us breaks your app.",
  },
];

const buildTypes = [
  {
    title: "Cross-platform shopping app",
    tagline: "React Native, one codebase, both app stores",
    images: [
      {
        src: "/images/ecommerce-app-development-browse-and-buy.webp",
        alt: "Shopper browsing a store on a smartphone",
        caption: "Browse and buy",
      },
      {
        src: "/images/ecommerce-app-development-one-tap-reorder.webp",
        alt: "Close-up of a shopper using a phone to buy online",
        caption: "One-tap reorder",
      },
    ],
    whenItFits:
      "Customers who buy monthly or more often, a meaningful share of revenue already on mobile, and an owned channel — email, SMS or packaging — capable of driving installs without paid spend.",
    technology:
      "React Native, your existing commerce backend via API, wallet checkout, push, universal links, crash and analytics SDKs",
    involves:
      "Native navigation and gestures rather than a wrapped website, saved payment and one-tap reorder, live order tracking, and a push plan with a frequency ceiling agreed before launch.",
    scope: [
      { value: "1", label: "Shared codebase" },
      { value: "2", label: "App stores" },
      { value: "Monthly", label: "Release cadence" },
      { value: "Day 30", label: "Retention reviewed" },
    ],
  },
  {
    title: "Progressive web app",
    tagline: "Installable storefront, no app store in the loop",
    images: [
      {
        src: "/images/ecommerce-app-development-installed-from-browser.webp",
        alt: "Shopper holding a smartphone while browsing online",
        caption: "Installed from the browser",
      },
      {
        src: "/images/ecommerce-app-development-works-offline.webp",
        alt: "Close-up of a mobile phone used for online shopping",
        caption: "Works offline",
      },
    ],
    whenItFits:
      "You want app-like behaviour — a home-screen icon, offline browsing, push — without two codebases, a review queue or a store commission. For most brands asking for an app, this is the honest answer.",
    technology:
      "React or Next.js, service worker, web app manifest, web push, your existing commerce backend and checkout",
    involves:
      "One front end serving both the website and the installed experience, cached catalogue for offline browsing, an install prompt placed where intent is highest, and the same checkout the website already uses.",
    scope: [
      { value: "0", label: "Store reviews to pass" },
      { value: "1", label: "Codebase, shared with web" },
      { value: "Same day", label: "Release, no queue" },
      { value: "0%", label: "Store commission" },
    ],
  },
  {
    title: "Private platform app",
    tagline: "Built for one store, distributed to nobody else",
    images: [
      {
        src: "/images/ecommerce-app-development-order-pad.webp",
        alt: "Shopper holding a smartphone and a payment card",
        caption: "Order pad",
      },
      {
        src: "/images/ecommerce-app-development-contract-pricing.webp",
        alt: "Digital wallet application open on a smartphone",
        caption: "Contract pricing",
      },
    ],
    whenItFits:
      "The platform cannot do something your business needs and the available public app does most of it badly — trade ordering, contract pricing, approval workflows, or an integration nobody has written.",
    technology:
      "A private Shopify, BigCommerce or WooCommerce app against the platform APIs, with its own admin surface and webhooks",
    involves:
      "Built against documented platform APIs rather than patched into a theme, so it survives platform updates. Scoped narrowly on purpose: a private app that tries to do five things is five things to maintain.",
    scope: [
      { value: "Private", label: "Distribution" },
      { value: "1", label: "Store it serves" },
      { value: "API", label: "Not theme code" },
      { value: "Yours", label: "Code and repository" },
    ],
  },
];

export default function EcommerceAppDevelopmentPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Apps &amp; Mobile</p>
              <h1>eCommerce App Development That Earns Its Place on a Phone</h1>
              <p className="lead">
                Native and cross-platform shopping apps, progressive web apps and custom
                platform apps, built by the team that then has to get people to install and
                reopen them. Most brands do not need an app. The ones that do need it for one
                specific reason, and the honest first conversation is about whether yours is
                one of them.
              </p>
              <ul className="check-list">
                {heroChecks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link className="btn" href="/ecommerce-audit/">
                  Book a technical audit
                </Link>
                <Link className="btn btn-outline" href="/pricing/">
                  How we scope and price
                </Link>
              </div>
            </div>
            <div className="hero-img">
              <Image
                src="/images/ecommerce-app-development-hero.webp"
                alt="Shopper browsing an online store on a smartphone at home"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
          <div className="stat-row">
            {heroStats.map((s) => (
              <div className="stat" key={s.value}>
                <strong>{s.value}</strong>
                <span>{s.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Why most eCommerce apps get built and then abandoned */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">The Problem</p>
          <h2>Why most eCommerce apps get built and then abandoned</h2>
          <p className="lead">
            Twelve reasons app projects fail, and almost none of them is a development
            problem. We raise these before quoting, because the cheapest app project is the
            one you decide not to do.
          </p>
          <div className="card-grid">
            {problems.map((p) => (
              <article className="card" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Our eCommerce app development services */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h2>Our eCommerce app development services</h2>
          <p className="lead">
            Eight services covering build, release and upkeep. Scope the eCommerce app
            development services you need from the audit rather than from a package list —
            most brands need two or three of these, not all eight.
          </p>
          <div className="card-grid">
            {services.map((s) => (
              <article className="card" key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "24px" }}>
            App work sits on top of the store rather than beside it — it depends on{" "}
            <Link href="/ecommerce-development/">eCommerce development</Link> , feeds off{" "}
            <Link href="/email-retention-marketing/">retention</Link> for installs and
            reopens, and is only worth doing once{" "}
            <Link href="/conversion-rate-optimization/">conversion</Link> on the mobile site
            is sound.
          </p>
        </div>
      </section>

      {/* 4. Platforms & technologies we build apps on */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Stack</p>
          <h2>Platforms &amp; technologies we build apps on</h2>
          <p className="lead">
            We recommend the approach that fits the business and the team that will maintain
            it, not the one we would rather build on.
          </p>
          <div className="card-grid">
            {stack.map((g) => (
              <article className="card" key={g.title}>
                <h3>{g.title}</h3>
                <ul className="check-list">
                  {g.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. What our eCommerce app development covers */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Scope</p>
          <h2>What our eCommerce app development covers</h2>
          <p className="lead">
            Ten things we build regularly. If what you need is not on this list it is worth
            a conversation rather than an assumption — most eCommerce app development work
            turns out to be three of these ten, not all of them.
          </p>
          <div className="card-grid">
            {scope.map((s) => (
              <article className="card" key={s}>
                <h3>{s}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. What the app has to connect to */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Ecosystem</p>
          <h2>What the app has to connect to</h2>
          <p className="lead">
            An app is a second front end on the same business. Everything below already
            exists for the website, and every one of these connections is a place where the
            app and the site can silently stop agreeing.
          </p>
          <div className="card-grid">
            <article className="card">
              <h3>Your App</h3>
              <p>Connected to the nine systems below</p>
            </article>
            {ecosystem.map((e) => (
              <article className="card" key={e.title}>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Our eCommerce app development process */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">The Process</p>
          <h2>Our eCommerce app development process</h2>
          <p className="lead">
            Seven stages. The first one is the one that saves most of the money, because it
            is where we establish whether you need an app at all.
          </p>
          <div className="card-grid card-grid-4">
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

      {/* 8. App development by business need */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">By Need</p>
          <h2>App development by business need</h2>
          <p className="lead">
            Eight needs and the approach each one calls for. Two of them are answered by not
            building an app.
          </p>
          <div className="card-grid">
            {byNeed.map((n) => (
              <article className="card" key={n.need}>
                <h3>{n.need}</h3>
                <h4>{n.approach}</h4>
                <p>{n.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Performance, privacy & release discipline */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Foundations</p>
          <h2>Performance, privacy &amp; release discipline</h2>
          <p className="lead">
            Four non-negotiables, all in scope by default. On an app these are harder to
            retrofit than on a website, because a bad release reaches a store listing and a
            review score before it reaches you.
          </p>
          <div className="card-grid card-grid-2">
            {foundations.map((f) => (
              <article className="card" key={f.title}>
                <h3>{f.title}</h3>
                <ul className="check-list">
                  {f.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Why choose our eCommerce app development company */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Why Us</p>
          <h2>Why choose our eCommerce app development company</h2>
          <p className="lead">
            Eight things that separate a commerce app from a general mobile project, and
            what to ask any eCommerce app development company before the statement of work
            is signed.
          </p>
          <div className="card-grid">
            {whyUs.map((w) => (
              <article className="card" key={w.title}>
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Three ways this gets built, and what each one commits you to */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Build types</p>
          <h2>Three ways this gets built, and what each one commits you to</h2>
          <p className="lead">
            Three approaches, with when each one fits, what it involves and the scope it
            commits you to. These are build types rather than client case studies — the
            figures below are scope, not results.
          </p>
          {buildTypes.map((b) => (
            <article className="card" key={b.title} style={{ marginBottom: "24px" }}>
              <p className="eyebrow">Build type</p>
              <h3>{b.title}</h3>
              <p>{b.tagline}</p>
              <div className="card-grid card-grid-2">
                {b.images.map((img) => (
                  <figure key={img.src} style={{ margin: 0 }}>
                    <Image src={img.src} alt={img.alt} width={1920} height={1280} />
                    <figcaption>{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
              <p className="eyebrow" style={{ marginTop: "20px" }}>
                When it fits
              </p>
              <p>{b.whenItFits}</p>
              <p className="eyebrow">Technology</p>
              <p>{b.technology}</p>
              <p className="eyebrow">What it involves</p>
              <p>{b.involves}</p>
              <p className="eyebrow">Typical scope</p>
              <div className="stat-row" style={{ marginTop: "12px" }}>
                {b.scope.map((s) => (
                  <div className="stat" key={s.label}>
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>
              <div className="btn-row" style={{ marginTop: "20px" }}>
                <Link className="btn" href="/request-a-proposal/">
                  Discuss this build
                </Link>
              </div>
            </article>
          ))}
          <div className="btn-row">
            <Link className="btn" href="/ecommerce-development/">
              See our development work
            </Link>
            <Link className="btn btn-outline" href="/portfolio/">
              Browse the portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 12. eCommerce app development FAQs */}
      <section className="section">
        <div className="container center">
          <p className="eyebrow">FAQs</p>
          <h2>eCommerce app development FAQs</h2>
          <p className="lead">
            Eight questions that come up before most app projects. More on{" "}
            <Link href="/faqs/">our full FAQ page</Link> .
          </p>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Find out whether an app is the right spend</h2>
          <p className="lead">
            Book a technical audit. We will review your purchase frequency, mobile revenue
            share, install channels and current mobile experience, and tell you whether an
            app is the right next investment or whether the same budget does more elsewhere
            — whether or not you hire us.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/ecommerce-audit/">
              Book a technical audit
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
