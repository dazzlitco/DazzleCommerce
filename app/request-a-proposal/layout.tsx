import type { Metadata } from "next";
import type { ReactNode } from "react";

// Route-level metadata wrapper: page.tsx is a client component (form with
// client-side validation, localStorage persistence and a confirmation state),
// so it cannot export `metadata` itself. Title/description are the live
// page's, from clone-plan/request-a-proposal-extraction.md.
export const metadata: Metadata = {
  title: "Request a Proposal | Dazzle Commerce",
  description:
    "Ask for a scoped eCommerce proposal: what it contains, what we need from you, how long it takes, and when requesting one is premature.",
};

export default function RequestProposalLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
