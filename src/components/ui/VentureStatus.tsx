import React from "react";
import type { VentureStatus as VentureStatusValue } from "@/types/venture";

interface VentureStatusProps {
  status: VentureStatusValue;
  className?: string;
}

/**
 * Quiet stage indicator: brand-blue dot for Live, solid grey for beta,
 * hollow grey ring for anything still being built. Text stays neutral.
 */
export function VentureStatus({ status, className = "" }: VentureStatusProps) {
  const dot =
    status === "Live"
      ? "bg-[var(--status-live)]"
      : status === "Private Beta"
      ? "bg-[var(--status-muted)]"
      : "border-[1.5px] border-[var(--status-muted)]";

  return (
    <span
      className={`inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--text-secondary)] whitespace-nowrap ${className}`}
    >
      <span aria-hidden="true" className={`size-[7px] rounded-full shrink-0 ${dot}`} />
      {status}
    </span>
  );
}
