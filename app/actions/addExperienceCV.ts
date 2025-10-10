"use server";

import { prisma } from "@/lib/prisma";

export async function addExperienceCVAction(formData: FormData) {
  const job = formData.get("job") as string;
  const company = formData.get("company") as string;
  const resume = formData.get("resume") as string;

  const startDateString = formData.get("startDate") as string;
  const startDate = new Date(startDateString);
  try {
    await prisma.cv.create({
      data: {
        job,
        company,
        resume,
        startDate,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Erreur lors de l'ajout de l'expérience:", error);
    throw new Error("Impossible d'ajouter l'expérience");
  } finally {
    await prisma.$disconnect();
  }
}
