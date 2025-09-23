import { NextResponse } from "next/server";

export async function GET() {
  const services = await prisma.user.findMany();
  return NextResponse.json(services, { status: 200 });
}
