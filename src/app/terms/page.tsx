import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing the use of the Braxvio parent company website.",
};

export default function TermsPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-3xl">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-technical)] font-semibold">
            Institutional Terms
          </span>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight mt-2 mb-4">
            Terms of Use
          </h1>
          <p className="text-sm text-[var(--text-tertiary)]">
            Last updated: October 2026 · Status: Operational Draft Framework
          </p>
        </div>

        <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing the Braxvio website (&ldquo;the Site&rdquo;), you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please refrain from using the Site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              2. Informational Purpose and Portfolio Accuracy
            </h2>
            <p>
              The content provided on this Site is for informational purposes regarding Braxvio and its venture portfolio. While Braxvio applies rigorous verification standards to ensure that publicly listed ventures and architectural specifications are truthful and up to date, portfolio statuses and development phases remain subject to ongoing technical iteration.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              3. Intellectual Property
            </h2>
            <p>
              All trademarks, design systems, editorial texts, brand assets, and architectural content displayed on this website are the proprietary property of Braxvio or its respective venture entities. Unauthorized reproduction, modification, or commercial exploitation is prohibited without prior written consent.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              4. Permissible Use
            </h2>
            <p>
              You agree not to misuse the Site, including attempting to gain unauthorized access to underlying server endpoints, transmitting malicious payloads through contact interfaces, or engaging in automated denial-of-service activities.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              5. Governing Contact
            </h2>
            <p>
              Questions regarding these Terms should be submitted through our inquiry portal on the Contact page.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
