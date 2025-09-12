import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";

export default function CardServices() {
  return (
    <Card className="shadow-lg transform hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle>Définition d'Offre</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">
          Identifiez ce qui rend votre produit unique et comment il se
          positionne face à la concurrence.
        </p>
      </CardContent>
      <CardFooter className="justify-end">
        <a
          href="mailto:contact@facility-web.com"
          className="mt-8 inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          En savoir plus
        </a>
      </CardFooter>
    </Card>
  );
}
