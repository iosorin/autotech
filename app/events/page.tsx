import type { Metadata } from "next";
import Lead from "@ui/atoms/lead";
import { Event } from "@ui/blocks/event";
import { List } from "@ui/blocks/list";
import { seo, events, } from "@data";
import { Cta } from "@ui/blocks/cta";

export const metadata: Metadata = {
  title: seo.pages.events.title,
  description: seo.pages.events.description,
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  const p = events;
  return (
    <>
      <section id="event" className="pb-0">
        <Lead label={p.subtitle} title={p.title} titleFirst tag="h1" className="mb-12" />

        <div className={p.eventBanner.className}>
          <Lead
            title={p.eventBanner.title}
            desc={p.eventBanner.desc}
            minor={p.eventBanner.date}
            label={p.eventBanner.date} />
          <Cta items={p.eventBanner.cta} />
        </div>
        <div className="gradlayer bg-gradient-gray" />
      </section>

      <section id="past-events">
        <Lead title={p.past.heading} />
        <List events={p.past.items} className="my-12" />
      </section>
    </>

  );
}
