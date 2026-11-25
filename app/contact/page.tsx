import type { Metadata } from "next";
import { Pill } from "@/components/Pill";
import Link from "next/link";
import FaqAccordion, { type Faq } from "../../components/FaqAccordion";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact Dazzle Commerce | Book a Free Strategy Call",
  description:
    "Talk to an eCommerce management and marketing specialist. Free store, ad account and marketplace audit, with a reply within one business day.",
  alternates: { canonical: "https://dazzlecommerce.com/contact/" },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://dazzlecommerce.com/contact/",
    siteName: "Dazzle Commerce",
    title: "Contact Dazzle Commerce | Book a Free Strategy Call",
    description:
      "Talk to an eCommerce management and marketing specialist. Free store, ad account and marketplace audit, with a reply within one business day.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Dazzle Commerce | Book a Free Strategy Call",
    description:
      "Talk to an eCommerce management and marketing specialist. Free store, ad account and marketplace audit, with a reply within one business day.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-video-preview": -1,
    "max-image-preview": "large",
  },
};

const faqs: Faq[] = [
  {
    q: "How quickly will someone get back to me?",
    a: "Within one business day, and usually the same day if you write before mid-afternoon Central Time. The first reply comes from a senior strategist, not a sales development rep working from a script.",
  },
  {
    q: "Is the strategy call actually free, or is it a sales call?",
    a: "It is free and it is genuinely useful. We run the audit before the call and spend the thirty minutes walking you through what we found. There is a moment at the end where we tell you what working together would look like, and if you are not interested that is the end of it.",
  },
  {
    q: "What information should I have ready?",
    a: "Read-only access to Google Analytics, your ad accounts and your marketplace seller accounts makes the audit far more valuable. If you cannot share those before the call, come anyway.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Routinely. Send yours with the enquiry, or use ours. We can have it executed before any account access is shared.",
  },
  {
    q: "Do you work with clients in other time zones?",
    a: "Yes. Roughly 40% of our clients are outside the United States. We hold call slots in UK, EU, Gulf and APAC business hours.",
  },
  {
    q: "I am not ready to hire an agency. Can I still talk to you?",
    a: "Please do. A good number of our conversations end with us telling someone to hire in-house first, fix their tracking, or wait two quarters.",
  },
];

const steps = [
  {
    num: "01",
    title: "We reply within one business day",
    body: "A senior strategist reads your enquiry — not a bot and not an SDR. If we are not the right fit, we will say so in that first reply.",
  },
  {
    num: "02",
    title: "We run a free growth audit",
    body: "Before the call we review your store, ad accounts and marketplace health, then score every opportunity by revenue impact.",
  },
  {
    num: "03",
    title: "You get a 30-minute strategy call",
    body: "We walk you through the findings live, tell you the three things we would fix first and roughly what each is worth.",
  },
  {
    num: "04",
    title: "You keep the audit either way",
    body: "Whether or not you hire us, the scorecard and the recommendations are yours.",
  },
];

const infoBlocks = [
  {
    icon: "fa-solid fa-location-dot",
    title: "Head Office",
    body: (
      <>
        1201 Commerce Street, Suite 480 Austin, TX 78701, United States
      </>
    ),
  },
  {
    icon: "fa-solid fa-phone",
    title: "Phone",
    body: (
      <>
        <a href="tel:+1 (555) 010-2400">+1 (555) 010-2400</a>
        <br />
        Mon–Fri, 9:00–18:00 CT
      </>
    ),
  },
  {
    icon: "fa-solid fa-envelope",
    title: "Email",
    body: (
      <>
        <a href="mailto:hello@dazzlecommerce.com">hello@dazzlecommerce.com</a>
        <br />
        New business, support and partnerships
      </>
    ),
  },
  {
    icon: "fa-solid fa-clock",
    title: "Coverage",
    body: (
      <>
        Account teams across five time zones
        <br />
        US, UK, EU, Gulf and APAC business hours
      </>
    ),
  },
  {
    icon: "fa-solid fa-globe",
    title: "Serving clients in",
    body: (
      <>
        United States, United Kingdom, Canada, Australia and the UAE
        <br />
        <Link href="/locations-we-serve/">See all locations we serve</Link>
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* 1. Hero — centered H1 + intro only; the form lives in the next section */}
      <section className="hero">
        <div className="container center">
          <h1>Let’s Talk About Your eCommerce Growth</h1>
          <p className="lead center">
            Tell us where you are stuck and we will tell you what we would do about it.
            Free audit, free 30-minute strategy call, and an honest answer about whether
            we are the right fit.
          </p>
        </div>
      </section>

      {/* 2. Form + Contact Information — two columns: form card left, info right */}
      <section className="section" id="form">
        <div className="container">
          <div className="contact-grid">
            <div>
              <ContactForm />
            </div>
            <div>
              <Pill icon="fa-solid fa-comment">Contact Information</Pill>
              <h2>Talk to a human, quickly</h2>
              <p className="lead">
                No gatekeeping, no qualification quiz before you are allowed to speak to someone
                who knows what they are talking about.
              </p>
              <div className="info-list">
                {infoBlocks.map((b) => (
                  <div key={b.title} className="info-row">
                    <span className="card-icon">
                      <i className={b.icon} aria-hidden="true" />
                    </span>
                    <div>
                      <h3>{b.title}</h3>
                      <p>{b.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What Happens Next */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-regular fa-clock" center>What Happens Next</Pill>
          <h2 className="center">From enquiry to answers in about a week</h2>
          <p className="lead center">
            No mystery, no chasing. Here is exactly what follows after you hit submit.
          </p>
          <div className="card-grid card-grid-4">
            {steps.map((s) => (
              <article key={s.num} className="card">
                <p className="step-num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Alternative Ways to Connect */}
      <section className="section">
        <div className="container">
          <Pill icon="fa-solid fa-headphones" center>Alternative Ways to Connect</Pill>
          <h2 className="center">Forms are not for everyone</h2>
          <p className="lead center">
            Pick whichever is least annoying. They all reach the same team.
          </p>
          <div className="card-grid card-grid-2">
            <article className="card">
              <h3>Book directly in the calendar</h3>
              <p>
                Skip the form and grab a slot that suits you. Available Monday to Friday,
                9:00–18:00 CT, with early and late slots for UK, EU and APAC clients.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <Link className="btn btn-outline" href="#form">
                  Choose a time
                </Link>
              </p>
            </article>
            <article className="card">
              <h3>Call us</h3>
              <p>
                Speak to someone straight away during business hours. Outside those hours
                leave a voicemail and we will call back the next working morning.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <a href="tel:+15550102400" style={{ fontWeight: 700 }}>
                  +1 (555) 010-2400
                </a>
              </p>
            </article>
            <article className="card">
              <h3>Email us</h3>
              <p>
                Prefer to write it all out? Send context, links and any numbers you can
                share and we will come back with specific questions rather than a generic
                brochure.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <a href="mailto:hello@dazzlecommerce.com" style={{ fontWeight: 700 }}>
                  hello@dazzlecommerce.com
                </a>
              </p>
            </article>
            <article className="card">
              <h3>Connect on LinkedIn</h3>
              <p>
                Follow the team for teardowns, benchmark data and the occasional unpopular
                opinion about attribution modelling.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <a
                  href="https://www.linkedin.com/company/dazzlecommerce"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontWeight: 700 }}
                >
                  Visit our page
                </a>
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 5. Find Us */}
      <section className="section section-soft">
        <div className="container">
          <Pill icon="fa-solid fa-location-dot" center>Find Us</Pill>
          <h2 className="center">Head office in Austin, Texas</h2>
          <p className="lead center">
            Visits are by appointment — most of our work happens remotely, so let us know
            you are coming.
          </p>
          <div
            style={{
              marginTop: "32px",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "var(--shadow)",
            }}
          >
            <iframe
              title="1201 Commerce Street, Austin, TX 78701"
              aria-label="1201 Commerce Street, Austin, TX 78701"
              src="https://maps.google.com/maps?q=1201%20Commerce%20Street%2C%20Austin%2C%20TX%2078701&t=m&z=14&output=embed&iwloc=near"
              loading="lazy"
              style={{ border: 0, width: "100%", height: "420px", display: "block" }}
            />
          </div>
        </div>
      </section>

      {/* 6. Contact FAQs */}
      <section className="section">
        <div className="container center">
          <Pill icon="fa-solid fa-circle-question" center>Contact FAQs</Pill>
          <h2>Before you get in touch</h2>
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Still deciding? Book the call anyway.</h2>
          <p className="lead">
            The audit is free, the advice is specific, and the worst outcome is that you
            leave with a prioritised list of fixes and no agency invoice.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/book-a-strategy-call/">
              Book Your Free Strategy Call
            </Link>
            <Link
              className="btn"
              href="/case-studies/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Read Case Studies First
            </Link>
          </div>
          <ul className="final-checks">
            <li>Free 30-minute call</li>
            <li>No long-term contracts</li>
            <li>Actionable audit you keep</li>
          </ul>
        </div>
      </section>
    </>
  );
}
