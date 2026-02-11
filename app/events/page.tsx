import { EventsIntro } from "@/components/sections/events-intro";
import { EventsUpcoming } from "@/components/sections/events-upcoming";
import { EventsPast } from "@/components/sections/events-past";
import { events } from "@content";

export default function EventsPage() {
  const p = events;
  return (
    <>
      <EventsIntro id="events" title={p.title} subtitle={p.subtitle} />
      <EventsUpcoming
        id="upcoming"
        date={p.upcomingDate}
        title={p.upcomingTitle}
        descLine1={p.upcomingDesc1}
        descLine2={p.upcomingDesc2}
        cta={p.upcomingCta}
        button={p.button}
      />
      <EventsPast id="past" heading={p.pastHeading} events={p.past} />
    </>
  );
}
