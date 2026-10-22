"use client";

import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  // Visual state comes from `dark:` (the <html> data-theme set before first paint),
  // so the switch renders correctly in the server HTML, before React hydrates.
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative inline-flex items-center w-[60px] h-[32px] rounded-full cursor-pointer shrink-0 select-none bg-[var(--bg-secondary)] border border-[var(--border-strong)] ${className}`}
    >
      {/* Sliding Thumb */}
      <span className="absolute top-[3px] left-[3px] dark:left-[31px] w-[24px] h-[24px] rounded-full bg-[var(--surface-elevated)] shadow-[0_1px_3px_rgba(0,0,0,0.2)] transition-[left] duration-200 ease-out pointer-events-none" />

      <span className="relative z-10 flex items-center justify-center w-[28px] h-full ml-[1px] text-[var(--text-primary)] dark:text-[var(--text-tertiary)] transition-colors">
        <Sun className="w-[14px] h-[14px]" strokeWidth={2.25} />
      </span>

      <span className="relative z-10 flex items-center justify-center w-[28px] h-full mr-[1px] text-[var(--text-tertiary)] dark:text-[var(--text-primary)] transition-colors">
        <Moon className="w-[13px] h-[13px]" strokeWidth={2.25} />
      </span>
    </button>
  );
}
