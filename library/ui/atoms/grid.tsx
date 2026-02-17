import React from 'react';
import * as ATOMS from './index';
import { cn } from '@utils';

const registry = ATOMS as Record<string, React.ElementType | undefined>;

type AtomProps<T extends keyof typeof ATOMS> = React.ComponentProps<typeof ATOMS[T]>;

type IGridGap = 'none' | 'sm' | 'md' | 'lg';

type IGridItem = {
    name: string;
    type: 'div';
    props?: React.HTMLAttributes<HTMLDivElement>;
    className?: string;
} | {
    [K in keyof typeof ATOMS]: {
        name: string;
        type: K;
        props?: AtomProps<K>;
        className?: string;
    }
}[keyof typeof ATOMS];

type IResolvable = {
    type: string;
    props?: Record<string, any>;
}

export type IGrid = {
    items: IGridItem[];
    areas: string[];
    mobileAreas?: string[];
    cols?: number | string;
    rows?: number | string;
    gap?: IGridGap | string;
    className?: string;
    mobileBreakpointPx?: number;
}

const DEFAULT_BREAKPOINT_PX = 768;

const GAP_MAP: Record<IGridGap, string> = {
    none: '0',
    sm: '0.5rem',
    md: '1.5rem',
    lg: '2rem',
};

const splitAreas = (rows: string[]) =>
    rows.flatMap(r => r.split(/\s+/).filter(Boolean));

const unique = <T,>(arr: T[]) => [...new Set(arr)];

const isResolvable = (val: unknown): val is IResolvable =>
    typeof val === 'object' &&
    val !== null &&
    !React.isValidElement(val) &&
    'type' in val &&
    typeof (val as any).type === 'string' &&
    ((val as any).type === 'div' || (val as any).type in registry);

const resolveItem = (item: IResolvable): React.ReactNode => {
    const Component = item.type === 'div' ? 'div' : registry[item.type];

    if (!Component) {
        console.error(`Grid: component "${item.type}" not found in registry`);
        return null;
    }

    return <Component {...resolveProps(item.props ?? {})} />;
};

const resolveProps = (props: Record<string, any>): Record<string, any> =>
    Object.fromEntries(
        Object.entries(props).map(([key, val]) => [
            key,
            Array.isArray(val)
                ? val.map(v => isResolvable(v) ? resolveItem(v) : v)
                : isResolvable(val) ? resolveItem(val) : val,
        ])
    );

export const Grid = React.memo(({
    items,
    areas,
    mobileAreas,
    cols,
    rows = 'auto',
    gap = 'md',
    className,
    mobileBreakpointPx = DEFAULT_BREAKPOINT_PX,
}: IGrid) => {
    const uid = React.useId().replace(/:/g, '');
    const scopedClass = `grid-responsive-${uid}`;

    const itemsMap = React.useMemo(
        () => new Map(items.map(item => [item.name, item])),
        [items]
    );

    const areaNames = React.useMemo(() => {
        const src = mobileAreas ? [...areas, ...mobileAreas] : areas;
        return unique(splitAreas(src));
    }, [areas, mobileAreas]);

    const colCount = areas[0].split(/\s+/).filter(Boolean).length;
    const gridCols = cols
        ? typeof cols === 'number' ? `repeat(${cols}, 1fr)` : cols
        : `repeat(${colCount}, 1fr)`;
    const gridRows = typeof rows === 'number' ? `repeat(${rows}, auto)` : rows;
    const desktopAreasStr = areas.map(row => `"${row}"`).join(' ');
    const mobileAreasStr = mobileAreas?.map(row => `"${row}"`).join(' ') ?? desktopAreasStr;
    const gapValue = (gap in GAP_MAP ? GAP_MAP[gap as IGridGap] : gap) as string;

    const style = {
        display: 'grid',
        gridTemplateColumns: gridCols,
        gridTemplateRows: gridRows,
        gridTemplateAreas: desktopAreasStr,
        gap: gapValue,
        '--grid-cols-mobile': '1fr',
        '--grid-areas-mobile': mobileAreasStr,
    } as React.CSSProperties;

    return (
        <>
            {mobileAreas && (
                <style>{`
                    @media (max-width: ${mobileBreakpointPx}px) {
                        .${scopedClass} {
                            grid-template-columns: var(--grid-cols-mobile) !important;
                            grid-template-areas: var(--grid-areas-mobile) !important;
                        }
                    }
                `}</style>
            )}
            <div className={cn(scopedClass, className)} style={style}>
                {areaNames.map(name => {
                    const item = itemsMap.get(name);
                    if (!item) return null;

                    const Component = item.type === 'div'
                        ? 'div'
                        : registry[item.type];

                    if (!Component) {
                        if (process.env.NODE_ENV === 'development') {
                            console.error(`Grid: component "${item.type}" not found in registry`);
                        }
                        return null;
                    }

                    const resolvedProps = item.props
                        ? resolveProps(item.props as Record<string, any>)
                        : {};

                    return (
                        <div key={name} style={{ gridArea: name }} className={item.className}>
                            <Component {...resolvedProps} />
                        </div>
                    );
                })}
            </div>
        </>
    );
});

Grid.displayName = 'Grid';

export default Grid;