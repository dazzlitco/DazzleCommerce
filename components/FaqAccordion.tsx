"use client";

import { useState, type ReactNode } from "react";

export type Faq = { q: string; a: ReactNode };

// rotateIcon: when true, the toggle is always "+" inside a circle that rotates
// 45deg (into an x) and turns solid blue when open — the live nested-accordion
// behaviour (see FAQs page). Default keeps the historic "+" / "x" text toggle.
export default function FaqAccordion({
  faqs,
  rotateIcon = false,
}: {
  faqs: Faq[];
  rotateIcon?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div
          className={
            "faq-item" + (rotateIcon && openIndex === i ? " open" : "")
          }
          key={f.q}
        >
          <button
            className="faq-q"
            type="button"
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{f.q}</span>
            {rotateIcon ? (
              <span className="faq-toggle" aria-hidden="true">
                +
              </span>
            ) : (
              <span aria-hidden="true">{openIndex === i ? "×" : "+"}</span>
            )}
          </button>
          <div className="faq-a" hidden={openIndex !== i}>
            {f.a}
          </div>
        </div>
      ))}
    </div>
  );
}
