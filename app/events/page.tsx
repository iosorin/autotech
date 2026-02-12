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
      <section id="events" className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <Intro title={p.title} subtitle={p.subtitle} />
        </div>
      </section>

      <section id="upcoming" className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <Promo
            date={p.upcomingDate}
            title={p.upcomingTitle}
            desc={`${p.upcomingDesc1} ${p.upcomingDesc2}`}
            ctaText={p.upcomingCta}
            primaryCta={p.button}
            primaryHref="/contacts"
          />
        </div>
      </section>

      <section id="past" className="mt-16 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <List heading={p.pastHeading} events={p.past} />
        </div>
      </section>
    </>
  );
}
