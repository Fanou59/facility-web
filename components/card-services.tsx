"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

type CardServicesProps = {
  title: string;
  resume: string;
  imageUrl: string;
  alt: string;
};

export default function CardServices({
  title,
  resume,
  imageUrl,
  alt,
}: CardServicesProps) {
  const router = useRouter();
  const handleClick = () => {
    router.push("/mes-services");
  };
  return (
    <Card
      className="shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer relative"
      onClick={handleClick}
    >
      <CardHeader className="flex items-center justify-center gap-2">
        <Image height={50} width={50} src={imageUrl} alt={alt} />
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-10 md:pb-0">
        {resume && (
          <p
            className="text-gray-600 text-sm"
            dangerouslySetInnerHTML={{ __html: resume }}
          />
        )}
      </CardContent>
      <button className="absolute bottom-2 right-2 w-6 h-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold transition-colors md:hidden">
        +
      </button>
    </Card>
  );
}
