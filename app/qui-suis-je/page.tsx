import PageContainer from "@/components/page-container";
import ProfilSection from "@/components/profil-section";
import Section from "@/components/section";
import { TimelineLayout } from "@/components/timeline-layout";
import React from "react";

export default function QuiSuisJe() {
  return (
    <PageContainer>
      <ProfilSection />
      <Section title="Mon parcours" bgColor="bg-gray-100">
        <TimelineLayout />
      </Section>
    </PageContainer>
  );
}
