"use client";
import {
  Timeline,
  TimelineDescription,
  TimelineHeader,
  TimelineItem,
  TimelineSubTitle,
  TimelineTime,
  TimelineTitle,
} from "@/components/ui/timeline";
import { useQuery } from "@tanstack/react-query";
import SpinnerPerso from "./ui/spinner-perso";

type Experience = {
  id: string;
  job: string;
  company: string;
  startDate: string;
  resume: string;
};

// Fonction pour formater la date
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    month: "long",
    year: "numeric",
  });
};

export const TimelineLayout = () => {
  const { data, isLoading, error } = useQuery<Experience[]>({
    queryKey: ["experiences"],
    queryFn: async () => {
      const res = await fetch("/api/experiences");
      if (!res.ok) throw new Error("Erreur lors du chargement");
      return res.json();
    },
  });
  if (isLoading) return <SpinnerPerso />;
  if (error) return <div>Erreur: {error.message}</div>;
  if (!data) return <div>Aucun service trouvé.</div>;

  return (
    <Timeline className="mt-8 px-4 md:px-0">
      {data.map((experience) => (
        <TimelineItem key={experience.id}>
          <TimelineHeader>
            <div className="flex flex-col">
              <TimelineTime>{formatDate(experience.startDate)}</TimelineTime>
              <TimelineTitle>{experience.job}</TimelineTitle>
              <TimelineSubTitle>{experience.company}</TimelineSubTitle>
            </div>
          </TimelineHeader>
          {experience.resume && (
            <TimelineDescription>{experience.resume}</TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};
