"use client";

import Link from "next/link";
import { Lead } from "@/components/sections/lead";
import { Grid } from "@/components/sections/grid";
import { Icons } from "@/components/sections/icons";
import { Form } from "@/components/sections/form";
import { Links } from "@/components/sections/links";
import { Requisites } from "@/components/sections/requisites";
import { app, contacts } from "@content";

export default function ContactsPage() {
  const p = contacts;
  return (
    <>
      <Lead
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
      <Grid id="designed-for" heading={p.designedForHeading} blocks={p.designedFor} />
      <Icons id="dev" heading={p.devHeading} items={p.dev} />
      <Icons id="mission" heading={p.missionHeading} items={p.mission} variant="stack" />
      <Form id="form" heading={p.contactHeading} />
      <Links
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
