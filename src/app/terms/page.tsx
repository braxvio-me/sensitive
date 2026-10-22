import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Braxvio Technologies",
  description: "Terms governing access and interaction with the Braxvio parent company properties and subsidiary product ecosystems.",
};

export default function TermsPage() {
  return (
    <div className="pt-10 md:pt-20 pb-16 md:pb-24">
      <div className="content-container max-w-3xl">
        <header className="mb-12 pb-8 border-b border-[var(--border-subtle)]">
          <h1 className="text-[40px] sm:text-[48px] font-bold text-[var(--text-primary)] tracking-[-0.035em] leading-[1.08] mb-3">
            Terms of Service
          </h1>
          <p className="text-[15px] text-[var(--text-tertiary)]">Effective February 2025 · Accra, Ghana</p>
        </header>

        <div className="space-y-10 text-[16px] text-[var(--text-secondary)] leading-relaxed max-w-[68ch]">
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold tracking-tight text-[var(--text-primary)]">
              1. Scope of Agreement
            </h2>
            <p>
              By accessing or interacting with Braxvio Technologies websites, applications, and digital platforms, you agree to these Terms of Service. These terms apply across all parent company properties and subsidiary product ecosystems.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold tracking-tight text-[var(--text-primary)]">
              2. Product-Specific Terms & Regulatory Adherence
            </h2>
            <p>
              Individual products within the Braxvio ecosystem (such as Pharmora for clinical medication access or DevPay Africa for cross-border financial transactions) may operate under additional regulatory disclosures complying with applicable sovereign laws, including pharmacy licensing, health authority guidelines, and central banking remittances.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold tracking-tight text-[var(--text-primary)]">
              3. Intellectual Property
            </h2>
            <p>
              The Braxvio System architecture, visual identity, proprietary brand tokens, product software codebases, and digital assets are the exclusive intellectual property of Braxvio Technologies.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold tracking-tight text-[var(--text-primary)]">
              4. Direct Desk Communication
            </h2>
            <p>
              Inquiries regarding contractual agreements, regulatory licenses, or intellectual property rights should be transmitted directly to{" "}
              <a href="mailto:admin@braxvio.com" className="text-[var(--accent-text)] underline">
                admin@braxvio.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
