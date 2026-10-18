import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Braxvio Technologies",
  description: "Terms governing access and interaction with the Braxvio parent company properties and subsidiary product ecosystems.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-3xl">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-technical)] font-semibold">
            Legal Architecture // Sovereign Governance
          </span>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight mt-2 mb-4">
            Terms of Service
          </h1>
          <p className="text-xs font-mono text-[var(--text-tertiary)] bg-[var(--surface-elevated)] p-3 rounded-xl border border-[var(--border-subtle)]">
            EFFECTIVE AS OF FEBRUARY 2025 • ACCRA, GHANA
          </p>
        </div>

        <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">
          <section className="space-y-3 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              1. Scope of Agreement
            </h2>
            <p>
              By accessing or interacting with Braxvio Technologies websites, applications, and digital platforms, you agree to these Terms of Service. These terms apply across all parent company properties and subsidiary product ecosystems.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              2. Product-Specific Terms & Regulatory Adherence
            </h2>
            <p>
              Individual products within the Braxvio ecosystem (such as Pharmora for clinical medication access or DevPay Africa for cross-border financial transactions) may operate under additional regulatory disclosures complying with applicable sovereign laws, including pharmacy licensing, health authority guidelines, and central banking remittances.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              3. Intellectual Property
            </h2>
            <p>
              The Braxvio System architecture, visual identity, proprietary brand tokens, product software codebases, and digital assets are the exclusive intellectual property of Braxvio Technologies.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              4. Direct Desk Communication
            </h2>
            <p>
              Inquiries regarding contractual agreements, regulatory licenses, or intellectual property rights should be transmitted directly to{" "}
              <a href="mailto:admin@braxvio.com" className="text-[var(--accent-technical)] underline">
                admin@braxvio.com
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
