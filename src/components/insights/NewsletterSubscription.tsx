"use client";

import React, { useState } from "react";
import { BookOpen, Check } from "lucide-react";

export function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div className="p-8 sm:p-12 rounded-3xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)] max-w-3xl mx-auto text-center">
      <BookOpen className="w-8 h-8 text-[var(--accent-cobalt)] mx-auto mb-4" />
      <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
        The Braxvio Quarterly
      </h2>
      <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-8 max-w-xl mx-auto">
        A quiet briefing delivered once every three months covering African macro-technology trends, architectural breakthroughs, and portfolio milestones. Strictly zero marketing noise.
      </p>

      {submitted ? (
        <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B] border border-emerald-200 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 text-sm font-medium">
          <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <span>You have been added to the Braxvio Quarterly ledger.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter executive email address..."
            aria-label="Email address for Braxvio Quarterly"
            className="w-full px-4 py-3 rounded-full text-sm bg-[var(--surface-elevated)] border border-[var(--border-strong)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-cobalt)]"
          />
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-3 rounded-full text-sm font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 active:scale-[0.98] transition-all shrink-0 cursor-pointer shadow-xs"
          >
            Subscribe
          </button>
        </form>
      )}

      <p className="text-[11px] font-mono text-[var(--text-tertiary)] mt-3">
        Protected under Ghana DPA 2012 (Act 843) · Unsubscribe anytime with 1-click.
      </p>
    </div>
  );
}
