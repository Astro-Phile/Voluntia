import { cn } from "@/lib/utils";

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  time: string;
  iconClassName?: string;
}

const ActivityItem = ({
  icon,
  title,
  time,
  iconClassName,
}: ActivityItemProps) => {
  return (
    <div className="flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-muted/50">
      <div
        className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full",
          iconClassName || "bg-primary/10 text-primary"
        )}
      >
        {icon}
      </div>
      <div className="flex flex-col">
        <p className="font-medium leading-tight">{title}</p>
        <p className="text-xs text-muted-foreground">{time}</p>
      </div>
    </div>
  );
};

export default ActivityItem;