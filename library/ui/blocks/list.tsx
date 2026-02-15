import { cn } from "@utils";
import { Enter } from "@ui/atoms/enter";

type Event = { date: string; title: string; attendees: string };

type Props = {
  events: Event[];
  className?: string;
};

export const List = ({ events, className }: Props) => {
  return (
    <div className={cn("space-y-6", className)}>
      {events.map((event, index) => (
        <Enter variant="fade-left" duration={700} delay={index * 100} key={event.date} className="rounded-2xl bg-white shadow-lg p-6 text-left">
          <p className="mb-2">{event.date}</p>
          <h3 className="mb-1 text-lg font-bold text-foreground">{event.title}</h3>
          <p className="text-primary">{event.attendees}</p>
        </Enter>
      ))}
    </div>
  );
};

export default List;
