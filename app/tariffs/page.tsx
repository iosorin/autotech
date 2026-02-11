"use client";

import Cta from "@/components/sections/cta";
import { TariffsHero } from "@/components/sections/tariffs-hero";
import { TariffsTable } from "@/components/sections/tariffs-table";
import { TariffsDiscounts } from "@/components/sections/tariffs-discounts";
import { TariffsIncluded } from "@/components/sections/tariffs-included";
import { app, tariffs } from "@content";

export default function TariffsPage() {
  const p = tariffs;
  return (
    <>
      <TariffsHero id="tariffs" platformLabel={p.platformLabel} title={p.title} />
      <TariffsTable
        id="table"
        periods={p.periods}
        plans={p.plans}
        priceNote={p.priceNote}
        priceNote2={p.priceNote2}
      />
      <TariffsDiscounts id="discounts" heading={p.discountsHeading} discounts={p.discounts} />
      <TariffsIncluded
        id="included"
        heading={p.includedHeading}
        items={p.included}
        imageAlt={p.imageAlt}
      />
      <Cta id="cta" title={p.ctaTitle} start={app.cta.start} contact={app.cta.contact} />
    </>
  );
}
