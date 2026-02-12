import type { Metadata } from "next";
import { Cta } from "@ui/blocks/cta";
import { Lead } from "@ui/blocks/lead";
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
      <section id="tariffs" className="pt-from-header pb-8 relative">
        <div className="gradlayer bg-gradient-blue" />
        <Lead label={p.platformLabel} title={p.title} />
        <Table
          cols={p.periods}
          rows={p.plans}
          note={p.priceNote}
          note2={p.priceNote2}
          className="bg-white"
        />
      </section>

      <section id="discounts" className="py-12">
        <Rates heading={p.discountsHeading} discounts={p.discounts} />
      </section>

      <section id="included" className="py-12 md:py-20">
        <Checklist
          heading={p.includedHeading}
          items={p.included}
          imageAlt={p.imageAlt}
        />
      </section>

      <section id="cta" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-background -z-10" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <Cta title={p.ctaTitle} start={app.cta.start} contact={app.cta.contact} />
        </div>
      </section>
    </>
  );
}

export default Tariffs