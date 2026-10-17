import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BraxvioLogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BraxvioLogo({
  className = "",
  iconOnly = false,
  size = "md",
}: BraxvioLogoProps) {
  // Proportions: moderate, confident, balanced, with high-craft subtle frame
  const dimensions = {
    sm: {
      box: "h-8 w-8",
      img: 64,
      title: "text-[18px]",
      sub: "text-[9.5px]",
    },
    md: {
      box: "h-11 w-11 sm:h-12 sm:w-12",
      img: 96,
      title: "text-[22px] sm:text-[24px]",
      sub: "text-[10.5px]",
    },
    lg: {
      box: "h-14 w-14 sm:h-16 sm:w-16",
      img: 128,
      title: "text-[26px] sm:text-[30px]",
      sub: "text-[11.5px]",
    },
  }[size];

  return (
    <Link
      href="/"
      aria-label="Braxvio homepage"
      className={`inline-flex items-center gap-3.5 group select-none ${className}`}
    >
      {/* Official Braxvio Emblem */}
      <div
        className={`relative flex items-center justify-center ${dimensions.box} rounded-xl overflow-hidden shrink-0 border border-black/[0.08] dark:border-white/[0.12] bg-white dark:bg-[#121418] p-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.35)] transition-all duration-300 group-hover:scale-[1.04] group-hover:border-[var(--accent-primary)] group-hover:shadow-[0_0_16px_rgba(56,189,248,0.22)]`}
      >
        <Image
          src="/brand/braxvio-symbol.png"
          alt="Braxvio Official Symbol"
          width={dimensions.img}
          height={dimensions.img}
          priority
          unoptimized
          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`${dimensions.title} font-bold tracking-[-0.03em] text-[var(--text-primary)] leading-none transition-colors group-hover:text-[var(--accent-primary)]`}
            >
              Braxvio
            </span>
          </div>
          <span
            className={`${dimensions.sub} uppercase font-semibold tracking-[0.14em] text-[var(--text-tertiary)] leading-tight mt-1 transition-colors group-hover:text-[var(--text-secondary)]`}
          >
            Technology Parent Company
          </span>
        </div>
      )}
    </Link>
  );
}
