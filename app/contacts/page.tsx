"use client";

import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { DesignedFor } from "@/components/sections/designed-for";
import { IconCards } from "@/components/sections/icon-cards";
import { MissionBlock } from "@/components/sections/mission-block";
import { ContactFormBlock } from "@/components/sections/contact-form-block";
import { ContactLinks } from "@/components/sections/contact-links";
import { Requisites } from "@/components/sections/requisites";
import { app, contacts } from "@content";

export default function ContactsPage() {
  const p = contacts;
  return (
    <>
      <PageHero
        id="contacts"
        title={p.title}
        hint={
          <>
            {p.supportHint}
            <Link href="/support" className="text-primary underline hover:text-primary/80">
              {p.supportLinkLabel}
            </Link>
          </>
        }
      />
      <DesignedFor id="designed-for" heading={p.designedForHeading} blocks={p.designedFor} />
      <IconCards id="dev" heading={p.devHeading} items={p.dev} />
      <MissionBlock id="mission" heading={p.missionHeading} items={p.mission} />
      <ContactFormBlock id="form" heading={p.contactHeading} />
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
      <Requisites
        id="requisites"
        heading={p.requisitesHeading}
        bankHeading={p.bankHeading}
        accountLabel={p.accountLabel}
        company={{
          short: app.company.short,
          addressFull: app.company.addressFull,
          inn: app.company.inn,
          kpp: app.company.kpp,
          ogrn: app.company.ogrn,
          okpo: app.company.okpo,
        }}
        bank={app.company.bank}
      />
    </>
  );
}
