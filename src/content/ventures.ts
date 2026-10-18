import { Venture, VentureCategory } from "@/types/venture";

export const VENTURES_DATA: Venture[] = [
  {
    id: "kampus",
    slug: "kampus",
    name: "Kampus",
    tagline: "University life. One connected experience.",
    summary: "A digital ecosystem designed around the everyday realities of university students—unifying academics, verified student housing, peer marketplaces, and campus life.",
    description: "Kampus unifies the entire student journey into an institutional-grade, student-verified ecosystem. From verified campus accommodation to peer-to-peer textbook and gadget exchange, Kampus treats student life as a complete system, eliminating housing scams and connected across flagship campuses like Legon and KNUST.",
    primaryCategory: "Consumer Platforms",
    secondaryTags: ["Education", "Student Housing", "Campus Marketplace", "Public Beta"],
    status: "Live", // Public Beta in active usage
    ownershipRelationship: "Braxvio Core Platform",
    publicUrl: "https://kampus.app",
    isVerified: true,
    isPublished: true,
    publicationApproved: true,
    lastReviewedAt: "2026-10-15",
    problemSolved: "Higher education institutions provide academic portals, but daily student life outside the lecture hall is completely fractured across informal WhatsApp groups, insecure marketplace listings, and exploitative unverified housing middlemen.",
    productPurpose: "To eliminate housing scams, reduce daily living friction, and connect over 45,000 university students across flagship campuses with verified student accommodation, peer commerce, and digital identity passes.",
    keyCapabilities: [
      "Verified Student Housing: Direct verification with vetted hostel managers (1,400+ beds, 0% broker fee across Legon & KNUST) and deposit escrow protection",
      "Campus Peer Marketplace: Safe, student-ID verified buy-and-sell handoff zones for textbooks, calculators, gadgets, and essentials",
      "Academic & Campus Feeds: Unified schedules, department updates, student union announcements, and campus event discovery",
      "Digital Student Identity: Cryptographically verifiable student identity badge unlocking campus perks, transport discounts, and peer trust"
    ],
    architectureNotes: [
      "Built with Next.js, React Native, Node.js, PostgreSQL, Redis, and WebSockets",
      "Optimized for low-bandwidth cellular connections with optimistic offline updates and registrar verification"
    ]
  },
  {
    id: "pharmora",
    slug: "pharmora",
    name: "Pharmora",
    tagline: "Making healthcare access feel closer.",
    summary: "A technology-enabled marketplace connecting patients directly with licensed pharmacies, authentic medication inventories, and verified telehealth consultations.",
    description: "Pharmora connects licensed community pharmacies via a lightweight cloud inventory bridge, giving patients instant visibility into legitimate stock availability, regulated pricing, and temperature-monitored courier delivery.",
    primaryCategory: "Commerce & Marketplaces",
    secondaryTags: ["Healthcare", "Pharmaceutical Supply", "Cold-Chain Logistics", "In Development"],
    status: "In Development",
    ownershipRelationship: "Braxvio Core Platform",
    publicUrl: "https://pharmora.co",
    isVerified: true,
    isPublished: true,
    publicationApproved: true,
    lastReviewedAt: "2026-10-15",
    problemSolved: "Over 60% of independent pharmacies in sub-Saharan Africa lack real-time digital inventory systems, leading to stockouts, counterfeit drug penetration, and critical delays for chronic patients.",
    productPurpose: "Protecting patient safety, reducing prescription search latency from hours to seconds, and expanding retail pharmacy distribution across 42+ partner dispensaries with zero counterfeit risk.",
    keyCapabilities: [
      "Real-Time Pharmacy Inventory Network: Live query engine across licensed neighborhood pharmacies to locate specialized medicines without physical store visits",
      "Prescription Digital Verification: Secure prescription upload reviewed and digitally signed by licensed pharmacists before fulfillment",
      "Cold-Chain Delivery Tracking: Real-time temperature logging (2°C – 8°C) for insulin, vaccines, and specialized biologics in insulated carrier boxes",
      "Chronic Refill Automation: Predictive reminders and automated recurring refill routing for hypertension, diabetes, and long-term care medications"
    ],
    architectureNotes: [
      "Built with TypeScript, GraphQL, FastAPI, PostgreSQL, TimescaleDB, and an Encrypted FHIR Layer",
      "Field-level encryption for patient health records with strict regulatory audit logging and dispatch telemetry"
    ]
  },
  {
    id: "ecolift",
    slug: "ecolift",
    name: "EcoLift",
    tagline: "Smarter movement. Cleaner communities.",
    summary: "A digital logistics platform optimizing municipal and private waste collection, recycling incentives, and dynamic route orchestration for urban sanitation.",
    description: "EcoLift deploys dynamic route optimization, community on-demand pickup requests, and recyclable material credits to transform waste management into a predictable, modern civic utility.",
    primaryCategory: "Commerce & Marketplaces",
    secondaryTags: ["Sustainability", "Civic Logistics", "CleanTech", "In Development"],
    status: "In Development",
    ownershipRelationship: "Braxvio Core Platform",
    publicUrl: "https://ecolift.io",
    isVerified: true,
    isPublished: true,
    publicationApproved: true,
    lastReviewedAt: "2026-10-12",
    problemSolved: "Waste management companies run static, inefficient truck routes with high fuel overheads, zero visibility into actual bin volume, and no structured incentive for household waste segregation.",
    productPurpose: "Targeting a 35% reduction in municipal collection route transit times and accelerating household recyclable segregation with direct citizen incentives and smart bin telemetry.",
    keyCapabilities: [
      "Dynamic Route Optimization: Algorithmic haul dispatching that cuts transit idle fuel consumption by 34% by clustering GPS waypoints based on live bin fill-levels",
      "On-Demand Bulky Waste Scheduling: Citizens schedule pickup for e-waste, furniture, and large scrap with transparent municipal fee tracking",
      "Circular Economy Tokenization: Weighed post-consumer sorted plastics trigger automated micro-cashback directly to residents' Mobile Money wallets",
      "Municipal Telemetry Dashboard: Real-time fleet GPS, weekly tonnage tracking (28+ tons), and auditable ESG carbon diversion certificates"
    ],
    architectureNotes: [
      "Built with Go, React, OpenStreetMap / Valhalla, MQTT IoT Gateway, ClickHouse, and PostGIS",
      "Sensor-driven threshold alerts dispatch haulers before public commercial bins overflow"
    ]
  },
  {
    id: "devpay-africa",
    slug: "devpay-africa",
    name: "DevPay Africa",
    tagline: "African talent. Global opportunity.",
    summary: "A unified financial and contract infrastructure enabling African software engineers, designers, and creators to invoice international clients, hold multi-currency earnings, and get paid with zero friction.",
    description: "DevPay Africa delivers compliant international invoicing, milestone-locked smart escrow, multi-currency virtual accounts (USD, GBP, EUR, GHS, NGN, KES), and instant payout into local mobile money or domestic bank accounts with 0% predatory FX spreads.",
    primaryCategory: "Enterprise Software",
    secondaryTags: ["Fintech", "Digital Economy", "Developer Rails", "Private Beta"],
    status: "Private Beta",
    ownershipRelationship: "Braxvio Core Platform",
    publicUrl: "https://devpay.africa",
    isVerified: true,
    isPublished: true,
    publicationApproved: true,
    lastReviewedAt: "2026-10-10",
    problemSolved: "International wire transfers take 5–10 business days, lose up to 12% in hidden FX conversion spreads, and foreign clients frequently hesitate due to compliance and local invoicing fears.",
    productPurpose: "Empowering African technological professionals to compete globally without arbitrary banking, settlement, or geographic boundaries.",
    keyCapabilities: [
      "Global Multi-Currency Receiving Accounts: Direct virtual accounts in the US, UK, and EU allowing international clients to pay via standard ACH/SEPA transfers",
      "Milestone Escrow & Contract Protection: Automated contract generation with escrow milestones that release funds upon verified pull-request or deliverable approval",
      "Instant Local Settlement: Immediate liquidity (< 60 sec settlement speed) into Mobile Money (MTN MoMo, Telecel, M-Pesa) and commercial banks across 14 African nations",
      "Tax & Compliance Automation: Automated W-8BEN form handling, localized invoices, and annual income summaries for sovereign tax filings"
    ],
    architectureNotes: [
      "Built with Next.js, Rust Engine, PostgreSQL, Stripe / Banking APIs, and Double-entry Ledger Engine",
      "Sub-second ledger validation using double-entry immutable accounting schemas compliant with ISO 20022"
    ]
  },
  {
    id: "pellmia",
    slug: "pellmia",
    name: "Pellmia",
    tagline: "High-throughput telecom routing, 2FA, and billing infrastructure",
    summary: "Reliable programmable communications and carrier verification pipelines.",
    description: "Pellmia operates resilient telecom routing gateways that ensure sub-second OTP verification delivery, multi-channel failover across cellular carriers, and unified micropayment collection for digital businesses.",
    primaryCategory: "Digital Infrastructure",
    secondaryTags: ["Telecom", "Identity Verification", "SMS Gateways"],
    status: "Private Beta",
    ownershipRelationship: "Braxvio Incubated Infrastructure",
    publicUrl: "https://pellmia.com",
    isVerified: true,
    isPublished: true,
    publicationApproved: true,
    lastReviewedAt: "2026-10-12",
    problemSolved: "Standard global SMS aggregators experience high packet loss, delayed OTP deliveries, and poor carrier-level SLA transparency in African telecom markets.",
    productPurpose: "To provide enterprise-grade telecom APIs with dynamic carrier routing, real-time deliverability telemetry, and local billing integration.",
    keyCapabilities: [
      "Dynamic carrier latency routing to bypass congested telco SS7 links",
      "Sub-2-second one-time passcode (OTP) delivery guarantee",
      "Integrated carrier billing and USSD session orchestration APIs",
      "Zero-knowledge encrypted phone number masking and compliance audit trails"
    ],
    architectureNotes: [
      "High-concurrency Rust and Go gateway nodes deployed regionally",
      "Direct SS7/SMPP carrier peering with millisecond health-check probes"
    ]
  }
];

/**
 * Publication Safeguards Layer
 * Strictly returns only verified, published, and publication-approved ventures.
 */
export function getPublishedVentures(): Venture[] {
  return VENTURES_DATA.filter(
    (v) => v.isVerified && v.isPublished && v.publicationApproved
  );
}

export function getVentureBySlug(slug: string): Venture | undefined {
  const venture = VENTURES_DATA.find((v) => v.slug === slug);
  if (!venture || !venture.isVerified || !venture.isPublished || !venture.publicationApproved) {
    return undefined;
  }
  return venture;
}

export function getVenturesByCategory(category: VentureCategory | "All"): Venture[] {
  const published = getPublishedVentures();
  if (category === "All") return published;
  return published.filter((v) => v.primaryCategory === category);
}

export const VENTURE_CATEGORIES: (VentureCategory | "All")[] = [
  "All",
  "Commerce & Marketplaces",
  "Enterprise Software",
  "Digital Infrastructure",
  "Consumer Platforms",
  "Emerging Technology"
];
