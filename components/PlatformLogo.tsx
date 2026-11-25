import Image from "next/image";

export type PlatformLogoKey =
  | "shopify"
  | "amazon"
  | "woocommerce"
  | "walmart"
  | "ebay"
  | "etsy"
  | "tiktok";

const LOGOS: Partial<
  Record<PlatformLogoKey, { src: string; width: number; height: number; alt: string }>
> = {
  shopify: { src: "/images/platform-shopify.webp", width: 468, height: 512, alt: "Shopify" },
  amazon: { src: "/images/platform-amazon.webp", width: 512, height: 512, alt: "Amazon" },
  woocommerce: { src: "/images/platform-woocommerce.webp", width: 860, height: 512, alt: "WooCommerce" },
  ebay: { src: "/images/platform-ebay.webp", width: 468, height: 512, alt: "eBay" },
  etsy: { src: "/images/platform-etsy.webp", width: 512, height: 512, alt: "Etsy" },
  walmart: { src: "/images/platform-walmart.webp", width: 474, height: 513, alt: "Walmart" },
};

/**
 * Real platform logos supplied by Alif (2026-11-24), used everywhere a
 * platform mark renders: homepage "Platforms We Work With", the hero
 * dashboard tiles, and the Shopify/Amazon partner badges.
 * TikTok has no supplied logo, so it keeps its closest code mark.
 */
export default function PlatformLogo({
  brand,
  size = 44,
}: {
  brand: PlatformLogoKey;
  size?: number;
}) {
  const logo = LOGOS[brand];
  if (logo) {
    return (
      <Image
        src={logo.src}
        alt={logo.alt}
        width={logo.width}
        height={logo.height}
        className="platform-logo"
        style={{ height: size, width: "auto" }}
      />
    );
  }
  if (brand === "tiktok") {
    return (
      <i className="fa-brands fa-tiktok" style={{ color: "#111827" }} aria-hidden="true" />
    );
  }
  return null;
}
