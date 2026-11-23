"use client";

import { useState } from "react";

export type Faq = { q: string; a: string };

export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <div className="faq-list">
      {faqs.map((f, i) => (
        <div className="faq-item" key={f.q}>
          <button
            className="faq-q"
            type="button"
            aria-expanded={openIndex === i}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span>{f.q}</span>
            <span aria-hidden="true">{openIndex === i ? "−" : "+"}</span>
          </button>
          <div className="faq-a" hidden={openIndex !== i}>
            <p>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
