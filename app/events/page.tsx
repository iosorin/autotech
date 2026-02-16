import type { Metadata } from "next";
import Lead from "@ui/atoms/lead";
import { List } from "@ui/blocks/list";
import { seo, events, } from "@data";
import { Cta } from "@ui/blocks/cta";

export const metadata: Metadata = seo.pages.events;

const Events = () => {
  const p = events;
  return (
    <>
      <section id="event" className="layered">
        <Lead label={p.subtitle} title={p.title} titleFirst tag="h1" className="mb-12" />

        <div className={p.event.className}>
          <Lead
            title={p.event.title}
            desc={p.event.desc}
            minor={p.event.date}
            label={p.event.date} />
          <Cta items={p.event.cta} />
        </div>
        <div className="layer bg-gradient-gray" />
      </section>

      <section id="past-events">
        <Lead title={p.past.heading} />
        <List events={p.past.items} className="my-12" />
      </section>
    </>

  );
}

export default Events;