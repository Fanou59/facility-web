import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  surname: z.string().min(2, {
    message: "Le prénom doit contenir au moins 2 caractères.",
  }),
  company: z.string().optional(),
  email: z.email({
    message: "L'email n'est pas valide.",
  }),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
  phone: z.string().regex(/^(\+33|0)[1-9](\d{2}){4}$/, {
    message: "Le numéro de téléphone n'est pas valide.",
  }),
});
