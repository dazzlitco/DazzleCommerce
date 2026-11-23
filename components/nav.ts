export type NavLink = { label: string; href: string };
export type NavGroup = { title?: string; links: NavLink[] };

export const servicesLinks: NavLink[] = [
  { label: "eCommerce Management", href: "/ecommerce-management/" },
  { label: "eCommerce Marketing", href: "/ecommerce-marketing/" },
  { label: "eCommerce SEO", href: "/ecommerce-seo/" },
  { label: "PPC & Paid Advertising", href: "/ecommerce-ppc/" },
  { label: "Conversion Optimization", href: "/conversion-rate-optimization/" },
  { label: "Email & Retention", href: "/email-retention-marketing/" },
  { label: "Development & Technology", href: "/ecommerce-development/" },
  { label: "Apps & Mobile", href: "/ecommerce-app-development/" },
  { label: "Web Design & UX", href: "/ecommerce-web-design/" },
  { label: "Creative & Content", href: "/ecommerce-creative-content/" },
  { label: "Product Photography", href: "/ecommerce-product-photography/" },
  { label: "Marketplace Management", href: "/marketplace-management-marketing/" },
  { label: "International Expansion", href: "/international-ecommerce-expansion/" },
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
  { label: "Fashion & Apparel", href: "/fashion-ecommerce-agency/" },
  { label: "Beauty & Cosmetics", href: "/beauty-ecommerce-agency/" },
  { label: "Health & Wellness", href: "/health-wellness-ecommerce-agency/" },
  { label: "Home & Furniture", href: "/home-furniture-ecommerce-agency/" },
  { label: "Electronics & Tech", href: "/electronics-ecommerce-agency/" },
  { label: "Food & Beverages", href: "/food-beverage-ecommerce-agency/" },
  { label: "Sports & Fitness", href: "/sports-fitness-ecommerce-agency/" },
  { label: "Jewelry & Accessories", href: "/jewelry-ecommerce-agency/" },
  { label: "Automotive & Parts", href: "/automotive-ecommerce-agency/" },
  { label: "B2B & Wholesale", href: "/b2b-wholesale-ecommerce-agency/" },
];

export const locationsLinks: NavLink[] = [
  { label: "United States", href: "/ecommerce-agency-usa/" },
  { label: "United Kingdom", href: "/ecommerce-agency-uk/" },
  { label: "Canada", href: "/ecommerce-agency-canada/" },
  { label: "Australia", href: "/ecommerce-agency-australia/" },
  { label: "Europe", href: "/international-ecommerce-expansion/" },
  { label: "Dubai & UAE", href: "/ecommerce-agency-dubai/" },
  { label: "India", href: "/ecommerce-agency-india/" },
  { label: "London & UK", href: "/ecommerce-agency-london/" },
  { label: "MENA", href: "/international-ecommerce-expansion/" },
  { label: "Asia Pacific", href: "/international-ecommerce-expansion/" },
  { label: "Southeast Asia", href: "/international-ecommerce-expansion/" },
  { label: "Latin America", href: "/international-ecommerce-expansion/" },
];

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
