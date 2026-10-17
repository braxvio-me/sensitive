import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ExternalLink, CheckCircle2, Terminal, ShieldCheck, Layers, Cpu, Globe } from "lucide-react";
import { getVentureBySlug, getPublishedVentures } from "@/content/ventures";

interface VenturePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const published = getPublishedVentures();
  return published.map((venture) => ({
    slug: venture.slug,
  }));
}

export async function generateMetadata({ params }: VenturePageProps): Promise<Metadata> {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);

  if (!venture) {
    return {
      title: "Venture Not Found",
    };
  }

  return {
    title: `${venture.name} — ${venture.primaryCategory}`,
    description: venture.description,
    openGraph: {
      title: `${venture.name} | Braxvio Portfolio`,
      description: venture.description,
    },
  };
}

export default async function VentureProfilePage({ params }: VenturePageProps) {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);

  // Strict publication safeguard: unverified or unpublished routes return 404
  if (!venture) {
    notFound();
  }

  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-4xl">
        {/* Back link */}
        <Link
          href="/ventures"
          className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Venture Directory
        </Link>

        {/* Profile Header */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-md mb-12">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-[var(--accent-technical)] font-semibold">
              {venture.primaryCategory} · {venture.ownershipRelationship}
            </span>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full ${
                venture.status === "Live"
                  ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                  : venture.status === "Private Beta"
                  ? "bg-sky-500/15 text-sky-700 dark:text-sky-400"
                  : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
              }`}
            >
              Status: {venture.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
            {venture.name}
          </h1>

          <p className="text-lg sm:text-xl font-medium text-[var(--text-secondary)] mb-6 leading-snug">
            {venture.tagline}
          </p>

          <p className="text-base text-[var(--text-secondary)] leading-relaxed mb-8">
            {venture.description}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[var(--border-subtle)]">
            <div className="flex flex-wrap gap-2">
              {venture.secondaryTags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {venture.publicUrl && (
              <a
                href={venture.publicUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 transition-colors shadow-xs"
              >
                Visit Official Platform
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Problem & Purpose Analysis */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
            <h2 className="text-base font-bold text-[var(--text-primary)] tracking-tight mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[var(--accent-cobalt)]" />
              Structural Problem Addressed
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {venture.problemSolved}
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
            <h2 className="text-base font-bold text-[var(--text-primary)] tracking-tight mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[var(--accent-cobalt)]" />
              Product Purpose & Thesis
            </h2>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {venture.productPurpose}
            </p>
          </div>
        </div>

        {/* Key Capabilities */}
        <div className="p-8 sm:p-10 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] mb-12">
          <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
            Core Technical Capabilities
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {venture.keyCapabilities.map((cap, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {cap}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture & Engineering Notes */}
        {venture.architectureNotes && (
          <div className="p-8 rounded-2xl border border-neutral-800 bg-neutral-950 text-neutral-200 font-mono text-xs mb-12 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span className="font-semibold text-neutral-300">
                  {venture.slug}.architecture.spec
                </span>
              </div>
              <span className="text-[11px] text-neutral-500">
                Braxvio Engineering Review
              </span>
            </div>
            <div className="space-y-2">
              {venture.architectureNotes.map((note, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-emerald-500 shrink-0">&gt;</span>
                  <span className="text-neutral-300 leading-relaxed">{note}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verification & Governance Footer */}
        <div className="p-6 rounded-xl border border-[var(--border-subtle)] bg-[var(--bg-secondary)]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-tertiary)]">
          <div>
            <span className="font-semibold text-[var(--text-primary)]">
              Braxvio Verified Publication Record
            </span>
            <p className="mt-0.5">
              Reviewed and publication-approved under Braxvio venture governance.
            </p>
          </div>
          <span className="font-mono">Last audit: {venture.lastReviewedAt}</span>
        </div>
      </div>
    </div>
  );
}
