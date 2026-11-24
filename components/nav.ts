export type NavLink = { label: string; href: string; desc?: string };
export type NavGroup = { title?: string; links: NavLink[] };

export const servicesLinks: NavLink[] = [
  { label: "eCommerce Management", href: "/ecommerce-management/", desc: "Full-service store, catalog and operations management" },
  { label: "eCommerce Marketing", href: "/ecommerce-marketing/", desc: "Full-funnel growth across search, paid, social and retention" },
  { label: "eCommerce SEO", href: "/ecommerce-seo/", desc: "Organic search built around category and product demand" },
  { label: "PPC & Paid Advertising", href: "/ecommerce-ppc/", desc: "Google, Shopping, Meta and marketplace ads on profit" },
  { label: "Conversion Optimization", href: "/conversion-rate-optimization/", desc: "More revenue from the traffic you already pay for" },
  { label: "Email & Retention", href: "/email-retention-marketing/", desc: "Lifecycle flows, segmentation and repeat-purchase revenue" },
  { label: "Development & Technology", href: "/ecommerce-development/", desc: "Shopify, WooCommerce, headless builds, migrations and integrations" },
  { label: "Apps & Mobile", href: "/ecommerce-app-development/", desc: "Shopping apps, progressive web apps and private platform apps" },
  { label: "Web Design & UX", href: "/ecommerce-web-design/", desc: "UX research, templates, design systems and accessibility" },
  { label: "Creative & Content", href: "/ecommerce-creative-content/", desc: "Product imagery, ad creative, video, copy and marketplace content" },
  { label: "Product Photography", href: "/ecommerce-product-photography/", desc: "Catalogue, lifestyle and 360 imagery" },
  { label: "Marketplace Management", href: "/marketplace-management-marketing/", desc: "Amazon to Alibaba, managed" },
  { label: "International Expansion", href: "/international-ecommerce-expansion/", desc: "Market selection, localisation and cross-border growth" },
];

export const platformsLinks: NavLink[] = [
  { label: "Shopify & Plus", href: "/shopify-agency/" },
  { label: "WooCommerce", href: "/woocommerce-agency/" },
  { label: "BigCommerce", href: "/bigcommerce-agency/" },
  { label: "Adobe Commerce", href: "/adobe-commerce-agency/" },
  { label: "Wix", href: "/wix-agency/" },
  { label: "Squarespace", href: "/squarespace-agency/" },
  { label: "Amazon", href: "/amazon-agency/" },
  { label: "Walmart", href: "/walmart-marketplace-management/" },
  { label: "eBay", href: "/ebay-store-management/" },
  { label: "Etsy", href: "/etsy-shop-management/" },
  { label: "TikTok Shop", href: "/tiktok-shop-agency/" },
  { label: "AliExpress", href: "/aliexpress-seller-management/" },
  { label: "Alibaba.com", href: "/alibaba-b2b-agency/" },
  { label: "1688.com", href: "/1688-b2b-agency/" },
  { label: "Made-in-China", href: "/made-in-china-b2b-agency/" },
  { label: "DHgate", href: "/dhgate-b2b-agency/" },
  { label: "noon", href: "/noon-seller-management/" },
  { label: "Daraz", href: "/daraz-seller-management/" },
  { label: "Shopee", href: "/shopee-seller-management/" },
  { label: "Lazada", href: "/lazada-seller-management/" },
  { label: "Jumia", href: "/jumia-seller-management/" },
];

export const industriesLinks: NavLink[] = [
  { label: "Fashion & Apparel", href: "/fashion-ecommerce-agency/", desc: "Collections, fit, returns" },
  { label: "Beauty & Cosmetics", href: "/beauty-ecommerce-agency/", desc: "Routines, UGC, replenishment" },
  { label: "Health & Wellness", href: "/health-wellness-ecommerce-agency/", desc: "Trust, claims, subscription" },
  { label: "Home & Furniture", href: "/home-furniture-ecommerce-agency/", desc: "Visual discovery, delivery" },
  { label: "Electronics & Tech", href: "/electronics-ecommerce-agency/", desc: "Specs, comparison, attach rate" },
  { label: "Food & Beverages", href: "/food-beverage-ecommerce-agency/", desc: "Repeat purchase, freshness" },
  { label: "Sports & Fitness", href: "/sports-fitness-ecommerce-agency/", desc: "Goals, kit, community" },
  { label: "Jewelry & Accessories", href: "/jewelry-ecommerce-agency/", desc: "Presentation, trust, gifting" },
  { label: "Automotive & Parts", href: "/automotive-ecommerce-agency/", desc: "Fitment, catalog data" },
  { label: "B2B & Wholesale", href: "/b2b-wholesale-ecommerce-agency/", desc: "Account pricing, quoting" },
];

export const locationsLinks: NavLink[] = [
  { label: "United States", href: "/ecommerce-agency-usa/", desc: "National reach, regional plans" },
  { label: "United Kingdom", href: "/ecommerce-agency-uk/", desc: "Next-day is the baseline" },
  { label: "Canada", href: "/ecommerce-agency-canada/", desc: "Cross-border US selling" },
  { label: "Australia", href: "/ecommerce-agency-australia/", desc: "Distance and delivery" },
  { label: "Europe", href: "/international-ecommerce-expansion/", desc: "Multi-country commerce" },
  { label: "Dubai & UAE", href: "/ecommerce-agency-dubai/", desc: "Amazon, Noon and Arabic" },
  { label: "India", href: "/ecommerce-agency-india/", desc: "Amazon.in, Flipkart and D2C" },
  { label: "London & UK", href: "/ecommerce-agency-london/", desc: "eCommerce SEO and Shopify" },
  { label: "MENA", href: "/international-ecommerce-expansion/", desc: "Localisation and payments" },
  { label: "Asia Pacific", href: "/international-ecommerce-expansion/", desc: "Fragmented and marketplace-led" },
  { label: "Southeast Asia", href: "/international-ecommerce-expansion/", desc: "Shopee, Lazada, TikTok Shop" },
  { label: "Latin America", href: "/international-ecommerce-expansion/", desc: "Marketplaces and instalments" },
];

export const platformsGroups: NavGroup[] = [
  {
    title: "Storefronts",
    links: [
      { label: "Shopify & Plus", href: "/shopify-agency/" },
      { label: "WooCommerce", href: "/woocommerce-agency/" },
      { label: "BigCommerce", href: "/bigcommerce-agency/" },
      { label: "Adobe Commerce", href: "/adobe-commerce-agency/" },
      { label: "Wix", href: "/wix-agency/" },
      { label: "Squarespace", href: "/squarespace-agency/" },
    ],
  },
  {
    title: "Marketplaces",
    links: [
      { label: "Amazon", href: "/amazon-agency/" },
      { label: "Walmart", href: "/walmart-marketplace-management/" },
      { label: "eBay", href: "/ebay-store-management/" },
      { label: "Etsy", href: "/etsy-shop-management/" },
    ],
  },
  {
    title: "Social & Emerging",
    links: [
      { label: "TikTok Shop", href: "/tiktok-shop-agency/" },
      { label: "AliExpress", href: "/aliexpress-seller-management/" },
    ],
  },
  {
    title: "B2B & Wholesale",
    links: [
      { label: "Alibaba.com", href: "/alibaba-b2b-agency/" },
      { label: "1688.com", href: "/1688-b2b-agency/" },
      { label: "Made-in-China", href: "/made-in-china-b2b-agency/" },
      { label: "DHgate", href: "/dhgate-b2b-agency/" },
    ],
  },
  {
    title: "Regional MPs",
    links: [
      { label: "noon", href: "/noon-seller-management/" },
      { label: "Daraz", href: "/daraz-seller-management/" },
      { label: "Shopee", href: "/shopee-seller-management/" },
      { label: "Lazada", href: "/lazada-seller-management/" },
      { label: "Jumia", href: "/jumia-seller-management/" },
    ],
  },
];

// Footer blocks at the bottom of each live mega-menu (verified against the
// fetched homepage HTML 2026-11-23). The live Services mega-menu has NO
// footer block — only the "Free growth audit" card under "See how we work".
export type MegaFoot = {
  title: string;
  text?: string;
  bullets: string[];
  cta: NavLink;
};

export const platformsFoot: MegaFoot = {
  title: "Selling on more than one channel?",
  bullets: ["One team, one forecast", "Buy Box defence built in", "Feeds and catalog kept clean"],
  cta: { label: "See all 21 platforms", href: "/platforms/" },
};

export const industriesFoot: MegaFoot = {
  title: "Not sure your category fits?",
  text: "The constraints matter more than the label. Tell us how your category behaves and we will tell you what changes.",
  bullets: ["Category-specific playbooks", "Margin and returns modelled first", "One team across every channel"],
  cta: { label: "See all industries", href: "/industries/" },
};

export const locationsFoot: MegaFoot = {
  title: "Selling in more than one market?",
  text: "Cross-border is a fulfilment and tax decision before it is a marketing one. Tell us where you sell today and where you want to be.",
  bullets: ["Market sequencing, not scattergun launches", "Landed cost modelled before entry", "One team across every market"],
  cta: { label: "See all locations", href: "/locations-we-serve/" },
};

export const resourcesFoot: MegaFoot = {
  title: "Everything we publish, in one place",
  bullets: ["Nothing gated, no email wall", "Written by the team doing the work", "Filed by discipline, not by date"],
  cta: { label: "Open the Resources hub", href: "/resources/" },
};

export const resourcesGroups: NavGroup[] = [
  {
    title: "Learn",
    links: [
      { label: "Insights", href: "/blog/" },
      { label: "Guides", href: "/guides/" },
      { label: "Comparisons", href: "/guides/comparisons/" },
      { label: "Statistics", href: "/resources/statistics/" },
      { label: "Glossary", href: "/resources/glossary/" },
    ],
  },
  {
    title: "Do",
    links: [
      { label: "Checklists", href: "/resources/checklists/" },
      { label: "Templates", href: "/resources/templates/" },
      { label: "Tools & Calculators", href: "/tools/" },
    ],
  },
  {
    title: "Proof",
    links: [
      { label: "Case Studies", href: "/case-studies/" },
      { label: "Portfolio", href: "/portfolio/" },
      { label: "Testimonials", href: "/testimonials/" },
    ],
  },
  {
    title: "Start",
    links: [
      { label: "Growth Assessment", href: "/ecommerce-growth-assessment/" },
      { label: "Book a Strategy Call", href: "/book-a-strategy-call/" },
      { label: "Request a Proposal", href: "/request-a-proposal/" },
      { label: "Pricing", href: "/pricing/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about-us/" },
      { label: "How We Work", href: "/how-we-work/" },
      { label: "Technology Stack", href: "/our-technology-stack/" },
      { label: "Partners", href: "/partners/" },
      { label: "Careers", href: "/careers/" },
      { label: "FAQs", href: "/faqs/" },
      { label: "Site Map", href: "/site-map/" },
    ],
  },
];
