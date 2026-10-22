"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { BraxvioLogo } from "@/components/ui/BraxvioLogo";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { useCommandPalette } from "@/components/navigation/GlobalCommandPalette";
import { ShortcutKey } from "@/components/ui/ShortcutKey";

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
            ? "bg-[var(--bg-primary)]/90 backdrop-blur-md border-b border-[var(--border-subtle)]"
            : "bg-[var(--bg-primary)] border-b border-transparent"
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
              className="hidden lg:flex items-center gap-0.5 xl:gap-1 min-w-0"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-[14.5px] xl:text-[15px] font-medium whitespace-nowrap rounded-full px-3 py-2 xl:px-3.5 transition-colors duration-150 ${
                      isActive
                        ? "text-[var(--text-primary)] bg-[var(--bg-secondary)]"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
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
                aria-label="Search the site"
                className="inline-flex items-center gap-2 h-9 pl-3 pr-1.5 rounded-full text-[13.5px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--surface-elevated)] hover:bg-[var(--bg-secondary)] border border-[var(--border-subtle)] transition-colors shrink-0 cursor-pointer"
              >
                <Search className="w-4 h-4 text-[var(--text-tertiary)]" />
                <span className="hidden xl:inline pr-1">Search</span>
                <ShortcutKey />
              </button>

              <ThemeToggle />

              <Link href="/contact" className="btn btn-primary btn-sm px-4 xl:px-5 shrink-0">
                Start a Conversation
              </Link>
            </div>

            {/* Mobile Right Controls */}
            <div className="flex lg:hidden items-center gap-1 shrink-0">
              <button
                type="button"
                onClick={openCommandPalette}
                aria-label="Search the site"
                className="grid place-items-center size-11 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
              >
                <Search className="w-[18px] h-[18px]" />
              </button>
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                className="grid place-items-center size-11 rounded-full text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
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
            className="fixed inset-x-0 top-20 bottom-0 z-50 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] px-6 py-8 flex flex-col justify-between overflow-y-auto overscroll-contain lg:hidden"
            style={{ height: "calc(100dvh - 5rem)" }}
          >
            <div className="w-full max-w-md mx-auto flex flex-col justify-between flex-1">
              <nav aria-label="Mobile Navigation" className="flex flex-col">
                {NAV_ITEMS.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                      className={`text-[22px] font-semibold tracking-tight py-4 border-b border-[var(--border-subtle)] flex items-center justify-between transition-colors ${
                        isActive
                          ? "text-[var(--accent-text)]"
                          : "text-[var(--text-primary)] hover:text-[var(--accent-text)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="w-4 h-4 text-[var(--text-tertiary)]" />
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-4">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="btn btn-primary w-full">
                  Start a Conversation
                </Link>
                <p className="text-[13px] text-center text-[var(--text-tertiary)]">
                  Accra, Ghana · Founded 2024
                </p>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
