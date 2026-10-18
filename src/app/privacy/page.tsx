import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Act 843 Compliant",
  description: "Braxvio Technologies privacy policy and data protection safeguards under the Ghana Data Protection Act 2012 (Act 843).",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-3xl">
        <div className="mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-technical)] font-semibold">
            Legal Architecture // Sovereign Compliance
          </span>
          <h1 className="text-4xl font-bold text-[var(--text-primary)] tracking-tight mt-2 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xs font-mono text-[var(--text-tertiary)] bg-[var(--surface-elevated)] p-3 rounded-xl border border-[var(--border-subtle)]">
            COMPLIANT WITH DATA PROTECTION ACT 2012 (ACT 843) • ACCRA, GHANA
          </p>
        </div>

        <div className="space-y-8 text-sm text-[var(--text-secondary)] leading-relaxed">
          <section className="space-y-3 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              1. Fundamental Privacy Philosophy
            </h2>
            <p>
              Braxvio Technologies builds digital products for essential everyday systems: higher education, healthcare fulfillment, waste management, and financial payouts. We believe human data is not a corporate monetizable asset. We do not sell, rent, or trade personal data, nor do we run behavioral advertising trackers.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              2. Product-Specific Data Partitioning
            </h2>
            <p>
              Each Braxvio platform maintains isolated cryptographic data boundaries:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-xs text-[var(--text-secondary)]">
              <li><strong>Kampus:</strong> Student verification records are strictly used for authenticated housing reservations, scam prevention, and inter-campus peer trade trust.</li>
              <li><strong>Pharmora:</strong> Healthcare records and clinical prescriptions are encrypted in transit (TLS 1.3) and at rest (AES-256), accessible exclusively to authorized dispensing clinical staff under regulated health privacy protocols.</li>
              <li><strong>Ecolift:</strong> Fleet routing telemetry and citizen recycling credits record only physical weighbridge and route waypoints without tracking individuals.</li>
              <li><strong>DevPay Africa:</strong> Financial identities, contractor contracts, and banking payouts are isolated in double-entry immutable ledgers compliant with ISO 20022 and banking secrecy standards.</li>
            </ul>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
              3. Data Retention & Sovereign Deletion Rights
            </h2>
            <p>
              Users retain sovereign rights over their data. You can request a complete export or permanent cryptographic deletion of your account records at any time by contacting{" "}
              <a href="mailto:privacy@braxvio.com" className="text-[var(--accent-technical)] underline">
                privacy@braxvio.com
              </a>.
            </p>
          </section>

          <section className="space-y-3 p-6 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <h2 className="text-lg font-bold text-[var(--text-primary)]">
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
