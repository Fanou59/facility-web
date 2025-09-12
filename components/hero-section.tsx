import React from "react";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-5  bg-slate-900 text-white py-20 md:py-32 justify-center text-center px-6">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
        La stratégie marketing au service d'une croissance durable.
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
        Transformez la valeur de votre offre en croissance concrète.
      </p>

      <a
        href="mailto:contact@facility-web.com"
        className="mt-8 inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
      >
        Découvrir mon approche
      </a>
    </div>
  );
}
