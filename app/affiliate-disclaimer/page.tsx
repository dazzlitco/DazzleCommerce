import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Affiliate Disclaimer | Dazzle Commerce",
  description:
    "Dazzle Commerce may earn commission from some links on this site. Where affiliate links appear, and the editorial rules that keep recommendations honest.",
  alternates: { canonical: "https://dazzlecommerce.com/affiliate-disclaimer/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/affiliate-disclaimer/",
    siteName: "Dazzle Commerce",
    title: "Affiliate Disclaimer | Dazzle Commerce",
    description:
      "Dazzle Commerce may earn commission from some links on this site. Where affiliate links appear, and the editorial rules that keep recommendations honest.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Disclaimer | Dazzle Commerce",
    description:
      "Dazzle Commerce may earn commission from some links on this site. Where affiliate links appear, and the editorial rules that keep recommendations honest.",
  },
};

const contents = [
  { id: "short-version", label: "The Short Version" },
  { id: "ftc-disclosure", label: "Federal Trade Commission Disclosure" },
  { id: "types-of-relationship", label: "Types of Commercial Relationship We Have" },
  { id: "tools-we-may-earn-from", label: "Tools We May Earn Commission From" },
  { id: "how-we-stay-independent", label: "How We Keep Recommendations Independent" },
  { id: "what-this-costs-you", label: "What This Costs You" },
  { id: "client-engagements", label: "Client Engagements" },
  { id: "amazon-associates", label: "Amazon Associates" },
  { id: "testimonials-and-results", label: "Testimonials and Results" },
  { id: "no-professional-advice", label: "No Professional Advice" },
  { id: "questions", label: "Questions" },
];

const listStyle: React.CSSProperties = {
  margin: "1rem 0",
  paddingLeft: "1.4rem",
  lineHeight: 1.7,
  color: "var(--muted)",
};

const blockStyle: React.CSSProperties = { marginTop: "2.5rem" };

export default function AffiliateDisclaimerPage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <h1>Affiliate Disclaimer</h1>
              <p className="lead">
                Where we earn commission, what commercial relationships we hold, and the rules
                that keep our recommendations independent of who pays us.
              </p>
              <p style={{ color: "var(--muted)", marginTop: "1rem" }}>
                Last updated: 1 August 2026&nbsp;&nbsp;·&nbsp;&nbsp;Effective immediately upon
                posting
              </p>
            </div>
            <div className="hero-img">
              <Image
                src="/images/affiliate-disclaimer-hero.webp"
                alt="A laptop showing a product comparison beside a printed disclosure document on a bright office desk"
                width={1920}
                height={1280}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. On this page (clone addition — the live page has no table of contents) */}
      <section className="section section-soft" style={{ padding: "40px 0" }}>
        <div className="container">
          <h2 style={{ fontSize: "1.25rem", marginBottom: "0.75rem" }}>On this page</h2>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexWrap: "wrap",
              gap: "8px 24px",
            }}
          >
            {contents.map((c) => (
              <li key={c.id}>
                <Link href={`#${c.id}`}>{c.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Disclaimer body */}
      <section className="section">
        <div className="container" style={{ maxWidth: "860px" }}>
          <div id="short-version">
            <h2>The Short Version</h2>
            <p>
              Some links on this site earn us a commission. None of them cost you anything
              extra, none of them change what we recommend to clients, and we tell you when a
              link is one of them. If a tool is wrong for your business we will say so whether
              or not we are paid by its maker.
            </p>
            <p>
              The rest of this page explains the detail, because “we only recommend products
              we believe in” is what every affiliate site says and none of them define.
            </p>
          </div>

          <div id="ftc-disclosure" style={blockStyle}>
            <h2>Federal Trade Commission Disclosure</h2>
            <p>
              In accordance with the United States Federal Trade Commission’s 16 CFR Part 255,
              Guides Concerning the Use of Endorsements and Testimonials in Advertising, we
              disclose that Dazzle Commerce has material connections with some of the products
              and services mentioned on this website.
            </p>
            <p>
              A material connection means a relationship that might affect the weight or
              credibility you give our recommendation — typically a commission, a referral fee,
              a partner tier benefit or free access to a product. Where such a connection
              exists, it is disclosed at or near the point of the recommendation as well as on
              this page.
            </p>
            <p>
              We also comply with the UK Competition and Markets Authority guidance on hidden
              advertising and the Advertising Standards Authority CAP Code, and with the
              Australian Competition and Consumer Commission’s guidance on influencer and
              affiliate disclosure.
            </p>
          </div>

          <div id="types-of-relationship" style={blockStyle}>
            <h2>Types of Commercial Relationship We Have</h2>
            <ul style={listStyle}>
              <li>
                Affiliate links — we earn a commission if you sign up through our link. Marked
                inline and listed on this page.
              </li>
              <li>
                Platform partnerships — certified partner status with Shopify, Google, Meta,
                Amazon Ads and Klaviyo. Stated on our About page.
              </li>
              <li>
                Referral agreements — a fee when we refer a client to a specialist outside our
                scope. Disclosed to the client before any introduction.
              </li>
              <li>
                Review access — free or discounted product access for evaluation. Stated in the
                article concerned.
              </li>
              <li>Sponsored content — we do not accept this. See below.</li>
            </ul>
          </div>

          <div id="tools-we-may-earn-from" style={blockStyle}>
            <h2>Tools We May Earn Commission From</h2>
            <p>
              We frequently recommend software in articles, audits and client work. We hold
              affiliate or partner arrangements with providers in these categories: eCommerce
              platforms and hosting; email and SMS marketing platforms; analytics, attribution
              and conversion testing tools; marketplace and feed management software; reviews,
              loyalty and subscription applications; and site search, personalisation and page
              builder applications.
            </p>
            <p>
              A current named list is available on request from{" "}
              <a href="mailto:hello@dazzlecommerce.com">hello@dazzlecommerce.com</a>, and is
              provided to every client during onboarding before any tooling recommendation is
              made.
            </p>
          </div>

          <div id="how-we-stay-independent" style={blockStyle}>
            <h2>How We Keep Recommendations Independent</h2>
            <ul style={listStyle}>
              <li>
                Commission never enters the selection process. Tools are chosen on fit, cost,
                support quality and data portability. The commercial arrangement is checked
                afterwards, purely for disclosure purposes.
              </li>
              <li>
                Client work overrides everything. If the best tool for a client pays us
                nothing, that is the one we recommend. This happens routinely.
              </li>
              <li>
                We publish negative assessments of partner products. Several tools we hold
                affiliate arrangements with have been criticised in our own articles where the
                criticism was warranted.
              </li>
              <li>
                No paid placement, ever. We do not accept payment for inclusion in a
                comparison, for a guest post, for a link, or for a favourable review.
              </li>
            </ul>
          </div>

          <div id="what-this-costs-you" style={blockStyle}>
            <h2>What This Costs You</h2>
            <p>
              Nothing. Affiliate commissions are paid by the vendor out of their marketing
              budget. You pay the same price you would pay going direct, and in some cases our
              partner status secures a better rate or an extended trial than the public offer.
              Where an affiliate arrangement gives us a discount we can pass on, we pass it on.
            </p>
          </div>

          <div id="client-engagements" style={blockStyle}>
            <h2>Client Engagements</h2>
            <p>
              For clients under contract, our position is stricter. Before recommending any
              paid tool we disclose whether we hold a commercial relationship with the vendor
              and what it is worth. Where a client prefers, we will waive the commission or
              credit it against their invoice — you only have to ask.
            </p>
            <p>
              We do not receive commission on media spend. Our fees are stated in the
              engagement agreement and we take no rebate, kickback or volume incentive from any
              advertising platform.
            </p>
          </div>

          <div id="amazon-associates" style={blockStyle}>
            <h2>Amazon Associates</h2>
            <p>
              Dazzle Commerce may participate in the Amazon Services LLC Associates Program, an
              affiliate advertising programme designed to provide a means for sites to earn
              advertising fees by advertising and linking to Amazon.com. As an Amazon Associate
              we may earn from qualifying purchases. Amazon and the Amazon logo are trademarks
              of Amazon.com, Inc. or its affiliates.
            </p>
          </div>

          <div id="testimonials-and-results" style={blockStyle}>
            <h2>Testimonials and Results</h2>
            <p>
              Testimonials on this site reflect the experience of individual clients and are
              not a guarantee that you will achieve comparable results. Performance figures in
              our case studies are measured against a pre-engagement baseline using client
              analytics and are specific to that client’s category, margin structure and
              starting position.
            </p>
            <p>
              Nothing on this site should be taken as a promise, guarantee or forecast of
              financial results. eCommerce outcomes depend on many factors outside any agency’s
              control, including product-market fit, pricing, competition, supply chain and
              macroeconomic conditions.
            </p>
          </div>

          <div id="no-professional-advice" style={blockStyle}>
            <h2>No Professional Advice</h2>
            <p>
              Content on this website is provided for general information only and does not
              constitute legal, accounting, tax or financial advice. Consult a qualified
              professional in your jurisdiction before acting on anything you read here.
            </p>
          </div>

          <div id="questions" style={blockStyle}>
            <h2>Questions</h2>
            <p>
              If anything on this page is unclear, or you would like the current named list of
              our affiliate and partner relationships, contact{" "}
              <a href="mailto:hello@dazzlecommerce.com">hello@dazzlecommerce.com</a>. See also
              our <Link href="/privacy-policy/">Privacy Policy</Link> and{" "}
              <Link href="/cookies-policy/">Cookies Policy</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Closing block — Questions about how we handle your data? */}
      <section className="section section-soft">
        <div className="container" style={{ maxWidth: "860px" }}>
          <h2>Questions about how we handle your data?</h2>
          <p>
            Our privacy team answers within one business day. Email privacy@dazzlecommerce.com
            or use the contact form — no ticket queue, no chatbot.
          </p>
          <div className="btn-row">
            <Link className="btn" href="/contact/">
              Contact Us
            </Link>
            <Link className="btn btn-outline" href="/">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
