"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, CheckCircle2, ExternalLink, Layers } from "lucide-react";
import { VENTURES_DATA, VENTURE_CATEGORIES } from "@/content/ventures";
import { VentureCategory } from "@/types/venture";

export default function VenturesDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<VentureCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Publication safeguard: Only show published & verified
  const publishedVentures = VENTURES_DATA.filter(
    (v) => v.isVerified && v.isPublished && v.publicationApproved
  );

  const filteredVentures = publishedVentures.filter((venture) => {
    const matchesCategory =
      selectedCategory === "All" || venture.primaryCategory === selectedCategory;
    const matchesSearch =
      venture.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venture.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venture.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      venture.secondaryTags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 md:py-24">
      <div className="content-container">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] bg-[var(--accent-technical)]/10 mb-4">
            Venture Directory
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-5">
            The Braxvio Portfolio
          </h1>
          <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
            Braxvio builds and stewards ventures across foundational technology layers. Every venture in our portfolio is engineered for operational durability, clear market utility, and long-term autonomy.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-8 border-b border-[var(--border-subtle)]">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {VENTURE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[var(--surface-contrast)] text-[var(--bg-primary)] shadow-sm"
                    : "bg-[var(--surface-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[260px]">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ventures or tags..."
              aria-label="Search ventures"
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-cobalt)]"
            />
          </div>
        </div>

        {/* Ventures Grid */}
        {filteredVentures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVentures.map((venture) => (
              <div
                key={venture.id}
                className="flex flex-col justify-between p-8 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:border-[var(--border-strong)] transition-all duration-200 group hover:shadow-xl"
              >
                <div>
                  {/* Category and Status Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-wider">
                      {venture.primaryCategory}
                    </span>
                    <span
                      className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full ${
                        venture.status === "Live"
                          ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400"
                          : venture.status === "Private Beta"
                          ? "bg-sky-500/15 text-sky-700 dark:text-sky-400"
                          : "bg-amber-500/15 text-amber-700 dark:text-amber-400"
                      }`}
                    >
                      {venture.status}
                    </span>
                  </div>

                  {/* Name and Tagline */}
                  <h2 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight mb-2 group-hover:text-[var(--accent-cobalt)] transition-colors">
                    {venture.name}
                  </h2>
                  <p className="text-sm font-medium text-[var(--text-secondary)] mb-3">
                    {venture.tagline}
                  </p>
                  <p className="text-xs text-[var(--text-tertiary)] leading-relaxed mb-6">
                    {venture.summary}
                  </p>

                  {/* Secondary Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {venture.secondaryTags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Key Capabilities */}
                  <div className="space-y-2 mb-6">
                    {venture.keyCapabilities.slice(0, 3).map((cap, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer */}
                <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[var(--text-tertiary)]">
                    {venture.ownershipRelationship}
                  </span>
                  <Link
                    href={`/ventures/${venture.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-cobalt)] group-hover:translate-x-1 transition-transform"
                  >
                    View Architecture
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-16 text-center rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
            <Layers className="w-8 h-8 text-[var(--text-tertiary)] mx-auto mb-3" />
            <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">
              No matching ventures found
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto mb-6">
              We couldn&apos;t find any verified ventures matching &quot;{searchQuery}&quot; under the &quot;{selectedCategory}&quot; category.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-5 py-2 rounded-full text-xs font-semibold bg-[var(--bg-secondary)] border border-[var(--border-strong)] text-[var(--text-primary)] hover:bg-[var(--border-subtle)] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
