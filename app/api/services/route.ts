import { prisma } from "@/lib/connect";
import { NextResponse } from "next/server";

export async function GET() {
  const services = await prisma.services.findMany();
  return NextResponse.json(services, { status: 200 });
}
export async function POST(request: Request) {
  const data = await request.json();
  const newService = await prisma.detailServices.create({
    data: {
      title: data.title,
      description: data.description,
      imageUrl: data.imageUrl,
      alt: data.alt,
      synthese: data.synthese,
    },
  });
  return NextResponse.json(newService, { status: 201 });
}
