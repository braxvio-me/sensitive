import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Hammer, Cpu, ShieldCheck, Compass, Scale, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Operating Philosophy",
  description:
    "Explore the five core principles that guide Braxvio's approach to engineering, design, venture governance, and long-term value creation.",
};

export default function PhilosophyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-4xl">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] bg-[var(--accent-technical)]/10 mb-4">
            Guiding Standards
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
            Our Operating & Engineering Principles
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-normal">
            These are the standards Braxvio aims to uphold across every venture we initiate and develop. They represent our shared commitment to craft, integrity, and durable business design.
          </p>
        </div>

        {/* The Five Principles: Varied Editorial Compositions */}
        <div className="space-y-16">
          {/* Principle 1: Engineering for Durability */}
          <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs">
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-8">
              <span className="font-mono text-sm text-[var(--accent-cobalt)] font-semibold">
                PRINCIPLE 01
              </span>
              <div className="p-2 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent-cobalt)]">
                <Hammer className="w-5 h-5" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
              Engineering for Durability
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
              Build systems and businesses with reliability, maintainability, and long-term architectural consequences in mind.
            </p>
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] space-y-3">
              <p>
                In fast-moving technology ecosystems, there is constant temptation to ship fragile prototypes and treat tech debt as someone else&apos;s problem. We reject this.
              </p>
              <div className="flex items-start gap-2 pt-1 text-xs text-[var(--text-primary)] font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>We favor proven database schemas, typed interfaces, idempotent APIs, and clear maintenance boundaries.</span>
              </div>
            </div>
          </div>

          {/* Principle 2: Utility Before Appearance */}
          <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs">
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-8">
              <span className="font-mono text-sm text-[var(--accent-technical)] font-semibold">
                PRINCIPLE 02
              </span>
              <div className="p-2 rounded-xl bg-[var(--bg-secondary)] text-[var(--accent-technical)]">
                <Cpu className="w-5 h-5" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
              Utility Before Appearance
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
              Design should clarify and improve the usefulness of a product, not conceal a lack of operational substance.
            </p>
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] space-y-3">
              <p>
                A beautiful interface cannot rescue an unworkable business or a poorly architected distributed system. Genuine design begins with functional clarity, accessible information hierarchies, and predictable human interaction.
              </p>
              <div className="flex items-start gap-2 pt-1 text-xs text-[var(--text-primary)] font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Restrained typography, responsive performance, and honest feedback outrank gratuitous animations.</span>
              </div>
            </div>
          </div>

          {/* Principle 3: Trust Is a Requirement */}
          <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs">
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-8">
              <span className="font-mono text-sm text-emerald-600 dark:text-emerald-400 font-semibold">
                PRINCIPLE 03
              </span>
              <div className="p-2 rounded-xl bg-[var(--bg-secondary)] text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
              Trust Is a Requirement
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
              Treat privacy, security, transparency, and responsible handling of information as fundamental, non-negotiable obligations.
            </p>
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] space-y-3">
              <p>
                Our ventures handle mission-critical workflows: prescription drug inventories, software payroll disbursements, and telecom messaging. Trust is not a marketing badge; it is an architectural contract enforced by end-to-end cryptographic verification and strict data residency.
              </p>
              <div className="flex items-start gap-2 pt-1 text-xs text-[var(--text-primary)] font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Zero dark patterns, zero unauthorized surveillance data harvesting, and zero compromises on customer data integrity.</span>
              </div>
            </div>
          </div>

          {/* Principle 4: Clear Ownership, Appropriate Autonomy */}
          <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs">
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-8">
              <span className="font-mono text-sm text-sky-600 dark:text-sky-400 font-semibold">
                PRINCIPLE 04
              </span>
              <div className="p-2 rounded-xl bg-[var(--bg-secondary)] text-sky-600 dark:text-sky-400">
                <Compass className="w-5 h-5" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
              Clear Ownership, Appropriate Autonomy
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
              Define responsibilities clearly and give ventures appropriate room to develop according to their unique market needs.
            </p>
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] space-y-3">
              <p>
                A parent company fails when it suffocates its ventures with bureaucratic central committees or abandons them without shared technical foundations. We calibrate shared infrastructure with tactical operational independence.
              </p>
              <div className="flex items-start gap-2 pt-1 text-xs text-[var(--text-primary)] font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Founding teams have ownership of their domain, while Braxvio provides institutional resilience and governance.</span>
              </div>
            </div>
          </div>

          {/* Principle 5: Build for Sustainable Value */}
          <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs">
            <div className="flex items-center justify-between pb-6 border-b border-[var(--border-subtle)] mb-8">
              <span className="font-mono text-sm text-amber-600 dark:text-amber-400 font-semibold">
                PRINCIPLE 05
              </span>
              <div className="p-2 rounded-xl bg-[var(--bg-secondary)] text-amber-600 dark:text-amber-400">
                <Scale className="w-5 h-5" />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
              Build for Sustainable Value
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
              Focus on meaningful problems, responsible execution, and businesses that can create lasting economic and social value.
            </p>
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] text-sm text-[var(--text-secondary)] space-y-3">
              <p>
                We measure our return not by rapid flip multiples, but by the enduring utility of the technology we deploy. Sustainable businesses generate real revenue from satisfied counterparties, creating durable employment and resilient community infrastructure.
              </p>
              <div className="flex items-start gap-2 pt-1 text-xs text-[var(--text-primary)] font-medium">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Disciplined capital allocation, positive unit economics, and businesses built to withstand changing macro environments.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 pt-12 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
              Start a Conversation
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Connect with our team to discuss partnerships, research, or venture collaboration.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 transition-all shadow-sm shrink-0"
          >
            Start a Conversation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
