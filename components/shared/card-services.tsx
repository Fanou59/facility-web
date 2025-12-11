import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

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
  return (
    <Link
      href="/mes-services"
      className="block shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer relative"
    >
      <Card className="h-full">
        <CardHeader className="flex items-center justify-center gap-2">
          <Image height={50} width={50} src={imageUrl} alt={alt} />
          <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-10 md:pb-0">
          {resume && (
            <div
              className="text-gray-600 text-sm"
              dangerouslySetInnerHTML={{ __html: resume }}
            />
          )}
        </CardContent>
        <div className="absolute bottom-2 right-2 w-6 h-6 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold transition-colors md:hidden">
          +
        </div>
      </Card>
    </Link>
  );
}
