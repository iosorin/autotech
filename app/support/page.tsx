import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
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
      <section id="support" className="pt-from-header relative">
        <div className="gradlayer bg-gradient-lime" />

        <div className="mx-auto my-4">
          <Lead label={p.subtitle} title={p.title} titleFirst />
          <Split
            responseHeading={p.responseHeading}
            responseTypes={p.responseTypes}
          />
        </div>
        <div className="fade-bottom" />
      </section>

      <section id="other-contact" className="pb-16">
        <div className="max-w-md mx-auto px-4">
          <Links
            heading={p.otherContactHeading}
            labels={p.contactLabels}
            telegramUrl={app.supportTelegramUrl}
            telegramLabel={app.telegramSupport}
            email={app.supportEmail}
            phone={app.phone}
            phoneRaw={app.phoneRaw}
          />
        </div>
      </section>
    </>
  );
}
