import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import { Cta } from "@ui/blocks/cta";
import { Lead } from "@ui/atoms/lead";
import { Table } from "@ui/blocks/table";
import { Rates } from "@ui/blocks/rates";
import { Checklist } from "@ui/blocks/checklist";
import { app, seo, tariffs } from "@data";

export const metadata: Metadata = {
  title: seo.pages.tariffs.title,
  description: seo.pages.tariffs.description,
};

const Tariffs = () => {
  const p = tariffs;
  return (
    <>
      <section id="tariffs" className="pb-0">
        <div className="gradlayer bg-gradient-blue" />

        <Lead label={p.platformLabel} title={p.title} />

        <Table
          cols={p.periods}
          rows={p.plans}
          note={p.priceNote}
          note2={p.priceNote2}
          className="bg-gradient-white"
        />
      </section>

      <section id="discounts">
        <Lead title={p.discounts.heading} />
        <Rates discounts={p.discounts.items} icon={p.discounts.icon} />
      </section>

      <section id="included">
        <Lead title={p.includedHeading} />
        <Checklist items={p.included} image={p.image}
        />
      </section>

      <section id="cta">
        <div className="gradlayer bg-gradient-green" />
        <Cta title1={p.cta.title1} title2={p.cta.title2} start={p.cta.start} contact={p.cta.contact} />
      </section>
    </>
  );
}

export default Tariffs