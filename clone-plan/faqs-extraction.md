# FAQs extraction — https://dazzlecommerce.com/faqs/
Fetched fresh 2026-11-23 via curl (386,602 bytes, HTTP 200). Source: WordPress / Hello Elementor / Elementor Pro. Font: Plus Jakarta Sans. Brand blue in inline CSS: #0B5BF4 / #0340FB, dark navy #091325, light blue #EFF4FD / #E6EBF3.
Copy below is word-for-word from the live HTML. Nothing invented. Where the live copy has a typo or quirk, it is kept and noted. Every question and answer was cross-checked against the live page's own JSON-LD `FAQPage` schema (33 entities) — all 33 questions and all 33 answers match the visible copy exactly.

> **REDO note — 2026-11-27 (page 10, one-page-at-a-time method).** Fresh fetch 2026-11-27: 386,602 bytes, byte-identical size to 2026-11-23 — page unchanged. The walkthrough landed on an A/B experiment variant (ninth occurrence: closing intro rewritten to "the first call is free…", footer blurb rewritten to "grow profitably — without the agency theatre"); NEITHER variant string is in the served HTML — control copy kept, 0 variant strings. Structure corrections proven from live's element-id CSS, stack-parser probes and the page's inline `<style>` accordion block, and applied in the redo (code `365075a`): hero is centred on flat #F7F9FC (72px/66px) with 12px-radius icon buttons (NOT pill buttons); browse cards are white icon-box cards in a 4-col grid (gap 24px), whole-card links, with tinted icon tiles cycling blue/green/purple/orange (icon map below); each GROUP is ONE section (header + categories inside, no background break) — G1/G3 #F7F9FC, G2 white, 100px padding; group H2s (44px) + intros centred, category H2s (25px) LEFT and led by a solid-blue icon tile (same icon as the card); accordions are Elementor nested accordions — 70%/880px centred column, 16px-radius white cards, 14px gap, 17px/700 titles, 26px pale-blue circle toggle that rotates 45° into a white × on solid blue when open, #B7CEFB open border + shadow, blue on hover; single-open PER category, independent across categories, all collapsed on load; closing is the blue-gradient panel (125deg #0B5BF4 → #0A44C4, radius 28px, 72px/56px) with a white calendar button + ghost arrow button (NOT a plain section, NOT pill buttons). The walkthrough's "fully-rounded pill buttons" and "solid blue (no gradient)" closing panel were rejected against the control CSS (global `.elementor-button` radius is 12px; panel has the gradient). No photos on this page (0 images in `<main>`).

## Meta
- Title: `eCommerce Agency FAQs | Dazzle Commerce`
- Description: `Answers to 33 questions about eCommerce management and marketing services: scope, process, SEO, platforms, marketplaces, pricing, reporting and results.`
- Canonical: https://dazzlecommerce.com/faqs/
- OG type: article, og:site_name: Dazzle Commerce, og:locale: en_US, og:url: https://dazzlecommerce.com/faqs/
- article:published_time 2026-08-27T12:45:49-05:00; no article:modified_time / og:updated_time found in the live head.
- Twitter card: summary_large_image; twitter:label1 `Time to read`, twitter:data1 `Less than a minute`
- Robots: index, follow, max-snippet:-1, max-video-preview:-1, max-image-preview:large
- No og:image in the live head (no `og:image` property found).
- JSON-LD: `FAQPage` with 33 `mainEntity` question/answer pairs — matches the visible accordions 1:1 (verified, zero mismatches).

## Header (site header — same as homepage)
- Logo: "Dazzle Commerce" (links to /)
- Phone: +1 (555) 010-2400 → tel:+15550102400
- CTA: "Get Free Strategy Call" → /book-a-strategy-call/
- Nav (top level): Services, Platforms, Industries, Locations, Resources, Contact
- Services / Platforms / Industries / Locations / Resources mega-menus: identical to the homepage extraction (see clone-plan/homepage-extraction.md). Not repeated here.
- Resources mega-menu "Start" block includes: Growth Assessment (/ecommerce-growth-assessment/), Book a Strategy Call (/book-a-strategy-call/), Request a Proposal (/request-a-proposal/), Pricing (/pricing/).
- Quirk: the header also carries a Calendly button linking to https://calendly.com/dazzlecommerce/30min (target _blank) — same as on other pages.

## Main content — in order

### 1. Hero
- Eyebrow: `Frequently Asked Questions`
- H1: `eCommerce Agency Questions, Answered Properly` (62px/800, centred, #091325)
- Copy: `Thirty-three questions we are actually asked, grouped by topic. Where the honest answer is "it depends", we have said what it depends on rather than leaving you with a slogan.` (DM Sans 18px/1.7, #5D6675, centred)
- Hero: flat #F7F9FC background, padding 72px top / 66px bottom; everything centred.
- CTAs (12px-radius rectangles with icons, NOT pills): `Browse by Category` → #categories (blue bg #0B5BF4, white text, arrow-down icon before the text) ; `Ask Us Directly` → /contact/ (white bg, 2px #D9E1EE border, navy text, comment-dots icon)
- No hero image on the live page (text-only hero). No search box on the live page.

### 2. Browse FAQs by Category (id="categories")
- Eyebrow/heading: `Browse FAQs by Category`
- H2: `Eight topics, thirty-three answers` (44px/800, centred)
- Copy: `Jump straight to what you came for.` (centred)
- Section: white background, 72px padding. Eight category cards in a 4-column grid (gap 24px), each a WHOLE-CARD link to its anchor. Card: white bg, 1px #E6EBF3 border, radius 22px, padding 26px/24px, left-aligned; tinted 56px icon tile on top (26px icon, 15px radius; tile turns solid on hover, icon goes pale), bold 21px title, grey 16px question count below:
  - `General Services` → #faq-general — `5 questions` — icon `fa-circle-question`, tile #EFF4FD / icon #0B5BF4 (blue)
  - `Process & Communication` → #faq-process — `4 questions` — icon `fa-comments`, tile #E6F6F0 / icon #0D9668 (green)
  - `eCommerce Management` → #faq-management — `4 questions` — icon `fa-boxes-stacked`, tile #F1ECFE / icon #8B5CF6 (purple)
  - `Marketing & Advertising` → #faq-marketing — `4 questions` — icon `fa-bullhorn`, tile #FEF0E7 / icon #F97316 (orange)
  - `SEO` → #faq-seo — `4 questions` — icon `fa-magnifying-glass`, tile #EFF4FD / icon #0B5BF4 (blue)
  - `Platforms & Marketplaces` → #faq-platforms — `4 questions` — icon `fa-store`, tile #E6F6F0 / icon #0D9668 (green)
  - `Pricing & Packages` → #faq-pricing — `4 questions` — icon `fa-tags`, tile #F1ECFE / icon #8B5CF6 (purple)
  - `Results & Reporting` → #faq-results — `4 questions` — icon `fa-chart-line`, tile #FEF0E7 / icon #F97316 (orange)
- Tile tints cycle blue → green → purple → orange, twice.

### 3. Category group label: `General & Agency`
- H2: `How we work, and who does the work` (44px/800, centred)
- Copy: `Questions about the agency itself — scope, people and process.` (centred)
- GROUP STRUCTURE (applies to all three groups): each group is ONE top-level section containing its header block AND all its categories — no background break between the group header and its first category. Group 1 bg #F7F9FC, Group 2 white, Group 3 #F7F9FC; padding 100px top/bottom. Categories inside a group are 50px apart.
- CATEGORY HEADER (applies to all eight categories): the H2 is LEFT-aligned (25px/800, #091325) and is preceded — in a row, 11px gap, 20px below — by a solid-blue rounded-square icon tile (17px icon, 11px padding, 12px radius, bg #0B5BF4, icon #EFF4FD) using the SAME icon as the category's browse card.
- ACCORDION (applies to all eight categories): Elementor nested accordion (`default_state: all_collapsed`, `max_items_expended: one` per widget — single-open WITHIN a category, independent ACROSS categories; all 33 collapsed on load). Column: 70% width, max 880px, centred. Items: white bg, 1px #E6EBF3 border, 16px radius, 14px gap; title 17px/700 #091325, padding 22px/26px, blue on hover; toggle is a 26px pale-blue (#EFF4FD) circle with a blue 15px "+" that rotates 45° into a white × on a solid-blue circle when open; open item gets a #B7CEFB border + subtle shadow; answers 15.5px/1.72 #5D6675, padding 0/24px/26px.

#### 3a. General Services (id="faq-general") — 5 questions
- H2: `General Services`
- Q: `What exactly does an eCommerce management agency do?`
  - A: `We run the commercial and operational side of an online business so the owner does not have to. In practice that means catalog and listing management, storefront merchandising, paid media, eCommerce SEO, conversion work, retention and reporting — delivered by one team against one strategy rather than by five vendors who never speak.`
- Q: `Are you a full service eCommerce agency, or do you specialise?`
  - A: `Both, deliberately. We are a full service eCommerce agency in that every discipline sits under one roof, but we specialise in online retail exclusively. We do not take on lead-generation, SaaS or local service clients, because the operating model that makes eCommerce work does not transfer.`
- Q: `How are you different from a general digital marketing agency?`
  - A: `A general agency optimises traffic and conversions. We optimise contribution margin, which means we care about catalog structure, returns rate, freight and marketplace fees as much as about ad creative. Most digital agencies have no view of the numbers that decide whether growth is profitable.`
- Q: `Do you work with brands outside the industries and locations you list?`
  - A: `Often, yes. The nine categories and five markets on our site are where our experience is deepest, not a closed list. Where we genuinely lack relevant experience we say so — we have turned down regulated categories where we could not reach competence fast enough to justify the fee.`
- Q: `Can you work alongside our in-house team rather than replacing it?`
  - A: `That is a common setup. We frequently run the disciplines a small in-house team cannot cover — marketplace management, technical SEO, development — while the internal team keeps brand, merchandising and customer service. We will tell you honestly which parts you should keep in-house.`

#### 3b. Process & Communication (id="faq-process") — 4 questions
- H2: `Process & Communication`
- Q: `Who will actually be working on our account?`
  - A: `A named senior strategist who owns the outcome, plus specialists for each discipline in your scope. You meet all of them during onboarding and they are on your calls. We do not resell to white-label vendors and we do not rotate accounts to whoever has capacity.`
- Q: `How often will we speak, and in what format?`
  - A: `Monthly on Starter, fortnightly on Growth, weekly plus a monthly business review on Scale. Calls happen in your business hours, notes are circulated the same day, and Growth and Scale clients get a shared Slack channel with the whole pod.`
- Q: `What does onboarding look like in the first 30 days?`
  - A: `Access and tracking audit first, because bad data makes every later decision worse. Then a baseline capture, a documented account map, and a 90-day roadmap with named owners and a metric per workstream. Nothing ships in week one that we cannot measure by week four.`
- Q: `What happens when something goes wrong?`
  - A: `You hear it from us first. A missed forecast, a failed test or a channel that has stopped working gets raised in the next call or sooner — not buried in a report. That is the single behaviour we screen for hardest when we hire.`

### 4. Category group label: `Services & Platforms`
- H2: `What we actually do, discipline by discipline`
- Copy: `Management, marketing, SEO and the platforms and marketplaces we run.`

#### 4a. eCommerce Management (id="faq-management") — 4 questions
- H2: `eCommerce Management`
- Q: `What does eCommerce store management cover day to day?`
  - A: `Product listings and catalog hygiene, pricing and promotional calendars, inventory and feed accuracy, merchandising and collection structure, order and returns oversight, and the operational fixes that quietly cost you margin. It is unglamorous work that decides whether marketing spend converts.`
- Q: `Do you handle product listing and catalog management at scale?`
  - A: `Yes. Our largest managed catalog is a little over 4,200 SKUs across marketplace and storefront. At that scale the work is variation families, attribute completeness, duplicate consolidation and feed rules — not writing individual descriptions by hand.`
- Q: `Can you manage our storefront and our marketplaces together?`
  - A: `That is the normal engagement. One strategy covering Shopify or WooCommerce alongside Amazon, Walmart, eBay and Etsy, so pricing, inventory, creative and promotional calendars stay aligned instead of competing with each other for the same customer.`
- Q: `Do you offer eCommerce outsourcing for operations rather than marketing?`
  - A: `Yes. Some clients use us purely for eCommerce operations management — listings, catalog, feeds, account health and reporting — while keeping marketing in-house. It is a legitimate scope and we price it as one rather than forcing a bundle.`

#### 4b. Marketing & Advertising (id="faq-marketing") — 4 questions
- H2: `Marketing & Advertising`
- Q: `Which paid channels do you manage?`
  - A: `Google Ads including Shopping and Performance Max, Meta, Microsoft Ads, and marketplace advertising on Amazon and Walmart. TikTok and Pinterest where the category justifies them. We will tell you when a channel is not worth opening rather than adding it to look comprehensive.`
- Q: `How do you decide how much to spend on each channel?`
  - A: `By contribution margin and incrementality, not by blended ROAS. Budget moves to the channel that earns the most after cost of goods, fees, shipping and returns. That sometimes means recommending you spend less overall, which we do in writing.`
- Q: `Do you do email and SMS retention, or only acquisition?`
  - A: `Both, and retention is usually where the fastest return is. Lifecycle programmes — welcome, abandonment, post-purchase, replenishment, winback — typically reach 25 to 35 per cent of revenue for our clients, at a fraction of acquisition cost.`
- Q: `Who owns the ad accounts and the data?`
  - A: `You do, always. Campaigns run on your own accounts and your own payment methods, we are granted access rather than holding the keys, and everything we build stays with you if the engagement ends. We never mark up media or take a hidden percentage of spend.`

#### 4c. SEO (id="faq-seo") — 4 questions
- H2: `SEO`
- Q: `How long does eCommerce SEO take to show results?`
  - A: `Technical and on-page fixes often move within six to ten weeks. Content and authority work compounds over six to twelve months. Our median payback across the SEO book is around six months, but a brand starting from a penalised or replatformed position will take longer and we will say so up front.`
- Q: `Do you do technical SEO, content, or both?`
  - A: `Both, sequenced. Technical and architectural work first, because publishing content onto a broken crawl path wastes the budget. Then collection and category structure around commercial intent, then content and digital PR to build the authority those pages need to rank.`
- Q: `Can you do SEO on Shopify given its URL structure limitations?`
  - A: `Yes, and the limitations are more manageable than their reputation suggests. Collection and product URL conventions, faceted navigation handling, pagination and duplicate variant pages all have workable patterns on Shopify and Shopify Plus. We have taken Shopify stores to category-leading organic positions.`
- Q: `How do you measure eCommerce SEO when last-click undervalues it?`
  - A: `We report non-brand organic revenue separately from brand, track assisted conversions and new-user cohorts, and use holdout comparisons where the account size allows. Judging SEO on last-click alone systematically understates it, which is how good programmes get cut.`

#### 4d. Platforms & Marketplaces (id="faq-platforms") — 4 questions
- H2: `Platforms & Marketplaces`
- Q: `Which eCommerce platforms do you work on?`
  - A: `Shopify and Shopify Plus, WooCommerce, BigCommerce, Magento and Adobe Commerce, and custom or headless builds. On marketplaces: Amazon Seller and Vendor Central, Walmart Marketplace, eBay, Etsy and Noon in the Gulf.`
- Q: `Do you manage Amazon Seller Central and Vendor Central?`
  - A: `Both. Seller Central work covers catalog rebuilds, Buy Box strategy, PPC restructuring, A+ Content, Brand Store and account health. Vendor Central adds purchase order and chargeback management, which is a genuinely different discipline that most agencies quietly avoid.`
- Q: `Should we sell on marketplaces at all if our D2C store is strong?`
  - A: `Not automatically. Marketplaces buy you reach and lose you margin and customer data. The right answer depends on your category, your fee exposure and whether competitors are already ranking for your brand there. We build the model before recommending either way.`
- Q: `Can you migrate us to another platform without losing rankings?`
  - A: `Yes, and it is one of the things we are most careful about. A full URL map, tested redirects, parity checks on templates and structured data, and a staged launch. Our last major replatform moved 4,100 redirects with no measurable ranking loss.`

### 5. Category group label: `Pricing, Reporting & Results`
- H2: `What it costs and how you will know it worked`
- Copy: `The commercial questions, answered without hedging.`

#### 5a. Pricing & Packages (id="faq-pricing") — 4 questions
- H2: `Pricing & Packages`
- Q: `How much does it cost to hire an eCommerce agency?`
  - A: `Most of our engagements sit between $3,500 and $18,000 per month. Starter begins at $3,500 for a single platform, Growth at $7,500 for multi-channel work, and Scale is scoped individually, typically starting around $15,000. The free audit produces your actual number.`
- Q: `What is included in your packages and what costs extra?`
  - A: `Every package includes account setup, reporting, strategy, optimisation cycles and tracking validation. Additional paid channels, marketplace expansion, development, photography, creative production and new markets are priced as add-ons so you are never buying a tier to unlock one thing.`
- Q: `Is there a minimum contract length?`
  - A: `Ninety days, because nothing meaningful can be judged in less than a quarter. After that every package is month-to-month. No auto-renewing annual lock-ins, and everything we build for you remains yours if you leave.`
- Q: `Do you charge a percentage of ad spend?`
  - A: `No. Fees are based on scope, channel count and spend under management as a band — not a percentage. A percentage model rewards an agency for spending more of your money, which is precisely the incentive you do not want.`

#### 5b. Results & Reporting (id="faq-results") — 4 questions
- H2: `Results & Reporting`
- Q: `What results can we realistically expect in the first 90 days?`
  - A: `The first quarter is usually about fixing the floor: tracking accuracy, catalog and listing hygiene, wasted spend, and the conversion blockers found in the audit. Revenue movement in that window tends to come from efficiency rather than growth. We forecast the specific range for your account before we start.`
- Q: `What metrics do you report on?`
  - A: `Contribution margin next to ROAS, non-brand organic revenue, conversion rate by channel and device, customer acquisition cost and payback period, repeat rate and lifetime value, and marketplace-specific metrics such as Buy Box share and TACoS where relevant.`
- Q: `How do you attribute revenue across channels?`
  - A: `We use platform data as a directional input, not as truth. Reporting is reconciled against your own analytics and back-office numbers, with incrementality testing where the account size supports it. Where a figure is genuinely uncertain, the report says so.`
- Q: `What happens if the results do not come?`
  - A: `You will have heard it from us in a monthly review before you have to ask. The agreement is month-to-month after the first 90 days, so you can leave. We would rather tell you a channel is not working than wait for you to notice.`

### 6. Still have questions? (closing section)
- H2: `Still have questions?` (44px/800, white, centred)
- Copy: `If your question is not here, it is probably a good one. Ask a senior strategist directly — the first reply comes from a person who does the work, not a sales development rep.` (white, centred)
- Closing: white section containing a blue-GRADIENT panel (125deg #0B5BF4 → #0A44C4, radius 28px, padding 72px/56px), NOT a plain section and NOT a solid-blue panel.
- CTAs (12px-radius rectangles with icons, NOT pills): `Book Your Free Strategy Call` → /book-a-strategy-call/ (white bg, blue text, calendar icon) ; `See Pricing & Packages` → /pricing/ (transparent bg, 2px rgb(255 255 255/.42) border, white text, arrow-right icon after the text)
- No form on this section (and no form anywhere on the live page — no `<form>` or `<input>` elements in `<main>`).

## Quirks / notes
- The live page has NO images inside `<main>` at all (text-only page; the only imagery is the site header/footer). Any images in the clone are therefore illustrative additions, not reproductions.
- The live page has NO search box and NO "ask a question" form. Navigation is by category anchor links only.
- Category counts on the live page (5 + 4 + 4 + 4 + 4 + 4 + 4 + 4) add up to 33, matching the H1 copy ("Thirty-three questions") and the meta description.
- Group labels: the eight categories are presented under three group headings — `General & Agency` (General Services, Process & Communication), `Services & Platforms` (eCommerce Management, Marketing & Advertising, SEO, Platforms & Marketplaces), `Pricing, Reporting & Results` (Pricing & Packages, Results & Reporting).
- British spelling throughout the live copy ("optimise", "specialise", "programme", "organisation"-style spellings such as "favour" not present but "optimises", "specialise", "programmes" are) — kept verbatim in the clone.
- Live anchor ids: #categories, #faq-general, #faq-process, #faq-management, #faq-marketing, #faq-seo, #faq-platforms, #faq-pricing, #faq-results.
- Footer (same as homepage): standard Dazzle Commerce footer with newsletter form; not re-extracted here.
- No og:image; Twitter card is summary_large_image but no image URL is supplied in the head.

## Clone notes (updated 2026-11-23 fidelity fix pass)
- Clone route: /faqs/ (Next.js app/faqs/page.tsx).
- All 33 Q&As reproduced verbatim in 8 category accordion groups under the 3 group headings, with the same anchor ids.
- The live page has no search box and no form; the clone previously added a client-side search filter and an "Ask a question" form. Both were removed in the 2026-11-23 fidelity fix pass — the clone now has category anchor navigation only, matching live.
- The live page has NO images inside `<main>` at all. Illustrative images previously added to the clone (hero image and one image per group section: faqs-hero.webp, faqs-agency.webp, faqs-services.webp, faqs-pricing.webp) were removed in the 2026-11-23 fidelity fix pass; the files remain unused in public/images/.

## Correction 2026-11-23
- The line above is wrong: no `faqs-*.webp` files exist on disk — `public/images/` was checked 2026-11-23 and contains zero files matching `faqs*`. The four illustrative images were never written to disk (or were already deleted); nothing remains unused. This note supersedes the "files remain unused in public/images/" claim.
