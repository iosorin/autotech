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
  const p = fleet;
  return (
    <>
      <section id="fleet" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e8f5e9] to-background -z-10" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <Banner
            eyebrow={p.eyebrow}
            heroTitle={p.heroTitle}
            heroBadge1={p.heroBadge1}
            heroBadge2={p.heroBadge2}
            heroCardTitle={p.heroCardTitle}
            heroCardDesc={p.heroCardDesc}
            image={p.image}
            contactCta={app.cta.contact}
          />
        </div>
      </section>

      <section id="why" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Icons
            heading={p.whyHeading}
            items={p.whyConvenient}
            cols={2}
            variant="highlight"
          />
        </div>
      </section>

      <section id="cabinet" className="py-16 md:py-20 bg-secondary">
        <div className="max-w-6xl mx-auto px-4">
          <Columns
            heading={p.cabinetHeading}
            list={p.cabinetList}
            choiceTitle={p.cabinetChoiceTitle}
            choiceTags={p.cabinetChoiceTags}
            filterTitle={p.cabinetFilterTitle}
            filterTags={p.cabinetFilterTags}
            imageAlt={p.appImageAlt}
          />
        </div>
      </section>

      <section id="hrd" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Promo
            title={p.hrdTitle}
            desc={p.hrdDesc}
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
            beforeLabel={p.beforeLabel}
            afterLabel={p.afterLabel}
            items={p.beforeAfter}
          />
        </div>
      </section>

      <section id="seasonal" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Halves
            title={p.seasonalHeading}
            list={p.seasonalList}
            imageSrc="/images/tire-mechanic.jpg"
            imageAlt={p.seasonalImageAlt}
            imagePosition="right"
            headingIcon={<Settings className="w-7 h-7 text-muted-foreground" />}
          />
        </div>
      </section>

      <section id="approaches" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Cards heading={p.approachesHeading} items={p.approaches} />
        </div>
      </section>

      <section id="flexible" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Halves
            title={p.flexibleTitle}
            list={p.flexibleList}
            imageSrc="/images/fleet-dashboard.jpg"
            imageAlt={p.dashboardImageAlt}
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
            heading={p.howHeading}
            steps={p.steps}
            cabinetCta={app.cta.cabinet}
            moreCta={app.cta.more}
          />
        </div>
      </section>

      <section id="transparency" className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Halves
            title={p.transparencyTitle}
            list={p.transparencyItems}
            imageSrc="/images/app-mockup.jpg"
            imageAlt={p.transparencyImageAlt}
            imagePosition="left"
            headingIcon={<Eye className="w-7 h-7 text-primary" />}
          />
        </div>
      </section>

      <section id="faq" className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Accordion heading={p.faqHeading} items={p.faq} />
        </div>
      </section>
    </>
  );
}
