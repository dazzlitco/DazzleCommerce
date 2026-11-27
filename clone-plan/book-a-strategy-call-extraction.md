# Book a Strategy Call — Word-for-Word Extraction

> **REDO NOTE — 2026-11-27 (Batch 1, page 15, one-page-at-a-time method).** The page was redone against the live rendered page and pushed: code `329bc2b`, photos `ada0d5c`, records (remote head verified). The walkthrough landed on an A/B experiment variant — the fourteenth occurrence (nearly every section rewritten: different H2s/intros/cards, a different 10-field form "Request a Time", an extra "When Can You Get a Time?" section, different FAQ questions, a different final CTA "Not Sure Where to Start? Book the Call.", footer address "701 Brazos Street, Suite 1500"); it persisted across a reload. Verification against the served HTML (382,239 bytes, unchanged since 2026-11-23): control 104/104 strings PRESENT — control copy kept, 0 variant strings (2 "hits" — "Afterwards" and "Book the call" — are control strings). Structure corrections, all proven from live's element-id CSS + stack-parser probes: hero is a STACKED column on flat #F7F9FC (40px/70px), NOT a split — breadcrumb → two pill chips → H1 45px LEFT → 19px intro → ONE white facts card (4 label-above-value cells) → buttons → FULL-WIDTH image (radius 18px + shadow) → centered closing line below the image; §2 is a 2-col grid of white cards with circle-check/circle-xmark icon tiles and BLUE check bullets; §3 is a 3+1 grid with 46px blue SQUARE number tiles "01"–"04"; §4/§5 have full-width CENTERED headers above 52%/43% splits (gap 48px) with green checklists; §6 is a 3-col grid; §7 form is a full-width white card on #F7F9FC with the id `bc-form` on the SECTION, visible labels with CSS-generated red `*`, selects with NO placeholder option (defaults: timezone "Americas – Pacific", when "Morning", revenue "Under $25K", focus "I am not sure — help me work it out"), the "One inbox, one reply…" line OUTSIDE/below the card, and NO calendar/date picker on live; §8 is a 4-col grid with centered blue numbers + tags + H3 18px + blue text links; §9 is a 3-col grid with inline links; §10 FAQ is the nested accordion with the rotating circle toggle; §11 routes have INSET images (radius 12px) + a centered "All guides" button; §12 final CTA is the blue gradient panel with a white calendar button + ghost pricing button and NO checkmarks. The walkthrough's alternating section backgrounds, ~860px hero image, pale-blue circle step numbers and solid-blue CTA panel were all variant-layout artifacts — control is only hero + form tinted, a full-width image, blue square tiles and the gradient panel. All 6 batch-build photos were wrong scenes (built from the misleading live ALT texts) and were regenerated to match the real live scenes (same filenames, git blob SHAs verified on GitHub). Live quirks preserved: the breadcrumb parent is Contact; the form has no date picker; the §5 "What not to prepare" line is plain text (no bold).

- **Source URL:** https://dazzlecommerce.com/book-a-strategy-call/
- **Fetched:** 2026-11-23 (HTTP 200, 382,173 bytes, curl, desktop UA; `browser.open` failed with a network/DNS error, so the fetch was done via curl)
- **Live page platform:** WordPress 7.1.5 + Elementor 4.4.1, Rank Math SEO, Site Kit by Google 1.188.0 (form name "Strategy Call Booking", form id `5c75efe`, post id 2036, shortlink `https://dazzlecommerce.com/?p=2036`)
- **Published:** 2026-09-12T07:35:28-05:00 — **Modified:** 2026-09-12T07:35:29-05:00 (Rank Math / JSON-LD)
- **Twitter "Time to read":** Less than a minute
- **Breadcrumb (JSON-LD + visible):** Home › Contact › Book a Strategy Call (the parent crumb is **Contact**, verbatim — see "Live quirks")

## Meta

- **Title:** `Book a Strategy Call | Dazzle Commerce`
- **Meta description (Rank Math, in `<head>`):** `Thirty minutes with an eCommerce strategist about your constraint. No deck, no discovery questionnaire, and no obligation to go any further.`
- **Meta description (second, later in the document, Site Kit / Elementor excerpt):** `Thirty minutes with the strategist who would run your account. No slides, no pitch, and a written summary afterwards either way.` — the clone uses the first (Rank Math) description, and notes the second here.
- **Canonical:** https://dazzlecommerce.com/book-a-strategy-call/
- **OG type:** article; **OG locale:** en_US; **OG site name:** Dazzle Commerce
- **OG title / description:** same as title / first meta description above
- **OG image:** https://dazzlecommerce.com/wp-content/uploads/2026/09/au-why-team.jpg (1400×788, alt `Business team meeting in a modern office`) — the same image file used as the About page OG image
- **Twitter card:** summary_large_image; title/description same as above; twitter image same `au-why-team.jpg`
- **Robots:** `index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large`

## Schema (JSON-LD, Rank Math) — note discrepancies vs visible copy, see "Live quirks" below

- **Organization:** Dazzle Commerce — https://dazzlecommerce.com — email `hello@dazzlecommerce.com` — telephone `+1 (555) 012-3456` — openingHours `Mo,Tu,We,Th,Fr,Sa,Su 09:00-17:00`
- **Place / PostalAddress:** `1201 Commerce Street, Suite 400`, Austin, TX 78701, US
- **Logo:** https://dazzlecommerce.com/wp-content/uploads/2026/08/dazzle_commerce_logo_site-1.svg
- **Author (Person):** "Dazzle Commerce", author URL https://dazzlecommerce.com/author/shaheensagar2000yahoo-com/ (note: the author slug contains a Yahoo email-style handle — verbatim from live schema)
- **FAQPage schema:** 8 questions, word-for-word identical to the visible FAQ section below.

## Section 1 — Hero (H1)

- **Breadcrumb (visible):** `Home › Contact › Book a Strategy Call`
- **Eyebrow / label:** `Strategy call`
- **Badge:** `Thirty minutes · free`
- **H1:** `Book a Thirty-Minute Strategy Call`
- **Intro copy:** `A conversation with the strategist who would actually run your account, about the one thing most likely to be holding your revenue down. No slide deck, no discovery questionnaire, no second call to meet the real team. You get a written summary afterwards whether or not anything follows.`
- **Fact row (label / value):**
  - `LENGTH` / `Thirty minutes`
  - `WHO YOU MEET` / `A senior strategist`
  - `COST` / `Free`
  - `SLIDES` / `None`
- **Buttons:** `Go to the booking form` → `#bc-form` ; `Ask for a proposal instead` → `/request-a-proposal/`
- **Line under the buttons:** `One strategist, one call, and a written summary you keep — including the parts where we tell you not to hire us.`
- **Image (after the hero text):** `au-why-team.jpg`, alt `Business team meeting in a modern office`

## Section 2 — The call: what it is, and what it is not

- **Eyebrow:** `The call`
- **H2:** `What it is, and what it is not`
- **Intro copy:** `Most agency “discovery calls” are qualification interviews with a demo at the end. This is not that, and it is worth being specific about the difference.`

### What it is (H3)

- `A working conversation about your numbers, not about us`
- `Run by the strategist who would own your account`
- `An honest read on what we think your constraint is`
- `A place to argue with that read and change our mind`

### What it is not (H3)

- `A slide deck about our methodology and client logos`
- `A qualification call that hands you to somebody senior later`
- `A pricing negotiation — the numbers are already published`
- `A commitment to anything, including a second call`

- **Closing line:** `If thirty minutes is not enough for your situation, we will say so on the call and tell you which of the free routes fits better.`

## Section 3 — The half hour: how the thirty minutes is actually spent

- **Eyebrow:** `The half hour`
- **H2:** `How the thirty minutes is actually spent`
- **Intro copy:** `Roughly this shape, though we will follow whatever turns out to matter.`

### Step 01 — `Where you are — about ten minutes`
`Revenue, channels, margin shape, what changed recently and what you have already tried. We listen more than we talk here, and we will not read your answers back to you from the form.`

### Step 02 — `What we think is wrong — about ten minutes`
`A view on the constraint, formed from your store and whatever you have shared. Sometimes we are wrong, and the useful part of the call is you explaining why.`

### Step 03 — `What we would do about it — about five minutes`
`The first thing we would change, the order after that, and roughly what it would cost in time and money. Including when the answer is that you should do it in-house.`

### Step 04 — `What happens next — about five minutes`
`Which of the free routes fits: the audit, a proposal, or nothing at all. We will tell you if we think you do not need an agency yet.`

- **Closing line:** `You will get a written summary within one business day, with the constraint we named and the reasoning behind it. It is yours to use with or without us.`

## Section 4 — The other side: which eCommerce consultant you will actually be speaking to

- **Eyebrow:** `The other side`
- **H2:** `Which eCommerce consultant you will actually be speaking to`
- **Intro copy:** `The eCommerce consultant on the call is the person who would run the work. This is the whole point.`
- **Body:** `Depending on what your form says, you will be booked with the strategist whose discipline matches your likely constraint — search, paid, retention, conversion or marketplace. If the constraint is unclear from the form, you get the strategist who covers management across all of them.`
- **Body:** `There is no business development layer to get through. Nobody on the call will need to “check with the team and come back to you” about whether something is possible, because the person answering is the person who would do it. You can read how we work for what happens if you go further, and it is an accurate description rather than a brochure.` — "how we work" links to `/how-we-work/`
- **Checklist:**
  - `One person, not a panel of four on a grid`
  - `Matched to your likely constraint, not to your revenue band`
  - `The same person you would work with if you went ahead`
- **Image:** `usa-why-team.jpg`, alt `eCommerce strategists brainstorming a growth plan around a meeting table`

## Section 5 — Preparation: what to have open, and what not to bother with

- **Eyebrow:** `Preparation`
- **H2:** `What to have open, and what not to bother with`
- **Intro copy:** `Thirty minutes goes quickly. Five minutes of preparation roughly doubles what you get out of it.`
- **Note:** `None of this is required. If you turn up with nothing we will still have a useful conversation from what is publicly visible on your store.`
- **Have open (list):**
  - `Your last three months of revenue, by channel if you have it`
  - `Roughly what you spend on marketing, and where`
  - `A rough gross margin band for your main categories`
  - `The one thing that has been bothering you for months`
- **What not to prepare:** `What not to prepare: a brief, a deck, a list of agency questions, or a tidied-up version of your numbers. Messy and real is more useful to us than clean and approximate.`
- **Closing line:** `If you would like to arrive already knowing your constraint, the growth assessment takes about forty minutes and is published in full.` — "growth assessment" links to `/ecommerce-growth-assessment/`
- **Image:** `uk-channel-growth.jpg`, alt `Tablet showing eCommerce performance charts on a desk`

## Section 6 — Our commitments: six things we will not do on this call

- **Eyebrow:** `Our commitments`
- **H2:** `Six things we will not do on this call`
- **Intro copy:** `Each of these costs us conversions. They are on the page because the alternative is a worse conversation.`

### `Present slides at you`
`Nobody has ever bought an agency because of slide fourteen. If we send anything afterwards it is a written summary, not a deck.`

### `Create artificial urgency`
`No expiring discounts, no “we only take two clients a quarter”, no pressure to decide on the call. The pricing is published and does not move because you hesitated.`

### `Run a qualification script`
`You will not be asked to rate your pain out of ten, or which of four personas you identify with. It is a conversation between two people who know eCommerce.`

### `Hand you to somebody else afterwards`
`The strategist on the call is the strategist on the account. There is no transition to an implementation team you have not met.`

### `Quote numbers we cannot stand behind`
`No promised percentages, no guaranteed rankings, no case study that happens to match your category exactly. Our case studies carry their methodology.` — "case studies" links to `/case-studies/`

### `Put you into a nurture sequence`
`One follow-up after the call. If you do not reply, we stop. You will not receive a monthly newsletter you did not ask for.`

- **Closing line:** `If any of that happens on your call, reply to the summary email and tell us. It would be a failure of ours, not a tactic.`

## Section 7 — Book it: the booking form (id `bc-form`)

- **Eyebrow:** `Book it`
- **H2:** `Nine fields, five of them required`
- **Intro copy:** `We use the answers to pick which strategist you speak to and to prepare, so the first ten minutes is not spent on basics.`
- **Form name:** `Strategy Call Booking` (`<form class="elementor-form" method="post" name="Strategy Call Booking" aria-label="Strategy Call Booking">`)
- **Hidden fields:** `post_id=2036`, `form_id=5c75efe`, `referer_title="Book a Strategy Call | Dazzle Commerce"`, `queried_id=2036`
- **Honeypot:** hidden text field `form_fields[hp_51757]` (`display:none !important;`)

### Form fields (in order, with live labels, placeholders and required status)

| Field | Type | Required | Placeholder / options |
|---|---|---|---|
| Full name | text (`form_fields[name]`) | Yes | `Jordan Avery` |
| Work email | email (`form_fields[email]`) | Yes | `jordan@yourbrand.com` |
| Store website | url (`form_fields[website]`) | Yes | `https://` |
| Your timezone | select (`form_fields[timezone]`) | No | Americas – Pacific; Americas – Central / Eastern; UK / Ireland; Europe; Gulf / Middle East; Africa; India / South Asia; Southeast Asia; Australia / New Zealand |
| Best time of day | select (`form_fields[when]`) | No | Morning; Early afternoon; Late afternoon; Flexible |
| Monthly online revenue | select (`form_fields[revenue]`) | No | Under $25K; $25K – $100K; $100K – $250K; $250K – $1M; Over $1M; Prefer not to say |
| What should we spend the time on? | select (`form_fields[focus]`) | No | I am not sure — help me work it out; Organic search and category pages; Paid media efficiency; Conversion and checkout; Email and retention; Marketplaces and listings; Reporting and margin visibility; Choosing between agency and in-house |
| What has been bothering you for months? | textarea (`form_fields[context]`, rows 4) | Yes | `One or two sentences is plenty. Messy and real beats tidy and approximate.` |
| Consent | checkbox (`form_fields[consent]`) | Yes | Label text: `I agree to Dazzle Commerce using these details to arrange and prepare for the call.` |

- **Submit button:** `Book My Strategy Call` (with a calendar-check icon)
- **Line under the form:** `One inbox, one reply, one follow-up if we do not hear back. No sequence, no newsletter, no third parties.`
- **No calendar widget / date picker on the live page:** there is no Calendly, Cal.com or other calendar embed, no iframe, and no date/time-slot field in the form. Booking works by submitting the form; times are arranged afterwards by email (see FAQ "How soon can we speak?"). The clone reproduces the nine live fields verbatim with no date/time picker (a picker added in the first build was removed in the 2026-11-23 fidelity pass).

## Section 8 — Afterwards: what you get, whether or not you hire us

- **Eyebrow:** `Afterwards`
- **H2:** `What you get, whether or not you hire us`
- **Intro copy:** `The summary is the deliverable. Everything else is optional.`

### 01 — `WITHIN A DAY` — `A written summary`
`The constraint we named, the reasoning behind it, and the first thing we would change. Written so you can forward it internally without explaining the call.`
Link: `Book the call →` → `#bc-form`

### 02 — `IF YOU WANT MORE` — `The free audit`
`Five working days, six disciplines, a ranked constraint list and a ninety-day sequence. Still nothing owed.`
Link: `See the audit →` → `/ecommerce-audit/`

### 03 — `IF YOU ARE CLOSE` — `A scoped proposal`
`Price, sequence and named people, five working days after you ask. Usually much sharper for having had the call first.`
Link: `Request a proposal →` → `/request-a-proposal/`

### 04 — `IF NOT NOW` — `Nothing at all`
`One follow-up, then we leave you alone. The checklists and the assessment stay free and ungated for whenever you want them.`
Link: `Browse the resources →` → `/resources/checklists/`

## Section 9 — Timing: three times a call is the wrong first step

- **Eyebrow:** `Timing`
- **H2:** `Three times a call is the wrong first step`
- **Intro copy:** `Not a refusal — just a better use of your half hour.`

### `You have never measured the basics`
`If you do not know your conversion rate, your abandonment rate or your margin by category, the call becomes us asking questions you cannot answer. Run the growth assessment first — forty minutes, free, and it makes this call twice as useful.` — "growth assessment" links to `/ecommerce-growth-assessment/`

### `You need evidence, not an opinion`
`A thirty-minute conversation produces a view. If you need something defensible enough to take to a board or to settle an internal argument, ask for the free audit instead.` — "free audit" links to `/ecommerce-audit/`

### `You have already decided and need a number`
`If you know what you want built and just need scope and price, skip the conversation and request a proposal. We will call you if something in it needs discussing.` — "request a proposal" links to `/request-a-proposal/`

- **Closing line:** `All four routes are free and none of them requires the others. Pick whichever matches where you actually are.`

## Section 10 — Questions: strategy call FAQs

- **Eyebrow:** `Questions`
- **H2:** `Strategy call FAQs`
- **Intro copy:** `What people ask before booking.`

### Q1 — `Is it really free, and is there a catch?`
`It is free and there is no catch beyond the obvious one: we hope the conversation is good enough that you consider working with us. Nothing is invoiced, nothing is owed, and the written summary is yours regardless.`

### Q2 — `Will I be speaking to a salesperson?`
`No. You will be booked with the strategist whose discipline matches your likely constraint, and that is the same person who would run the work. We do not have a business development layer for you to get through.`

### Q3 — `What if thirty minutes is not enough?`
`It often is not, and that is fine. We will either run over a little or tell you which of the free routes suits your situation better — usually the audit. We will not book a second call purely to keep the conversation going.`

### Q4 — `Do I need to share analytics access?`
`No. Bring whatever numbers you are comfortable with, or none. We prepare from what is publicly visible on your store, which is usually enough to form a view worth arguing with.`

### Q5 — `How soon can we speak?`
`We reply within one business day with two or three times that fit your timezone. Most calls happen within the same week.`

### Q6 — `Can other people from my team join?`
`Yes, and it usually helps if the person who owns the budget is there. Beyond about four people it stops being a conversation and starts being a presentation, which is the thing we are trying to avoid.`

### Q7 — `What happens if I do not want to go further?`
`Nothing. You keep the summary, we send one follow-up, and if you do not reply we stop. You are welcome to come back months later; the resources stay free and ungated in the meantime.`

### Q8 — `Will you tell me if we do not need an agency?`
`Yes, and it happens regularly. The most common version is that the constraint is something your own team can fix faster and cheaper than we could, in which case we will say so and point you at the relevant checklist.`

## Section 11 — Other routes in: three alternatives to a call

- **Eyebrow:** `Other routes in`
- **H2:** `Three alternatives to a call`
- **Intro copy:** `All free, all ungated, none of them requiring this one.`

### `FORTY MINUTES` — `Run the growth assessment yourself` → `/ecommerce-growth-assessment/`
`Twelve points with every threshold published, so you can find your constraint without speaking to anybody.`
Image: `dzph-9pwlezargc.jpg`, alt `Comparing a printed report against a laptop`

### `FIVE DAYS` — `Take the free audit` → `/ecommerce-audit/`
`Six disciplines reviewed by the specialists who run them, ranked into one constraint and a ninety-day sequence.`
Image: `audit-hero.jpg`, alt `Senior strategists reviewing eCommerce performance charts during an audit session`

### `FIVE DAYS` — `Request a proposal` → `/request-a-proposal/`
`Scope, sequence, price and named people, if you already know what you want and need the document.`
Image: `b2b-lead-generation.jpg`, alt `Two business buyers discussing documents over coffee`

- **Button below the cards:** `All guides` → `/guides/`

## Section 12 — Final CTA

- **H2:** `Half an hour, and you keep the summary either way`
- **Copy:** `Tell us what has been bothering you for months. We will tell you what we think is causing it, in writing, whether or not anything follows.`
- **Buttons:** `Book Your Strategy Call` → `#bc-form` ; `See Pricing & Packages` → `/pricing/`

## All links found in the main content

- `/` (breadcrumb Home)
- `/contact/` (breadcrumb Contact)
- `#bc-form` (hero `Go to the booking form`; Afterwards `Book the call →`; final CTA `Book Your Strategy Call`)
- `/request-a-proposal/` (hero `Ask for a proposal instead`; Afterwards `Request a proposal →`; Timing `request a proposal`; Other routes `Request a proposal`)
- `/how-we-work/` (Section 4, "how we work")
- `/ecommerce-growth-assessment/` (Section 5, "growth assessment"; Timing card 1; Other routes card 1)
- `/case-studies/` (Section 6, "case studies")
- `/ecommerce-audit/` (Afterwards `See the audit →`; Timing card 2, "free audit"; Other routes card 2)
- `/resources/checklists/` (Afterwards `Browse the resources →`; FAQ Q8, "checklist")
- `/guides/` (Other routes, `All guides`)
- `/pricing/` (final CTA, `See Pricing & Packages`)
- No `tel:` / `mailto:` links and no external links appear in the main content.

## All images in the main content (in order of appearance)

1. `au-why-team.jpg` — alt `Business team meeting in a modern office` — Section 1 (hero)
2. `usa-why-team.jpg` — alt `eCommerce strategists brainstorming a growth plan around a meeting table` — Section 4
3. `uk-channel-growth.jpg` — alt `Tablet showing eCommerce performance charts on a desk` — Section 5
4. `dzph-9pwlezargc.jpg` — alt `Comparing a printed report against a laptop` — Section 11, card 1
5. `audit-hero.jpg` — alt `Senior strategists reviewing eCommerce performance charts during an audit session` — Section 11, card 2
6. `b2b-lead-generation.jpg` — alt `Two business buyers discussing documents over coffee` — Section 11, card 3
- Each image appears twice in the raw source (a lazy-load placeholder copy plus the real tag); the six unique images above are the real set. No other images appear inside `<main>`.

## Live quirks — kept verbatim, not "fixed"

1. **Breadcrumb parent is Contact:** the breadcrumb reads `Home › Contact › Book a Strategy Call`, even though this page is not a child of Contact in the site structure. Kept verbatim in the clone.
2. **Two different meta descriptions:** Rank Math's description (`Thirty minutes with an eCommerce strategist about your constraint. No deck, no discovery questionnaire, and no obligation to go any further.`) and a second description later in the document (`Thirty minutes with the strategist who would run your account. No slides, no pitch, and a written summary afterwards either way.`, also the post excerpt). The clone uses the first.
3. **No calendar embed:** despite the page being a booking page, there is no calendar, date picker or Calendly/Cal.com embed anywhere in the source (0 iframes in `<main>`, the word "calendar" appears only in the submit button's calendar-check icon). Times are arranged by email after the form is submitted. The clone has no picker either (one added in the first build was removed in the 2026-11-23 fidelity pass).
4. **"Nine fields, five of them required" checks out:** the nine fields are name, email, website, timezone, when, revenue, focus, context, consent; the five required are name, email, website, context, consent.
5. **OG image is recycled:** the OG image `au-why-team.jpg` is the same file used for the About page, and it is also the hero image on this page.
6. **"Which eCommerce consultant" wording:** Section 4's H2 calls the strategist an "eCommerce consultant" although every other mention on the page says "strategist" — kept verbatim.
7. **Phone/email/address do not appear** anywhere in the main content of this page (unlike the Contact page); the only contact route offered is the form itself.
8. **Schema vs visible copy:** the JSON-LD telephone is `+1 (555) 012-3456` and the address is `Suite 400` — neither appears in the visible page copy, so neither is used in the clone. The author slug `shaheensagar2000yahoo-com` is reproduced here for the record only; not used in the clone.
9. **Spelling / phrasing:** the live page uses British phrasing in places (`turn up`, `Messy and real beats tidy and approximate`) — quoted copy is reproduced exactly as fetched.
10. **Links to pages not yet built in the clone:** `/resources/checklists/` and `/guides/` do not exist as clone routes yet; the clone keeps the live hrefs unchanged so they resolve once those pages are built. (`/ecommerce-audit/`, `/ecommerce-growth-assessment/` and `/request-a-proposal/` now exist.)

## Correction 2026-11-23 — approved fix pass
- Section pills converted to the shared `Pill` component (chip + leading icon, Title Case): hero "Strategy call" is a TEXT-ONLY chip on live (no icon) — rendered icon-less; section pills centered with live icons (sections mostly `fa-layer-group`, "Questions" `fa-circle-question`, "Other routes in" `fa-route`).
- Hero fact labels LENGTH / WHO YOU MEET / COST / SLIDES are plain `<p>` on live, not H3 — clone corrected from H3 to `<p>`.
