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
              Braxvio is a technology parent company focused on building and developing ventures across consumer platforms, enterprise software, and emerging technology.
            </p>
            <div className="pt-2">
              <span className="text-xs font-medium text-[var(--text-tertiary)]">
                Founded in Africa · Global Horizon
              </span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Ventures */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                Ventures
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
                    href="/ventures/pharmora"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Pharmora
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ventures/devpay-africa"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    DevPay Africa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ventures/pellmia"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Pellmia
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ventures/ecolift"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    EcoLift
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ventures/kampus"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Kampus
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                Company
              </span>
              <ul className="flex flex-col gap-2.5 text-[14px]">
                <li>
                  <Link
                    href="/about"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    About Braxvio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/philosophy"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Operating Principles
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Talent & Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/partnerships"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Strategic Partnerships
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Inquiry Routing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Governance & Legal */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-tertiary)]">
                Trust & Legal
              </span>
              <ul className="flex flex-col gap-2.5 text-[14px]">
                <li>
                  <Link
                    href="/privacy"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Privacy Notice
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <span className="text-xs text-[var(--text-tertiary)]">
                    Responsible data handling
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright and status */}
        <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-tertiary)]">
          <p>© {currentYear} Braxvio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Utility Before Appearance</span>
            <span>·</span>
            <span>Engineering for Durability</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
