import React from "react";
import CardServices from "./card-services";

export default function ServicesSection() {
  return (
    <div className="bg-slate-100 py-16 md:py-24 px-6">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Nos services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Nous vous proposons une approche complète pour maîtriser votre marché.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardServices
            title="Définition de l'offre"
            content="Identifiez ce qui rend votre produit unique et comment il se positionne face à la concurrence"
            imageUrl="/assets/images/definir-offre.png"
            alt="icône représentant un produit en dessous d'une loupe"
          />
          <CardServices
            title="Création de valeur"
            content="Construisez une image de marque forte et communiquez la valeur perçue de votre offre"
            imageUrl="/assets/images/creation-valeur.png"
            alt="icône représentant un diamant au creux d'une main"
          />
        </div>
      </div>
    </div>
  );
}
