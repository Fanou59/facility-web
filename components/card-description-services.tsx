import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Image from "next/image";
import SyntheseService from "./synthese-service";

type CardDescriptionServicesProps = {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  synthese: Record<string, string>;
};
export default function CardDescriptionServices({
  title,
  description,
  imageUrl,
  alt,
  synthese,
}: CardDescriptionServicesProps) {
  return (
    <Card className="bg-white py-8 px-2 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <CardHeader className="flex flex-col items-center justify-center gap-6">
        <Image height={50} width={50} src={imageUrl} alt={alt} />
        <CardTitle className="text-xl font-bold text-slate-900 text-center">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
        <div className="flex justify-center">
          <SyntheseService synthese={synthese} />
        </div>
      </CardContent>
    </Card>
  );
}
