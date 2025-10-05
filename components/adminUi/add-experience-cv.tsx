"use client";
import { addExperienceCVAction } from "@/app/actions/addExperienceCV";
import { cvSchema } from "@/schemas/cv";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface AddExperienceCvProps {
  onSuccess?: () => void;
}

function formatDate(date: Date | undefined) {
  if (!date) {
    return "";
  }
  return date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export default function AddExperienceCv({ onSuccess }: AddExperienceCvProps) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [month, setMonth] = useState(date);
  const [value, setValue] = useState(formatDate(date));

  const form = useForm<z.infer<typeof cvSchema>>({
    resolver: zodResolver(cvSchema),
    defaultValues: {
      job: "",
      company: "",
      resume: "",
      startDate: "",
    },
  });

  async function onSubmit(data: z.infer<typeof cvSchema>) {
    try {
      const formData = new FormData();
      formData.append("job", data.job);
      formData.append("company", data.company);
      formData.append("resume", data.resume);
      formData.append("startDate", data.startDate);

      await addExperienceCVAction(formData);
      toast.success("Service modifié avec succès !");
    } catch (e: any) {
      toast.error(e.message || `Erreur lors de l'ajout de l'expérience`);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="job"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Métier</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Entreprise</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="resume"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description du job</FormLabel>
              <FormControl>
                <Textarea {...field} className="min-h-[150px]" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date de démarrage</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    className="bg-background pr-10"
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setOpen(true);
                      }
                    }}
                    {...field}
                  />
                  <Popover open={open} onOpenChange={setOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        id="date-picker"
                        variant="ghost"
                        className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                      >
                        <CalendarIcon className="size-3.5" />
                        <span className="sr-only">Choisir une date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="end"
                      alignOffset={-8}
                      sideOffset={10}
                    >
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        captionLayout="dropdown"
                        month={month}
                        onMonthChange={setMonth}
                        onSelect={(date) => {
                          const formattedDate = formatDate(date);
                          field.onChange(formattedDate);
                          setOpen(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
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
            Ajouter
          </Button>
        </div>
      </form>
    </Form>
  );
}
