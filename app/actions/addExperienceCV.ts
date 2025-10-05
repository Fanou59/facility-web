"use server";

import { prisma } from "@/lib/prisma";

export async function addExperienceCVAction(formData: FormData) {
  const job = formData.get("job") as string;
  const company = formData.get("company") as string;
  const resume = formData.get("resume") as string;

  const startDateString = formData.get("startDate") as string;
  const startDate = new Date(startDateString);

  await prisma.cv.create({
    data: {
      job: formData.get("job") as string,
      company: formData.get("company") as string,
      resume: formData.get("resume") as string,
      startDate: startDate, // Conversion string → Date pour Prisma
    },
  });

  return { success: true };
}
