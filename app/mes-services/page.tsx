import PageContainer from "@/components/layout/page-container";
import CardDescriptionServices from "@/components/shared/card-description-services";
import Section from "@/components/shared/section";
import { prisma } from "@/lib/connect";
// import { detailServices } from "@/data/detail-service";

// il faut remplacer detailService par service

import ContactSection from "@/components/pages/contact/contact-section";
import PlusAddService from "@/components/shared/plus-add-service";
import { auth } from "@/lib/auth";
import { JsonValue } from "@prisma/client/runtime/library";
import { headers } from "next/headers";

type Service = {
  id: number;
  title: string;
  resume: string;
  description: string;
  imageUrl: string;
  alt: string;
  synthese: JsonValue;
};

export default async function MesServices() {
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });
  const detailServices: Service[] = await prisma.services.findMany();
  return (
    <PageContainer>
      <Section
        title="Une Approche Stratégique du Cycle de Vie Produit"
        bgColor="bg-slate-900"
        titleColor="text-white"
        description="Je vous accompagne pour élaborer une stratégie Produit et Go-to-Market complète et structurée, garantissant un alignement parfait de votre offre avec le marché, étape par étape."
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
              synthese={detailService.synthese as string[] | null}
            />
          ))}
          {session && (
            <div className="mt-4">
              <PlusAddService />
            </div>
          )}
        </div>
      </Section>
      <ContactSection />
    </PageContainer>
  );
}
