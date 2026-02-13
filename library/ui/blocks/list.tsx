"use client";

import { cn } from "@utils";

type Event = { date: string; title: string; attendees: string };

type Props = {
  heading: string;
  events: Event[];
  className?: string;
};

export const List = ({ heading, events, className }: Props) => {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      <h2>{heading}</h2>
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.date} className="rounded-2xl bg-white shadow-lg p-6">
            <p className="mb-2">{event.date}</p>
            <h3 className="mb-1 text-lg font-bold text-foreground">{event.title}</h3>
            <p className="text-primary">{event.attendees}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
