"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";
import { VENTURES_DATA } from "@/content/ventures";

const INQUIRY_TYPES = [
  "Strategic Partnerships",
  "Enterprise Collaboration",
  "Investment & Institutional Dialogue",
  "Venture-Specific Questions",
  "Media & Press",
  "Careers & Talent",
  "Project Proposals",
  "General Institutional Inquiry",
];

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "Strategic Partnerships";
  const initialVenture = searchParams.get("venture") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    inquiryType: INQUIRY_TYPES.includes(initialType) ? initialType : "Strategic Partnerships",
    relatedVenture: initialVenture,
    subject: initialVenture ? `Partnership Inquiry regarding ${initialVenture}` : "",
    message: "",
    privacyConsent: false,
    honeypot: "",
  });

  useEffect(() => {
    const typeParam = searchParams.get("type");
    const ventureParam = searchParams.get("venture");
    if (typeParam && INQUIRY_TYPES.includes(typeParam)) {
      setFormData((prev) => ({ ...prev, inquiryType: typeParam }));
    }
    if (ventureParam) {
      setFormData((prev) => ({
        ...prev,
        relatedVenture: ventureParam,
        subject: prev.subject || `Partnership Inquiry regarding ${ventureParam}`,
      }));
    }
  }, [searchParams]);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return;

    if (!formData.privacyConsent) {
      setErrorMessage("Please acknowledge the privacy notice to proceed.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message.");
      }

      setStatus("success");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "An unexpected network error occurred."
      );
    }
  };

  return (
    <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-lg mb-12">
      {status === "success" ? (
        <div className="p-10 text-center">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-3">
            Message Dispatched
          </h2>
          <p className="text-base text-[var(--text-secondary)] max-w-md mx-auto mb-8 leading-relaxed">
            Thank you for initiating this conversation. Your inquiry has been routed to our institutional coordination team for review.
          </p>
          <button
            type="button"
            onClick={() => {
              setStatus("idle");
              setFormData({
                name: "",
                email: "",
                organization: "",
                inquiryType: "Strategic Partnerships",
                relatedVenture: "",
                subject: "",
                message: "",
                privacyConsent: false,
                honeypot: "",
              });
            }}
            className="px-7 py-3 rounded-full text-xs font-semibold bg-[var(--surface-elevated)] border border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Bot detection honeypot */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="institution_stamp"
              tabIndex={-1}
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              autoComplete="off"
            />
          </div>

          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
              >
                Your Name *
              </label>
              <input
                id="name"
                required
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Marcus Garvey"
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
              >
                Email Address *
              </label>
              <input
                id="email"
                required
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="marcus@organization.com"
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
              />
            </div>
          </div>

          {/* Row 2: Organization and Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="organization"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
              >
                Organization / Entity (Optional)
              </label>
              <input
                id="organization"
                type="text"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Enterprise Corp / Research Lab"
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief summary of inquiry"
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
              />
            </div>
          </div>

          {/* Row 3: Inquiry Type and Related Venture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="inquiryType"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
              >
                Purpose of Inquiry *
              </label>
              <select
                id="inquiryType"
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
              >
                {INQUIRY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="relatedVenture"
                className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
              >
                Related Venture (If Applicable)
              </label>
              <select
                id="relatedVenture"
                value={formData.relatedVenture}
                onChange={(e) => setFormData({ ...formData, relatedVenture: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
              >
                <option value="">General Parent Company Dialogue</option>
                {VENTURES_DATA.map((v) => (
                  <option key={v.id} value={v.name}>
                    {v.name} ({v.primaryCategory})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message Area */}
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)] mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Detail the scope of your inquiry, collaboration model, or questions..."
              className="w-full px-4 py-3 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-primary)] text-sm text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-cobalt)] resize-y"
            />
          </div>

          {/* Privacy Consent */}
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
              I agree that Braxvio may process my details to respond to this institutional communication. Braxvio upholds strict privacy standards and will not share or monetize submitted records.
            </label>
          </div>

          {errorMessage && (
            <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-600 dark:text-red-400 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 active:scale-[0.98] transition-all disabled:opacity-50 shadow-sm cursor-pointer"
          >
            {status === "submitting" ? (
              <span>Transmitting...</span>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-4xl">
        {/* Header */}
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] bg-[var(--accent-technical)]/10 mb-4">
            Institutional Inquiries
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-5">
            Let&apos;s explore what we can build together.
          </h1>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed font-normal">
            Braxvio welcomes thoughtful conversations with potential partners, businesses, investors, researchers, media representatives, and people interested in our ventures. Select the purpose of your inquiry so we can understand your message and direct it appropriately.
          </p>
        </div>

        {/* Suspense boundary for useSearchParams */}
        <Suspense fallback={<div className="p-12 text-center text-sm text-[var(--text-tertiary)]">Loading form...</div>}>
          <ContactFormInner />
        </Suspense>

        {/* Responsible Routing Note */}
        <div className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/50 text-xs text-[var(--text-tertiary)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Encrypted endpoint routing with rate limiting and automated bot defense.</span>
          </div>
          <span className="font-mono">routing.braxvio.institutional</span>
        </div>
      </div>
    </div>
  );
}
