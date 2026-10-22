"use client";

import React from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { useCommandPalette } from "@/components/navigation/GlobalCommandPalette";
import { getPublishedVentures } from "@/content/ventures";
import { VentureStatus } from "@/components/ui/VentureStatus";
import { ShortcutKey } from "@/components/ui/ShortcutKey";

export function CommandPalettePreview() {
  const { open: openGlobalPalette } = useCommandPalette();
  const ventures = getPublishedVentures();

  return (
    <section className="py-16 md:py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)]">
      <div className="content-container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-[30px] sm:text-[40px] font-bold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
            Unified venture governance, one command palette.
          </h2>
          <p className="text-[16px] sm:text-[17px] text-[var(--text-secondary)] leading-relaxed">
            Search across portfolio architectures, inspect operational statuses, and explore venture technical profiles with instantaneous keyboard precision.
          </p>
        </div>

        {/* Live preview of the site-wide palette: the search row opens the real one */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] shadow-[0_16px_40px_-16px_rgba(0,0,0,0.18)] overflow-hidden">
          <button
            type="button"
            onClick={openGlobalPalette}
            className="w-full flex items-center gap-3 px-4 h-14 border-b border-[var(--border-subtle)] text-left hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
          >
            <Search className="w-[18px] h-[18px] text-[var(--text-tertiary)] shrink-0" />
            <span className="flex-1 min-w-0 truncate text-[15px] text-[var(--text-tertiary)]">Search ventures, pages and actions…</span>
            <ShortcutKey className="pointer-coarse:hidden" />
          </button>

          <div className="px-2 pt-3 pb-2">
            <p className="px-3 pb-1.5 text-[12px] font-medium text-[var(--text-tertiary)]">Ventures</p>
            <ul>
              {ventures.map((venture) => (
                <li key={venture.id}>
                  <Link
                    href={`/ventures/${venture.slug}`}
                    className="flex items-center justify-between gap-4 px-3 py-2.5 rounded-lg hover:bg-[var(--bg-secondary)] transition-colors group"
                  >
                    <span className="flex items-center gap-3 min-w-0">
                      <span
                        aria-hidden="true"
                        className="grid place-items-center size-8 rounded-lg bg-[var(--accent-surface)] text-[13px] font-semibold text-[var(--accent-text)] shrink-0"
                      >
                        {venture.name.charAt(0)}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[14.5px] font-medium text-[var(--text-primary)]">{venture.name}</span>
                        <span className="block text-[13px] text-[var(--text-tertiary)] truncate">{venture.tagline}</span>
                      </span>
                    </span>
                    <span className="flex items-center gap-3 shrink-0">
                      <span className="hidden sm:block">
                        <VentureStatus status={venture.status} />
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--text-tertiary)] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-5 py-3 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3 text-[12.5px] text-[var(--text-tertiary)]">
            <span className="inline-flex items-center gap-1.5 pointer-coarse:hidden">
              Press <ShortcutKey /> on any page to search
            </span>
            <span className="hidden pointer-coarse:inline">Tap the search icon on any page</span>
            <span className="tabular-nums">{ventures.length} ventures</span>
          </div>
        </div>
      </div>
    </section>
  );
}
