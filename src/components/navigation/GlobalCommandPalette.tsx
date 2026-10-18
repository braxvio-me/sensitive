"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Terminal,
  ShieldCheck,
  Cpu,
  Globe,
  ArrowRight,
  Sun,
  Moon,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  Activity,
  Briefcase,
  Users,
  Compass,
  MessageSquare,
} from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";

interface CommandItem {
  id: string;
  category: "Ventures" | "Navigation" | "Actions";
  title: string;
  subtitle: string;
  badge?: string;
  badgeColor?: string;
  icon: React.ComponentType<{ className?: string }>;
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

export function CommandPaletteProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [copiedCoords, setCopiedCoords] = useState(false);
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

  const items: CommandItem[] = useMemo(
    () => [
      // Ventures
      {
        id: "venture-kampus",
        category: "Ventures",
        title: "Kampus",
        subtitle: "Campus operating system, student identity & micro-commerce",
        badge: "Public Beta",
        badgeColor: "bg-[#EFF6FF] dark:bg-[#1E3A5F] text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-700",
        icon: Terminal,
        keywords: ["edtech", "campus", "hostel", "ghana", "students", "ug", "knust"],
        action: () => {
          router.push("/ventures/kampus");
          close();
        },
      },
      {
        id: "venture-pharmora",
        category: "Ventures",
        title: "Pharmora",
        subtitle: "Cold-chain pharmaceutical supply & digital dispensary network",
        badge: "Live Telemetry",
        badgeColor: "bg-[#ECFDF5] dark:bg-[#064E3B] text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700",
        icon: ShieldCheck,
        keywords: ["health", "pharmacy", "medicine", "cold-chain", "dispensary"],
        action: () => {
          router.push("/ventures/pharmora");
          close();
        },
      },
      {
        id: "venture-devpay",
        category: "Ventures",
        title: "DevPay Africa",
        subtitle: "Compliant cross-border multi-currency escrow for African tech talent",
        badge: "Private Beta",
        badgeColor: "bg-[#EFF6FF] dark:bg-[#1E3A5F] text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-700",
        icon: Cpu,
        keywords: ["fintech", "payments", "escrow", "remote", "fx", "developer", "payroll"],
        action: () => {
          router.push("/ventures/devpay-africa");
          close();
        },
      },
      {
        id: "venture-pellmia",
        category: "Ventures",
        title: "Pellmia",
        subtitle: "Direct SS7 carrier routing for sub-second 2FA & transactional SMS",
        badge: "Private Beta",
        badgeColor: "bg-[#EFF6FF] dark:bg-[#1E3A5F] text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-700",
        icon: Terminal,
        keywords: ["telecom", "sms", "otp", "2fa", "carrier", "latency", "mtn", "telecel"],
        action: () => {
          router.push("/ventures/pellmia");
          close();
        },
      },
      {
        id: "venture-ecolift",
        category: "Ventures",
        title: "EcoLift",
        subtitle: "Circular logistics engine & industrial scrap recovery network",
        badge: "In Development",
        badgeColor: "bg-[#FFFBEB] dark:bg-[#451A03] text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-700",
        icon: Globe,
        keywords: ["sustainability", "recycling", "scrap", "circular", "logistics", "greentech"],
        action: () => {
          router.push("/ventures/ecolift");
          close();
        },
      },

      // Navigation
      {
        id: "nav-ventures",
        category: "Navigation",
        title: "Ventures Directory",
        subtitle: "Browse all portfolio technology ventures and tiers",
        icon: Compass,
        keywords: ["portfolio", "directory", "all"],
        action: () => {
          router.push("/ventures");
          close();
        },
      },
      {
        id: "nav-insights",
        category: "Navigation",
        title: "Insights & Technical Dispatches",
        subtitle: "Architectural essays, African tech labor research & engineering doctrine",
        icon: BookOpen,
        keywords: ["essays", "blog", "articles", "research", "insights"],
        action: () => {
          router.push("/insights");
          close();
        },
      },
      {
        id: "nav-partnerships",
        category: "Navigation",
        title: "Partnerships & Capital Studio",
        subtitle: "Co-founding, ecosystem syndicates and 5-stage deployment pipeline",
        icon: Briefcase,
        keywords: ["partners", "invest", "capital", "syndicate"],
        action: () => {
          router.push("/partnerships");
          close();
        },
      },
      {
        id: "nav-about",
        category: "Navigation",
        title: "About & Leadership",
        subtitle: "Company background, Accra HQ & executive team",
        icon: Users,
        keywords: ["team", "leadership", "michael", "seth", "alex", "nirvana"],
        action: () => {
          router.push("/about");
          close();
        },
      },
      {
        id: "nav-careers",
        category: "Navigation",
        title: "Talent Desk & Open Disciplines",
        subtitle: "Engineering, Product Architecture & Distributed Systems roles",
        icon: Briefcase,
        keywords: ["careers", "jobs", "hiring", "talent", "work"],
        action: () => {
          router.push("/careers");
          close();
        },
      },
      {
        id: "nav-contact",
        category: "Navigation",
        title: "Direct Inboxes & Contact",
        subtitle: "Reach executive desk or schedule consultation",
        icon: MessageSquare,
        keywords: ["contact", "email", "office", "reach", "desk"],
        action: () => {
          router.push("/contact");
          close();
        },
      },

      // Actions
      {
        id: "action-theme",
        category: "Actions",
        title: `Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`,
        subtitle: "Toggle visual color theme",
        icon: theme === "dark" ? Sun : Moon,
        keywords: ["theme", "mode", "dark", "light", "color"],
        action: () => {
          toggleTheme();
          close();
        },
      },
      {
        id: "action-coords",
        category: "Actions",
        title: copiedCoords ? "Coordinates Copied!" : "Copy Accra HQ Coordinates",
        subtitle: "5.6037° N, 0.1870° W (Accra, Ghana)",
        icon: copiedCoords ? Check : Copy,
        keywords: ["coords", "location", "address", "gps", "accra", "ghana"],
        action: () => {
          navigator.clipboard.writeText("5.6037° N, 0.1870° W — Accra, Ghana");
          setCopiedCoords(true);
          setTimeout(() => {
            setCopiedCoords(false);
            close();
          }, 800);
        },
      },
      {
        id: "action-whatsapp",
        category: "Actions",
        title: "Direct WhatsApp Line",
        subtitle: "Direct message with Braxvio executive desk",
        icon: ExternalLink,
        keywords: ["whatsapp", "chat", "message", "support"],
        action: () => {
          window.open("https://wa.me/qr/V2VVDKVB7J7WL1", "_blank");
          close();
        },
      },
    ],
    [router, close, theme, toggleTheme, copiedCoords]
  );

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

  return (
    <CommandPaletteContext.Provider value={{ isOpen, open, close, toggle }}>
      {children}

      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Braxvio Command Palette"
          className="fixed inset-0 z-100 flex items-start justify-center pt-[12vh] sm:pt-[16vh] px-4 animate-in fade-in duration-150"
        >
          {/* Backdrop with subtle blur */}
          <div
            className="fixed inset-0 bg-black/45 dark:bg-black/65 backdrop-blur-xs transition-opacity"
            onClick={close}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-2xl overflow-hidden z-10 flex flex-col max-h-[75vh]">
            {/* Header / Input Field */}
            <div className="flex items-center gap-3 px-4 py-3.5 border-b border-[var(--border-subtle)] bg-[var(--bg-primary)]/50">
              <Search className="w-5 h-5 text-[var(--text-tertiary)] shrink-0" />
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDownInInput}
                placeholder="Type a command, venture, or protocol spec..."
                aria-label="Search Braxvio command palette"
                className="w-full bg-transparent text-[15px] text-[var(--text-primary)] placeholder-[var(--text-tertiary)] focus:outline-none"
              />
              <button
                type="button"
                onClick={close}
                className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-subtle)] text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors shrink-0"
              >
                ESC
              </button>
            </div>

            {/* Results List */}
            <div className="p-2 overflow-y-auto divide-y divide-[var(--border-subtle)]/40">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => {
                  const Icon = item.icon;
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      className={`flex items-center justify-between p-3 rounded-xl transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-[var(--bg-secondary)] text-[var(--text-primary)]"
                          : "text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)]/60"
                      }`}
                    >
                      <div className="flex items-center gap-3.5 min-w-0 pr-3">
                        <div
                          className={`p-2 rounded-lg border transition-all shrink-0 ${
                            isSelected
                              ? "bg-[var(--surface-elevated)] text-[var(--accent-cobalt)] border-[var(--border-strong)] scale-105"
                              : "bg-[var(--bg-primary)] text-[var(--text-tertiary)] border-[var(--border-subtle)]"
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[14px] font-medium text-[var(--text-primary)] truncate">
                              {item.title}
                            </span>
                            {item.badge && (
                              <span
                                className={`text-[10px] font-mono font-medium px-2 py-0.25 rounded-full border ${item.badgeColor}`}
                              >
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[12px] text-[var(--text-tertiary)] truncate mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                          {item.category}
                        </span>
                        <ArrowRight
                          className={`w-3.5 h-3.5 transition-transform ${
                            isSelected ? "translate-x-0.5 text-[var(--accent-cobalt)]" : "text-transparent"
                          }`}
                        />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="py-12 text-center">
                  <Terminal className="w-8 h-8 text-[var(--text-tertiary)] mx-auto mb-2 opacity-50" />
                  <p className="text-sm font-medium text-[var(--text-primary)]">
                    No results found for &ldquo;{query}&rdquo;
                  </p>
                  <p className="text-xs text-[var(--text-tertiary)] mt-1">
                    Try searching for Kampus, Pharmora, DevPay, Status, or Accra.
                  </p>
                </div>
              )}
            </div>

            {/* Footer with keyboard hints */}
            <div className="px-4 py-2.5 border-t border-[var(--border-subtle)] bg-[var(--bg-primary)]/70 flex items-center justify-between text-[11px] font-mono text-[var(--text-tertiary)]">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-2xs">
                    ↑
                  </kbd>
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-2xs">
                    ↓
                  </kbd>
                  navigate
                </span>
                <span className="flex items-center gap-1.5">
                  <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-2xs">
                    ↵
                  </kbd>
                  select
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <kbd className="px-1.5 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-2xs">
                  esc
                </kbd>
                close
              </div>
            </div>
          </div>
        </div>
      )}
    </CommandPaletteContext.Provider>
  );
}
