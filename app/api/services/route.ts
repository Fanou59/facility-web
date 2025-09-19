import { prisma } from "@/lib/connect";
import { NextResponse } from "next/server";

// export async function GET() {
//   const services = await prisma.services.findMany();
//   return NextResponse.json(services, { status: 200 });
// }

// Modifiction de detailServices vers Services un fois les modification en db faites
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

export async function GET() {
  const services = await prisma.detailServices.findMany();
  return NextResponse.json(services, { status: 200 });
}
