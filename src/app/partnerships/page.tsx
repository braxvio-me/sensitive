import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Building2, Radio, Network, Landmark, Check, MessageCircle } from "lucide-react";
import { getPublishedVentures } from "@/content/ventures";
import { VentureStatus } from "@/components/ui/VentureStatus";

export const metadata: Metadata = {
  title: "Strategic Partnerships & Enterprise Collaboration",
  description:
    "Explore strategic collaboration models with Braxvio. We partner with healthcare networks, telecom operators, logistics companies, and institutional co-builders to scale durable technology ventures.",
};

const PARTNERSHIP_MODELS = [
  {
    icon: Building2,
    title: "Strategic Partnership",
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


const PARTNERSHIP_PRINCIPLES = [
  {
    title: "Sovereignty & Security",
    description: "We uphold strict data residency, non-disclosure compliance, and enterprise security frameworks across all partner integrations.",
  },
  {
    title: "Structural Utility",
    description: "Every partnership must deliver quantifiable operational efficiency or economic value to end users and counterparties.",
  },
  {
    title: "Long-Term Alignment",
    description: "We design contracts, technical interfaces, and governance structures meant to operate reliably over decades.",
  },
];

const PARTNERSHIP_STEPS = [
  { title: "Submit", description: "Tell us about your organization and the collaborative initiative you envision." },
  { title: "Review", description: "Leadership assesses operational alignment and technical feasibility." },
  { title: "Discuss", description: "Introductory dialogue to align on mutual capabilities and key milestones." },
  { title: "Evaluate", description: "Both parties explore technical architecture, scope, and governance." },
  { title: "Build", description: "Sprint planning, API integration, and joint operational deployment." },
];

export default function PartnershipsPage() {
  const publishedVentures = getPublishedVentures();

  return (
    <div className="pt-10 md:pt-20 pb-16 md:pb-24">
      <div className="content-container max-w-5xl">
        {/* Header */}
        <header className="max-w-3xl mb-16 md:mb-24">
          <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-bold text-[var(--text-primary)] tracking-[-0.035em] leading-[1.06] mb-6">
            Co-building technology ventures designed to endure.
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[var(--text-secondary)] leading-relaxed">
            Braxvio collaborates with industry leaders, telecom operators, financial institutions, and strategic co-investors to architect, pilot, and scale technology infrastructure that solves structural frictions.
          </p>
        </header>

        {/* Collaboration Models */}
        <section className="mb-14 md:mb-28">
          <div className="mb-10">
            <h2 className="text-[30px] sm:text-[36px] font-bold text-[var(--text-primary)] tracking-tight mb-3">
              Partnership Pathways
            </h2>
            <p className="text-[17px] text-[var(--text-secondary)]">
              Six structured ways institutions, enterprises, and operators engage with Braxvio and its venture family.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PARTNERSHIP_MODELS.map((model) => {
              const Icon = model.icon;
              return (
                <article
                  key={model.title}
                  className="flex flex-col p-6 sm:p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-5 h-5 text-[var(--accent-text)] shrink-0" strokeWidth={1.75} />
                    <h3 className="text-[19px] font-semibold text-[var(--text-primary)] tracking-tight">{model.title}</h3>
                  </div>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-5">{model.description}</p>

                  <ul className="space-y-2.5 mb-6">
                    {model.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-[14px] text-[var(--text-secondary)] leading-snug">
                        <Check className="w-4 h-4 text-[var(--accent-text)] shrink-0 mt-px" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-auto pt-4 border-t border-[var(--border-subtle)] text-[13.5px] text-[var(--text-tertiary)]">
                    {model.examples}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        {/* Portfolio Collaboration Matrix */}
        <section className="mb-14 md:mb-28">
          <div className="max-w-2xl mb-8">
            <h2 className="text-[30px] sm:text-[36px] font-bold text-[var(--text-primary)] tracking-tight mb-3">
              Active Venture Collaboration Opportunities
            </h2>
            <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed">
              Explore immediate deployment and pilot opportunities across verified Braxvio portfolio companies.
            </p>
          </div>

          <ul className="border-t border-[var(--border-strong)]">
            {publishedVentures.map((venture) => (
              <li
                key={venture.id}
                className="py-6 border-b border-[var(--border-subtle)] flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                <div className="max-w-xl">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-1.5">
                    <h3 className="text-[19px] font-semibold text-[var(--text-primary)] tracking-tight">{venture.name}</h3>
                    <span className="text-[13px] text-[var(--text-tertiary)]">{venture.primaryCategory}</span>
                    <VentureStatus status={venture.status} />
                  </div>
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{venture.summary}</p>
                </div>

                <div className="flex items-center gap-5 shrink-0">
                  <Link href={`/ventures/${venture.slug}`} className="link-accent text-[14px]">
                    View profile
                  </Link>
                  <Link
                    href={`/contact?venture=${encodeURIComponent(venture.name)}&type=Strategic+Partnerships`}
                    className="btn btn-secondary btn-sm"
                  >
                    Propose Pilot
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Partnership Principles & Integrity */}
        <section className="mb-14 md:mb-28">
          <h2 className="text-[30px] sm:text-[36px] font-bold text-[var(--text-primary)] tracking-tight mb-10">
            What every partnership must hold to
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-8">
            {PARTNERSHIP_PRINCIPLES.map((principle) => (
              <li key={principle.title} className="pt-5 border-t border-[var(--border-strong)]">
                <h3 className="text-[17px] font-semibold text-[var(--text-primary)] tracking-tight mb-2">{principle.title}</h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{principle.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* 5-Step Transparent Collaboration Pipeline from braxvio.com */}
        <section className="mb-14 md:mb-28">
          <div className="max-w-2xl mb-10">
            <h2 className="text-[30px] sm:text-[36px] font-bold text-[var(--text-primary)] tracking-tight mb-3">
              How Partnerships Begin
            </h2>
            <p className="text-[17px] text-[var(--text-secondary)]">
              Every initiative is evaluated on strategic synergy, technical rigor, and shared long-term societal value.
            </p>
          </div>

          {/* Steps connect on one line on desktop, stack with a rail on mobile */}
          <ol className="grid grid-cols-1 sm:grid-cols-5 gap-8 sm:gap-6">
            {PARTNERSHIP_STEPS.map((step, idx) => (
              <li key={step.title} className="relative flex sm:flex-col gap-4 sm:gap-0">
                {/* Connector to the next step's marker (down on mobile, across from sm) */}
                {idx < PARTNERSHIP_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[15px] top-8 -bottom-8 w-px sm:left-8 sm:-right-6 sm:top-[15px] sm:bottom-auto sm:w-auto sm:h-px bg-[var(--border-strong)]"
                  />
                )}
                <span className="relative z-10 grid place-items-center size-8 rounded-full border border-[var(--border-strong)] bg-[var(--bg-primary)] text-[13px] font-semibold text-[var(--text-primary)] tabular-nums shrink-0 sm:mb-5">
                  {idx + 1}
                </span>
                <div>
                  <h3 className="text-[17px] font-semibold text-[var(--text-primary)] mb-1.5">{step.title}</h3>
                  <p className="text-[14.5px] text-[var(--text-secondary)] leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Call to Action Card */}
        <section className="px-6 py-12 sm:p-14 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-center">
          <h2 className="text-[28px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
            Initiate a Partnership Dialogue
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-relaxed max-w-xl mx-auto mb-8">
            Whether exploring enterprise pilot deployment, university integration with Kampus, dispensary onboarding with Pharmora, or discussing investment interest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/contact?type=Strategic+Partnerships" className="btn btn-primary w-full sm:w-auto px-7">
              Start Strategic Conversation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="https://wa.me/qr/V2VVDKVB7J7WL1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary w-full sm:w-auto px-7"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
