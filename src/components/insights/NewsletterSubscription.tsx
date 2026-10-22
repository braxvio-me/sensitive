"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

export function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "We couldn't add you right now. Please try again.");
      }
      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "We couldn't add you right now. Please try again.");
    }
  };

  return (
    <section
      aria-labelledby="quarterly-heading"
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-7 sm:p-12 rounded-2xl bg-[var(--bg-secondary)]"
    >
      <div className="lg:col-span-6">
        <h2 id="quarterly-heading" className="text-[26px] sm:text-[32px] font-bold text-[var(--text-primary)] tracking-tight mb-3">
          The Braxvio Quarterly
        </h2>
        <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed max-w-xl">
          A quiet briefing delivered once every three months covering African macro-technology trends, architectural breakthroughs, and portfolio milestones. Strictly zero marketing noise.
        </p>
      </div>

      <div className="lg:col-span-6">
        {status === "success" ? (
          <div role="status" className="flex items-start gap-3 p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <CheckCircle2 className="w-5 h-5 text-[var(--accent-text)] shrink-0 mt-0.5" strokeWidth={1.75} />
            <div>
              <p className="text-[15px] font-semibold text-[var(--text-primary)]">You&apos;re on the list.</p>
              <p className="text-[14px] text-[var(--text-secondary)]">The next issue goes to {email}.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="quarterly-email" className="field-label">
              Email address
            </label>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                id="quarterly-email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="field bg-[var(--surface-elevated)]"
              />
              <button type="submit" disabled={status === "submitting"} className="btn btn-primary shrink-0">
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Subscribing…
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
            {status === "error" && errorMessage && (
              <div role="alert" className="form-error mt-3">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}
            <p className="text-[13px] text-[var(--text-tertiary)] mt-3">
              Protected under Ghana DPA 2012 (Act 843). Unsubscribe anytime with one click.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
