import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { getVentureBySlug, getPublishedVentures } from "@/content/ventures";
import { VentureStatus } from "@/components/ui/VentureStatus";
import { formatIsoDate, splitCapability } from "@/lib/format";

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

// The slug is URL data: reading it inside Suspense keeps navigation into the page instant
export default function VentureProfilePage({ params }: VenturePageProps) {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <VentureProfile params={params} />
    </Suspense>
  );
}

async function VentureProfile({ params }: VenturePageProps) {
  const { slug } = await params;
  const venture = getVentureBySlug(slug);

  // Strict publication safeguard: unverified or unpublished routes return 404
  if (!venture) {
    notFound();
  }

  const published = getPublishedVentures();
  const nextVenture = published[(published.findIndex((v) => v.slug === venture.slug) + 1) % published.length];
  const tags = venture.secondaryTags.filter((tag) => tag !== venture.status);

  return (
    <div className="pt-8 md:pt-14 pb-16 md:pb-24">
      <div className="content-container max-w-4xl">
        <Link
          href="/ventures"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          All ventures
        </Link>

        {/* Profile Header */}
        <header className="pb-10 mb-12 border-b border-[var(--border-subtle)]">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-5 text-[14px] text-[var(--text-tertiary)]">
            <span>{venture.primaryCategory}</span>
            <span aria-hidden="true">·</span>
            <span>{venture.ownershipRelationship}</span>
            <span aria-hidden="true">·</span>
            <VentureStatus status={venture.status} className="text-[14px]" />
          </div>

          <h1 className="text-[44px] sm:text-[60px] font-bold text-[var(--text-primary)] tracking-[-0.035em] leading-[1.02] mb-4">
            {venture.name}
          </h1>
          <p className="text-[20px] sm:text-[24px] font-medium text-[var(--text-primary)] tracking-tight leading-snug mb-6">
            {venture.tagline}
          </p>
          <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed max-w-[68ch] mb-8">{venture.description}</p>

          <div className="flex flex-wrap items-center gap-3">
            {venture.publicUrl && (
              <a href={venture.publicUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit {venture.name}
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
            <Link
              href={`/contact?venture=${encodeURIComponent(venture.name)}&type=Strategic+Partnerships`}
              className="btn btn-secondary"
            >
              Propose a pilot
            </Link>
          </div>

          {tags.length > 0 && <p className="mt-8 text-[14px] text-[var(--text-tertiary)]">{tags.join(" · ")}</p>}
        </header>

        {/* Problem & Purpose Analysis */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-[15px] font-semibold text-[var(--text-primary)] mb-3">The problem</h2>
            <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">{venture.problemSolved}</p>
          </div>
          <div>
            <h2 className="text-[15px] font-semibold text-[var(--text-primary)] mb-3">What {venture.name} is for</h2>
            <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">{venture.productPurpose}</p>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="mb-16">
          <h2 className="text-[26px] sm:text-[30px] font-bold text-[var(--text-primary)] tracking-tight mb-8">
            Core Capabilities
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
            {venture.keyCapabilities.map((cap) => {
              const { title, body } = splitCapability(cap);
              return (
                <li key={cap} className="pt-5 border-t border-[var(--border-strong)]">
                  {title && (
                    <h3 className="text-[17px] font-semibold text-[var(--text-primary)] tracking-tight mb-1.5">{title}</h3>
                  )}
                  <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{body}</p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Architecture & Engineering Notes */}
        {venture.architectureNotes && (
          <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-[var(--bg-secondary)]">
            <h2 className="text-[15px] font-semibold text-[var(--text-primary)] mb-4">Architecture</h2>
            <ul className="space-y-3">
              {venture.architectureNotes.map((note) => (
                <li key={note} className="flex items-baseline gap-3 text-[15px] text-[var(--text-secondary)] leading-relaxed">
                  <span aria-hidden="true" className="size-1 rounded-full bg-[var(--text-tertiary)] shrink-0 translate-y-[-3px]" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Review date and next venture */}
        <footer className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
          <p className="text-[14px] text-[var(--text-tertiary)]">
            Profile last reviewed{" "}
            <time dateTime={venture.lastReviewedAt} className="tabular-nums">
              {formatIsoDate(venture.lastReviewedAt)}
            </time>
          </p>
          {nextVenture && nextVenture.slug !== venture.slug && (
            <Link href={`/ventures/${nextVenture.slug}`} className="link-accent text-[15px]">
              Next: {nextVenture.name}
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
}
