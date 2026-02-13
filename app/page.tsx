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
      <section id="hero" className="pt-from-header relative">
        <div className="gradlayer bg-gradient-gray" />

        <div className="mx-auto my-4">
          <Hero
            titleLine1={home.hero.titleLine1}
            titleLine2={home.hero.titleLine2}
            subtitle={home.hero.subtitle}
            features={home.hero.features}
            ctaTelegram={app.cta.telegram}
            card={home.hero.card}
            image={home.hero.image}
            ctaStart={app.cta.start}
            ctaContact={app.cta.contact}
          />
        </div>
        <div className="fade-bottom h-10" />
      </section>

      <section id="event" className="py-8 max-w-[60%] mx-auto">
        <Event
          date={home.eventBanner.date}
          title={home.eventBanner.title}
          line1={home.eventBanner.line1}
          line2={home.eventBanner.line2}
          cta={home.eventBanner.cta}
          button={home.eventBanner.button}
          className="bg-gradient-blue"
        />
      </section>

      <section id="features" className="py-12 md:py-20 relative">
        <Features
          tabs={home.features.tabs}
          content={home.features.content}
          imageAlt={home.features.imageAlt}
        />
      </section>

      <section id="account" className="py-12 md:py-20">
        <Account
          titleLine1={home.account.titleLine1}
          titleLine2={home.account.titleLine2}
          descLine1={home.account.descLine1}
          descLine2={home.account.descLine2}
          subtitle={home.account.subtitle}
          cards={home.account.cards}
        />
      </section>

      <section id="extra" className="py-12 md:py-20">
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
      </section>

      <section id="migration" className="max-w-3xl  py-16 md:py-24 relative text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/60 to-background -z-10" />
        <DataMigration
          titleLine1={home.dataMigration.titleLine1}
          titleLine2={home.dataMigration.titleLine2}
          desc={home.dataMigration.desc}
          items={home.dataMigration.items}
        />
      </section>

      <section id="clients" className="py-16 md:py-24 relative">
        <Clients
          titleLine1={home.clients.titleLine1}
          titleLine2={home.clients.titleLine2}
          subtitle={home.clients.subtitle}
          intro={home.clients.intro}
          items={home.clients.items}
          imageAlt={home.clients.imageAlt}
        />
      </section>

      <section id="cta" className="py-16 relative">
        <Cta
          title={home.cta.defaultTitle}
          start={app.cta.start}
          contact={app.cta.contact}
        />
      </section>

      <section id="faq" className="py-16 md:py-24">
        <Faq heading={home.faq.heading} items={home.faq.items} />
      </section>

      <section id="partners" className="py-12 md:py-20">
        <Partners
          heading={home.partners.heading}
          name={home.partners.name}
          nameSup={home.partners.nameSup}
          desc={home.partners.desc}
          note={home.partners.note}
        />
      </section>

      <section id="testimonials" className="py-12 md:py-20 bg-secondary/50">
        <Testimonials
          heading={home.testimonials.heading}
          prevAria={home.testimonials.prevAria}
          nextAria={home.testimonials.nextAria}
          list={home.testimonials.list}
        />
      </section>

      <section id="join" className="py-16 md:py-24">
        <Join
          titleLine1={home.join.titleLine1}
          titleLine2={home.join.titleLine2}
          ctaStart={app.cta.start}
          ctaContact={app.cta.contact}
        />
      </section>
    </>
  );
};

export default Page;
