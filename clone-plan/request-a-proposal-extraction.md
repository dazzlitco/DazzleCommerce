# Request a Proposal extraction — https://dazzlecommerce.com/request-a-proposal/

> **REDO NOTE — 2026-11-27 (Batch 1, page 16, one-page-at-a-time method).** The page was redone against the live rendered page and pushed: code `d165b5a`, photos `3b25eb0`, records (remote head verified). The walkthrough landed on an A/B experiment variant — the fifteenth occurrence (both the first-read "Variant A" 14-field form and the reloaded "Variant B" 12-field form were variants: different H1, hero as a split with a caption card, §1 as 3 image cards, §2 as a numbered 01–05 checklist card, a different 12-field form, FAQ Q7 "Do you need an NDA?" / Q8 "What if I would rather just talk?", CTA "Not sure a proposal is the right first step?", breadcrumb "Home / Request a Proposal", dark-navy CTA panel); both persisted across reloads. Verification against the served HTML (402,401 bytes, re-fetched 2026-11-27; the 2026-11-23 extraction fetch was 402,335 bytes): control 67/68 visible + 16/19 attributes — control copy kept, 0 variant strings (all 4 control "misses" proven false positives: the fit closing sentence split across elements; select options stored with `\/` escapes). Structure corrections, all proven from live's element-id CSS + stack-parser probes: hero is a STACKED column on flat #F7F9FC (40px/70px), NOT a split — breadcrumb (Home › Pricing › Request a Proposal — parent is Pricing, a live quirk) → two pill chips ("Proposal request", "Five working days", no icons) → H1 45px LEFT → 19px intro → ONE white facts card (4 label-above-value cells: TURNAROUND/Five working days, TYPICAL LENGTH/Eight to twelve pages, COST/Free, OBLIGATION/None) → buttons (blue with file-signature icon → #rp-form; white outlined with arrow-right → /book-a-strategy-call/) → FULL-WIDTH image (radius 18px + shadow) → centered closing line below the image; §2 What arrives is a 3-col grid of white cards with 46px solid-blue icon tiles (bullseye, list-ol, tag, users, chart-line, circle-exclamation) and BLUE check bullets; §3 Anatomy has a full-width CENTERED header above a 52%/43% split (text LEFT / image RIGHT, green checklist); §4 Need is the same split reversed (image LEFT / text RIGHT, green 6-item list, "free audit ." space-before-period quirk); §5 Timeline is a 3+1 grid with 46px blue SQUARE number tiles "01"–"04"; §6 Pricing is a 52%/43% split (text LEFT with pricing-page paragraph + "Either way…" paragraph + full-size white button / image RIGHT); §7 Premature is a 3+2 grid with 46px solid-blue icon tiles (scale-balanced, question, user-lock, hourglass-half, file-contract); §8 Fit is a 2-col grid with BLUE circle-check bullets in BOTH cards (green is only §3/§4); §9 form is a full-width white card on #F7F9FC with the id `rp-form` on the SECTION, visible labels with CSS-generated red `*`, selects with NO placeholder option (defaults: role "Founder / Owner", platform "Shopify / Shopify Plus", revenue "Under $25K", budget "Not decided yet"), services as 9 checkboxes, consent label exactly "I agree to Dazzle Commerce using these details to prepare and send a proposal.", full-width blue 12px submit with calendar-check icon, and the "Your details go to one inbox…" line OUTSIDE/below the card; §10 Afterwards is a 4-col grid with centered blue numbers + tags + H3 18px + blue text links; §11 FAQ is the nested accordion with the rotating circle toggle; §12 Other routes have INSET images (radius 12px) + a centered FULL-SIZE white "All guides" button; §13 final CTA is the blue gradient panel with a white calendar button + ghost audit button and NO checkmarks. All 7 batch-build photos were wrong scenes (built from the misleading live ALT texts) and were regenerated to match the real live scenes (same filenames, git blob SHAs verified on GitHub). The first regeneration attempt for the hero, §3, §4 and §6 images failed with an internal tool error; Alif authorized the retry and all 4 regenerated to match the live scenes. Live quirks preserved: the breadcrumb parent is Pricing; the §4 "free audit ." space before the period; the form has no date picker.
Fetched fresh 2026-11-23 via curl (402,335 bytes, HTTP 200). Source: WordPress / Hello Elementor / Elementor Pro. Font: Plus Jakarta Sans. Brand blue in inline CSS: #0B5BF4 / #0340FB, dark navy #091325, light blue #EFF4FD / #E6EBF3.
Copy below is word-for-word from the live HTML. Nothing invented. Where the live copy has a typo or quirk, it is kept and noted.

> **Correction note — 2026-11-23 (fresh re-fetch):** the original extraction wrongly claimed there was no hero image and no section images on this page, and that the clone's three "Other routes" photos were the only live images. That was wrong: the live page has 7 images in the main content (hero + one each in sections 3, 4 and 6 + the three "Other routes" cards). The lines below have been corrected accordingly; the wrong claims are struck through, not deleted, so the mistake stays visible.

## Meta
- Title: `Request a Proposal | Dazzle Commerce`
- Description: `Ask for a scoped eCommerce proposal: what it contains, what we need from you, how long it takes, and when requesting one is premature.`
- Canonical: https://dazzlecommerce.com/request-a-proposal/
- OG type: article, og:site_name: Dazzle Commerce, og:locale: en_US, og:url: https://dazzlecommerce.com/request-a-proposal/
- article:published_time 2026-09-12T07:32:57-05:00, article:modified_time / og:updated_time 2026-09-12T07:32:58-05:00
- Twitter card: summary_large_image; twitter:label1 `Time to read`, twitter:data1 `Less than a minute`
- Robots: index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large
- OG image: https://dazzlecommerce.com/wp-content/uploads/2026/09/b2b-lead-generation.jpg (1400×788), alt: `Two business buyers discussing documents over coffee`
- JSON-LD: not inspected in detail; the page head carries standard Yoast-style SEO meta (see above).

## Header (site header — same as homepage)
- Logo: “Dazzle Commerce” (links to /)
- Phone: +1 (555) 010-2400 → tel:+15550102400
- CTA: “Get Free Strategy Call” → /book-a-strategy-call/
- Nav (top level): Services, Platforms, Industries, Locations, Resources, Contact
- Services / Platforms / Industries / Locations / Resources mega-menus: identical to the homepage extraction (see clone-plan/homepage-extraction.md) — same 14 services, 21 platforms, 10 industries, 12 locations, Resources hub. Not repeated here.
- Resources mega-menu “Start” block includes: Growth Assessment (/ecommerce-growth-assessment/), Book a Strategy Call (/book-a-strategy-call/), Request a Proposal (/request-a-proposal/), Pricing (/pricing/).

## Breadcrumb
- `Home › Pricing › Request a Proposal` (Home → /, Pricing → /pricing/, current page unlinked)

## Main content — in order
Live section anchors (Elementor container ids): `rp-hero`, `rp-what`, `rp-anatomy`, `rp-need`, `rp-timeline`, `rp-pricing`, `rp-premature`, `rp-fit`, `rp-form`, `rp-after`, `rp-faqs`, `rp-more`.

### 1. Hero (`#rp-hero`)
- Eyebrow line 1: `Proposal request`
- Eyebrow line 2: `Five working days`
- H1: `Request a Proposal for Your Store`
- Copy: `A written proposal with the scope, the sequence, the price and the named people who would do the work. Free, non-binding, and specific enough to take to a board. This page tells you exactly what arrives, what we need to write it, and when asking for one is premature.`
- Fact row (label — value):
  - `TURNAROUND` — `Five working days`
  - `TYPICAL LENGTH` — `Eight to twelve pages`
  - `COST` — `Free`
  - `OBLIGATION` — `None`
- CTAs: `Go to the request form` → #rp-form ; `Book a call instead` → /book-a-strategy-call/
- Hero image below the CTAs (large, full-width): alt `Two business buyers discussing documents over coffee` (live file `b2b-lead-generation-1024x576.jpg`; the same file is the og:image above).
- Closing line under the hero image: `Every proposal is written against your numbers, not assembled from a template with your logo dropped on it.`
- ~~No hero image in the main content (the og:image above is the page's social image only).~~ — wrong, corrected 2026-11-23: the hero image is rendered in the main content, below the CTAs.

### 2. What arrives (`#rp-what`)
- Eyebrow: `What arrives`
- H2: `Six things, every time`
- Intro: `A proposal that leaves any of these out is a brochure. Ours is structured the same way whether the engagement is $3,000 a month or $30,000.`
- Six cards (title — bullets, verbatim):
  1. `The constraint we think you have`
     - `Named in one sentence, before any scope is described`
     - `The evidence that points at it, from your own data`
     - `What we expect to move, and roughly by how much`
  2. `Scope, in the order it happens`
     - `Which service lines run, and which deliberately do not`
     - `A ninety-day sequence sized in weeks, not a wish list`
     - `What is in month one versus what waits until month three`
  3. `Price, with the reasoning`
     - `A monthly figure, not a range you have to call about`
     - `What drives it up or down for your catalogue and channels`
     - `Any one-off costs stated separately from the retainer`
  4. `The people, by name`
     - `Who runs each discipline on your account`
     - `Who you speak to weekly, and who owns the number`
     - `No sales engineers who then hand you to somebody else`
  5. `How it gets measured`
     - `The metric that decides whether this worked`
     - `The baseline it is measured against, and the date it was taken`
     - `When you would reasonably expect to see movement`
  6. `Assumptions and exclusions`
     - `What we have assumed that could turn out to be wrong`
     - `What is explicitly not included, so nobody discovers it later`
     - `What we need from your side, with the hours it will cost you`
- Closing line: `Proposals are written by the strategist who would run the account, not by a business development team. That is why they take five days rather than one.`

### 3. The shape of it (`#rp-anatomy`)
- Eyebrow: `The shape of it`
- H2: `Front-loaded, deliberately`
- Copy: `The first page is the argument. The scope and the price follow from it rather than leading it.`
- Copy: `Most agency proposals open with an About Us section, a client logo wall and a description of the agency’s methodology. By the time anything about your business appears, the reader has skimmed four pages. Ours opens on page one with what we think is holding your revenue down and why we think it — then everything after that is the case for fixing it in a particular order.`
- Copy: `That structure has a side effect worth stating: if we cannot name a constraint from what you have given us, the proposal says so rather than padding. Occasionally the honest version of page one is that you should take the free audit first, and we will tell you that instead of quoting.`
- Three checklist items:
  - `No logo wall, no methodology diagram, no filler case studies`
  - `Every number in it traceable to something you sent us`
  - `Written to be forwarded internally without a covering explanation`
- Image after the checklist, end of section: alt `Reviewing compliance documents with a pen and notepad` (live file `eu-regulatory-1024x684.jpg`).
- ~~No image in this section on the live page.~~ — wrong, corrected 2026-11-23.

### 4. From your side (`#rp-need`)
- Eyebrow: `From your side`
- H2: `What we need to write it`
- Copy: `The form below asks for most of this. The more of it you can give, the more specific the proposal — and the less of it reads as assumption.`
- Copy: `None of this is a prerequisite. We will write a proposal from the store URL alone if that is all you want to share, it will simply carry more caveats and a wider price range.`
- Image after the first paragraph, before the "None of this is a prerequisite" paragraph: alt `Compliance manager holding a folder of market documentation` (live file `apac-regulation-1024x682.jpg`).
- Six items (verbatim):
  - `Your store URL, and any marketplace storefronts`
  - `Roughly what you turn over online each month`
  - `The gross margin band your catalogue sits in`
  - `What you are spending on marketing now, and where`
  - `What you have already tried that did not work`
  - `Whether there is a deadline or event driving this`
- Closing line: `We do not ask for analytics access to write a proposal. That comes later, and only if you decide to go ahead or to take the free audit .` (note the space before the final full stop — live quirk, kept verbatim) — inline link: `free audit` → /ecommerce-audit/

### 5. The timeline (`#rp-timeline`)
- Eyebrow: `The timeline`
- H2: `Request to proposal in five working days`
- Intro: `No discovery workshop, no mutual NDA before anyone has said anything, no three-week scheduling exercise.`
- Four numbered steps:
  1. `01` — `You send the form — day zero` — `Ten fields, most of them optional. If something in it is unclear we email a single follow-up question rather than booking a call to ask it.`
  2. `02` — `We look at your store — days one and two` — `A strategist spends real time on the storefront, the category layer and whatever public marketplace presence exists, and forms a view on the constraint.`
  3. `03` — `We write it — days three and four` — `Scope, sequence, price and people, written by the person who would run the account. Reviewed by one other specialist before it leaves.`
  4. `04` — `You get it — day five` — `Sent as a document you keep. We will walk you through it if you want, and we will not chase you twice if you do not.`
- Closing line: `If you need it faster than five days, say so in the form. We will tell you honestly whether a rushed version is worth having.`

### 6. On price (`#rp-pricing`)
- Eyebrow: `On price`
- H2: `Why the number is in the proposal and not on the call`
- Copy: `We publish packages. What we cannot publish is which one your catalogue actually needs.`
- Copy: `Our pricing page carries three packages and what drives the cost of each. For most brands one of those is the answer and the proposal simply confirms which. For the rest — multi-marketplace sellers, large catalogues, brands mid-replatform — the honest number sits outside a package, and quoting one on a first call would be a guess dressed as an answer.` — inline link: `pricing page` → /pricing/
- CTA: `See published pricing` → /pricing/
- Image after the CTA, end of section: alt `Local banknote held beside pricing documents` (live file `latam-currency-1024x683.jpg`).
- Copy: `Either way the proposal states a figure rather than a range, along with what would move it. If the figure is higher than the band you gave us, it says so on page one instead of at the end.`
### 7. Before you ask (`#rp-premature`)
- Eyebrow: `Before you ask`
- H2: `Five times a proposal is the wrong request`
- Intro: `We would rather tell you this here than write you a document that cannot be acted on.`
- Five cards (title — body, verbatim):
  1. `You are collecting three quotes to compare` — `Proposals from different agencies are not comparable — the scopes differ, so the prices measure different things. Compare the reasoning on page one instead, or ask all three what they would not do.`
  2. `You do not know what is wrong yet` — `If the brief is “grow revenue”, a proposal has to guess at the constraint. The growth assessment takes forty minutes and costs nothing, and makes the proposal far more specific.` — inline link: `growth assessment` → /ecommerce-growth-assessment/
  3. `The decision-maker is not involved` — `A proposal that cannot reach the person who signs is a document that gets forwarded, skimmed and forgotten. Bring them to a call first.`
  4. `The budget is not agreed internally` — `We will quote the number the work costs. If no number has been agreed on your side, that quote lands as a shock rather than a decision.`
  5. `You need a document to satisfy procurement` — `Tell us that in the form. It is a legitimate reason and it changes what we write — but a proposal written for procurement is a different document to one written to make a decision.`
- Closing line: `None of these are refusals. Say so in the form and we will write what is actually useful, or tell you plainly that a call would serve you better.`

### 8. Fit (`#rp-fit`)
- Eyebrow: `Fit`
- H2: `Who this works for, and who it does not`
- Intro: `Stated before you spend ten minutes on a form rather than after we have both spent a week.`
- Left column — `We are usually a good fit when`:
  - `You are turning over roughly $25K to $2M a month online`
  - `Somebody internally can own decisions and access`
  - `You want one team across search, paid, retention and marketplace`
  - `You would rather be told the brief is wrong than have it executed`
  - `You are willing to be measured on margin rather than revenue`
- Right column — `We are usually the wrong choice when`:
  - `You want a single channel run cheaply — a specialist will beat us`
  - `You need guaranteed rankings or guaranteed returns`
  - `The site is pre-launch with no traffic to work from`
  - `You want reporting access restricted to the agency`
  - `The decision is being made purely on lowest monthly fee`
- Closing line: `If you read the right-hand column and recognise your situation, the honest answer is that we would take your money and underperform. We would rather you knew now.`

### 9. The request — proposal form (`#rp-form`)
- Form name (Elementor): `Proposal Request`
- Eyebrow: `The request`
- H2: `Tell us enough to write something useful`
- Intro: `Six required fields, consent included. Everything else sharpens the proposal rather than gating it.`
- Fields, in order (label — type — required? — options/placeholder):
  1. `Full name` — text — REQUIRED — placeholder `Jordan Avery`
  2. `Work email` — email — REQUIRED — placeholder `jordan@yourbrand.com`
  3. `Company` — text — REQUIRED — placeholder `Your brand`
  4. `Your role` — select — optional — `Founder / Owner`, `Head of eCommerce`, `Marketing lead`, `Operations`, `Procurement`, `Other`
  5. `Store website` — url — REQUIRED — placeholder `https://`
  6. `Primary platform` — select — optional — `Shopify / Shopify Plus`, `WooCommerce`, `BigCommerce`, `Magento / Adobe Commerce`, `Wix`, `Squarespace`, `Amazon Seller Central`, `Walmart Marketplace`, `Custom / Headless`, `Other`
  7. `Monthly online revenue` — select — optional — `Under $25K`, `$25K – $100K`, `$100K – $250K`, `$250K – $1M`, `Over $1M`, `Prefer not to say`
  8. `Monthly budget you have in mind` — select — optional — `Not decided yet`, `Under $3K`, `$3K – $6K`, `$6K – $12K`, `$12K – $25K`, `Over $25K`
  9. `What should the proposal cover?` — checkboxes — optional — `Full eCommerce management`, `eCommerce SEO`, `PPC / paid media`, `Conversion optimisation`, `Email / retention`, `Marketplace management`, `Creative / content`, `Development`, `Not sure — advise me`
  10. `What is the main thing you want fixed, and what have you already tried?` — textarea (5 rows) — REQUIRED — placeholder `The more specific you are here, the more specific the proposal.`
  11. `Any deadline or event driving this? (optional)` — text — optional — placeholder `Peak season, board review, contract ending`
  12. `Consent` — acceptance checkbox — REQUIRED — `I agree to Dazzle Commerce using these details to prepare and send a proposal.`
- Submit button: `Request My Proposal`
- Note under the form: `Your details go to one inbox and are used to write the proposal. No newsletter, no sequence, and no third parties. We reply within one business day.`
- Quirk: the live copy says “Ten fields, most of them optional” in the timeline (section 5) while the form itself has 12 fields and the intro says “Six required fields, consent included” — the six required fields are name, email, company, website, context textarea and consent. Both wordings are kept verbatim in their own sections. The live form also carries a hidden honeypot field (`form_fields[hp_19f2a]`, display:none) — not reproduced in the clone.

### 10. Afterwards (`#rp-after`)
- Eyebrow: `Afterwards`
- H2: `What happens once you send it`
- Intro: `Four steps, and a firm limit on how often we contact you.`
- Four cards (number — label — title — body — link, verbatim). The step titles are themselves links, to the same targets as the links below them: `You get a reply from a person` → #rp-form, `The proposal arrives` → /pricing/, `A walkthrough, if you want one` → /book-a-strategy-call/, `One follow-up, then silence` → /contact/.
  1. `01` — `DAY ZERO` — `You get a reply from a person` — `Not an autoresponder sequence. A strategist confirms receipt, and asks one follow-up question only if something material is missing.` — `Back to the form →` → #rp-form
  2. `02` — `DAY FIVE` — `The proposal arrives` — `A document you keep, with the price stated rather than ranged. Read it against our published packages if you want the comparison.` — `See published pricing →` → /pricing/
  3. `03` — `YOUR CALL` — `A walkthrough, if you want one` — `Forty-five minutes with the strategist who wrote it, to argue with the reasoning rather than to be sold the scope.` — `Book the call →` → /book-a-strategy-call/
  4. `04` — `AFTER THAT` — `One follow-up, then silence` — `We check in once. If we do not hear back, we stop. You can pick the conversation up whenever it suits you.` — `Contact us anytime →` → /contact/

### 11. Questions — Proposal FAQs (`#rp-faqs`)
- Eyebrow: `Questions`
- H2: `Proposal FAQs`
- Intro: `The things people ask before filling in the form.`
- 8 Q&As (verbatim):
  1. Q: `Is the proposal really free?` — A: `Yes, and there is no obligation attached to it. It takes a strategist the better part of two days to write, which is why we ask for enough detail to make it worth doing — but nothing is invoiced and nothing is owed if you decide against us.`
  2. Q: `How long does it take?` — A: `Five working days from the form to the document. If you need it sooner, say so in the form and we will tell you honestly whether a faster version would still be worth reading.`
  3. Q: `Do I need to give you analytics access?` — A: `No. A proposal is written from what is publicly visible plus what you tell us. Access only comes up later, if you go ahead or if you take the free audit .` (space before the final full stop is a live quirk, kept verbatim) — inline link: `free audit` → /ecommerce-audit/
  4. Q: `Will the price be a range or a number?` — A: `A number, with a note on what would move it. Ranges exist to protect the agency from being wrong, and a proposal that will not commit to a figure has not done the thinking.`
  5. Q: `What if my budget is lower than your quote?` — A: `Tell us the budget in the form. If the work cannot be done properly at that level we will say so and suggest what could be done instead, including doing it in-house. We would rather lose the engagement than scope something that fails.`
  6. Q: `Can I get a proposal for one service only?` — A: `Yes. Tick the single service in the form. Be aware that for a single channel a specialist agency will usually beat us on both price and depth, and the proposal will say so if that is the case for you.`
  7. Q: `Do you sign NDAs before a proposal?` — A: `We do not need one to write a proposal, because we do not need confidential material to write it. If your procurement process requires one, note it in the form and we will handle it before anything is exchanged.`
  8. Q: `What if I would rather just talk first?` — A: `Then do that. A thirty-minute strategy call costs you less time than this form and often makes the proposal unnecessary, or much more specific if you still want one.` — inline link: `thirty-minute strategy call` → /book-a-strategy-call/

### 12. Other routes in (`#rp-more`)
- Eyebrow: `Other routes in`
- H2: `Three ways to start that are not this one`
- Intro: `A proposal is the most committed of the four. These are the lighter options.`
- Three cards (label — title — body — link — live image alt):
  1. `THIRTY MINUTES` — `Book a strategy call` — `A conversation with a strategist about your constraint. No deck, no scope, no obligation to go further.` — → /book-a-strategy-call/ — live image alt: `Business team meeting in a modern office`
  2. `FIVE DAYS` — `Take the free audit` — `A ranked constraint list, a twelve-point scorecard and a ninety-day sequence. Yours to keep either way.` — → /ecommerce-audit/ — live image alt: `Senior strategists reviewing eCommerce performance charts during an audit session`
  3. `FORTY MINUTES` — `Run the assessment yourself` — `The same twelve points, published in full with every threshold, so you can find your constraint without us.` — → /ecommerce-growth-assessment/ — live image alt: `Comparing a printed report against a laptop`
- Quirk: the intro says “the most committed of the four” while only three lighter options are listed — kept verbatim.
- Button after the card grid: `All guides` → /guides/

### 13. Final CTA (pre-footer)
- H2: `Not sure a proposal is the right next step?`
- Copy: `Most brands get further with a thirty-minute call or the free audit first, and the proposal is better for having waited. All three cost nothing.`
- CTAs: `Book a Strategy Call` → /book-a-strategy-call/ ; `Request the Free Audit` → /ecommerce-audit/

## Footer (site footer — same as homepage)
- Tagline: `Scale. Optimize. Succeed.`
- Blurb: `A full-service eCommerce management and marketing agency helping online brands and marketplace sellers grow revenue across Shopify, Amazon, WooCommerce, Walmart, TikTok Shop, eBay and Etsy.`
- Contact: 1201 Commerce Street, Suite 480 Austin, TX 78701, United States; +1 (555) 010-2400; hello@dazzlecommerce.com; Mon–Fri, 9:00–18:00 CT
- Newsletter: `The Margin Memo` — `One email a fortnight: a benchmark, a teardown, one thing to change this week.`
- Copyright: `© 2022-2026 Dazzle Commerce. All rights reserved.`
- Free-account modal copy (same as homepage): `Get the eCommerce benchmarks other agencies charge for` etc.

## Links found on the page (internal, main content)
- #rp-form (hero “Go to the request form”; Afterwards card 1 “Back to the form”)
- /book-a-strategy-call/ (hero, Afterwards card 3, Other routes card 1, final CTA)
- /pricing/ (On price “See published pricing”; Afterwards card 2)
- /contact/ (Afterwards card 4)
- /ecommerce-audit/ (Other routes card 2, final CTA “Request the Free Audit”)
- /ecommerce-growth-assessment/ (Other routes card 3)
- / (breadcrumb Home), /pricing/ (breadcrumb Pricing)

## Quirks / notes
- Live copy mixes British spellings (optimisation, catalogue, recognise, customised-style wording) with US contact details — kept verbatim.
- “Ten fields, most of them optional” (timeline) vs 12 actual form fields and “Six required fields, consent included” (form intro) — all three wordings kept verbatim in their own sections; the six required fields are name, email, company, website, context textarea and consent.
- “A proposal is the most committed of the four” (Other routes intro) though only three lighter options follow — kept verbatim.
- Space before the final full stop in “take the free audit .” appears twice (sections 4 and 11) — live quirk, kept verbatim.
- The live page has no author/byline block and no “Time to read” body text beyond the Twitter meta label.
- ~~Live images in the main content: none in sections 1–11; the three “Other routes” cards each carry a photo (alts listed in section 12) and the og:image is a separate social image. The clone likewise has no hero or section image on this page; its three “Other routes” cards carry newly created matching photographs. Images are not copies of live assets and nothing hotlinks to dazzlecommerce.com/wp-content. (A hero image and a section-3 image added in the first build were removed in the 2026-11-23 fidelity pass, and their files were deleted from public/images/ as unused; the og:image is a social image only and is not rendered on the page.)~~ — wrong, corrected 2026-11-23: the live page has 7 images in the main content — hero `Two business buyers discussing documents over coffee`, section 3 `Reviewing compliance documents with a pen and notepad`, section 4 `Compliance manager holding a folder of market documentation`, section 6 `Local banknote held beside pricing documents`, plus the three "Other routes" card photos (alts in section 12). The clone now carries all 7 as newly created matching photographs. Images are not copies of live assets and nothing hotlinks to dazzlecommerce.com/wp-content.
- The live form is an Elementor form (post_id 2034, form_id 8b334f1) with a hidden honeypot field; the clone reproduces the visible fields and adds client-side validation, localStorage persistence and a confirmation state, following the contact page’s working-form pattern.
