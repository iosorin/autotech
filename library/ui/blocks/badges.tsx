import Enter from "../atoms/enter";

type Props = {
    list: { label: string; icon?: React.ReactNode }[];
};

export const Badges = ({ list }: Props) => {
    return (
        <Enter variant="fade-up" duration={600}>
            <div className="text-center">
                <div className="flex flex-wrap justify-center gap-3">
                    {list.map((device) => {
                        return (
                            <div
                                key={device.label}
                                className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
                            >
                                {device.icon}
                                <span className="text-lg">{device.label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </Enter>
    );
};

export default Badges;