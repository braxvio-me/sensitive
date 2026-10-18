import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Compass, Cpu, Scale, Hammer, Globe2 } from "lucide-react";

const PRINCIPLES = [
  {
    title: "Start with the problem.",
    description: "We do not build technology because an idea sounds clever or trendy. We build because an essential daily system is fractured, slow, or unfair to the people relying on it.",
    icon: Hammer,
    num: "01",
  },
  {
    title: "Design around people.",
    description: "Real users operate on varying device capabilities, intermittent network connectivity, and under busy, stressful circumstances. Interfaces must be forgiving, transparent, and effortlessly clear.",
    icon: Compass,
    num: "02",
  },
  {
    title: "Build for reality.",
    description: "Abstract software theories fail when deployed into the messy complexities of physical cities and developing markets. We build for the actual world as it is.",
    icon: Cpu,
    num: "03",
  },
  {
    title: "Think in systems.",
    description: "No product exists in isolation. Health connects to logistics; education connects to commerce and financial identity. Braxvio products share unified infrastructural DNA.",
    icon: Scale,
    num: "04",
  },
  {
    title: "Earn trust.",
    description: "Trust is fragile and takes years to earn. We handle user data, healthcare privacy, and financial earnings with institutional discipline and zero deceptive patterns.",
    icon: ShieldCheck,
    num: "05",
  },
  {
    title: "Keep evolving.",
    description: "Technology is never finished. We listen constantly, measure what happens in the field, discard our own preconceptions, and continuously refine our craft.",
    icon: Globe2,
    num: "06",
  },
];

export function CompanyIdentitySection() {
  return (
    <section className="py-24 bg-[var(--bg-secondary)]/30 border-y border-[var(--border-subtle)]">
      <div className="content-container">
        {/* Company Identity Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] mb-3 inline-block">
              Parent Company Identity
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight leading-[1.15] mb-6">
              A technology institution engineered to build and endure.
            </h2>
            <div className="space-y-4 max-w-[65ch]">
              <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed font-normal">
                Braxvio is not simply a digital agency, a single-product startup, or a fast-turnaround investment syndicate. We are an active technology parent company that incubates, develops, and scales foundational ventures across consumer platforms, enterprise software, and emerging technology.
              </p>
              <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">
                We provide strategic technical governance, shared architectural rigor, and sovereign infrastructure, enabling our portfolio companies to execute with the speed of independent startups backed by institutional endurance.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[var(--accent-primary)] hover:bg-[var(--accent-hover)] transition-all shadow-xs"
              >
                Learn About Braxvio
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded-3xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] shadow-lg relative overflow-hidden">
              <div className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase text-[var(--text-tertiary)] font-medium">
                    Official Boilerplate
                  </span>
                  <p className="text-sm font-medium text-[var(--text-primary)] mt-2 italic leading-relaxed">
                    &ldquo;Braxvio is a technology parent company focused on building and developing ventures across consumer platforms, enterprise software, and emerging technology. Founded in Africa, Braxvio aims to build useful, durable businesses with the discipline, technical quality, and long-term perspective to serve markets beyond their origins.&rdquo;
                  </p>
                </div>

                {/* Flattened structural metadata instead of nested cards */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[var(--border-subtle)] text-xs">
                  <div>
                    <span className="block font-mono text-[var(--text-tertiary)] mb-0.5">Scope</span>
                    <span className="font-semibold text-[var(--text-primary)] text-sm">Multi-Venture</span>
                  </div>
                  <div>
                    <span className="block font-mono text-[var(--text-tertiary)] mb-0.5">Horizon</span>
                    <span className="font-semibold text-[var(--text-primary)] text-sm">Long-term Sovereign</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Africa & Global Ambition */}
        <div className="mb-28 p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-[#ECFDF5] dark:bg-[#064E3B] mb-4">
              <Globe2 className="w-3.5 h-3.5" />
              Origins & Trajectory
            </div>
            <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-5">
              Founded in Africa. Built with a global horizon.
            </h3>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-[65ch] font-normal">
              Braxvio&apos;s story begins in Africa, but our ambitions are not confined by geography. We believe meaningful technology businesses can be conceived and built from the continent to serve real needs in local and international markets. Our focus is on the quality of what we build, the problems we choose to solve, and the lasting value our ventures create.
            </p>
          </div>
        </div>

        {/* Operating & Engineering Principles Preview */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] mb-2 inline-block">
                Guiding Standards
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
                Operating Principles
              </h3>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent-cobalt)] hover:underline self-start md:self-end"
            >
              About Braxvio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((principle, idx) => {
              const Icon = principle.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:border-[var(--border-strong)] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--accent-cobalt)]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-[var(--text-tertiary)]">
                        DOCTRINE {principle.num}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-[var(--text-primary)] tracking-tight mb-2">
                      {principle.title}
                    </h4>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
