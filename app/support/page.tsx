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
      <section id="support" className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4">
          <Lead title={p.title} hint={p.subtitle} />
        </div>
      </section>

      <section id="response" className="py-8">
        <div className="max-w-5xl mx-auto px-4">
          <Split
            responseHeading={p.responseHeading}
            responseTypes={p.responseTypes}
          />
        </div>
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
