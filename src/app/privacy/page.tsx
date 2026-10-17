import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice",
  description: "Braxvio privacy notice and responsible data governance framework.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-3xl">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-technical)] font-semibold">
            Governance & Trust
          </span>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight mt-2 mb-4">
            Privacy Notice
          </h1>
          <p className="text-sm text-[var(--text-tertiary)]">
            Last updated: October 2026 · Status: Operational Draft Framework
          </p>
        </div>

        <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              1. Our Data Commitment
            </h2>
            <p>
              Braxvio (&ldquo;we&rdquo;, &ldquo;us&rdquo;) treats privacy, transparency, and data integrity as fundamental engineering requirements. We do not sell, rent, or commercialize visitor data, applicant submissions, or institutional inquiries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              2. Information Collected
            </h2>
            <p>
              When you interact with our website or submit communications through our forms, we collect only the information necessary to fulfill your request:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[var(--text-secondary)]">
              <li>Contact details (name, email address, organization) provided via inquiry forms.</li>
              <li>Professional background and portfolio links submitted through talent expressions of interest.</li>
              <li>Basic diagnostic and security telemetry (such as IP addresses and request rates) solely for automated rate limiting and bot defense.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              3. Purpose and Use of Data
            </h2>
            <p>
              We process submitted data exclusively for:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[var(--text-secondary)]">
              <li>Direct response to institutional, media, enterprise, and partnership inquiries.</li>
              <li>Confidential evaluation of candidate applications and technical collaborations.</li>
              <li>Preventing denial-of-service attempts and malicious web scrapers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              4. Data Retention and Safeguards
            </h2>
            <p>
              We enforce technical safeguards to prevent unauthorized access or accidental loss. Form submissions are logged with message content redacted in runtime monitors. You may request the deletion of your submitted contact records at any time by contacting us through our inquiry portal.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              5. Venture Privacy Independence
            </h2>
            <p>
              Each independent Braxvio portfolio company maintains its own operational privacy policies and compliance documentation governing its specific end-user platforms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
