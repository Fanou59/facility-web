"use server";

import { addServiceSchema } from "@/schemas/addService";

export async function addServiceAction(formData: any) {
  const parsed = addServiceSchema.safeParse(formData);
  if (!parsed.success) {
    throw new Error("Validation échouée");
  }
  const service = await prisma.services.create({
    data: parsed.data,
  });
  return { success: true, service };
}
