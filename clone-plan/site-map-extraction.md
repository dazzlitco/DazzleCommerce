# Site Map — Extraction (live page, word-for-word)

Source: https://dazzlecommerce.com/site-map/
Fetched: 2026-11-23 (browser.open crawl + raw HTML via curl, same day).
Clone target: `app/site-map/page.tsx` (Batch 1, Page 19).

## Meta

- **Meta title:** `Site Map | Dazzle Commerce`
- **Meta description:** `Every page, section and article on the Dazzle Commerce website: services, industries, case studies, blog posts, locations and legal policies.`
- **Canonical:** `https://dazzlecommerce.com/site-map/`
- **Open Graph:** type `article`, locale `en_US`, url `https://dazzlecommerce.com/site-map/`, site_name `Dazzle Commerce`, title `Site Map | Dazzle Commerce`, description as above. No og:image on the page.
- **Twitter:** card `summary_large_image`, title `Site Map | Dazzle Commerce`, description as above, label1 `Time to read`, data1 `2 minutes`. No twitter:image.
- **Published:** 2026-08-15T07:14:04-05:00 — **Updated:** 2026-09-04T06:24:03-05:00
- **Structured data types present:** Article, WebPage, WebSite, BreadcrumbList, Person, Place, PostalAddress (x2), ImageObject (x2). No og:image on the page.
- **Business (footer/schema, as shown on the live page):** Dazzle Commerce — 1201 Commerce Street, Suite 480, Austin, TX 78701, United States; +1 (555) 010-2400; hello@dazzlecommerce.com; Mon–Fri, 9:00–18:00 CT. (The page also shows a second phone, +1 (555) 012-3456, and hours Mo–Su 09:00–17:00 in schema — see Quirks.)

## Sections in order

1. **Hero** — H1 `Site Map`. Intro paragraph (verbatim):
   > `Every page on this site, grouped and described. If you are looking for something specific and cannot find it here, tell us and we will point you at it.`
   (`tell us` links to `/contact/`.)
2. **Sitemap index** — `All Pages` is an icon-list `<li>` (Elementor icon-list widget, custom inline SVG sitemap icon — not a pill/eyebrow and not a Font Awesome icon), followed by subheading (H2) `137 destinations across nine groups`, note: `Human-readable version. Search engines should use the XML sitemap.` (XML sitemap links to `/sitemap.xml`.)
   Nine groups, in this order: Main Pages, Services, Industries, Locations, Platforms & Marketplaces, Proof & Expertise, Resources, Legal & Policies, For Search Engines. Group titles are **H3** on live; each entry's title and its one-line description are both **H6** on live. Live shows **no per-group page counts**.
   No search box, filter or images appear in the live sitemap index — it is a plain grouped link list with one-line descriptions. (Fix pass 2026-11-23: the clone's client-side search box, group jump buttons and generated hero image were all removed; the page is now a plain server-component grouped list, matching live.)
3. **How this site is structured** (H2) — see full copy below.
4. **Found what you were looking for?** (H2) — CTA: `If not, a two-minute conversation usually beats another twenty minutes of clicking around.` Buttons: `Book a Free Strategy Call` → `/book-a-strategy-call/`, `Back to Home` → `/`. Below the buttons, an icon list (far-check-circle icons): `Free 30-minute call`, `No long-term contracts`, `Actionable audit you keep`.
5. **Footer** (shared site footer — see `app/layout.tsx`; not re-extracted here).

## “How this site is structured” — full copy (verbatim)

> The information architecture follows how eCommerce brands actually evaluate an agency, rather than how agencies like to describe themselves. Services answers what we do, Case Studies answers whether it works, Industries and Locations answer whether it works for someone like you, and About answers who would be doing it.

(Bold on live: **Services**, **Case Studies**, **Industries**, **Locations**, **About**.)

> Every page carries a unique meta title and description, a single H1, a logical heading hierarchy, descriptive alt text on images and structured data appropriate to its type — Organization and FAQPage on the home page, Service on the services page, BreadcrumbList throughout.

### Accessibility (H3, verbatim)

> The site targets WCAG 2.1 AA: semantic landmarks, a skip link, visible focus states, keyboard-operable navigation and accordions, colour contrast checked against the palette, and full support for prefers-reduced-motion. If you hit an accessibility barrier, email hello@dazzlecommerce.com and we will fix it.

## Full link list (verbatim titles, descriptions and hrefs)

Total listed entries: **191** across **9** groups.

### Main Pages (22 entries)

- [Home](/) — eCommerce management and marketing agency overview
- [About Us](/about-us/) — Our story, team, values, certifications and milestones
- [How We Work](/how-we-work/) — Onboarding, operating rhythm, prioritisation and reporting
- [Our Technology Stack](/our-technology-stack/) — Nine tool categories, what each must do, and who owns every account
- [Contact](/contact/) — Book a free strategy call or request a growth audit
- [Free eCommerce Audit](/ecommerce-audit/) — What we audit, what you receive, how it works and the request form
- [eCommerce Growth Assessment](/ecommerce-growth-assessment/) — The twelve-point framework in full, with every threshold, to run yourself
- [Book a Strategy Call](/book-a-strategy-call/) — Thirty minutes with the strategist who would run your account, summary included
- [Request a Proposal](/request-a-proposal/) — Scope, sequence, price and named people, written in five working days
- [Pricing & Packages](/pricing/) — Package tiers, inclusions and how we scope your monthly investment
- [Careers](/careers/) — Open roles, our values, hiring process and general application
- [SEO Specialist](/careers/seo-specialist/) — Remote, full-time — eCommerce SEO
- [PPC Specialist](/careers/ppc-specialist/) — Remote, full-time — paid media
- [eCommerce Account Manager](/careers/ecommerce-account-manager/) — Remote, full-time — client success
- [eCommerce Management](/ecommerce-management/) — Store, catalog, marketing, CRO, operations and reporting
- [eCommerce Marketing](/ecommerce-marketing/) — Search, paid media, social, email and conversion as one plan
- [eCommerce SEO](/ecommerce-seo/) — Technical, category, product and content SEO for online stores
- [PPC & Paid Advertising](/ecommerce-ppc/) — Google Ads, Shopping, Performance Max, Meta and Amazon Ads
- [Conversion Rate Optimization](/conversion-rate-optimization/) — Research-led CRO across product, cart and checkout
- [Email & Retention Marketing](/email-retention-marketing/) — Lifecycle flows, segmentation, loyalty and win-back programs
- [eCommerce Development & Technology](/ecommerce-development/) — Platform builds, migrations, integrations, speed and reliability
- [eCommerce Creative & Content](/ecommerce-creative-content/) — Product imagery, ad creative, video, copywriting and listing content

### Services (11 entries)

- [All Services](/services/) — The full range of eCommerce services we deliver
- [eCommerce Management](/services/#management) — Listings, catalog, operations and account management
- [eCommerce Marketing](/services/#marketing) — SEO, PPC, marketplace ads, email, social and CRO
- [Development & Technology](/ecommerce-development/) — Shopify, WooCommerce, migrations and performance
- [Marketplace Management & Marketing](/marketplace-management-marketing/) — Account operations, listings, SEO, ads and expansion across 12 marketplaces
- [International eCommerce Expansion](/international-ecommerce-expansion/) — Market selection, localisation, marketplaces and cross-border operations
- [Creative & Content](/ecommerce-creative-content/) — Photography, video, A+ content and copywriting
- [Product Photography](/ecommerce-product-photography/) — Catalogue, lifestyle, 360 and fit imagery, shot to channel specs
- [eCommerce App Development](/ecommerce-app-development/) — Shopping apps, progressive web apps and private platform apps
- [eCommerce Web Design](/ecommerce-web-design/) — UX research, templates, design systems and accessibility
- [Platforms We Support](/platforms/) — All 21 store platforms and marketplaces, each with its own page

### Industries (11 entries)

- [Industries We Serve](/industries/) — All ten categories and how the work changes in each
- [Fashion & Apparel](/fashion-ecommerce-agency/) — Collections, fit and returns, season and drop calendars
- [Beauty & Cosmetics](/beauty-ecommerce-agency/) — Routine merchandising, shade matching, UGC and replenishment
- [Health & Wellness](/health-wellness-ecommerce-agency/) — Evidence, claim-safe advertising and subscription retention
- [Home & Furniture](/home-furniture-ecommerce-agency/) — Visual discovery, dimensions and delivery experience
- [Electronics & Technology](/electronics-ecommerce-agency/) — Specification data, comparison and accessory attach rate
- [Food & Beverages](/food-beverage-ecommerce-agency/) — Consumption cycles, subscription and freshness logistics
- [Sports & Fitness](/sports-fitness-ecommerce-agency/) — Goal-led discovery, kit building and community commerce
- [Jewelry & Accessories](/jewelry-ecommerce-agency/) — Presentation, trust signals and gifting occasions
- [Automotive & Parts](/automotive-ecommerce-agency/) — Vehicle fitment, catalog data and wrong-part returns
- [B2B & Wholesale](/b2b-wholesale-ecommerce-agency/) — Account pricing, quoting, purchase orders and reordering

### Locations (13 entries)

- [eCommerce Agency USA](/ecommerce-agency-usa/) — National reach with regional execution across DTC and marketplaces
- [eCommerce Agency UK](/ecommerce-agency-uk/) — A mature market where delivery expectations set the baseline
- [eCommerce Agency Canada](/ecommerce-agency-canada/) — Concentrated demand and cross-border US selling
- [eCommerce Agency Australia](/ecommerce-agency-australia/) — Metro demand, freight economics and delivery experience
- [eCommerce Agency Europe](/international-ecommerce-expansion/) — Multi-country commerce, localisation and cross-border logistics
- [eCommerce Agency India](/ecommerce-agency-india/) — Store management, marketplace growth, SEO, PPC, CRO and retention, with RTO and prepaid conversion treated as revenue work
- [eCommerce SEO London](/ecommerce-agency-london/) — Search, Shopify development, marketplaces, PPC, CRO and retention for established UK brands
- [eCommerce Agency GCC](/ecommerce-agency-dubai/) — Gulf marketplaces, Arabic experiences and cash on delivery
- [eCommerce Agency MENA](/international-ecommerce-expansion/) — Regional planning, Arabic localisation and payment trust
- [eCommerce Agency APAC](/international-ecommerce-expansion/) — A fragmented region planned market by market
- [eCommerce Agency Southeast Asia](/international-ecommerce-expansion/) — Shopee, Lazada, TikTok Shop and live commerce
- [eCommerce Agency Latin America](/international-ecommerce-expansion/) — Marketplace-led growth and instalment payments
- [Locations We Serve](/locations-we-serve/) — Every market we work in, in one place

### Platforms & Marketplaces (22 entries)

- [Platforms We Work With](/platforms/) — All 16 store platforms and marketplaces we manage
- [Shopify](/shopify-agency/) — Shopify and Shopify Plus management, marketing and development
- [WooCommerce](/woocommerce-agency/) — WooCommerce store management, maintenance and growth
- [BigCommerce](/bigcommerce-agency/) — BigCommerce management, multi-storefront and headless work
- [Adobe Commerce (Magento)](/adobe-commerce-agency/) — Adobe Commerce and Magento management, B2B and development
- [Amazon](/amazon-agency/) — Account, catalog, Amazon SEO, PPC, A+ content and brand store
- [Walmart Marketplace](/walmart-marketplace-management/) — Seller Center, listing quality and Walmart Connect advertising
- [eBay](/ebay-store-management/) — Listing management, Promoted Listings and seller performance
- [Etsy](/etsy-shop-management/) — Etsy SEO, listing creative, shop branding and Etsy Ads
- [TikTok Shop](/tiktok-shop-agency/) — Creator and affiliate marketing, LIVE commerce and shop ads
- [Daraz](/daraz-seller-management/) — South Asia — PK, LK, BD, NP and MM marketplace management
- [Shopee](/shopee-seller-management/) — Southeast Asia — campaigns, vouchers, Shopee Ads and Live
- [Lazada](/lazada-seller-management/) — Southeast Asia — Sponsored Solutions, campaigns and catalog
- [noon](/noon-seller-management/) — KSA, UAE and Egypt — Seller Lab, bilingual listings and ads
- [Jumia](/jumia-seller-management/) — Africa — Seller Score, catalog, advertising and campaigns
- [AliExpress](/aliexpress-seller-management/) — Cross-border growth, localisation, pricing and global catalog
- [Alibaba.com](/alibaba-b2b-agency/) — B2B wholesale — supplier profile, RFQ and buyer acquisition
- [Wix](/wix-agency/) — Wix and Wix Studio store management, marketing, SEO, CRO and Velo development
- [Squarespace](/squarespace-agency/) — Squarespace Commerce management, marketing, SEO, CRO and custom development
- [1688](/1688-b2b-agency/) — Domestic Chinese wholesale — storefront, tiered pricing and inquiry handling
- [Made-in-China](/made-in-china-b2b-agency/) — Export manufacturers — showroom, audit status, RFQ and buyer acquisition
- [DHgate](/dhgate-b2b-agency/) — Small-lot wholesale and cross-border — lot pricing, ads and fulfilment

### Proof & Expertise (18 entries)

- [Case Studies](/case-studies/) — Client results with the methodology behind them
- [Industries](/industries/) — Category-specific strategy across nine verticals
- [Locations We Serve](/locations-we-serve/) — USA, UK, Canada, Australia and the UAE
- [Testimonials](/testimonials/) — Client testimonials by service, results snapshot and client stories
- [NutriBlend review](/testimonials/nutriblend-review/) — Marisa Chen, VP Growth, on a brief we rejected and a delivery date that fixed the churn
- [Vac & Vacuums review](/testimonials/vac-vacuums-review/) — Devin Okafor, Founder, on one catalogue behind both a price war and a returns problem
- [Kitchenary review](/testimonials/kitchenary-review/) — Priya Raghavan, eCommerce Director, on revenue growing while profit stood still
- [Lumen Atelier review](/testimonials/lumen-atelier-review/) — Violet Hina, Head of Growth, on three agencies restructuring an account that was never the problem
- [Sabaa Beauty review](/testimonials/sabaa-beauty-review/) — Shams Al-Gharbi, Managing Director, on an Arabic menu over an English catalogue and the cost at the door
- [Verdano Foods review](/testimonials/verdano-foods-review/) — William Josh, Operations Director, on quoting a longer delivery window and watching conversion rise
- [Partners](/partners/) — Referral, white-label, technology and affiliate partnership programs
- [Portfolio](/portfolio/) — Twelve selected engagements with baselines, work shipped and results
- [Kitchenary case study](/kitchenary-home-kitchen-shopify-usa/) — Management + Shopify + Home & Furniture + USA
- [Lumen Atelier case study](/lumen-atelier-fashion-ppc-shopify-usa/) — PPC + Shopify + Fashion & Apparel + USA
- [Vac & Vacuums case study](/vac-vacuums-amazon-marketplace-europe/) — Marketplace + Amazon + Electronics + Europe
- [NutriBlend case study](/nutriblend-supplements-retention-uk/) — Retention + WooCommerce + Wellness + UK
- [Sabaa Beauty case study](/sabaa-beauty-noon-seo-gcc/) — SEO + Noon + Beauty + Gulf
- [Verdano Foods case study](/verdano-foods-bigcommerce-cro-australia/) — CRO + BigCommerce + Food + Australia

### Resources (87 entries)

- [Resources](/resources/) — Insights, guides, case studies and tools in one index
- [Insights](/blog/) — Ten articles across seven eCommerce disciplines
- [Guides](/guides/) — Procedures you can run yourself, published in full
- [Comparisons](/guides/comparisons/) — Head-to-head platform and marketplace comparisons, with a decision at the end
- [Shopify vs WooCommerce](/guides/comparisons/shopify-vs-woocommerce/) — Cost, maintenance, SEO, checkout, scale and the cost of switching later
- [Amazon vs Walmart Marketplace](/guides/comparisons/amazon-vs-walmart-marketplace/) — Demand, fees, listings, advertising, fulfilment and operational load
- [Best eCommerce Platform for SEO](/guides/comparisons/best-ecommerce-platform-for-seo/) — Shopify, WooCommerce, BigCommerce, Adobe Commerce, Wix and headless on URL control, facets, speed and migration risk
- [Etsy SEO Tools Compared](/guides/comparisons/etsy-seo-tools/) — Six Etsy SEO tools compared on price, limits and what each is actually good at, with no affiliate links
- [Checklists](/resources/checklists/) — Working checklists for SEO, conversion and marketplace listings
- [eCommerce SEO Checklist](/resources/checklists/ecommerce-seo-checklist/) — Forty-two checks across indexation, architecture, product pages and content
- [eCommerce CRO Checklist](/resources/checklists/ecommerce-cro-checklist/) — Forty checks on product page, basket, checkout and measurement
- [Amazon Listing Checklist](/resources/checklists/amazon-listing-checklist/) — Thirty-eight checks to run before putting advertising behind a listing
- [Shopify SEO Checklist](/resources/checklists/shopify-seo-checklist/) — Forty-two checks written for Shopify: duplicate paths, handles, theme speed and app bloat
- [eCommerce Launch Checklist](/resources/checklists/ecommerce-launch-checklist/) — Forty-two checks before a new store takes its first order, starting with the commercial model
- [eCommerce Migration Checklist](/resources/checklists/ecommerce-migration-checklist/) — Forty-two checks for a replatform, starting with the redirect map
- [Website Audit Checklist](/resources/checklists/website-audit-checklist/) — Forty-two technical checks across crawlability, indexation, performance and measurement
- [Product Page Optimization Checklist](/resources/checklists/product-page-optimization-checklist/) — Forty-two checks on the buying decision, imagery, copy, variants, reviews and search visibility
- [eCommerce PPC Checklist](/resources/checklists/ecommerce-ppc-checklist/) — Forty-two Google Ads checks from conversion tracking through to break-even ROAS
- [Templates](/resources/templates/) — Downloadable XLSX and DOCX files with working formulas
- [Keyword Research Template](/resources/templates/keyword-research-template/) — Keyword list, page map and cluster workbook with opportunity scoring
- [eCommerce KPI Dashboard Template](/resources/templates/ecommerce-kpi-dashboard-template/) — Monthly trading, channel mix and contribution margin workbook
- [Product Description Template](/resources/templates/product-description-template/) — Structured product copy brief with specification and SEO fields
- [eCommerce Content Calendar](/resources/templates/ecommerce-content-calendar/) — Fifty-two dated weeks with trading dates, content pillars and status counters
- [Google Shopping Campaign Template](/resources/templates/google-shopping-campaign-template/) — Six campaign structures compared, a build sheet and the negative lists to create first
- [eCommerce Audit Template](/resources/templates/ecommerce-audit-template/) — A findings workbook that scores severity, confidence and effort and ranks automatically
- [eCommerce Marketing Plan Template](/resources/templates/ecommerce-marketing-plan-template/) — A nine-section plan document with a twelve-month channel budget workbook
- [SEO Audit Template](/resources/templates/seo-audit-template/) — An eight-section client-facing audit report with five findings and a ninety-day sequence
- [Product Page Brief Template](/resources/templates/product-page-brief-template/) — Copy, shot list, variants, proof, search requirements and twelve acceptance criteria
- [PPC Budget Template](/resources/templates/ppc-budget-template/) — Campaign-level pacing with projected month-end spend and variance
- [CRO Testing Template](/resources/templates/cro-testing-template/) — A test log that sizes tests before they run and judges them with a two-proportion z test
- [Email Calendar Template](/resources/templates/email-calendar-template/) — A send plan with results, a nine-flow lifecycle inventory and cadence rules
- [Marketplace Listing Template](/resources/templates/marketplace-listing-template/) — Listing copy with live character checks against Amazon, eBay, Walmart and Etsy limits
- [Competitor Analysis Template](/resources/templates/competitor-analysis-template/) — Ten competitors across fourteen dimensions, with gap scoring and priority
- [International Expansion Template](/resources/templates/international-expansion-template/) — A market selection scorecard with contribution margin and break-even ROAS per market
- [Glossary](/resources/glossary/) — An A to Z of 104 eCommerce terms, defined by practitioners
- [ROAS](/resources/glossary/roas/) — Return on ad spend: formula, worked example and break-even calculation
- [ACoS](/resources/glossary/acos/) — Advertising cost of sale, TACoS and break-even ACoS explained
- [Average Order Value](/resources/glossary/average-order-value/) — AOV: the formula, the three levers, and when raising it costs money
- [eCommerce (definition)](/resources/glossary/ecommerce/) — What eCommerce covers, the models inside it and the terms that sit next to it
- [Statistics](/resources/statistics/) — Sourced eCommerce market data, every figure with publisher, year and sample
- [Tools & Calculators](/tools/) — Twenty free tools: Amazon FBA, Shopify and Etsy fees, revenue, margin, discounts, order value, ROAS, TACoS, ROI, lifetime value, PPC budgets, meta descriptions and product copy
- [Break-even ROAS calculator](/tools/break-even-roas-calculator/) — The return on ad spend a campaign must beat before it makes money
- [Cart abandonment calculator](/tools/cart-abandonment-calculator/) — What abandoned checkouts are worth, in contribution rather than revenue
- [Break-even ACoS calculator](/tools/break-even-acos-calculator/) — Your Amazon break-even after referral fees and FBA, plus the TACoS equivalent
- [eCommerce Profit Margin Calculator](/tools/ecommerce-profit-margin-calculator/) — Calculator — gross margin, contribution per order and net profit after marketing, from six inputs
- [eCommerce ROI Calculator](/tools/ecommerce-roi-calculator/) — Calculator — return on a marketing investment using contribution, with the ROAS shown for contrast
- [ROAS Calculator](/tools/roas-calculator/) — Calculator — channel, combined and blended ROAS, and how much revenue the platforms count twice
- [Customer Acquisition Cost Calculator](/tools/customer-acquisition-cost-calculator/) — Calculator — blended and paid CAC, the break-even your margin supports, and payback in orders
- [Customer Lifetime Value Calculator](/tools/customer-lifetime-value-calculator/) — Calculator — lifetime value on contribution, discounted to today, with the LTV to CAC ratio
- [Conversion Rate Calculator](/tools/conversion-rate-calculator/) — Calculator — the headline rate plus four step rates, so the leaking step is visible
- [Amazon TACoS Calculator](/tools/amazon-tacos-calculator/) — Calculator — TACoS beside ACoS and organic share, with the break-even your margin carries
- [Discount & Profit Calculator](/tools/discount-profit-calculator/) — Calculator — margin after a discount and the extra volume needed to stand still
- [LTV Calculator](/tools/ltv-calculator/) — Calculator — lifetime value from a repeat purchase rate, with how much lands in your horizon
- [PPC Budget Calculator](/tools/ppc-budget-calculator/) — Calculator — the paid media budget a revenue target needs, plus the ROAS it implies
- [Average Order Value Calculator](/tools/average-order-value-calculator/) — Calculator — AOV, items per order, item price and whether your delivery threshold works
- [eCommerce Revenue Calculator](/tools/ecommerce-revenue-calculator/) — Calculator — revenue from sessions, conversion and order value, projected at your growth rate
- [Amazon FBA Profit Calculator](/tools/amazon-fba-profit-calculator/) — Calculator — profit per FBA unit after every Amazon fee, with break-even ACoS and return on cost
- [Shopify Profit Calculator](/tools/shopify-profit-calculator/) — Calculator — contribution per order and the monthly orders your plan and apps require
- [Etsy Fee Calculator](/tools/etsy-fee-calculator/) — Calculator — listing, transaction, payment processing, regulatory and Offsite Ads fees by country
- [Meta Description Generator](/tools/meta-description-generator/) — Generator — five meta description drafts with character and pixel counts and a Google snippet preview
- [Product Description Generator](/tools/product-description-generator/) — Generator — a listing title measured against marketplace limits, bullet points and two description lengths
- [Cart Abandonment Statistics](/resources/statistics/cart-abandonment/) — The abandonment rate, every stated reason, and what each one costs to fix
- [eCommerce Conversion Rate Benchmarks](/resources/statistics/ecommerce-conversion-rate/) — Conversion rate benchmarks by device, channel and category, each with its original source and year
- [The Complete Guide to Shopify SEO](/guides/shopify-seo/) — Complete guide — eight chapters on Shopify URL structure, collections, technical SEO and measurement
- [The Complete Guide to Etsy SEO](/guides/etsy-seo/) — Complete guide — eight chapters on Etsy search, tags, listing quality and the service signals
- [The Complete Guide to eCommerce Marketing](/guides/ecommerce-marketing/) — Complete guide — eight chapters on constraints, unit economics, channels, conversion, retention and measurement
- [The Complete Guide to eCommerce SEO](/guides/ecommerce-seo/) — Complete guide — eight chapters on demand mapping, category architecture, facets, product content and measurement
- [eCommerce PPC & Paid Advertising Guide](/guides/ecommerce-ppc/) — Complete guide — eight chapters on profit targets, account structure, Shopping feeds, paid social and pacing
- [eCommerce Conversion Rate Optimization Guide](/guides/ecommerce-cro/) — Complete guide — eight chapters on funnel diagnosis, category, product, checkout, speed and sized testing
- [eCommerce Customer Retention & Email Marketing Guide](/guides/customer-retention/) — Complete guide — eight chapters on customer value, cohorts, segmentation, the five flows and deliverability
- [Marketplace Selling & Growth Guide](/guides/marketplace-selling/) — Complete guide — eight chapters on channel fit, fees, listings, ranking, retail media and operations
- [International eCommerce Expansion Guide](/guides/international-expansion/) — Complete guide — eight chapters on readiness, market selection, landed cost, hreflang, localisation and logistics
- [eCommerce Growth Guide](/guides/ecommerce-growth/) — Complete guide — eight chapters on the growth equation, stages, order value, cash, forecasting and cadence
- [eCommerce Growth Assessment](/ecommerce-growth-assessment/) — Guide — the diagnosis we run before touching a budget
- [Why eCommerce Audits Find the Wrong Problem](/blog/why-ecommerce-audits-find-the-wrong-problem/) — Timing, message order and how to measure recovery honestly
- [Marketplace Launch Checklist](/blog/marketplace-expansion-checklist/) — Guide — five readiness gates before a second marketplace
- [The Product Page Standard](/blog/nine-product-page-elements-that-move-conversion/) — Guide — nine elements that move conversion, four that do not
- [Cutting Amazon ACoS](/blog/cut-amazon-acos-campaign-architecture/) — Campaign architecture that lowers cost without losing volume
- [Category Pages in eCommerce SEO](/blog/category-pages-are-undervalued-in-ecommerce-seo/) — The page layer that carries most commercial search demand
- [Getting Products Cited by AI Assistants](/blog/get-products-cited-by-ai-assistants/) — Structured data, content and review signals that make a catalogue quotable
- [The Abandoned Cart Flow Structure](/blog/abandoned-cart-flow-structure/) — Timing, message order and how to measure recovery honestly
- [Feed Optimisation in Google Shopping](/blog/feed-optimisation-google-shopping/) — Why product data decides more performance than bidding does
- [When to Outsource eCommerce Management](/blog/when-to-outsource-ecommerce-management/) — When to hire, when to appoint and when neither will help
- [Why ROAS Reports Hide Margin Problems](/blog/why-roas-reports-hide-margin-problems/) — Rebuilding reporting around contribution margin
- [The Margin Memo Newsletter](/blog/#newsletter) — A fortnightly email for eCommerce operators
- [Topic archives](/resources/#res-topics) — Seven discipline archives: operations, marketplaces, SEO, PPC, conversion, retention and AI search
- [FAQs](/faqs/) — Answers to 33 questions about how we work

### Legal & Policies (5 entries)

- [Privacy Policy](/privacy-policy/) — How we collect, use and protect personal data
- [Cookies Policy](/cookies-policy/) — Every cookie this site sets and how to control it
- [GDPR Compliance](/gdpr-compliance/) — Our obligations and your rights under the GDPR
- [Affiliate Disclaimer](/affiliate-disclaimer/) — Commercial relationships and how we disclose them
- [Site Map](/site-map/) — This page

### For Search Engines (2 entries)

- [XML Sitemap](/sitemap.xml) — Machine-readable sitemap submitted to search engines
- [robots.txt](/robots.txt) — Crawler directives for this site

## Quirks and discrepancies (kept verbatim, not smoothed over)

- **Count mismatch:** the live H2 claims `137 destinations across nine groups`, but the page actually lists **191 entries** (including repeated cross-links). Unique hrefs in the sitemap index: **182**. The clone keeps the live `137 destinations across nine groups` wording in the hero and lists all 191 entries as they appear live.
- **Duplicate entries, live:** several pages are listed twice under different groups (e.g. `eCommerce Management`, `eCommerce Marketing`, `Development & Technology`, `eCommerce Creative & Content`, `Platforms We Support` / `Platforms We Work With`, `Locations We Serve`, `Industries`, `eCommerce Growth Assessment`). The clone keeps the duplicates exactly as listed.
- **Duplicate hrefs, live:** five location entries (`Europe`, `MENA`, `APAC`, `Southeast Asia`, `Latin America`) all point to `/international-ecommerce-expansion/`; `eCommerce Agency GCC` points to `/ecommerce-agency-dubai/`. Kept as-is.
- **Inconsistencies in live copy:** `Industries We Serve` says `All ten categories` while the `Industries` entry under Proof & Expertise says `Category-specific strategy across nine verticals`, and 10 industry pages are actually listed. `Platforms We Support` says `All 21 store platforms and marketplaces` while `Platforms We Work With` says `All 16 store platforms and marketplaces we manage`; 20 platform/marketplace pages are listed. `Insights` says `Ten articles` but 10 blog/guide entries plus the newsletter are listed under Resources. Kept verbatim.
- **Phone/hours mismatch on the live page:** the visible business block shows +1 (555) 010-2400 and Mon–Fri, 9:00–18:00 CT, while the page schema shows +1 (555) 012-3456 and Mo–Su 09:00–17:00. The clone hero/CTA does not repeat either phone number.
- **No images:** the live page body contains no `<img>` elements (only small SVG icons per group). The clone previously used one generated illustrative hero image (`public/images/site-map-hero.webp`); it was removed in the 2026-11-23 fix pass (the file remains on disk, unused). No live images were copied or hotlinked.
- **Re-verified 2026-11-23 16:16 UTC** via browser.open: the crawl text was partial (only the Main Pages, Platforms & Marketplaces and Resources groups rendered), but it confirmed the live copy, counts and quirks; the full 191-entry list was re-verified against this raw-HTML extraction and the clone data (191/191 entries present after the fix pass).
- **No search/filter on the live page.** The clone adds a client-side search box (filters the 191 entries by title, description and group, with a live result count and group jump links). This is an addition, flagged here, not a live feature.
- **Product-variant block:** the live page carries a WooCommerce-style block listing `Options: Shopify / Shopify Plus, WooCommerce, Amazon Seller Central, Walmart Marketplace, eBay, Etsy, BigCommerce, Magento / Adobe Commerce, Not selling online yet`. It is store-form chrome, not page copy, and is not reproduced in the clone.
- **British spelling is used throughout the live copy** (`prioritisation`, `localisation`, `catalogue`, `optimisation`) — preserved in the clone.
- **Correction 2026-11-23 (fresh curl fetch, raw HTML):** the clone had (a) group titles as H2 and entry titles/descriptions as H3/`<p>` — live uses H3 for group titles and H6 for both entry title and description; (b) invented per-group “{n} pages” counts — live has none; (c) “All Pages” as a bold `<p>` — live has it as an icon-list `<li>` with a custom inline SVG sitemap icon (no FA class; the clone uses the closest FA equivalent `fa-solid fa-sitemap` — fetch-inferred, not render-proven); (d) the structure paragraph without bold — live bolds Services, Case Studies, Industries, Locations, About; (e) no final-CTA check list — live lists “Free 30-minute call”, “No long-term contracts”, “Actionable audit you keep” (far-check-circle icons, after the buttons); (f) no og/twitter metadata — live carries the og/twitter block recorded in Meta above. All corrected in the clone the same day; entry data (191 entries) untouched.
