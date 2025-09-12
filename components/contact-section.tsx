import React from "react";
import { Button } from "./ui/button";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-slate-900 text-white py-16 md:py-24 px-6"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">
          Prêt à accélérer votre croissance ?
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto">
          Contactez-moi pour discuter de votre projet et élaborer une stratégie
          sur mesure.
        </p>
        <a
          href="mailto:contact@facility-web.com"
          className="mt-8 inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          Me contacter
        </a>
      </div>
    </section>
  );
}
