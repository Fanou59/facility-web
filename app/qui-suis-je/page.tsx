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
      <Section
        title="Découvrer l'intégralité de mon parcours"
        bgColor="bg-slate-900"
        titleColor="text-white"
        description="Pour en savoir plus sur mon expérience, mes réalisations et mes recommandations."
        descriptionColor="text-slate-300"
      >
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/stephaneguery/"
            target="_blank"
            className="mt-8 inline-flex items-center px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.765s.784-1.764 1.75-1.764c.967 0 1.75.79 1.75 1.764s-.783 1.765-1.75 1.765zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.764 7 2.45v6.785z"></path>
            </svg>
            Voir mon profil LinkedIn
          </a>
        </div>
      </Section>
    </PageContainer>
  );
}
