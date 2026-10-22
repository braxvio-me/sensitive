import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPublishedVentures } from "@/content/ventures";
import { VentureCard } from "@/components/ventures/VentureCard";

export function VenturePortfolioPreview() {
  const ventures = getPublishedVentures();

  return (
    <section className="py-16 md:py-28 bg-[var(--bg-primary)]">
      <div className="content-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-14 gap-6">
          <h2 className="max-w-2xl text-[32px] sm:text-[40px] md:text-[48px] font-bold text-[var(--text-primary)] tracking-tight leading-[1.1]">
            Disciplined ventures across strategic verticals.
          </h2>
          <Link href="/ventures" className="link-accent text-[15px] self-start md:self-end shrink-0">
            Explore complete directory
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ventures.map((venture) => (
            <VentureCard key={venture.id} venture={venture} />
          ))}

          {/* Closes the grid with a next step instead of an empty cell */}
          <div className="flex flex-col justify-between gap-8 p-6 sm:p-7 rounded-2xl bg-[var(--bg-secondary)]">
            <div>
              <h3 className="text-[22px] font-semibold tracking-tight text-[var(--text-primary)] mb-2">
                Work with a venture
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                Pilots, integrations, distribution and institutional partnerships across the portfolio.
              </p>
            </div>
            <Link href="/partnerships" className="btn btn-secondary btn-sm self-start">
              See partnership pathways
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
