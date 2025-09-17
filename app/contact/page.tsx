"use client";
import { ContactForm } from "@/components/contactForm";
import PageContainer from "@/components/page-container";
import Section from "@/components/section";

export default function Contact() {
  return (
    <PageContainer>
      <Section
        title="Prêt à accélérer votre croissance ?"
        titleColor="text-white"
        description="Discutons de vos objectifs et trouvons ensemble la meilleure stratégie pour votre croissance"
        descriptionColor="text-slate-300"
        bgColor="bg-slate-900"
      ></Section>
      <Section title="Parlez-moi de votre projet" bgColor="bg-slate-100">
        <ContactForm />
      </Section>
    </PageContainer>
  );
}
