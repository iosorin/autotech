"use client";

import { PageHero } from "@/components/sections/page-hero";
import { SupportLayout } from "@/components/sections/support-layout";
import { ContactLinks } from "@/components/sections/contact-links";
import { app, support } from "@content";

export default function SupportPage() {
  const p = support;
  return (
    <>
      <PageHero
        id="support"
        title={p.title}
        hint={p.subtitle}
      />
      <SupportLayout
        id="response"
        responseHeading={p.responseHeading}
        responseTypes={p.responseTypes}
      />
      <ContactLinks
        id="other-contact"
        heading={p.otherContactHeading}
        labels={p.contactLabels}
        telegramUrl={app.supportTelegramUrl}
        telegramLabel={app.telegramSupport}
        email={app.supportEmail}
        phone={app.phone}
        phoneRaw={app.phoneRaw}
      />
    </>
  );
}
