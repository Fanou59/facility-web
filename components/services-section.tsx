import { auth } from "@/lib/auth";
import { prisma } from "@/lib/connect";
import { headers } from "next/headers";
import CardServices from "./card-services";
import PlusAddService from "./plus-add-service";
import Section from "./section";

export default async function ServicesSection() {
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });
  const services = await prisma.services.findMany();

  return (
    <Section
      title="Nos services"
      bgColor="bg-slate-100"
      description="Nous vous proposons une approche complète pour maîtriser votre marché."
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
