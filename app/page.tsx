import HeroSection from "@/components/hero-section";
import IntroSection from "@/components/intro-section";
import PageContainer from "@/components/page-container";

export default function Home() {
  return (
    <PageContainer>
      <HeroSection />
      <IntroSection />
    </PageContainer>
  );
}
