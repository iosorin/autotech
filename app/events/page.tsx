import type { Metadata } from "next";
import Lead from "@ui/atoms/lead";
import { Event } from "@ui/blocks/event";
import { List } from "@ui/blocks/list";
import { seo, events, home } from "@data";

export const metadata: Metadata = {
  title: seo.pages.events.title,
  description: seo.pages.events.description,
};

export default function EventsPage() {
  const p = events;
  return (
    <section id="events" className="pt-from-header relative">
      <div className="gradlayer bg-gradient-blue" />

      <Lead label={p.subtitle} title={p.title} titleFirst />
      <Event
        date={home.eventBanner.date}
        title={home.eventBanner.title}
        line1={home.eventBanner.line1}
        line2={home.eventBanner.line2}
        cta={home.eventBanner.cta}
        button={home.eventBanner.button}
        className="bg-white shadow-lg"
      />
      <List heading={p.pastHeading} events={p.past} className="my-12" />
    </section>
  );
}
