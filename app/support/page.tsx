import type { Metadata } from "next";
import { Lead } from "@ui/atoms/lead";
import { Links } from "@ui/blocks/links";
import { app, seo, support } from "@data";
import { Contact } from "@ui/blocks/contact";
import { Types } from "@ui/blocks/types";

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

        <div className="flex flex-col gap-12">

          <Lead label={p.subtitle} title={p.title} titleFirst />
          <div className="md:w-[60%] mx-auto">
            <Contact topics={p.topics} />
          </div>
        </div>

      </section>

      <section id="support-types" className="pb-16">
        <Types heading={p.responseHeading} types={p.types} />
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
