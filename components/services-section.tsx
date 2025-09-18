import { prisma } from "@/lib/connect";
import CardServices from "./card-services";
// import { services } from "@/data/services";
import Section from "./section";

export default async function ServicesSection() {
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
            description={service.description}
            imageUrl={service.imageUrl}
            alt={service.alt}
          />
        ))}
      </div>
    </Section>
  );
}
