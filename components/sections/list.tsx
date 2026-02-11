"use client";

type Event = { date: string; title: string; attendees: string };

type Props = {
  id?: string;
  heading: string;
  events: Event[];
};

export function List({ id, heading, events }: Props) {
  return (
    <section id={id} className="mt-16 mx-auto max-w-3xl px-4">
      <h2 className="mb-8 text-2xl font-bold text-foreground">{heading}</h2>
      <div className="space-y-6">
        {events.map((event) => (
          <div key={event.date} className="rounded-2xl border border-border p-6">
            <p className="mb-2 text-sm text-primary">{event.date}</p>
            <h3 className="mb-1 text-lg font-bold text-foreground">{event.title}</h3>
            <p className="text-sm text-muted-foreground">{event.attendees}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
