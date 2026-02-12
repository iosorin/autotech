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
      <section id="fleet" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5e9] to-background -z-10" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <Banner
            eyebrow={f.eyebrow}
            heroTitle={f.heroTitle}
            heroBadge1={f.heroBadge1}
            heroBadge2={f.heroBadge2}
            heroCardTitle={f.heroCardTitle}
            heroCardDesc={f.heroCardDesc}
            heroImageAlt={f.heroImageAlt}
            contactCta={app.cta.contact}
          />
        </div>
      </section>

      <section id="why" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Icons
            heading={f.whyHeading}
            items={f.whyConvenient}
            cols={2}
            variant="highlight"
          />
        </div>
      </section>

      <section id="cabinet" className="py-16 md:py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <Columns
            heading={f.cabinetHeading}
            list={f.cabinetList}
            choiceTitle={f.cabinetChoiceTitle}
            choiceTags={f.cabinetChoiceTags}
            filterTitle={f.cabinetFilterTitle}
            filterTags={f.cabinetFilterTags}
            imageAlt={f.appImageAlt}
          />
        </div>
      </section>

      <section id="hrd" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Promo
            title={f.hrdTitle}
            desc={f.hrdDesc}
            primaryCta={app.cta.cabinet}
            primaryHref="#"
            secondaryCta={app.cta.more}
            secondaryHref="/contacts"
            icon={<Heart className="w-10 h-10 text-accent-foreground mx-auto mb-4 opacity-60" />}
          />
        </div>
      </section>

      <section id="before-after" className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4">
          <Compare
            beforeLabel={f.beforeLabel}
            afterLabel={f.afterLabel}
            items={f.beforeAfter}
          />
        </div>
      </section>

      <section id="seasonal" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Halves
            title={f.seasonalHeading}
            list={f.seasonalList}
            imageSrc="/images/tire-mechanic.jpg"
            imageAlt={f.seasonalImageAlt}
            imagePosition="right"
            headingIcon={<Settings className="w-7 h-7 text-muted-foreground" />}
          />
        </div>
      </section>

      <section id="approaches" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Cards heading={f.approachesHeading} items={f.approaches} />
        </div>
      </section>

      <section id="flexible" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Halves
            title={f.flexibleTitle}
            list={f.flexibleList}
            imageSrc="/images/fleet-dashboard.jpg"
            imageAlt={f.dashboardImageAlt}
            imagePosition="left"
            headingIcon={<SlidersHorizontal className="w-7 h-7 text-primary" />}
            cta={app.cta.contact}
          />
        </div>
      </section>

      <section id="steps" className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5e9] to-[#f1f8e9] -z-10" />
        <div className="max-w-3xl mx-auto px-4 relative">
          <Steps
            heading={f.howHeading}
            steps={f.steps}
            cabinetCta={app.cta.cabinet}
            moreCta={app.cta.more}
          />
        </div>
      </section>

      <section id="transparency" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Halves
            title={f.transparencyTitle}
            list={f.transparencyItems}
            imageSrc="/images/app-mockup.jpg"
            imageAlt={f.transparencyImageAlt}
            imagePosition="left"
            headingIcon={<Eye className="w-7 h-7 text-primary" />}
          />
        </div>
      </section>

      <section id="faq" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Accordion heading={f.faqHeading} items={f.faq} />
        </div>
      </section>
    </>
  );
}
