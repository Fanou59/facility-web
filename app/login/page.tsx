// filepath: /app/login/page.tsx
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
import { loginFormSchema } from "@/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

export default function LoginPage() {
  const [error, setError] = useState("");
  const router = useRouter();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    setError("");
    try {
      await authClient.signIn.email({
        email: values.email,
        password: values.password,
      });
      router.push("/admin");
    } catch (err: any) {
      setError(err.message || "Erreur lors de la connexion");
    }
  };

  const handleForgotPassword = async () => {
    const email = form.getValues("email");
    if (!email) {
      toast.error("Veuillez saisir votre adresse email.");
      return;
    }
    try {
      await authClient.requestPasswordReset({
        email: email,
        redirectTo: "/reset-password", // URL de la page de réinitialisation de mot de passe
      });
      toast.success(
        "Un lien de réinitialisation a été envoyé à votre adresse email."
      );
    } catch (err: any) {
      toast.error(err.message || "Erreur lors de l'envoi du lien.");
    }
  };

  return (
    <PageContainer>
      <Section title="Connexion">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 w-1/2 mx-auto"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre email de connexion"
                      {...field}
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre mot de passe"
                      {...field}
                      type="password"
                    />
                  </FormControl>
                  <FormMessage />
                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={handleForgotPassword}
                      className="text-sm text-gray-500 hover:text-orange-500 transition-colors duration-300"
                    >
                      Mot de passe oublié?
                    </button>
                  </div>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                Envoyer
              </Button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </form>
        </Form>
      </Section>
    </PageContainer>
  );
}
