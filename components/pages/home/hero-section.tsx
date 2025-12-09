import ContactButton from "@/components/ui/buttons/contact-button";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-5  bg-slate-900 text-white py-20 md:py-32 justify-center text-center px-6">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
        La stratégie produit au service d'une croissance mesurable.
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
        Alignez votre offre sur les besoins du marché pour maximiser son impact.
      </p>

      <ContactButton>Découvrir mon approche</ContactButton>
    </div>
  );
}
