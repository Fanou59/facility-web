"use server";

import { prisma } from "@/lib/prisma";

export async function addExperienceCVAction(formData: FormData) {
  const job = formData.get("job") as string;
  const company = formData.get("company") as string;
  const resume = formData.get("resume") as string;
  const startDate = formData.get("startDate") as string;

  await prisma.cv.create({
    data: {
      job,
      company,
      resume,
      startDate,
    },
  });

  return { success: true };
}
