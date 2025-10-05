import { z } from "zod";

export const cvSchema = z.object({
  job: z
    .string()
    .min(2, { message: "Le métier doit contenir au moins 2 caractères." }),
  company: z
    .string()
    .min(2, { message: "L'entreprise doit contenir au moins 2 caractères." }),
  resume: z
    .string()
    .min(10, { message: "Le résumé doit contenir au moins 10 caractères." }),
  startDate: z
    .string()
    .min(1, { message: "La date de début est requise." })
    .refine(
      (dateStr) => {
        // Vérifier que la date peut être parsée
        const date = new Date(dateStr);
        return !isNaN(date.getTime());
      },
      { message: "Date de début invalide." }
    ),
});
