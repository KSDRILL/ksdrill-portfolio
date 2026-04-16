import PageContainer from "@/components/layout/PageContainer";
import HomeHero from "@/components/features/HomeHero";
import HomeTrustStrip from "@/components/features/HomeTrustStrip";
import WhoIAmTeaser from "@/components/features/WhoIAmTeaser";
import WorkExperienceTeaser from "@/components/features/WorkExperienceTeaser";
import EducationTeaser from "@/components/features/EducationTeaser";
import FeaturedFlagshipSection from "@/components/features/FeaturedFlagshipSection";
import WhatIBuildTeaser from "@/components/features/WhatIBuildTeaser";
import CurrentFocusSection from "@/components/features/CurrentFocusSection";
import LiveWorkSection from "@/components/features/LiveWorkSection";
import HomeTeasers from "@/components/features/HomeTeasers";
import ContactSection from "@/components/features/ContactSection";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeTrustStrip />
      <PageContainer className="py-16 md:py-24">
        <div className="obs-grain">
          <div className="obs-ambient" />
          <div className="relative z-[1] flex flex-col gap-20 md:gap-28">
            <WhoIAmTeaser />
            <WorkExperienceTeaser />
            <EducationTeaser />
            <FeaturedFlagshipSection />
            <WhatIBuildTeaser />
            <CurrentFocusSection />
            <LiveWorkSection />
            <HomeTeasers />
            <ContactSection />
          </div>
        </div>
      </PageContainer>
    </>
  );
}
