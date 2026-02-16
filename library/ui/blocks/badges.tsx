import Enter from "@ui/atoms/enter";
import Icon from "@ui/atoms/icon";

type Props = {
  list: { label: string; icon?: React.ComponentProps<typeof Icon> }[];
};

export const Badges = ({ list }: Props) => {
  return (
    <Enter variant="fade-up" duration={600}>
      <div className="text-center">
        <div className="flex flex-wrap justify-center gap-3">
          {list.map((device) => (
            <div
              key={device.label}
              className="inline-flex items-center gap-2.5 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
            >
              <Icon {...device.icon} />
              <span className="text-lg">{device.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Enter>
  );
};

export default Badges;