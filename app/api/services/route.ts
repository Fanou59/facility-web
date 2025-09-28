import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const data = await request.json();
  const newService = await prisma.services.create({
    data: {
      title: data.title,
      resume: data.resume,
      description: data.description,
      imageUrl: data.imageUrl,
      alt: data.alt,
      synthese: data.synthese,
    },
  });
  return NextResponse.json(newService, { status: 201 });
}

export async function GET() {
  const services = await prisma.services.findMany();
  return NextResponse.json(services, { status: 200 });
}
