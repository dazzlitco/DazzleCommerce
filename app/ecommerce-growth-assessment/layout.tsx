import type { Metadata } from "next";
import type { ReactNode } from "react";

// Route-level metadata wrapper: page.tsx is a server component but the
// metadata lives here to keep it next to the route. Title/description are
// the live page's, from clone-plan/ecommerce-growth-assessment-extraction.md.
export const metadata: Metadata = {
  title: "eCommerce Growth Assessment: The 12-Point Framework",
  description:
    "Run our twelve-point eCommerce growth assessment yourself. Every check, every threshold, and how to turn a list of flags into the one constraint worth fixing.",
};

export default function GrowthAssessmentLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
