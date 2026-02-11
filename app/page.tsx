import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/home/hero-section";
import { EventBanner } from "@/components/home/event-banner";
import { FeaturesSection } from "@/components/home/features-section";
import { UnifiedAccountSection } from "@/components/home/unified-account-section";
import { ExtraFeaturesSection } from "@/components/home/extra-features-section";
import { DataMigrationSection } from "@/components/home/data-migration-section";
import { NewClientsSection } from "@/components/home/new-clients-section";
import { CtaSection } from "@/components/home/cta-section";
import { FaqSection } from "@/components/home/faq-section";
import { PartnersSection } from "@/components/home/partners-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { JoinSection } from "@/components/home/join-section";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <EventBanner />
        <FeaturesSection />
        <UnifiedAccountSection />
        <ExtraFeaturesSection />
        <DataMigrationSection />
        <NewClientsSection />
        <CtaSection />
        <FaqSection />
        <PartnersSection />
        <TestimonialsSection />
        <JoinSection />
      </main>
      <Footer />
    </>
  );
}
