"use server";

import { prisma } from "@/lib/prisma";
import { promises as fs } from "fs";
import path from "path";

export async function addServiceAction(formData: FormData) {
  const title = formData.get("title") as string;
  const resume = formData.get("resume") as string;
  const description = formData.get("description") as string;
  const alt = formData.get("alt") as string;
  const synthese = JSON.parse(formData.get("synthese") as string);
  const file = formData.get("image") as File;

  let imageUrl = "";
  if (file && file.name) {
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileName = `${Date.now()}-${file.name}`;
    const filePath = path.join(process.cwd(), "public/assets/images", fileName);
    await fs.writeFile(filePath, buffer);
    imageUrl = `/assets/images/${fileName}`;
  }

  await prisma.services.create({
    data: {
      title,
      resume,
      description,
      imageUrl,
      alt,
      synthese,
    },
  });

  return { success: true };
}
