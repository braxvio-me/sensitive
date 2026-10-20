import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Globe, Layers, ShieldCheck, Compass, Hammer, ExternalLink, MapPin, Calendar, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Company & Leadership",
  description:
    "Meet Braxvio: Founded in 2024 in Accra, Ghana. Learn why we build systems not disposable apps, and meet Michael Kwesi Annor, Seth Boadu, Alex Nyanteng, Nirvana, and the leadership steering Braxvio.",
};

const LEADERSHIP_TEAM = [
  {
    name: "Michael Kwesi Annor",
    role: "Founder & Chief Executive Officer",
    title: "Fullstack Developer & Entrepreneur",
    bio: "Directs Braxvio’s overarching vision, platform architecture, and product engineering initiatives across Africa and global markets.",
    focus: "Ecosystem Architecture, Executive Strategy & Product Engineering",
    linkedin: "https://gh.linkedin.com/in/michael-annor-412012300",
    initials: "MKA",
    badge: "Founder & CEO"
  },
  {
    name: "Seth Boadu",
    role: "Co-Founder & DevOps Engineer",
    title: "Co-Founder & Core Architecture",
    bio: "Steers Braxvio’s core technological foundations, specializing in scalable system architecture, resilient backend infrastructure, and high-performance cross-platform applications.",
    focus: "Core Platform Architecture & Fullstack Engineering",
    linkedin: "https://linkedin.com/company/braxvio",
    initials: "SB",
    badge: "Co-Founder"
  },
  {
    name: "Alex Nyanteng",
    role: "Fullstack Developer & AI integration Engineer",
    title: "Systems & Performance",
    bio: "Dedicated to building durable digital systems. Crafts end-to-end web architectures, secure database protocols, and seamless interfaces across the Braxvio product suite.",
    focus: "Fullstack Systems & Application Performance",
    linkedin: "https://linkedin.com/company/braxvio",
    initials: "AN",
    badge: "Core Directorate"
  },
  {
    name: "Nirvana",
    role: "Fullstack Developer & Core Engineer",
    title: "Distributed Infrastructure",
    bio: "Champions clean architecture, real-time distributed data pipelines, and responsive frontend systems engineered for high-growth digital environments.",
    focus: "Fullstack Engineering & Distributed Web Infrastructure",
    linkedin: "https://linkedin.com/company/braxvio",
    initials: "N",
    badge: "Core Directorate"
  }
];

export default function AboutPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="content-container max-w-5xl">
        {/* Header Badge & Title */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] bg-[var(--accent-technical)]/10 mb-4">
            About Braxvio Technologies
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[var(--text-primary)] tracking-tight mb-6 leading-tight">
            Technology should <span className="text-[var(--accent-technical)]">move life forward.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-normal max-w-3xl mb-8">
            Braxvio is a parent technology company creating digital products, platforms, and infrastructure around the evolving needs of people, businesses, and communities.
          </p>

          {/* Quick Meta Stats Badge Bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] bg-[var(--surface-elevated)] p-4 rounded-2xl border border-[var(--border-subtle)]">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[var(--accent-technical)]" />
              <span>Founded: <strong className="text-[var(--text-primary)]">2024</strong></span>
            </div>
            <span className="text-[var(--border-subtle)]">•</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--accent-technical)]" />
              <span>HQ: <strong className="text-[var(--text-primary)]">Accra, Ghana</strong> (5.6037° N, 0.1870° W)</span>
            </div>
            <span className="text-[var(--border-subtle)]">•</span>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[var(--accent-technical)]" />
              <span>Status: <strong className="text-[var(--text-primary)]">Parent Technology Co.</strong></span>
            </div>
          </div>
        </div>

        {/* Narrative Section: Why Braxvio Exists */}
        <div className="space-y-12 mb-20">
          <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-300 bg-[#FFFBEB] dark:bg-[#451A03] mb-4">
              Origin & Rationale
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
              Why Braxvio Exists
            </h2>
            <div className="space-y-5 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              <p>
                Sub-Saharan Africa is experiencing unprecedented technological acceleration yet essential everyday infrastructure remains deeply fractured.
              </p>
              <p>
                In many emerging economies, smartphones have arrived before reliable postal addressing, predictable public transit, or connected pharmacy inventory systems. Millions of students attend universities where finding safe housing still involves exploitative physical middlemen. Patients travel between five pharmacies to locate verified medication. Talented developers face punitive international banking barriers just to receive payments for their work.
              </p>
              <p>
                Most technology initiatives attempt to solve these issues by building quick, disposable consumer apps spending capital on superficial user acquisition while leaving root infrastructural friction untouched.
              </p>
              <p className="font-semibold text-[var(--text-primary)]">
                Braxvio exists to identify these structural fractures and engineer focused, durable technology platforms around them.
              </p>
              <p>
                We do not invent artificial problems to fit speculative tech trends. We observe where people lose hours of productive time, where scams persist, and where essential utilities break down. Then we engineer systems that make life work quietly, reliably, and with dignity.
              </p>
            </div>
          </div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-technical)] mb-2">Core Directive // Mission</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">
                Build technology that makes everyday systems work better.
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                We engineer scalable, secure, and intuitive platforms that remove operational friction from education, healthcare, logistics, and digital work.
              </p>
            </div>

            <div className="p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]">
              <div className="text-xs font-mono uppercase tracking-wider text-emerald-500 mb-2">Long-Term // Vision</div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">
                A future where technology expands what people can do.
              </h3>
              <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                An interconnected digital ecosystem where location, currency, and systemic fragmentation never restrict human potential and daily dignity.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership & Governance Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[var(--accent-technical)] bg-[var(--accent-technical)]/10 mb-3">
              Governance & Stewardship
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight mb-4">
              Meet the Stewards of Braxvio
            </h2>
            <p className="text-base text-[var(--text-secondary)]">
              Braxvio is steered by builders, fullstack engineers, and operators committed to long-term technology craftsmanship, ethical stewardship, and enduring digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP_TEAM.map((member) => (
              <div
                key={member.name}
                className="p-8 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:border-[var(--accent-technical)]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-[var(--accent-technical)]/10 text-[var(--accent-technical)] flex items-center justify-center font-bold text-lg font-mono">
                        {member.initials}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[var(--text-primary)] leading-snug">
                          {member.name}
                        </h3>
                        <p className="text-xs font-semibold text-[var(--accent-technical)]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-secondary)]">
                      {member.badge}
                    </span>
                  </div>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                  <div className="text-[var(--text-tertiary)]">
                    <span className="font-semibold text-[var(--text-secondary)]">Focus:</span> {member.focus}
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-[var(--accent-technical)] hover:underline shrink-0 ml-2"
                  >
                    LinkedIn
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Operating Pillars */}
        <div className="p-8 sm:p-12 rounded-3xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-xs mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight mb-6">
            Four Operating Pillars
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
              <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] text-[var(--accent-cobalt)] w-fit mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                Accra, Ghana Engineering Hub
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Home base for our core architecture, empirical field research, and systems engineering.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
              <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] text-[var(--accent-cobalt)] w-fit mb-3">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                4 Core Focus Domains
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Campus life, healthcare supply chains, urban sanitation, and cross-border developer payment rails.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
              <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] text-[var(--accent-cobalt)] w-fit mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                Zero Data Reselling
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Student and patient records remain strictly sovereign and protected under the Ghana Data Protection Act 2012 (Act 843).
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[var(--bg-secondary)]/50 border border-[var(--border-subtle)]">
              <div className="p-2.5 rounded-xl bg-[var(--surface-elevated)] text-[var(--accent-cobalt)] w-fit mb-3">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">
                Offline-First Resilience
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                Engineered specifically for intermittent cellular networks, high packet loss, and zero-bloat edge delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="pt-12 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">
              Explore Our Active Ventures
            </h3>
            <p className="text-sm text-[var(--text-secondary)]">
              Discover the independent digital products and platforms built and operated by Braxvio.
            </p>
          </div>
          <Link
            href="/ventures"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 transition-all shadow-sm shrink-0"
          >
            Browse Ventures
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

