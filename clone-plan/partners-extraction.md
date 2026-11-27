# Partners — Extraction (Batch 1, Page 12)

> **REDO 2026-11-27 (one-page-at-a-time method, vs the live rendered page).** Fresh HTML fetch 388,819 bytes, unchanged since 2026-11-23; LiteSpeed CSS (29 files) + stack-parser probes + direct viewing of the live hero file. The cloud-browser walkthrough landed on an A/B experiment variant — the eleventh occurrence (badges intro ending, badge footnote years, programs/why/stack/process/commitments intros, final CTA paragraph rewritten; badge-card subtexts invented; final CTA misreported as a plain section). Verification against the served HTML: ALL 10 variant strings ABSENT, ALL 11 control strings PRESENT — control copy kept, 0 variant strings (43/43 control strings verified in the built output). Walkthrough claims REJECTED against control DOM/CSS: badge cards have NO subtexts under the names; badge footnote is "Partner status is verified annually. Shopify Partner since 2018 · Google Partner since 2019 · Amazon Ads Partner Network since 2021."; program H4 is NAVY #091325 (not blue); program bullets are GREEN `fa-circle-check` #0D9668 (not blue circles); Working Stack is white CARDS in a 3-col grid (not borderless columns); commitments check icons are GREEN; commitments layout is 44% text column LEFT + 52% card column RIGHT (gap 52px), not card-left/empty-right; "Read our full terms" is an outlined `.read-more` button (not a text link); final CTA IS a blue gradient panel (125deg #0B5BF4 → #0A44C4, radius 28px); FAQ section bg is WHITE (not light-grey); Affiliate "Join the program" → `/affiliate-disclaimer/` (not /contact/); process numbers are 46px blue tiles (not small labels). Walkthrough claims CONFIRMED: hero split + left text + handshake close-up; hero stats 2×2 overlapping the image bottom; badges 6-in-a-row; programs 2×2; why cards with blue icon tiles; process 3+2 cards; commitments H2 the only left-aligned section heading; FAQ accordion exclusive single-open with rotating plus→× and #B7CEFB open border (its "question turns blue" = hover, as on FAQs); footer = shared control footer.
>
> **Structure proven (control DOM/CSS):** Hero flat #F7F9FC, padding 88px/92px, split 56% text / 39% image, gap 56px; H1 62px/800 ls −2px LEFT; primary button blue 12px radius + shadow `0 10px 26px -6px rgb(11 91 244/.42)` with arrow-right AFTER text; secondary = `.read-more` (no icon); image radius 20px, shadow `0 18px 44px -12px rgb(9 19 37/.22)`; stats grid `repeat(2,1fr)` gap 12px, margin-top −42px, padding 0 10px, INSIDE the image column; stat cards white, radius 14px, padding 14px, icon tile ~33px (#EFF4FD bg, blue icon), value 23px/800 blue, label DM Sans 12.5px #5D6675. Stat icons (definitive, mapped via shared card containers): 40+ handshake · 22% chart-line · 9 yrs chart-column · 48 hrs gauge-high. All content sections 100px padding; backgrounds: badges WHITE · programs #F7F9FC · why WHITE · stack #F7F9FC · process WHITE · commitments #F7F9FC · FAQ WHITE. Section H2 44px/800 ls −1px, CENTERED except commitments H2 (LEFT, ls −1.2px). Badges: grid `repeat(6,1fr)` gap 20px; card white, radius 22px, padding 28px/20px/26px, logo/icon on top, name DM Sans 15px/700 #1B2437 centered, NO subtexts; live badge images are the platforms' own wide lockup files displayed ~143px wide. Programs: grid `repeat(2,1fr)` gap 28px; card white, radius 22px, padding 34px/32px; H3 22px/800; audience DM Sans 16px/1.68 #5D6675; H4 headline 22px/800 NAVY; bullets green checks, DM Sans 16px/1.6; buttons = `.read-more` with arrow-right after text, NOT pinned to card bottom. Why: grid `repeat(3,1fr)` gap 28px; cards are icon-box widgets (same geometry as the FAQ browse cards: 56px tile #EFF4FD, 26px blue icon, 22px icon→title gap, H3 21px/800, body DM Sans 16px/1.65); icons in order: shield-halved · user-check · file-invoice · gauge-high (NOT a clock) · diagram-project · comments. Stack: grid `repeat(3,1fr)` gap 28px (3×2); cells white cards radius 22px padding 28px/26px; icon tile ~43px (#EFF4FD, blue, 19px icon, 12px padding, radius 12px); H3 19px/800; items BLUE `fa-circle-check`, DM Sans 16px/1.6. Group icons in order: Shopify brand · store · chart-line · envelope-open-text · flask · magnifying-glass-chart. Process: grid `repeat(3,1fr)` gap 26px (3 top + 2 bottom); card white radius 22px padding 32px/26px; number tile 46px min-height, blue, radius 13px, shadow, white 17px/800 numerals, margin-bottom 8px; H3 19px/800; body DM Sans 15px/1.62 #5D6675. Commitments: row flex, space-between, gap 52px; text column 44% (pill CENTERED within the column — Careers precedent — H2 left, intro, terms button BEFORE the card in DOM order); card column 52% (white card radius 22px padding 36px/34px); items GREEN checks, gap 18px, each `<strong>Bold statement.</strong> Grey subtext` in one span. FAQ: ONE `nested-accordion.default` widget (same as the FAQs page; same inline `<style>` accordion CSS: 70%/880px column, 14px gap, 16px items, #B7CEFB open border + shadow, 17px/700 titles, 26px circle toggle rotating 45° to × on solid blue when open); clone uses `<FaqAccordion rotateIcon />`. Final CTA: blue gradient panel radius 28px padding 72px/56px; white button (calendar-days BEFORE text) + ghost button (arrow-right AFTER text); email line centered, white link.
>
> **Correction to the 2026-11-23 correction (line ~194):** its claim that `badge-shopify-partners.webp` and `badge-meta-business-partner.webp` were created and are used on the Partners page is WRONG — no such files exist in the repo (verified 2026-11-27: `ls public/images/ | grep badge` returns nothing, no code referenced them). The pre-redo page rendered badges via `PartnerBadge` (PlatformLogo 30px for Shopify/Amazon, brand icons otherwise). The redo renders badges in `.pt-badge-card` with PlatformLogo at 56px (Shopify/Amazon/Meta) or a brand icon (Google #4285f4, Microsoft #00a4ef, LinkedIn #0a66c2). **Alignment (computed, local build):** H1 start; H2s center except commitments start; hero pill left (offset −232 in its column); all other pills offset 0; commitments pill centered within its 44% text column (offset 0 vs the column center). **Hero photo:** live `partners-hero.jpg` is a tight close-up of two clasped hands (blue sleeve left, white sleeve right, blurred office) — the old clone image was a wide desk scene and was replaced with a generated close-up match (md5 `5b6cd9ff252fe6af42e71623f80fe3ce`, 1920×1280; object-fit cover absorbs the ratio difference). **Verified locally:** build passes; Playwright screenshots of all sections; computed alignment matches live; copy 43/43 control, 0 variant; links 286 total, externals only Calendly + 5 socials; images 6 refs, all local, all HTTP 200; FAQ interaction (all collapsed initially, Q1 opens with 45°-rotated solid-blue toggle + #B7CEFB border, Q2 closes Q1, re-click collapses). One bug found and fixed in verification: process number tiles rendered grey numerals on blue (`.pt-process-card p` specificity beat `.pt-step-num`) — fixed by scoping the rule to `.pt-process-card p.pt-step-num`. Code pushed `6225dd0` (remote page.tsx byte-identical to local, 23,105 bytes). Photo `cd121e3` (md5-verified identical on GitHub main); records pushed with this file.
>
> Source: https://dazzlecommerce.com/partners/
Fetched: 2026-11-23 (curl, fresh HTML, 388,819 bytes)
Canonical: https://dazzlecommerce.com/partners/
Published: 2026-08-27T13:00:54-05:00 · Modified: 2026-09-03T12:03:59-05:00 (Rank Math / og tags)
Twitter "Time to read": Less than a minute

## Meta

- Title: `eCommerce Agency Partner Program | Dazzle Commerce`
- Description: `Partner with Dazzle Commerce: referral, white-label, technology and affiliate programmes for agencies, freelancers and platforms serving eCommerce brands.`
- og:type: article · og:locale: en_US · og:site_name: Dazzle Commerce
- Breadcrumb: Home > Partners
- Schema: ProfessionalService/Organization "Dazzle Commerce", address 1201 Commerce Street, Suite 400, Austin, TX 78701, US; email hello@dazzlecommerce.com; phone +1 (555) 012-3456 (schema) — note the header/footer on the live site show +1 (555) 010-2400 instead. Opening hours Mo–Su 09:00–17:00 (schema).

## Page structure (main content only; header mega-menus and footer excluded)

Element IDs on the live page: `partners-hero`, `platform-partners`, `partner-programs`, `why-partner`, `partner-faqs`, `become-a-partner`.

### 1. Hero (`#partners-hero`)

- Eyebrow: `Partnership Program`
- H1: `Partnerships That Send Work Both Ways`
- Body: `We partner with agencies, platforms, consultants and app developers who serve online retailers but do not want to build an eCommerce delivery team. You keep the relationship. We do the work, or we send the work to you. Either way it is documented, revenue-shared and referenceable.`
- CTAs: `Become a Partner` → `#become-a-partner` · `See Partner Programs` → `#partner-programs`
- Stats (H3 values):
  - `40+` — Active partners
  - `22%` — Referral share
  - `9 yrs` — Operating history
  - `48 hrs` — Referral response
- Hero image (live, NOT copied): `partners-hero.jpg` 1600×1100, alt: `Two people shaking hands on a partnership agreement`.

### 2. Certified & Badged (`#platform-partners`)

- Eyebrow: `Certified & Badged`
- H2: `The platforms we are accountable to`
- Body: `Badges are not decoration. Each one carries spend thresholds, certification exams and account reviews we have to keep passing. If a platform revokes a badge, it comes off this page the same week.`
- Badges (H4, live images are partner logo files — reproduced in the clone as text marks only, never as copied logo images):
  1. `Shopify Partner` — alt `Shopify Partners badge`
  2. `Amazon Ads Partner` — alt `Amazon Ads Partner Network badge`
  3. `Google Partner` — alt `Google Partner badge`
  4. `Meta Business Partner` — alt `Meta Business Partner badge`
  5. `Microsoft Advertising Partner` — alt `Microsoft Advertising Partner badge`
  6. `LinkedIn Marketing Partner` — alt `LinkedIn Marketing Partner badge`
- Footnote: `Partner status is verified annually. Shopify Partner since 2018 · Google Partner since 2019 · Amazon Ads Partner Network since 2021.`

### 3. Four Ways In — Partnership programs (`#partner-programs`)

- Eyebrow: `Four Ways In`
- H2: `Partnership programs`
- Intro: `Pick the one that matches how you already make money. Terms are written down before anything is signed, and every program is cancellable with 30 days notice.`

#### 3a. Referral Partner
- Audience: `For consultants, fractional CMOs, accountants and anyone whose clients keep asking “who should run our store?”`
- Headline (H4): `22% of collected revenue for 12 months`
- Bullets:
  - `You make a warm intro; we take it from there`
  - `22% of everything we collect, paid monthly for 12 months`
  - `No minimum volume and no exclusivity clause`
  - `You see the scope and the reporting your client sees`
- CTA: `Refer a client` → `/contact/`

#### 3b. Agency & White-Label Partner
- Audience: `For brand studios, web shops and marketing agencies who win eCommerce work but do not want a delivery bench for it.`
- Headline (H4): `Wholesale rate card, your brand on the front`
- Bullets:
  - `Delivery under your logo, in your project tool, on your timeline`
  - `Wholesale pricing so your margin stays yours`
  - `Named specialists, not a rotating pool of juniors`
  - `We never approach your client directly — contractually`
- CTA: `Request the rate card` → `/contact/`

#### 3c. Technology & App Partner
- Audience: `For SaaS platforms, apps and 3PLs who need a certified implementation team their merchants can be handed to.`
- Headline (H4): `Co-marketing and implementation coverage`
- Bullets:
  - `Certified implementation and migration support for your merchants`
  - `Joint case studies, webinars and integration documentation`
  - `Structured product feedback from live merchant accounts`
  - `Listed as an implementation partner in your directory`
- CTA: `Talk integrations` → `/contact/`

#### 3d. Affiliate & Creator Partner
- Audience: `For newsletter writers, course creators, YouTubers and community operators with an audience of store owners.`
- Headline (H4): `$500 per qualified engagement + bonuses`
- Bullets:
  - `$500 for every engagement that reaches month two`
  - `Tracked links, a live dashboard and monthly payouts`
  - `Co-written content and data we have not published elsewhere`
  - `Full disclosure required — see our affiliate disclaimer`
- CTA: `Join the program` → `/affiliate-disclaimer/` (QUIRK — see Quirks below)

### 4. Why Partner With Us (`#why-partner`)

- Eyebrow: `Why Partner With Us`
- H2: `What you get that a referral fee does not cover`
- Intro: `Most partner programs are a commission rate and a contact form. These are the six things partners tell us actually mattered once work started moving.`
- Six items (H3 + body):
  1. `We will not poach your client` — `Every agency and white-label agreement carries a non-solicitation clause that runs 24 months past the last invoice. We have never breached one, and we will put it in writing before you send us a name.`
  2. `Named people, not a pool` — `Your account gets the same strategist and specialists every month. You will know their names, see them on calls, and reach them in the shared channel without going through an account manager first.`
  3. `Payouts you can audit` — `Referral share is calculated on revenue we actually collected, shown line by line in a monthly statement. If a client churns or short-pays, you see exactly why the number moved.`
  4. `A 48-hour clock on every intro` — `Referrals get a first call within two business days. You get told what happened either way — scoped, deferred or declined — so you are never the last to know about your own introduction.`
  5. `Six disciplines under one roof` — `Store management, SEO, paid media, CRO, retention and development sit in one team. You are not stitching four vendors together on your client’s behalf.`
  6. `We say no in front of you` — `If a referral is not a fit — wrong stage, wrong margin, wrong expectations — we tell you before we tell them, with the reasoning. Bad-fit engagements cost you more reputation than they earn us fees.`

### 5. Working Stack

- Eyebrow: `Working Stack`
- H2: `The tools we are in every day`
- Intro: `If your product is on this list, an integration conversation is short. If it is not, tell us what it does and we will say honestly whether our clients would use it.`
- Groups (H3 + items):
  - `Store platforms` — Shopify & Shopify Plus · BigCommerce · WooCommerce · Magento / Adobe Commerce
  - `Marketplaces` — Amazon Seller & Vendor Central · Walmart Marketplace · eBay · Etsy
  - `Ads & analytics` — Google Ads & GA4 · Meta Ads Manager · Amazon Ads · Microsoft Advertising
  - `Email & retention` — Klaviyo · Attentive · Postscript · Yotpo
  - `CRO & testing` — Shopify native A/B · Hotjar · Microsoft Clarity · Convert
  - `SEO & data` — Ahrefs & Semrush · Screaming Frog · Google Search Console · Looker Studio

### 6. The Process

- Eyebrow: `The Process`
- H2: `How a partnership actually starts`
- Intro: `Five steps from first call to first statement. Most partners are enabled and taking referrals inside three weeks.`
- Steps (H6 number + H3 + body):
  1. `01` `Intro call` — `Thirty minutes. We map what you sell, who you sell it to, and where our work would sit next to yours. If there is no overlap we say so on that call rather than scheduling a second one.`
  2. `02` `Terms in writing` — `Program, rate, payment timing, non-solicitation and cancellation, all on two pages. Nothing is verbal and nothing is retroactive.`
  3. `03` `Enablement pack` — `Scope templates, the qualifying questions we use, pricing bands, current case studies and the objections you will hear. You should be able to answer a client without calling us.`
  4. `04` `First engagement` — `Your referral gets a call within 48 hours and a scope within five business days. You are copied on the scope and can join the kickoff.`
  5. `05` `Statements and reviews` — `Monthly statements with the collected revenue behind every payout, and a quarterly review of what converted, what stalled and what we should stop sending each other.`

### 7. Our Side of It

- Eyebrow: `Our Side of It`
- H2: `What we commit to, in writing`
- Intro: `A partnership is only worth having if the obligations run both ways. These six are in every agreement we sign, and every one of them is enforceable rather than aspirational.`
- Link: `Read our full terms` → `/contact/`
- Six commitments:
  1. `We will not solicit your clients. Non-solicitation runs 24 months past the final invoice, on every agency and white-label agreement.`
  2. `Your referral hears from us in 48 hours. And you hear the outcome, whether we scoped it, deferred it or turned it down.`
  3. `Payouts are calculated on collected revenue. Monthly statements show the invoices behind the number, not just the number.`
  4. `No exclusivity, no minimums, no lock-in. Either side can end the arrangement with 30 days notice and no clawback on earned share.`
  5. `We decline bad-fit referrals openly. You get the reasoning before your client does, so you are never contradicted in front of them.`
  6. `Your data stays yours. Client lists, pricing and scope documents are never used for our own outbound. Ever.`

### 8. Partner FAQs (`#partner-faqs`)

- Eyebrow: `Partner FAQs`
- H2: `Questions partners ask before signing`
- Intro: `Seven things worth settling before the first introduction. Anything else, the intro call covers.`
- Q&A (7):
  1. Q: `Who is the referral program actually a fit for?` — A: `Consultants, fractional CMOs, accountants, 3PLs, freelance designers and developers — anyone whose clients run online stores and periodically ask who should manage or market them. There is no volume requirement. Partners who send us one good introduction a year are treated the same as partners who send us one a month.`
  2. Q: `How much do partners earn, and when are they paid?` — A: `Referral partners earn 22% of what we collect from the client for twelve months, paid monthly in arrears once the client’s invoice clears. Affiliate and creator partners earn a flat $500 per engagement that reaches month two. Agency and white-label partners do not earn a share — they buy delivery at a wholesale rate and keep the margin between that and what they bill their client.`
  3. Q: `Will you contact or take over my client?` — A: `No, and it is a contractual term rather than a promise. Agency and white-label agreements carry a 24-month non-solicitation clause covering the client and their staff. On white-label engagements we work under your brand, in your project tool, and we do not introduce ourselves as a separate vendor.`
  4. Q: `What happens if you decide a referral is not a fit?` — A: `We tell you first, with the reason — usually stage, margin structure or expectations that no agency could meet. You decide how to handle it with your client. Where we can, we point them at a better-suited option, including agencies we do not own any relationship with.`
  5. Q: `Can we co-market, publish case studies or run webinars together?` — A: `Yes, and technology partners in particular should expect to. We co-write case studies, run joint webinars and publish integration documentation. Every case study is approved by the merchant before publication, and we do not use client names or figures without written sign-off.`
  6. Q: `How do white-label engagements handle reporting and client calls?` — A: `Reporting is delivered in your template with your branding, on your reporting cycle. Our specialists can join client calls as members of your team, stay silent as observers, or skip them entirely — your call, agreed at kickoff and changeable at any point.`
  7. Q: `Is there a cost or a commitment to becoming a partner?` — A: `No fee to join and no minimum commitment in any of the four programs. Either side can end the arrangement with 30 days written notice, and referral share already earned on active clients continues to be paid for the remainder of its twelve months.`

### 9. Final CTA (`#become-a-partner`)

- H2: `Let’s find out if this is worth both our time`
- Body: `Thirty minutes, no deck. Tell us who your clients are and what they keep asking for, and we will tell you honestly which of the four programs fits — or that none of them do.`
- CTAs: `Book a partner call` → `/contact/` · `See our pricing` → `/pricing/`
- Contact line: `Prefer email? partners@dazzlecommerce.com — answered within one business day.`

## Forms on the live page

No partner application form exists in the live page's main content. The only `<form>` elements in the fetched HTML are the shared footer Newsletter form and the shared Register modal form (both provided site-wide by `app/layout.tsx` in the clone). All in-page CTAs are links (`/contact/`, `/pricing/`, `#become-a-partner`, `#partner-programs`, `/affiliate-disclaimer/`).

## Links (main content, verbatim)

- `Become a Partner` → `#become-a-partner`
- `See Partner Programs` → `#partner-programs`
- `Refer a client` → `/contact/`
- `Request the rate card` → `/contact/`
- `Talk integrations` → `/contact/`
- `Join the program` → `/affiliate-disclaimer/`
- `Read our full terms` → `/contact/`
- `Book a partner call` → `/contact/`
- `See our pricing` → `/pricing/`
- Email: `partners@dazzlecommerce.com`

## Quirks / notes

1. "Join the program" (Affiliate & Creator Partner) links to `/affiliate-disclaimer/` on the live site — an apparent mis-link (it is the disclaimer page, not a signup). Reproduced verbatim in the clone; flagged here rather than silently "fixed".
2. "Book a partner call" links to `/contact/`, not `/book-a-strategy-call/` (the strategy-call route appears only in the header/footer on the live page).
3. Live copy uses British spelling "programmes" in the meta description but American "programs" in body headings.
4. Schema phone (+1 (555) 012-3456) differs from the phone shown in the header/footer (+1 (555) 010-2400). Clone follows the visible site chrome (010-2400).
5. Live partner badge images are the platforms' own logo files (e.g. `shopify-partners.webp`, `Google-Partners.webp`, `Meta-partners.webp`). The clone renders these as text marks only, per the build brief — no partner logos recreated as images.
6. The live hero image alt is `Two people shaking hands on a partnership agreement` (file `partners-hero.jpg`, 1600×1100).
7. Section eyebrow labels on the live page: Partnership Program / Certified & Badged / Four Ways In / Why Partner With Us / Working Stack / The Process / Our Side of It / Partner FAQs. The final CTA has no eyebrow.

## Correction 2026-11-23
- Quirk 5 and the section-2 note ("reproduced in the clone as text marks only") are superseded in part: on 2026-11-23 the user approved creating matching badge graphics, and two were created as `public/images/badge-shopify-partners.webp` (Shopify Partners) and `public/images/badge-meta-business-partner.webp` (Meta Business Partner) and are now used on the Partners page. The other four badges (Google Partner, Amazon Ads Partner, Microsoft Advertising Partner, LinkedIn Marketing Partner) are still text-initial marks in the clone — their image generations were blocked by the image tool on 2026-11-23, so `badge-google-partner.webp`, `badge-amazon-ads-partner.webp`, `badge-microsoft-advertising-partner.webp` and `badge-linkedin-marketing-partner.webp` do not exist yet. Do not reference them until they are created.
- Badge order verified against a fresh live fetch 2026-11-23: Shopify, Amazon Ads, Google, Meta, Microsoft, LinkedIn — matches the clone.
- Heading levels verified against live 2026-11-23: badge names are H4 and hero stat numbers (40+, 22%, 9 yrs, 48 hrs) are H3 on live. The clone was H3 / `<strong>`; fixed 2026-11-23 to H4 / H3.
- Section pills verified against a fresh live fetch 2026-11-23 (all centered icon-list pills): Partnership Program (users), Certified & Badged (screwdriver-wrench), Four Ways In (layer-group), Why Partner With Us (award), Working Stack (calendar-days), The Process (diagram-project), Our Side of It (compass), Partner FAQs (circle-question). The clone now uses the shared Pill component with these Font Awesome icons.
