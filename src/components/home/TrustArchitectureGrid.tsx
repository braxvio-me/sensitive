import React from "react";
import { KeyRound, ShieldCheck, Database, Landmark } from "lucide-react";

const TRUST_PILLARS = [
  {
    icon: KeyRound,
    title: "Cryptographic Provenance",
    description: "Every pharmaceutical batch, cross-border payment, and carrier transaction carries end-to-end cryptographic audit trails.",
  },
  {
    icon: ShieldCheck,
    title: "Institutional Governance",
    description: "Rigorous venture vetting and separation of corporate liabilities ensure long-term operational and regulatory compliance.",
  },
  {
    icon: Database,
    title: "Sovereign Data Storage",
    description: "Critical enterprise records and applicant submissions are processed locally with strict adherence to regional privacy frameworks.",
  },
  {
    icon: Landmark,
    title: "Sustainable Unit Economics",
    description: "Our ventures are built on genuine commercial utility and positive unit economics, deliberately rejecting speculative hype cycles.",
  },
];

export function TrustArchitectureGrid() {
  return (
    <section className="py-20 bg-[var(--bg-primary)]">
      <div className="content-container">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Built for longevity. Engineered for trust.
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">
            Enterprise partners and institutional stakeholders rely on Braxvio ventures for mission-critical infrastructure across developing markets.
          </p>
        </div>

        {/* 4-Column Grid matching reference ui/desktop-full (1).png */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="flex flex-col gap-3 p-5 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]/60 hover:bg-[var(--surface-elevated)] transition-colors"
              >
                <div className="text-[var(--accent-cobalt)] mb-1">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
