"use client";

import React, { useState } from "react";
import { AlertCircle, CheckCircle2, Loader2, Mail, Send } from "lucide-react";

const DISCIPLINES = [
  {
    title: "Extreme Craft & Rigor",
    description: "We care about the invisible details: database query plans, typography leading, cache invalidation, and edge-case fault recovery.",
  },
  {
    title: "Radical Ownership",
    description: "You will never encounter layers of bureaucracy. Engineers, designers, and operators own problem domains from initial field research to production telemetry.",
  },
  {
    title: "Curiosity over Dogma",
    description: "We test our assumptions in real Ghanaian and African marketplaces. When empirical reality contradicts software theory, reality wins.",
  },
  {
    title: "Human Responsibility",
    description: "Our software touches healthcare dispensing and student livelihood. We take privacy, security, and algorithmic fairness seriously.",
  },
];

const EMPTY_FORM = {
  name: "",
  email: "",
  discipline: "Engineering",
  portfolioUrl: "",
  note: "",
  privacyConsent: false,
  honeypot: "",
};

export default function CareersPage() {
  const [formData, setFormData] = useState(EMPTY_FORM);
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
    <div className="pt-10 md:pt-20 pb-16 md:pb-24">
      <div className="content-container max-w-4xl">
        {/* Header */}
        <header className="mb-12 md:mb-20">
          <h1 className="text-[40px] sm:text-[52px] font-bold text-[var(--text-primary)] tracking-[-0.035em] leading-[1.06] mb-6">
            Build what <span className="text-[var(--accent-text)]">should exist.</span>
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[var(--text-secondary)] leading-relaxed max-w-3xl">
            Join engineers, researchers, and systems thinkers building technology designed around meaningful human problems. We do not promote corporate clichés. We optimize for autonomy, craftsmanship, deep work, and long-term societal impact.
          </p>
        </header>

        {/* Culture Disciplines from braxvio.com */}
        <section aria-labelledby="how-we-work" className="mb-12 md:mb-20">
          <h2 id="how-we-work" className="text-[26px] sm:text-[30px] font-bold text-[var(--text-primary)] tracking-tight mb-8">
            How we work
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {DISCIPLINES.map((discipline) => (
              <li key={discipline.title} className="pt-5 border-t border-[var(--border-strong)]">
                <h3 className="text-[18px] font-semibold text-[var(--text-primary)] tracking-tight mb-2">{discipline.title}</h3>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{discipline.description}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Open roles status */}
        <section className="mb-12 md:mb-20 p-7 sm:p-9 rounded-2xl bg-[var(--bg-secondary)] flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-[24px] font-semibold text-[var(--text-primary)] tracking-tight mb-2">
              No open roles right now.
            </h2>
            <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-xl">
              We do not fabricate job postings to artificially inflate company size. However, we are always eager to meet disciplined engineers, systems designers, and domain specialists who care deeply about technological craft.
            </p>
          </div>
          <a
            href="mailto:jobs@braxvio.com?subject=Braxvio%20Talent%20Inquiry"
            className="btn btn-secondary shrink-0 self-start md:self-auto"
          >
            <Mail className="w-4 h-4" />
            jobs@braxvio.com
          </a>
        </section>

        {/* Expression of Interest Form */}
        <section aria-labelledby="express-interest" className="p-6 sm:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
          <div className="mb-8">
            <h2 id="express-interest" className="text-[24px] font-semibold text-[var(--text-primary)] tracking-tight mb-2">
              Express Your Interest
            </h2>
            <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
              If you are an engineer, researcher, or product builder aligned with our operating principles, tell us about what you build.
            </p>
          </div>

          {status === "success" ? (
            <div role="status" className="py-10 text-center">
              <CheckCircle2 className="w-10 h-10 text-[var(--accent-text)] mx-auto mb-4" strokeWidth={1.75} />
              <h3 className="text-[20px] font-semibold text-[var(--text-primary)] mb-2">
                Expression of Interest Received
              </h3>
              <p className="text-[15px] text-[var(--text-secondary)] max-w-md mx-auto mb-7 leading-relaxed">
                Thank you for reaching out. We treat applicant information with strict confidentiality. If your profile aligns with our venture requirements, we will follow up directly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setStatus("idle");
                  setFormData(EMPTY_FORM);
                }}
                className="btn btn-secondary btn-sm"
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
                  <label htmlFor="name" className="field-label">Full name</label>
                  <input
                    id="name"
                    required
                    type="text"
                    autoComplete="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ada Lovelace"
                    className="field"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="field-label">Email</label>
                  <input
                    id="email"
                    required
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ada@domain.com"
                    className="field"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="discipline" className="field-label">Primary discipline</label>
                  <select
                    id="discipline"
                    value={formData.discipline}
                    onChange={(e) => setFormData({ ...formData, discipline: e.target.value })}
                    className="field"
                  >
                    <option value="Engineering">Systems & Software Engineering</option>
                    <option value="Architecture">Infrastructure & Cloud Architecture</option>
                    <option value="Product">Product Leadership & Venture Design</option>
                    <option value="Security">Security & Cryptography</option>
                    <option value="Operations">Operations & Regulatory Logistics</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="portfolioUrl" className="field-label">
                    GitHub, portfolio or profile <span className="optional">(optional)</span>
                  </label>
                  <input
                    id="portfolioUrl"
                    type="url"
                    autoComplete="url"
                    value={formData.portfolioUrl}
                    onChange={(e) => setFormData({ ...formData, portfolioUrl: e.target.value })}
                    placeholder="https://github.com/username"
                    className="field"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="note" className="field-label">What do you build, and which problems do you care about?</label>
                <textarea
                  id="note"
                  required
                  rows={5}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Share details about systems you've architected, technical challenges you've overcome, or what resonates with our operating principles..."
                  className="field resize-y"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="privacyConsent"
                  type="checkbox"
                  required
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="mt-1 size-4 shrink-0 cursor-pointer"
                />
                <label htmlFor="privacyConsent" className="text-[14px] text-[var(--text-secondary)] leading-relaxed cursor-pointer">
                  I agree that Braxvio may process my submitted contact details and professional background solely for evaluating potential employment or technical collaboration. My data will not be sold, shared, or retained indefinitely.
                </label>
              </div>

              {errorMessage && (
                <div role="alert" className="form-error">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <button type="submit" disabled={status === "submitting"} className="btn btn-primary w-full sm:w-auto px-7">
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Express Interest
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
