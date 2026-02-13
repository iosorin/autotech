"use client";

type Update = { date: string; items: string[] };

type Props = {
  updates: Update[];
};

export const Changelog = ({ updates }: Props) => {
  return (
    <div className="space-y-12">
      {updates.map((update) => (
        <div
          key={update.date}
          className="relative rounded-2xl bg-white shadow-lg p-6 md:p-8"
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
                    className="flex gap-2 text-sm leading-relaxed"
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
  );
};

export default Changelog;
