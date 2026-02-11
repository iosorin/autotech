import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function EventsPage() {
  return (
    <>
      <Header />
      <main className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-center text-4xl font-bold text-foreground md:text-5xl">
            Мероприятия
          </h1>
          <p className="mb-12 text-center text-muted-foreground">
            Закрытые мероприятия для собственников и управляющих автомойками,
            детейлинг-центрами и шиномонтажами
          </p>

          {/* Upcoming Event */}
          <div className="rounded-3xl bg-gradient-to-br from-accent to-[#e6fff0] p-8 text-center md:p-12">
            <p className="mb-4 text-sm font-semibold text-primary">
              {"12 февраля 2026 | 18:00 – 22:00"}
            </p>
            <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
              Закрытое мероприятие
            </h2>
            <p className="mb-2 text-muted-foreground">
              для собственников и управляющих автомойками, детейлинг-центрами и
              шиномонтажами
            </p>
            <p className="mb-8 text-sm font-medium text-primary">
              Регистрация обязательна!
            </p>
            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Узнать детали
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Past Events */}
          <div className="mt-16">
            <h2 className="mb-8 text-2xl font-bold text-foreground">
              Прошедшие мероприятия
            </h2>
            <div className="space-y-6">
              {[
                {
                  date: "15 октября 2025",
                  title:
                    "Встреча собственников автомоек: автоматизация процессов",
                  attendees: "35 участников",
                },
                {
                  date: "20 августа 2025",
                  title:
                    "Конференция: Будущее детейлинг-индустрии в России",
                  attendees: "50 участников",
                },
              ].map((event) => (
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
