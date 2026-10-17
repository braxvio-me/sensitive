import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 bg-[var(--bg-primary)]">
      <div className="content-container">
        {/* Large Rounded Container Card matching ui/cta-desktop.png */}
        <div className="relative rounded-3xl border border-[var(--border-subtle)] bg-gradient-to-b from-[var(--surface-elevated)] to-[var(--bg-secondary)]/50 p-10 sm:p-16 md:p-20 text-center shadow-sm overflow-hidden">
          {/* Subtle Ambient Radial Highlight */}
          <div
            aria-hidden="true"
            className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-5 leading-tight">
              Let&apos;s explore what we can build together.
            </h2>

            <p className="text-[16px] sm:text-[18px] text-[var(--text-secondary)] leading-relaxed mb-10 max-w-2xl mx-auto font-normal">
              Braxvio welcomes thoughtful conversations with potential partners, businesses, investors, researchers, media representatives, and people interested in our ventures. Select the purpose of your inquiry so we can understand your message and direct it appropriately.
            </p>

            {/* Dual Action Pill Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-[15px] font-medium text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 active:scale-[0.98] transition-all shadow-md focus-visible:ring-2 focus-visible:ring-[var(--accent-cobalt)]"
              >
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/ventures"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full text-[15px] font-medium text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--bg-secondary)] border border-[var(--border-strong)] active:scale-[0.98] transition-all shadow-xs"
              >
                Explore Our Ventures
              </Link>
            </div>

            <p className="text-xs text-[var(--text-tertiary)] tracking-wide">
              Disciplined execution · Enterprise partnerships · Long-term capital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
