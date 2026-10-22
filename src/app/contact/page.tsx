"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, ArrowUpRight, Loader2, MessageCircle } from "lucide-react";
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
    <div className="p-6 sm:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
      <h2 id="inquiry-form" className="text-[24px] font-semibold text-[var(--text-primary)] tracking-tight mb-8">
        Send an inquiry
      </h2>
      {status === "success" ? (
        <div role="status" className="py-10 text-center">
          <CheckCircle2 className="w-10 h-10 text-[var(--accent-text)] mx-auto mb-4" strokeWidth={1.75} />
          <h3 className="text-[20px] font-semibold text-[var(--text-primary)] mb-2">
            Message sent
          </h3>
          <p className="text-[15px] text-[var(--text-secondary)] max-w-md mx-auto mb-7 leading-relaxed">
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
            className="btn btn-secondary btn-sm"
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
                className="field-label"
              >
                Your name
              </label>
              <input
                id="name"
                required
                type="text"
                autoComplete="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Marcus Garvey"
                className="field"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="field-label"
              >
                Email
              </label>
              <input
                id="email"
                required
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="marcus@organization.com"
                className="field"
              />
            </div>
          </div>

          {/* Row 2: Organization and Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="organization"
                className="field-label"
              >
                Organization <span className="optional">(optional)</span>
              </label>
              <input
                id="organization"
                type="text"
                autoComplete="organization"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Enterprise Corp / Research Lab"
                className="field"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="field-label"
              >
                Subject <span className="optional">(optional)</span>
              </label>
              <input
                id="subject"
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Brief summary of inquiry"
                className="field"
              />
            </div>
          </div>

          {/* Row 3: Inquiry Type and Related Venture */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="inquiryType"
                className="field-label"
              >
                Purpose of inquiry
              </label>
              <select
                id="inquiryType"
                value={formData.inquiryType}
                onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                className="field"
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
                className="field-label"
              >
                Related venture <span className="optional">(optional)</span>
              </label>
              <select
                id="relatedVenture"
                value={formData.relatedVenture}
                onChange={(e) => setFormData({ ...formData, relatedVenture: e.target.value })}
                className="field"
              >
                <option value="">None (general inquiry)</option>
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
              className="field-label"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Detail the scope of your inquiry, collaboration model, or questions..."
              className="field resize-y"
            />
          </div>

          {/* Privacy Consent */}
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
              I agree that Braxvio may process my details to respond to this institutional communication. Braxvio upholds strict privacy standards and will not share or monetize submitted records.
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
    <div className="pt-10 md:pt-20 pb-16 md:pb-24">
      <div className="content-container max-w-5xl">
        <header className="max-w-3xl mb-14">
          <h1 className="text-[40px] sm:text-[52px] font-bold text-[var(--text-primary)] tracking-[-0.035em] leading-[1.06] mb-5">
            Let&apos;s build the future thoughtfully.
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[var(--text-secondary)] leading-relaxed">
            Whether exploring ecosystem partnerships, press inquiries, or institutional collaboration, our team is at your disposal.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          {/* Channels */}
          <aside className="lg:col-span-4 space-y-8 lg:pt-2">
            <section>
              <h2 className="text-[15px] font-semibold text-[var(--text-primary)] mb-2">Headquarters</h2>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                Braxvio Technologies
                <br />
                Accra, Greater Accra Region, Ghana
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=5.6037,-0.1870"
                target="_blank"
                rel="noopener noreferrer"
                className="link-accent text-[14px] mt-2"
              >
                Open in Google Maps
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </section>

            <section className="pt-8 border-t border-[var(--border-subtle)]">
              <h2 className="text-[15px] font-semibold text-[var(--text-primary)] mb-3">Email</h2>
              <dl className="space-y-3 text-[15px]">
                {[
                  { label: "Partnerships", email: "partnerships@braxvio.com" },
                  { label: "Press & media", email: "press@braxvio.com" },
                  { label: "General", email: "admin@braxvio.com" },
                  { label: "Careers", email: "jobs@braxvio.com" },
                ].map((inbox) => (
                  <div key={inbox.email}>
                    <dt className="text-[13px] text-[var(--text-tertiary)]">{inbox.label}</dt>
                    <dd>
                      <a href={`mailto:${inbox.email}`} className="text-[var(--text-primary)] hover:text-[var(--accent-text)] underline decoration-[var(--border-strong)] hover:decoration-current transition-colors break-all">
                        {inbox.email}
                      </a>
                    </dd>
                  </div>
                ))}
              </dl>
            </section>

            <section className="pt-8 border-t border-[var(--border-subtle)]">
              <h2 className="text-[15px] font-semibold text-[var(--text-primary)] mb-2">WhatsApp</h2>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-4">
                Connect directly with our team for prompt partnership and project discussions.
              </p>
              <a
                href="https://wa.me/qr/V2VVDKVB7J7WL1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </section>
          </aside>

          <div className="lg:col-span-8">
            {/* Suspense boundary for useSearchParams */}
            <Suspense fallback={<div className="p-12 text-center text-[14px] text-[var(--text-tertiary)]">Loading form…</div>}>
              <ContactFormInner />
            </Suspense>

            <p className="mt-5 text-[13.5px] text-[var(--text-tertiary)] leading-relaxed">
              Submissions are handled in line with the Ghana Data Protection Act 2012 (Act 843). See our{" "}
              <Link href="/privacy" className="underline hover:text-[var(--text-primary)]">privacy policy</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
