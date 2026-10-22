import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { INSIGHTS_ARTICLES, InsightArticle } from "@/content/insights";
import { NewsletterSubscription } from "@/components/insights/NewsletterSubscription";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights & Technical Dispatches — Braxvio Engineering & Economics",
  description:
    "Essays and research from Braxvio on systems architecture, emerging market infrastructure, African digital labor, and building enduring software platforms.",
};

function ArticleMeta({ article }: { article: InsightArticle }) {
  return (
    <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[13.5px] text-[var(--text-tertiary)]">
      <span className="font-semibold text-[var(--text-primary)]">{article.category}</span>
      <span aria-hidden="true">·</span>
      <span>{article.readTime}</span>
      <span aria-hidden="true">·</span>
      <span>{article.publishDate}</span>
    </p>
  );
}

export default function InsightsPage() {
  const featuredArticle = INSIGHTS_ARTICLES[0];
  const secondaryArticles = INSIGHTS_ARTICLES.slice(1);

  return (
    <div className="pt-10 md:pt-20 pb-16 md:pb-24">
      <div className="content-container">
        {/* Editorial Page Header */}
        <header className="max-w-3xl mb-14 md:mb-20">
          <h1 className="text-[40px] sm:text-[52px] md:text-[60px] font-bold tracking-[-0.035em] text-[var(--text-primary)] leading-[1.06] mb-6">
            Insights & Technical Dispatches
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[var(--text-secondary)] leading-relaxed">
            Architectural perspectives, economic research, and field notes from the engineers and economists building Braxvio&apos;s venture ecosystem across Africa.
          </p>
        </header>

        {/* Featured Flagship Essay */}
        {featuredArticle && (
          <article className="relative mb-6 p-7 sm:p-12 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors group">
            <ArticleMeta article={featuredArticle} />

            <h2 className="text-[28px] sm:text-[40px] font-bold tracking-tight text-[var(--text-primary)] leading-[1.12] mt-5 mb-4 max-w-4xl">
              {/* Stretched link: the whole card opens the essay */}
              <Link
                href={`/insights/${featuredArticle.slug}`}
                className="after:absolute after:inset-0 after:rounded-2xl group-hover:text-[var(--accent-text)] transition-colors"
              >
                {featuredArticle.title}
              </Link>
            </h2>

            <p className="text-[17px] sm:text-[18px] text-[var(--text-secondary)] leading-relaxed max-w-3xl">
              {featuredArticle.subtitle}
            </p>

            {featuredArticle.quote && (
              <blockquote className="mt-8 max-w-2xl text-[19px] sm:text-[21px] font-medium tracking-tight text-[var(--text-primary)] leading-snug">
                <span aria-hidden="true" className="text-[var(--accent-text)]">&ldquo;</span>
                {featuredArticle.quote}
                <span aria-hidden="true" className="text-[var(--accent-text)]">&rdquo;</span>
              </blockquote>
            )}

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mt-10 pt-6 border-t border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                <div
                  aria-hidden="true"
                  className="grid place-items-center size-10 rounded-full bg-[var(--accent-surface)] text-[13px] font-semibold text-[var(--accent-text)]"
                >
                  {featuredArticle.author.avatarInitials}
                </div>
                <div>
                  <div className="text-[14.5px] font-semibold text-[var(--text-primary)]">{featuredArticle.author.name}</div>
                  <div className="text-[13px] text-[var(--text-tertiary)]">{featuredArticle.author.role}</div>
                </div>
              </div>

              <span className="inline-flex items-center gap-1.5 text-[14.5px] font-semibold text-[var(--accent-text)]">
                Read essay
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </div>
          </article>
        )}

        {/* Secondary Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14 md:mb-28">
          {secondaryArticles.map((article) => (
            <article
              key={article.slug}
              className="relative flex flex-col p-7 sm:p-8 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors group"
            >
              <ArticleMeta article={article} />

              <h3 className="text-[22px] sm:text-[26px] font-bold tracking-tight text-[var(--text-primary)] leading-snug mt-4 mb-3">
                <Link
                  href={`/insights/${article.slug}`}
                  className="after:absolute after:inset-0 after:rounded-2xl group-hover:text-[var(--accent-text)] transition-colors"
                >
                  {article.title}
                </Link>
              </h3>

              <p className="text-[15.5px] text-[var(--text-secondary)] leading-relaxed mb-8">{article.summary}</p>

              <div className="mt-auto pt-5 border-t border-[var(--border-subtle)] flex items-center justify-between gap-4">
                <p className="text-[13.5px] text-[var(--text-tertiary)]">
                  By <span className="font-medium text-[var(--text-secondary)]">{article.author.name}</span>
                </p>
                <span className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-[var(--accent-text)] shrink-0">
                  Read essay
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
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
