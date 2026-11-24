import type { Metadata } from "next";
import type { ReactNode } from "react";

// Route-level metadata wrapper: page.tsx is a client component (form with
// client-side validation, localStorage persistence and a confirmation state),
// so it cannot export `metadata` itself. Title/description are the live
// page's, from clone-plan/ecommerce-audit-extraction.md.
export const metadata: Metadata = {
  title: "Free eCommerce Audit: Store, SEO, Ads & CRO | Dazzle",
  description:
    "A free eCommerce audit across store experience, SEO, paid media, conversion, retention and marketplaces, with a ranked list of what to fix first.",
};

export default function EcommerceAuditLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
