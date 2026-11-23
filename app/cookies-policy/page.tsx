import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookies Policy | Dazzle Commerce",
  description:
    "Which cookies Dazzle Commerce uses, why we use them, how long they last and how to change your cookie preferences at any time.",
  alternates: { canonical: "https://dazzlecommerce.com/cookies-policy/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/cookies-policy/",
    siteName: "Dazzle Commerce",
    title: "Cookies Policy | Dazzle Commerce",
    description:
      "Which cookies Dazzle Commerce uses, why we use them, how long they last and how to change your cookie preferences at any time.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookies Policy | Dazzle Commerce",
    description:
      "Which cookies Dazzle Commerce uses, why we use them, how long they last and how to change your cookie preferences at any time.",
  },
};

const categories = [
  {
    id: "strictly-necessary",
    title: "1. Strictly necessary",
    intro:
      "Required for the site to work. These cannot be switched off because disabling them would break security, load balancing and remembering your consent choice.",
    cookies: [
      { name: "dz_consent", desc: "stores your cookie preferences (12 months, first-party)." },
      { name: "dz_session", desc: "maintains session state across pages (session, first-party)." },
      { name: "dz_csrf", desc: "protects forms against cross-site request forgery (session, first-party)." },
      { name: "__cf_bm", desc: "bot management and abuse prevention (30 minutes, third-party)." },
    ],
  },
  {
    id: "analytics-and-performance",
    title: "2. Analytics and performance",
    intro:
      "Help us understand which pages are useful and where people get stuck. Data is aggregated and IP addresses are truncated before storage.",
    cookies: [
      { name: "_ga", desc: "distinguishes unique visitors, Google Analytics 4 (13 months, third-party)." },
      { name: "_ga_<id>", desc: "persists session state for GA4 (13 months, third-party)." },
    ],
  },
  {
    id: "advertising-and-measurement",
    title: "3. Advertising and measurement",
    intro:
      "Used to measure campaign performance. Set only with your consent, and we operate Google Consent Mode v2 so no advertising identifiers are transmitted before you opt in.",
    cookies: [
      { name: "_gcl_au", desc: "attributes conversions to Google Ads campaigns (90 days, third-party)." },
      { name: "_fbp", desc: "measures and attributes Meta advertising (90 days, third-party)." },
      { name: "li_sugr / bcookie", desc: "LinkedIn campaign measurement (up to 12 months, third-party)." },
    ],
  },
  {
    id: "functional-and-preference",
    title: "4. Functional and preference",
    intro: null,
    cookies: [
      { name: "dz_prefs", desc: "remembers display preferences such as region (6 months, first-party)." },
      { name: "YSC / VISITOR_INFO1_LIVE", desc: "embedded YouTube video playback (session / 6 months, third-party)." },
    ],
  },
];

export default function CookiesPolicyPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <h1>Cookies Policy</h1>
          <p className="lead">
            Exactly which cookies this site sets, what each one does, how long it lasts and
            how to turn the optional ones off.
          </p>
          <p style={{ color: "var(--muted)", marginTop: "1rem" }}>
            <strong>Last updated:</strong> 1 August 2026 &nbsp;·&nbsp; Effective immediately
            upon posting
          </p>
        </div>
      </section>

      {/* 2. What Cookies Are — the live page has no table of contents */}
      <section className="section section-soft" id="what-cookies-are">
        <div className="container">
          <h2>What Cookies Are</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They
            let a site remember your actions and preferences over time. We also use similar
            technologies — local storage, pixels and software development kits — and refer to
            all of them as &ldquo;cookies&rdquo; throughout this policy.
          </p>
          <p>
            Cookies set by dazzlecommerce.com are <strong>first-party</strong>. Cookies set by
            services we embed, such as analytics or video, are <strong>third-party</strong>.
            Session cookies expire when you close your browser; persistent cookies survive
            until they expire or you delete them.
          </p>
        </div>
      </section>

      {/* 3. Your Choices */}
      <section className="section" id="your-choices">
        <div className="container">
          <h2>Your Choices</h2>
          <p>
            <strong>Essential cookies are always on</strong> because the site cannot function
            without them. Everything else — analytics, advertising and preference cookies — is
            off until you opt in through the consent banner, and you can change your mind at
            any time.
          </p>
          <p>
            To update your preferences, open the cookie settings link in the site footer, or
            clear cookies for this domain in your browser to be asked again on your next
            visit. Withdrawing consent does not affect processing that already took place
            lawfully. We honour Global Privacy Control (GPC) browser signals as a valid
            opt-out where applicable law recognises them.
          </p>
        </div>
      </section>

      {/* 4. Categories of Cookies We Use */}
      <section className="section section-soft" id="categories">
        <div className="container">
          <h2>Categories of Cookies We Use</h2>
          <div className="card-grid card-grid-2">
            {categories.map((cat) => (
              <article className="card" key={cat.id} id={cat.id}>
                <h3>{cat.title}</h3>
                {cat.intro ? <p>{cat.intro}</p> : null}
                <ul style={{ paddingLeft: "1.25rem", margin: "1rem 0 0" }}>
                  {cat.cookies.map((c) => (
                    <li key={c.name} style={{ marginBottom: "0.5rem" }}>
                      <strong>{c.name}</strong> — {c.desc}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p style={{ marginTop: "1.5rem" }}>
            Cookie names and durations are set by the providers and can change without notice.
            We review this list quarterly.
          </p>
        </div>
      </section>

      {/* 5. Third-Party Providers */}
      <section className="section" id="third-party-providers">
        <div className="container">
          <h2>Third-Party Providers</h2>
          <p>
            The third-party services that may set cookies on this site, and their own
            policies:{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google
            </a>{" "}
            (Analytics, Ads, Tag Manager),{" "}
            <a href="https://www.facebook.com/privacy/policy" target="_blank" rel="noopener noreferrer">
              Meta Platforms
            </a>
            ,{" "}
            <a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            ,{" "}
            <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">
              Cloudflare
            </a>{" "}
            and YouTube. We do not control these cookies. Blocking them in your browser will
            not affect the core functionality of this site.
          </p>
        </div>
      </section>

      {/* 6. Managing Cookies in Your Browser */}
      <section className="section section-soft" id="managing-cookies">
        <div className="container">
          <h2>Managing Cookies in Your Browser</h2>
          <p>
            Every major browser lets you view, block and delete cookies. Blocking all cookies
            will break parts of most websites, including this one.
          </p>
          <ul style={{ paddingLeft: "1.25rem" }}>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Chrome</strong> — Settings › Privacy and security › Third-party cookies.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Safari</strong> — Settings › Privacy › Manage Website Data.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Firefox</strong> — Settings › Privacy &amp; Security › Cookies and Site
              Data.
            </li>
            <li style={{ marginBottom: "0.5rem" }}>
              <strong>Edge</strong> — Settings › Cookies and site permissions.
            </li>
          </ul>
          <p>
            You can also opt out of Google Analytics across all sites using the{" "}
            <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">
              official browser add-on
            </a>
            .
          </p>
        </div>
      </section>

      {/* 7. Do Not Track */}
      <section className="section" id="do-not-track">
        <div className="container">
          <h2>Do Not Track</h2>
          <p>
            There is still no agreed industry standard for responding to Do Not Track browser
            signals, so we do not currently respond to them. We do honour Global Privacy
            Control signals, which are legally recognised in several jurisdictions.
          </p>
        </div>
      </section>

      {/* 8. Changes and Contact */}
      <section className="section section-soft" id="changes-and-contact">
        <div className="container">
          <h2>Changes and Contact</h2>
          <p>
            We update this policy whenever our cookie use changes materially and review it at
            least quarterly. Questions about cookies or tracking:{" "}
            <a href="mailto:privacy@dazzlecommerce.com">privacy@dazzlecommerce.com</a>. See
            also our <Link href="/privacy-policy/">Privacy Policy</Link> and{" "}
            <Link href="/gdpr-compliance/">GDPR Compliance</Link> pages.
          </p>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Questions about how we handle your data?</h2>
          <p>
            Our privacy team answers within one business day. Email
            privacy@dazzlecommerce.com or use the contact form — no ticket queue, no chatbot.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/contact/">
              Contact Us
            </Link>
            <Link
              className="btn"
              href="/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
