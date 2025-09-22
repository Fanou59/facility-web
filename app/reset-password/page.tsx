// filepath: /app/reset-password/page.tsx
"use client";

import PageContainer from "@/components/page-container";
import Section from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

// Schéma de validation pour le nouveau mot de passe
const resetPasswordFormSchema = z.object({
  password: z
    .string()
    .min(8, "Le mot de passe doit contenir au moins 8 caractères."),
});

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token"); // Récupérer le jeton de l'URL

  const form = useForm<z.infer<typeof resetPasswordFormSchema>>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof resetPasswordFormSchema>) => {
    if (!token) {
      toast.error(
        "Jeton de réinitialisation manquant. Veuillez réessayer la procédure."
      );
      return;
    }

    try {
      await authClient.resetPassword({
        newPassword: values.password,
        token: token,
      });

      toast.success("Votre mot de passe a été réinitialisé avec succès.");
      router.push("/login"); // Rediriger l'utilisateur vers la page de connexion
    } catch (err: any) {
      toast.error(
        err.message || "Erreur lors de la réinitialisation du mot de passe."
      );
    }
  };

  return (
    <PageContainer>
      <Section title="Réinitialiser votre mot de passe">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-1/2 mx-auto"
          >
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nouveau mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Nouveau mot de passe"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Réinitialiser
              </Button>
            </div>
          </form>
        </Form>
      </Section>
    </PageContainer>
  );
}
