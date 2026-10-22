"use client";

import React, { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CopyButtonProps {
  /** Text to copy. Leave out to copy the current page URL. */
  value?: string;
  label?: string;
  copiedLabel?: string;
  className?: string;
}

export function CopyButton({ value, label = "Copy", copiedLabel = "Copied", className = "" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value ?? window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 h-8 px-3 rounded-full border border-[var(--border-strong)] text-[13px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer ${className}`}
    >
      {copied ? <Check className="w-3.5 h-3.5 text-[var(--accent-text)]" /> : <Copy className="w-3.5 h-3.5" />}
      <span aria-live="polite">{copied ? copiedLabel : label}</span>
    </button>
  );
}
