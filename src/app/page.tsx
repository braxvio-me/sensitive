import React from "react";
import { HeroShowcase } from "@/components/home/HeroShowcase";
import { CommandPalettePreview } from "@/components/home/CommandPalettePreview";
import { VenturePortfolioPreview } from "@/components/home/VenturePortfolioPreview";
import { CompanyIdentitySection } from "@/components/home/CompanyIdentitySection";
import { TrustArchitectureGrid } from "@/components/home/TrustArchitectureGrid";
import { FaqSection } from "@/components/home/FaqSection";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroShowcase />
      <CommandPalettePreview />
      <VenturePortfolioPreview />
      <CompanyIdentitySection />
      <TrustArchitectureGrid />
      <FaqSection />
      <CtaBanner />
    </div>
  );
}
