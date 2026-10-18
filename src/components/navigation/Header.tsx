"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, Search } from "lucide-react";
import { BraxvioLogo } from "@/components/ui/BraxvioLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useCommandPalette } from "@/components/navigation/GlobalCommandPalette";

const NAV_ITEMS = [
  { label: "Ventures", href: "/ventures" },
  { label: "Insights", href: "/insights" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { open: openCommandPalette } = useCommandPalette();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on resize to desktop (e.g. tablet rotation or window resize)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-colors duration-200 ${
          mobileMenuOpen
            ? "bg-[var(--bg-primary)] border-b border-[var(--border-subtle)]"
            : scrolled
            ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-xs"
            : "bg-[var(--bg-primary)]"
        }`}
      >
        <div className="content-container">
          <div className="flex items-center justify-between h-20 gap-3 sm:gap-6">
            {/* Logo with 100% Transparent Background */}
            <div className="shrink-0">
              <BraxvioLogo size="md" />
            </div>

            {/* Desktop Navigation */}
            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-1.5 min-w-0"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-[14px] xl:text-[15.5px] font-medium whitespace-nowrap rounded-full px-3 py-1.5 xl:px-4 xl:py-2 transition-all duration-200 ${
                      isActive
                        ? "text-[var(--text-primary)] font-semibold bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-sm"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-transparent"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* Header Actions */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
              <button
                type="button"
                onClick={openCommandPalette}
                aria-label="Open Command Palette (⌘K)"
                className="inline-flex items-center gap-1.5 xl:gap-2 px-2.5 py-1.5 xl:px-3.5 xl:py-2 rounded-full text-xs font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--bg-secondary)] border border-[var(--border-subtle)] shadow-2xs transition-colors shrink-0 cursor-pointer"
              >
                <Search className="w-3.5 h-3.5 text-[var(--text-tertiary)]" />
                <span className="text-[12px] hidden xl:inline">Search</span>
                <kbd className="text-[10px] bg-[var(--bg-secondary)] border border-[var(--border-subtle)] px-1.5 py-0.5 rounded font-mono text-[var(--text-tertiary)]">
                  ⌘K
                </kbd>
              </button>

              <ThemeToggle />

              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-4 py-2 xl:px-5 xl:py-2.5 rounded-full text-[13px] xl:text-[14px] font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 active:scale-[0.98] transition-all shadow-xs shrink-0 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--accent-cobalt)]"
              >
                Start a Conversation
              </Link>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex lg:hidden items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={openCommandPalette}
                aria-label="Search"
                className="p-1.5 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
              >
                <Search className="w-4 h-4 text-[var(--text-secondary)]" />
              </button>
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="p-1.5 rounded-lg text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-colors focus-visible:ring-2 focus-visible:ring-[var(--accent-cobalt)] cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Rendered in Portal to escape sticky/backdrop-blur containing block */}
      {mounted &&
        mobileMenuOpen &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
            className="fixed inset-x-0 top-20 bottom-0 z-50 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] px-6 py-8 flex flex-col justify-between overflow-y-auto overscroll-contain lg:hidden animate-in fade-in-50 duration-200"
            style={{ height: "calc(100dvh - 5rem)" }}
          >
            <div className="w-full max-w-md mx-auto flex flex-col justify-between flex-1">
              <nav className="flex flex-col gap-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-xl font-medium py-3 border-b border-[var(--border-subtle)] flex items-center justify-between transition-colors ${
                        isActive
                          ? "text-[var(--accent-cobalt)] font-semibold"
                          : "text-[var(--text-primary)] hover:text-[var(--accent-cobalt)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 px-4 rounded-full text-center text-base font-semibold text-white bg-[var(--accent-cobalt)] hover:bg-blue-600 transition-all shadow-sm active:scale-[0.99]"
                >
                  Start a Conversation
                </Link>
                <p className="text-xs text-center text-[var(--text-tertiary)] font-mono">
                  Founded in Africa · Global Horizon
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
