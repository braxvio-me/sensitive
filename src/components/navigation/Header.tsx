"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BraxvioLogo } from "@/components/ui/BraxvioLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_ITEMS = [
  { label: "Ventures", href: "/ventures" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "About", href: "/about" },
  { label: "Philosophy", href: "/philosophy" },
  { label: "Careers", href: "/careers" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-[var(--bg-primary)]/85 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-xs"
          : "bg-[var(--bg-primary)]"
      }`}
    >
      <div className="content-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <BraxvioLogo />

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-8"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-[15px] font-medium transition-colors hover:text-[var(--text-primary)] ${
                    isActive
                      ? "text-[var(--text-primary)] font-semibold"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Actions */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[14px] font-medium text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 active:scale-[0.98] transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-cobalt)]"
            >
              Start a Conversation
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="p-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-cobalt)]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-x-0 top-20 bottom-0 z-40 bg-[var(--bg-primary)]/98 backdrop-blur-xl border-t border-[var(--border-subtle)] px-6 py-8 flex flex-col justify-between overflow-y-auto md:hidden"
        >
          <nav className="flex flex-col gap-5">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xl font-medium py-2 border-b border-[var(--border-subtle)] flex items-center justify-between ${
                    isActive
                      ? "text-[var(--accent-cobalt)] font-semibold"
                      : "text-[var(--text-primary)]"
                  }`}
                >
                  {item.label}
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-8 border-t border-[var(--border-subtle)] flex flex-col gap-4">
            <Link
              href="/contact"
              className="w-full py-3.5 px-4 rounded-full text-center text-base font-medium text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 transition-all shadow-sm"
            >
              Start a Conversation
            </Link>
            <p className="text-xs text-center text-[var(--text-tertiary)]">
              Founded in Africa · Global Horizon
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
