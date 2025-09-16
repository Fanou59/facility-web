import {
  Timeline,
  TimelineItem,
  TimelineTitle,
  TimelineDescription,
  TimelineTime,
  TimelineHeader,
  TimelineSubTitle,
} from "@/components/ui/timeline";
import { timelineData } from "@/data/cv";

export const TimelineLayout = () => {
  return (
    <Timeline className="mt-8">
      {timelineData.map((item) => (
        <TimelineItem key={item.id}>
          <TimelineHeader>
            <div className="flex flex-col">
              <TimelineTime>{item.time}</TimelineTime>
              <TimelineTitle>{item.title}</TimelineTitle>
              <TimelineSubTitle>{item.subtitle}</TimelineSubTitle>
            </div>
          </TimelineHeader>
          {item.description && (
            <TimelineDescription>{item.description}</TimelineDescription>
          )}
        </TimelineItem>
      ))}
    </Timeline>
  );
};
