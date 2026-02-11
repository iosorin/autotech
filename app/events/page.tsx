import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { pages } from "@content";

export default function EventsPage() {
  const p = pages.events;
  return (
    <>
      <Header />
      <main className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-center text-4xl font-bold text-foreground md:text-5xl">
            {p.title}
          </h1>
          <p className="mb-12 text-center text-muted-foreground">
            {p.subtitle}
          </p>

          <div className="rounded-3xl bg-gradient-to-br from-accent to-[#e6fff0] p-8 text-center md:p-12">
            <p className="mb-4 text-sm font-semibold text-primary">
              {p.upcomingDate}
            </p>
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              {p.upcomingTitle}
            </h2>
            <p className="mb-2 text-muted-foreground">
              {p.upcomingDesc1} {p.upcomingDesc2}
            </p>
            <p className="mb-8 text-sm font-medium text-primary">
              {p.upcomingCta}
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {p.button}
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-foreground">
              {p.pastHeading}
            </h2>
            <div className="space-y-6">
              {p.past.map((event) => (
                <div
                  key={event.date}
                  className="rounded-2xl border border-border p-6"
                >
                  <p className="mb-2 text-sm text-primary">{event.date}</p>
                  <h3 className="mb-1 text-lg font-bold text-foreground">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {event.attendees}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
