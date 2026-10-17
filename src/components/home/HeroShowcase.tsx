"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Terminal, ShieldCheck } from "lucide-react";
import { VENTURES_DATA } from "@/content/ventures";

export function HeroShowcase() {
  const [selectedVentureId, setSelectedVentureId] = useState<string>("pharmora");
  const selectedVenture = VENTURES_DATA.find((v) => v.id === selectedVentureId) || VENTURES_DATA[0];

  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      {/* Precision Decorative Circuit Connection Lines (matching reference ui/hero-desktop.png) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-50 dark:opacity-40"
      >
        <svg
          className="w-full h-full min-w-[1000px] min-h-[700px]"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top-Left to Center-Left Line (Purple) */}
          <path
            d="M -50 180 H 260 Q 300 180 300 220 V 380 Q 300 420 340 420 H 420"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="420" cy="420" r="4.5" fill="#8B5CF6" />

          {/* Left-Middle to Hero Edge Line (Cyan) */}
          <path
            d="M -30 320 H 140 Q 180 320 180 360 V 500 Q 180 540 220 540 H 320"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="320" cy="540" r="4.5" fill="#06B6D4" />

          {/* Bottom-Left to Window (Blue) */}
          <path
            d="M 60 840 V 620 Q 60 580 100 580 H 280"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="280" cy="580" r="4.5" fill="#3B82F6" />

          {/* Top-Right to Center-Right Line (Amber/Orange) */}
          <path
            d="M 1480 140 H 1160 Q 1120 140 1120 180 V 320 Q 1120 360 1080 360 H 1040"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="1040" cy="360" r="4.5" fill="#F59E0B" />

          {/* Right-Middle to Window Edge (Emerald Green) */}
          <path
            d="M 1460 300 H 1280 Q 1240 300 1240 340 V 460 Q 1240 500 1200 500 H 1120"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="1120" cy="500" r="4.5" fill="#10B981" />

          {/* Right-Bottom to Window Corner (Rose/Red) */}
          <path
            d="M 1400 660 H 1220 Q 1180 660 1180 620 V 560"
            stroke="#EC4899"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="1180" cy="560" r="4.5" fill="#EC4899" />
        </svg>
      </div>

      <div className="content-container relative z-10">
        {/* Hero Copy (Matching Exact Master Requirements) */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-600" />
            Technology Parent Company · Long-Term Horizon
          </div>

          <h1 className="text-[38px] sm:text-[54px] md:text-[68px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-6">
            We build technology ventures designed to endure.
          </h1>

          <p className="text-[17px] sm:text-[19px] md:text-[20px] text-[var(--text-secondary)] leading-relaxed max-w-[65ch] mb-10 font-normal">
            Braxvio is a technology parent company building and developing ventures across industries. Founded in Africa, we pursue useful technology, disciplined execution, and businesses built for the long term.
          </p>

          {/* Call to Actions (Matching Nimble Pill Style) */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/ventures"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[var(--accent-cobalt)]"
            >
              Explore Our Ventures
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/philosophy"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-medium text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--bg-secondary)] border border-[var(--border-strong)] active:scale-[0.98] transition-all shadow-xs"
            >
              Our Philosophy
            </Link>
          </div>

          <p className="text-xs text-[var(--text-tertiary)] mt-5 tracking-wide">
            Founded in Africa · Global horizon · Disciplined venture governance
          </p>
        </div>

        {/* Interactive Venture Showcase Window (Mac App UI matching reference ui/hero-desktop.png) */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-2xl overflow-hidden transition-all duration-300">
          {/* Mac Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[var(--bg-secondary)]/70 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
              <span className="ml-3 text-xs font-mono font-medium text-[var(--text-tertiary)] hidden sm:inline-block">
                braxvio.console // portfolio-orchestration
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                Cluster Healthy
              </span>
            </div>
          </div>

          {/* Window Body: Sidebar + Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px]">
            {/* Left Venture Switcher Sidebar */}
            <div className="md:col-span-4 bg-[var(--bg-primary)]/50 border-r border-[var(--border-subtle)] p-3 flex flex-col gap-1.5">
              <div className="px-3 py-2 text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] flex items-center justify-between">
                <span>Active Ventures</span>
                <span className="font-mono text-xs">5 verified</span>
              </div>

              {VENTURES_DATA.map((venture) => {
                const isSelected = venture.id === selectedVentureId;
                return (
                  <button
                    key={venture.id}
                    type="button"
                    onClick={() => setSelectedVentureId(venture.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex flex-col gap-1 ${
                      isSelected
                        ? "bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-xs"
                        : "hover:bg-[var(--surface-elevated)]/60 text-[var(--text-secondary)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[14px] font-semibold ${isSelected ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}>
                        {venture.name}
                      </span>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          venture.status === "Live"
                            ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-300"
                            : venture.status === "Private Beta"
                            ? "bg-sky-500/15 text-sky-700 dark:text-sky-300"
                            : "bg-amber-500/15 text-amber-700 dark:text-amber-300"
                        }`}
                      >
                        {venture.status}
                      </span>
                    </div>
                    <span className="text-xs text-[var(--text-tertiary)] truncate">
                      {venture.primaryCategory}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Interactive Venture Details Pane */}
            <div className="md:col-span-8 p-6 md:p-8 flex flex-col justify-between bg-[var(--surface-elevated)]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-[var(--border-subtle)] mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                      {selectedVenture.name}
                    </h2>
                    <p className="text-xs text-[var(--accent-technical)] font-mono mt-0.5 font-medium">
                      {selectedVenture.primaryCategory} · {selectedVenture.ownershipRelationship}
                    </p>
                  </div>

                  <Link
                    href={`/ventures/${selectedVenture.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-cobalt)] hover:underline"
                  >
                    View Full Profile
                    <ExternalLink className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-1">
                      Problem Solved
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {selectedVenture.problemSolved}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2">
                      Key Capabilities
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedVenture.keyCapabilities.slice(0, 4).map((cap, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-xs text-[var(--text-secondary)] p-2.5 rounded-lg bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cobalt)] mt-1.5 shrink-0" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {selectedVenture.architectureNotes && (
                    <div className="mt-4 p-3.5 rounded-xl bg-neutral-900 text-neutral-200 font-mono text-xs border border-neutral-800">
                      <div className="flex items-center gap-1.5 text-neutral-400 mb-1.5 font-sans font-semibold">
                        <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                        <span>system.runtime.spec</span>
                      </div>
                      {selectedVenture.architectureNotes.map((note, idx) => (
                        <p key={idx} className="text-neutral-300">
                          &gt; {note}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--text-tertiary)]">
                <span>Verified Governance Record</span>
                <span className="font-mono">Reviewed: {selectedVenture.lastReviewedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
