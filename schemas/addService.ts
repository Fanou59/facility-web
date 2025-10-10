import { z } from "zod";

export const addServiceSchema = z.object({
  title: z.string().min(2, {
    message: "Le titre doit contenir au moins 2 caractères.",
  }),
  resume: z.string().min(10, {
    message: "Le résumé doit contenir au moins 10 caractères.",
  }),
  description: z.string().min(10, {
    message: "La description doit contenir au moins 10 caractères.",
  }),
  imageUrl: z
    .any()
    .refine(
      (file) => file instanceof File || typeof file === "undefined",
      "Un fichier PNG est requis"
    ),
  alt: z.string().min(5, {
    message: "Le texte alternatif doit contenir au moins 5 caractères.",
  }),
  synthese: z
    .array(
      z.string().min(1, "Chaque synthèse doit contenir au moins 3 caractères.")
    )
    .length(3, { message: "Il faut exactement 3 synthèses." }),
});
