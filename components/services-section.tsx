import { auth } from "@/lib/auth";
import { prisma } from "@/lib/connect";
import { headers } from "next/headers";
import CardServices from "./card-services";
import PlusAddService from "./plus-add-service";
import Section from "./section";

type Service = {
  id: number;
  title: string;
  resume: string;
  imageUrl: string;
  alt: string;
};

export default async function ServicesSection() {
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });
  const services: Service[] = await prisma.services.findMany();

  return (
    <Section
      title="Mes services"
      bgColor="bg-slate-100"
      description="Je vous propose une approche complète pour maîtriser le cycle de vie de votre Produit sur le marché."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <CardServices
            key={service.id}
            title={service.title}
            resume={service.resume}
            imageUrl={service.imageUrl}
            alt={service.alt}
          />
        ))}
      </div>
      {session && (
        <div className="mt-4">
          <PlusAddService />
        </div>
      )}
    </Section>
  );
}
