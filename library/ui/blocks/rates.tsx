import { cn } from "@utils";

type Discount = { range: string; percent: string };

type Props = {
  discounts: Discount[];
  icon?: React.ReactNode;
};

export const Rates = ({ discounts, icon }: Props) => {
  const renderRange = (range: string, inTable?: boolean) => {
    return <div className={cn("flex items-center justify-center gap-2", inTable ? "justify-start mb-0" : "")}>
      {icon ? <span className="shrink-0">{icon}</span> : null}
      <p className="shrink-0 text-base font-medium text-accent md:text-lg">{range}</p>
    </div>
  }
  return (
    <div className="w-full">
      <div className="mx-auto overflow-hidden rounded-xl border border-accent/30 lg:hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-accent/5">
              <th scope="col" className="px-3 py-2.5 text-left font-semibold">
                Диапазон
              </th>
              <th scope="col" className="px-3 py-2.5 text-right font-semibold">
                Скидка
              </th>
            </tr>
          </thead>
          <tbody>
            {discounts.map((row) => (
              <tr key={row.range} className="border-t border-accent/30 even:bg-accent/5">
                <td className="px-3 py-2 font-semibold">{renderRange(row.range, true)}</td>
                <td className="px-3 py-2 text-right font-bold tabular-nums text-lg">
                  {row.percent}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="hidden flex-wrap justify-center gap-5 lg:flex lg:gap-10">
        {discounts.map((row) => (
          <div key={row.range} className="text-center md:flex-1 flex flex-col gap-2">
            {renderRange(row.range)}
            <p className="ml-9 text-3xl font-bold md:text-5xl">{row.percent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
