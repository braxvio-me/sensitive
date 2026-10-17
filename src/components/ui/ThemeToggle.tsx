"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme, Theme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const activeTheme = mounted ? theme : "system";

  const options: { id: Theme; label: string; icon: React.ReactNode; activeColor: string }[] = [
    {
      id: "light",
      label: "Light theme",
      icon: <Sun className="w-3.5 h-3.5" />,
      activeColor: "text-amber-500 dark:text-amber-400",
    },
    {
      id: "system",
      label: "System theme (OS sync)",
      icon: <Monitor className="w-3.5 h-3.5" />,
      activeColor: "text-teal-500 dark:text-teal-400",
    },
    {
      id: "dark",
      label: "Dark theme",
      icon: <Moon className="w-3.5 h-3.5" />,
      activeColor: "text-sky-500 dark:text-sky-400",
    },
  ];

  // Active index for sliding indicator pill
  const activeIndex = options.findIndex((o) => o.id === activeTheme);

  return (
    <div
      role="radiogroup"
      aria-label="Color theme switcher"
      className={`relative inline-flex items-center p-1 rounded-full border border-neutral-200/90 dark:border-neutral-800 bg-neutral-100/90 dark:bg-neutral-900/90 shadow-2xs backdrop-blur-sm select-none transition-colors ${className}`}
    >
      {/* Animated Sliding Pill Highlight */}
      {mounted && (
        <span
          className="absolute top-1 bottom-1 w-7 rounded-full bg-white dark:bg-neutral-800 border border-black/[0.06] dark:border-white/[0.08] shadow-xs transition-transform duration-250 ease-out pointer-events-none"
          style={{
            transform: `translateX(${activeIndex * 28}px)`,
          }}
        />
      )}

      {options.map((option) => {
        const isSelected = activeTheme === option.id;

        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={isSelected}
            aria-label={option.label}
            title={option.label}
            onClick={() => setTheme(option.id)}
            className={`relative z-10 flex items-center justify-center w-7 h-7 rounded-full cursor-pointer transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
              isSelected
                ? `${option.activeColor} font-semibold`
                : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-200"
            }`}
          >
            {option.icon}
          </button>
        );
      })}
    </div>
  );
}
