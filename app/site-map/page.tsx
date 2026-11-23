"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// NOTE: this file is a client component because the sitemap search filter
// needs client-side state. (A client module cannot export `metadata`; the
// page title/description from the extraction — "Site Map | Dazzle Commerce" /
// "Every page, section and article on the Dazzle Commerce website: services,
// industries, case studies, blog posts, locations and legal policies." —
// should be added via a route-level metadata wrapper if the parent wants it.)

type SitemapEntry = { title: string; href: string; desc: string };
type SitemapGroup = { title: string; id: string; entries: SitemapEntry[] };

// Full index copied word-for-word from clone-plan/site-map-extraction.md,
// which was extracted from https://dazzlecommerce.com/site-map/ on
// 2026-11-23. Order, titles, descriptions and hrefs match the live page,
// including its deliberate duplicates (pages listed under two groups).
const groups: SitemapGroup[] = [
  {
    title: "Main Pages",
    id: "main-pages",
    entries: [
      { title: "Home", href: "/", desc: "eCommerce management and marketing agency overview" },
      { title: "About Us", href: "/about-us/", desc: "Our story, team, values, certifications and milestones" },
      { title: "How We Work", href: "/how-we-work/", desc: "Onboarding, operating rhythm, prioritisation and reporting" },
      { title: "Our Technology Stack", href: "/our-technology-stack/", desc: "Nine tool categories, what each must do, and who owns every account" },
      { title: "Contact", href: "/contact/", desc: "Book a free strategy call or request a growth audit" },
      { title: "Free eCommerce Audit", href: "/ecommerce-audit/", desc: "What we audit, what you receive, how it works and the request form" },
      { title: "eCommerce Growth Assessment", href: "/ecommerce-growth-assessment/", desc: "The twelve-point framework in full, with every threshold, to run yourself" },
      { title: "Book a Strategy Call", href: "/book-a-strategy-call/", desc: "Thirty minutes with the strategist who would run your account, summary included" },
      { title: "Request a Proposal", href: "/request-a-proposal/", desc: "Scope, sequence, price and named people, written in five working days" },
      { title: "Pricing & Packages", href: "/pricing/", desc: "Package tiers, inclusions and how we scope your monthly investment" },
      { title: "Careers", href: "/careers/", desc: "Open roles, our values, hiring process and general application" },
      { title: "SEO Specialist", href: "/careers/seo-specialist/", desc: "Remote, full-time — eCommerce SEO" },
      { title: "PPC Specialist", href: "/careers/ppc-specialist/", desc: "Remote, full-time — paid media" },
      { title: "eCommerce Account Manager", href: "/careers/ecommerce-account-manager/", desc: "Remote, full-time — client success" },
      { title: "eCommerce Management", href: "/ecommerce-management/", desc: "Store, catalog, marketing, CRO, operations and reporting" },
      { title: "eCommerce Marketing", href: "/ecommerce-marketing/", desc: "Search, paid media, social, email and conversion as one plan" },
      { title: "eCommerce SEO", href: "/ecommerce-seo/", desc: "Technical, category, product and content SEO for online stores" },
      { title: "PPC & Paid Advertising", href: "/ecommerce-ppc/", desc: "Google Ads, Shopping, Performance Max, Meta and Amazon Ads" },
      { title: "Conversion Rate Optimization", href: "/conversion-rate-optimization/", desc: "Research-led CRO across product, cart and checkout" },
      { title: "Email & Retention Marketing", href: "/email-retention-marketing/", desc: "Lifecycle flows, segmentation, loyalty and win-back programs" },
      { title: "eCommerce Development & Technology", href: "/ecommerce-development/", desc: "Platform builds, migrations, integrations, speed and reliability" },
      { title: "eCommerce Creative & Content", href: "/ecommerce-creative-content/", desc: "Product imagery, ad creative, video, copywriting and listing content" },
    ],
  },
  {
    title: "Services",
    id: "services",
    entries: [
      { title: "All Services", href: "/services/", desc: "The full range of eCommerce services we deliver" },
      { title: "eCommerce Management", href: "/services/#management", desc: "Listings, catalog, operations and account management" },
      { title: "eCommerce Marketing", href: "/services/#marketing", desc: "SEO, PPC, marketplace ads, email, social and CRO" },
      { title: "Development & Technology", href: "/ecommerce-development/", desc: "Shopify, WooCommerce, migrations and performance" },
      { title: "Marketplace Management & Marketing", href: "/marketplace-management-marketing/", desc: "Account operations, listings, SEO, ads and expansion across 12 marketplaces" },
      { title: "International eCommerce Expansion", href: "/international-ecommerce-expansion/", desc: "Market selection, localisation, marketplaces and cross-border operations" },
      { title: "Creative & Content", href: "/ecommerce-creative-content/", desc: "Photography, video, A+ content and copywriting" },
      { title: "Product Photography", href: "/ecommerce-product-photography/", desc: "Catalogue, lifestyle, 360 and fit imagery, shot to channel specs" },
      { title: "eCommerce App Development", href: "/ecommerce-app-development/", desc: "Shopping apps, progressive web apps and private platform apps" },
      { title: "eCommerce Web Design", href: "/ecommerce-web-design/", desc: "UX research, templates, design systems and accessibility" },
      { title: "Platforms We Support", href: "/platforms/", desc: "All 21 store platforms and marketplaces, each with its own page" },
    ],
  },
  {
    title: "Industries",
    id: "industries",
    entries: [
      { title: "Industries We Serve", href: "/industries/", desc: "All ten categories and how the work changes in each" },
      { title: "Fashion & Apparel", href: "/fashion-ecommerce-agency/", desc: "Collections, fit and returns, season and drop calendars" },
      { title: "Beauty & Cosmetics", href: "/beauty-ecommerce-agency/", desc: "Routine merchandising, shade matching, UGC and replenishment" },
      { title: "Health & Wellness", href: "/health-wellness-ecommerce-agency/", desc: "Evidence, claim-safe advertising and subscription retention" },
      { title: "Home & Furniture", href: "/home-furniture-ecommerce-agency/", desc: "Visual discovery, dimensions and delivery experience" },
      { title: "Electronics & Technology", href: "/electronics-ecommerce-agency/", desc: "Specification data, comparison and accessory attach rate" },
      { title: "Food & Beverages", href: "/food-beverage-ecommerce-agency/", desc: "Consumption cycles, subscription and freshness logistics" },
      { title: "Sports & Fitness", href: "/sports-fitness-ecommerce-agency/", desc: "Goal-led discovery, kit building and community commerce" },
      { title: "Jewelry & Accessories", href: "/jewelry-ecommerce-agency/", desc: "Presentation, trust signals and gifting occasions" },
      { title: "Automotive & Parts", href: "/automotive-ecommerce-agency/", desc: "Vehicle fitment, catalog data and wrong-part returns" },
      { title: "B2B & Wholesale", href: "/b2b-wholesale-ecommerce-agency/", desc: "Account pricing, quoting, purchase orders and reordering" },
    ],
  },
  {
    title: "Locations",
    id: "locations",
    entries: [
      { title: "eCommerce Agency USA", href: "/ecommerce-agency-usa/", desc: "National reach with regional execution across DTC and marketplaces" },
      { title: "eCommerce Agency UK", href: "/ecommerce-agency-uk/", desc: "A mature market where delivery expectations set the baseline" },
      { title: "eCommerce Agency Canada", href: "/ecommerce-agency-canada/", desc: "Concentrated demand and cross-border US selling" },
      { title: "eCommerce Agency Australia", href: "/ecommerce-agency-australia/", desc: "Metro demand, freight economics and delivery experience" },
      { title: "eCommerce Agency Europe", href: "/international-ecommerce-expansion/", desc: "Multi-country commerce, localisation and cross-border logistics" },
      { title: "eCommerce Agency India", href: "/ecommerce-agency-india/", desc: "Store management, marketplace growth, SEO, PPC, CRO and retention, with RTO and prepaid conversion treated as revenue work" },
      { title: "eCommerce SEO London", href: "/ecommerce-agency-london/", desc: "Search, Shopify development, marketplaces, PPC, CRO and retention for established UK brands" },
      { title: "eCommerce Agency GCC", href: "/ecommerce-agency-dubai/", desc: "Gulf marketplaces, Arabic experiences and cash on delivery" },
      { title: "eCommerce Agency MENA", href: "/international-ecommerce-expansion/", desc: "Regional planning, Arabic localisation and payment trust" },
      { title: "eCommerce Agency APAC", href: "/international-ecommerce-expansion/", desc: "A fragmented region planned market by market" },
      { title: "eCommerce Agency Southeast Asia", href: "/international-ecommerce-expansion/", desc: "Shopee, Lazada, TikTok Shop and live commerce" },
      { title: "eCommerce Agency Latin America", href: "/international-ecommerce-expansion/", desc: "Marketplace-led growth and instalment payments" },
      { title: "Locations We Serve", href: "/locations-we-serve/", desc: "Every market we work in, in one place" },
    ],
  },
  {
    title: "Platforms & Marketplaces",
    id: "platforms-marketplaces",
    entries: [
      { title: "Platforms We Work With", href: "/platforms/", desc: "All 16 store platforms and marketplaces we manage" },
      { title: "Shopify", href: "/shopify-agency/", desc: "Shopify and Shopify Plus management, marketing and development" },
      { title: "WooCommerce", href: "/woocommerce-agency/", desc: "WooCommerce store management, maintenance and growth" },
      { title: "BigCommerce", href: "/bigcommerce-agency/", desc: "BigCommerce management, multi-storefront and headless work" },
      { title: "Adobe Commerce (Magento)", href: "/adobe-commerce-agency/", desc: "Adobe Commerce and Magento management, B2B and development" },
      { title: "Amazon", href: "/amazon-agency/", desc: "Account, catalog, Amazon SEO, PPC, A+ content and brand store" },
      { title: "Walmart Marketplace", href: "/walmart-marketplace-management/", desc: "Seller Center, listing quality and Walmart Connect advertising" },
      { title: "eBay", href: "/ebay-store-management/", desc: "Listing management, Promoted Listings and seller performance" },
      { title: "Etsy", href: "/etsy-shop-management/", desc: "Etsy SEO, listing creative, shop branding and Etsy Ads" },
      { title: "TikTok Shop", href: "/tiktok-shop-agency/", desc: "Creator and affiliate marketing, LIVE commerce and shop ads" },
      { title: "Daraz", href: "/daraz-seller-management/", desc: "South Asia — PK, LK, BD, NP and MM marketplace management" },
      { title: "Shopee", href: "/shopee-seller-management/", desc: "Southeast Asia — campaigns, vouchers, Shopee Ads and Live" },
      { title: "Lazada", href: "/lazada-seller-management/", desc: "Southeast Asia — Sponsored Solutions, campaigns and catalog" },
      { title: "noon", href: "/noon-seller-management/", desc: "KSA, UAE and Egypt — Seller Lab, bilingual listings and ads" },
      { title: "Jumia", href: "/jumia-seller-management/", desc: "Africa — Seller Score, catalog, advertising and campaigns" },
      { title: "AliExpress", href: "/aliexpress-seller-management/", desc: "Cross-border growth, localisation, pricing and global catalog" },
      { title: "Alibaba.com", href: "/alibaba-b2b-agency/", desc: "B2B wholesale — supplier profile, RFQ and buyer acquisition" },
      { title: "Wix", href: "/wix-agency/", desc: "Wix and Wix Studio store management, marketing, SEO, CRO and Velo development" },
      { title: "Squarespace", href: "/squarespace-agency/", desc: "Squarespace Commerce management, marketing, SEO, CRO and custom development" },
      { title: "1688", href: "/1688-b2b-agency/", desc: "Domestic Chinese wholesale — storefront, tiered pricing and inquiry handling" },
      { title: "Made-in-China", href: "/made-in-china-b2b-agency/", desc: "Export manufacturers — showroom, audit status, RFQ and buyer acquisition" },
      { title: "DHgate", href: "/dhgate-b2b-agency/", desc: "Small-lot wholesale and cross-border — lot pricing, ads and fulfilment" },
    ],
  },
  {
    title: "Proof & Expertise",
    id: "proof-expertise",
    entries: [
      { title: "Case Studies", href: "/case-studies/", desc: "Client results with the methodology behind them" },
      { title: "Industries", href: "/industries/", desc: "Category-specific strategy across nine verticals" },
      { title: "Locations We Serve", href: "/locations-we-serve/", desc: "USA, UK, Canada, Australia and the UAE" },
      { title: "Testimonials", href: "/testimonials/", desc: "Client testimonials by service, results snapshot and client stories" },
      { title: "NutriBlend review", href: "/testimonials/nutriblend-review/", desc: "Marisa Chen, VP Growth, on a brief we rejected and a delivery date that fixed the churn" },
      { title: "Vac & Vacuums review", href: "/testimonials/vac-vacuums-review/", desc: "Devin Okafor, Founder, on one catalogue behind both a price war and a returns problem" },
      { title: "Kitchenary review", href: "/testimonials/kitchenary-review/", desc: "Priya Raghavan, eCommerce Director, on revenue growing while profit stood still" },
      { title: "Lumen Atelier review", href: "/testimonials/lumen-atelier-review/", desc: "Violet Hina, Head of Growth, on three agencies restructuring an account that was never the problem" },
      { title: "Sabaa Beauty review", href: "/testimonials/sabaa-beauty-review/", desc: "Shams Al-Gharbi, Managing Director, on an Arabic menu over an English catalogue and the cost at the door" },
      { title: "Verdano Foods review", href: "/testimonials/verdano-foods-review/", desc: "William Josh, Operations Director, on quoting a longer delivery window and watching conversion rise" },
      { title: "Partners", href: "/partners/", desc: "Referral, white-label, technology and affiliate partnership programs" },
      { title: "Portfolio", href: "/portfolio/", desc: "Twelve selected engagements with baselines, work shipped and results" },
      { title: "Kitchenary case study", href: "/kitchenary-home-kitchen-shopify-usa/", desc: "Management + Shopify + Home & Furniture + USA" },
      { title: "Lumen Atelier case study", href: "/lumen-atelier-fashion-ppc-shopify-usa/", desc: "PPC + Shopify + Fashion & Apparel + USA" },
      { title: "Vac & Vacuums case study", href: "/vac-vacuums-amazon-marketplace-europe/", desc: "Marketplace + Amazon + Electronics + Europe" },
      { title: "NutriBlend case study", href: "/nutriblend-supplements-retention-uk/", desc: "Retention + WooCommerce + Wellness + UK" },
      { title: "Sabaa Beauty case study", href: "/sabaa-beauty-noon-seo-gcc/", desc: "SEO + Noon + Beauty + Gulf" },
      { title: "Verdano Foods case study", href: "/verdano-foods-bigcommerce-cro-australia/", desc: "CRO + BigCommerce + Food + Australia" },
    ],
  },
  {
    title: "Resources",
    id: "resources",
    entries: [
      { title: "Resources", href: "/resources/", desc: "Insights, guides, case studies and tools in one index" },
      { title: "Insights", href: "/blog/", desc: "Ten articles across seven eCommerce disciplines" },
      { title: "Guides", href: "/guides/", desc: "Procedures you can run yourself, published in full" },
      { title: "Comparisons", href: "/guides/comparisons/", desc: "Head-to-head platform and marketplace comparisons, with a decision at the end" },
      { title: "Shopify vs WooCommerce", href: "/guides/comparisons/shopify-vs-woocommerce/", desc: "Cost, maintenance, SEO, checkout, scale and the cost of switching later" },
      { title: "Amazon vs Walmart Marketplace", href: "/guides/comparisons/amazon-vs-walmart-marketplace/", desc: "Demand, fees, listings, advertising, fulfilment and operational load" },
      { title: "Best eCommerce Platform for SEO", href: "/guides/comparisons/best-ecommerce-platform-for-seo/", desc: "Shopify, WooCommerce, BigCommerce, Adobe Commerce, Wix and headless on URL control, facets, speed and migration risk" },
      { title: "Etsy SEO Tools Compared", href: "/guides/comparisons/etsy-seo-tools/", desc: "Six Etsy SEO tools compared on price, limits and what each is actually good at, with no affiliate links" },
      { title: "Checklists", href: "/resources/checklists/", desc: "Working checklists for SEO, conversion and marketplace listings" },
      { title: "eCommerce SEO Checklist", href: "/resources/checklists/ecommerce-seo-checklist/", desc: "Forty-two checks across indexation, architecture, product pages and content" },
      { title: "eCommerce CRO Checklist", href: "/resources/checklists/ecommerce-cro-checklist/", desc: "Forty checks on product page, basket, checkout and measurement" },
      { title: "Amazon Listing Checklist", href: "/resources/checklists/amazon-listing-checklist/", desc: "Thirty-eight checks to run before putting advertising behind a listing" },
      { title: "Shopify SEO Checklist", href: "/resources/checklists/shopify-seo-checklist/", desc: "Forty-two checks written for Shopify: duplicate paths, handles, theme speed and app bloat" },
      { title: "eCommerce Launch Checklist", href: "/resources/checklists/ecommerce-launch-checklist/", desc: "Forty-two checks before a new store takes its first order, starting with the commercial model" },
      { title: "eCommerce Migration Checklist", href: "/resources/checklists/ecommerce-migration-checklist/", desc: "Forty-two checks for a replatform, starting with the redirect map" },
      { title: "Website Audit Checklist", href: "/resources/checklists/website-audit-checklist/", desc: "Forty-two technical checks across crawlability, indexation, performance and measurement" },
      { title: "Product Page Optimization Checklist", href: "/resources/checklists/product-page-optimization-checklist/", desc: "Forty-two checks on the buying decision, imagery, copy, variants, reviews and search visibility" },
      { title: "eCommerce PPC Checklist", href: "/resources/checklists/ecommerce-ppc-checklist/", desc: "Forty-two Google Ads checks from conversion tracking through to break-even ROAS" },
      { title: "Templates", href: "/resources/templates/", desc: "Downloadable XLSX and DOCX files with working formulas" },
      { title: "Keyword Research Template", href: "/resources/templates/keyword-research-template/", desc: "Keyword list, page map and cluster workbook with opportunity scoring" },
      { title: "eCommerce KPI Dashboard Template", href: "/resources/templates/ecommerce-kpi-dashboard-template/", desc: "Monthly trading, channel mix and contribution margin workbook" },
      { title: "Product Description Template", href: "/resources/templates/product-description-template/", desc: "Structured product copy brief with specification and SEO fields" },
      { title: "eCommerce Content Calendar", href: "/resources/templates/ecommerce-content-calendar/", desc: "Fifty-two dated weeks with trading dates, content pillars and status counters" },
      { title: "Google Shopping Campaign Template", href: "/resources/templates/google-shopping-campaign-template/", desc: "Six campaign structures compared, a build sheet and the negative lists to create first" },
      { title: "eCommerce Audit Template", href: "/resources/templates/ecommerce-audit-template/", desc: "A findings workbook that scores severity, confidence and effort and ranks automatically" },
      { title: "eCommerce Marketing Plan Template", href: "/resources/templates/ecommerce-marketing-plan-template/", desc: "A nine-section plan document with a twelve-month channel budget workbook" },
      { title: "SEO Audit Template", href: "/resources/templates/seo-audit-template/", desc: "An eight-section client-facing audit report with five findings and a ninety-day sequence" },
      { title: "Product Page Brief Template", href: "/resources/templates/product-page-brief-template/", desc: "Copy, shot list, variants, proof, search requirements and twelve acceptance criteria" },
      { title: "PPC Budget Template", href: "/resources/templates/ppc-budget-template/", desc: "Campaign-level pacing with projected month-end spend and variance" },
      { title: "CRO Testing Template", href: "/resources/templates/cro-testing-template/", desc: "A test log that sizes tests before they run and judges them with a two-proportion z test" },
      { title: "Email Calendar Template", href: "/resources/templates/email-calendar-template/", desc: "A send plan with results, a nine-flow lifecycle inventory and cadence rules" },
      { title: "Marketplace Listing Template", href: "/resources/templates/marketplace-listing-template/", desc: "Listing copy with live character checks against Amazon, eBay, Walmart and Etsy limits" },
      { title: "Competitor Analysis Template", href: "/resources/templates/competitor-analysis-template/", desc: "Ten competitors across fourteen dimensions, with gap scoring and priority" },
      { title: "International Expansion Template", href: "/resources/templates/international-expansion-template/", desc: "A market selection scorecard with contribution margin and break-even ROAS per market" },
      { title: "Glossary", href: "/resources/glossary/", desc: "An A to Z of 104 eCommerce terms, defined by practitioners" },
      { title: "ROAS", href: "/resources/glossary/roas/", desc: "Return on ad spend: formula, worked example and break-even calculation" },
      { title: "ACoS", href: "/resources/glossary/acos/", desc: "Advertising cost of sale, TACoS and break-even ACoS explained" },
      { title: "Average Order Value", href: "/resources/glossary/average-order-value/", desc: "AOV: the formula, the three levers, and when raising it costs money" },
      { title: "eCommerce (definition)", href: "/resources/glossary/ecommerce/", desc: "What eCommerce covers, the models inside it and the terms that sit next to it" },
      { title: "Statistics", href: "/resources/statistics/", desc: "Sourced eCommerce market data, every figure with publisher, year and sample" },
      { title: "Tools & Calculators", href: "/tools/", desc: "Twenty free tools: Amazon FBA, Shopify and Etsy fees, revenue, margin, discounts, order value, ROAS, TACoS, ROI, lifetime value, PPC budgets, meta descriptions and product copy" },
      { title: "Break-even ROAS calculator", href: "/tools/break-even-roas-calculator/", desc: "The return on ad spend a campaign must beat before it makes money" },
      { title: "Cart abandonment calculator", href: "/tools/cart-abandonment-calculator/", desc: "What abandoned checkouts are worth, in contribution rather than revenue" },
      { title: "Break-even ACoS calculator", href: "/tools/break-even-acos-calculator/", desc: "Your Amazon break-even after referral fees and FBA, plus the TACoS equivalent" },
      { title: "eCommerce Profit Margin Calculator", href: "/tools/ecommerce-profit-margin-calculator/", desc: "Calculator — gross margin, contribution per order and net profit after marketing, from six inputs" },
      { title: "eCommerce ROI Calculator", href: "/tools/ecommerce-roi-calculator/", desc: "Calculator — return on a marketing investment using contribution, with the ROAS shown for contrast" },
      { title: "ROAS Calculator", href: "/tools/roas-calculator/", desc: "Calculator — channel, combined and blended ROAS, and how much revenue the platforms count twice" },
      { title: "Customer Acquisition Cost Calculator", href: "/tools/customer-acquisition-cost-calculator/", desc: "Calculator — blended and paid CAC, the break-even your margin supports, and payback in orders" },
      { title: "Customer Lifetime Value Calculator", href: "/tools/customer-lifetime-value-calculator/", desc: "Calculator — lifetime value on contribution, discounted to today, with the LTV to CAC ratio" },
      { title: "Conversion Rate Calculator", href: "/tools/conversion-rate-calculator/", desc: "Calculator — the headline rate plus four step rates, so the leaking step is visible" },
      { title: "Amazon TACoS Calculator", href: "/tools/amazon-tacos-calculator/", desc: "Calculator — TACoS beside ACoS and organic share, with the break-even your margin carries" },
      { title: "Discount & Profit Calculator", href: "/tools/discount-profit-calculator/", desc: "Calculator — margin after a discount and the extra volume needed to stand still" },
      { title: "LTV Calculator", href: "/tools/ltv-calculator/", desc: "Calculator — lifetime value from a repeat purchase rate, with how much lands in your horizon" },
      { title: "PPC Budget Calculator", href: "/tools/ppc-budget-calculator/", desc: "Calculator — the paid media budget a revenue target needs, plus the ROAS it implies" },
      { title: "Average Order Value Calculator", href: "/tools/average-order-value-calculator/", desc: "Calculator — AOV, items per order, item price and whether your delivery threshold works" },
      { title: "eCommerce Revenue Calculator", href: "/tools/ecommerce-revenue-calculator/", desc: "Calculator — revenue from sessions, conversion and order value, projected at your growth rate" },
      { title: "Amazon FBA Profit Calculator", href: "/tools/amazon-fba-profit-calculator/", desc: "Calculator — profit per FBA unit after every Amazon fee, with break-even ACoS and return on cost" },
      { title: "Shopify Profit Calculator", href: "/tools/shopify-profit-calculator/", desc: "Calculator — contribution per order and the monthly orders your plan and apps require" },
      { title: "Etsy Fee Calculator", href: "/tools/etsy-fee-calculator/", desc: "Calculator — listing, transaction, payment processing, regulatory and Offsite Ads fees by country" },
      { title: "Meta Description Generator", href: "/tools/meta-description-generator/", desc: "Generator — five meta description drafts with character and pixel counts and a Google snippet preview" },
      { title: "Product Description Generator", href: "/tools/product-description-generator/", desc: "Generator — a listing title measured against marketplace limits, bullet points and two description lengths" },
      { title: "Cart Abandonment Statistics", href: "/resources/statistics/cart-abandonment/", desc: "The abandonment rate, every stated reason, and what each one costs to fix" },
      { title: "eCommerce Conversion Rate Benchmarks", href: "/resources/statistics/ecommerce-conversion-rate/", desc: "Conversion rate benchmarks by device, channel and category, each with its original source and year" },
      { title: "The Complete Guide to Shopify SEO", href: "/guides/shopify-seo/", desc: "Complete guide — eight chapters on Shopify URL structure, collections, technical SEO and measurement" },
      { title: "The Complete Guide to Etsy SEO", href: "/guides/etsy-seo/", desc: "Complete guide — eight chapters on Etsy search, tags, listing quality and the service signals" },
      { title: "The Complete Guide to eCommerce Marketing", href: "/guides/ecommerce-marketing/", desc: "Complete guide — eight chapters on constraints, unit economics, channels, conversion, retention and measurement" },
      { title: "The Complete Guide to eCommerce SEO", href: "/guides/ecommerce-seo/", desc: "Complete guide — eight chapters on demand mapping, category architecture, facets, product content and measurement" },
      { title: "eCommerce PPC & Paid Advertising Guide", href: "/guides/ecommerce-ppc/", desc: "Complete guide — eight chapters on profit targets, account structure, Shopping feeds, paid social and pacing" },
      { title: "eCommerce Conversion Rate Optimization Guide", href: "/guides/ecommerce-cro/", desc: "Complete guide — eight chapters on funnel diagnosis, category, product, checkout, speed and sized testing" },
      { title: "eCommerce Customer Retention & Email Marketing Guide", href: "/guides/customer-retention/", desc: "Complete guide — eight chapters on customer value, cohorts, segmentation, the five flows and deliverability" },
      { title: "Marketplace Selling & Growth Guide", href: "/guides/marketplace-selling/", desc: "Complete guide — eight chapters on channel fit, fees, listings, ranking, retail media and operations" },
      { title: "International eCommerce Expansion Guide", href: "/guides/international-expansion/", desc: "Complete guide — eight chapters on readiness, market selection, landed cost, hreflang, localisation and logistics" },
      { title: "eCommerce Growth Guide", href: "/guides/ecommerce-growth/", desc: "Complete guide — eight chapters on the growth equation, stages, order value, cash, forecasting and cadence" },
      { title: "eCommerce Growth Assessment", href: "/ecommerce-growth-assessment/", desc: "Guide — the diagnosis we run before touching a budget" },
      { title: "Why eCommerce Audits Find the Wrong Problem", href: "/blog/why-ecommerce-audits-find-the-wrong-problem/", desc: "Timing, message order and how to measure recovery honestly" },
      { title: "Marketplace Launch Checklist", href: "/blog/marketplace-expansion-checklist/", desc: "Guide — five readiness gates before a second marketplace" },
      { title: "The Product Page Standard", href: "/blog/nine-product-page-elements-that-move-conversion/", desc: "Guide — nine elements that move conversion, four that do not" },
      { title: "Cutting Amazon ACoS", href: "/blog/cut-amazon-acos-campaign-architecture/", desc: "Campaign architecture that lowers cost without losing volume" },
      { title: "Category Pages in eCommerce SEO", href: "/blog/category-pages-are-undervalued-in-ecommerce-seo/", desc: "The page layer that carries most commercial search demand" },
      { title: "Getting Products Cited by AI Assistants", href: "/blog/get-products-cited-by-ai-assistants/", desc: "Structured data, content and review signals that make a catalogue quotable" },
      { title: "The Abandoned Cart Flow Structure", href: "/blog/abandoned-cart-flow-structure/", desc: "Timing, message order and how to measure recovery honestly" },
      { title: "Feed Optimisation in Google Shopping", href: "/blog/feed-optimisation-google-shopping/", desc: "Why product data decides more performance than bidding does" },
      { title: "When to Outsource eCommerce Management", href: "/blog/when-to-outsource-ecommerce-management/", desc: "When to hire, when to appoint and when neither will help" },
      { title: "Why ROAS Reports Hide Margin Problems", href: "/blog/why-roas-reports-hide-margin-problems/", desc: "Rebuilding reporting around contribution margin" },
      { title: "The Margin Memo Newsletter", href: "/blog/#newsletter", desc: "A fortnightly email for eCommerce operators" },
      { title: "Topic archives", href: "/resources/#res-topics", desc: "Seven discipline archives: operations, marketplaces, SEO, PPC, conversion, retention and AI search" },
      { title: "FAQs", href: "/faqs/", desc: "Answers to 33 questions about how we work" },
    ],
  },
  {
    title: "Legal & Policies",
    id: "legal-policies",
    entries: [
      { title: "Privacy Policy", href: "/privacy-policy/", desc: "How we collect, use and protect personal data" },
      { title: "Cookies Policy", href: "/cookies-policy/", desc: "Every cookie this site sets and how to control it" },
      { title: "GDPR Compliance", href: "/gdpr-compliance/", desc: "Our obligations and your rights under the GDPR" },
      { title: "Affiliate Disclaimer", href: "/affiliate-disclaimer/", desc: "Commercial relationships and how we disclose them" },
      { title: "Site Map", href: "/site-map/", desc: "This page" },
    ],
  },
  {
    title: "For Search Engines",
    id: "for-search-engines",
    entries: [
      { title: "XML Sitemap", href: "/sitemap.xml", desc: "Machine-readable sitemap submitted to search engines" },
      { title: "robots.txt", href: "/robots.txt", desc: "Crawler directives for this site" },
    ],
  },
];

const totalEntries = groups.reduce((n, g) => n + g.entries.length, 0);

export default function SiteMapPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map((g) => ({
        ...g,
        entries: g.entries.filter(
          (e) =>
            e.title.toLowerCase().includes(q) ||
            e.desc.toLowerCase().includes(q) ||
            g.title.toLowerCase().includes(q),
        ),
      }))
      .filter((g) => g.entries.length > 0);
  }, [query]);

  const shownEntries = filtered.reduce((n, g) => n + g.entries.length, 0);

  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <p className="eyebrow">Site Map</p>
              <h1>Site Map</h1>
              <p className="lead">
                Every page on this site, grouped and described. If you are
                looking for something specific and cannot find it here,{" "}
                <Link href="/contact/">tell us</Link> and we will point you at
                it.
              </p>
              <p style={{ fontWeight: 700, color: "var(--navy)", marginTop: "1rem" }}>
                All Pages
              </p>
              <h2 style={{ fontSize: "1.35rem", marginBottom: "0.5rem" }}>
                137 destinations across nine groups
              </h2>
              <p style={{ color: "var(--muted)" }}>
                Human-readable version. Search engines should use the{" "}
                <Link href="/sitemap.xml">XML sitemap</Link>.
              </p>
            </div>
            <div className="hero-img">
              <Image
                src="/images/site-map-hero.webp"
                alt="Dazzle Commerce strategists planning the structure of the website at a desk with a sitemap diagram"
                width={1200}
                height={800}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sitemap index */}
      <section className="section" style={{ paddingTop: "32px" }}>
        <div className="container">
          <label
            htmlFor="sitemap-search"
            style={{ fontWeight: 700, color: "var(--navy)", display: "block", marginBottom: "8px" }}
          >
            Search all {totalEntries} pages
          </label>
          <input
            id="sitemap-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try “Shopify”, “checklist”, “calculator”, “London”…"
            aria-label="Search the site map"
            style={{
              width: "100%",
              maxWidth: "640px",
              padding: "14px 18px",
              font: "inherit",
              border: "1px solid var(--line)",
              borderRadius: "12px",
              background: "#fff",
              color: "var(--ink)",
            }}
          />
          <p style={{ color: "var(--muted)", marginTop: "10px" }} aria-live="polite">
            {query.trim()
              ? `Showing ${shownEntries} of ${totalEntries} pages matching “${query.trim()}”.`
              : `Showing all ${totalEntries} pages across ${groups.length} groups.`}
          </p>

          {!query.trim() && (
            <div className="btn-row" style={{ marginTop: "0.5rem", marginBottom: "8px" }}>
              {groups.map((g) => (
                <a key={g.id} className="btn btn-outline" href={`#${g.id}`} style={{ padding: "8px 16px" }}>
                  {g.title}
                </a>
              ))}
            </div>
          )}

          {filtered.length === 0 && (
            <p style={{ marginTop: "32px" }}>
              Nothing matches “{query.trim()}”. Try a broader word — or{" "}
              <Link href="/contact/">tell us what you are looking for</Link>{" "}
              and we will point you at it.
            </p>
          )}

          {filtered.map((g) => (
            <div key={g.id} id={g.id} style={{ marginTop: "40px", scrollMarginTop: "96px" }}>
              <h2 style={{ marginBottom: "4px" }}>{g.title}</h2>
              <p style={{ color: "var(--muted)", marginBottom: "20px" }}>
                {g.entries.length} {g.entries.length === 1 ? "page" : "pages"}
              </p>
              <div className="card-grid card-grid-2">
                {g.entries.map((e) => (
                  <article className="card" key={`${g.id}-${e.href}-${e.title}`}>
                    <h3 style={{ fontSize: "1.05rem" }}>
                      <Link href={e.href}>{e.title}</Link>
                    </h3>
                    <p style={{ color: "var(--muted)", margin: 0 }}>{e.desc}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. How this site is structured */}
      <section className="section section-soft">
        <div className="container">
          <p className="eyebrow">Information Architecture</p>
          <h2>How this site is structured</h2>
          <p className="lead">
            The information architecture follows how eCommerce brands actually
            evaluate an agency, rather than how agencies like to describe
            themselves. Services answers what we do, Case Studies answers
            whether it works, Industries and Locations answer whether it works
            for someone like you, and About answers who would be doing it.
          </p>
          <p className="lead">
            Every page carries a unique meta title and description, a single
            H1, a logical heading hierarchy, descriptive alt text on images
            and structured data appropriate to its type — Organization and
            FAQPage on the home page, Service on the services page,
            BreadcrumbList throughout.
          </p>
          <h3 style={{ marginTop: "32px" }}>Accessibility</h3>
          <p className="lead">
            The site targets WCAG 2.1 AA: semantic landmarks, a skip link,
            visible focus states, keyboard-operable navigation and accordions,
            colour contrast checked against the palette, and full support for
            prefers-reduced-motion. If you hit an accessibility barrier, email{" "}
            <a href="mailto:hello@dazzlecommerce.com">hello@dazzlecommerce.com</a>{" "}
            and we will fix it.
          </p>
        </div>
      </section>

      {/* 4. Final CTA */}
      <section className="section section-blue final-cta">
        <div className="container">
          <h2>Found what you were looking for?</h2>
          <p style={{ color: "#fff", opacity: 0.9, maxWidth: "640px" }}>
            If not, a two-minute conversation usually beats another twenty
            minutes of clicking around.
          </p>
          <div className="btn-row">
            <Link className="btn btn-light" href="/book-a-strategy-call/">
              Book a Free Strategy Call
            </Link>
            <Link
              className="btn"
              href="/"
              style={{ background: "transparent", borderColor: "#fff" }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
