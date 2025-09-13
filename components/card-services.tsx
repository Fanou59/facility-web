"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";

type CardServicesProps = {
  title: string;
  content: string;
  imageUrl: string;
  alt: string;
};

export default function CardServices({
  title,
  content,
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
        <p className="text-gray-600 text-sm">{content}</p>
      </CardContent>
    </Card>
  );
}
