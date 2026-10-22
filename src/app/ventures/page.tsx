"use client";

import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { getPublishedVentures, VENTURE_CATEGORIES } from "@/content/ventures";
import { VentureCategory } from "@/types/venture";
import { VentureCard } from "@/components/ventures/VentureCard";

export default function VenturesDirectoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<VentureCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Publication safeguard: Only show published & verified
  const publishedVentures = getPublishedVentures();

  // Only offer categories that currently have ventures, so no filter leads to an empty page
  const categories = VENTURE_CATEGORIES.map((cat) => ({
    value: cat,
    count: cat === "All" ? publishedVentures.length : publishedVentures.filter((v) => v.primaryCategory === cat).length,
  })).filter((cat) => cat.count > 0);

  const query = searchQuery.trim().toLowerCase();
  const filteredVentures = publishedVentures.filter((venture) => {
    const matchesCategory = selectedCategory === "All" || venture.primaryCategory === selectedCategory;
    const matchesSearch =
      !query ||
      venture.name.toLowerCase().includes(query) ||
      venture.summary.toLowerCase().includes(query) ||
      venture.tagline.toLowerCase().includes(query) ||
      venture.secondaryTags.some((tag) => tag.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  const resetFilters = () => {
    setSelectedCategory("All");
    setSearchQuery("");
  };

  return (
    <div className="pt-10 md:pt-20 pb-16 md:pb-24">
      <div className="content-container">
        <header className="max-w-3xl mb-12">
          <h1 className="text-[40px] sm:text-[52px] font-bold text-[var(--text-primary)] tracking-[-0.035em] leading-[1.06] mb-5">
            The Braxvio Portfolio
          </h1>
          <p className="text-[18px] sm:text-[19px] text-[var(--text-secondary)] leading-relaxed">
            Braxvio builds and stewards ventures across foundational technology layers. Every venture in our portfolio is engineered for operational durability, clear market utility, and long-term autonomy.
          </p>
        </header>

        {/* Filter and Search Bar */}
        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[var(--border-subtle)]">
          <div role="group" aria-label="Filter by category" className="flex items-center gap-2 overflow-x-auto no-scrollbar -mx-5 px-5 md:mx-0 md:px-0">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setSelectedCategory(cat.value)}
                  aria-pressed={isSelected}
                  className={`inline-flex items-center gap-2 h-9 px-4 rounded-full text-[13.5px] font-medium whitespace-nowrap border transition-colors cursor-pointer ${
                    isSelected
                      ? "bg-[var(--surface-contrast)] border-[var(--surface-contrast)] text-[var(--bg-primary)]"
                      : "bg-[var(--surface-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-strong)]"
                  }`}
                >
                  {cat.value}
                  <span className={`tabular-nums ${isSelected ? "opacity-70" : "text-[var(--text-tertiary)]"}`}>{cat.count}</span>
                </button>
              );
            })}
          </div>

          <div className="relative md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[var(--text-tertiary)] pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ventures or tags"
              aria-label="Search ventures"
              className="field pl-10 pr-10 rounded-full [&::-webkit-search-cancel-button]:hidden"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 grid place-items-center size-8 rounded-full text-[var(--text-tertiary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        <p aria-live="polite" className="text-[14px] text-[var(--text-tertiary)] mb-6">
          {filteredVentures.length === publishedVentures.length
            ? `${publishedVentures.length} ventures`
            : `${filteredVentures.length} of ${publishedVentures.length} ventures`}
        </p>

        {filteredVentures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredVentures.map((venture) => (
              <VentureCard key={venture.id} venture={venture} headingLevel="h2" showTags />
            ))}
          </div>
        ) : (
          <div className="py-16 px-6 text-center rounded-2xl border border-dashed border-[var(--border-strong)]">
            <h2 className="text-[19px] font-semibold text-[var(--text-primary)] mb-2">No matching ventures</h2>
            <p className="text-[15px] text-[var(--text-secondary)] max-w-md mx-auto mb-6">
              Nothing matches &ldquo;{searchQuery}&rdquo;
              {selectedCategory !== "All" && <> in {selectedCategory}</>}. Try a different word or clear the filters.
            </p>
            <button type="button" onClick={resetFilters} className="btn btn-secondary btn-sm">
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
