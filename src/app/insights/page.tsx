import React from "react";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, User, Sparkles } from "lucide-react";
import { INSIGHTS_ARTICLES } from "@/content/insights";
import { NewsletterSubscription } from "@/components/insights/NewsletterSubscription";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Technical Dispatches — Braxvio Engineering & Economics",
  description:
    "Essays and research from Braxvio on systems architecture, emerging market infrastructure, African digital labor, and building enduring software platforms.",
};

export default function InsightsPage() {
  const featuredArticle = INSIGHTS_ARTICLES[0];
  const secondaryArticles = INSIGHTS_ARTICLES.slice(1);

  return (
    <div className="pt-12 pb-24">
      <div className="content-container">
        {/* Editorial Page Header */}
        <div className="max-w-3xl mb-14 md:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.1] mb-6">
            Insights & Technical Dispatches
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed">
            Architectural perspectives, economic research, and field notes from the engineers and economists building Braxvio&apos;s venture ecosystem across Africa.
          </p>
        </div>

        {/* Featured Flagship Essay */}
        {featuredArticle && (
          <div className="mb-16">
            <div className="p-8 sm:p-12 rounded-3xl bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-lg hover:border-[var(--accent-cobalt)] transition-all group">
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-6 text-[var(--text-tertiary)]">
                <span className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--accent-cobalt)] font-semibold border border-[var(--border-subtle)]">
                  {featuredArticle.category}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featuredArticle.readTime}
                </span>
                <span>•</span>
                <span>{featuredArticle.publishDate}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-cobalt)] transition-colors mb-4 leading-tight">
                <Link href={`/insights/${featuredArticle.slug}`}>
                  {featuredArticle.title}
                </Link>
              </h2>

              <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed mb-8 max-w-3xl">
                {featuredArticle.subtitle}
              </p>

              {featuredArticle.quote && (
                <blockquote className="my-8 pl-6 border-l-2 border-[var(--accent-cobalt)] italic text-lg sm:text-xl text-[var(--text-primary)] font-serif max-w-2xl">
                  &ldquo;{featuredArticle.quote}&rdquo;
                </blockquote>
              )}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[var(--border-subtle)]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center font-mono font-bold text-xs text-[var(--text-primary)]">
                    {featuredArticle.author.avatarInitials}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[var(--text-primary)]">
                      {featuredArticle.author.name}
                    </div>
                    <div className="text-xs text-[var(--text-tertiary)]">
                      {featuredArticle.author.role}
                    </div>
                  </div>
                </div>

                <Link
                  href={`/insights/${featuredArticle.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-cobalt)] hover:gap-3 transition-all"
                >
                  Read Full Dispatch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {secondaryArticles.map((article) => (
            <article
              key={article.slug}
              className="flex flex-col justify-between p-8 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-xs hover:border-[var(--accent-cobalt)] transition-all group"
            >
              <div>
                <div className="flex items-center gap-3 text-xs font-mono mb-4 text-[var(--text-tertiary)]">
                  <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--accent-technical)] font-medium border border-[var(--border-subtle)]">
                    {article.category}
                  </span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.publishDate}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-cobalt)] transition-colors mb-3 leading-snug">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-sm sm:text-[15px] text-[var(--text-secondary)] leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <div className="text-xs text-[var(--text-tertiary)]">
                  By <span className="font-medium text-[var(--text-secondary)]">{article.author.name}</span>
                </div>

                <Link
                  href={`/insights/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[var(--accent-cobalt)] group-hover:gap-2 transition-all"
                >
                  Read Essay
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Editorial Briefing Subscription */}
        <NewsletterSubscription />
      </div>
    </div>
  );
}
