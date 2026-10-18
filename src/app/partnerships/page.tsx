import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, Radio, Network, Landmark, CheckCircle2, ShieldCheck, ExternalLink } from "lucide-react";
import { VENTURES_DATA } from "@/content/ventures";

export const metadata: Metadata = {
  title: "Strategic Partnerships & Enterprise Collaboration",
  description:
    "Explore strategic collaboration models with Braxvio. We partner with healthcare networks, telecom operators, logistics companies, and institutional co-builders to scale durable technology ventures.",
};

const PARTNERSHIP_MODELS = [
  {
    icon: Building2,
    title: "Strategic Partnership",
    badge: "Discipline 01",
    description:
      "For companies, technology providers, and organizations interested in building deep, long-term operational relationships across the Braxvio ecosystem.",
    benefits: [
      "Executive alignment on high-impact systemic challenges",
      "Shared strategic distribution and long-term co-innovation",
      "Direct technical liaison with Braxvio core engineering"
    ],
    examples: "Target: Ecosystem Leaders & Enterprises",
  },
  {
    icon: Landmark,
    title: "Investment Interest",
    badge: "Discipline 02",
    description:
      "For qualified individuals, angel syndicates, venture funds, family offices, and institutions exploring potential financial participation in Braxvio or eligible initiatives.",
    benefits: [
      "Patient institutional capital and balance sheet resilience",
      "Direct exposure to non-speculative, cash-flow durable ventures",
      "Transparent governance and rigorous auditable telemetry"
    ],
    examples: "Inquiries: admin@braxvio.com",
  },
  {
    icon: Network,
    title: "Product Partnership",
    badge: "Discipline 03",
    description:
      "Partner directly with an individual Braxvio platform—Kampus, Pharmora, Ecolift, or DevPay Africa—to expand capabilities or serve targeted communities.",
    benefits: [
      "University administration and verified hostel operator integrations for Kampus",
      "Licensed pharmacy networks and cold-chain distributors for Pharmora",
      "Municipal assemblies and fleet telemetry operators for Ecolift",
      "Pan-African Mobile Money operators and banking rails for DevPay Africa"
    ],
    examples: "Ventures: Kampus, Pharmora, Ecolift, DevPay",
  },
  {
    icon: Radio,
    title: "Technology Partnership",
    badge: "Discipline 04",
    description:
      "Infrastructure, cloud compute, payment rails, AI models, telecom APIs, identity verification, cold-chain IoT, and specialized technical integrations.",
    benefits: [
      "Direct carrier peering and sub-second USSD/OTP integrations",
      "PostgreSQL, TimescaleDB, and ClickHouse telemetry pipelines",
      "Encrypted FHIR healthcare data bridges and ISO 20022 banking APIs"
    ],
    examples: "Focus: Infrastructure & Hardware IoT",
  },
  {
    icon: Building2,
    title: "Institutional Partnership",
    badge: "Discipline 05",
    description:
      "For universities, municipal governments, ministries, non-governmental organizations, hospital networks, and financial institutions exploring research or pilot deployments.",
    benefits: [
      "Civic waste optimization and circular economy tokenization",
      "Sovereign academic identity credentials and student welfare safeguards",
      "Public health supply chain integrity and authenticated medication access"
    ],
    examples: "Civic Alliances & Public Utilities",
  },
  {
    icon: Network,
    title: "Distribution & Market Partnership",
    badge: "Discipline 06",
    description:
      "For regional distributors, retail networks, trade associations, and localized operators that can accelerate market adoption across African and international borders.",
    benefits: [
      "Established last-mile retail and pharmaceutical networks",
      "Pan-African freelance developer communities and tech hubs",
      "Cross-border liquidity corridors across West, East, and Southern Africa"
    ],
    examples: "Pan-African Distribution Channels",
  },
];

export default function PartnershipsPage() {
  const publishedVentures = VENTURES_DATA.filter(
    (v) => v.isVerified && v.isPublished && v.publicationApproved
  );

  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-5xl">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] bg-[var(--accent-technical)]/10 mb-4">
            Institutional Collaboration
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
            Co-building technology ventures designed to endure.
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal">
            Braxvio collaborates with industry leaders, telecom operators, financial institutions, and strategic co-investors to architect, pilot, and scale technology infrastructure that solves structural frictions.
          </p>
        </div>

        {/* 4 Core Collaboration Models */}
        <div className="mb-24">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
              Partnership Pathways
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Four structured ways institutions, enterprises, and operators engage with Braxvio and its venture family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNERSHIP_MODELS.map((model, idx) => {
              const Icon = model.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:border-[var(--border-strong)] transition-all shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="p-3 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent-cobalt)]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-tertiary)] border border-[var(--border-subtle)]">
                        {model.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
                      {model.title}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
                      {model.description}
                    </p>

                    <div className="space-y-2 mb-6 pt-4 border-t border-[var(--border-subtle)]">
                      {model.benefits.map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-tertiary)]">
                    <span className="font-mono">{model.examples}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Portfolio Collaboration Matrix */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-md mb-24">
          <div className="max-w-2xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
              Active Venture Collaboration Opportunities
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              Explore immediate deployment and pilot opportunities across verified Braxvio portfolio companies.
            </p>
          </div>

          <div className="divide-y divide-[var(--border-subtle)]">
            {publishedVentures.map((venture) => (
              <div
                key={venture.id}
                className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4 group"
              >
                <div className="max-w-xl">
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cobalt)] transition-colors">
                      {venture.name}
                    </h3>
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)]">
                      {venture.primaryCategory}
                    </span>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-700 dark:text-blue-300">
                      {venture.status}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                    {venture.summary}
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link
                    href={`/ventures/${venture.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border border-[var(--border-strong)] bg-[var(--surface-elevated)] hover:bg-[var(--bg-secondary)] text-[var(--text-primary)] transition-colors"
                  >
                    Inspect Profile
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    href={`/contact?venture=${encodeURIComponent(venture.name)}&type=Strategic+Partnerships`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 transition-colors shadow-xs"
                  >
                    Propose Pilot
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Principles & Integrity */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--accent-cobalt)]" />
              Sovereignty & Security
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              We uphold strict data residency, non-disclosure compliance, and enterprise security frameworks across all partner integrations.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Structural Utility
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              Every partnership must deliver quantifiable operational efficiency or economic value to end users and counterparties.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
            <h3 className="text-sm font-bold text-[var(--text-primary)] mb-2 flex items-center gap-2">
              <Landmark className="w-4 h-4 text-amber-600" />
              Long-Term Alignment
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              We design contracts, technical interfaces, and governance structures meant to operate reliably over decades.
            </p>
          </div>
        </div>

        {/* 5-Step Transparent Collaboration Pipeline from braxvio.com */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs mb-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-technical)] block mb-2">
              Transparent Convergence Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
              How Partnerships Begin
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">
              Every initiative is evaluated on strategic synergy, technical rigor, and shared long-term societal value.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4">
            <div className="p-5 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-[var(--accent-technical)] block mb-2">STEP 01</span>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">Submit</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Tell us about your organization and the collaborative initiative you envision.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-[var(--accent-technical)] block mb-2">STEP 02</span>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">Review</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Leadership assesses operational alignment and technical feasibility.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-[var(--accent-technical)] block mb-2">STEP 03</span>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">Discuss</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Introductory dialogue to align on mutual capabilities and key milestones.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-[var(--accent-technical)] block mb-2">STEP 04</span>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">Evaluate</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Both parties explore technical architecture, scope, and governance.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-semibold text-emerald-500 block mb-2">STEP 05</span>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">Build</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Sprint planning, API integration, and joint operational deployment.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="p-10 sm:p-14 rounded-3xl border border-[var(--border-strong)] bg-gradient-to-b from-[var(--surface-elevated)] to-[var(--bg-secondary)]/40 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
            Initiate a Partnership Dialogue
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-xl mx-auto mb-8 font-normal">
            Whether exploring enterprise pilot deployment, university integration with Kampus, dispensary onboarding with Pharmora, or discussing investment interest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact?type=Strategic+Partnerships"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 active:scale-[0.98] transition-all shadow-md"
            >
              Start Strategic Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/qr/V2VVDKVB7J7WL1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-[#ECFDF5] dark:bg-[#064E3B] hover:bg-[#D1FAE5] dark:hover:bg-[#065F46] border border-emerald-200 dark:border-emerald-700 active:scale-[0.98] transition-all"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
