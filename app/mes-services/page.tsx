import CardDescriptionServices from "@/components/card-description-services";
import PageContainer from "@/components/page-container";
import Section from "@/components/section";
import { prisma } from "@/lib/connect";
// import { detailServices } from "@/data/detail-service";

// il faut remplacer detailService par service

import ContactSection from "@/components/contact-section";
import PlusAddService from "@/components/plus-add-service";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

type Service = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  synthese: string[] | null;
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
