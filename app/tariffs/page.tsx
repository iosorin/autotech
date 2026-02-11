import type { Metadata } from "next";
import Cta from "@ui/blocks/cta";
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
      <Lead id="tariffs" label={p.platformLabel} title={p.title} />
      <Table
        id="table"
        periods={p.periods}
        plans={p.plans}
        priceNote={p.priceNote}
        priceNote2={p.priceNote2}
      />
      <Rates id="discounts" heading={p.discountsHeading} discounts={p.discounts} />
      <Checklist
        id="included"
        heading={p.includedHeading}
        items={p.included}
        imageAlt={p.imageAlt}
      />
      <Cta id="cta" title={p.ctaTitle} start={app.cta.start} contact={app.cta.contact} />
    </>
  );
}
