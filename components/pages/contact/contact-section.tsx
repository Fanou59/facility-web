import Section from "@/components/shared/section";
import ContactButton from "@/components/ui/buttons/contact-button";

export default function ContactSection() {
  return (
    <Section
      title="Prêt à accélérer votre croissance ?"
      bgColor="bg-slate-900"
      description="Contactez-moi pour discuter de votre projet et élaborer une stratégie sur mesure"
      titleColor="text-white"
      descriptionColor="text-slate-300"
    >
      <div className="flex justify-center">
        <ContactButton>Me contacter</ContactButton>
      </div>
    </Section>
  );
}
