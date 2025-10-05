import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  const experiences = await prisma.cv.findMany();
  return NextResponse.json(experiences, { status: 200 });
}
