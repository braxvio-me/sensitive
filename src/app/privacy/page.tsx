import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Act 843 Compliant",
  description: "Braxvio Technologies privacy policy and data protection safeguards under the Ghana Data Protection Act 2012 (Act 843).",
};

export default function PrivacyPage() {
  return (
    <div className="pt-10 md:pt-20 pb-16 md:pb-24">
      <div className="content-container max-w-3xl">
        <header className="mb-12 pb-8 border-b border-[var(--border-subtle)]">
          <h1 className="text-[40px] sm:text-[48px] font-bold text-[var(--text-primary)] tracking-[-0.035em] leading-[1.08] mb-3">
            Privacy Policy
          </h1>
          <p className="text-[15px] text-[var(--text-tertiary)]">Prepared under the Ghana Data Protection Act, 2012 (Act 843).</p>
        </header>

        <div className="space-y-10 text-[16px] text-[var(--text-secondary)] leading-relaxed max-w-[68ch]">
          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold tracking-tight text-[var(--text-primary)]">
              1. Fundamental Privacy Philosophy
            </h2>
            <p>
              Braxvio Technologies builds digital products for essential everyday systems: higher education, healthcare fulfillment, waste management, and financial payouts. We believe human data is not a corporate monetizable asset. We do not sell, rent, or trade personal data, nor do we run behavioral advertising trackers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold tracking-tight text-[var(--text-primary)]">
              2. Product-Specific Data Partitioning
            </h2>
            <p>
              Each Braxvio platform maintains isolated cryptographic data boundaries:
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-[var(--text-tertiary)]">
              <li><strong className="font-semibold text-[var(--text-primary)]">Kampus:</strong> Student verification records are strictly used for authenticated housing reservations, scam prevention, and inter-campus peer trade trust.</li>
              <li><strong className="font-semibold text-[var(--text-primary)]">Pharmora:</strong> Healthcare records and clinical prescriptions are encrypted in transit (TLS 1.3) and at rest (AES-256), accessible exclusively to authorized dispensing clinical staff under regulated health privacy protocols.</li>
              <li><strong className="font-semibold text-[var(--text-primary)]">Ecolift:</strong> Fleet routing telemetry and citizen recycling credits record only physical weighbridge and route waypoints without tracking individuals.</li>
              <li><strong className="font-semibold text-[var(--text-primary)]">DevPay Africa:</strong> Financial identities, contractor contracts, and banking payouts are isolated in double-entry immutable ledgers compliant with ISO 20022 and banking secrecy standards.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold tracking-tight text-[var(--text-primary)]">
              3. Data Retention & Sovereign Deletion Rights
            </h2>
            <p>
              Users retain sovereign rights over their data. You can request a complete export or permanent cryptographic deletion of your account records at any time by contacting{" "}
              <a href="mailto:privacy@braxvio.com" className="text-[var(--accent-text)] underline">
                privacy@braxvio.com
              </a>.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-[20px] font-semibold tracking-tight text-[var(--text-primary)]">
              4. Institutional Security Standards
            </h2>
            <p>
              We enforce role-based vaults, hardware security modules, multi-factor authentication, and tamper-evident operational audit logs ensuring complete tracing of any state modification.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
