import type { ReactNode } from "react";

type PillProps = {
  /** Full Font Awesome class read from the live page, e.g. "fa-solid fa-bullseye".
      Omit it for the text-only hero chips (Book a Strategy Call, Request a Proposal,
      Growth Assessment) — live renders those with no icon. */
  icon?: string;
  /** True when the live page centers this pill. */
  center?: boolean;
  /** "dark" for pills on the live site's dark navy bands (Results & Success Metrics). */
  tone?: "dark";
  children: ReactNode;
};

/**
 * Section pill, matching the live site: Title Case blue text with a small
 * leading icon inside a rounded pale-blue chip. The chip/centering styling
 * lives in `.eyebrow` / `.eyebrow-center` in app/globals.css.
 * Replaces the old text-only uppercase `<p className="eyebrow">`.
 */
export function Pill({ icon, center, tone, children }: PillProps) {
  return (
    <p className={`eyebrow${center ? " eyebrow-center" : ""}${tone === "dark" ? " eyebrow-dark" : ""}`}>
      {icon ? <i className={icon} aria-hidden="true" /> : null}
      <span>{children}</span>
    </p>
  );
}
