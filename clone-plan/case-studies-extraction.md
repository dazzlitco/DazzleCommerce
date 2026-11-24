# Case Studies — full extraction

> Audit note — 2026-11-23 (fidelity audit, live page re-fetched fresh the same day, byte-identical to the fetch this extraction was built from): copy, headings, order, all links (including every FILED UNDER chip target), images and FAQs verified against the fresh live fetch — no differences found, no extraction corrections needed. One clone gap found and fixed in this audit: the clone page had no metadata export at all (no title/description/canonical/og:image), so it would have served the root layout metadata; a metadata export matching the live title, description, canonical and og:image (local /images/case-nutriblend.webp, 800×534) has been added.

Source: https://dazzlecommerce.com/case-studies/ — re-fetched fresh 2026-11-23 (browser.open crawl 2026-11-23 14:48 UTC + curl, 439,836 bytes)
Title: eCommerce Case Studies & Results | Dazzle Commerce
Description: Six eCommerce case studies with the constraint we found, the work we did and the numbers that moved. Filter by service, platform, industry and market.
Canonical: https://dazzlecommerce.com/case-studies/ | og:type: article | og:locale: en_US | og:site_name: Dazzle Commerce | og:updated_time: 2026-08-26T01:30:45-05:00
og:image: https://dazzlecommerce.com/wp-content/uploads/2026/08/cases-Nutriblend.webp (800x534, alt: "Dazzle Commerce SEO team working through category page structure") | twitter:card: summary_large_image | twitter "Time to read": 8 minutes
Published: 2026-08-15T07:14:04-05:00 | Updated: 2026-08-26T01:30:45-05:00

> Pill fix — 2026-11-23 (live page re-fetched fresh the same day): every section pill on live is an Elementor icon-list item with a leading icon, and every pill widget carries `elementor-align-center` — all 7 clone pills now use the shared Pill component, centered. Live icons: Results at a Glance custom bars SVG → fa-solid fa-chart-simple; The work `fas fa-diagram-project` → fa-solid fa-diagram-project; Our Methodology custom gear SVG → fa-solid fa-gear; Results by Service custom layers SVG → fa-solid fa-layer-group; Client Testimonials custom comment-bubble SVG → fa-solid fa-comment-dots; Industries & Business Types We Help custom briefcase SVG → fa-solid fa-briefcase; Case Study FAQs custom bubble-with-"?" SVG → fa-solid fa-circle-question (no free FA bubble-with-question icon exists; closest available). Icons read from custom inline SVGs are closest equivalents, verified visually from the rendered SVG shapes; centering is fetch-inferred, not render-proven.

## Sections in order (from the live page body, header/footer excluded)
1. Hero — H1 "eCommerce Case Studies With the Working Shown", intro, Get Free Strategy Call (/book-a-strategy-call/), Talk to a Specialist (/contact/). No hero image on the live page.
2. Results at a Glance — "Aggregated across managed accounts": +142% / 6.7x / +38% / 31 mo
3. The work — "Six engagements, with the working shown": 6 case-study cards, each with image, one-line constraint, 3 metrics, FILED UNDER chips (each chip links to the page that owns that term), "Read the case study" link
4. Our Methodology — "Why these engagements worked": 01 Diagnose, 02 Prioritise, 03 Execute, 04 Compound + attribution note
5. Results by Service — "What each discipline typically delivers": 6 disciplines with figures
6. Client Testimonials — "In their words": 3 quotes (same three as the homepage)
7. Industries & Business Types We Help — "Where our experience is deepest": 9 categories + "Explore industries in detail" (/industries/)
8. Case Study FAQs — "Fair questions about these numbers": 6 Q&As (Elementor nested accordion, 6 details/summary items)
9. Final CTA — "Want a case study with your name on it?": Book Your Free Strategy Call (/book-a-strategy-call/), See Our Services (/services/), checks: Free 30-minute call / No long-term contracts / Actionable audit you keep

## Full text, in live order

- H1: eCommerce Case Studies With the Working Shown
- P: Three engagements, three different problems, one operating system. Every number below comes with the methodology that produced it — because a metric without a method is just a claim.
- A: Get Free Strategy Call -> /book-a-strategy-call/
- A: Talk to a Specialist -> /contact/
- Eyebrow: Results at a Glance
- H2: Aggregated across managed accounts
- P: Individual results vary considerably by category, margin structure and starting position. We will give you an honest range for your situation on the call.
- H3: +142% / H4: Average revenue growth / P: First 12 months
- H3: 6.7x / H4: Median blended ROAS / P: Paid search, shopping and social
- H3: +38% / H4: Average CR lift / P: After two CRO test cycles
- H3: 31 mo / H4: Average client tenure / P: On month-to-month terms
- Eyebrow: The work
- H2: Six engagements, with the working shown
- P: Every case study is classified on four axes — service, platform, industry and market — so you can find the one that matches your situation rather than the one we happened to feature. Each chip links to the page that owns that term.

### Case 1 — Kitchenary
- IMG alt: "Modern stainless steel kitchenware set styled for an online store" (live file: cs-kitchenary-hero-1024x684.jpg)
- H3 link: Kitchenary -> /kitchenary-home-kitchen-shopify-usa/
- P: A free-shipping promise was quietly eating the margin on the products the ads pushed hardest.
- H4: +38% / P: contribution margin
- H4: -21% / P: blended CAC
- H4: +12% / P: repeat rate
- FILED UNDER: eCommerce Management -> /ecommerce-management/ | Shopify -> /shopify-agency/ | Home & Furniture -> /home-furniture-ecommerce-agency/ | USA -> /ecommerce-agency-usa/
- A: Read the case study -> /kitchenary-home-kitchen-shopify-usa/

### Case 2 — Lumen Atelier
- IMG alt: "Fashion studio with a clothing rack and styled garments" (live file: cs-lumen-hero-1024x731.jpg)
- H3 link: Lumen Atelier -> /lumen-atelier-fashion-ppc-shopify-usa/
- P: The paid account was competent. One seasonal shoot was being asked to supply a whole quarter of advertising.
- H4: -31% / P: cost per acquisition
- H4: +24% / P: new customer revenue
- H4: -9pt / P: return rate
- FILED UNDER: eCommerce PPC -> /ecommerce-ppc/ | Shopify -> /shopify-agency/ | Fashion & Apparel -> /fashion-ecommerce-agency/ | USA -> /ecommerce-agency-usa/
- A: Read the case study -> /lumen-atelier-fashion-ppc-shopify-usa/

### Case 3 — Vac & Vacuums
- IMG alt: "Vacuum cleaner being used in a living room" (live file: cs-vac-hero-1024x731.jpg)
- H3 link: Vac & Vacuums -> /vac-vacuums-amazon-marketplace-europe/
- P: A brand competing against its own resellers, with returns and buy-box share tracing to the same catalogue.
- H4: +44% / P: buy-box share
- H4: -17% / P: return rate
- H4: +26% / P: marketplace revenue
- FILED UNDER: Marketplace Management -> /marketplace-management-marketing/ | Amazon -> /amazon-agency/ | Electronics -> /electronics-ecommerce-agency/ | Europe -> /international-ecommerce-expansion/
- A: Read the case study -> /vac-vacuums-amazon-marketplace-europe/

### Case 4 — NutriBlend
- IMG alt: "Supplement capsules and powder arranged for product photography" (live file: cs-nutriblend-hero-1024x682.jpg)
- H3 link: NutriBlend -> /nutriblend-supplements-retention-uk/
- P: Churn clustered in months two and three because every product shipped on the same fixed cycle.
- H4: +29% / P: subscriber LTV
- H4: -34% / P: month-three churn
- H4: +18% / P: revenue per email
- FILED UNDER: Email & Retention -> /email-retention-marketing/ | WooCommerce -> /woocommerce-agency/ | Health & Wellness -> /health-wellness-ecommerce-agency/ | UK -> /ecommerce-agency-uk/
- A: Read the case study -> /nutriblend-supplements-retention-uk/

### Case 5 — Sabaa Beauty
- IMG alt: "Luxury skincare products arranged for a beauty campaign" (live file: cs-sabaa-hero-1024x731.jpg)
- H3 link: Sabaa Beauty -> /sabaa-beauty-noon-seo-gcc/
- P: An Arabic menu over English product pages, and a cash-on-delivery share that reflected exactly that.
- H4: 2.4x / P: organic revenue
- H4: +38pt / P: prepaid share
- H4: -26% / P: COD refusals
- FILED UNDER: eCommerce SEO -> /ecommerce-seo/ | Noon -> /noon-seller-management/ | Beauty & Cosmetics -> /beauty-ecommerce-agency/ | Gulf -> /ecommerce-agency-dubai/
- A: Read the case study -> /sabaa-beauty-noon-seo-gcc/

### Case 6 — Verdano Foods
- IMG alt: "Packaged food products displayed on a retail shelf" (live file: cs-verdano-hero-1024x731.jpg)
- H3 link: Verdano Foods -> /verdano-foods-bigcommerce-cro-australia/
- P: Quoting a longer, honest delivery window converted better than promising a fast one and missing it.
- H4: +41% / P: conversion rate
- H4: -23% / P: delivery complaints
- H4: +19% / P: average order value
- FILED UNDER: CRO -> /conversion-rate-optimization/ | BigCommerce -> /bigcommerce-agency/ | Food & Beverage -> /food-beverage-ecommerce-agency/ | Australia -> /ecommerce-agency-australia/
- A: Read the case study -> /verdano-foods-bigcommerce-cro-australia/

- P (footnote under the grid): Client names are the ones we publish under. Figures are measured against the same period a year earlier, and count kept orders net of returns.
- Eyebrow: Our Methodology
- H2: Why these engagements worked
- P: The same four-phase system runs on every account. It is deliberately boring — consistency is what makes results repeatable rather than lucky.
- H6: 01 / H3: Diagnose / P: Fifteen days inside analytics, ad accounts, marketplace health and the technical stack. Every finding scored by revenue impact and effort.
- H6: 02 / H3: Prioritise / P: A 90-day roadmap agreed before work starts, with a forecast, named owners and the metric each workstream answers to.
- H6: 03 / H3: Execute / P: Two-week sprints. Nothing ships without tracking attached, and every test is documented whether it wins or loses.
- H6: 04 / H3: Compound / P: Monthly business reviews, quarterly replanning, and a standing recommendation each quarter about what to stop doing.
- P: A note on attribution. Every figure on this page is measured against a pre-engagement baseline over an equivalent trailing period, using the client’s own analytics and platform reporting rather than our platform-attributed numbers. Where seasonality or a product launch contributed materially, we say so in the full case study document.
- Eyebrow: Results by Service
- H2: What each discipline typically delivers
- H3: eCommerce SEO / P: +97% organic traffic (Kitchenary) · +64% non-brand clicks across the SEO book · median 6-month payback
- H3: PPC & Google Shopping / P: 7.9x blended ROAS (Nutriblend) · -31% blended CAC · margin-tiered structures on 100% of accounts
- H3: Amazon & Marketplace / P: +186% Amazon sales (VAC) · +64% Buy Box rate · -42% TACoS on restructured accounts
- H3: Conversion Optimization / P: +52% CR (Kitchenary) · +38% average lift after two test cycles · every test documented
- H3: Email & Retention / P: Lifecycle programmes reaching 25–35% of revenue · +46% subscription rate (Nutriblend)
- H3: Development & Performance / P: 1.6s mobile LCP (Kitchenary) · 40+ replatforms with zero ranking loss · Core Web Vitals passed
- Eyebrow: Client Testimonials
- H2: In their words
- Quote: “They were the first agency that talked to us about contribution margin instead of vanity ROAS. Six months in, we are spending more and keeping more of it.” / H3: Marisa Chen / P: VP Growth, Nutriblend
- Quote: “Our Amazon catalog was a mess after three years of quick fixes. They rebuilt it properly, and we recovered the Buy Box on our top sellers within a quarter.” / H3: Devin Okafor / P: Founder, VAC Vacuums
- Quote: “The replatform was the smoothest project our team has run. No traffic dip, no ranking loss, and the site is three times faster.” / H3: Priya Raghavan / P: eCommerce Director, Kitchenary
- Eyebrow: Industries & Business Types We Help
- H2: Where our experience is deepest
- P: Nine categories cover most of our book. The operating system underneath is the same — the constraints are what change.
- H3: Fashion & Apparel / P: Sizing, returns and seasonality
- H3: Beauty & Cosmetics / P: Regulated claims and replenishment
- H3: Health & Supplements / P: Subscriptions and compliance
- H3: Home & Furniture / P: High AOV and freight
- H3: Consumer Electronics / P: Marketplace-heavy, price-sensitive
- H3: Jewelry & Accessories / P: Trust and consideration cycles
- H3: Sports & Fitness / P: Community and creator-led demand
- H3: Food & Beverage / P: Perishability and repeat rate
- H3: B2B eCommerce / P: Quotes, tiered pricing, net terms
- A: Explore industries in detail -> /industries/
- Eyebrow: Case Study FAQs
- H2: Fair questions about these numbers
- H3 Q: Are these results typical? / A: No result is typical, which is why we publish the methodology alongside the number. What is consistent is the process: diagnose properly, fix the operational floor, then scale what compounds. On the audit call we will give you a realistic range for your category, margin structure and starting position rather than pointing at someone else’s best quarter.
- H3 Q: Why don't you show more clients? / A: Several of our largest accounts are under NDA or would rather competitors not know who runs their growth. We will connect you with references in your category privately after the audit, including ones whose numbers are less flattering than these.
- H3 Q: How long did each of these engagements take? / A: Nutriblend hit those figures at month eleven. VAC Vacuums recovered the Buy Box within one quarter, with sales figures at month nine. Kitchenary’s replatform ran fourteen weeks, with the traffic and conversion numbers measured twelve months post-launch.
- H3 Q: Do you work in my industry? / A: Probably. The nine categories listed above cover most of our book, and the operating system underneath is the same. Where we genuinely lack experience, we say so — we have turned down regulated categories where we could not add value fast enough to justify the fee.
- H3 Q: What happens if the results do not come? / A: The agreement is month-to-month after the first 90 days, so you can leave. Before that, we will have flagged the problem ourselves in a monthly review — we would rather tell you a channel is not working than wait for you to notice.
- H3 Q: Can I see the actual audit you would run for us? / A: Yes. Book the free strategy call and we will run it on your accounts before we speak. You keep the scorecard regardless of what happens next.
- H2: Want a case study with your name on it?
- P: Start with the free audit. We will show you where your revenue is leaking, what it is worth to fix, and whether we are the right team to do it.
- A: Book Your Free Strategy Call -> /book-a-strategy-call/
- A: See Our Services -> /services/
- LI: Free 30-minute call / No long-term contracts / Actionable audit you keep

## Business / schema details on the live page (footer area, not page body)
- Business: Dazzle Commerce — 1201 Commerce Street, Suite 480, Austin, TX 78701, United States — +1 (555) 010-2400 — hello@dazzlecommerce.com — Mon–Fri, 9:00–18:00 CT
- Hours: Mo,Tu,We,Th,Fr,Sa,Su 09:00-17:00 | Phone: +1 (555) 012-3456
- Product Variants / Options: Shopify / Shopify Plus, WooCommerce, Amazon Seller Central, Walmart Marketplace, eBay, Etsy, BigCommerce, Magento / Adobe Commerce, Not selling online yet

## Quirks / discrepancies — kept verbatim, not fixed
- Hero intro says "Three engagements, three different problems" but the page lists SIX case studies. The homepage case-study section also says "Three engagements, three very different problems."
- The live index spells the vacuum brand "Vac & Vacuums" and the supplements brand "NutriBlend"; the homepage spells them "VAC Vacuums" and "Nutriblend". Live index spelling is used on this page.
- Index metrics differ from the homepage's metrics for the same clients (e.g. homepage Nutriblend: +214% Revenue YoY / 7.9x Blended ROAS / -31% CAC; live index NutriBlend: +29% subscriber LTV / -34% month-three churn / +18% revenue per email). Live index figures are used here, verbatim.
- The homepage says VAC "boosting monthly sales valume" (typo "valume") — that copy is homepage-only and does not appear on this page.
- The live page has NO filter/search form elements in its HTML (no form, select, input or button in the main content). "Filter by service, platform, industry and market" appears only in the meta description; the live filtering mechanism is the FILED UNDER chips, each linking to the taxonomy page that owns that term. The clone previously added a working client-side filter (search + service / platform / industry / market selects); this was removed in the 2026-11-23 fidelity fix pass — the clone now renders the six cards statically with the chips preserved as links, matching live.
- Live footer/schema phone numbers conflict: +1 (555) 010-2400 in the business block vs +1 (555) 012-3456 in the Phone field. Both recorded; neither is rendered on this page (footer is shared).
- Live page lists "Electronics" as the Vac industry chip but the industries section uses "Consumer Electronics"; both kept as published.
- Live uses British spellings in places ("Prioritise", "catalogue", "programmes") — kept verbatim.
