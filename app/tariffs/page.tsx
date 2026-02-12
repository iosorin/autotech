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

export default function TariffsPage() {
  const p = tariffs;
  return (
    <>
      <section id="tariffs" className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Lead label={p.platformLabel} title={p.title} />
        </div>
      </section>

      <section id="table" className="pb-12">
        <div className="max-w-4xl mx-auto px-4">
          <Table
            periods={p.periods}
            plans={p.plans}
            priceNote={p.priceNote}
            priceNote2={p.priceNote2}
          />
        </div>
      </section>

      <section id="discounts" className="py-12">
        <div className="max-w-4xl mx-auto px-4">
          <Rates heading={p.discountsHeading} discounts={p.discounts} />
        </div>
      </section>

      <section id="included" className="py-12 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <Checklist
            heading={p.includedHeading}
            items={p.included}
            imageAlt={p.imageAlt}
          />
        </div>
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
