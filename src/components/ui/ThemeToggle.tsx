"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={`w-[60px] h-[32px] rounded-full bg-neutral-200 dark:bg-neutral-800 shrink-0 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex items-center w-[60px] h-[32px] rounded-full cursor-pointer transition-colors duration-200 shrink-0 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-cobalt)] ${
        isDark
          ? "bg-[#1E293B] border border-[#334155]"
          : "bg-[#E2E4E9] border border-[#C5C8CE]"
      } ${className}`}
    >
      {/* Sliding Thumb */}
      <span
        className={`absolute top-[3px] w-[24px] h-[24px] rounded-full shadow-md transition-all duration-200 ease-out pointer-events-none ${
          isDark
            ? "left-[32px] bg-white border border-[#E2E4E9]"
            : "left-[3px] bg-white border border-[#D1D5DB]"
        }`}
      />

      {/* Sun icon (left) */}
      <span
        className={`relative z-10 flex items-center justify-center w-[28px] h-full ml-[1px] transition-colors ${
          !isDark ? "text-amber-500" : "text-slate-500"
        }`}
      >
        <Sun className="w-[14px] h-[14px]" strokeWidth={2.5} />
      </span>

      {/* Moon icon (right) */}
      <span
        className={`relative z-10 flex items-center justify-center w-[28px] h-full mr-[1px] transition-colors ${
          isDark ? "text-sky-300" : "text-neutral-400"
        }`}
      >
        <Moon className="w-[13px] h-[13px]" strokeWidth={2.5} />
      </span>
    </button>
  );
}
