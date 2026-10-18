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
  // Proportions: moderate, confident, balanced, with 100% transparent background
  const dimensions = {
    sm: {
      box: "h-8.5 w-8.5",
      img: 80,
      title: "text-[20px]",
      sub: "text-[9.5px]",
    },
    md: {
      box: "h-10 w-10 sm:h-10.5 sm:w-10.5",
      img: 100,
      title: "text-[22px] sm:text-[23px]",
      sub: "text-[10px]",
    },
    lg: {
      box: "h-13 w-13 sm:h-14 sm:w-14",
      img: 140,
      title: "text-[26px] sm:text-[28px]",
      sub: "text-[11px]",
    },
  }[size];

  return (
    <Link
      href="/"
      aria-label="Braxvio homepage"
      className={`inline-flex items-center gap-3 group select-none ${className}`}
    >
      {/* Official Braxvio Emblem with 100% Transparent Background */}
      <div
        className={`relative flex items-center justify-center ${dimensions.box} shrink-0 bg-transparent transition-transform duration-300 group-hover:scale-105`}
      >
        <Image
          src="/brand/braxvio-symbol.png"
          alt="Braxvio Official Symbol"
          width={dimensions.img}
          height={dimensions.img}
          priority
          unoptimized
          className="w-full h-full object-contain"
        />
      </div>

      {!iconOnly && (
        <span
          className={`${dimensions.title} font-bold tracking-[-0.03em] text-[var(--text-primary)] leading-none transition-colors group-hover:text-[var(--accent-primary)]`}
        >
          Braxvio
        </span>
      )}
    </Link>
  );
}
