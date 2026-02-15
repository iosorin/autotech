import type { Metadata } from "next";
import Lead from "@ui/atoms/lead";
import { Event } from "@ui/blocks/event";
import { List } from "@ui/blocks/list";
import { seo, events, home } from "@data";

export const metadata: Metadata = {
  title: seo.pages.events.title,
  description: seo.pages.events.description,
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  const p = events;
  return (
    <>
      <section id="event">
        <Lead label={p.subtitle} title={p.title} titleFirst tag="h1" />
        <Event
          date={home.eventBanner.date}
          title={home.eventBanner.title}
          line1={home.eventBanner.line1}
          line2={home.eventBanner.line2}
          cta={home.eventBanner.cta}
          button={home.eventBanner.button}
          className="bg-white shadow-lg"
        />
        <div className="gradlayer bg-gradient-blue" />
      </section>

      <section id="past-events">
        <Lead title={p.pastHeading} />
        <List events={p.past} className="my-12" />
      </section>
    </>

  );
}
