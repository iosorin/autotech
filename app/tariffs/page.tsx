import type { Metadata } from "next";
import { Cta } from "@ui/blocks/cta";
import { Lead } from "@ui/atoms/lead";
import { Table } from "@ui/blocks/table";
import { Rates } from "@ui/blocks/rates";
import { Block } from "@ui/blocks/block";
import { app, forms, seo, tariffs } from "@data";
import { Form } from "@ui/blocks/form";
import contact from "@api/contact";

export const metadata: Metadata = {
  title: seo.pages.tariffs.title,
  description: seo.pages.tariffs.description,
  alternates: { canonical: "/tariffs" },
};

export const Tariffs = () => {
  const p = tariffs;
  return (
    <>
      <section id="tariffs" className="layered pb-0">
        <Lead label={p.platformLabel} title={p.title} tag="h1" titleFirst />

        <Table
          cols={p.periods}
          rows={p.plans}
          note={p.priceNote}
          note2={p.priceNote2}
          className="bg-gradient-white"
        />
        <div className="layer bg-gradient-blue" />
      </section>

      <section id="discounts">
        <Lead title={p.discounts.heading} />
        <Rates discounts={p.discounts.items} icon={p.discounts.icon} />
      </section>

      <section id="included">
        <Block
          heading={<Lead title={p.included.heading} className="text-left" />}
          items={p.included.items}
          image={p.included.image}
          reverse
        // className="flex-row-reverse"
        />
      </section>

      <section id="cta" className="layered">
        <Lead title={p.cta.title} />

        <Cta items={[app.cta.start, app.cta.contact]}>
          <Cta.Slot id={app.cta.contact.id}>
            <Form heading={forms.call.heading} fields={forms.call.fields} onSubmit={contact} />
          </Cta.Slot>
        </Cta>
        <div className="layer bg-gradient-green" />
      </section>
    </>
  );
}

export default Tariffs;