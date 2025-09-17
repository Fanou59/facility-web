"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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
import { Textarea } from "@/components/ui/textarea";

import { contactFormSchema } from "@/schemas/contact";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
      phone: "",
      surname: "",
    },
  });

  async function onSubmit(values: z.infer<typeof contactFormSchema>) {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        // Afficher un message de succès ou notifier l'utilisateur
        setSent(true);
        form.reset();
      } else {
        // Afficher un message d'erreur
        alert("Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      alert("Une erreur est survenue.");
    }
  }
  if (sent) {
    return (
      <div className="p-8 bg-orange-50 border border-orange-200 rounded-lg text-orange-900 text-center space-y-4">
        <h2 className="text-2xl font-bold">Message envoyé !</h2>
        <p>
          Pour passer à l'action sans attendre, je vous invite à prendre
          rendez-vous.
        </p>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              className="mt-4 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
              onClick={() => setOpen(true)}
            >
              Prendre rendez-vous
            </button>
          </DialogTrigger>
          <div className="flex justify-center w-full">
            <DialogContent className="max-w-md w-auto p-0 overflow-hidden rounded-2xl shadow-2xl bg-white ">
              <DialogTitle className="sr-only">
                Choisissez la date qui vous convient
              </DialogTitle>
              <div>
                <iframe
                  src="https://zcal.co/i/tDx2iy-O?embed=1&embedType=iframe"
                  loading="lazy"
                  style={{
                    border: "none",
                    width: 500,
                    maxWidth: "100%", // Limite la largeur à 400px
                    height: 600, // Hauteur réduite pour éviter le débordement
                    display: "block",
                  }}
                  id="zcal-invite"
                  scrolling="no"
                  title="Prendre rendez-vous"
                />
              </div>
            </DialogContent>
          </div>
        </Dialog>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nom</FormLabel>
                <FormControl>
                  <Input placeholder="Votre nom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Prénom</FormLabel>
                <FormControl>
                  <Input placeholder="Votre prénom" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Votre email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Téléphone</FormLabel>
                <FormControl>
                  <Input placeholder="Votre téléphone" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Votre message"
                    {...field}
                    className="min-h-[150px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Envoyer
          </Button>
        </div>
      </form>
    </Form>
  );
}
