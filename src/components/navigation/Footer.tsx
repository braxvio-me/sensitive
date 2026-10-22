"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { BraxvioLogo } from "@/components/ui/BraxvioLogo";
import { getPublishedVentures } from "@/content/ventures";

const COMPANY_LINKS = [
  { label: "About", href: "/about" },
  { label: "Insights", href: "/insights" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const linkClass = "text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);
  const ventures = getPublishedVentures();

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] pt-16 pb-10 mt-auto">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14">
          {/* Company Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <BraxvioLogo />
            <p className="text-[15px] text-[var(--text-secondary)] leading-relaxed max-w-sm mt-1">
              Braxvio is a parent technology company creating digital products, platforms, and infrastructure around the evolving needs of people, businesses, and communities.
            </p>
            <p className="text-[14px] text-[var(--text-tertiary)]">Accra, Ghana · Founded 2024</p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href="https://wa.me/qr/V2VVDKVB7J7WL1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
              <a
                href="https://linkedin.com/company/braxvio"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                LinkedIn
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h2 className="text-[13px] font-semibold text-[var(--text-primary)] mb-4">Ventures</h2>
              <ul className="flex flex-col gap-2.5 text-[14.5px]">
                <li>
                  <Link href="/ventures" className={linkClass}>
                    All ventures
                  </Link>
                </li>
                {ventures.map((venture) => (
                  <li key={venture.id}>
                    <Link href={`/ventures/${venture.slug}`} className={linkClass}>
                      {venture.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-[13px] font-semibold text-[var(--text-primary)] mb-4">Company</h2>
              <ul className="flex flex-col gap-2.5 text-[14.5px]">
                {COMPANY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={linkClass}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-[13px] font-semibold text-[var(--text-primary)] mb-4">Legal</h2>
              <ul className="flex flex-col gap-2.5 text-[14.5px]">
                <li>
                  <Link href="/privacy" className={linkClass}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className={linkClass}>
                    Terms of Service
                  </Link>
                </li>
              </ul>

              <h2 className="text-[13px] font-semibold text-[var(--text-primary)] mt-8 mb-4">Email</h2>
              <ul className="flex flex-col gap-2.5 text-[14.5px]">
                <li>
                  <a href="mailto:admin@braxvio.com" className={linkClass}>
                    admin@braxvio.com
                  </a>
                </li>
                <li>
                  <a href="mailto:partnerships@braxvio.com" className={`${linkClass} break-all`}>
                    partnerships@braxvio.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright and status */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] text-[var(--text-tertiary)]">
          <p>© {currentYear} Braxvio Technologies. All rights reserved.</p>
          <p>Start with the problem · Design around people · Build for reality</p>
        </div>
      </div>
    </footer>
  );
}
