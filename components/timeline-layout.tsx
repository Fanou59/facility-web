import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
} from "@/components/ui/timeline";

import { TimelineItemType } from "@/types";

const timelineData: TimelineItemType[] = [
  {
    id: 1,
    title: "Technical Program Manager",
    description:
      "En tant que Technical Program Manager, je pilote le programme de connectivité (IoT) pour les équipements de fitness cardio et les montres connectées. Mon rôle est d’aligner vision technique et business, en orchestrant les efforts des équipes produit, firmware et applications.",
    time: "Janvier 2025",
  },
  {
    id: 2,
    title: "Directeur de la communication",
    description:
      "En tant que Directeur de la communication pour KIPRUN, la marque experte running de Decathlon, mon rôle a été de développer une stratégie de marque forte et de conquérir les marchés clés grâce à une approche data-driven et orientée contenu..",
    time: "Janvier 2023",
  },
  {
    id: 3,
    title: "Chef de produit",
    description:
      "J’ai dirigé le développement des lampes frontales pour le trail running, avec pour objectif de concevoir des produits performants, ergonomiques et robustes.",
    time: "Juin 2021",
  },
];

export const TimelineLayout = () => {
  return (
    <Timeline className="mt-8">
      {timelineData.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <TimelineTime>{item.time}</TimelineTime>
            <TimelineTitle>{item.title}</TimelineTitle>
          </TimelineHeader>
          {item.description && (
            <TimelineDescription>{item.description}</TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};
