"use client";

import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";
import { memo, } from "react";
import { DynamicIcon } from "lucide-react/dynamic";


export type IIcon = Omit<React.ComponentProps<typeof DynamicIcon>, "size" | "name"> & { name?: string; size?: number };

const cache = new Map<string, React.ComponentType<IIcon>>();
const pascalToKebab = (name: string) =>
    name.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");

const Loading = (props: IIcon) => (
    <span
        className="inline-block animate-pulse bg-muted rounded"
        style={{ width: props.size, height: props.size }}
    />
);

const getIcon = (props: IIcon) => {
    const key = pascalToKebab(props.name ?? "");
    if (!key) return null;
    if (!cache.has(key)) {
        const loader = key in dynamicIconImports ? dynamicIconImports[key as keyof typeof dynamicIconImports] : null;
        if (!loader) return null;
        const Icon = dynamic(loader, {
            ssr: false,
            loading: () => <Loading {...props} />,
        });

        cache.set(key, Icon as any);
    }

    return cache.get(key);
};


export const Icon = memo((props: IIcon) => {
    const Component = getIcon(props);
    if (!Component) return null;

    return <Component {...props} />;
});

Icon.displayName = "Icon";

export default Icon;