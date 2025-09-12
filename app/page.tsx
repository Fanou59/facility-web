import ContactSection from "@/components/contact-section";
import HeroSection from "@/components/hero-section";
import IntroSection from "@/components/intro-section";
import PageContainer from "@/components/page-container";
import ServicesSection from "@/components/services-section";

export default function Home() {
  return (
    <PageContainer>
      <HeroSection />
      <IntroSection />
      <ServicesSection />
      <ContactSection />
    </PageContainer>
  );
}
