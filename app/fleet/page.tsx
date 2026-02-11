import type { Metadata } from "next";
import { Heart, Settings, SlidersHorizontal, Eye } from "lucide-react";
import { Banner } from "@ui/blocks/banner";
import { Icons } from "@ui/blocks/icons";
import { Columns } from "@ui/blocks/columns";
import { Promo } from "@ui/blocks/promo";
import { Compare } from "@ui/blocks/compare";
import { Halves } from "@ui/blocks/halves";
import { Cards } from "@ui/blocks/cards";
import { Steps } from "@ui/blocks/steps";
import { Accordion } from "@ui/blocks/accordion";
import { app, fleet, seo } from "@data";

export const metadata: Metadata = {
  title: seo.pages.fleet.title,
  description: seo.pages.fleet.description,
};

export default function FleetPage() {
  const f = fleet;
  return (
    <>
      <Banner
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
      <Icons
        id="why"
        heading={f.whyHeading}
        items={f.whyConvenient}
        cols={2}
        variant="highlight"
      />
      <Columns
        id="cabinet"
        heading={f.cabinetHeading}
        list={f.cabinetList}
        choiceTitle={f.cabinetChoiceTitle}
        choiceTags={f.cabinetChoiceTags}
        filterTitle={f.cabinetFilterTitle}
        filterTags={f.cabinetFilterTags}
        imageAlt={f.appImageAlt}
      />
      <Promo
        id="hrd"
        title={f.hrdTitle}
        desc={f.hrdDesc}
        primaryCta={app.cta.cabinet}
        primaryHref="#"
        secondaryCta={app.cta.more}
        secondaryHref="/contacts"
        icon={<Heart className="w-10 h-10 text-accent-foreground mx-auto mb-4 opacity-60" />}
      />
      <Compare
        id="before-after"
        beforeLabel={f.beforeLabel}
        afterLabel={f.afterLabel}
        items={f.beforeAfter}
      />
      <Halves
        id="seasonal"
        title={f.seasonalHeading}
        list={f.seasonalList}
        imageSrc="/images/tire-mechanic.jpg"
        imageAlt={f.seasonalImageAlt}
        imagePosition="right"
        headingIcon={<Settings className="w-7 h-7 text-muted-foreground" />}
      />
      <Cards id="approaches" heading={f.approachesHeading} items={f.approaches} />
      <Halves
        id="flexible"
        title={f.flexibleTitle}
        list={f.flexibleList}
        imageSrc="/images/fleet-dashboard.jpg"
        imageAlt={f.dashboardImageAlt}
        imagePosition="left"
        headingIcon={<SlidersHorizontal className="w-7 h-7 text-primary" />}
        cta={app.cta.contact}
      />
      <Steps
        id="steps"
        heading={f.howHeading}
        steps={f.steps}
        cabinetCta={app.cta.cabinet}
        moreCta={app.cta.more}
      />
      <Halves
        id="transparency"
        title={f.transparencyTitle}
        list={f.transparencyItems}
        imageSrc="/images/app-mockup.jpg"
        imageAlt={f.transparencyImageAlt}
        imagePosition="left"
        headingIcon={<Eye className="w-7 h-7 text-primary" />}
      />
      <Accordion id="faq" heading={f.faqHeading} items={f.faq} />
    </>
  );
}
