"use client";
import { ContactForm } from "@/components/contactForm";
import PageContainer from "@/components/page-container";
import Section from "@/components/section";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.zcal.co/embed/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  });
  return (
    <PageContainer>
      <Section
        title="Prenons contact"
        titleColor="text-white"
        description="Discutons de vos objectifs et trouvons ensemble la meilleure stratégie pour votre croissance"
        descriptionColor="text-slate-300"
        bgColor="bg-slate-900"
      ></Section>
      <Section title="Discutons de votre projet" bgColor="bg-slate-100">
        <ContactForm />

        <div className="zcal-inline-widget mt-8">
          <a href="https://zcal.co/i/tDx2iy-O">
            30 Minute Meeting - Schedule a meeting
          </a>
        </div>
      </Section>
    </PageContainer>
  );
}
