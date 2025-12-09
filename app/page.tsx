import PageContainer from "@/components/layout/page-container";
import ContactSection from "@/components/pages/contact/contact-section";
import HeroSection from "@/components/pages/home/hero-section";
import IntroSection from "@/components/pages/home/intro-section";
import ServicesSection from "@/components/pages/home/services-section";

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
