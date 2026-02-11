import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { pages } from "@content";

export default function UpdatesPage() {
  const p = pages.updates;
  return (
    <>
      <Header />
      <main className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="mb-2 text-center text-sm text-muted-foreground">
            {p.subtitle}
          </p>
          <h1 className="mb-12 text-center text-4xl font-bold text-foreground md:text-5xl">
            {p.title}
          </h1>

          <div className="space-y-12">
            {p.list.map((update) => (
              <div
                key={update.date}
                className="relative rounded-2xl border-2 border-primary/30 p-6 md:p-8"
              >
                <span className="mb-6 inline-block rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-card">
                  {update.date}
                </span>
                <div className="mt-2 flex gap-6">
                  <div className="flex-1">
                    <ul className="space-y-4">
                      {update.items.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-foreground" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="hidden w-48 flex-shrink-0 md:block">
                    <div className="h-48 w-full rounded-xl bg-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
