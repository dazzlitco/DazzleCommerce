# Contact Page — Word-for-Word Extraction

- **Source URL:** https://dazzlecommerce.com/contact/
- **Fetched:** 2026-11-23 (HTTP 200, 355,023 bytes, curl, desktop UA)
- **Live page platform:** WordPress + Elementor Pro (form name "Growth Audit Request", form id `ec974e3`, post id 23)
- **Published:** 2026-08-15T07:14:04-05:00 — **Modified:** 2026-08-26T00:53:14-05:00 (Rank Math / JSON-LD)
- **Twitter "Time to read":** 4 minutes
- **Breadcrumb:** Home › Contact — JSON-LD schema only; no visible breadcrumb element is rendered in the page body (verified 2026-11-23).

## Meta

- **Title:** `Contact Dazzle Commerce | Book a Free Strategy Call`
- **Meta description:** `Talk to an eCommerce management and marketing specialist. Free store, ad account and marketplace audit, with a reply within one business day.`
- **Canonical:** https://dazzlecommerce.com/contact/
- **OG type:** article; **OG locale:** en_US; **OG site name:** Dazzle Commerce
- **OG title / description:** same as title / meta description above
- **Twitter card:** summary_large_image; title/description same as above
- **Robots:** `index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large`

## Schema (JSON-LD, Rank Math) — note discrepancies vs visible copy, see "Live quirks" below

- **Organization:** Dazzle Commerce — https://dazzlecommerce.com — email `hello@dazzlecommerce.com` — telephone `+1 (555) 012-3456` — openingHours `Mo,Tu,We,Th,Fr,Sa,Su 09:00-17:00`
- **Place / PostalAddress:** `1201 Commerce Street, Suite 400`, Austin, TX 78701, US
- **Logo:** https://dazzlecommerce.com/wp-content/uploads/2026/08/dazzle_commerce_logo_site-1.svg
- **Author (Person):** "Dazzle Commerce", author URL https://dazzlecommerce.com/author/shaheensagar2000yahoo-com/ (note: the author slug contains a Yahoo email-style handle — verbatim from live schema)

## Section 1 — Hero + Growth Audit form (H1)

- **H1:** `Let’s Talk About Your eCommerce Growth`
- **Intro copy:** `Tell us where you are stuck and we will tell you what we would do about it. Free audit, free 30-minute strategy call, and an honest answer about whether we are the right fit.`
- **Form heading (H2):** `Request your free growth audit`
- **Form intro:** `Takes about two minutes. The more context you give us, the more specific the audit comes back.`
- **Form name:** `Growth Audit Request` (`<form class="elementor-form" method="post" name="Growth Audit Request" aria-label="Growth Audit Request">`)
- **Submit button:** `Request My Free Audit` (with a calendar-check icon)

### Form fields (in order, with live labels, placeholders and required status)

| Field | Type | Required | Placeholder / options |
|---|---|---|---|
| Full name | text (`form_fields[name]`) | Yes | `Jordan Avery` |
| Work email | email (`form_fields[email]`) | Yes | `jordan@yourbrand.com` |
| Phone | tel (`form_fields[phone]`, pattern `[0-9()#&+*-=.]+`, title "Only numbers and phone characters (#, -, *, etc) are accepted.") | No | `+1 (555) 000-0000` |
| Store website | url (`form_fields[website]`) | Yes | `https://yourbrand.com` |
| Primary platform | select (`form_fields[platform]`) | No | Shopify / Shopify Plus; WooCommerce; Amazon Seller Central; Amazon Vendor Central; Walmart Marketplace; eBay; Etsy; BigCommerce; Magento / Adobe Commerce; Custom / Headless; Thinking to sell online |
| Monthly online revenue | select (`form_fields[revenue]`) | No | Pre-launch; Under $25K / month; $25K - $100K / month; $100K - $500K / month; $500K - $2M / month; $2M+ / month |
| Monthly budget for growth | select (`form_fields[budget]`) | No | Under $2,500 / month; $2,500 - $5,000 / month; $5,000 - $10,000 / month; $10,000 - $25,000 / month; $25,000+ / month; Not sure yet |
| Which services are you interested in? | checkboxes (`form_fields[services][]`) | No | eCommerce Store Management; eCommerce SEO; PPC & Google Shopping; Amazon PPC & Marketplace; Conversion Rate Optimization; Email & SMS Retention; Shopify / WooCommerce Development; Creative & Content Production |
| What is the main thing you want to fix? | textarea (`form_fields[message]`, rows 5) | Yes — **correction 2026-11-23:** the live textarea carries `required="required"` (class `elementor-field-required`); an earlier extraction wrongly listed it as not required, and the clone has been fixed to require it. | `e.g. Our Amazon sales dropped 30% after a listing suppression and we have not recovered. Shopify is flat and paid social CAC is up 40% year on year.` |
| Consent | checkbox (`form_fields[consent]`) | Yes | Label text: `I agree to the Privacy Policy. We will never sell your data.` — "Privacy Policy" links to `/privacy-policy/` — plus a separate field label `Consent` above the checkbox (**correction 2026-11-23:** the earlier extraction omitted the standalone `Consent` label; the clone now renders it). |
| Honeypot | hidden text field `form_fields[hp_501ee]` (`display:none !important;`) | — | — |
| Hidden fields | `post_id=23`, `form_id=ec974e3`, `referer_title="Contact Dazzle Commerce | Book a Free Strategy Call"`, `queried_id=23` | — | — |

## Section 2 — Contact Information

- **H2:** `Contact Information`
- **Sub-heading (H3):** `Talk to a human, quickly`
- **Intro copy:** `No gatekeeping, no qualification quiz before you are allowed to speak to someone who knows what they are talking about.`

### Head Office (H3)
`1201 Commerce Street, Suite 480`
`Austin, TX 78701, United States`

### Phone (H3)
`+1 (555) 010-2400` — link `tel:+1 (555) 010-2400`
`Mon–Fri, 9:00–18:00 CT`

### Email (H3)
`hello@dazzlecommerce.com` — link `mailto:hello@dazzlecommerce.com`
`New business, support and partnerships`

### Coverage (H3)
`Account teams across five time zones`
`US, UK, EU, Gulf and APAC business hours`

### Serving clients in (H3)
`United States, United Kingdom, Canada, Australia and the UAE`
Link: `See all locations we serve` → https://dazzlecommerce.com/locations-we-serve/

## Section 3 — What Happens Next

- **H2:** `What Happens Next`
- **Sub-heading / intro:** `From enquiry to answers in about a week`
- **Intro copy:** `No mystery, no chasing. Here is exactly what follows after you hit submit.`

### Step 01 — `We reply within one business day`
`A senior strategist reads your enquiry — not a bot and not an SDR. If we are not the right fit, we will say so in that first reply.`

### Step 02 — `We run a free growth audit`
`Before the call we review your store, ad accounts and marketplace health, then score every opportunity by revenue impact.`

### Step 03 — `You get a 30-minute strategy call`
`We walk you through the findings live, tell you the three things we would fix first and roughly what each is worth.`

### Step 04 — `You keep the audit either way`
`Whether or not you hire us, the scorecard and the recommendations are yours.`

## Section 4 — Alternative Ways to Connect

- **H2:** `Alternative Ways to Connect`
- **Sub-heading / intro:** `Forms are not for everyone`
- **Intro copy:** `Pick whichever is least annoying. They all reach the same team.`

### Book directly in the calendar (H3)
`Skip the form and grab a slot that suits you. Available Monday to Friday, 9:00–18:00 CT, with early and late slots for UK, EU and APAC clients.`
Button: `Choose a time` → anchor `#form` (scrolls back to the form on the live page; no separate calendar embed was found in the page source)

### Call us (H3)
`Speak to someone straight away during business hours. Outside those hours leave a voicemail and we will call back the next working morning.`
`+1 (555) 010-2400` — link `tel:+15550102400`

### Email us (H3)
`Prefer to write it all out? Send context, links and any numbers you can share and we will come back with specific questions rather than a generic brochure.`
`hello@dazzlecommerce.com` — link `mailto:hello@dazzlecommerce.com`

### Connect on LinkedIn (H3)
`Follow the team for teardowns, benchmark data and the occasional unpopular opinion about attribution modelling.`
Link: `Visit our page` → https://www.linkedin.com/company/dazzlecommerce

## Section 5 — Find Us (map)

- **H2:** `Find Us`
- **Sub-heading:** `Head office in Austin, Texas`
- **Copy:** `Visits are by appointment — most of our work happens remotely, so let us know you are coming.`
- **Map:** Google Maps embed iframe, `src="https://maps.google.com/maps?q=1201%20Commerce%20Street%2C%20Austin%2C%20TX%2078701&t=m&z=14&output=embed&iwloc=near"`, title/aria-label `1201 Commerce Street, Austin, TX 78701`
- **No photographic images** appear inside `<main>` on the live page (zero `<img>` tags in the main content).

## Section 6 — Contact FAQs

- **H2:** `Contact FAQs`
- **Sub-heading:** `Before you get in touch`

### Q1 — `How quickly will someone get back to me?`
`Within one business day, and usually the same day if you write before mid-afternoon Central Time. The first reply comes from a senior strategist, not a sales development rep working from a script.`

### Q2 — `Is the strategy call actually free, or is it a sales call?`
`It is free and it is genuinely useful. We run the audit before the call and spend the thirty minutes walking you through what we found. There is a moment at the end where we tell you what working together would look like, and if you are not interested that is the end of it.`

### Q3 — `What information should I have ready?`
`Read-only access to Google Analytics, your ad accounts and your marketplace seller accounts makes the audit far more valuable. If you cannot share those before the call, come anyway.`

### Q4 — `Do you sign NDAs?`
`Routinely. Send yours with the enquiry, or use ours. We can have it executed before any account access is shared.`

### Q5 — `Do you work with clients in other time zones?`
`Yes. Roughly 40% of our clients are outside the United States. We hold call slots in UK, EU, Gulf and APAC business hours.`

### Q6 — `I am not ready to hire an agency. Can I still talk to you?`
`Please do. A good number of our conversations end with us telling someone to hire in-house first, fix their tracking, or wait two quarters.`

## Section 7 — Final CTA

- **H2:** `Still deciding? Book the call anyway.`
- **Copy:** `The audit is free, the advice is specific, and the worst outcome is that you leave with a prioritised list of fixes and no agency invoice.`
- **Buttons:** `Book Your Free Strategy Call` → `/book-a-strategy-call/` ; `Read Case Studies First` → `/case-studies/`
- **Trust line:** `Free 30-minute call` · `No long-term contracts` · `Actionable audit you keep`

## All links found in the main content

- `/privacy-policy/` (consent label)
- `tel:+1 (555) 010-2400` and `tel:+15550102400` (two spellings of the same number, verbatim)
- `mailto:hello@dazzlecommerce.com`
- https://dazzlecommerce.com/locations-we-serve/ (`See all locations we serve`)
- `#form` (`Choose a time`)
- https://www.linkedin.com/company/dazzlecommerce (`Visit our page`)
- `/book-a-strategy-call/`
- `/case-studies/`
- Google Maps embed for `1201 Commerce Street, Austin, TX 78701`

## Live quirks — kept verbatim, not "fixed"

1. **Suite number mismatch:** the visible "Head Office" block says **Suite 480**, while the JSON-LD schema address says **Suite 400**. The clone uses the visible copy (Suite 480) and notes the schema value here.
2. **Phone number mismatch:** the visible phone is **+1 (555) 010-2400**, while the JSON-LD schema telephone is **+1 (555) 012-3456**. The clone uses the visible number.
3. **Hours mismatch:** the visible phone hours are **Mon–Fri, 9:00–18:00 CT**, while the schema openingHours are `Mo,Tu,We,Th,Fr,Sa,Su 09:00-17:00`. The clone uses the visible hours.
4. **"Choose a time" goes nowhere:** the calendar button links to `#form` — it scrolls back to the form; there is no calendar widget/embed in the page. The clone keeps the anchor behaviour.
5. **No images in the main content:** the live contact page has zero `<img>` tags inside `<main>`; the map is the only visual. (Note 2026-11-23: illustrative clone images formerly used in the hero, "What Happens Next" and "Find Us" sections were removed in the fidelity fix pass — the clone now has no images on this page either.)
6. **Author slug quirk:** the JSON-LD author URL is `https://dazzlecommerce.com/author/shaheensagar2000yahoo-com/` — reproduced here for the record only; not used in the clone.
7. **Spelling:** the live page uses British spelling in places (`prioritised`, `enquiry`, `organisation` in schema context) alongside US copy — kept as-is in quoted copy.
8. **Phone tel: links use two different spellings** (`tel:+1 (555) 010-2400` in the contact block, `tel:+15550102400` in the "Call us" card) — both preserved above.
9. **Correction 2026-11-23 (fidelity audit):** the "What is the main thing you want to fix?" textarea IS required on live (`required="required"`), the phone field's full `title` is `Only numbers and phone characters (#, -, *, etc) are accepted.` (the earlier extraction truncated it), and the consent checkbox carries a separate field label `Consent` above it. The clone form and this extraction were corrected the same day; the phone pattern `[0-9()#&+*-=.]+` itself was already recorded correctly and does not allow spaces.

## Correction 2026-11-23 — section pills (supersedes any earlier line describing the pills as text-only / uppercase)

Re-fetched live 2026-11-23. Every section pill on live is an Elementor icon-list item: a leading icon + Title Case blue text inside a rounded pale-blue chip — NOT text-only, NOT uppercase, NOT letter-spaced. All five pill widgets on this page carry `elementor-align-center` on live. (This extraction previously recorded no pill/icon lines for these sections; the pills are recorded here for the first time.)

| Section | Pill label | Live icon | Clone FA icon | Align |
|---|---|---|---|---|
| 2. Contact Information | `Contact Information` | custom SVG: speech bubble | `fa-solid fa-comment` | center |
| 3. What Happens Next | `What Happens Next` | Font Awesome `e-far-clock` (live FA class) | `fa-regular fa-clock` (verbatim live icon) | center |
| 4. Alternative Ways to Connect | `Alternative Ways to Connect` | custom SVG: headphones | `fa-solid fa-headphones` | center |
| 5. Find Us | `Find Us` | custom SVG: map pin | `fa-solid fa-location-dot` | center |
| 6. FAQ | `Contact FAQs` | custom SVG: speech bubble with `?` (same artwork as homepage FAQ) | `fa-solid fa-circle-question` | center |

The "Contact Information", "Alternative Ways to Connect" and "Find Us" icons are closest-FA equivalents of custom live SVGs (render-proven by rendering the live SVGs to images and identifying them visually). The form itself is unchanged in this pass: the pre-existing edits (message textarea required, standalone `Consent` label, phone pattern tightened to live's, verbatim title) are kept, and the clone-invented validation messages and success panel copy are kept per the user's 2026-11-23 approval. The success panel's `Request received` line still uses the plain `.eyebrow` class (it is clone-invented UI, not a live pill, so it was not converted to the Pill component); note it now inherits the chip styling from the shared `.eyebrow` CSS.
