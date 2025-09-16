import PageContainer from "@/components/page-container";
import ProfilSection from "@/components/profil-section";
import Section from "@/components/section";
import { TimelineLayout } from "@/components/timeline-layout";
import { Badge } from "@/components/ui/badge";
import React from "react";

export default function QuiSuisJe() {
  return (
    <PageContainer>
      <ProfilSection />
      <Section title="Mon parcours" bgColor="bg-gray-100">
        <TimelineLayout />
      </Section>
      <Section title="Mon expertise">
        <div className="flex flex-wrap justify-center gap-4">
          <Badge>Stratégie marketing</Badge>
          <Badge>Stratégie de contenu</Badge>
          <Badge>Création de valeur</Badge>
          <Badge>E-réputation</Badge>
          <Badge>Communication digitale</Badge>
          <Badge>Développement web</Badge>
        </div>
      </Section>
    </PageContainer>
  );
}
