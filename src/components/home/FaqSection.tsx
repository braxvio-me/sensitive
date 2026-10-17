"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "What is Braxvio's relationship to its ventures?",
    answer: "Braxvio is an active technology parent company, not a hands-off holding syndicate. We initiate, architect, and co-build our ventures from inception. Each venture operates with dedicated product focus and appropriate autonomy while sharing Braxvio's engineering standards, technical infrastructure, and long-term capital discipline.",
  },
  {
    question: "Is Braxvio a venture capital fund, a software agency, or an operating parent company?",
    answer: "Braxvio is a technology parent company. We do not operate as a traditional third-party software agency for hire, nor are we a passive venture capital fund. We originate and construct enduring technology businesses across consumer platforms, enterprise software, and emerging technology.",
  },
  {
    question: "How does Braxvio select and initiate new technology ventures?",
    answer: "We evaluate structural market inefficiencies across developing and international markets—such as pharmaceutical supply fragmentation, cross-border engineering payments, and telecom routing reliability. Ventures are approved only when they demonstrate clear utility, viable unit economics, and durable multi-decade necessity.",
  },
  {
    question: "What does 'Founded in Africa, Built with a global horizon' mean in practice?",
    answer: "Our origins and engineering leadership are grounded in Africa, solving real foundational problems on the continent. However, our engineering quality, security architecture, and business models are constructed to meet international standards and expand into global markets without technical compromises.",
  },
  {
    question: "How does Braxvio safeguard publication accuracy across its portfolio?",
    answer: "Braxvio enforces strict data governance and publication safeguards. Unverified prototypes, speculative metrics, or unconfirmed partnerships are barred from public disclosure. Our public directory lists only verified, publication-approved venture profiles.",
  },
  {
    question: "How can enterprise partners, investors, or talent collaborate with Braxvio?",
    answer: "We welcome thoughtful conversations with enterprise collaborators, institutional co-builders, researchers, and senior engineers. Inquiries can be submitted directly through our secure routing portal on the Contact page.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="content-container max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[var(--text-primary)] tracking-tight mb-14">
          Frequently Asked Questions
        </h2>

        {/* Clean Accordion List matching ui/faq-desktop.png */}
        <div className="divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-5">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-cobalt)] rounded-lg p-1"
                >
                  <span className="text-[17px] sm:text-[18px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-cobalt)] transition-colors pr-6">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[var(--text-tertiary)] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-[var(--accent-cobalt)]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pt-3 pb-2 text-[15px] text-[var(--text-secondary)] leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
