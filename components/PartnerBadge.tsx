export type PartnerBrandKey =
  | "shopify"
  | "google"
  | "meta"
  | "amazon"
  | "linkedin"
  | "microsoft";

export const PARTNER_BRANDS: Record<
  PartnerBrandKey,
  { name: string; icon: string; color: string }
> = {
  shopify: { name: "Shopify Partners", icon: "fa-brands fa-shopify", color: "#5e8e3e" },
  google: { name: "Google Partner", icon: "fa-brands fa-google", color: "#4285f4" },
  meta: { name: "Meta Business Partner", icon: "fa-brands fa-meta", color: "#0082fb" },
  amazon: { name: "Amazon Ads Partner Network", icon: "fa-brands fa-amazon", color: "#ff9900" },
  linkedin: { name: "LinkedIn Marketing Partner", icon: "fa-brands fa-linkedin-in", color: "#0a66c2" },
  microsoft: { name: "Microsoft Advertising Partner", icon: "fa-brands fa-microsoft", color: "#00a4ef" },
};

/**
 * Partner certification badge, built in code: brand icon + partner name in a
 * bordered white card, matching the style of the generated badge images.
 * Used because the image tool declined to generate the Google/Amazon partner
 * badge graphics, so all six badges are rendered this way for consistency.
 * Live shows real brand badge graphics; these are matching stand-ins.
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
      <i className={b.icon} style={{ color: b.color }} aria-hidden="true" />
      <span>{name ?? b.name}</span>
    </div>
  );
}
