import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Layers, Globe } from "lucide-react";
import { getPublishedVentures } from "@/content/ventures";

export function VenturePortfolioPreview() {
  const ventures = getPublishedVentures();

  return (
    <section className="py-24 bg-[var(--bg-primary)]">
      <div className="content-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] bg-[var(--accent-technical)]/10 mb-3">
              Portfolio Ventures
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight">
              Disciplined ventures across strategic verticals.
            </h2>
          </div>
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-cobalt)] hover:underline self-start md:self-end"
          >
            Explore Complete Directory
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Ventures Grid: Distinctive cards with clear hierarchy */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ventures.map((venture) => (
            <div
              key={venture.id}
              className="flex flex-col justify-between p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:border-[var(--border-strong)] transition-all duration-200 group hover:shadow-lg"
            >
              <div>
                {/* Top Badge Row */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
                    {venture.primaryCategory}
                  </span>
                  <span
                    className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
                      venture.status === "Live"
                        ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                        : venture.status === "Private Beta"
                        ? "bg-sky-500/15 text-sky-700 dark:text-sky-400"
                        : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                    }`}
                  >
                    {venture.status}
                  </span>
                </div>

                {/* Venture Name & Tagline */}
                <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-2 group-hover:text-[var(--accent-cobalt)] transition-colors">
                  {venture.name}
                </h3>
                <p className="text-sm font-medium text-[var(--text-secondary)] mb-3">
                  {venture.tagline}
                </p>
                <p className="text-xs text-[var(--text-tertiary)] leading-relaxed mb-6">
                  {venture.summary}
                </p>

                {/* Core Capability Pills */}
                <div className="space-y-1.5 mb-6">
                  {venture.keyCapabilities.slice(0, 2).map((cap, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-xs text-[var(--text-secondary)]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="truncate">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Navigation */}
              <div className="pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
                  {venture.ownershipRelationship}
                </span>
                <Link
                  href={`/ventures/${venture.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-cobalt)] group-hover:translate-x-0.5 transition-transform"
                >
                  Inspect Architecture
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
