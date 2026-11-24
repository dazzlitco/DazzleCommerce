import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GDPR Compliance | Dazzle Commerce",
  description:
    "How Dazzle Commerce meets EU and UK GDPR obligations: controller and processor roles, data processing agreements, sub-processors and breach response.",
  alternates: { canonical: "https://dazzlecommerce.com/gdpr-compliance/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/gdpr-compliance/",
    siteName: "Dazzle Commerce",
    title: "GDPR Compliance | Dazzle Commerce",
    description:
      "How Dazzle Commerce meets EU and UK GDPR obligations: controller and processor roles, data processing agreements, sub-processors and breach response.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR Compliance | Dazzle Commerce",
    description:
      "How Dazzle Commerce meets EU and UK GDPR obligations: controller and processor roles, data processing agreements, sub-processors and breach response.",
  },
};

const controllerRoles: { label: string; rest: string }[] = [
  {
    label: "Website visitors and enquiries",
    rest: " — we are controller. Governed by this page and our Privacy Policy.",
  },
  { label: "Newsletter subscribers", rest: " — controller." },
  {
    label: "Managing a client’s ad accounts and analytics",
    rest: " — processor, under a Data Processing Agreement.",
  },
  {
    label: "Handling a client’s customer lists for email or SMS",
    rest: " — processor, under a DPA.",
  },
  { label: "Our own staff and supplier records", rest: " — controller." },
];

const lawfulBases: { label: string; rest: string }[] = [
  {
    label: "Consent",
    rest: " — newsletter subscriptions and non-essential cookies. Freely given, specific, informed and as easy to withdraw as to give.",
  },
  {
    label: "Contract",
    rest: " — delivering the services a client has engaged us for, and taking steps at your request before entering a contract.",
  },
  {
    label: "Legal obligation",
    rest: " — tax, accounting and statutory record-keeping.",
  },
  {
    label: "Legitimate interests",
    rest: " — site security, service improvement and limited B2B communication, always subject to a documented balancing test.",
  },
];

const rights: { label: string; rest: string }[] = [
  {
    label: "Access (Art. 15)",
    rest: " — a copy of your data and details of how it is processed. 30 days.",
  },
  {
    label: "Rectification (Art. 16)",
    rest: " — correction of inaccurate or incomplete data. 30 days.",
  },
  {
    label: "Erasure (Art. 17)",
    rest: " — deletion where there is no overriding lawful reason to retain. 30 days.",
  },
  {
    label: "Restriction (Art. 18)",
    rest: " — processing paused while a dispute is resolved. Immediate on receipt.",
  },
  {
    label: "Portability (Art. 20)",
    rest: " — your data in a structured, machine-readable format. 30 days.",
  },
  {
    label: "Object (Art. 21)",
    rest: " — stop processing based on legitimate interests; absolute for direct marketing.",
  },
  {
    label: "Automated decisions (Art. 22)",
    rest: " — not applicable, we perform none.",
  },
];

const breachSteps = [
  "The incident is contained and assessed immediately on detection.",
  "Where we are controller and the breach poses a risk to rights and freedoms, we notify the supervisory authority within 72 hours of becoming aware.",
  "Where we are processor, we notify the affected client without undue delay so they can meet their own 72-hour obligation.",
  "Where the risk is high, affected individuals are informed directly and told what to do.",
  "Every incident is recorded in our breach register regardless of whether it is notifiable, and a root-cause review follows within 14 days.",
];

export default function GdprCompliancePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <h1>GDPR Compliance</h1>
          <p className="lead">
            Our obligations under the EU and UK GDPR, the rights you hold, and the specific
            measures we take as both a data controller and a processor for our clients.
          </p>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginTop: "1rem" }}>
            <strong>Last updated:</strong> 1 August 2026&nbsp;&nbsp;·&nbsp;&nbsp;Effective immediately upon
            posting
          </p>
        </div>
      </section>

      {/* 2. Our Commitment — the live page has no anchor navigation */}
      <section className="section" id="our-commitment">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>Our Commitment</h2>
            <p>
              The General Data Protection Regulation (EU 2016/679) and the UK GDPR give
              individuals meaningful control over their personal data and place clear
              obligations on the organisations that handle it. We treat those obligations
              as a baseline rather than a ceiling, and we apply the same standards to
              clients outside the EU and UK because maintaining two tiers of data handling
              is both impractical and hard to justify.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Controller or Processor? */}
      <section className="section section-soft" id="controller-or-processor">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>Controller or Processor?</h2>
            <ul className="check-list">
              {controllerRoles.map((r) => (
                <li key={r.label}>
                  <strong>{r.label}</strong>
                  {r.rest}
                </li>
              ))}
            </ul>
            <p>
              Where we act as processor we only process personal data on documented
              instructions from the client, and we will tell them promptly if we believe
              an instruction infringes data protection law.
            </p>
          </div>
        </div>
      </section>

      {/* 4. The Lawful Bases We Rely On */}
      <section className="section" id="lawful-bases">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>The Lawful Bases We Rely On</h2>
            <p>
              We never process personal data without a lawful basis, and we record which
              basis applies to each activity in our processing register.
            </p>
            <ol style={{ paddingLeft: "1.25rem", color: "var(--muted)" }}>
              {lawfulBases.map((b) => (
                <li key={b.label} style={{ marginBottom: "0.6rem" }}>
                  <strong style={{ color: "var(--navy)" }}>{b.label}</strong>
                  {b.rest}
                </li>
              ))}
            </ol>
            <p>
              Vital interests and public task are not relied upon in the normal course of
              business.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Your Rights and How to Exercise Them */}
      <section className="section section-soft" id="your-rights">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>Your Rights and How to Exercise Them</h2>
            <ul className="check-list">
              {rights.map((r) => (
                <li key={r.label}>
                  <strong>{r.label}</strong>
                  {r.rest}
                </li>
              ))}
            </ul>
            <p>
              Send requests to{" "}
              <Link href="mailto:dpo@dazzlecommerce.com">dpo@dazzlecommerce.com</Link>. We
              acknowledge within 72 hours and respond within one month, extendable by two
              further months for complex requests — we will tell you if that applies and
              why. If your data sits inside a client’s systems that we manage, we will
              forward your request to that client as controller within five working days.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Technical and Organisational Measures */}
      <section className="section" id="technical-measures">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>Technical and Organisational Measures</h2>
            <p>
              Article 32 requires security appropriate to the risk. Ours includes TLS 1.3
              in transit and AES-256 at rest; least-privilege, role-based access reviewed
              quarterly with mandatory multi-factor authentication; client credentials held
              only in an audited password manager; pseudonymisation and data minimisation
              wherever the task allows; segregated client environments with no cross-client
              access; annual penetration testing and continuous dependency scanning;
              documented business continuity and disaster recovery plans tested annually;
              and mandatory annual data protection training for every member of staff.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Subprocessors */}
      <section className="section section-soft" id="subprocessors">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>Subprocessors</h2>
            <p>
              We use a small number of vetted subprocessors, each bound by a written
              agreement containing GDPR Article 28 terms. A current named list with
              locations and transfer mechanisms is available to clients on request.
              Clients receive at least 30 days’ notice before we add or replace a
              subprocessor, and may object on reasonable data protection grounds; where an
              objection cannot be resolved, the client may terminate the affected service
              without penalty.
            </p>
          </div>
        </div>
      </section>

      {/* 8. International Data Transfers */}
      <section className="section" id="international-transfers">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>International Data Transfers</h2>
            <p>
              We operate across five countries, so transfers outside the UK and EEA are
              sometimes necessary. Where they occur we rely on an adequacy decision where
              one covers the destination; Standard Contractual Clauses plus the UK
              International Data Transfer Addendum where relevant; a documented Transfer
              Impact Assessment for each recipient; and supplementary measures including
              encryption, pseudonymisation and strict access control.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Data Processing Agreements */}
      <section className="section section-soft" id="data-processing-agreements">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>Data Processing Agreements</h2>
            <p>
              Every client engagement includes a Data Processing Agreement before any
              personal data is shared. Ours covers subject matter and duration, nature
              and purpose, categories of data and data subjects, controller and processor
              obligations, subprocessor terms, transfer mechanisms, assistance with data
              subject requests, breach notification, and deletion or return of data at the
              end of the engagement. We are happy to sign your DPA instead of ours.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Personal Data Breaches */}
      <section className="section" id="data-breaches">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>Personal Data Breaches</h2>
            <ol style={{ paddingLeft: "1.25rem", color: "var(--muted)" }}>
              {breachSteps.map((s) => (
                <li key={s} style={{ marginBottom: "0.6rem" }}>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 11. Records, Assessments and Governance */}
      <section className="section section-soft" id="records-governance">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>Records, Assessments and Governance</h2>
            <p>
              We maintain an Article 30 record of processing activities and review it
              twice a year. Data Protection Impact Assessments are carried out before any
              processing likely to result in high risk. Privacy by design and by default
              is applied at the point new tools or workflows are proposed rather than
              retrofitted afterwards. We are not required to appoint a statutory Data
              Protection Officer, but we have designated a data protection lead
              accountable for compliance at{" "}
              <Link href="mailto:dpo@dazzlecommerce.com">dpo@dazzlecommerce.com</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* 12. Supervisory Authority and Complaints */}
      <section className="section" id="supervisory-authority">
        <div className="container">
          <div style={{ maxWidth: "820px" }}>
            <h2>Supervisory Authority and Complaints</h2>
            <p>
              Raise a concern with us first — most issues are resolved quickly at that
              stage. You always retain the right to complain to a supervisory authority:
              in the United Kingdom the Information Commissioner’s Office at{" "}
              <Link href="https://ico.org.uk">ico.org.uk</Link>; in the European Union
              the data protection authority in your member state; elsewhere your local
              privacy regulator.
            </p>
          </div>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Questions about how we handle your data?</h2>
          <p className="lead">
            Our privacy team answers within one business day. Email
            privacy@dazzlecommerce.com or use the contact form — no ticket queue, no
            chatbot.
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
