"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

//Modifier description par résumé
type CardServicesProps = {
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
};

export default function CardServices({
  title,
  description,
  imageUrl,
  alt,
}: CardServicesProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/mes-services");
  };
  return (
    <Card
      className="shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader className="flex items-center justify-center gap-2">
        <Image height={50} width={50} src={imageUrl} alt={alt} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
