import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36 flex items-center justify-center">
      <div className="content-container max-w-lg text-center">
        <div className="w-14 h-14 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center mx-auto mb-6 text-[var(--accent-cobalt)] shadow-xs">
          <Compass className="w-7 h-7" />
        </div>

        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[var(--accent-technical)] mb-2 block">
          404 — Resource Not Found
        </span>

        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
          Unpublished or Unverified Destination
        </h1>

        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8">
          The requested page or venture profile does not exist or has not been approved for public publication under Braxvio venture governance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Return to Homepage
          </Link>
          <Link
            href="/ventures"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold text-[var(--text-primary)] bg-[var(--surface-elevated)] border border-[var(--border-strong)] hover:bg-[var(--bg-secondary)] transition-all"
          >
            Explore Verified Ventures
          </Link>
        </div>
      </div>
    </div>
  );
}
