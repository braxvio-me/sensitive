import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-24 md:py-36 flex items-center justify-center">
      <div className="content-container max-w-lg text-center">
        <p className="text-[64px] sm:text-[80px] font-bold tracking-[-0.04em] leading-none text-[var(--text-tertiary)] mb-6 tabular-nums">
          404
        </p>

        <h1 className="text-[30px] sm:text-[36px] font-bold text-[var(--text-primary)] tracking-tight mb-4">
          This page isn&apos;t available
        </h1>

        <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed mb-8">
          The requested page or venture profile does not exist or has not been approved for public publication under Braxvio venture governance.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary w-full sm:w-auto">
            <ArrowLeft className="w-4 h-4" />
            Return to Homepage
          </Link>
          <Link href="/ventures" className="btn btn-secondary w-full sm:w-auto">
            Explore Ventures
          </Link>
        </div>
      </div>
    </div>
  );
}
