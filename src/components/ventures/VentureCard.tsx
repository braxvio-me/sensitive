import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Venture } from "@/types/venture";
import { VentureStatus } from "@/components/ui/VentureStatus";
import { splitCapability } from "@/lib/format";

interface VentureCardProps {
  venture: Venture;
  headingLevel?: "h2" | "h3";
  showTags?: boolean;
}

export function VentureCard({ venture, headingLevel = "h3", showTags = false }: VentureCardProps) {
  const Heading = headingLevel;
  // Status already has its own indicator, so a tag that repeats it is dropped
  const tags = venture.secondaryTags.filter((tag) => tag !== venture.status);

  return (
    <article className="relative flex flex-col p-6 sm:p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] transition-colors duration-200 hover:border-[var(--border-strong)] group">
      <div className="flex items-center justify-between gap-3 mb-5">
        <span className="text-[13px] text-[var(--text-tertiary)] truncate">{venture.primaryCategory}</span>
        <VentureStatus status={venture.status} />
      </div>

      <Heading className="text-[22px] font-semibold tracking-tight text-[var(--text-primary)] mb-1.5">
        {/* Stretched link: the whole card is the click target */}
        <Link
          href={`/ventures/${venture.slug}`}
          className="after:absolute after:inset-0 after:rounded-2xl group-hover:text-[var(--accent-text)] transition-colors"
        >
          {venture.name}
        </Link>
      </Heading>
      <p className="text-[15px] font-medium text-[var(--text-secondary)] mb-3">{venture.tagline}</p>
      <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed line-clamp-3 mb-6">{venture.summary}</p>

      <ul className="space-y-1.5 mb-6">
        {venture.keyCapabilities.slice(0, 2).map((cap) => {
          const { title, body } = splitCapability(cap);
          return (
            <li key={cap} className="flex items-baseline gap-2.5 text-[13.5px] text-[var(--text-secondary)]">
              <span aria-hidden="true" className="size-1 rounded-full bg-[var(--text-tertiary)] shrink-0 translate-y-[-2px]" />
              <span className="truncate">{title ?? body}</span>
            </li>
          );
        })}
      </ul>

      {showTags && tags.length > 0 && (
        <p className="text-[13px] text-[var(--text-tertiary)] mb-6">{tags.join(" · ")}</p>
      )}

      <div className="mt-auto pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between gap-3">
        <span className="text-[13px] text-[var(--text-tertiary)] truncate">{venture.ownershipRelationship}</span>
        <span className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--accent-text)] shrink-0">
          View profile
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  );
}
