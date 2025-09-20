"use server";

export async function deleteServiceAction(id: string) {
  await prisma.services.delete({ where: { id: Number(id) } });
  return { success: true };
}
