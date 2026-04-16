import PageContainer from "@/components/layout/PageContainer";
import HomeHero from "@/components/features/HomeHero";
import HomeTrustStrip from "@/components/features/HomeTrustStrip";
import WhoIAmSection from "@/components/features/WhoIAmSection";
import WorkExperienceSection from "@/components/features/WorkExperienceSection";
import EducationSection from "@/components/features/EducationSection";
import CapabilitiesSection from "@/components/features/CapabilitiesSection";
import FeaturedFlagshipSection from "@/components/features/FeaturedFlagshipSection";
import WhatIBuildSection from "@/components/features/WhatIBuildSection";
import CurrentFocusSection from "@/components/features/CurrentFocusSection";
import LiveWorkSection from "@/components/features/LiveWorkSection";
import HomeNarrativeSection from "@/components/features/HomeNarrativeSection";
import HomeTeasers from "@/components/features/HomeTeasers";
import ContactSection from "@/components/features/ContactSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustStrip />
      <PageContainer className="md:py-24 lg:py-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 min-h-[560px] home-ambient-grid opacity-[0.78]"
          aria-hidden
        />
        <div className="relative z-[1] flex flex-col gap-20 md:gap-28 lg:gap-36">
          <WhoIAmSection />
          <WorkExperienceSection />
          <EducationSection />
          <CapabilitiesSection />
          <FeaturedFlagshipSection />
          <WhatIBuildSection />
          <CurrentFocusSection />
          <LiveWorkSection />
          <HomeNarrativeSection />
          <HomeTeasers />
          <ContactSection />
        </div>
      </PageContainer>
    </>
  );
}
