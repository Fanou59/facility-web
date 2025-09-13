import Image from "next/image";
import React from "react";

export default function ProfilSection() {
  return (
    <section className="container px-6 flex flex-col md:flex-row items-center justify-center gap-12 py-16 md:py-24">
      <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden flex-shrink-0">
        <Image
          className="w-full h-full object-cover"
          src="/assets/images/Profil-steph.png"
          height={400}
          width={400}
          alt="photo de stéphane guery"
        />
      </div>
      <div className="text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
          Stéphane Guery
        </h2>
        <h3 className="mt-2 text-xl md:text-2xl text-orange-500 font-semibold">
          Consultant en stratégie marketing
        </h3>
        <p className="mt-4 text-gray-600 max-w-2xl">
          En tant que professionnel du marketing et de la communication, j'ai
          dirigé des équipes et élaboré des stratégies qui ont généré des
          résultats significatifs. Mon parcours de 10 ans m'a permis d'acquérir
          une compréhension approfondie du marketing stratégique et des
          compétences avancées en communication.
        </p>
      </div>
    </section>
  );
}
