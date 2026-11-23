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

const toc = [
  { href: "#what-cookies-are", label: "What Cookies Are" },
  { href: "#your-choices", label: "Your Choices" },
  { href: "#categories", label: "Categories of Cookies We Use" },
  { href: "#third-party-providers", label: "Third-Party Providers" },
  { href: "#managing-cookies", label: "Managing Cookies in Your Browser" },
  { href: "#do-not-track", label: "Do Not Track" },
  { href: "#changes-and-contact", label: "Changes and Contact" },
  { href: "#cookie-preferences", label: "Cookie Preferences" },
];

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

/* Working cookie-preference controls. The live copy describes opting in
   through the consent banner and changing preferences at any time, but no
   preference widget exists in the fetched live HTML, so this panel
   implements exactly the choices the policy describes and stores them
   under the policy's own dz_consent key. */
const preferencesScript = `
(function () {
  var KEY = "dz_consent";
  var boxes = {
    analytics: document.getElementById("pref-analytics"),
    advertising: document.getElementById("pref-advertising"),
    functional: document.getElementById("pref-functional")
  };
  var status = document.getElementById("cookie-pref-status");
  function read() {
    try {
      var saved = JSON.parse(window.localStorage.getItem(KEY) || "null");
      if (saved) {
        boxes.analytics.checked = !!saved.analytics;
        boxes.advertising.checked = !!saved.advertising;
        boxes.functional.checked = !!saved.functional;
      }
    } catch (e) {}
  }
  function save(message) {
    var value = {
      necessary: true,
      analytics: boxes.analytics.checked,
      advertising: boxes.advertising.checked,
      functional: boxes.functional.checked,
      updatedAt: new Date().toISOString()
    };
    try { window.localStorage.setItem(KEY, JSON.stringify(value)); } catch (e) {}
    if (status) status.textContent = message;
  }
  function setAll(on) {
    boxes.analytics.checked = on;
    boxes.advertising.checked = on;
    boxes.functional.checked = on;
  }
  var acceptAll = document.getElementById("pref-accept-all");
  var rejectAll = document.getElementById("pref-reject-all");
  var saveBtn = document.getElementById("pref-save");
  if (acceptAll) acceptAll.addEventListener("click", function () { setAll(true); save("All cookies accepted. Your preferences have been saved."); });
  if (rejectAll) rejectAll.addEventListener("click", function () { setAll(false); save("Only strictly necessary cookies are on. Your preferences have been saved."); });
  if (saveBtn) saveBtn.addEventListener("click", function () { save("Your cookie preferences have been saved."); });
  read();
})();
`;

export default function CookiesPolicyPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <p style={{ fontSize: "0.9rem", color: "var(--muted)", margin: "0 0 1rem" }}>
            <Link href="/">Home</Link> &nbsp;›&nbsp; Cookies Policy
          </p>
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

      {/* 2. On this page */}
      <section className="section" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.25rem" }}>On this page</h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "1rem 0 0",
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem 1.5rem",
            }}
          >
            {toc.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. What Cookies Are */}
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

      {/* 4. Your Choices */}
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
          <div className="btn-row">
            <Link className="btn" href="#cookie-preferences">
              Manage Cookie Preferences
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Categories of Cookies We Use */}
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

      {/* 6. Third-Party Providers */}
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

      {/* 7. Managing Cookies in Your Browser */}
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

      {/* 8. Do Not Track */}
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

      {/* 9. Changes and Contact */}
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

      {/* 10. Cookie Preferences (working controls for the choices described above) */}
      <section className="section" id="cookie-preferences">
        <div className="container">
          <p className="eyebrow">Your Choices</p>
          <h2>Cookie Preferences</h2>
          <p className="lead">
            Essential cookies are always on because the site cannot function without them.
            Everything else is off until you opt in, and you can change your mind at any time.
          </p>
          <div className="card" style={{ marginTop: "2rem" }}>
            <label
              style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.75rem 0" }}
            >
              <input type="checkbox" defaultChecked disabled style={{ marginTop: "0.25rem" }} />
              <span>
                <strong>Strictly necessary — always on</strong>
                <br />
                <span style={{ color: "var(--muted)" }}>
                  Required for the site to work: security, load balancing and remembering your
                  consent choice.
                </span>
              </span>
            </label>
            <label
              style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.75rem 0" }}
            >
              <input id="pref-analytics" type="checkbox" style={{ marginTop: "0.25rem" }} />
              <span>
                <strong>Analytics and performance</strong>
                <br />
                <span style={{ color: "var(--muted)" }}>
                  Help us understand which pages are useful and where people get stuck.
                </span>
              </span>
            </label>
            <label
              style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.75rem 0" }}
            >
              <input id="pref-advertising" type="checkbox" style={{ marginTop: "0.25rem" }} />
              <span>
                <strong>Advertising and measurement</strong>
                <br />
                <span style={{ color: "var(--muted)" }}>
                  Used to measure campaign performance. Set only with your consent.
                </span>
              </span>
            </label>
            <label
              style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", padding: "0.75rem 0" }}
            >
              <input id="pref-functional" type="checkbox" style={{ marginTop: "0.25rem" }} />
              <span>
                <strong>Functional and preference</strong>
                <br />
                <span style={{ color: "var(--muted)" }}>
                  Remembers display preferences such as region, and embedded video playback.
                </span>
              </span>
            </label>
            <p id="cookie-pref-status" role="status" style={{ color: "var(--muted)", minHeight: "1.5em" }} />
            <div className="btn-row">
              <button type="button" className="btn" id="pref-accept-all">
                Accept All
              </button>
              <button type="button" className="btn btn-outline" id="pref-reject-all">
                Reject Optional
              </button>
              <button type="button" className="btn btn-outline" id="pref-save">
                Save Choices
              </button>
            </div>
          </div>
          <script dangerouslySetInnerHTML={{ __html: preferencesScript }} />
        </div>
      </section>

      {/* 11. Final CTA */}
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
