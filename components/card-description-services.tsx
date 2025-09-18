import Image from "next/image";
import SyntheseService from "./synthese-service";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type CardDescriptionServicesProps = {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
  synthese: string[] | null;
};
export default function CardDescriptionServices({
  title,
  description,
  imageUrl,
  alt,
  synthese,
}: CardDescriptionServicesProps) {
  return (
    <Card className="py-8 px-2 rounded-xl transition-all duration-300 transform hover:-translate-y-2 shadow-[0_4px_24px_rgba(0,0,0,0.25)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
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
