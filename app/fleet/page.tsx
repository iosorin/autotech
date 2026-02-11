"use client";

import { FleetHero } from "@/components/sections/fleet-hero";
import { FleetWhy } from "@/components/sections/fleet-why";
import { FleetCabinet } from "@/components/sections/fleet-cabinet";
import { FleetHrd } from "@/components/sections/fleet-hrd";
import { FleetBeforeAfter } from "@/components/sections/fleet-before-after";
import { FleetSeasonal } from "@/components/sections/fleet-seasonal";
import { FleetApproaches } from "@/components/sections/fleet-approaches";
import { FleetFlexible } from "@/components/sections/fleet-flexible";
import { FleetSteps } from "@/components/sections/fleet-steps";
import { FleetTransparency } from "@/components/sections/fleet-transparency";
import { FleetFaq } from "@/components/sections/fleet-faq";
import { app, fleet } from "@content";

export default function FleetPage() {
  const f = fleet;
  return (
    <>
      <FleetHero
        id="fleet"
        eyebrow={f.eyebrow}
        heroTitle={f.heroTitle}
        heroBadge1={f.heroBadge1}
        heroBadge2={f.heroBadge2}
        heroCardTitle={f.heroCardTitle}
        heroCardDesc={f.heroCardDesc}
        heroImageAlt={f.heroImageAlt}
        contactCta={app.cta.contact}
      />
      <FleetWhy id="why" heading={f.whyHeading} items={f.whyConvenient} />
      <FleetCabinet
        id="cabinet"
        heading={f.cabinetHeading}
        list={f.cabinetList}
        choiceTitle={f.cabinetChoiceTitle}
        choiceTags={f.cabinetChoiceTags}
        filterTitle={f.cabinetFilterTitle}
        filterTags={f.cabinetFilterTags}
        imageAlt={f.appImageAlt}
      />
      <FleetHrd
        id="hrd"
        title={f.hrdTitle}
        desc={f.hrdDesc}
        cabinetCta={app.cta.cabinet}
        moreCta={app.cta.more}
      />
      <FleetBeforeAfter
        id="before-after"
        beforeLabel={f.beforeLabel}
        afterLabel={f.afterLabel}
        items={f.beforeAfter}
      />
      <FleetSeasonal
        id="seasonal"
        heading={f.seasonalHeading}
        list={f.seasonalList}
        imageAlt={f.seasonalImageAlt}
      />
      <FleetApproaches id="approaches" heading={f.approachesHeading} items={f.approaches} />
      <FleetFlexible
        id="flexible"
        title={f.flexibleTitle}
        list={f.flexibleList}
        imageAlt={f.dashboardImageAlt}
        contactCta={app.cta.contact}
      />
      <FleetSteps
        id="steps"
        heading={f.howHeading}
        steps={f.steps}
        cabinetCta={app.cta.cabinet}
        moreCta={app.cta.more}
      />
      <FleetTransparency
        id="transparency"
        title={f.transparencyTitle}
        items={f.transparencyItems}
        imageAlt={f.transparencyImageAlt}
      />
      <FleetFaq id="faq" heading={f.faqHeading} items={f.faq} />
    </>
  );
}
