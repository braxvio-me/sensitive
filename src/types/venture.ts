export type VentureCategory =
  | "Consumer Platforms"
  | "Enterprise Software"
  | "Digital Infrastructure"
  | "Commerce & Marketplaces"
  | "Emerging Technology";

export type VentureStatus =
  | "Live"
  | "Private Beta"
  | "In Development"
  | "In Research"
  | "Planned";

export interface Venture {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  description: string;
  primaryCategory: VentureCategory;
  secondaryTags: string[];
  status: VentureStatus;
  ownershipRelationship: string;
  publicUrl?: string;
  isVerified: boolean;
  isPublished: boolean;
  publicationApproved: boolean;
  lastReviewedAt: string;
  problemSolved: string;
  productPurpose: string;
  keyCapabilities: string[];
  architectureNotes?: string[];
}
