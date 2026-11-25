# Record Register — DazzleCommerce Clone

Source: https://dazzlecommerce.com/ — sitemap_index.xml, checked 2026-11-23
Target repo: https://github.com/dazzlitco/DazzleCommerce
Tech stack: Next.js / React
Rule: one batch at a time, one page at once. No rushing, no mess.

## How to read this register

- **#** — running number across all 177 URLs, in batch order.
- **Source URL** — the live page this clone must match, word for word, section for section.
- **Clone route** — the Next.js App Router file for that page.
- **Status** — `Not started` | `In progress` | `Built — awaiting review` | `Pushed` | `Done — reviewed`
- **Pushed** — `—` until the page is pushed to GitHub after that page is built; then the commit SHA / date is recorded here.
- Every page is updated in this register **and** in `STATUS.md` when its status changes. No page is marked `Done` until Alif has reviewed it.

## Totals

| Batch | Pages | Done | Pushed |
|---|---:|---:|---:|
| Batch 1 — Core | 23 | 23 | 23 |
| Batch 2 — Services | 13 | 13 | 13 |
| Batch 3 — Platforms + Marketplaces | 22 | 0 | 0 |
| Batch 4 — Locations | 10 | 0 | 0 |
| Batch 5 — Industries | 11 | 0 | 0 |
| Batch 6 — Case Studies + Testimonials | 12 | 0 | 0 |
| Batch 7 — Tools / Guides / Resources / Careers | 75 | 0 | 0 |
| Batch 8 — Blogs | 11 | 0 | 0 |
| **Total** | **177** | **36** | **36** |

Last updated: 2026-11-24 — About Us heading-alignment fix pushed (code `c6aacea`, app/about-us/page.tsx only). 36 of 177 pages built, 36 pushed. Next: Alif checks About Us before the next page. Note (Alif, 2026-11-24): heading alignment on the other 34 built pages is fixed when each page is rebuilt one at a time — not now.

## Batch 1 — Core — 23 pages

| # | Source URL | Clone route | Category | Status | Pushed |
|---:|---|---|---|---|---|
| 1 | https://dazzlecommerce.com/ | `app/page.tsx` | Core | Pushed | `e0c3a5587f1e597ff1318082f12b90c579f97891` (2026-11-23); redone 2026-11-24: code `5f3001e`, photos `076211a` — awaiting Alif's check |
| 2 | https://dazzlecommerce.com/about-us/ | `app/about-us/page.tsx` | Core | Pushed | `22e4760e9ab1ba9bf676b7c4fda225a0afd41ba1` (2026-11-23); photos `163521c`; redone 2026-11-24: code `9c992d5`, photos `4a879a6` — awaiting Alif's check |
| 3 | https://dazzlecommerce.com/services/ | `app/services/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 4 | https://dazzlecommerce.com/contact/ | `app/contact/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 5 | https://dazzlecommerce.com/pricing/ | `app/pricing/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 6 | https://dazzlecommerce.com/how-we-work/ | `app/how-we-work/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 7 | https://dazzlecommerce.com/case-studies/ | `app/case-studies/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 8 | https://dazzlecommerce.com/portfolio/ | `app/portfolio/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 9 | https://dazzlecommerce.com/testimonials/ | `app/testimonials/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 10 | https://dazzlecommerce.com/faqs/ | `app/faqs/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 11 | https://dazzlecommerce.com/careers/ | `app/careers/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 12 | https://dazzlecommerce.com/partners/ | `app/partners/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 13 | https://dazzlecommerce.com/our-technology-stack/ | `app/our-technology-stack/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 14 | https://dazzlecommerce.com/locations-we-serve/ | `app/locations-we-serve/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 15 | https://dazzlecommerce.com/book-a-strategy-call/ | `app/book-a-strategy-call/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 16 | https://dazzlecommerce.com/request-a-proposal/ | `app/request-a-proposal/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 17 | https://dazzlecommerce.com/ecommerce-growth-assessment/ | `app/ecommerce-growth-assessment/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 18 | https://dazzlecommerce.com/ecommerce-audit/ | `app/ecommerce-audit/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 19 | https://dazzlecommerce.com/site-map/ | `app/site-map/page.tsx` | Core | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 20 | https://dazzlecommerce.com/privacy-policy/ | `app/privacy-policy/page.tsx` | Core — Legal | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 21 | https://dazzlecommerce.com/cookies-policy/ | `app/cookies-policy/page.tsx` | Core — Legal | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 22 | https://dazzlecommerce.com/gdpr-compliance/ | `app/gdpr-compliance/page.tsx` | Core — Legal | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |
| 23 | https://dazzlecommerce.com/affiliate-disclaimer/ | `app/affiliate-disclaimer/page.tsx` | Core — Legal | Pushed | `44f533637c947f26c3b54b201a40d08905b01037` (2026-11-23); photos `39d7f0c` / `7dd7095` / `bb226b6` |

## Batch 2 — Services — 13 pages

| # | Source URL | Clone route | Category | Status | Pushed |
|---:|---|---|---|---|---|
| 24 | https://dazzlecommerce.com/conversion-rate-optimization/ | `app/conversion-rate-optimization/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 25 | https://dazzlecommerce.com/ecommerce-app-development/ | `app/ecommerce-app-development/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 26 | https://dazzlecommerce.com/ecommerce-creative-content/ | `app/ecommerce-creative-content/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 27 | https://dazzlecommerce.com/ecommerce-development/ | `app/ecommerce-development/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 28 | https://dazzlecommerce.com/ecommerce-management/ | `app/ecommerce-management/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 29 | https://dazzlecommerce.com/ecommerce-marketing/ | `app/ecommerce-marketing/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 30 | https://dazzlecommerce.com/ecommerce-ppc/ | `app/ecommerce-ppc/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 31 | https://dazzlecommerce.com/ecommerce-product-photography/ | `app/ecommerce-product-photography/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 32 | https://dazzlecommerce.com/ecommerce-seo/ | `app/ecommerce-seo/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 33 | https://dazzlecommerce.com/ecommerce-web-design/ | `app/ecommerce-web-design/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 34 | https://dazzlecommerce.com/email-retention-marketing/ | `app/email-retention-marketing/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 35 | https://dazzlecommerce.com/international-ecommerce-expansion/ | `app/international-ecommerce-expansion/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |
| 36 | https://dazzlecommerce.com/marketplace-management-marketing/ | `app/marketplace-management-marketing/page.tsx` | Services | Pushed | `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1` (2026-11-23); photos `4321f96` / `7e7b3fe` / `3c6701a` |

## Batch 3 — Platforms + Marketplaces — 22 pages

| # | Source URL | Clone route | Category | Status | Pushed |
|---:|---|---|---|---|---|
| 37 | https://dazzlecommerce.com/1688-b2b-agency/ | `app/1688-b2b-agency/page.tsx` | Marketplaces | Not started | — |
| 38 | https://dazzlecommerce.com/adobe-commerce-agency/ | `app/adobe-commerce-agency/page.tsx` | Platforms | Not started | — |
| 39 | https://dazzlecommerce.com/alibaba-b2b-agency/ | `app/alibaba-b2b-agency/page.tsx` | Marketplaces | Not started | — |
| 40 | https://dazzlecommerce.com/aliexpress-seller-management/ | `app/aliexpress-seller-management/page.tsx` | Marketplaces | Not started | — |
| 41 | https://dazzlecommerce.com/amazon-agency/ | `app/amazon-agency/page.tsx` | Marketplaces | Not started | — |
| 42 | https://dazzlecommerce.com/bigcommerce-agency/ | `app/bigcommerce-agency/page.tsx` | Platforms | Not started | — |
| 43 | https://dazzlecommerce.com/daraz-seller-management/ | `app/daraz-seller-management/page.tsx` | Marketplaces | Not started | — |
| 44 | https://dazzlecommerce.com/dhgate-b2b-agency/ | `app/dhgate-b2b-agency/page.tsx` | Marketplaces | Not started | — |
| 45 | https://dazzlecommerce.com/ebay-store-management/ | `app/ebay-store-management/page.tsx` | Marketplaces | Not started | — |
| 46 | https://dazzlecommerce.com/etsy-shop-management/ | `app/etsy-shop-management/page.tsx` | Marketplaces | Not started | — |
| 47 | https://dazzlecommerce.com/jumia-seller-management/ | `app/jumia-seller-management/page.tsx` | Marketplaces | Not started | — |
| 48 | https://dazzlecommerce.com/lazada-seller-management/ | `app/lazada-seller-management/page.tsx` | Marketplaces | Not started | — |
| 49 | https://dazzlecommerce.com/made-in-china-b2b-agency/ | `app/made-in-china-b2b-agency/page.tsx` | Marketplaces | Not started | — |
| 50 | https://dazzlecommerce.com/noon-seller-management/ | `app/noon-seller-management/page.tsx` | Marketplaces | Not started | — |
| 51 | https://dazzlecommerce.com/platforms/ | `app/platforms/page.tsx` | Platforms | Not started | — |
| 52 | https://dazzlecommerce.com/shopee-seller-management/ | `app/shopee-seller-management/page.tsx` | Marketplaces | Not started | — |
| 53 | https://dazzlecommerce.com/shopify-agency/ | `app/shopify-agency/page.tsx` | Platforms | Not started | — |
| 54 | https://dazzlecommerce.com/squarespace-agency/ | `app/squarespace-agency/page.tsx` | Platforms | Not started | — |
| 55 | https://dazzlecommerce.com/tiktok-shop-agency/ | `app/tiktok-shop-agency/page.tsx` | Marketplaces | Not started | — |
| 56 | https://dazzlecommerce.com/walmart-marketplace-management/ | `app/walmart-marketplace-management/page.tsx` | Marketplaces | Not started | — |
| 57 | https://dazzlecommerce.com/wix-agency/ | `app/wix-agency/page.tsx` | Platforms | Not started | — |
| 58 | https://dazzlecommerce.com/woocommerce-agency/ | `app/woocommerce-agency/page.tsx` | Platforms | Not started | — |

## Batch 4 — Locations — 10 pages

| # | Source URL | Clone route | Category | Status | Pushed |
|---:|---|---|---|---|---|
| 59 | https://dazzlecommerce.com/ecommerce-agency-australia/ | `app/ecommerce-agency-australia/page.tsx` | Locations | Not started | — |
| 60 | https://dazzlecommerce.com/ecommerce-agency-brisbane/ | `app/ecommerce-agency-brisbane/page.tsx` | Locations | Not started | — |
| 61 | https://dazzlecommerce.com/ecommerce-agency-canada/ | `app/ecommerce-agency-canada/page.tsx` | Locations | Not started | — |
| 62 | https://dazzlecommerce.com/ecommerce-agency-dubai/ | `app/ecommerce-agency-dubai/page.tsx` | Locations | Not started | — |
| 63 | https://dazzlecommerce.com/ecommerce-agency-india/ | `app/ecommerce-agency-india/page.tsx` | Locations | Not started | — |
| 64 | https://dazzlecommerce.com/ecommerce-agency-london/ | `app/ecommerce-agency-london/page.tsx` | Locations | Not started | — |
| 65 | https://dazzlecommerce.com/ecommerce-agency-melbourne/ | `app/ecommerce-agency-melbourne/page.tsx` | Locations | Not started | — |
| 66 | https://dazzlecommerce.com/ecommerce-agency-sydney/ | `app/ecommerce-agency-sydney/page.tsx` | Locations | Not started | — |
| 67 | https://dazzlecommerce.com/ecommerce-agency-uk/ | `app/ecommerce-agency-uk/page.tsx` | Locations | Not started | — |
| 68 | https://dazzlecommerce.com/ecommerce-agency-usa/ | `app/ecommerce-agency-usa/page.tsx` | Locations | Not started | — |

## Batch 5 — Industries — 11 pages

| # | Source URL | Clone route | Category | Status | Pushed |
|---:|---|---|---|---|---|
| 69 | https://dazzlecommerce.com/automotive-ecommerce-agency/ | `app/automotive-ecommerce-agency/page.tsx` | Industries | Not started | — |
| 70 | https://dazzlecommerce.com/b2b-wholesale-ecommerce-agency/ | `app/b2b-wholesale-ecommerce-agency/page.tsx` | Industries | Not started | — |
| 71 | https://dazzlecommerce.com/beauty-ecommerce-agency/ | `app/beauty-ecommerce-agency/page.tsx` | Industries | Not started | — |
| 72 | https://dazzlecommerce.com/electronics-ecommerce-agency/ | `app/electronics-ecommerce-agency/page.tsx` | Industries | Not started | — |
| 73 | https://dazzlecommerce.com/fashion-ecommerce-agency/ | `app/fashion-ecommerce-agency/page.tsx` | Industries | Not started | — |
| 74 | https://dazzlecommerce.com/food-beverage-ecommerce-agency/ | `app/food-beverage-ecommerce-agency/page.tsx` | Industries | Not started | — |
| 75 | https://dazzlecommerce.com/health-wellness-ecommerce-agency/ | `app/health-wellness-ecommerce-agency/page.tsx` | Industries | Not started | — |
| 76 | https://dazzlecommerce.com/home-furniture-ecommerce-agency/ | `app/home-furniture-ecommerce-agency/page.tsx` | Industries | Not started | — |
| 77 | https://dazzlecommerce.com/industries/ | `app/industries/page.tsx` | Industries | Not started | — |
| 78 | https://dazzlecommerce.com/jewelry-ecommerce-agency/ | `app/jewelry-ecommerce-agency/page.tsx` | Industries | Not started | — |
| 79 | https://dazzlecommerce.com/sports-fitness-ecommerce-agency/ | `app/sports-fitness-ecommerce-agency/page.tsx` | Industries | Not started | — |

## Batch 6 — Case Studies + Testimonials — 12 pages

| # | Source URL | Clone route | Category | Status | Pushed |
|---:|---|---|---|---|---|
| 80 | https://dazzlecommerce.com/kitchenary-home-kitchen-shopify-usa/ | `app/kitchenary-home-kitchen-shopify-usa/page.tsx` | Case Studies | Not started | — |
| 81 | https://dazzlecommerce.com/lumen-atelier-fashion-ppc-shopify-usa/ | `app/lumen-atelier-fashion-ppc-shopify-usa/page.tsx` | Case Studies | Not started | — |
| 82 | https://dazzlecommerce.com/nutriblend-supplements-retention-uk/ | `app/nutriblend-supplements-retention-uk/page.tsx` | Case Studies | Not started | — |
| 83 | https://dazzlecommerce.com/sabaa-beauty-noon-seo-gcc/ | `app/sabaa-beauty-noon-seo-gcc/page.tsx` | Case Studies | Not started | — |
| 84 | https://dazzlecommerce.com/testimonials/kitchenary-review/ | `app/testimonials/kitchenary-review/page.tsx` | Testimonials | Not started | — |
| 85 | https://dazzlecommerce.com/testimonials/lumen-atelier-review/ | `app/testimonials/lumen-atelier-review/page.tsx` | Testimonials | Not started | — |
| 86 | https://dazzlecommerce.com/testimonials/nutriblend-review/ | `app/testimonials/nutriblend-review/page.tsx` | Testimonials | Not started | — |
| 87 | https://dazzlecommerce.com/testimonials/sabaa-beauty-review/ | `app/testimonials/sabaa-beauty-review/page.tsx` | Testimonials | Not started | — |
| 88 | https://dazzlecommerce.com/testimonials/vac-vacuums-review/ | `app/testimonials/vac-vacuums-review/page.tsx` | Testimonials | Not started | — |
| 89 | https://dazzlecommerce.com/testimonials/verdano-foods-review/ | `app/testimonials/verdano-foods-review/page.tsx` | Testimonials | Not started | — |
| 90 | https://dazzlecommerce.com/vac-vacuums-amazon-marketplace-europe/ | `app/vac-vacuums-amazon-marketplace-europe/page.tsx` | Case Studies | Not started | — |
| 91 | https://dazzlecommerce.com/verdano-foods-bigcommerce-cro-australia/ | `app/verdano-foods-bigcommerce-cro-australia/page.tsx` | Case Studies | Not started | — |

## Batch 7 — Tools / Guides / Resources / Careers — 75 pages

| # | Source URL | Clone route | Category | Status | Pushed |
|---:|---|---|---|---|---|
| 92 | https://dazzlecommerce.com/careers/ecommerce-account-manager/ | `app/careers/ecommerce-account-manager/page.tsx` | Careers | Not started | — |
| 93 | https://dazzlecommerce.com/careers/ppc-specialist/ | `app/careers/ppc-specialist/page.tsx` | Careers | Not started | — |
| 94 | https://dazzlecommerce.com/careers/seo-specialist/ | `app/careers/seo-specialist/page.tsx` | Careers | Not started | — |
| 95 | https://dazzlecommerce.com/guides/ | `app/guides/page.tsx` | Guides | Not started | — |
| 96 | https://dazzlecommerce.com/guides/comparisons/ | `app/guides/comparisons/page.tsx` | Guides | Not started | — |
| 97 | https://dazzlecommerce.com/guides/comparisons/amazon-vs-walmart-marketplace/ | `app/guides/comparisons/amazon-vs-walmart-marketplace/page.tsx` | Guides | Not started | — |
| 98 | https://dazzlecommerce.com/guides/comparisons/best-ecommerce-platform-for-seo/ | `app/guides/comparisons/best-ecommerce-platform-for-seo/page.tsx` | Guides | Not started | — |
| 99 | https://dazzlecommerce.com/guides/comparisons/etsy-seo-tools/ | `app/guides/comparisons/etsy-seo-tools/page.tsx` | Guides | Not started | — |
| 100 | https://dazzlecommerce.com/guides/comparisons/shopify-vs-woocommerce/ | `app/guides/comparisons/shopify-vs-woocommerce/page.tsx` | Guides | Not started | — |
| 101 | https://dazzlecommerce.com/guides/customer-retention/ | `app/guides/customer-retention/page.tsx` | Guides | Not started | — |
| 102 | https://dazzlecommerce.com/guides/ecommerce-cro/ | `app/guides/ecommerce-cro/page.tsx` | Guides | Not started | — |
| 103 | https://dazzlecommerce.com/guides/ecommerce-growth/ | `app/guides/ecommerce-growth/page.tsx` | Guides | Not started | — |
| 104 | https://dazzlecommerce.com/guides/ecommerce-marketing/ | `app/guides/ecommerce-marketing/page.tsx` | Guides | Not started | — |
| 105 | https://dazzlecommerce.com/guides/ecommerce-ppc/ | `app/guides/ecommerce-ppc/page.tsx` | Guides | Not started | — |
| 106 | https://dazzlecommerce.com/guides/ecommerce-seo/ | `app/guides/ecommerce-seo/page.tsx` | Guides | Not started | — |
| 107 | https://dazzlecommerce.com/guides/etsy-seo/ | `app/guides/etsy-seo/page.tsx` | Guides | Not started | — |
| 108 | https://dazzlecommerce.com/guides/international-expansion/ | `app/guides/international-expansion/page.tsx` | Guides | Not started | — |
| 109 | https://dazzlecommerce.com/guides/marketplace-selling/ | `app/guides/marketplace-selling/page.tsx` | Guides | Not started | — |
| 110 | https://dazzlecommerce.com/guides/shopify-seo/ | `app/guides/shopify-seo/page.tsx` | Guides | Not started | — |
| 111 | https://dazzlecommerce.com/resources/ | `app/resources/page.tsx` | Resources | Not started | — |
| 112 | https://dazzlecommerce.com/resources/checklists/ | `app/resources/checklists/page.tsx` | Resources | Not started | — |
| 113 | https://dazzlecommerce.com/resources/checklists/amazon-listing-checklist/ | `app/resources/checklists/amazon-listing-checklist/page.tsx` | Resources | Not started | — |
| 114 | https://dazzlecommerce.com/resources/checklists/ecommerce-cro-checklist/ | `app/resources/checklists/ecommerce-cro-checklist/page.tsx` | Resources | Not started | — |
| 115 | https://dazzlecommerce.com/resources/checklists/ecommerce-launch-checklist/ | `app/resources/checklists/ecommerce-launch-checklist/page.tsx` | Resources | Not started | — |
| 116 | https://dazzlecommerce.com/resources/checklists/ecommerce-migration-checklist/ | `app/resources/checklists/ecommerce-migration-checklist/page.tsx` | Resources | Not started | — |
| 117 | https://dazzlecommerce.com/resources/checklists/ecommerce-ppc-checklist/ | `app/resources/checklists/ecommerce-ppc-checklist/page.tsx` | Resources | Not started | — |
| 118 | https://dazzlecommerce.com/resources/checklists/ecommerce-seo-checklist/ | `app/resources/checklists/ecommerce-seo-checklist/page.tsx` | Resources | Not started | — |
| 119 | https://dazzlecommerce.com/resources/checklists/product-page-optimization-checklist/ | `app/resources/checklists/product-page-optimization-checklist/page.tsx` | Resources | Not started | — |
| 120 | https://dazzlecommerce.com/resources/checklists/shopify-seo-checklist/ | `app/resources/checklists/shopify-seo-checklist/page.tsx` | Resources | Not started | — |
| 121 | https://dazzlecommerce.com/resources/checklists/website-audit-checklist/ | `app/resources/checklists/website-audit-checklist/page.tsx` | Resources | Not started | — |
| 122 | https://dazzlecommerce.com/resources/glossary/ | `app/resources/glossary/page.tsx` | Resources | Not started | — |
| 123 | https://dazzlecommerce.com/resources/glossary/acos/ | `app/resources/glossary/acos/page.tsx` | Resources | Not started | — |
| 124 | https://dazzlecommerce.com/resources/glossary/average-order-value/ | `app/resources/glossary/average-order-value/page.tsx` | Resources | Not started | — |
| 125 | https://dazzlecommerce.com/resources/glossary/ecommerce/ | `app/resources/glossary/ecommerce/page.tsx` | Resources | Not started | — |
| 126 | https://dazzlecommerce.com/resources/glossary/roas/ | `app/resources/glossary/roas/page.tsx` | Resources | Not started | — |
| 127 | https://dazzlecommerce.com/resources/statistics/ | `app/resources/statistics/page.tsx` | Resources | Not started | — |
| 128 | https://dazzlecommerce.com/resources/statistics/cart-abandonment/ | `app/resources/statistics/cart-abandonment/page.tsx` | Resources | Not started | — |
| 129 | https://dazzlecommerce.com/resources/statistics/ecommerce-conversion-rate/ | `app/resources/statistics/ecommerce-conversion-rate/page.tsx` | Resources | Not started | — |
| 130 | https://dazzlecommerce.com/resources/templates/ | `app/resources/templates/page.tsx` | Resources | Not started | — |
| 131 | https://dazzlecommerce.com/resources/templates/competitor-analysis-template/ | `app/resources/templates/competitor-analysis-template/page.tsx` | Resources | Not started | — |
| 132 | https://dazzlecommerce.com/resources/templates/cro-testing-template/ | `app/resources/templates/cro-testing-template/page.tsx` | Resources | Not started | — |
| 133 | https://dazzlecommerce.com/resources/templates/ecommerce-audit-template/ | `app/resources/templates/ecommerce-audit-template/page.tsx` | Resources | Not started | — |
| 134 | https://dazzlecommerce.com/resources/templates/ecommerce-content-calendar/ | `app/resources/templates/ecommerce-content-calendar/page.tsx` | Resources | Not started | — |
| 135 | https://dazzlecommerce.com/resources/templates/ecommerce-kpi-dashboard-template/ | `app/resources/templates/ecommerce-kpi-dashboard-template/page.tsx` | Resources | Not started | — |
| 136 | https://dazzlecommerce.com/resources/templates/ecommerce-marketing-plan-template/ | `app/resources/templates/ecommerce-marketing-plan-template/page.tsx` | Resources | Not started | — |
| 137 | https://dazzlecommerce.com/resources/templates/email-calendar-template/ | `app/resources/templates/email-calendar-template/page.tsx` | Resources | Not started | — |
| 138 | https://dazzlecommerce.com/resources/templates/google-shopping-campaign-template/ | `app/resources/templates/google-shopping-campaign-template/page.tsx` | Resources | Not started | — |
| 139 | https://dazzlecommerce.com/resources/templates/international-expansion-template/ | `app/resources/templates/international-expansion-template/page.tsx` | Resources | Not started | — |
| 140 | https://dazzlecommerce.com/resources/templates/keyword-research-template/ | `app/resources/templates/keyword-research-template/page.tsx` | Resources | Not started | — |
| 141 | https://dazzlecommerce.com/resources/templates/marketplace-listing-template/ | `app/resources/templates/marketplace-listing-template/page.tsx` | Resources | Not started | — |
| 142 | https://dazzlecommerce.com/resources/templates/ppc-budget-template/ | `app/resources/templates/ppc-budget-template/page.tsx` | Resources | Not started | — |
| 143 | https://dazzlecommerce.com/resources/templates/product-description-template/ | `app/resources/templates/product-description-template/page.tsx` | Resources | Not started | — |
| 144 | https://dazzlecommerce.com/resources/templates/product-page-brief-template/ | `app/resources/templates/product-page-brief-template/page.tsx` | Resources | Not started | — |
| 145 | https://dazzlecommerce.com/resources/templates/seo-audit-template/ | `app/resources/templates/seo-audit-template/page.tsx` | Resources | Not started | — |
| 146 | https://dazzlecommerce.com/tools/ | `app/tools/page.tsx` | Tools | Not started | — |
| 147 | https://dazzlecommerce.com/tools/amazon-fba-profit-calculator/ | `app/tools/amazon-fba-profit-calculator/page.tsx` | Tools | Not started | — |
| 148 | https://dazzlecommerce.com/tools/amazon-tacos-calculator/ | `app/tools/amazon-tacos-calculator/page.tsx` | Tools | Not started | — |
| 149 | https://dazzlecommerce.com/tools/average-order-value-calculator/ | `app/tools/average-order-value-calculator/page.tsx` | Tools | Not started | — |
| 150 | https://dazzlecommerce.com/tools/break-even-acos-calculator/ | `app/tools/break-even-acos-calculator/page.tsx` | Tools | Not started | — |
| 151 | https://dazzlecommerce.com/tools/break-even-roas-calculator/ | `app/tools/break-even-roas-calculator/page.tsx` | Tools | Not started | — |
| 152 | https://dazzlecommerce.com/tools/cart-abandonment-calculator/ | `app/tools/cart-abandonment-calculator/page.tsx` | Tools | Not started | — |
| 153 | https://dazzlecommerce.com/tools/conversion-rate-calculator/ | `app/tools/conversion-rate-calculator/page.tsx` | Tools | Not started | — |
| 154 | https://dazzlecommerce.com/tools/customer-acquisition-cost-calculator/ | `app/tools/customer-acquisition-cost-calculator/page.tsx` | Tools | Not started | — |
| 155 | https://dazzlecommerce.com/tools/customer-lifetime-value-calculator/ | `app/tools/customer-lifetime-value-calculator/page.tsx` | Tools | Not started | — |
| 156 | https://dazzlecommerce.com/tools/discount-profit-calculator/ | `app/tools/discount-profit-calculator/page.tsx` | Tools | Not started | — |
| 157 | https://dazzlecommerce.com/tools/ecommerce-profit-margin-calculator/ | `app/tools/ecommerce-profit-margin-calculator/page.tsx` | Tools | Not started | — |
| 158 | https://dazzlecommerce.com/tools/ecommerce-revenue-calculator/ | `app/tools/ecommerce-revenue-calculator/page.tsx` | Tools | Not started | — |
| 159 | https://dazzlecommerce.com/tools/ecommerce-roi-calculator/ | `app/tools/ecommerce-roi-calculator/page.tsx` | Tools | Not started | — |
| 160 | https://dazzlecommerce.com/tools/etsy-fee-calculator/ | `app/tools/etsy-fee-calculator/page.tsx` | Tools | Not started | — |
| 161 | https://dazzlecommerce.com/tools/ltv-calculator/ | `app/tools/ltv-calculator/page.tsx` | Tools | Not started | — |
| 162 | https://dazzlecommerce.com/tools/meta-description-generator/ | `app/tools/meta-description-generator/page.tsx` | Tools | Not started | — |
| 163 | https://dazzlecommerce.com/tools/ppc-budget-calculator/ | `app/tools/ppc-budget-calculator/page.tsx` | Tools | Not started | — |
| 164 | https://dazzlecommerce.com/tools/product-description-generator/ | `app/tools/product-description-generator/page.tsx` | Tools | Not started | — |
| 165 | https://dazzlecommerce.com/tools/roas-calculator/ | `app/tools/roas-calculator/page.tsx` | Tools | Not started | — |
| 166 | https://dazzlecommerce.com/tools/shopify-profit-calculator/ | `app/tools/shopify-profit-calculator/page.tsx` | Tools | Not started | — |

## Batch 8 — Blogs — 11 pages

| # | Source URL | Clone route | Category | Status | Pushed |
|---:|---|---|---|---|---|
| 167 | https://dazzlecommerce.com/blog/ | `app/blog/page.tsx` | Blog | Not started | — |
| 168 | https://dazzlecommerce.com/blog/abandoned-cart-flow-structure/ | `app/blog/abandoned-cart-flow-structure/page.tsx` | Blog | Not started | — |
| 169 | https://dazzlecommerce.com/blog/category-pages-are-undervalued-in-ecommerce-seo/ | `app/blog/category-pages-are-undervalued-in-ecommerce-seo/page.tsx` | Blog | Not started | — |
| 170 | https://dazzlecommerce.com/blog/cut-amazon-acos-campaign-architecture/ | `app/blog/cut-amazon-acos-campaign-architecture/page.tsx` | Blog | Not started | — |
| 171 | https://dazzlecommerce.com/blog/feed-optimisation-google-shopping/ | `app/blog/feed-optimisation-google-shopping/page.tsx` | Blog | Not started | — |
| 172 | https://dazzlecommerce.com/blog/get-products-cited-by-ai-assistants/ | `app/blog/get-products-cited-by-ai-assistants/page.tsx` | Blog | Not started | — |
| 173 | https://dazzlecommerce.com/blog/marketplace-expansion-checklist/ | `app/blog/marketplace-expansion-checklist/page.tsx` | Blog | Not started | — |
| 174 | https://dazzlecommerce.com/blog/nine-product-page-elements-that-move-conversion/ | `app/blog/nine-product-page-elements-that-move-conversion/page.tsx` | Blog | Not started | — |
| 175 | https://dazzlecommerce.com/blog/when-to-outsource-ecommerce-management/ | `app/blog/when-to-outsource-ecommerce-management/page.tsx` | Blog | Not started | — |
| 176 | https://dazzlecommerce.com/blog/why-ecommerce-audits-find-the-wrong-problem/ | `app/blog/why-ecommerce-audits-find-the-wrong-problem/page.tsx` | Blog | Not started | — |
| 177 | https://dazzlecommerce.com/blog/why-roas-reports-hide-margin-problems/ | `app/blog/why-roas-reports-hide-margin-problems/page.tsx` | Blog | Not started | — |

## Change log

| Date | Change |
|---|---|
| 2026-11-23 | Register created from page-sitemap.xml (167 URLs) + post-sitemap.xml (10 posts) = 177 URLs. Batches confirmed by Alif. |
| 2026-11-23 | Decisions recorded: company-owned site, Next.js/React, matching images to be created, forms + all tools working, push after each page, Batch 1 confirmed. |
| 2026-11-23 | Homepage pushed, commit `e0c3a5587f1e597ff1318082f12b90c579f97891`. Text files only; 5 .webp images still to upload. |
| 2026-11-23 | Homepage photos uploaded, commit `c49cdf8` — all 5 .webp files now in `public/images/` on GitHub. |
| 2026-11-23 | About Us built and verified locally, marked Built — awaiting review. 2/177 built, 1 pushed. Not pushed to GitHub. |
| 2026-11-23 | About Us pushed, commit `22e4760e9ab1ba9bf676b7c4fda225a0afd41ba1`. Text files only; 9 .webp images still to upload. |
| 2026-11-23 | About Us photos uploaded, commit `163521c` — all 9 .webp files now in `public/images/` on GitHub. |
| 2026-11-23 | #1 Homepage (`/`) — Built — awaiting review. Next.js App Router app scaffolded, homepage built with created images, `npm run build` passes, rendered HTML verified against the live extraction. Not pushed to GitHub. |

| 2026-11-23 | Workflow changed by Alif: clone a full batch first, push and report. Do not stop after each page. Batch 1 built as one batch (pages 3–23), not pushed yet. |
| 2026-11-23 | Batch 1, #3–#23 built and verified locally, marked Built — awaiting review: Services, Contact, Pricing, How We Work, Case Studies, Portfolio, Testimonials, FAQs, Careers, Partners, Our Technology Stack, Locations We Serve, Book a Strategy Call, Request a Proposal, eCommerce Growth Assessment, eCommerce Audit, Site Map, Privacy Policy, Cookies Policy, GDPR Compliance, Affiliate Disclaimer. 23/177 built, 2 pushed. `npm run build` passes; all 23 Batch 1 routes return HTTP 200. 83 new .webp images created (97 .webp in public/images/ total). Not pushed to GitHub. |
| 2026-11-23 | Batch 1, Pages 3–23 pushed, code commit `44f533637c947f26c3b54b201a40d08905b01037`. 23/177 built, 23 pushed. |
| 2026-11-23 | Batch 1 photos uploaded, commits `39d7f0c`, `7dd7095`, `bb226b6` — all 83 new .webp files now in `public/images/` on GitHub. Batch 1 complete. |
| 2026-11-23 | Record update pushed, commit `ed06dbd` — STATUS.md and RECORD_REGISTER.md on GitHub now mark all 23 Batch 1 pages pushed. Batch 1 complete on GitHub; 23/177 built, 23/177 pushed. Next: Batch 2 — Services. |
| 2026-11-23 | Batch 2, #24–#36 built and verified locally, marked Built — awaiting review: Conversion Rate Optimization, eCommerce App Development, eCommerce Creative Content, eCommerce Development, eCommerce Management, eCommerce Marketing, eCommerce PPC, eCommerce Product Photography, eCommerce SEO, eCommerce Web Design, Email & Retention Marketing, International eCommerce Expansion, Marketplace Management & Marketing. 36/177 built, 23 pushed. `npm run build` passes; all 13 Batch 2 routes return HTTP 200. 81 new .webp images created (178 .webp in public/images/ total). Not pushed to GitHub. |
| 2026-11-23 | Batch 2 pushed, code commit `b0b7d3aeecb4c035d7ef4eae96b446ce6e819ca1`. 36/177 built, 36 pushed. |
| 2026-11-23 | Batch 2 photos uploaded, commits `4321f96`, `7e7b3fe`, `3c6701a` — all 81 new .webp files now in `public/images/` on GitHub. Batch 2 complete. |
| 2026-11-23 | Fidelity fix pass over all 36 built pages (#1–#36): invented UI removed and dropped live elements restored (see STATUS.md). `npm run build` passes, all 36 routes HTTP 200, 0 missing images. 26 new .webp images created, 31 orphaned .webp files deleted (173 .webp in public/images/ total). Pushed to GitHub: code `17cda2a`, photos `7b2fa86`, deletions (last `e89a75c`). |
| 2026-11-23 | Fidelity fix pass: all 36 pages re-audited vs live and corrected; code commit `17cda2a`; 26 new photos `7b2fa86`; 31 orphaned images deleted (last `e89a75c`). |
| 2026-11-23 | Post-fix-pass correction (local, not pushed yet): removed invented fixed side nav from International Expansion page; corrected shared header Services mega-menu to live (removed invented footer links + duplicate CTA, card link fixed to /contact/, column headings added). Verified by live desktop browser checks of dazzlecommerce.com/ecommerce-seo/ and /international-ecommerce-expansion/ 2026-11-23 11:23–11:28 AM PST. `npm run build` passes. |
| 2026-11-23 | Approved fix pass applied locally (NOT pushed yet): all 36 pages fixed per the audit-only re-audit — pill chip fix, RP 7 images + links + hero order, Growth Assessment sticky checklist sidebar, Audit select-dropdown form, Site Map/Tech Stack/Locations fixes, header tagline + skip link, icon-only footer socials, 13 new Creative Content photos, 4 new RP photos, partner badges as code badges. `npm run build` passes, all 36 routes static, 192 image refs, 0 missing. |
| 2026-11-23 | Approved fix pass pushed: code `bbf2084` (87 files), photos `e35f91f` (17 new .webp). 36/177 built, 36 pushed. |
| 2026-11-24 | Homepage REDO: one page at a time, verified against the live rendered page (cloud-browser walkthrough + local Playwright screenshots). 19 fixes applied (see STATUS.md). `npm run build` passes. |
| 2026-11-24 | Homepage redo pushed: code `5f3001e` (9 files), photos `076211a` (3 case photos replaced, 3 testimonial portraits added). `public/images/` now holds 195 files (193 .webp + 2 logos). Homepage on GitHub is the redone version; awaiting Alif's check before About Us (page 2). |
| 2026-11-24 | Dynamic hero: supplied dashboard image rebuilt as living component `components/HeroDashboard.tsx` (count-up stats, drawing charts, animated bars, floating cards, mouse tilt, clickable sidebar/products; reduced-motion respected). Verified locally: build passes, Playwright desktop + mobile screenshots, interaction test passed. Code pushed `9db6623`. |
| 2026-11-24 | Skipped hero replacement fixed: GitHub's `home-hero.webp` was still the old generated stand-in (422 KB) — the user-supplied image is now on GitHub as `home-hero.webp`, commit `94c73d5` (via intermediates `5329c1f` add + `f6860b8` delete old); hash-verified identical to the supplied file (63,912 bytes). Homepage on GitHub now shows the dynamic hero; awaiting Alif's check before About Us (page 2). |
| 2026-11-24 | Platform logos (supplied by Alif): real logos via shared `components/PlatformLogo.tsx` in the homepage Platforms section, hero dashboard tiles, and Shopify/Amazon partner badges (About Us, Partners). Walmart + TikTok keep code marks (no logo supplied). Code pushed `654e4e5`. |
| 2026-11-24 | Platform logo files uploaded, commit `bdd7839` — 5 new .webp files in `public/images/` (platform-shopify, platform-amazon, platform-woocommerce, platform-ebay, platform-etsy). Hash-verified on GitHub. `public/images/` now holds 200 files (198 .webp + 2 logos). |
| 2026-11-24 | Walmart logo (supplied by Alif): real yellow spark via `components/PlatformLogo.tsx` in the homepage Platforms section and hero dashboard tiles. All 6 platform tiles are now real logos; only TikTok keeps a code mark. Code pushed `a159623`. |
| 2026-11-24 | Walmart logo file uploaded, commit `1d56cc7` — 1 new .webp file in `public/images/` (platform-walmart). Hash-verified on GitHub. `public/images/` now holds 201 files (199 .webp + 2 logos). |
| 2026-11-24 | Hero icons (supplied by Alif): TikTok logo in the hero platform tiles + TikTok Ads row; Meta logo (cleaned of glitch blocks in the supplied file) as the Meta Ads row icon. Google logo file was corrupted beyond repair — Google Ads row keeps its "G" icon until Alif re-sends a clean file. Code pushed `6547d9c`. |
| 2026-11-24 | TikTok + Meta logo files uploaded, commit `0d2a0e1` — 2 new .webp files in `public/images/` (platform-tiktok, brand-meta). Hash-verified on GitHub. `public/images/` now holds 203 files (201 .webp + 2 logos). |
| 2026-11-24 | About Us REDO (page 2, one-page-at-a-time method): live runs A/B experiments — the first walkthrough showed variant copy, but a fresh re-check + HTML fetch confirmed the control copy, which the clone already matched. Fixes: hero pill, story bold, values icons (calendar-check, crosshairs, bullseye, eye, user-group, thumbs-up), badge names "Amazon Ads" / "Microsoft Advertising", icon team socials, oval team portraits, vertical milestones timeline with sticky image. 9 photos regenerated to match the live scenes. `npm run build` passes; Playwright screenshots verified. |
| 2026-11-24 | About Us redo pushed: code `9c992d5` (app/about-us/page.tsx, app/globals.css), photos `4a879a6` (9 .webp replaced, hash-verified on GitHub main). About Us on GitHub is now the redone version; awaiting Alif's check before the next page. |
| 2026-11-24 | Heading-alignment fix (Alif's correction: live headings are mostly centered, a few left where suitable; the clone's were not): About Us only, per live HTML + LiteSpeed CSS — centered: Our commitments, How we think (header moved out of the split into a full-width centered header, intro centered), Six disciplines, The people, Badged, FAQ, final CTA; left: How it all started (pill un-centered), The reasons clients actually give (pill un-centered), Our growth journey (pill un-centered). Homepage checked the same way and needed no change — every header already matched live (centered except hero + Why Choose Us, left). Verified: `npm run build` passes; Playwright screenshots + computed-alignment measurement of all 11 About Us and 11 homepage headers. Code pushed `c6aacea` (app/about-us/page.tsx only). The same heading fix for the other 34 built pages is deferred until each page is rebuilt one at a time, per Alif. |
