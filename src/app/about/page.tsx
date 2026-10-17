import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Globe, Layers, ShieldCheck, Compass, Hammer, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Braxvio: our origins in Africa, our long-term perspective, and our commitment to building durable technology ventures across industries.",
};

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] bg-[var(--accent-technical)]/10 mb-4">
            Company Narrative
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
            Building technology ventures designed to endure.
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal">
            Braxvio is a technology parent company focused on building and developing ventures across consumer platforms, enterprise software, and emerging technology. Founded in Africa, we pursue useful technology, disciplined execution, and businesses built for the long term.
          </p>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-12">
          {/* Section 1: What Braxvio Is */}
          <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
              What We Are
            </h2>
            <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                Braxvio is not simply a web development agency, a single-product startup, a freelance broker, or an AI wrapper. We are an active parent company that originates, architects, and stewards independent technology ventures across strategic sectors.
              </p>
              <p>
                We believe that the most significant technological value in the coming decades will be created by companies that solve deep structural frictions in foundational industries—such as healthcare logistics, cross-border payments, and telecom infrastructure.
              </p>
            </div>
          </div>

          {/* Section 2: Origins & Global Horizon */}
          <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 mb-4">
              <Globe className="w-3.5 h-3.5" />
              Origins & Horizon
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
              Founded in Africa. Built with a global horizon.
            </h2>
            <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed">
              <p>
                Braxvio&apos;s story begins in Africa, but our ambitions are not confined by geography. We believe meaningful technology businesses can be conceived and built from the continent to serve real needs in local and international markets.
              </p>
              <p>
                Our focus is on the quality of what we build, the problems we choose to solve, and the lasting value our ventures create. Rather than chasing short-term valuation bubbles or adopting superficial technology trends, we focus on engineering durability and verifiable utility.
              </p>
            </div>
          </div>

          {/* Section 3: Our Venture Approach */}
          <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
              Our Venture Architecture
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
                <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] text-[var(--accent-cobalt)] w-fit mb-3">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                  Shared Technical Standards
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Every venture shares our rigorous engineering standards, cryptographic audit pipelines, and disciplined security controls.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
                <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] text-[var(--accent-cobalt)] w-fit mb-3">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                  Appropriate Autonomy
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  Venture teams operate with the tactical freedom required to iterate rapidly, serve their customers, and navigate local market nuances.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
                <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] text-[var(--accent-cobalt)] w-fit mb-3">
                  <Hammer className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                  Disciplined Unit Economics
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  We build companies with healthy commercial margins, responsible capital efficiency, and real recurring value from day one.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
                <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] text-[var(--accent-cobalt)] w-fit mb-3">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                  Long-Term Horizon
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  We measure success in decades, building institutional assets that outlast economic cycles and transient hype waves.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
              Explore Our Ventures
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Discover the platforms and infrastructure operating within the Braxvio family.
            </p>
          </div>
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 transition-all shadow-sm shrink-0"
          >
            View Portfolio Directory
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
