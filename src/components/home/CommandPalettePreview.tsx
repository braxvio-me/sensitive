"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, Terminal, ArrowRight, ShieldCheck, Cpu, Code2, Globe } from "lucide-react";
import { useCommandPalette } from "@/components/navigation/GlobalCommandPalette";

const ACTIONS = [
  {
    title: "Inspect Pharmora Supply Chain Ledger",
    subtitle: "Commerce & Marketplaces · Live API Telemetry",
    shortcut: "⌘ 1",
    tag: "Live",
    tagColor: "bg-[#ECFDF5] dark:bg-[#064E3B] text-emerald-700 dark:text-emerald-300",
    href: "/ventures/pharmora",
    icon: ShieldCheck,
  },
  {
    title: "Verify DevPay Africa FX Clearing Latency",
    subtitle: "Enterprise Software · Multi-currency payout rails",
    shortcut: "⌘ 2",
    tag: "Private Beta",
    tagColor: "bg-[#EFF6FF] dark:bg-[#1E3A5F] text-sky-700 dark:text-sky-300",
    href: "/ventures/devpay-africa",
    icon: Cpu,
  },
  {
    title: "Probe Pellmia Carrier Peering Routes",
    subtitle: "Digital Infrastructure · Sub-second OTP benchmarks",
    shortcut: "⌘ 3",
    tag: "Private Beta",
    tagColor: "bg-[#EFF6FF] dark:bg-[#1E3A5F] text-sky-700 dark:text-sky-300",
    href: "/ventures/pellmia",
    icon: Terminal,
  },
  {
    title: "Review EcoLift Industrial Recycling Nodes",
    subtitle: "Commerce & Marketplaces · Circular logistics engine",
    shortcut: "⌘ 4",
    tag: "In Development",
    tagColor: "bg-[#FFFBEB] dark:bg-[#451A03] text-amber-700 dark:text-amber-300",
    href: "/ventures/ecolift",
    icon: Globe,
  },
];

export function CommandPalettePreview() {
  const [searchTerm, setSearchTerm] = useState("");
  const { open: openGlobalPalette } = useCommandPalette();

  const filteredActions = ACTIONS.filter(
    (action) =>
      action.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      action.subtitle.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-[var(--bg-secondary)]/40 border-y border-[var(--border-subtle)]">
      <div className="content-container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            Unified venture governance, one command palette.
          </h2>
          <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">
            Search across portfolio architectures, inspect operational statuses, and explore venture technical profiles with instantaneous keyboard precision.
          </p>
        </div>

        {/* Interactive Floating Command Palette Mockup (matching reference ui/desktop-full (1).png) */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] shadow-xl overflow-hidden">
          {/* Search Header */}
          <div
            onClick={openGlobalPalette}
            className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/30 cursor-pointer hover:bg-[var(--bg-secondary)]/50 transition-colors"
          >
            <Search className="w-5 h-5 text-[var(--text-tertiary)] shrink-0" />
            <div className="w-full text-sm text-[var(--text-tertiary)] select-none">
              Search ventures, architecture specs, or protocols...
            </div>
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)] shrink-0">
              ⌘K
            </span>
          </div>

          {/* Action List */}
          <div className="p-2 divide-y divide-[var(--border-subtle)]/50 max-h-[320px] overflow-y-auto">
            {filteredActions.length > 0 ? (
              filteredActions.map((action, idx) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={idx}
                    href={action.href}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--bg-secondary)] transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent-cobalt)] group-hover:scale-105 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-cobalt)] transition-colors">
                            {action.title}
                          </span>
                          <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${action.tagColor}`}>
                            {action.tag}
                          </span>
                        </div>
                        <span className="text-xs text-[var(--text-tertiary)]">
                          {action.subtitle}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs px-2 py-1 rounded bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-tertiary)] group-hover:text-[var(--text-primary)] transition-colors">
                        {action.shortcut}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </Link>
                );
              })
            ) : (
              <div className="p-8 text-center text-sm text-[var(--text-tertiary)]">
                No matching venture actions found for &quot;{searchTerm}&quot;.
              </div>
            )}
          </div>

          {/* Command Palette Footer */}
          <div className="px-4 py-2.5 bg-[var(--bg-secondary)]/60 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--text-tertiary)]">
            <div className="flex items-center gap-3">
              <span>Navigation: <kbd className="font-mono">↑</kbd> <kbd className="font-mono">↓</kbd></span>
              <span>Select: <kbd className="font-mono">↵</kbd></span>
            </div>
            <span className="font-mono">Braxvio Global Registry</span>
          </div>
        </div>
      </div>
    </section>
  );
}
