"use client";
import { Skeleton } from "@/components/ui/skeleton";
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

type Experience = {
  id: string;
  job: string;
  company: string;
  startDate: string;
  resume: string;
};

const TimelineSkeleton = () => (
  <Timeline className="mt-8 px-4 md:px-0">
    {Array.from({ length: 3 }).map((_, index) => (
      <TimelineItem key={index}>
        <TimelineHeader>
          <div className="flex flex-col space-y-2">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-6 w-48" />
            <Skeleton className="h-4 w-32" />
          </div>
        </TimelineHeader>
        <div className="mt-3">
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </TimelineItem>
    ))}
  </Timeline>
);

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
  if (isLoading) return <TimelineSkeleton />;
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
