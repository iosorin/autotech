import { HeroSection } from "@/components/sections/hero";
import Event from "@/components/sections/event";
import { FeaturesSection } from "@/components/sections/features";
import Account from "@/components/sections/account";
import { ExtraFeaturesSection } from "@/components/sections/extra";
import { DataMigrationSection } from "@/components/sections/migration";
import Clients from "@/components/sections/clients";
import Cta from "@/components/sections/cta";
import { FaqSection } from "@/components/sections/faq";
import { PartnersSection } from "@/components/sections/partners";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { JoinSection } from "@/components/sections/join";
import { app, home } from "@content";

export default function Page() {
  return (
    <>
      <HeroSection />

      <Event
        id="event"
        date={home.eventBanner.date}
        title={home.eventBanner.title}
        line1={home.eventBanner.line1}
        line2={home.eventBanner.line2}
        cta={home.eventBanner.cta}
        button={home.eventBanner.button}
      />

      <FeaturesSection />

      <Account
        titleLine1={home.account.titleLine1}
        titleLine2={home.account.titleLine2}
        descLine1={home.account.descLine1}
        descLine2={home.account.descLine2}
        subtitle={home.account.subtitle}
        cards={home.account.cards}
      />

      <ExtraFeaturesSection />
      <DataMigrationSection />

      <Clients
        titleLine1={home.clients.titleLine1}
        titleLine2={home.clients.titleLine2}
        subtitle={home.clients.subtitle}
        intro={home.clients.intro}
        items={home.clients.items}
        imageAlt={home.clients.imageAlt}
      />

      <Cta
        title={home.cta.defaultTitle}
        start={app.cta.start}
        contact={app.cta.contact}
      />

      <FaqSection />
      <PartnersSection />
      <TestimonialsSection />
      <JoinSection />
    </>
  );
}
