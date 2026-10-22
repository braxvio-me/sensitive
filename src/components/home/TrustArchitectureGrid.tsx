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

// Hairline column dividers: 2 columns from `sm`, 4 from `lg`
const PILLAR_LAYOUT = [
  "sm:pr-6 lg:pr-8",
  "sm:pl-6 sm:border-l lg:px-8",
  "sm:pr-6 lg:px-8 lg:border-l",
  "sm:pl-6 sm:border-l lg:pl-8 lg:pr-0",
];

export function TrustArchitectureGrid() {
  return (
    <section className="py-16 md:py-28 bg-[var(--bg-primary)]">
      <div className="content-container">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-[30px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
            Built for longevity. Engineered for trust.
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-relaxed">
            Enterprise partners and institutional stakeholders rely on Braxvio ventures for mission-critical infrastructure across developing markets.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 pt-10 border-t border-[var(--border-subtle)]">
          {TRUST_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <li key={pillar.title} className={PILLAR_LAYOUT[idx]}>
                <Icon className="w-5 h-5 text-[var(--accent-text)] mb-4" strokeWidth={1.75} />
                <h3 className="text-[17px] font-semibold text-[var(--text-primary)] tracking-tight mb-2">{pillar.title}</h3>
                <p className="text-[14.5px] text-[var(--text-secondary)] leading-relaxed">{pillar.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
