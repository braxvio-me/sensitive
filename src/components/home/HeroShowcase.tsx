"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Pause, Play } from "lucide-react";
import { VENTURES_DATA } from "@/content/ventures";
import { VentureStatus } from "@/components/ui/VentureStatus";
import { formatIsoDate, splitCapability } from "@/lib/format";

const HERO_FACTS = [
  { label: "Headquarters", value: "Accra, Ghana" },
  { label: "Core sectors", value: "4 verticals" },
  { label: "Flagship beta", value: "Kampus (EdTech)" },
  { label: "Active lines", value: "Campus, Health, Pay" },
];

// 2×2 grid on phones, a single row from `sm` up
const FACT_BORDERS = ["border-r border-b sm:border-b-0", "border-b sm:border-b-0 sm:border-r", "border-r", ""];

// Line colours resolve from theme tokens so the circuitry always matches the brand
const LINE_COBALT = { stroke: "var(--accent-cobalt)" };
const LINE_TEAL = { stroke: "var(--accent-technical)" };
const LINE_NEUTRAL = { stroke: "var(--text-tertiary)" };
const DOT_COBALT = { fill: "var(--accent-cobalt)" };
const DOT_TEAL = { fill: "var(--accent-technical)" };
const DOT_NEUTRAL = { fill: "var(--text-tertiary)" };

export function HeroShowcase() {
  const [selectedVentureId, setSelectedVentureId] = useState<string>("kampus");
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [focusWithin, setFocusWithin] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const selectedVenture = VENTURES_DATA.find((v) => v.id === selectedVentureId) || VENTURES_DATA[0];

  // Auto-rotation is a moving change on screen, so it stays off for reduced-motion users
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const autoRotate = !reducedMotion && !userPaused;
  // Reading or using the window holds the current venture in place
  const progressPaused = hovering || focusWithin;

  // The progress underline's 30s animation is the rotation timer: pausing it pauses rotation
  const advance = () => {
    const currentIndex = VENTURES_DATA.findIndex((v) => v.id === selectedVentureId);
    setSelectedVentureId(VENTURES_DATA[(currentIndex + 1) % VENTURES_DATA.length].id);
  };

  const renderProgress = (className: string) =>
    autoRotate ? (
      <span
        key={selectedVentureId}
        aria-hidden="true"
        data-paused={progressPaused}
        onAnimationEnd={advance}
        className={`venture-progress absolute bg-[var(--accent-cobalt)] ${className}`}
      />
    ) : null;

  return (
    <section className="relative pt-10 md:pt-20 pb-16 md:pb-24 overflow-hidden">
      {/* Decorative connection lines, drawn in the brand blues. Tablet and up only:
          phones have no side margin, so the lines would run through the copy. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden hidden md:block opacity-50 dark:opacity-40"
      >
        <svg
          className="w-full h-full min-w-[1200px]"
          viewBox="0 0 1440 950"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMin slice"
          strokeWidth="1.75"
          strokeLinecap="round"
        >
          <g style={LINE_COBALT}>
            <path d="M 80 -20 V 120 Q 80 160 120 160 H 360 Q 400 160 400 200 V 300" />
            <path d="M -30 160 H 120" />
            <path d="M 1360 -20 V 120 Q 1360 160 1320 160 H 1080 Q 1040 160 1040 200 V 300" />
            <path d="M 1470 160 H 1320" />
            <path d="M 1470 540 H 1260 Q 1220 540 1220 580 V 700 Q 1220 740 1180 740 H 1100" />
          </g>
          <circle cx="400" cy="300" r="4.5" style={DOT_COBALT} />
          <circle cx="1040" cy="300" r="4.5" style={DOT_COBALT} />
          <circle cx="1100" cy="740" r="4" style={DOT_COBALT} />

          <g style={LINE_TEAL}>
            <path d="M -30 380 H 220 Q 250 380 250 410 V 430 Q 250 460 280 460 H 480" />
            <path d="M 250 410 V 550 Q 250 580 290 580 H 380" />
            <path d="M -30 300 H 180 Q 210 300 210 330 V 420" />
            <path d="M 1470 380 H 1220 Q 1190 380 1190 410 V 430 Q 1190 460 1160 460 H 960" />
            <path d="M 1190 410 V 550 Q 1190 580 1150 580 H 1060" />
            <path d="M 60 740 V 960" strokeWidth="1.5" strokeDasharray="4 6" strokeOpacity="0.6" />
          </g>
          <circle cx="480" cy="460" r="5" style={DOT_TEAL} />
          <circle cx="380" cy="580" r="4" style={DOT_TEAL} />
          <circle cx="960" cy="460" r="5" style={DOT_TEAL} />
          <circle cx="1060" cy="580" r="4" style={DOT_TEAL} />

          <g style={LINE_NEUTRAL}>
            <path d="M -30 540 H 180 Q 210 540 210 570 V 680 Q 210 710 250 710 H 340" />
            <path d="M 1470 280 H 1300 Q 1260 280 1260 320 V 440 Q 1260 480 1220 480 H 1120" />
            <path d="M 1380 740 V 960" strokeWidth="1.5" strokeDasharray="4 6" strokeOpacity="0.6" />
          </g>
          <circle cx="340" cy="710" r="4" style={DOT_NEUTRAL} />
          <circle cx="1120" cy="480" r="4" style={DOT_NEUTRAL} />
        </svg>
      </div>

      <div className="content-container relative z-10">
        {/* Hero Copy (Matching Exact braxvio.com Master Copy) */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-14 md:mb-20">
          <h1 className="text-[40px] sm:text-[56px] md:text-[68px] font-bold tracking-[-0.035em] text-[var(--text-primary)] leading-[1.06] mb-6">
            Software built for <span className="text-[var(--accent-text)]">real life</span> in Africa.
          </h1>

          <p className="text-[17px] sm:text-[19px] text-[var(--text-secondary)] leading-relaxed max-w-[60ch] mb-10">
            Braxvio creates focused digital products that remove daily friction from university campus life and pharmacy access to smart city logistics and cross-border developer payments.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Link href="/ventures" className="btn btn-primary w-full sm:w-auto px-7">
              Explore Products
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="btn btn-secondary w-full sm:w-auto px-7">
              Our Story
            </Link>
          </div>

          <dl className="grid grid-cols-2 sm:grid-cols-4 mt-12 w-full max-w-3xl text-left sm:text-center border-y bg-[var(--bg-primary)]">
            {HERO_FACTS.map((fact, idx) => (
              <div key={fact.label} className={`px-4 py-4 ${FACT_BORDERS[idx]}`}>
                <dt className="text-[13px] text-[var(--text-tertiary)] mb-0.5">{fact.label}</dt>
                <dd className="text-[15px] font-semibold text-[var(--text-primary)]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Interactive Venture Showcase Window (Mac App UI matching reference ui/hero-desktop.png) */}
        <div
          className="max-w-5xl mx-auto rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)] dark:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] overflow-hidden"
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          onFocus={(e) => setFocusWithin(e.target.matches(":focus-visible"))}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocusWithin(false);
          }}
        >
          {/* Mac Header Bar */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center px-4 h-11 bg-[var(--bg-secondary)] border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
              <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
              <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            </div>
            <span className="text-[13px] font-medium text-[var(--text-tertiary)]">Braxvio Ventures</span>
            <div className="flex justify-end">
              {!reducedMotion && (
                <button
                  type="button"
                  onClick={() => setUserPaused((p) => !p)}
                  aria-label={userPaused ? "Resume automatic venture rotation" : "Pause automatic venture rotation"}
                  title={userPaused ? "Resume rotation" : "Pause rotation"}
                  className="inline-flex items-center gap-1.5 h-7 px-2 rounded-md text-[12px] font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-elevated)] transition-colors cursor-pointer"
                >
                  {userPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                  <span className="hidden sm:inline">{userPaused ? "Resume" : "Pause"}</span>
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 md:min-h-[480px]">
            {/* Venture switcher (desktop) */}
            <div className="hidden md:flex md:col-span-4 flex-col gap-1 p-3 bg-[var(--bg-primary)] border-r border-[var(--border-subtle)]">
              <div className="flex items-center justify-between px-3 pt-1 pb-2 text-[13px] text-[var(--text-tertiary)]">
                <span className="font-medium">Ventures</span>
                <span className="tabular-nums">{VENTURES_DATA.length}</span>
              </div>

              {VENTURES_DATA.map((venture) => {
                const isSelected = venture.id === selectedVentureId;
                return (
                  <button
                    key={venture.id}
                    type="button"
                    onClick={() => setSelectedVentureId(venture.id)}
                    aria-pressed={isSelected}
                    className={`relative w-full text-left px-3 py-2.5 rounded-lg border transition-colors cursor-pointer overflow-hidden ${
                      isSelected
                        ? "bg-[var(--surface-elevated)] border-[var(--border-subtle)]"
                        : "border-transparent hover:bg-[var(--bg-secondary)]"
                    }`}
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span
                        className={`text-[14.5px] font-semibold ${
                          isSelected ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                        }`}
                      >
                        {venture.name}
                      </span>
                      <VentureStatus status={venture.status} className="text-[12px]" />
                    </span>
                    <span className="block text-[13px] text-[var(--text-tertiary)] truncate mt-0.5">
                      {venture.primaryCategory}
                    </span>
                    {isSelected && renderProgress("left-0 right-0 bottom-0 h-[2px]")}
                  </button>
                );
              })}
            </div>

            {/* Venture details */}
            <div className="col-span-12 md:col-span-8 flex flex-col">
              {/* Venture switcher (mobile) */}
              <div className="md:hidden flex overflow-x-auto no-scrollbar border-b border-[var(--border-subtle)] px-2">
                {VENTURES_DATA.map((v) => {
                  const isSelected = v.id === selectedVentureId;
                  return (
                    <button
                      key={v.id}
                      type="button"
                      onClick={() => setSelectedVentureId(v.id)}
                      aria-pressed={isSelected}
                      className={`relative shrink-0 px-3 py-3 text-[14px] whitespace-nowrap transition-colors cursor-pointer ${
                        isSelected
                          ? "font-semibold text-[var(--text-primary)]"
                          : "font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)]"
                      }`}
                    >
                      {v.name}
                      {isSelected && (
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 right-0 -bottom-px h-[2px] ${
                            autoRotate ? "bg-[var(--border-strong)]" : "bg-[var(--text-primary)]"
                          }`}
                        >
                          {renderProgress("inset-0")}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Announce changes only when the visitor drives them, not on every automatic rotation */}
              <div
                aria-live={autoRotate && !progressPaused ? "off" : "polite"}
                className="flex-1 flex flex-col p-5 sm:p-7 md:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3 pb-5 mb-6 border-b border-[var(--border-subtle)]">
                  <div className="min-w-0">
                    <h2 className="text-[26px] font-semibold tracking-tight text-[var(--text-primary)] leading-tight">
                      {selectedVenture.name}
                    </h2>
                    <p className="text-[15px] text-[var(--text-secondary)] mt-1">{selectedVenture.tagline}</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2.5 text-[13px] text-[var(--text-tertiary)]">
                      <span>{selectedVenture.primaryCategory}</span>
                      <span aria-hidden="true">·</span>
                      <VentureStatus status={selectedVenture.status} />
                    </div>
                  </div>

                  <Link href={`/ventures/${selectedVenture.slug}`} className="link-accent text-[14px] shrink-0">
                    View profile
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <h3 className="text-[14px] font-semibold text-[var(--text-primary)] mb-1.5">Problem solved</h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-[68ch] mb-7">
                  {selectedVenture.problemSolved}
                </p>

                <h3 className="text-[14px] font-semibold text-[var(--text-primary)] mb-3">Key capabilities</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-7">
                  {selectedVenture.keyCapabilities.slice(0, 4).map((cap) => {
                    const { title, body } = splitCapability(cap);
                    return (
                      <li key={cap} className="pl-3.5 border-l border-[var(--border-strong)]">
                        {title && (
                          <span className="block text-[14px] font-medium text-[var(--text-primary)] mb-0.5">{title}</span>
                        )}
                        <span className="text-[13.5px] text-[var(--text-secondary)] leading-relaxed line-clamp-2">
                          {body}
                        </span>
                      </li>
                    );
                  })}
                </ul>

                {selectedVenture.architectureNotes && (
                  <p className="text-[13.5px] text-[var(--text-tertiary)] leading-relaxed">
                    <span className="font-medium text-[var(--text-secondary)]">Stack. </span>
                    {selectedVenture.architectureNotes[0].replace(/^Built with /, "")}
                  </p>
                )}

                <div className="mt-auto pt-6">
                  <div className="pt-4 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-2 text-[13px] text-[var(--text-tertiary)]">
                    <span>{selectedVenture.ownershipRelationship}</span>
                    <span>
                      Reviewed{" "}
                      <time dateTime={selectedVenture.lastReviewedAt} className="tabular-nums">
                        {formatIsoDate(selectedVenture.lastReviewedAt)}
                      </time>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
