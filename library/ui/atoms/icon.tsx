"use client";

import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";
import { memo, } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

const customIcons = {
    telegram: (props: IIcon) => <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={props.className} width={props.size} height={props.size}>
        <path
            d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.269c-.145.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.332-.373-.119l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.833.952z" />
    </svg>,
};


export type IIcon = Omit<React.ComponentProps<typeof DynamicIcon>, "size" | "name"> & { name?: string; size?: number };

const cache = new Map<string, React.ComponentType<IIcon>>();

const kebab = (s?: string) => s?.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");

const Loading = (props: IIcon) => (
    <span
        className="inline-block animate-pulse bg-muted rounded"
        style={{ width: props.size, height: props.size }}
    />
);

const getIcon = (key?: string, props?: IIcon) => {
    // const key = pascalToKebab(props.name ?? "");
    if (!key) return null;
    if (key in customIcons) return customIcons[key as keyof typeof customIcons];
    // if (key === "telegram") return <img src={telegramIcon.src} alt="Telegram" />;
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
    const Component = getIcon(props.name, props) || getIcon(kebab(props.name), props);
    if (!Component) return null;

    return <Component {...props} />;
});

Icon.displayName = "Icon";

export default Icon;