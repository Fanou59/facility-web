import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "./ui/card";
import Link from "next/link";

type CardServicesProps = {
  title: string;
  content: string;
};

export default function CardServices({ title, content }: CardServicesProps) {
  return (
    <Card className="shadow-lg transform hover:scale-105 transition-transform duration-300">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{content}</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Link
          href="/mes-services"
          className="mt-8 inline-block px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          En savoir plus
        </Link>
      </CardFooter>
    </Card>
  );
}
