"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo, useRef } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowRight,
  Sun,
  Moon,
  Copy,
  Check,
  BookOpen,
  Briefcase,
  Users,
  Compass,
  MessageSquare,
  MessageCircle,
  Handshake,
} from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { getPublishedVentures } from "@/content/ventures";
import { VentureStatus } from "@/components/ui/VentureStatus";
import type { Venture } from "@/types/venture";

interface CommandItem {
  id: string;
  category: "Ventures" | "Pages" | "Actions";
  title: string;
  subtitle: string;
  venture?: Venture;
  icon?: React.ComponentType<{ className?: string }>;
  action: () => void;
  keywords?: string[];
}

interface CommandPaletteContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

const CommandPaletteContext = createContext<CommandPaletteContextType>({
  isOpen: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
});

export const useCommandPalette = () => useContext(CommandPaletteContext);

const VENTURE_KEYWORDS: Record<string, string[]> = {
  kampus: ["edtech", "campus", "hostel", "ghana", "students", "ug", "knust"],
  pharmora: ["health", "pharmacy", "medicine", "cold-chain", "dispensary"],
  "devpay-africa": ["fintech", "payments", "escrow", "remote", "fx", "developer", "payroll"],
  pellmia: ["telecom", "sms", "otp", "2fa", "carrier", "latency", "mtn", "telecel"],
  ecolift: ["sustainability", "recycling", "scrap", "circular", "logistics", "waste"],
};

const CONTACT_EMAIL = "admin@braxvio.com";

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const listRef = useRef<HTMLUListElement>(null);
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();

  const open = useCallback(() => {
    setIsOpen(true);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
    setQuery("");
    setSelectedIndex(0);
  }, []);

  // Global keyboard shortcut: Meta+K or Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        toggle();
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        close();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, toggle, close]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const items: CommandItem[] = useMemo(() => {
    const go = (href: string) => () => {
      router.push(href);
      close();
    };

    // Ventures come from the published data so names, taglines and stages never drift
    const ventureItems: CommandItem[] = getPublishedVentures().map((venture) => ({
      id: `venture-${venture.id}`,
      category: "Ventures",
      title: venture.name,
      subtitle: venture.tagline,
      venture,
      keywords: [...(VENTURE_KEYWORDS[venture.id] ?? []), ...venture.secondaryTags, venture.primaryCategory],
      action: go(`/ventures/${venture.slug}`),
    }));

    return [
      ...ventureItems,

      { id: "nav-ventures", category: "Pages", title: "Ventures", subtitle: "Browse the full venture directory", icon: Compass, keywords: ["portfolio", "directory", "all"], action: go("/ventures") },
      { id: "nav-insights", category: "Pages", title: "Insights", subtitle: "Essays on engineering, economics and building in Africa", icon: BookOpen, keywords: ["essays", "blog", "articles", "research"], action: go("/insights") },
      { id: "nav-partnerships", category: "Pages", title: "Partnerships", subtitle: "Ways to partner with Braxvio and its ventures", icon: Handshake, keywords: ["partners", "invest", "capital", "pilot"], action: go("/partnerships") },
      { id: "nav-about", category: "Pages", title: "About", subtitle: "Why Braxvio exists and who leads it", icon: Users, keywords: ["team", "leadership", "michael", "seth", "alex", "nirvana"], action: go("/about") },
      { id: "nav-careers", category: "Pages", title: "Careers", subtitle: "How we work and how to express interest", icon: Briefcase, keywords: ["jobs", "hiring", "talent", "work"], action: go("/careers") },
      { id: "nav-contact", category: "Pages", title: "Contact", subtitle: "Send an inquiry or find the right inbox", icon: MessageSquare, keywords: ["email", "office", "reach", "inquiry"], action: go("/contact") },

      {
        id: "action-theme",
        category: "Actions",
        title: `Switch to ${theme === "dark" ? "light" : "dark"} mode`,
        subtitle: "Change the site's color theme",
        icon: theme === "dark" ? Sun : Moon,
        keywords: ["theme", "mode", "dark", "light", "color"],
        action: () => {
          toggleTheme();
          close();
        },
      },
      {
        id: "action-copy-email",
        category: "Actions",
        title: copiedEmail ? "Email address copied" : "Copy contact email",
        subtitle: CONTACT_EMAIL,
        icon: copiedEmail ? Check : Copy,
        keywords: ["email", "address", "contact", "copy"],
        action: () => {
          navigator.clipboard.writeText(CONTACT_EMAIL);
          setCopiedEmail(true);
          setTimeout(() => {
            setCopiedEmail(false);
            close();
          }, 800);
        },
      },
      {
        id: "action-whatsapp",
        category: "Actions",
        title: "Chat on WhatsApp",
        subtitle: "Message the Braxvio team",
        icon: MessageCircle,
        keywords: ["whatsapp", "chat", "message", "support"],
        action: () => {
          window.open("https://wa.me/qr/V2VVDKVB7J7WL1", "_blank", "noopener,noreferrer");
          close();
        },
      },
    ];
  }, [router, close, theme, toggleTheme, copiedEmail]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const lower = query.toLowerCase().trim();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.subtitle.toLowerCase().includes(lower) ||
        item.category.toLowerCase().includes(lower) ||
        item.keywords?.some((k) => k.toLowerCase().includes(lower))
    );
  }, [items, query]);

  // Adjust selection when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keep the keyboard selection visible inside the scrolling list
  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${selectedIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  // Handle keyboard navigation inside the list
  const handleKeyDownInInput = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    }
  };

  const activeId = filteredItems[selectedIndex] ? `cmd-${filteredItems[selectedIndex].id}` : undefined;

  return (
    <CommandPaletteContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Search Braxvio"
          className="fixed inset-0 z-100 flex items-start justify-center pt-[10vh] sm:pt-[14vh] px-4"
        >
          <div className="fixed inset-0 bg-black/40 dark:bg-black/60" onClick={close} aria-hidden="true" />

          <div className="relative w-full max-w-xl rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-[0_24px_64px_-12px_rgba(0,0,0,0.35)] overflow-hidden z-10 flex flex-col max-h-[72vh]">
            <div className="flex items-center gap-3 px-5 h-[68px] shrink-0 border-b border-[var(--border-subtle)]">
              <Search className="w-[18px] h-[18px] text-[var(--text-tertiary)] shrink-0" />
              <input
                type="text"
                autoFocus
                role="combobox"
                aria-expanded="true"
                aria-controls="command-palette-results"
                aria-activedescendant={activeId}
                aria-autocomplete="list"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDownInInput}
                placeholder="Search ventures, pages and actions…"
                aria-label="Search ventures, pages and actions"
                className="w-full bg-transparent text-[16px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] outline-none focus-visible:outline-none"
              />
              <button
                type="button"
                onClick={close}
                aria-label="Close search"
                className="text-[11px] font-medium px-1.5 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors shrink-0 cursor-pointer"
              >
                Esc
              </button>
            </div>

            <ul ref={listRef} id="command-palette-results" role="listbox" aria-label="Results" className="p-2 overflow-y-auto">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;
                  const showGroup = index === 0 || filteredItems[index - 1].category !== item.category;
                  return (
                    <React.Fragment key={item.id}>
                      {showGroup && (
                        <li role="presentation" className="px-3 pt-3 pb-1.5 text-[12px] font-medium text-[var(--text-tertiary)] first:pt-1">
                          {item.category}
                        </li>
                      )}
                      <li
                        id={`cmd-${item.id}`}
                        role="option"
                        aria-selected={isSelected}
                        data-index={index}
                        onClick={item.action}
                        onMouseMove={() => setSelectedIndex(index)}
                        className={`flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg cursor-pointer ${
                          isSelected ? "bg-[var(--bg-secondary)]" : ""
                        }`}
                      >
                        <span className="flex items-center gap-3 min-w-0">
                          {item.venture ? (
                            <span
                              aria-hidden="true"
                              className="grid place-items-center size-8 rounded-lg bg-[var(--accent-surface)] text-[13px] font-semibold text-[var(--accent-text)] shrink-0"
                            >
                              {item.title.charAt(0)}
                            </span>
                          ) : (
                            Icon && (
                              <span
                                aria-hidden="true"
                                className="grid place-items-center size-8 rounded-lg border border-[var(--border-subtle)] text-[var(--text-secondary)] shrink-0"
                              >
                                <Icon className="w-4 h-4" />
                              </span>
                            )
                          )}
                          <span className="min-w-0">
                            <span className="block text-[14.5px] font-medium text-[var(--text-primary)] truncate">
                              {item.title}
                            </span>
                            <span className="block text-[13px] text-[var(--text-tertiary)] truncate">{item.subtitle}</span>
                          </span>
                        </span>

                        <span className="flex items-center gap-3 shrink-0">
                          {item.venture && (
                            <span className="hidden sm:block">
                              <VentureStatus status={item.venture.status} />
                            </span>
                          )}
                          <ArrowRight
                            className={`w-3.5 h-3.5 ${isSelected ? "text-[var(--text-secondary)]" : "text-transparent"}`}
                          />
                        </span>
                      </li>
                    </React.Fragment>
                  );
                })
              ) : (
                <li className="py-12 px-6 text-center">
                  <p className="text-[15px] font-medium text-[var(--text-primary)]">
                    No results for &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-[13px] text-[var(--text-tertiary)] mt-1">
                    Try a venture like Kampus or Pharmora, or a page like Careers.
                  </p>
                </li>
              )}
            </ul>

            <div className="shrink-0 px-4 py-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[12px] text-[var(--text-tertiary)] pointer-coarse:hidden">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">↑</kbd>
                  <kbd className="px-1.5 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">↓</kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">↵</kbd>
                  open
                </span>
              </div>
              <span className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded border border-[var(--border-subtle)] bg-[var(--bg-secondary)]">esc</kbd>
                close
              </span>
            </div>
          </div>
        </div>
      )}
    </CommandPaletteContext.Provider>
  );
}
