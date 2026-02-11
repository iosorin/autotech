"use client";

import { Lead } from "@/components/sections/lead";
import { Split } from "@/components/sections/split";
import { Links } from "@/components/sections/links";
import { app, support } from "@content";

export default function SupportPage() {
  const p = support;
  return (
    <>
      <Lead id="support" title={p.title} hint={p.subtitle} />
      <Split
        id="response"
        responseHeading={p.responseHeading}
        responseTypes={p.responseTypes}
      />
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
    </>
  );
}
