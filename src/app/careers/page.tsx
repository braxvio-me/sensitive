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
            Careers & Culture
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
            Build what <span className="text-[var(--accent-technical)]">should exist.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-3xl font-normal">
            Join engineers, researchers, and systems thinkers building technology designed around meaningful human problems. We do not promote corporate clichés. We optimize for autonomy, craftsmanship, deep work, and long-term societal impact.
          </p>
        </div>

        {/* Culture Disciplines from braxvio.com */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          <div className="p-7 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
            <span className="font-mono text-xs font-semibold text-[var(--accent-technical)] mb-2 block">DISCIPLINE 01</span>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Extreme Craft & Rigor</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              We care about the invisible details: database query plans, typography leading, cache invalidation, and edge-case fault recovery.
            </p>
          </div>

          <div className="p-7 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
            <span className="font-mono text-xs font-semibold text-sky-500 mb-2 block">DISCIPLINE 02</span>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Radical Ownership</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              You will never encounter layers of bureaucracy. Engineers, designers, and operators own problem domains from initial field research to production telemetry.
            </p>
          </div>

          <div className="p-7 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
            <span className="font-mono text-xs font-semibold text-amber-500 mb-2 block">DISCIPLINE 03</span>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Curiosity over Dogma</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              We test our assumptions in real Ghanaian and African marketplaces. When empirical reality contradicts software theory, reality wins.
            </p>
          </div>

          <div className="p-7 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
            <span className="font-mono text-xs font-semibold text-emerald-500 mb-2 block">DISCIPLINE 04</span>
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Human Responsibility</h3>
            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
              Our software touches healthcare dispensing and student livelihood. We take privacy, security, and algorithmic fairness seriously.
            </p>
          </div>
        </div>

        {/* Authentic Status Banner */}
        <div className="p-8 sm:p-10 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] mb-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-[#FFFBEB] dark:bg-[#451A03] text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-700 mb-3">
              Role Status // Authentic Transparency
            </div>
            <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-2">
              No open roles right now.
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed max-w-xl">
              We do not fabricate job postings to artificially inflate company size. However, we are always eager to meet disciplined engineers, systems designers, and domain specialists who care deeply about technological craft.
            </p>
          </div>
          <a
            href="mailto:jobs@braxvio.com?subject=Braxvio%20Talent%20Inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-mono font-bold bg-[var(--accent-technical)] text-white hover:opacity-90 transition-opacity shrink-0"
          >
            Express Interest: jobs@braxvio.com
          </a>
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
            <div className="p-8 rounded-2xl bg-[#ECFDF5] dark:bg-[#064E3B] border border-emerald-200 dark:border-emerald-700 text-center">
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
