"use client";

import { useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";

// NOTE: this file is a client component because the open-roles filter and the
// general-application form need client-side state, validation, localStorage
// persistence and a confirmation state. (A client module cannot export
// `metadata`; the page title/description from the extraction — "eCommerce
// Agency Careers & Remote Jobs | Dazzle Commerce" — should be added via a
// route-level metadata wrapper if the parent wants it.)

const benefits = [
  {
    title: "Learn & Grow",
    body: "A training budget that is actually spent, paid certifications for the platforms you work on, and a fortnightly internal session where someone teaches the rest of us something they just figured out.",
  },
  {
    title: "Meaningful Work",
    body: "You will own accounts, not tickets. Every specialist sees the revenue impact of their work in the same dashboard the client sees, which makes the job harder and considerably more satisfying.",
  },
  {
    title: "Collaborative Culture",
    body: "Pods, not silos. SEO, paid, CRO and development sit on the same account and the same call, so nobody optimises their own metric at another discipline’s expense.",
  },
  {
    title: "Ownership & Autonomy",
    body: "You are trusted to run your workstream and to say when something is not working. Recommending that a client stop spending on your channel is treated as good judgement, not a threat.",
  },
  {
    title: "Flexible Work",
    body: "Remote-first since day one. Core overlap hours with your pod, the rest of the day is yours to structure. No performative presence, no camera-on policy.",
  },
  {
    title: "Career Development",
    body: "A written progression framework with defined levels, a review every six months against it, and internal promotion as the default when a senior seat opens.",
  },
];

const lifeCards = [
  {
    title: "Team collaboration",
    body: "Cross-discipline pods working a single account together.",
    img: "/images/careers-life-team-collaboration.webp",
    imgAlt: "Dazzle Commerce team collaborating around a table in a strategy workshop",
  },
  {
    title: "Strategy sessions",
    body: "Quarterly replanning, where the roadmap actually gets rebuilt.",
    img: "/images/careers-life-strategy-sessions.webp",
    imgAlt: "Planning board covered in notes during an eCommerce growth strategy session",
  },
  {
    title: "Creative work",
    body: "Ad creative and content produced in-house on a testing cadence.",
    img: "/images/careers-life-creative-work.webp",
    imgAlt: "Designer working on eCommerce creative assets at a desk",
  },
  {
    title: "Remote collaboration",
    body: "Five time zones, one set of rituals that keep everyone aligned.",
    img: "/images/careers-life-remote-collaboration.webp",
    imgAlt: "Team member joining a remote video call from a home working setup",
  },
  {
    title: "Team activities",
    body: "Two company-wide get-togethers a year, plus regular pod socials.",
    img: "/images/careers-life-team-activities.webp",
    imgAlt: "Colleagues talking informally during a team social",
  },
  {
    title: "Learning sessions",
    body: "Fortnightly internal teaching slots, open to everyone.",
    img: "/images/careers-life-learning-sessions.webp",
    imgAlt: "Internal training session with the team learning together",
  },
];

const values = [
  {
    num: "01",
    title: "Ownership",
    body: "You own the outcome, not the task list. If a client’s number is not moving, the person closest to it raises it first — before the monthly review, before anyone has to ask.",
  },
  {
    num: "02",
    title: "Curiosity",
    body: "The platforms change every quarter. We hire people who read the release notes for fun and who would rather test an assumption than defend one.",
  },
  {
    num: "03",
    title: "Transparency",
    body: "Internally and with clients. Failed tests get written up in the same detail as wins, and “we got that wrong” is a normal sentence here rather than a career event.",
  },
  {
    num: "04",
    title: "Customer Focus",
    body: "We measure ourselves on what the client keeps, not what we bill. Recommending less work when less work is right is explicitly rewarded.",
  },
  {
    num: "05",
    title: "Continuous Improvement",
    body: "Every process we run was written by someone who did the job. If you find a better way, you are expected to change it and document it, not to ask permission.",
  },
];

type TeamFilter =
  | "All"
  | "Marketing"
  | "SEO"
  | "PPC"
  | "Development"
  | "Creative"
  | "Operations";

const filters: TeamFilter[] = [
  "All",
  "Marketing",
  "SEO",
  "PPC",
  "Development",
  "Creative",
  "Operations",
];

// Filter mapping taken from the live page's DOM order (see
// clone-plan/careers-extraction.md): the live page renders each role once per
// tab it belongs to, so SEO appears 3x and PPC 3x in the raw HTML. The clone
// filters the three unique roles instead of duplicating cards.
const roles = [
  {
    title: "SEO Specialist",
    category: "SEO · eCommerce",
    href: "/careers/seo-specialist/",
    teams: ["All", "Marketing", "SEO"] as TeamFilter[],
  },
  {
    title: "PPC Specialist",
    category: "Paid Media · eCommerce",
    href: "/careers/ppc-specialist/",
    teams: ["All", "Marketing", "PPC"] as TeamFilter[],
  },
  {
    title: "eCommerce Account Manager",
    category: "Management · Client Success",
    href: "/careers/ecommerce-account-manager/",
    teams: ["All", "Operations"] as TeamFilter[],
  },
];

const emptyTeams: Partial<Record<TeamFilter, string>> = {
  Development: "No open Development roles right now",
  Creative: "No open Creative roles right now",
};

const hiringSteps = [
  {
    num: "01",
    title: "Apply",
    body: "A short form and your CV. No cover letter, no 40-field application portal, no account to create.",
  },
  {
    num: "02",
    title: "Application Review",
    body: "A human on the hiring team reads it within five working days. You get an answer either way — silence is not a response we use.",
  },
  {
    num: "03",
    title: "Interview",
    body: "Forty-five minutes with the person who would manage you. Mostly about how you think and what you have actually shipped.",
  },
  {
    num: "04",
    title: "Skills Assessment",
    body: "A short, paid, realistic task — an audit or a plan for an anonymised account. Never spec work on a live client.",
  },
  {
    num: "05",
    title: "Offer",
    body: "Salary band shared up front, written offer, and a call to walk through the progression framework before you decide.",
  },
  {
    num: "06",
    title: "Welcome Aboard",
    body: "A structured 30-day onboarding with a named buddy, and no client-facing ownership until you say you are ready.",
  },
];

const talentPoolPromises = [
  "Every application is read by a human, not filtered by a keyword parser",
  "You get a reply either way, usually within five working days",
  "We tell you the salary band before you invest time in a process",
  "Your details are kept for twelve months, then deleted unless you say otherwise",
];

const areas = [
  "Marketing",
  "SEO",
  "PPC",
  "Development",
  "Creative",
  "Operations",
  "Not sure yet",
];

const MAX_CV_BYTES = 5 * 1024 * 1024;

type FormState = {
  name: string;
  email: string;
  area: string;
  location: string;
  profile: string;
  cvName: string;
  message: string;
  consent: boolean;
};

const emptyForm: FormState = {
  name: "",
  email: "",
  area: areas[0],
  location: "",
  profile: "",
  cvName: "",
  message: "",
  consent: false,
};

export default function CareersPage() {
  const [filter, setFilter] = useState<TeamFilter>("All");
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const visibleRoles = roles.filter((r) => r.teams.includes(filter));
  const emptyHeading = emptyTeams[filter];

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function handleCvChange(file: File | undefined) {
    if (!file) {
      set("cvName", "");
      return;
    }
    if (file.size > MAX_CV_BYTES) {
      setErrors((e) => ({
        ...e,
        cvName: "This file exceeds the maximum allowed size (5 MB).",
      }));
      setForm((f) => ({ ...f, cvName: "" }));
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    set("cvName", file.name);
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your full name.";
    if (!form.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = "That email address does not look right — please check it.";
    }
    if (!form.location.trim()) {
      next.location = "Please tell us where you are based (city and time zone).";
    }
    if (form.profile.trim()) {
      let url = form.profile.trim();
      if (!/^https?:\/\//i.test(url)) url = `https://${url}`;
      try {
        new URL(url);
      } catch {
        next.profile = "That URL does not look right — please check it.";
      }
    }
    if (!form.message.trim()) {
      next.message = "Please tell us what you would want to own here.";
    }
    if (!form.consent) {
      next.consent = "Please agree so we can store your application and contact you about roles.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");
    if (!validate()) return;
    try {
      const existing = JSON.parse(
        localStorage.getItem("dazzle-careers-applications") || "[]",
      );
      existing.push({ ...form, submittedAt: new Date().toISOString() });
      localStorage.setItem("dazzle-careers-applications", JSON.stringify(existing));
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setSubmitError("Something went wrong saving your application. Please try again.");
    }
  }

  function resetForm() {
    setForm(emptyForm);
    setErrors({});
    setSubmitted(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  return (
    <>
      {/* 1. Hero (text-only on live — no hero image) */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Careers at Dazzle Commerce</p>
          <h1>Build eCommerce Careers, Not Just Campaigns</h1>
          <p className="lead">
            We are a remote-first eCommerce agency of specialists who would rather own an
            outcome than fill a timesheet. If you want your work measured by what it earns
            a client — and to be told honestly when it did not — you will fit here.
          </p>
          <div className="btn-row">
            <Link className="btn" href="#open-positions">
              See Open Positions
            </Link>
            <Link className="btn btn-outline" href="#talent-pool">
              Send a General Application
            </Link>
          </div>
          <p style={{ marginTop: "1.25rem", color: "var(--muted)" }}>
            Remote-first across five time zones. Three roles open right now.
          </p>
        </div>
      </section>

      {/* 2. Why Work With Us */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Why Work With Us</p>
          <h2>What you actually get, beyond the job title</h2>
          <p className="lead">
            Six things we would want to know if we were reading this page rather than writing
            it.
          </p>
          <div className="card-grid">
            {benefits.map((b) => (
              <article className="card" key={b.title}>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Life at Our Agency */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Life at Our Agency</p>
          <h2>Remote-first, but not remote-feeling</h2>
          <p className="lead">
            We are deliberate about the rituals that make distributed work function. These are
            the ones that stuck.
          </p>
          <div className="card-grid">
            {lifeCards.map((c) => (
              <article className="case-card" key={c.title}>
                <Image src={c.img} alt={c.imgAlt} width={1200} height={800} />
                <div className="case-body">
                  <h3>{c.title}</h3>
                  <p style={{ color: "var(--muted)" }}>{c.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Culture & Values */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our Culture &amp; Values</p>
          <h2>Five things we actually hold each other to</h2>
          <p className="lead">
            Not a poster in a room nobody visits. These are the questions asked in performance
            reviews.
          </p>
          <div className="card-grid">
            {values.map((v) => (
              <article className="card" key={v.num}>
                <p className="card-num">{v.num}</p>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Open Positions */}
      <section className="section section-soft" id="open-positions">
        <div className="container">
          <p className="eyebrow">Open Positions</p>
          <h2>Three seats open right now</h2>
          <p className="lead">
            Filter by team. Every role is remote-first with core overlap hours in your pod’s
            time zone.
          </p>
          <div
            className="btn-row"
            role="group"
            aria-label="Filter open positions by team"
            style={{ marginTop: "1.5rem" }}
          >
            {filters.map((f) => {
              const active = filter === f;
              return (
                <button
                  key={f}
                  type="button"
                  className="btn"
                  aria-pressed={active}
                  onClick={() => setFilter(f)}
                  style={
                    active
                      ? undefined
                      : { background: "#fff", color: "var(--blue)", borderColor: "var(--blue)" }
                  }
                >
                  {f}
                </button>
              );
            })}
          </div>
          {visibleRoles.length > 0 ? (
            <div className="card-grid">
              {visibleRoles.map((r) => (
                <article className="card" key={r.title}>
                  <p
                    style={{
                      color: "var(--muted)",
                      fontSize: "0.9rem",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Remote / Full-Time
                  </p>
                  <h3>{r.title}</h3>
                  <p>{r.category}</p>
                  <p style={{ marginTop: "1rem" }}>
                    <Link className="read-more" href={r.href}>
                      View Position
                    </Link>
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <div className="card" style={{ marginTop: "32px", background: "#fff" }}>
              <h3>{emptyHeading}</h3>
              <p>
                We hire in this team regularly and we keep every application on file. Send us
                yours and we will come back to you when a seat opens rather than leaving you
                to check the page.
              </p>
              <p style={{ marginTop: "1rem" }}>
                <Link className="btn btn-outline" href="#talent-pool">
                  Join the talent pool
                </Link>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 6. Our Hiring Process */}
      <section className="section">
        <div className="container">
          <p className="eyebrow">Our Hiring Process</p>
          <h2>Six steps, roughly three weeks</h2>
          <p className="lead">
            No mystery and no ghosting. You will always know which stage you are at and what
            happens next.
          </p>
          <div className="card-grid">
            {hiringSteps.map((s) => (
              <article className="card" key={s.num}>
                <p className="card-num">{s.num}</p>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 7. We’re Growing Our Team / Talent Pool */}
      <section className="section section-soft" id="talent-pool">
        <div className="container">
          <div className="split">
            <div>
              <p className="eyebrow">We’re Growing Our Team</p>
              <h2>Don’t see the right role?</h2>
              <p>
                We open two to four seats a quarter and we fill a good number of them from
                applications that arrived before the role existed. Tell us what you would want
                to own and we will keep you on file properly — which means an actual person
                reviewing it, and a reply when something opens that fits.
              </p>
              <ul className="check-list">
                {talentPoolPromises.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
            <div>
              {submitted ? (
                <div
                  className="card"
                  role="status"
                  style={{ background: "#fff", textAlign: "left" }}
                >
                  <p className="eyebrow">Application received</p>
                  <h2 style={{ fontSize: "1.5rem" }}>
                    Thank you, {form.name.split(" ")[0] || "there"} — your application is in.
                  </h2>
                  <p style={{ color: "var(--muted)" }}>
                    A human on the hiring team will read your application for{" "}
                    <strong>{form.area}</strong> within five working days, and you will get
                    an answer either way at <strong>{form.email}</strong>. We tell you the
                    salary band before you invest time in a process, and your details are kept
                    for twelve months, then deleted unless you say otherwise.
                  </p>
                  <div className="btn-row">
                    <button className="btn" type="button" onClick={resetForm}>
                      Send another application
                    </button>
                    <Link className="btn btn-outline" href="#open-positions">
                      See open positions
                    </Link>
                  </div>
                </div>
              ) : (
                <form
                  className="card"
                  style={{ background: "#fff" }}
                  onSubmit={handleSubmit}
                  noValidate
                  aria-label="General Application"
                >
                  <h3 style={{ fontSize: "1.5rem" }}>General application</h3>
                  <p style={{ color: "var(--muted)" }}>Takes about three minutes.</p>

                  <div className="form-field">
                    <label htmlFor="careers-name">
                      Full name <span className="required">*</span>
                    </label>
                    <input
                      id="careers-name"
                      className="form-input"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      aria-invalid={Boolean(errors.name)}
                    />
                    {errors.name && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="careers-email">
                      Email <span className="required">*</span>
                    </label>
                    <input
                      id="careers-email"
                      className="form-input"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => set("email", e.target.value)}
                      aria-invalid={Boolean(errors.email)}
                    />
                    {errors.email && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="careers-area">
                      Area of interest <span className="required">*</span>
                    </label>
                    <select
                      id="careers-area"
                      className="form-select"
                      value={form.area}
                      onChange={(e) => set("area", e.target.value)}
                    >
                      {areas.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="careers-location">
                      Where are you based? (city and time zone){" "}
                      <span className="required">*</span>
                    </label>
                    <input
                      id="careers-location"
                      className="form-input"
                      type="text"
                      autoComplete="address-level2"
                      value={form.location}
                      onChange={(e) => set("location", e.target.value)}
                      aria-invalid={Boolean(errors.location)}
                    />
                    {errors.location && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.location}
                      </p>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="careers-profile">LinkedIn or portfolio URL</label>
                    <input
                      id="careers-profile"
                      className="form-input"
                      type="url"
                      autoComplete="url"
                      value={form.profile}
                      onChange={(e) => set("profile", e.target.value)}
                      aria-invalid={Boolean(errors.profile)}
                    />
                    {errors.profile && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.profile}
                      </p>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="careers-cv">Attach your CV</label>
                    <input
                      id="careers-cv"
                      ref={fileInputRef}
                      className="form-input"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleCvChange(e.target.files?.[0])}
                      aria-invalid={Boolean(errors.cvName)}
                      aria-describedby="careers-cv-hint"
                    />
                    <p
                      id="careers-cv-hint"
                      style={{ color: "var(--muted)", fontSize: "0.9rem", margin: "0.4rem 0 0" }}
                    >
                      Maximum file size 5 MB.
                      {form.cvName ? ` Attached: ${form.cvName}` : ""}
                    </p>
                    {errors.cvName && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.cvName}
                      </p>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="careers-message">
                      Tell us what you would want to own here{" "}
                      <span className="required">*</span>
                    </label>
                    <textarea
                      id="careers-message"
                      className="form-input"
                      rows={5}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      aria-invalid={Boolean(errors.message)}
                      style={{ resize: "vertical", width: "100%" }}
                    />
                    {errors.message && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="form-field">
                    <label className="form-check" style={{ fontWeight: 400 }}>
                      <input
                        type="checkbox"
                        checked={form.consent}
                        onChange={(e) => set("consent", e.target.checked)}
                        aria-invalid={Boolean(errors.consent)}
                      />
                      <span>
                        I agree that Dazzle Commerce may store this application and contact me
                        about roles. See our{" "}
                        <Link href="/privacy-policy/">Privacy Policy</Link>.{" "}
                        <span className="required">*</span>
                      </span>
                    </label>
                    {errors.consent && (
                      <p className="form-msg form-msg-dark err" role="alert">
                        {errors.consent}
                      </p>
                    )}
                  </div>

                  <button
                    className="btn"
                    type="submit"
                    style={{ width: "100%", justifyContent: "center" }}
                  >
                    Send My Application
                  </button>
                  {submitError && (
                    <p className="form-msg form-msg-dark err" role="alert">
                      {submitError}
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
