import type { Metadata } from "next";
import { Intro } from "@ui/blocks/intro";
import { Promo } from "@ui/blocks/promo";
import { List } from "@ui/blocks/list";
import { seo, events } from "@data";

export const metadata: Metadata = {
  title: seo.pages.events.title,
  description: seo.pages.events.description,
};

export default function EventsPage() {
  const p = events;
  return (
    <>
      <Intro id="events" title={p.title} subtitle={p.subtitle} />
      <Promo
        id="upcoming"
        date={p.upcomingDate}
        title={p.upcomingTitle}
        desc={`${p.upcomingDesc1} ${p.upcomingDesc2}`}
        ctaText={p.upcomingCta}
        primaryCta={p.button}
        primaryHref="/contacts"
      />
      <List id="past" heading={p.pastHeading} events={p.past} />
    </>
  );
}
