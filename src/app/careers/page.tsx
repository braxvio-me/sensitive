"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Send, ShieldCheck, Sparkles, Terminal } from "lucide-react";

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discipline: "Engineering",
    portfolioUrl: "",
    note: "",
    privacyConsent: false,
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot detection
    if (!formData.privacyConsent) {
      setErrorMessage("Please acknowledge the applicant data privacy notice.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit expression of interest.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected error occurred. Please try again."
      );
    }
  };

  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-4xl">
        {/* Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] bg-[var(--accent-technical)]/10 mb-4">
            Talent & Collaboration
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
            Build what deserves to last.
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl font-normal">
            We are interested in people who care about the quality of their work, think carefully about the problems they solve, and take responsibility for what they build. Across Braxvio and its ventures, our ambition is to develop useful technology businesses through thoughtful engineering, strong product judgment, and a long-term perspective.
          </p>
        </div>

        {/* Current Hiring Truth & Philosophy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
            <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight mb-3">
              What We Value
            </h2>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>High Craftsmanship:</strong> Writing readable, maintainable, production-ready software designed to endure.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Direct Ownership:</strong> Taking responsibility for systems end-to-end, from architecture to runtime reliability.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span><strong>Disciplined Thinking:</strong> Valuing simplicity, sound data models, and real customer utility over transient hype.</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-500/20 mb-3">
                General Expression of Interest
              </div>
              <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
                Confirmed Openings Status
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Braxvio practices disciplined, intentional hiring. Rather than posting speculative job vacancies, we review expressions of interest on a rolling basis for senior engineering, systems architecture, and venture leadership roles.
              </p>
            </div>
            <p className="text-xs text-[var(--text-tertiary)] pt-4 border-t border-[var(--border-subtle)]">
              Verified Hiring Safeguard: Zero phantom job requisitions.
            </p>
          </div>
        </div>

        {/* Expression of Interest Form */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-md">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
              Express Your Interest
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              If you are an engineer, researcher, or product builder aligned with our operating principles, tell us about what you build.
            </p>
          </div>

          {status === "success" ? (
            <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
              <CheckCircle2 className="w-10 h-10 text-emerald-600 dark:text-emerald-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">
                Expression of Interest Received
              </h3>
              <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto mb-6">
                Thank you for reaching out. We treat applicant information with strict confidentiality. If your profile aligns with our venture requirements, we will follow up directly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setFormData({
                    name: "",
                    email: "",
                    discipline: "Engineering",
                    portfolioUrl: "",
                    note: "",
                    privacyConsent: false,
                    honeypot: "",
                  });
                }}
                className="px-6 py-2.5 rounded-full text-xs font-semibold bg-[var(--surface-elevated)] border border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors"
              >
                Submit Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot field (hidden from real users) */}
              <div className="hidden" aria-hidden="true">
                <input
                  type="text"
                  name="system_token"
                  tabIndex={-1}
                  value={formData.honeypot}
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                  autoComplete="off"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    id="name"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
                  >
                    Work / Personal Email *
                  </label>
                  <input
                    id="email"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@domain.com"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="discipline"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
                  >
                    Primary Discipline
                  </label>
                  <select
                    id="discipline"
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
                  >
                    <option value="Engineering">Systems & Software Engineering</option>
                    <option value="Architecture">Infrastructure & Cloud Architecture</option>
                    <option value="Product">Product Leadership & Venture Design</option>
                    <option value="Security">Security & Cryptography</option>
                    <option value="Operations">Operations & Regulatory Logistics</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="portfolioUrl"
                    className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
                  >
                    GitHub, Portfolio, or Profile URL
                  </label>
                  <input
                    id="portfolioUrl"
                    type="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="note"
                  className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
                >
                  Tell us about what you build and the problems you care about *
                </label>
                <textarea
                  id="note"
                  required
                  rows={4}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Share details about systems you've architected, technical challenges you've overcome, or what resonates with our operating principles..."
                  className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-cobalt)] resize-y"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  id="privacyConsent"
                  type="checkbox"
                  required
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-[var(--border-strong)] text-[var(--accent-cobalt)] focus:ring-[var(--accent-cobalt)]"
                />
                <label htmlFor="privacyConsent" className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  I agree that Braxvio may process my submitted contact details and professional background solely for evaluating potential employment or technical collaboration. My data will not be sold, shared, or retained indefinitely.
                </label>
              </div>

              {errorMessage && (
                <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 active:scale-[0.98] transition-all disabled:opacity-50 shadow-sm cursor-pointer"
              >
                {status === "submitting" ? (
                  <span>Submitting Expression...</span>
                ) : (
                  <>
                    <span>Express Interest</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
