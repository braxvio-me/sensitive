import React, { Suspense } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { INSIGHTS_ARTICLES } from "@/content/insights";
import { CopyButton } from "@/components/ui/CopyButton";
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

// The slug is URL data: reading it inside Suspense keeps navigation into the page instant
export default function InsightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
      <InsightDetail params={params} />
    </Suspense>
  );
}

async function InsightDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = INSIGHTS_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = INSIGHTS_ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  );

  return (
    <article className="pt-8 md:pt-14 pb-16 md:pb-24">
      <div className="content-container">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          All insights
        </Link>

        {/* Article Header Container */}
        <header className="max-w-3xl pb-10 mb-12 border-b border-[var(--border-subtle)]">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] text-[var(--text-tertiary)] mb-6">
            <span className="font-semibold text-[var(--text-primary)]">{article.category}</span>
            <span aria-hidden="true">·</span>
            <span>{article.readTime}</span>
            <span aria-hidden="true">·</span>
            <span>{article.publishDate}</span>
          </p>

          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold tracking-[-0.035em] text-[var(--text-primary)] leading-[1.08] mb-6">
            {article.title}
          </h1>

          <p className="text-[18px] sm:text-[20px] text-[var(--text-secondary)] leading-relaxed mb-8">
            {article.subtitle}
          </p>

          <div className="flex items-center gap-4">
            <div
              aria-hidden="true"
              className="grid place-items-center size-11 rounded-full bg-[var(--accent-surface)] text-[14px] font-semibold text-[var(--accent-text)]"
            >
              {article.author.avatarInitials}
            </div>
            <div>
              <div className="text-[15px] font-semibold text-[var(--text-primary)]">{article.author.name}</div>
              <div className="text-[13.5px] text-[var(--text-tertiary)]">
                {article.author.role} · {article.author.division}
              </div>
            </div>
          </div>
        </header>

        {/* Article Body — Constrained strictly to 65–75ch for optimal reading typography */}
        <div className="max-w-[68ch] space-y-10 text-[17px] sm:text-[18px] leading-[1.75]">
          {article.content.map((section, idx) => (
            <section key={idx} className="space-y-6">
              {section.heading && (
                <h2 className="text-[26px] sm:text-[30px] font-bold tracking-tight text-[var(--text-primary)] leading-tight pt-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-[var(--text-secondary)]">
                  {para}
                </p>
              ))}

              {section.callout && (
                <blockquote className="my-10 py-6 border-y border-[var(--border-strong)] text-[21px] sm:text-[24px] font-semibold tracking-tight text-[var(--text-primary)] leading-snug">
                  {section.callout}
                </blockquote>
              )}
            </section>
          ))}
        </div>

        {/* Article Footer */}
        <div className="max-w-[68ch] mt-16 pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-4">
          <p className="text-[14px] text-[var(--text-tertiary)]">
            Written by <span className="font-medium text-[var(--text-secondary)]">{article.author.name}</span> · Accra, Ghana
          </p>
          <CopyButton label="Copy link" copiedLabel="Link copied" />
        </div>

        {/* More Essays Navigation */}
        {relatedArticles.length > 0 && (
          <aside className="max-w-4xl mt-20 pt-12 border-t border-[var(--border-strong)]">
            <div className="flex items-center justify-between gap-4 mb-8">
              <h2 className="text-[24px] font-bold tracking-tight text-[var(--text-primary)]">More from Insights</h2>
              <Link href="/insights" className="link-accent text-[14px]">
                View all
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/insights/${rel.slug}`}
                  className="flex flex-col p-6 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:border-[var(--border-strong)] transition-colors group"
                >
                  <p className="text-[13px] text-[var(--text-tertiary)] mb-2">
                    <span className="font-semibold text-[var(--text-primary)]">{rel.category}</span> · {rel.readTime}
                  </p>
                  <h3 className="text-[19px] font-semibold tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent-text)] transition-colors mb-2">
                    {rel.title}
                  </h3>
                  <p className="text-[14.5px] text-[var(--text-secondary)] line-clamp-2 leading-relaxed">{rel.summary}</p>
                </Link>
              ))}
            </div>
          </aside>
        )}
      </div>
    </article>
  );
}
