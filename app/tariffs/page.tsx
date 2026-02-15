import type { Metadata } from "next";
import { Cta } from "@ui/blocks/cta";
import { Lead } from "@ui/atoms/lead";
import { Table } from "@ui/blocks/table";
import { Rates } from "@ui/blocks/rates";
import { Block } from "@ui/blocks/block";
import { seo, tariffs } from "@data";

export const metadata: Metadata = {
  title: seo.pages.tariffs.title,
  description: seo.pages.tariffs.description,
  alternates: { canonical: "/tariffs" },
};

const Tariffs = () => {
  const p = tariffs;
  return (
    <>
      <section id="tariffs" className="pb-0">
        <Lead label={p.subtitle} title={p.title} tag="h1" titleFirst />

        <Table
          cols={p.periods}
          rows={p.plans}
          note={p.priceNote}
          note2={p.priceNote2}
          className="bg-gradient-white"
        />

        <div className="gradlayer bg-gradient-blue" />
      </section>

      <section id="discounts">
        <Lead title={p.discounts.heading} />
        <Rates discounts={p.discounts.items} icon={p.discounts.icon} />
      </section>

      <section id="included-2">
        <Block
          list={[{ title: p.included.heading, items: p.included.items }]}
          image={p.included.image}
          reverse
        />
      </section>

      <section id="cta">
        <Lead title={p.cta.title} />
        <Cta items={p.cta.items} />
        <div className="gradlayer bg-gradient-green" />
      </section>
    </>
  );
}

export default Tariffs