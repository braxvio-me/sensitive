import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Globe, Layers, ShieldCheck, ArrowUpRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "About — Company & Leadership",
  description:
    "Meet Braxvio: Founded in 2024 in Accra, Ghana. Learn why we build systems not disposable apps, and meet Michael Kwesi Annor, Seth Boadu, Alex Nyanteng, Nirvana, and the leadership steering Braxvio.",
};

const LEADERSHIP_TEAM = [
  {
    name: "Michael Kwesi Annor",
    role: "Founder & Chief Executive Officer",
    bio: "Directs Braxvio’s overarching vision, platform architecture, and product engineering initiatives across Africa and global markets.",
    focus: "Ecosystem Architecture, Executive Strategy & Product Engineering",
    linkedin: "https://gh.linkedin.com/in/michael-annor-412012300",
    initials: "MKA",
  },
  {
    name: "Seth Boadu",
    role: "Co-Founder & DevOps Engineer",
    bio: "Steers Braxvio’s core technological foundations, specializing in scalable system architecture, resilient backend infrastructure, and high-performance cross-platform applications.",
    focus: "Core Platform Architecture & Fullstack Engineering",
    linkedin: "https://linkedin.com/company/braxvio",
    initials: "SB",
  },
  {
    name: "Alex Nyanteng",
    role: "Fullstack Developer & AI integration Engineer",
    bio: "Dedicated to building durable digital systems. Crafts end-to-end web architectures, secure database protocols, and seamless interfaces across the Braxvio product suite.",
    focus: "Fullstack Systems & Application Performance",
    linkedin: "https://linkedin.com/company/braxvio",
    initials: "AN",
  },
  {
    name: "Nirvana",
    role: "Fullstack Developer & Core Engineer",
    bio: "Champions clean architecture, real-time distributed data pipelines, and responsive frontend systems engineered for high-growth digital environments.",
    focus: "Fullstack Engineering & Distributed Web Infrastructure",
    linkedin: "https://linkedin.com/company/braxvio",
    initials: "N",
  },
];

const COMPANY_FACTS = [
  { label: "Founded", value: "2024" },
  { label: "Headquarters", value: "Accra, Ghana" },
  { label: "Structure", value: "Parent technology company" },
];

const OPERATING_PILLARS = [
  {
    icon: MapPin,
    title: "Accra, Ghana Engineering Hub",
    description: "Home base for our core architecture, empirical field research, and systems engineering.",
  },
  {
    icon: Layers,
    title: "4 Core Focus Domains",
    description: "Campus life, healthcare supply chains, urban sanitation, and cross-border developer payment rails.",
  },
  {
    icon: ShieldCheck,
    title: "Zero Data Reselling",
    description: "Student and patient records remain strictly sovereign and protected under the Ghana Data Protection Act 2012 (Act 843).",
  },
  {
    icon: Globe,
    title: "Offline-First Resilience",
    description: "Engineered specifically for intermittent cellular networks, high packet loss, and zero-bloat edge delivery.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-10 md:pt-20 pb-16 md:pb-24">
      <div className="content-container max-w-5xl">
        {/* Header */}
        <header className="mb-14 md:mb-28">
          <h1 className="text-[40px] sm:text-[52px] lg:text-[64px] font-bold text-[var(--text-primary)] tracking-[-0.035em] leading-[1.06] mb-6 max-w-4xl">
            Technology should <span className="text-[var(--accent-text)]">move life forward.</span>
          </h1>
          <p className="text-[18px] sm:text-[20px] text-[var(--text-secondary)] leading-relaxed max-w-3xl mb-10">
            Braxvio is a parent technology company creating digital products, platforms, and infrastructure around the evolving needs of people, businesses, and communities.
          </p>

          <dl className="grid grid-cols-1 sm:grid-cols-3 border-y border-[var(--border-subtle)] divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]">
            {COMPANY_FACTS.map((fact) => (
              <div key={fact.label} className="py-4 sm:px-5 sm:first:pl-0">
                <dt className="text-[13px] text-[var(--text-tertiary)] mb-0.5">{fact.label}</dt>
                <dd className="text-[16px] font-semibold text-[var(--text-primary)]">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* Narrative Section: Why Braxvio Exists */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-14 md:mb-28">
          <h2 className="lg:col-span-4 text-[30px] sm:text-[36px] font-bold text-[var(--text-primary)] tracking-tight leading-tight lg:sticky lg:top-28 self-start">
            Why Braxvio Exists
          </h2>
          <div className="lg:col-span-8 space-y-5 text-[17px] sm:text-[18px] text-[var(--text-secondary)] leading-relaxed max-w-[65ch]">
            <p>
              Sub-Saharan Africa is experiencing unprecedented technological acceleration yet essential everyday infrastructure remains deeply fractured.
            </p>
            <p>
              In many emerging economies, smartphones have arrived before reliable postal addressing, predictable public transit, or connected pharmacy inventory systems. Millions of students attend universities where finding safe housing still involves exploitative physical middlemen. Patients travel between five pharmacies to locate verified medication. Talented developers face punitive international banking barriers just to receive payments for their work.
            </p>
            <p>
              Most technology initiatives attempt to solve these issues by building quick, disposable consumer apps spending capital on superficial user acquisition while leaving root infrastructural friction untouched.
            </p>
            <p className="text-[20px] sm:text-[22px] font-semibold text-[var(--text-primary)] leading-snug tracking-tight py-2">
              Braxvio exists to identify these structural fractures and engineer focused, durable technology platforms around them.
            </p>
            <p>
              We do not invent artificial problems to fit speculative tech trends. We observe where people lose hours of productive time, where scams persist, and where essential utilities break down. Then we engineer systems that make life work quietly, reliably, and with dignity.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <dl className="mb-14 md:mb-28 border-t border-[var(--border-strong)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-12 py-8 border-b border-[var(--border-subtle)]">
            <dt className="lg:col-span-4 text-[15px] font-semibold text-[var(--text-primary)]">Mission</dt>
            <dd className="lg:col-span-8">
              <p className="text-[22px] sm:text-[26px] font-semibold text-[var(--text-primary)] tracking-tight leading-snug mb-3">
                Build technology that makes everyday systems work better.
              </p>
              <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed max-w-[60ch]">
                We engineer scalable, secure, and intuitive platforms that remove operational friction from education, healthcare, logistics, and digital work.
              </p>
            </dd>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 lg:gap-12 py-8 border-b border-[var(--border-subtle)]">
            <dt className="lg:col-span-4 text-[15px] font-semibold text-[var(--text-primary)]">Vision</dt>
            <dd className="lg:col-span-8">
              <p className="text-[22px] sm:text-[26px] font-semibold text-[var(--text-primary)] tracking-tight leading-snug mb-3">
                A future where technology expands what people can do.
              </p>
              <p className="text-[16px] text-[var(--text-secondary)] leading-relaxed max-w-[60ch]">
                An interconnected digital ecosystem where location, currency, and systemic fragmentation never restrict human potential and daily dignity.
              </p>
            </dd>
          </div>
        </dl>

        {/* Leadership & Governance Section */}
        <section className="mb-14 md:mb-28">
          <div className="max-w-2xl mb-10">
            <h2 className="text-[30px] sm:text-[36px] font-bold text-[var(--text-primary)] tracking-tight leading-tight mb-4">
              Meet the Stewards of Braxvio
            </h2>
            <p className="text-[17px] text-[var(--text-secondary)] leading-relaxed">
              Braxvio is steered by builders, fullstack engineers, and operators committed to long-term technology craftsmanship, ethical stewardship, and enduring digital infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {LEADERSHIP_TEAM.map((member) => (
              <article
                key={member.name}
                className="flex flex-col p-6 sm:p-7 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)]"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    aria-hidden="true"
                    className="grid place-items-center size-12 rounded-full bg-[var(--accent-surface)] text-[var(--accent-text)] font-semibold text-[15px] shrink-0"
                  >
                    {member.initials}
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-[19px] font-semibold text-[var(--text-primary)] tracking-tight leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-[14px] text-[var(--text-secondary)]">{member.role}</p>
                  </div>
                </div>

                <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed mb-6">{member.bio}</p>

                <div className="mt-auto pt-4 border-t border-[var(--border-subtle)] flex items-end justify-between gap-4 text-[13.5px]">
                  <p className="text-[var(--text-tertiary)]">
                    <span className="font-medium text-[var(--text-secondary)]">Focus:</span> {member.focus}
                  </p>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="link-accent shrink-0"
                  >
                    LinkedIn
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Operating Pillars */}
        <section className="mb-20 md:mb-24">
          <h2 className="text-[30px] sm:text-[36px] font-bold text-[var(--text-primary)] tracking-tight mb-10">
            Four Operating Pillars
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {OPERATING_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <li key={pillar.title} className="flex gap-4 pt-6 border-t border-[var(--border-subtle)]">
                  <Icon className="w-5 h-5 text-[var(--accent-text)] shrink-0 mt-0.5" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-[17px] font-semibold text-[var(--text-primary)] tracking-tight mb-1.5">{pillar.title}</h3>
                    <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed">{pillar.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>

        {/* Bottom CTA */}
        <div className="pt-10 border-t border-[var(--border-strong)] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h2 className="text-[22px] font-semibold text-[var(--text-primary)] tracking-tight mb-1">
              Explore Our Active Ventures
            </h2>
            <p className="text-[15px] text-[var(--text-secondary)]">
              Discover the independent digital products and platforms built and operated by Braxvio.
            </p>
          </div>
          <Link href="/ventures" className="btn btn-primary shrink-0 self-start sm:self-auto">
            Browse Ventures
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
