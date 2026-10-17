import { Venture, VentureCategory } from "@/types/venture";

export const VENTURES_DATA: Venture[] = [
  {
    id: "pharmora",
    slug: "pharmora",
    name: "Pharmora",
    tagline: "Pharmacy inventory management & medication distribution network",
    summary: "Integrated pharmaceutical supply chain and dispensary intelligence ecosystem.",
    description: "Pharmora unifies pharmacy inventory tracking, verified prescription routing, and distributor fulfillment into a resilient clinical network, reducing stockouts and counterfeit pharmaceutical risks across emerging markets.",
    primaryCategory: "Commerce & Marketplaces",
    secondaryTags: ["Healthcare Logistics", "Supply Chain", "Dispensary Ops"],
    status: "Live",
    ownershipRelationship: "Braxvio Incubated Venture",
    publicUrl: "https://pharmora.co",
    isVerified: true,
    isPublished: true,
    publicationApproved: true,
    lastReviewedAt: "2026-10-15",
    problemSolved: "Fragmented pharmaceutical distribution leads to frequent essential medicine shortages, opaque pricing, and the infiltration of counterfeit drugs in primary care clinics.",
    productPurpose: "To create an auditable, real-time distribution and point-of-dispense operating system that guarantees authenticity and timely replenishment for community healthcare providers.",
    keyCapabilities: [
      "Real-time batch-level inventory tracking and temperature-log compliance",
      "Direct distributor EDI integrations for automated purchase-order routing",
      "Point-of-dispense barcode verification for authentic medication assurance",
      "Offline-first dispensary POS supporting intermittent connectivity"
    ],
    architectureNotes: [
      "Distributed event-driven architecture with PostgreSQL multi-tenant isolation",
      "End-to-end cryptographic verification for supply-chain custody tracking"
    ]
  },
  {
    id: "devpay-africa",
    slug: "devpay-africa",
    name: "DevPay Africa",
    tagline: "Cross-border compensation and contract compliance for African engineers",
    summary: "Institutional payout rails and compliance infrastructure for global remote engineering teams.",
    description: "DevPay Africa provides programmable cross-border payroll, multi-currency escrow, automated tax withholding, and IP assignment contracts tailored for African software talent and global engineering organizations.",
    primaryCategory: "Enterprise Software",
    secondaryTags: ["Fintech", "Developer Tools", "Cross-Border Payouts"],
    status: "Private Beta",
    ownershipRelationship: "Braxvio Core Venture",
    publicUrl: "https://devpay.africa",
    isVerified: true,
    isPublished: true,
    publicationApproved: true,
    lastReviewedAt: "2026-10-10",
    problemSolved: "Global tech companies struggle with local banking rails, high FX conversion fees, and complex cross-border employment compliance when hiring elite African developers.",
    productPurpose: "To make compensating African technology talent as frictionless, legally compliant, and cost-effective as direct domestic ACH transfers.",
    keyCapabilities: [
      "Local clearinghouse payouts directly into local bank accounts & mobile money",
      "Instant USD/EUR/GBP treasury settlement with transparent wholesale FX rates",
      "Automated IP assignment and regional contractor compliance verification",
      "Developer dashboard with milestone tracking, invoicing, and tax documentation"
    ],
    architectureNotes: [
      "Built on ISO 20022 messaging standards with banking partner API fallbacks",
      "Sub-second ledger validation using double-entry immutable accounting schemas"
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
    ownershipRelationship: "Braxvio Core Venture",
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
  },
  {
    id: "ecolift",
    slug: "ecolift",
    name: "EcoLift",
    tagline: "Commercial waste logistics & certified recycling exchange",
    summary: "Algorithmic waste recovery routing and verified circular economy marketplace.",
    description: "EcoLift connects commercial properties, industrial facilities, and municipal waste generators directly with verified processing plants, providing automated dispatch, weighbridge verification, and certified environmental metrics.",
    primaryCategory: "Commerce & Marketplaces",
    secondaryTags: ["CleanTech", "Logistics", "Sustainability"],
    status: "In Development",
    ownershipRelationship: "Braxvio Co-developed Venture",
    publicUrl: "https://ecolift.io",
    isVerified: true,
    isPublished: true,
    publicationApproved: true,
    lastReviewedAt: "2026-10-08",
    problemSolved: "Commercial waste disposal is dominated by informal, unregulated hauling resulting in illegal dumping and less than 12% recyclable material recovery.",
    productPurpose: "To institutionalize commercial waste recovery through transparent digital dispatch, verified weighbridge tracking, and auditable ESG recycling documentation.",
    keyCapabilities: [
      "Automated fleet dispatch and route density optimization for waste haulers",
      "Digital weighbridge certification via IoT load-cell sensors",
      "Enterprise ESG carbon and plastic diversion audit certificates",
      "Spot marketplace for sorted post-industrial polymer and cardboard bales"
    ],
    architectureNotes: [
      "Spatial routing engine powered by PostGIS and OpenStreetMap transit models",
      "Immutable chain-of-custody tracking from waste origin to processor facility"
    ]
  },
  {
    id: "kampus",
    slug: "kampus",
    name: "Kampus",
    tagline: "Higher education administrative services & student living marketplace",
    summary: "Campus life orchestration, verified student housing, and academic services platform.",
    description: "Kampus modernizes university life across African tertiary institutions by consolidating verified off-campus accommodation, course materials exchange, identity credentials, and campus commerce into a secure mobile-first platform.",
    primaryCategory: "Consumer Platforms",
    secondaryTags: ["EdTech", "Campus Commerce", "Student Housing"],
    status: "In Development",
    ownershipRelationship: "Braxvio Incubated Venture",
    publicUrl: "https://kampus.app",
    isVerified: true,
    isPublished: true,
    publicationApproved: true,
    lastReviewedAt: "2026-10-05",
    problemSolved: "Students face rampant rental scams, predatory tenancy agreements, and fragmented campus services with zero consumer protection.",
    productPurpose: "To empower university students with inspected student accommodation, verified landlord escrows, and a trusted peer-to-peer campus economy.",
    keyCapabilities: [
      "Physical inspection audit badges and 3D walkthroughs of verified campus rentals",
      "Escrow-protected tenancy deposit handling with automated landlord dispute mediation",
      "Peer-to-peer verified textbook and electronics exchange",
      "Student discounts and subsidized campus transit passes"
    ],
    architectureNotes: [
      "Next.js progressive web app optimized for low-bandwidth cellular connections",
      "Automated matriculation verification through university registrar integrations"
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
