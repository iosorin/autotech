import { Hero } from "@ui/blocks/hero";
import { Event } from "@ui/blocks/event";
import { Features } from "@ui/blocks/features";
import { Account } from "@ui/blocks/account";
import { ExtraFeatures } from "@ui/blocks/extra";
import { DataMigration } from "@ui/blocks/migration";
import { Clients } from "@ui/blocks/clients";
import { Cta } from "@ui/blocks/cta";
import { Faq } from "@ui/blocks/faq";
import { Partners } from "@ui/blocks/partners";
import { Testimonials } from "@ui/blocks/testimonials";
import { Join } from "@ui/blocks/join";
import { app, home } from "@data";

const Page = () => {
  return (
    <>
      <section id="hero" className="py-12 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-100 via-blue-50 to-background -z-10" />
        
        <div className="max-w-6xl mx-auto px-4">
          <Hero
            subtitle={home.hero.subtitle}
            titleLine1={home.hero.titleLine1}
            titleLine2={home.hero.titleLine2}
            featureTags={home.hero.featureTags}
            telegramCta={home.hero.telegramCta}
            telegramUrl={app.telegramUrl}
            cardTitle1={home.hero.cardTitle1}
            cardTitle2={home.hero.cardTitle2}
            cardDesc={home.hero.cardDesc}
            imageAlt={home.hero.imageAlt}
            ctaStart={app.cta.start}
            ctaContact={app.cta.contact}
          />
        </div>
      </section>

      <section id="events" className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <Event
            date={home.eventBanner.date}
            title={home.eventBanner.title}
            line1={home.eventBanner.line1}
            line2={home.eventBanner.line2}
            cta={home.eventBanner.cta}
            button={home.eventBanner.button}
          />
        </div>
      </section>

      <section id="features" className="py-12 md:py-20 relative">

        <div className="max-w-6xl mx-auto px-4 relative">
          <Features
            tabs={home.features.tabs}
            content={home.features.content}
            imageAlt={home.features.imageAlt}
          />
        </div>
      </section>

      <section id="account" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <Account
            titleLine1={home.account.titleLine1}
            titleLine2={home.account.titleLine2}
            descLine1={home.account.descLine1}
            descLine2={home.account.descLine2}
            subtitle={home.account.subtitle}
            cards={home.account.cards}
          />
        </div>
      </section>

      <section id="extra" className="py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4">
          <ExtraFeatures
            title={home.extraFeatures.title}
            titleHighlight={home.extraFeatures.titleHighlight}
            titleSuffix={home.extraFeatures.titleSuffix}
            tire={home.extraFeatures.tire}
            integrations={home.extraFeatures.integrations}
            security={home.extraFeatures.security}
            support={home.extraFeatures.support}
            devices={home.extraFeatures.devices}
            mechanicImageAlt={home.extraFeatures.mechanicImageAlt}
          />
        </div>
      </section>

      <section id="migration" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-background -z-10" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <DataMigration
            titleLine1={home.dataMigration.titleLine1}
            titleLine2={home.dataMigration.titleLine2}
            desc={home.dataMigration.desc}
            items={home.dataMigration.items}
          />
        </div>
      </section>

      <section id="clients" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#EDEEF3] to-background -z-10" />
        <div className="max-w-6xl mx-auto px-4 relative">
          <Clients
            titleLine1={home.clients.titleLine1}
            titleLine2={home.clients.titleLine2}
            subtitle={home.clients.subtitle}
            intro={home.clients.intro}
            items={home.clients.items}
            imageAlt={home.clients.imageAlt}
          />
        </div>
      </section>

      <section id="cta" className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-background -z-10" />
        <div className="max-w-3xl mx-auto px-4 text-center relative">
          <Cta
            title={home.cta.defaultTitle}
            start={app.cta.start}
            contact={app.cta.contact}
          />
        </div>
      </section>

      <section id="faq" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4">
          <Faq heading={home.faq.heading} items={home.faq.items} />
        </div>
      </section>

      <section id="partners" className="py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4">
          <Partners
            heading={home.partners.heading}
            name={home.partners.name}
            nameSup={home.partners.nameSup}
            desc={home.partners.desc}
            note={home.partners.note}
          />
        </div>
      </section>

      <section id="testimonials" className="py-12 md:py-20 bg-secondary/50">
        <div className="max-w-6xl mx-auto px-4">
          <Testimonials
            heading={home.testimonials.heading}
            prevAria={home.testimonials.prevAria}
            nextAria={home.testimonials.nextAria}
            list={home.testimonials.list}
          />
        </div>
      </section>

      <section id="join" className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Join
            titleLine1={home.join.titleLine1}
            titleLine2={home.join.titleLine2}
            ctaStart={app.cta.start}
            ctaContact={app.cta.contact}
          />
        </div>
      </section>
    </>
  );
};

export default Page;
