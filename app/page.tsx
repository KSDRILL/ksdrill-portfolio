import PageContainer from "@/components/layout/PageContainer";
import HomeHero from "@/components/features/HomeHero";
import HomeTrustStrip from "@/components/features/HomeTrustStrip";
import AtAGlanceSection from "@/components/features/AtAGlanceSection";
import WhatIBuildSection from "@/components/features/WhatIBuildSection";
import CurrentFocusSection from "@/components/features/CurrentFocusSection";
import FeaturedFlagshipSection from "@/components/features/FeaturedFlagshipSection";
import LiveWorkSection from "@/components/features/LiveWorkSection";
import HomeNarrativeSection from "@/components/features/HomeNarrativeSection";
import ContactSection from "@/components/features/ContactSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustStrip />
      <PageContainer className="md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 min-h-[560px] home-ambient-grid opacity-[0.78]"
          aria-hidden
        />
        <div className="relative z-[1] flex flex-col gap-16 md:gap-20 lg:gap-24">
          <AtAGlanceSection />
          <WhatIBuildSection />
          <CurrentFocusSection />
          <FeaturedFlagshipSection />
          <LiveWorkSection />
          <HomeNarrativeSection />
          <ContactSection />
        </div>
      </PageContainer>
    </>
  );
}
