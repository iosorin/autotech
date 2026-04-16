"use client";

import { useId, useState } from "react";
import * as ut from "@utils";
import { Button } from "../atoms/button";
import { Tabs, TabsList, TabsTrigger } from "../atoms/tabs";

export type Col = { id: string; label: string; compact?: string };
export type Row = {
  name: string;
  icons: React.ReactNode[];
  values: Record<string, string>;
  selected?: boolean;
  highlighted?: boolean;
  badge?: string;
};

type Setup = {
  currency: string;
  slider: { min?: number; max?: number; defaultValue?: number; label?: string; digitsAria?: string; pointsLabel?: string; digitsHint?: string };
  fixed?: boolean;
  suffix?: string[];
  discountCap?: number;
  network: { min: number; max: number; percent: number }[];
  periodExtra: Record<string, number>;
  defaultPeriod?: string;
  quick?: number[];
};

export type Version = { id: string; label: string; notes: string[]; multiplier?: number; heading?: string; subtitle?: string };

type Props = { cols: Col[]; rows: Row[]; className?: string; setup: Setup, disclaimer?: string, children?: React.ReactNode, onRow?: (row: Row) => void, onCol?: (col: Col) => void, multiplier?: number, compact?: boolean, versions?: Version[], discounts?: React.ReactNode, onVersion?: (version: Version) => void };

const THUMB_MAX = 200;

const placesFromThumb = (thumb: number, lo: number, hi: number) => {
  if (hi <= lo) return lo;
  const t = ut.clamp(thumb, 0, THUMB_MAX) / THUMB_MAX;
  if (lo <= 0) return ut.clamp(Math.round(lo + t * (hi - lo)), lo, hi);
  return ut.clamp(Math.round(lo * Math.pow(hi / lo, t)), lo, hi);
};

const thumbFromPlaces = (spots: number, lo: number, hi: number) => {
  if (hi <= lo) return 0;
  const s = ut.clamp(spots, lo, hi);
  if (lo <= 0) return ut.clamp(Math.round(((s - lo) / (hi - lo)) * THUMB_MAX), 0, THUMB_MAX);
  const t = Math.log(s / lo) / Math.log(hi / lo);
  return Number.isFinite(t) ? ut.clamp(Math.round(t * THUMB_MAX), 0, THUMB_MAX) : 0;
};

const priceCell = (
  setup: Setup,
  row: Row,
  colId: string,
  spots: number,
  networkPct: number,
  cap: number,
) => {
  const extra = setup.periodExtra[colId] ?? 0;
  const offCell = Math.min(cap, networkPct + extra);
  const u = ut.parseMoney(row.values[colId] ?? "0");
  const gross = setup.fixed ? u * spots : u;
  return gross * (1 - offCell / 100);
};

const discountCaption = (mesh: number, period: number, off: number) => {
  if (off <= 0) return "Скидка не применяется";
  const parts = [];
  if (mesh > 0) parts.push(`${mesh}% за объём сети`);
  if (period > 0) parts.push(`${period}% за срок оплаты`);
  if (parts.length === 0) return "По правилам тарифа";
  return off < mesh + period
    ? `${parts.join(" и ")}. Применено ${off}% с учётом лимита`
    : `${parts.join(" и ")}`;
};

const sliderClass = ut.cn(
  "h-2 w-full cursor-pointer appearance-none rounded-full bg-accent/10 accent-accent",
  "[&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-accent [&::-webkit-slider-thumb]:shadow-md",
  "[&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white [&::-moz-range-thumb]:bg-accent [&::-moz-range-thumb]:shadow-md"
);

const Sheet = ({
  cols,
  rows,
  active,
  picked,
  onPeriod,
  onPickPlan,
  setup,
  spots,
  mesh,
  cap,
  multiplier,
  className,
  spotsControl,
}: {
  cols: Col[];
  rows: Row[];
  active: string;
  picked: number;
  onPeriod: (id: string) => void;
  onPickPlan: (index: number) => void;
  setup?: Setup;
  spots?: number;
  mesh?: number;
  cap?: number;
  multiplier?: number;
  className?: string;
  spotsControl?: React.ReactNode;
}) => {
  const gridCols = `minmax(12rem, 3.5fr) repeat(${cols.length}, minmax(7rem, 1fr))`;
  const amount = (row: Row, colId: string) =>
    setup && spots !== undefined && mesh !== undefined && cap !== undefined
      ? ut.formatMoney(priceCell(setup, row, colId, spots, mesh, cap) * (multiplier ?? 1), setup.currency)
      : row.values[colId] ?? "";

  return (
    <div className={ut.cn("overflow-x-auto", className)}>
      <div className="w-full flex flex-col gap-2 md:gap-4">
        <div
          className="flex flex-col-reverse gap-4 md:grid"
          style={{ gridTemplateColumns: gridCols }}
        >
          <div className="md:max-w-[95%] mt-1 pl-2 md:pl-4">
            {spotsControl || <div className="hidden md:block" aria-hidden />}
          </div>

          <div className="flex flex-wrap justify-end gap-1 md:gap-2 md:contents">
            {cols.map((col) => (
              <Button
                key={col.id}
                variant={col.id === active ? "accent" : "ghost"}
                size="lgRes"
                className={col.id === active ? 'opacity-80' : ''}
                onClick={() => onPeriod(col.id)}
              >
                {col.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          {rows.map((row, idx) => (
            <div
              key={row.name}
              role="button"
              tabIndex={0}
              onClick={() => onPickPlan(idx)}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onPickPlan(idx))}
              className={ut.cn(
                "flex cursor-pointer items-stretch md:grid md:transition-colors rounded-full",
                idx === picked ? "bg-accent/10" : "hover:bg-accent/10"
              )}
              style={{ gridTemplateColumns: gridCols }}
            >
              <div className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3 md:max-w-none md:flex-none">
                <div className="hidden md:flex items-center md:min-w-[120px]">
                  {row.icons.map((icon, i) => (
                    <div
                      key={`${row.name}-${i}`}
                      className={ut.cn(
                        "flex size-11 items-center justify-center rounded-full bg-white text-base shadow-lg",
                        i > 0 && "-ml-2"
                      )}
                    >
                      {icon}
                    </div>
                  ))}
                </div>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-sm md:text-lg font-medium text-foreground">{row.name}</span>
                    {row.badge && (
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[0.65rem] font-semibold text-accent-foreground md:text-xs">
                        {row.badge}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 flex-col items-end justify-center px-2 py-3 md:hidden">
                <span className={ut.cn("text-base font-bold tabular-nums", idx === picked ? "text-accent" : "text-foreground")}>{amount(row, active)}</span>
              </div>
              {cols.map((col) => (
                <div key={col.id} className="hidden flex-col items-center justify-center px-2 py-3 text-center md:flex md:py-3.5">
                  <span className={ut.cn("text-base tabular-nums md:text-lg", col.id === active ? "font-bold text-accent" : "font-semibold text-foreground !opacity-85", col.id === active && idx === picked ? "opacity-100" : "opacity-70")}>
                    {amount(row, col.id)}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

const initialPick = (list: Row[]) => {
  const bySelect = list.findIndex((r) => r.selected);
  if (bySelect >= 0) return bySelect;
  const byGlow = list.findIndex((r) => r.highlighted);
  if (byGlow >= 0) return byGlow;
  return 0;
};

export const Calculator = ({ cols, rows, className, setup, disclaimer = "Цены указаны без учета налогов.\nУточните полную стоимость у менеджера", children, onRow, onCol, multiplier: base = 1, compact: locked, versions, discounts, onVersion }: Props) => {
  const id = useId();
  const [tab, setTab] = useState(versions?.[0]?.id ?? "");
  const current = versions?.find(v => v.id === tab) ?? versions?.[0];
  const multiplier = current?.multiplier ?? base;
  const compact = current ? multiplier > 1 : (locked ?? false);
  const handleTab = (value: string) => { setTab(value); const v = versions?.find(x => x.id === value); if (v) onVersion?.(v); };
  const [active, setActive] = useState(setup?.defaultPeriod ?? cols[0]?.id ?? "1m");
  const [picked, setPicked] = useState(() => initialPick(rows));

  const handlePeriod = (colId: string) => {
    setActive(colId);
    const col = cols.find(c => c.id === colId);
    if (col) onCol?.(col);
  };
  const handlePick = (index: number) => {
    setPicked(index);
    if (rows[index]) onRow?.(rows[index]);
  };
  const [draft, setDraft] = useState<string | null>(null);

  const lo = setup?.slider.min ?? 1;
  const edge = setup?.slider.max ?? 100;
  const quick = setup?.quick ?? [1, 2, 5, 7, 10];
  const defaultSpots = ut.clamp(setup?.slider.defaultValue ?? quick[0] ?? 1, lo, edge);
  const [presetValue, setPresetValue] = useState(() => defaultSpots);
  const [customValue, setCustomValue] = useState(() => quick.includes(defaultSpots) ? "" : String(defaultSpots));

  const raw = draft !== null ? draft : customValue;
  const typed = ut.liftNumber(raw);
  const hi = Math.max(edge, presetValue, typed ?? 0);

  const resolveSpots = () => {
    if (draft !== null) {
      const parsed = ut.liftNumber(draft);
      return parsed ? { spots: ut.clamp(parsed, lo, hi), fromField: true } : { spots: ut.clamp(presetValue, lo, hi), fromField: false };
    }
    const parsed = ut.liftNumber(customValue);
    return parsed ? { spots: ut.clamp(parsed, lo, hi), fromField: true } : { spots: ut.clamp(presetValue, lo, hi), fromField: false };
  };

  const { spots, fromField } = resolveSpots();
  const effective = compact ? 1 : spots;
  const digits = draft !== null ? draft : (customValue !== "" ? customValue : String(spots));

  const handleChip = (n: number) => {
    setDraft(null);
    setPresetValue(n);
    setCustomValue("");
  };

  const handleThumb = (thumb: number) => {
    setDraft(null);
    const v = placesFromThumb(thumb, lo, hi);
    setPresetValue(v);
    setCustomValue(String(v));
  };

  const handleDigitsChange = (v: string) => setDraft(v.replace(/\D/g, ""));
  const handleDigitsFocus = () => setDraft(customValue !== "" ? customValue : String(presetValue));
  const handleDigitsBlur = (raw: string) => {
    setDraft(null);
    const parsed = ut.liftNumber(raw.replace(/\D/g, ""));
    if (!parsed) {
      setCustomValue("");
      setPresetValue((v) => ut.clamp(v, lo, edge));
      return;
    }
    const v = ut.clamp(parsed, lo, hi);
    setPresetValue(v);
    setCustomValue("");
  };

  let mesh = 0, cap = 100, off = 0, suffix = "точек", caption = "", thumb = 0, total = 0, period = 0, gross = 0;
  if (setup) {
    const band = setup.network.find(b => effective >= b.min && effective <= b.max) ?? setup.network[0];
    period = setup.periodExtra[active] ?? 0;
    cap = setup.discountCap ?? 100;
    off = Math.min(cap, band.percent + period);
    suffix = setup.suffix ? ut.plural(effective, setup.suffix[0], setup.suffix[1], setup.suffix[2]) : "точек";
    caption = discountCaption(band.percent, period, off);
    mesh = band.percent;
    thumb = thumbFromPlaces(effective, lo, hi);
    const plan = rows[picked] ?? rows[0];
    const u = ut.parseMoney(plan.values[active] ?? "0");
    gross = (setup.fixed ? u * effective : u) * multiplier;
    total = priceCell(setup, plan, active, effective, band.percent, cap) * multiplier;
  }

  const renderVersions = () => {
    if (!versions?.length) return null;

    return (
      <Tabs value={tab} onValueChange={handleTab} className="flex justify-center px-2 pb-2">
        <TabsList className="flex max-md:flex-1 justify-center bg-accent/10 min-w-[55%]">
          {versions.map(v => <TabsTrigger className="flex-1 px-2 text-sm md:text-lg" key={v.id} value={v.id}>{v.label}</TabsTrigger>)}
        </TabsList>
      </Tabs>
    );
  };

  const renderSpots = (): React.ReactNode => {
    if (compact) return null;
    return (
      <div className="flex w-full flex-row items-center gap-4">
        <label
          htmlFor={`${id}-custom`}
          className="flex shrink-0 cursor-text items-baseline gap-2 border-b-[3px] border-transparent transition-all duration-200 hover:border-accent/55 focus-within:border-accent/55 md:gap-3 text-xl md:text-3xl"
        >
          <input
            id={`${id}-custom`}
            type="text"
            inputMode="numeric"
            autoComplete="off"
            aria-label={setup.slider.digitsAria ?? "Количество"}
            aria-describedby={setup.slider.digitsHint ? `${id}-hint` : undefined}
            value={digits}
            maxLength={4}
            onChange={e => handleDigitsChange(e.target.value)}
            onFocus={handleDigitsFocus}
            onBlur={e => handleDigitsBlur(e.target.value)}
            className="w-auto min-w-0 [field-sizing:content] shrink border-0 bg-transparent font-bold tabular-nums text-foreground outline-none ring-0 focus:ring-0 !text-accent text-[length:inherit]"
          />
          <span className="pointer-events-none select-none font-semibold leading-none text-[length:inherit]">{suffix}</span>
        </label>

        <div className="min-w-0 flex-1 px-0 md:px-1">
          <label className="sr-only" htmlFor={`${id}-range`}>{setup.slider.label ?? setup.slider.pointsLabel ?? "Количество точек"}</label>
          <input id={`${id}-range`} type="range" min={0} max={THUMB_MAX} step={1} value={thumb} onChange={e => handleThumb(Number(e.target.value))} className={sliderClass} />
        </div>
      </div>
    );
  };

  const renderChips = () => {
    if (!current?.notes?.length) return null;
    return (
      <div className="flex min-w-0 min-h-0 flex-1 flex-col gap-2 md:gap-3 text-left">
        <p className="text-base font-semibold tabular-nums pl-1">{current.label ?? "Примечания"}:</p>
        <div className="flex flex-col gap-1.5 md:gap-2.5">
          {current.notes.map((s) => <div key={s} className="flex items-start gap-2.5">
            <span className="inline-flex shrink-0 items-center justify-center font-bold leading-none text-accent text-lg" aria-hidden>✓</span>
            <span className="max-md:text-sm text-left leading-snug text-foreground">{s}</span>
          </div>)}
        </div>
      </div>
    );
  };

  // const offHint = () => {
  //   const bits: string[] = [];
  //   if (mesh > 0) bits.push(`${mesh}% за объём сети`);
  //   if (period > 0) bits.push(`${period}% за срок оплаты`);
  //   return bits.join(" и ");
  // };

  // const renderOff = () => {
  //   if (!off) return null;
  //   // if (off <= 0) return <p className="ml-auto max-w-prose text-xs text-muted-foreground">{caption}</p>;

  //   if (!(off > 0 && (mesh > 0 || period > 0))) return null;

  //   return (
  //     <div className="ml-auto flex max-w-prose flex-col items-end gap-1 text-right">
  //       <p className="text-lg font-bold tabular-nums text-accent">Скидка {off}%</p>
  //       {/* <p className="text-xs leading-snug text-muted-foreground">{offHint()}</p> */}
  //     </div>
  //   );
  // }

  const renderPrice = () => {
    return (
      <div className="flex min-w-0 flex-col text-right shrink-0">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap items-center justify-end">
            {/* {off > 0 && (
            <span className="text-2xl tabular-nums text-muted-foreground line-through mt-auto">
              {ut.formatMoney(gross, setup.currency)}
            </span>
          )} */}

            <span className="font-bold tabular-nums text-foreground text-3xl ml-4 mr-3">{ut.formatMoney(total, setup.currency)}</span>
          </div>

          {off > 0 && <p className="text-xl font-bold tabular-nums text-primary">Скидка {off}%</p>}



          {/* {renderOff()} */}
        </div>

        <div>
          <p className="text-sm font-medium leading-snug text-muted-foreground mt-1.5 mb-2.5">{disclaimer}</p>
          <div className="ml-auto">
            {children}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-2 md:gap-4">
      {renderVersions()}
      <div className={ut.cn("rounded-2xl p-3 md:p-5 lg:py-5.5 lg:px-6", className)}>
        <Sheet
          cols={cols}
          rows={rows}
          active={active}
          picked={picked}
          onPeriod={handlePeriod}
          onPickPlan={handlePick}
          setup={setup}
          spots={setup ? effective : undefined}
          mesh={setup ? mesh : undefined}
          cap={setup ? cap : undefined}
          multiplier={multiplier}
          className="md:mt-2 mb-3 md:mb-5"
          spotsControl={renderSpots()}
        />
        <div className="flex flex-col gap-3 md:gap-5 md:flex-row md:items-stretch md:justify-between px-2">
          {renderChips()}
          {renderPrice()}
        </div>
      </div>

      {!compact && discounts}
    </div>
  );
};
