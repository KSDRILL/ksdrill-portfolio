import PageContainer from "@/components/layout/PageContainer";
import HomeHero from "@/components/features/HomeHero";
import HomeTrustStrip from "@/components/features/HomeTrustStrip";
import WhoIAmTeaser from "@/components/features/WhoIAmTeaser";
import FeaturedFlagshipSection from "@/components/features/FeaturedFlagshipSection";
import WhatIBuildTeaser from "@/components/features/WhatIBuildTeaser";
import HomeTeasers from "@/components/features/HomeTeasers";
import ContactSection from "@/components/features/ContactSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustStrip />
      <PageContainer className="md:py-20 lg:py-24">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 min-h-[480px] home-ambient-grid opacity-[0.78]"
          aria-hidden
        />
        <div className="relative z-[1] flex flex-col gap-16 md:gap-20 lg:gap-24">
          <WhoIAmTeaser />
          <FeaturedFlagshipSection />
          <WhatIBuildTeaser />
          <HomeTeasers />
          <ContactSection />
        </div>
      </PageContainer>
    </>
  );
}