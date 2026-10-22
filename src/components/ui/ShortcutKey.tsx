"use client";

import React, { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const isApplePlatform = () => /Mac|iPhone|iPad|iPod/.test(navigator.platform || navigator.userAgent);

/** Renders the command palette shortcut as ⌘K on Apple devices and Ctrl K everywhere else. */
export function ShortcutKey({ className = "" }: { className?: string }) {
  const isApple = useSyncExternalStore(subscribe, isApplePlatform, () => true);

  return (
    <kbd
      className={`inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-md border border-[var(--border-subtle)] bg-[var(--bg-secondary)] text-[11px] font-medium text-[var(--text-tertiary)] ${className}`}
    >
      {isApple ? "⌘K" : "Ctrl K"}
    </kbd>
  );
}
