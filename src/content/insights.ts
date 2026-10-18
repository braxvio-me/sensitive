export interface InsightArticle {
  slug: string;
  title: string;
  subtitle: string;
  category: "Perspective" | "Engineering" | "Economics";
  readTime: string;
  publishDate: string;
  author: {
    name: string;
    role: string;
    division: string;
    avatarInitials: string;
  };
  summary: string;
  quote?: string;
  content: {
    heading?: string;
    paragraphs: string[];
    callout?: string;
  }[];
  relatedSlugs: string[];
}

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    slug: "why-we-build-systems-not-apps",
    title: "Why Braxvio Builds Systems, Not Disposable Apps",
    subtitle: "The consumer internet is crowded with standalone applications that solve symptoms while ignoring root infrastructural failures. Here is why we treat everyday problems as interconnected systems.",
    category: "Perspective",
    readTime: "6 min read",
    publishDate: "February 2025",
    author: {
      name: "Braxvio Systems Architecture",
      role: "Platform Engineering Directorate",
      division: "Core Systems Group",
      avatarInitials: "SA",
    },
    summary:
      "In emerging markets, standalone point solutions collapse because upstream infrastructure is incomplete. Braxvio engineers interconnected operational primitives rather than single-purpose mobile apps.",
    quote:
      "At Braxvio, we arrived at an uncompromising conclusion: we do not build isolated apps. We build systems.",
    content: [
      {
        paragraphs: [
          "In the consumer technology landscape of the past decade, the dominant playbook was simple: isolate one specific interaction, build a polished client app around it, spend venture capital to subsidize customer acquisition, and hope network effects solidify before unit economics catch up.",
          "In emerging markets—and across Africa in particular—this model repeatedly breaks down. The reason is structural: you cannot simply build a ride-hailing app if road addressing is non-existent; you cannot simply build an online pharmacy if pharmaceutical supply authenticity is compromised upstream; you cannot build a sustainable freelance marketplace if cross-border banking rails systematically reject domestic debit cards.",
        ],
        callout:
          "Point-solution apps assume infrastructure exists. Systems engineering builds the infrastructure so applications can survive.",
      },
      {
        heading: "The Anatomy of Interconnected Primitives",
        paragraphs: [
          "A system looks at the complete lifecycle of human activity. When we engineered Kampus, we did not create another student forum. We looked at where a university student lives, how they pay for utilities, how they find safe accommodation without extortion, and how their verified student identity can anchor micro-commerce.",
          "When products share common architectural primitives—cryptographic identity, resilient offline-first data sync, local currency settlement rails, and unified design tokens—each new product makes every previous product stronger.",
          "This shared substrate dramatically lowers the marginal cost of building each subsequent venture. A payment routing pipeline developed for DevPay Africa immediately empowers student merchants on Kampus; a cold-chain batch tracking ledger built for Pharmora can be adapted to trace recycled materials on EcoLift.",
        ],
      },
      {
        heading: "Durability Over Subsidized Growth",
        paragraphs: [
          "Venture capital often rewards vanity metrics—downloads, unverified signups, and subsidized transaction volumes. Systems engineering rewards durability: operational uptime, ledger accuracy, low customer acquisition costs driven by intrinsic utility, and sustained gross margins.",
          "By solving root-cause friction rather than surface symptoms, we build technology that endures long after hype cycles dissipate. That is our architectural doctrine.",
        ],
      },
    ],
    relatedSlugs: ["engineering-for-the-real-world", "the-future-of-african-digital-labor"],
  },
  {
    slug: "engineering-for-the-real-world",
    title: "Engineering for Sub-Saharan Network Realities",
    subtitle: "Designing high-performance web and mobile platforms that maintain sub-second responsiveness across volatile 3G/4G cellular networks and low-memory devices.",
    category: "Engineering",
    readTime: "8 min read",
    publishDate: "January 2025",
    author: {
      name: "Braxvio Engineering Group",
      role: "Distributed Systems & Mobile Infrastructure",
      division: "Platform & Infrastructure",
      avatarInitials: "EG",
    },
    summary:
      "Most software architectures are tested on gigabit fiber connections. In Sub-Saharan markets, systems must thrive amidst cell congestion, latency spikes, and low-memory devices.",
    quote:
      "Our engineering tenets mandate extreme bundle discipline: strict server component boundaries, zero unnecessary runtime dependencies, and aggressive edge-caching.",
    content: [
      {
        paragraphs: [
          "Most software architectures are unconsciously tested on gigabit fiber connections and the latest high-end smartphones in North America or Western Europe. In our target operational environments, the reality is starkly different.",
          "A user walking across a university campus in Kumasi or checking dispensary inventory in an open market in Accra encounters sudden cell tower congestion, 250ms latency spikes, and high packet drop rates. If your frontend bundle requires 4MB of uncompressed JavaScript before first paint, you have failed before the user even begins.",
        ],
      },
      {
        heading: "Tenets of Low-Bandwidth Architecture",
        paragraphs: [
          "To guarantee accessibility across every economic stratum, our engineering tenets enforce strict performance constraints:",
          "1. Zero Unnecessary Client Dependencies: We rely on native browser capabilities and server-rendered components. JavaScript is only downloaded when interactive state synchronization is strictly necessary.",
          "2. Progressive Vector Rendering: Instead of heavyweight raster imagery, our interface systems leverage mathematical SVG paths and compact CSS tokens that render instantly even on 2G edge networks.",
          "3. Optimistic Local Sync with CRDTs: When a pharmacist logs an inventory transaction on Pharmora or an engineer accepts an escrow contract on DevPay, the write occurs locally in microseconds. State reconciliation happens asynchronously using conflict-free idempotent retry loops when connectivity stabilizes.",
        ],
        callout:
          "Offline-first is not a fallback state; in emerging markets, offline-first is the primary operating condition.",
      },
      {
        heading: "Battery and Thermal Footprint",
        paragraphs: [
          "Budget smartphones frequently throttle CPU frequencies to manage thermal limits under West African ambient temperatures. Heavy client-side JavaScript execution not only freezes UI threads—it drains battery life in regions where reliable grid power may be intermittent.",
          "Engineering for the real world means respecting the physical constraints of the device in the user's hand. High performance is not a luxury feature; it is an accessibility requirement.",
        ],
      },
    ],
    relatedSlugs: ["why-we-build-systems-not-apps", "the-future-of-african-digital-labor"],
  },
  {
    slug: "the-future-of-african-digital-labor",
    title: "The Geography of Code: Unlocking Africa’s Engineering Capital",
    subtitle: "Africa possesses the youngest and fastest-growing technical population on earth. The bottleneck has never been talent; it has always been structural settlement and financial sovereignty.",
    category: "Economics",
    readTime: "5 min read",
    publishDate: "December 2024",
    author: {
      name: "Braxvio Economic Research",
      role: "Monetary Rails & Macro Strategy",
      division: "Digital Work Practice",
      avatarInitials: "ER",
    },
    summary:
      "Code written in Accra compiles to the exact same bytecode as code written in San Francisco. Dismantling cross-border settlement barriers is the key to unlocking Africa's engineering economy.",
    quote:
      "With DevPay Africa, our objective is simple: make hiring an African engineer as frictionless, compliant, and instantaneous as hiring someone across the street.",
    content: [
      {
        paragraphs: [
          "Software is one of the few global industries where intellectual output is truly borderless. A pull request written in Accra, Nairobi, or Lagos compiles to the exact same bytecode as one written in San Francisco, Berlin, or London.",
          "With a median age of 19 and rapidly expanding technical universities, Africa possesses the youngest, most ambitious developer base on the planet. Yet for years, African software engineers faced an invisible wall:",
          "Foreign employers worried about tax compliance and contractual enforceability. International SWIFT bank transfers took up to 10 business days and swallowed 7% to 12% in correspondent banking fees and predatory currency conversions. Local debit cards were frequently blocked by global developer tooling platforms.",
        ],
      },
      {
        heading: "Dismantling Geographic Financial Friction",
        paragraphs: [
          "The solution requires bridging traditional international treasury systems with local real-time mobile money and banking infrastructure. When international firms can fund payroll in USD or EUR via compliant smart escrow, and local engineers can withdraw their earnings instantly into MTN Mobile Money, Telecel Cash, or local commercial accounts in cedis or naira without middlemen, geographic disadvantage evaporates.",
          "This is the structural thesis behind DevPay Africa. We do not just build payment tools; we build sovereign financial rails that allow African intellect to trade globally at its true market value.",
        ],
        callout:
          "Talent is evenly distributed; financial infrastructure is not. When you fix the infrastructure, the talent compounds.",
      },
      {
        heading: "The Next Decade of Tech Sovereignty",
        paragraphs: [
          "As remote distributed teams become the permanent global baseline, African developers are transitioning from contract freelancers to founders and technical directors. By establishing domestic venture infrastructure in Accra, Braxvio ensures that high-value engineering equity and intellectual property remain anchored in Africa.",
        ],
      },
    ],
    relatedSlugs: ["why-we-build-systems-not-apps", "engineering-for-the-real-world"],
  },
];
