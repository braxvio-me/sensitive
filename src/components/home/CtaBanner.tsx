import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="pb-16 md:pb-28 bg-[var(--bg-primary)]">
      <div className="content-container">
        {/* Large Rounded Container Card matching ui/cta-desktop.png */}
        <div className="rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-6 py-14 sm:p-16 md:p-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-[30px] sm:text-[40px] md:text-[48px] font-bold text-[var(--text-primary)] tracking-tight mb-5 leading-[1.1]">
              Let&apos;s explore what we can build together.
            </h2>

            <p className="text-[16px] sm:text-[18px] text-[var(--text-secondary)] leading-relaxed mb-10 max-w-2xl mx-auto">
              Braxvio welcomes thoughtful conversations with potential partners, businesses, investors, researchers, media representatives, and people interested in our ventures. Select the purpose of your inquiry so we can understand your message and direct it appropriately.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
              <Link href="/contact" className="btn btn-primary w-full sm:w-auto px-7">
                Start a Conversation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/ventures" className="btn btn-secondary w-full sm:w-auto px-7">
                Explore Our Ventures
              </Link>
            </div>

            <p className="text-[13px] text-[var(--text-tertiary)]">
              Disciplined execution · Enterprise partnerships · Long-term capital
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
