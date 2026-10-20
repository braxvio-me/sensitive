"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink, Terminal, ShieldCheck } from "lucide-react";
import { VENTURES_DATA } from "@/content/ventures";

export function HeroShowcase() {
  const [selectedVentureId, setSelectedVentureId] = useState<string>("kampus");
  const [timerKey, setTimerKey] = useState<number>(0);
  const selectedVenture = VENTURES_DATA.find((v) => v.id === selectedVentureId) || VENTURES_DATA[0];

  // Auto-rotate ventures every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedVentureId((currentId) => {
        const currentIndex = VENTURES_DATA.findIndex((v) => v.id === currentId);
        const nextIndex = (currentIndex + 1) % VENTURES_DATA.length;
        return VENTURES_DATA[nextIndex].id;
      });
    }, 30000);

    return () => clearInterval(interval);
  }, [timerKey]);

  const handleSelectVenture = (id: string) => {
    setSelectedVentureId(id);
    setTimerKey((k) => k + 1); // Reset 30s timer on manual selection
  };

  return (
    <section className="relative pt-12 pb-24 overflow-hidden">
      {/* Precision Decorative Circuit Connection Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60 dark:opacity-40"
      >
        {/* Mobile-Optimized Circuit SVG (visible on mobile screens) */}
        <svg
          className="block md:hidden w-full h-full"
          viewBox="0 0 390 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
        >
          {/* Top-Left to Badge (Purple) */}
          <path
            d="M 20 -10 V 60 Q 20 85 50 85 H 120 Q 140 85 140 105 V 140"
            stroke="#8B5CF6"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="140" cy="140" r="4" fill="#8B5CF6" />
          <path d="M -10 85 H 50" stroke="#8B5CF6" strokeWidth="1.75" strokeLinecap="round" />

          {/* Left-Middle to CTA / Window (Cyan) */}
          <path
            d="M -10 260 H 45 Q 65 260 65 280 V 380 Q 65 400 95 400 H 130"
            stroke="#06B6D4"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="130" cy="400" r="4.5" fill="#06B6D4" />

          {/* Left Branch down to Window Corner (Cyan) */}
          <path
            d="M 65 380 V 510 Q 65 530 85 530 H 115"
            stroke="#06B6D4"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="115" cy="530" r="4" fill="#06B6D4" />

          {/* Left Vertical Dashed Continuation */}
          <path
            d="M 25 560 V 880"
            stroke="#06B6D4"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.55"
          />

          {/* Top-Right to Headline (Amber) */}
          <path
            d="M 370 -10 V 55 Q 370 75 340 75 H 280 Q 260 75 260 95 V 135"
            stroke="#F59E0B"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="260" cy="135" r="4" fill="#F59E0B" />
          <path d="M 400 75 H 340" stroke="#F59E0B" strokeWidth="1.75" strokeLinecap="round" />

          {/* Right-Middle to CTA / Window (Pink/Magenta) */}
          <path
            d="M 400 280 H 345 Q 325 280 325 300 V 390 Q 325 410 295 410 H 260"
            stroke="#EC4899"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="260" cy="410" r="4.5" fill="#EC4899" />

          {/* Right Branch down to Window Corner (Pink) */}
          <path
            d="M 325 390 V 510 Q 325 530 305 530 H 275"
            stroke="#EC4899"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
          <circle cx="275" cy="530" r="4" fill="#EC4899" />

          {/* Right Vertical Dashed Continuation */}
          <path
            d="M 365 560 V 880"
            stroke="#EC4899"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.55"
          />
        </svg>

        {/* Desktop-Optimized Circuit SVG (visible on medium & desktop screens) */}
        <svg
          className="hidden md:block w-full h-full min-w-[1200px]"
          viewBox="0 0 1440 950"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
        >
          {/* Top-Left to Headline (Purple) */}
          <path
            d="M 80 -20 V 120 Q 80 160 120 160 H 360 Q 400 160 400 200 V 300"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="400" cy="300" r="5" fill="#8B5CF6" />
          <path
            d="M -30 160 H 120"
            stroke="#8B5CF6"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Left-Middle extending deep into the page towards CTA buttons (Cyan) */}
          <path
            d="M -30 380 H 220 Q 250 380 250 410 V 430 Q 250 460 280 460 H 480"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="480" cy="460" r="5.5" fill="#06B6D4" />

          {/* Left Branch connecting into Window (Cyan) */}
          <path
            d="M 250 410 V 550 Q 250 580 290 580 H 380"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="380" cy="580" r="4.5" fill="#06B6D4" />

          {/* Left-Upper horizontal line (Cyan) */}
          <path
            d="M -30 300 H 180 Q 210 300 210 330 V 420"
            stroke="#06B6D4"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Left-Lower extending towards Window Corner (Blue) */}
          <path
            d="M -30 540 H 180 Q 210 540 210 570 V 680 Q 210 710 250 710 H 340"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="340" cy="710" r="4.5" fill="#3B82F6" />

          {/* Left side vertical continuation down into page */}
          <path
            d="M 60 740 V 960"
            stroke="#06B6D4"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.5"
          />

          {/* Top-Right to Headline (Amber) */}
          <path
            d="M 1360 -20 V 120 Q 1360 160 1320 160 H 1080 Q 1040 160 1040 200 V 300"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="1040" cy="300" r="5" fill="#F59E0B" />
          <path
            d="M 1470 160 H 1320"
            stroke="#F59E0B"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Right-Middle extending deep into the page towards CTA buttons (Pink/Magenta) */}
          <path
            d="M 1470 380 H 1220 Q 1190 380 1190 410 V 430 Q 1190 460 1160 460 H 960"
            stroke="#EC4899"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="960" cy="460" r="5.5" fill="#EC4899" />

          {/* Right Branch connecting into Window (Pink/Magenta) */}
          <path
            d="M 1190 410 V 550 Q 1190 580 1150 580 H 1060"
            stroke="#EC4899"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="1060" cy="580" r="4.5" fill="#EC4899" />

          {/* Right-Upper Green Line */}
          <path
            d="M 1470 280 H 1300 Q 1260 280 1260 320 V 440 Q 1260 480 1220 480 H 1120"
            stroke="#10B981"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="1120" cy="480" r="4.5" fill="#10B981" />

          {/* Right-Lower Rose Line */}
          <path
            d="M 1470 540 H 1260 Q 1220 540 1220 580 V 700 Q 1220 740 1180 740 H 1100"
            stroke="#EF4444"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="1100" cy="740" r="4.5" fill="#EF4444" />

          {/* Right side vertical continuation down into page */}
          <path
            d="M 1380 740 V 960"
            stroke="#EC4899"
            strokeWidth="1.5"
            strokeDasharray="4 6"
            strokeOpacity="0.5"
          />
        </svg>
      </div>

      <div className="content-container relative z-10">
        {/* Hero Copy (Matching Exact braxvio.com Master Copy) */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 md:mb-18">
          <div className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-secondary)] mb-6 shadow-xs font-mono">
            Parent Technology Company • Accra, Ghana
          </div>

          <h1 className="text-[38px] sm:text-[54px] md:text-[68px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-6">
            Software built for <span className="text-[var(--accent-technical)]">real life</span> in Africa.
          </h1>

          <p className="text-[17px] sm:text-[19px] md:text-[20px] text-[var(--text-secondary)] leading-relaxed max-w-[68ch] mb-10 font-normal">
            Braxvio creates focused digital products that remove daily friction from university campus life and pharmacy access to smart city logistics and cross-border developer payments.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/ventures"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-700 active:scale-[0.98] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[var(--accent-cobalt)]"
            >
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-medium text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--bg-secondary)] border border-[var(--border-strong)] active:scale-[0.98] transition-all shadow-xs"
            >
              Our Story
            </Link>
          </div>

          {/* Core Sector Statistics Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-10 w-full max-w-3xl text-left">
            <div className="p-3.5 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase text-[var(--text-tertiary)] block">Headquarters</span>
              <span className="text-sm font-bold text-[var(--text-primary)]">Accra, Ghana</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase text-[var(--text-tertiary)] block">Core Sectors</span>
              <span className="text-sm font-bold text-[var(--text-primary)]">4 Verticals</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase text-[var(--text-tertiary)] block">Flagship Beta</span>
              <span className="text-sm font-bold text-[var(--text-primary)]">Kampus (EdTech)</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase text-[var(--text-tertiary)] block">Active Lines</span>
              <span className="text-sm font-bold text-[var(--text-primary)]">Campus, Health, Pay</span>
            </div>
          </div>
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
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-mono bg-[#ECFDF5] dark:bg-[#064E3B] text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700">
                Cluster Healthy
              </span>
            </div>
          </div>

          {/* Window Body: Sidebar + Main Content */}
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[440px]">
            {/* Left Venture Switcher Sidebar (Hidden on mobile as requested, visible on md+) */}
            <div className="hidden md:flex md:col-span-4 bg-[var(--bg-primary)]/50 border-r border-[var(--border-subtle)] p-3 flex-col gap-1.5">
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
                    onClick={() => handleSelectVenture(venture.id)}
                    className={`w-full text-left p-3 rounded-xl transition-all cursor-pointer flex flex-col gap-1 ${isSelected
                        ? "bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-xs"
                        : "hover:bg-[var(--surface-elevated)]/60 text-[var(--text-secondary)]"
                      }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`text-[14px] font-semibold ${isSelected ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"}`}>
                        {venture.name}
                      </span>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${venture.status === "Live"
                            ? "bg-[#ECFDF5] dark:bg-[#064E3B] text-emerald-700 dark:text-emerald-300"
                            : venture.status === "Private Beta"
                              ? "bg-[#EFF6FF] dark:bg-[#1E3A5F] text-sky-700 dark:text-sky-300"
                              : "bg-[#FFFBEB] dark:bg-[#451A03] text-amber-700 dark:text-amber-300"
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

            {/* Right Interactive Venture Details Pane (Full width on mobile) */}
            <div className="col-span-12 md:col-span-8 p-5 sm:p-6 md:p-8 flex flex-col justify-between bg-[var(--surface-elevated)]">
              <div>
                {/* Mobile Compact Venture Indicator & Auto-Rotate Status (Mobile only) */}
                <div className="md:hidden flex items-center justify-between gap-2 pb-3.5 mb-5 border-b border-[var(--border-subtle)]">
                  <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 no-scrollbar">
                    {VENTURES_DATA.map((v) => {
                      const isSelected = v.id === selectedVentureId;
                      return (
                        <button
                          key={v.id}
                          type="button"
                          onClick={() => handleSelectVenture(v.id)}
                          className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${isSelected
                              ? "bg-[var(--accent-cobalt)] text-white font-semibold shadow-2xs"
                              : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                            }`}
                        >
                          {v.name}
                        </button>
                      );
                    })}
                  </div>
                  <span className="text-[10px] font-mono text-[var(--text-tertiary)] shrink-0 px-2 py-0.5 rounded bg-[var(--bg-secondary)]">
                    30s Cycle
                  </span>
                </div>
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
