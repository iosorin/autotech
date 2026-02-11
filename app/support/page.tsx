import type { Metadata } from "next";
import { Lead } from "@ui/blocks/lead";
import { Split } from "@ui/blocks/split";
import { Links } from "@ui/blocks/links";
import { app, seo, support } from "@data";


export const metadata: Metadata = {
  title: seo.pages.support.title,
  description: seo.pages.support.description,
};

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
