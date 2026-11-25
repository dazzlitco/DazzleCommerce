import PlatformLogo, { type PlatformLogoKey } from "./PlatformLogo";

export type PartnerBrandKey =
  | "shopify"
  | "google"
  | "meta"
  | "amazon"
  | "linkedin"
  | "microsoft";

export const PARTNER_BRANDS: Record<
  PartnerBrandKey,
  { name: string; icon: string; color: string; logo?: PlatformLogoKey }
> = {
  shopify: { name: "Shopify Partners", icon: "fa-brands fa-shopify", color: "#5e8e3e", logo: "shopify" },
  google: { name: "Google Partner", icon: "fa-brands fa-google", color: "#4285f4" },
  meta: { name: "Meta Business Partner", icon: "fa-brands fa-meta", color: "#0082fb" },
  amazon: { name: "Amazon Ads Partner Network", icon: "fa-brands fa-amazon", color: "#ff9900", logo: "amazon" },
  linkedin: { name: "LinkedIn Marketing Partner", icon: "fa-brands fa-linkedin-in", color: "#0a66c2" },
  microsoft: { name: "Microsoft Advertising Partner", icon: "fa-brands fa-microsoft", color: "#00a4ef" },
};

/**
 * Partner certification badge: real brand logo where Alif supplied one
 * (Shopify, Amazon), otherwise brand icon + partner name in a bordered
 * white card. Live shows real badge graphics; the icon badges remain
 * matching stand-ins.
 */
export function PartnerBadge({
  brand,
  name,
}: {
  brand: PartnerBrandKey;
  name?: string;
}) {
  const b = PARTNER_BRANDS[brand];
  return (
    <div className="partner-badge">
      {b.logo ? (
        <PlatformLogo brand={b.logo} size={30} />
      ) : (
        <i className={b.icon} style={{ color: b.color }} aria-hidden="true" />
      )}
      <span>{name ?? b.name}</span>
    </div>
  );
}
