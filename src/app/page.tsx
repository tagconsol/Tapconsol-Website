import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { WhatWeDoSection } from "@/components/landing/what-we-do-section";
import { PlatformSection } from "@/components/landing/platform-section";
import { SolutionsGrid } from "@/components/landing/solutions-grid";
import { CapabilityFlowSection } from "@/components/landing/capability-flow-section";
import { WhyChooseUsSection } from "@/components/landing/why-choose-us-section";
import { CtaSection } from "@/components/landing/cta-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhatWeDoSection />
        <PlatformSection />
        <SolutionsGrid />
        <CapabilityFlowSection />
        <WhyChooseUsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
