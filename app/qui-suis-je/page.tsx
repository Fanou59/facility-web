import CvSection from "@/components/cv-section";
import PageContainer from "@/components/page-container";
import ProfilSection from "@/components/profil-section";
import React from "react";

export default function QuiSuisJe() {
  return (
    <PageContainer>
      <ProfilSection />
      <CvSection />
    </PageContainer>
  );
}
