import type { Metadata } from "next";
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
      <section id="hero" className="pt-from-header relative">
        <div className="gradlayer bg-gradient-blue" />

        <div className="mx-auto my-4">
          <Lead label={p.platformLabel} title={p.title} />
          <Table
            cols={p.periods}
            rows={p.plans}
            note={p.priceNote}
            note2={p.priceNote2}
            className="bg-gradient-white"
          />
        </div>
        <div className="fade-bottom" />
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
          <Cta title1={p.ctaTitle} start={app.cta.start} contact={app.cta.contact} />
        </div>
      </section>
    </>
  );
}

export default Tariffs