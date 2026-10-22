import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CopyButton } from "@/components/ui/CopyButton";

const BOILERPLATE =
  "Braxvio is a technology parent company focused on building and developing ventures across consumer platforms, enterprise software, and emerging technology. Founded in Africa, Braxvio aims to build useful, durable businesses with the discipline, technical quality, and long-term perspective to serve markets beyond their origins.";

const PRINCIPLES = [
  {
    title: "Start with the problem.",
    description: "We do not build technology because an idea sounds clever or trendy. We build because an essential daily system is fractured, slow, or unfair to the people relying on it.",
  },
  {
    title: "Design around people.",
    description: "Real users operate on varying device capabilities, intermittent network connectivity, and under busy, stressful circumstances. Interfaces must be forgiving, transparent, and effortlessly clear.",
  },
  {
    title: "Build for reality.",
    description: "Abstract software theories fail when deployed into the messy complexities of physical cities and developing markets. We build for the actual world as it is.",
  },
  {
    title: "Think in systems.",
    description: "No product exists in isolation. Health connects to logistics; education connects to commerce and financial identity. Braxvio products share unified infrastructural DNA.",
  },
  {
    title: "Earn trust.",
    description: "Trust is fragile and takes years to earn. We handle user data, healthcare privacy, and financial earnings with institutional discipline and zero deceptive patterns.",
  },
  {
    title: "Keep evolving.",
    description: "Technology is never finished. We listen constantly, measure what happens in the field, discard our own preconceptions, and continuously refine our craft.",
  },
];

export function CompanyIdentitySection() {
  return (
    <section className="py-16 md:py-28 bg-[var(--bg-secondary)] border-y border-[var(--border-subtle)]">
      <div className="content-container">
        {/* Company Identity Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 md:mb-32">
          <div className="lg:col-span-6">
            <h2 className="text-[32px] sm:text-[40px] md:text-[46px] font-bold text-[var(--text-primary)] tracking-tight leading-[1.1] mb-6">
              A technology institution engineered to build and endure.
            </h2>
            <div className="space-y-4 max-w-[62ch]">
              <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed">
                Braxvio is not simply a digital agency, a single-product startup, or a fast-turnaround investment syndicate. We are an active technology parent company that incubates, develops, and scales foundational ventures across consumer platforms, enterprise software, and emerging technology.
              </p>
              <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed">
                We provide strategic technical governance, shared architectural rigor, and sovereign infrastructure, enabling our portfolio companies to execute with the speed of independent startups backed by institutional endurance.
              </p>
            </div>
            <Link href="/about" className="btn btn-secondary mt-8">
              Learn About Braxvio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <figure className="lg:col-span-6 p-7 sm:p-9 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
            <figcaption className="flex items-center justify-between gap-4 mb-5">
              <span className="text-[14px] font-semibold text-[var(--text-primary)]">Company boilerplate</span>
              <CopyButton value={BOILERPLATE} />
            </figcaption>
            <blockquote className="text-[17px] text-[var(--text-primary)] leading-relaxed">
              <p>&ldquo;{BOILERPLATE}&rdquo;</p>
            </blockquote>

            <dl className="grid grid-cols-2 gap-6 mt-8 pt-6 border-t border-[var(--border-subtle)]">
              <div>
                <dt className="text-[13px] text-[var(--text-tertiary)] mb-0.5">Scope</dt>
                <dd className="text-[15px] font-semibold text-[var(--text-primary)]">Multi-Venture</dd>
              </div>
              <div>
                <dt className="text-[13px] text-[var(--text-tertiary)] mb-0.5">Horizon</dt>
                <dd className="text-[15px] font-semibold text-[var(--text-primary)]">Long-term Sovereign</dd>
              </div>
            </dl>
          </figure>
        </div>

        {/* Africa & Global Ambition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 pt-12 border-t border-[var(--border-strong)] mb-16 md:mb-32">
          <h3 className="lg:col-span-5 text-[28px] sm:text-[36px] font-bold text-[var(--text-primary)] tracking-tight leading-[1.12]">
            Founded in Africa. Built with a global horizon.
          </h3>
          <p className="lg:col-span-7 text-[17px] sm:text-[18px] text-[var(--text-secondary)] leading-relaxed max-w-[62ch]">
            Braxvio&apos;s story begins in Africa, but our ambitions are not confined by geography. We believe meaningful technology businesses can be conceived and built from the continent to serve real needs in local and international markets. Our focus is on the quality of what we build, the problems we choose to solve, and the lasting value our ventures create.
          </p>
        </div>

        {/* Operating & Engineering Principles Preview */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <h3 className="text-[28px] sm:text-[36px] font-bold text-[var(--text-primary)] tracking-tight">
              Operating Principles
            </h3>
            <Link href="/about" className="link-accent text-[15px] self-start sm:self-end">
              About Braxvio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
            {PRINCIPLES.map((principle) => (
              <li key={principle.title} className="pt-5 border-t border-[var(--border-strong)]">
                <h4 className="text-[18px] font-semibold text-[var(--text-primary)] tracking-tight mb-2">
                  {principle.title}
                </h4>
                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{principle.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
