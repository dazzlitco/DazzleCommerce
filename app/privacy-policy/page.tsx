import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Dazzle Commerce",
  description:
    "How Dazzle Commerce collects, uses, shares and protects personal data, and the privacy rights available to visitors, clients and subscribers.",
  alternates: { canonical: "https://dazzlecommerce.com/privacy-policy/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/privacy-policy/",
    siteName: "Dazzle Commerce",
    title: "Privacy Policy | Dazzle Commerce",
    description:
      "How Dazzle Commerce collects, uses, shares and protects personal data, and the privacy rights available to visitors, clients and subscribers.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Dazzle Commerce",
    description:
      "How Dazzle Commerce collects, uses, shares and protects personal data, and the privacy rights available to visitors, clients and subscribers.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Privacy Policy</p>
          <h1>Privacy Policy</h1>
          <p className="lead">
            How we collect, use, store and protect personal data — and the rights you have
            over it. Written to be read rather than skimmed past.
          </p>
          <p style={{ color: "var(--muted)", marginBottom: 0 }}>
            <strong>Last updated:</strong> 1 August 2026 &nbsp;·&nbsp; Effective immediately
            upon posting
          </p>
        </div>
      </section>

      {/* 2. Legal text */}
      <section className="section" style={{ paddingTop: "48px" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          {/* Who We Are */}
          <h2 id="who-we-are">Who We Are</h2>
          <p>
            Dazzle Commerce (“we”, “us”, “our”) is an eCommerce management and marketing
            agency with its head office at 1201 Commerce Street, Suite 480, Austin, TX
            78701, United States. This policy explains what we do with personal data
            collected through dazzlecommerce.com and in the course of providing our services.
          </p>
          <p>
            For the purposes of the UK and EU General Data Protection Regulation, Dazzle
            Commerce is the <strong>data controller</strong> for personal data collected via
            this website and in our direct dealings with you. When we process data inside a
            client’s advertising, analytics or store platforms on their instructions, we act
            as a <strong>data processor</strong> under a separate data processing agreement.
          </p>
          <p>
            Data protection enquiries:{" "}
            <a href="mailto:privacy@dazzlecommerce.com">privacy@dazzlecommerce.com</a>.
          </p>

          {/* Information We Collect */}
          <h2 id="information-we-collect" style={{ marginTop: "2.5rem" }}>
            Information We Collect
          </h2>
          <h3>Information you give us</h3>
          <ul>
            <li>
              <strong>Contact and enquiry data</strong> — name, work email, phone number,
              company name and store URL submitted through our forms.
            </li>
            <li>
              <strong>Commercial context</strong> — platform, revenue range, budget range
              and the services you express interest in.
            </li>
            <li>
              <strong>Free-text content</strong> — whatever you choose to tell us in a
              message field, on a call or by email.
            </li>
            <li>
              <strong>Newsletter subscription</strong> — email address and engagement
              history if you subscribe.
            </li>
          </ul>
          <h3>Information we collect automatically</h3>
          <ul>
            <li>
              <strong>Technical data</strong> — IP address, browser type and version, device
              type and operating system.
            </li>
            <li>
              <strong>Usage data</strong> — pages viewed, time on page, referring URL,
              scroll depth and outbound link clicks.
            </li>
            <li>
              <strong>Cookie data</strong> — as described in our{" "}
              <Link href="/cookies-policy/">Cookies Policy</Link>. Non-essential cookies are
              only set after you consent.
            </li>
          </ul>
          <p>
            We do not knowingly collect special category data, and we ask that you do not
            include it in free-text fields. We do not collect data from anyone under 16.
          </p>

          {/* How and Why We Use Your Data */}
          <h2 id="how-and-why-we-use-your-data" style={{ marginTop: "2.5rem" }}>
            How and Why We Use Your Data
          </h2>
          <p>We use personal data only where we have a lawful basis to do so.</p>
          <ul>
            <li>
              <strong>Responding to enquiries and preparing your free audit</strong> — steps
              prior to entering a contract.
            </li>
            <li>
              <strong>Delivering contracted services</strong> — performance of a contract.
            </li>
            <li>
              <strong>Sending the newsletter</strong> — consent.
            </li>
            <li>
              <strong>Improving the website and understanding demand</strong> — legitimate
              interests, or consent where cookies are involved.
            </li>
            <li>
              <strong>Measuring advertising performance</strong> — consent.
            </li>
            <li>
              <strong>Meeting accounting, tax and legal obligations</strong> — legal
              obligation.
            </li>
            <li>
              <strong>Establishing or defending legal claims</strong> — legitimate
              interests.
            </li>
          </ul>
          <p>
            <strong>We do not sell personal data</strong>, and we do not share it with third
            parties for their own marketing purposes.
          </p>

          {/* Who We Share Data With */}
          <h2 id="who-we-share-data-with" style={{ marginTop: "2.5rem" }}>
            Who We Share Data With
          </h2>
          <p>
            We share personal data only with service providers who process it on our behalf
            under contract, and only to the extent necessary: cloud hosting and website
            infrastructure, customer relationship management and email delivery, analytics
            and advertising measurement, scheduling and video conferencing, accounting and
            payment processing, and professional advisers where required.
          </p>
          <p>
            We may also disclose data where required by law, court order or a regulator, or
            in connection with a merger, acquisition or sale of assets — in which case you
            will be notified before your data becomes subject to a different privacy policy.
          </p>

          {/* International Transfers */}
          <h2 id="international-transfers" style={{ marginTop: "2.5rem" }}>
            International Transfers
          </h2>
          <p>
            We operate across the United States, United Kingdom, Canada, Australia and the
            UAE, so personal data may be transferred outside your country of residence.
            Where data leaves the UK or EEA, we rely on an adequacy decision where one
            exists, or on Standard Contractual Clauses together with a transfer risk
            assessment and supplementary technical measures such as encryption in transit
            and at rest.
          </p>

          {/* How Long We Keep Data */}
          <h2 id="how-long-we-keep-data" style={{ marginTop: "2.5rem" }}>
            How Long We Keep Data
          </h2>
          <ul>
            <li>Enquiries that do not become clients — 24 months from last contact.</li>
            <li>Client records and deliverables — 7 years after the engagement ends.</li>
            <li>Contracts and billing records — 7 years, for tax and accounting purposes.</li>
            <li>
              Newsletter subscribers — until you unsubscribe, then 12 months of suppression
              data.
            </li>
            <li>Website analytics — 14 months. Cookie consent records — 12 months.</li>
          </ul>
          <p>
            When a retention period ends, data is deleted or irreversibly anonymised.
          </p>

          {/* Your Rights */}
          <h2 id="your-rights" style={{ marginTop: "2.5rem" }}>
            Your Rights
          </h2>
          <p>
            Depending on where you live, you may have the right to <strong>access</strong>{" "}
            the personal data we hold, <strong>rectify</strong> inaccurate data, request{" "}
            <strong>erasure</strong>, <strong>restrict</strong> processing,{" "}
            <strong>port</strong> your data, <strong>object</strong> to processing based on
            legitimate interests and to direct marketing at any time, and{" "}
            <strong>withdraw consent</strong> without affecting prior lawful processing. We
            do not carry out solely automated decision-making with legal or similarly
            significant effects.
          </p>
          <p>
            California residents additionally have the right to know what personal
            information is collected, to request deletion, to correct inaccurate
            information and not to be discriminated against for exercising those rights. We
            do not sell or share personal information as those terms are defined under the
            CCPA/CPRA.
          </p>
          <p>
            To exercise any right, email{" "}
            <a href="mailto:privacy@dazzlecommerce.com">privacy@dazzlecommerce.com</a>. We
            respond within 30 days and will not charge a fee unless a request is manifestly
            unfounded or excessive. See also our{" "}
            <Link href="/gdpr-compliance/">GDPR Compliance page</Link>.
          </p>

          {/* How We Protect Your Data */}
          <h2 id="how-we-protect-your-data" style={{ marginTop: "2.5rem" }}>
            How We Protect Your Data
          </h2>
          <ul>
            <li>TLS encryption in transit and encryption at rest for stored records.</li>
            <li>
              Role-based access control with least-privilege defaults, reviewed quarterly.
            </li>
            <li>
              Mandatory multi-factor authentication on every internal system and client
              platform.
            </li>
            <li>Vetted subprocessors bound by written data processing agreements.</li>
            <li>Annual security training and a documented incident response plan.</li>
            <li>
              Client credentials held in an audited password manager, never in email or
              spreadsheets.
            </li>
          </ul>
          <p>
            No system is perfectly secure. If a breach affects your rights and freedoms we
            will notify the relevant supervisory authority within 72 hours and inform you
            without undue delay where the risk is high.
          </p>

          {/* Cookies, Links and Changes */}
          <h2 id="cookies-links-and-changes" style={{ marginTop: "2.5rem" }}>
            Cookies, Links and Changes
          </h2>
          <p>
            Essential cookies are always active; analytics and advertising cookies are set
            only after you consent. Full detail is in our{" "}
            <Link href="/cookies-policy/">Cookies Policy</Link>. This site links to
            third-party websites and may contain affiliate links, disclosed in our{" "}
            <Link href="/affiliate-disclaimer/">Affiliate Disclaimer</Link>. We review this
            policy at least annually; where changes are significant we will notify you
            before they take effect.
          </p>

          {/* Contact Us */}
          <h2 id="contact-us" style={{ marginTop: "2.5rem" }}>
            Contact Us
          </h2>
          <p>
            Privacy enquiries and rights requests:{" "}
            <a href="mailto:privacy@dazzlecommerce.com">privacy@dazzlecommerce.com</a>
          </p>
          <p>
            General enquiries:{" "}
            <a href="mailto:hello@dazzlecommerce.com">hello@dazzlecommerce.com</a>
          </p>
          <p>
            Post: Dazzle Commerce, 1201 Commerce Street, Suite 480, Austin, TX 78701,
            United States
          </p>
          <p>Phone: +1 (555) 010-2400</p>
        </div>
      </section>

      {/* 3. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Questions about how we handle your data?</h2>
          <p className="lead" style={{ color: "#c6d2e4" }}>
            Our privacy team answers within one business day. Email{" "}
            <a
              href="mailto:privacy@dazzlecommerce.com"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              privacy@dazzlecommerce.com
            </a>{" "}
            or use the contact form — no ticket queue, no chatbot.
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
