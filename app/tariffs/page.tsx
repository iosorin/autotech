"use client";

import Cta from "@/components/sections/cta";
import { Lead } from "@/components/sections/lead";
import { Table } from "@/components/sections/table";
import { Rates } from "@/components/sections/rates";
import { Checklist } from "@/components/sections/checklist";
import { app, tariffs } from "@content";

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
