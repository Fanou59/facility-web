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
          <CardServices />
        </div>
      </div>
    </div>
  );
}
