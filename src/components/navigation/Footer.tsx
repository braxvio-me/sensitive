"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BraxvioLogo } from "@/components/ui/BraxvioLogo";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="w-full bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] pt-16 pb-12 mt-auto">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14">
          {/* Company Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <BraxvioLogo />
            <p className="text-[14px] text-[var(--text-secondary)] leading-relaxed max-w-sm mt-1">
              Braxvio is a parent technology company creating digital products, platforms, and infrastructure around the evolving needs of people, businesses, and communities.
            </p>
            <div className="pt-2 flex flex-col gap-1 text-xs text-[var(--text-tertiary)] font-mono">
              <span>HQ: Accra, Ghana • Lat: 5.6037° N, Long: 0.1870° W</span>
              <span>Founded 2024 • Parent Technology Co.</span>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/qr/V2VVDKVB7J7WL1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs px-3 py-1.5 rounded-full bg-[#ECFDF5] dark:bg-[#064E3B] text-emerald-700 dark:text-emerald-300 font-semibold hover:bg-[#D1FAE5] dark:hover:bg-[#065F46] transition-colors border border-emerald-200 dark:border-emerald-800"
              >
                Chat on WhatsApp →
              </a>
              <a
                href="https://linkedin.com/company/braxvio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Products */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                Products & Platforms
              </span>
              <ul className="flex flex-col gap-2.5 text-[14px]">
                <li>
                  <Link
                    href="/ventures"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Directory Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ventures/kampus"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium"
                  >
                    Kampus (Public Beta)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ventures/pharmora"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Pharmora (Healthcare)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ventures/ecolift"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    EcoLift (Sustainability)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ventures/devpay-africa"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    DevPay Africa (Fintech)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                Company & Doctrine
              </span>
              <ul className="flex flex-col gap-2.5 text-[14px]">
                <li>
                  <Link
                    href="/about"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    About & Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/insights"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors font-medium"
                  >
                    Insights & Dispatches
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Talent Desk (jobs@braxvio.com)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partnerships"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Partnerships & Capital
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Direct Inboxes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Governance & Legal */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                Trust & Sovereign Legal
              </span>
              <ul className="flex flex-col gap-2.5 text-[14px]">
                <li>
                  <Link
                    href="/privacy"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Privacy (Act 843)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="pt-2">
                  <div className="text-[11px] text-[var(--text-tertiary)] leading-tight">
                    Desk: admin@braxvio.com
                  </div>
                  <div className="text-[11px] text-[var(--text-tertiary)] leading-tight">
                    Partners: partnerships@braxvio.com
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright and status */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-tertiary)]">
          <p>© {currentYear} Braxvio Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <span>Start with the problem</span>
            <span>·</span>
            <span>Design around people</span>
            <span>·</span>
            <span>Build for reality</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
