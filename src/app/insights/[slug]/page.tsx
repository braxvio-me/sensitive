import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, ArrowRight, BookOpen, ShieldCheck } from "lucide-react";
import { INSIGHTS_ARTICLES, InsightArticle } from "@/content/insights";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return INSIGHTS_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: "Dispatch Not Found | Braxvio" };

  return {
    title: `${article.title} — Braxvio Insights`,
    description: article.subtitle,
    openGraph: {
      title: `${article.title} | Braxvio Insights`,
      description: article.subtitle,
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author.name],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.subtitle,
    },
  };
}

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = INSIGHTS_ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <article className="pt-12 pb-24">
      <div className="content-container">
        {/* Back Link */}
        <div className="mb-10">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-mono text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO INSIGHTS</span>
          </Link>
        </div>

        {/* Article Header Container */}
        <header className="max-w-3xl pb-12 mb-12 border-b border-[var(--border-subtle)]">
          <div className="flex flex-wrap items-center gap-3 text-xs font-mono mb-6 text-[var(--text-tertiary)]">
            <span className="px-3 py-1 rounded-full bg-[var(--bg-secondary)] text-[var(--accent-cobalt)] font-semibold border border-[var(--border-subtle)]">
              {article.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span>•</span>
            <span>{article.publishDate}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.12] mb-6">
            {article.title}
          </h1>

          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed mb-8">
            {article.subtitle}
          </p>

          {/* Author Badge */}
          <div className="flex items-center gap-4 pt-6 border-t border-[var(--border-subtle)]">
            <div className="w-12 h-12 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] flex items-center justify-center font-mono font-bold text-sm text-[var(--text-primary)]">
              {article.author.avatarInitials}
            </div>
            <div>
              <div className="text-sm font-bold text-[var(--text-primary)]">
                {article.author.name}
              </div>
              <div className="text-xs text-[var(--text-secondary)]">
                {article.author.role} · {article.author.division}
              </div>
            </div>
          </div>
        </header>

        {/* Article Body — Constrained strictly to 65–75ch for optimal reading typography */}
        <main className="max-w-[70ch] space-y-10 text-[16px] sm:text-[17.5px] text-[var(--text-primary)] leading-[1.75] font-normal">
          {article.content.map((section, idx) => (
            <div key={idx} className="space-y-6">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] pt-4 pb-1">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-[var(--text-secondary)]">
                  {para}
                </p>
              ))}

              {section.callout && (
                <blockquote className="my-8 pl-6 border-l-3 border-[var(--accent-cobalt)] italic text-lg sm:text-xl text-[var(--text-primary)] font-serif bg-[var(--bg-secondary)]/30 py-4 pr-4 rounded-r-xl">
                  &ldquo;{section.callout}&rdquo;
                </blockquote>
              )}
            </div>
          ))}
        </main>

        {/* Article Footer & Sovereign Verification */}
        <div className="max-w-3xl mt-16 pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[var(--text-tertiary)]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Braxvio Technical Review Ledger · Approved for Public Release</span>
          </div>
          <div>Accra, Ghana</div>
        </div>

        {/* More Essays Navigation */}
        {relatedArticles.length > 0 && (
          <div className="max-w-4xl mt-20 pt-16 border-t border-[var(--border-strong)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-[var(--text-tertiary)] font-semibold">
                More Technical Dispatches
              </h3>
              <Link
                href="/insights"
                className="text-xs font-mono text-[var(--accent-cobalt)] hover:underline"
              >
                View All Insights →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:border-[var(--accent-cobalt)] transition-all group"
                >
                  <div className="text-[10px] font-mono uppercase text-[var(--accent-cobalt)] font-semibold mb-2">
                    {rel.category} • {rel.readTime}
                  </div>
                  <h4 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-cobalt)] transition-colors mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[var(--text-secondary)] line-clamp-2 leading-relaxed">
                    {rel.summary}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
