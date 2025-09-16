import CardDescriptionServices from "@/components/card-description-services";
import PageContainer from "@/components/page-container";
import Section from "@/components/section";
import { detailServices } from "@/data/detail-service";

import ContactSection from "@/components/contact-section";

export default function MesServices() {
  return (
    <PageContainer>
      <Section
        title="Une approche stratégique complète"
        bgColor="bg-slate-900"
        titleColor="text-white"
        description="Je vous aide à construire une stratégie marketing solide, étape par étape."
        descriptionColor="text-slate-300"
      ></Section>
      <Section
        title="Mon expertise au service de votre croissance"
        bgColor="bg-slate-100"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {detailServices.map((detailService) => (
            <CardDescriptionServices
              key={detailService.id}
              title={detailService.title}
              description={detailService.description}
              imageUrl={detailService.imageUrl}
              alt={detailService.alt}
              synthese={detailService.synthese}
            />
          ))}
        </div>
      </Section>
      <ContactSection />
    </PageContainer>
  );
}
