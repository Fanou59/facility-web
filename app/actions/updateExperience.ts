"use server";

import { prisma } from "@/lib/prisma";
import { cvSchema } from "@/schemas/cv";
import { revalidatePath } from "next/cache";

export async function updateExperienceAction(formData: FormData) {
  try {
    const id = formData.get("id") as string;
    const job = formData.get("job") as string;
    const resume = formData.get("resume") as string;
    const company = formData.get("company") as string;
    const startDate = formData.get("startDate") as string;

    // Préparer les données pour la validation
    const dataToValidate: any = {
      job,
      resume,
      company,
      startDate,
    };

    // Validation avec Zod partielle pour la mise à jour
    const validatedData = cvSchema.parse(dataToValidate);

    // Préparer les données pour Prisma
    const updateData: any = {
      job: validatedData.job,
      resume: validatedData.resume,
      company: validatedData.company,
      startDate: validatedData.startDate,
    };

    // Mise à jour en base de données avec Prisma
    const updatedExperience = await prisma.cv.update({
      where: { id: parseInt(id) },
      data: updateData,
    });

    console.log("Experience mise à jour:", updatedExperience);

    revalidatePath("/admin/services");
    return { success: true, service: updatedExperience };
  } catch (error) {
    console.error("Erreur lors de la mise à jour:", error);
    throw new Error("Erreur lors de la mise à jour de l'expérience");
  }
}
