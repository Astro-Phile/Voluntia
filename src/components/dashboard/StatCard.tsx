import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  className?: string;
}

const StatCard = ({
  icon,
  title,
  value,
  change,
  isPositive = true,
  className,
}: StatCardProps) => {
  return (
    <Card
      variant="stats"
      className={cn("flex flex-col items-center p-4 md:p-6", className)}
    >
      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="text-center">
        <p className="mb-1 text-sm font-medium text-muted-foreground">{title}</p>
        <h4 className="text-2xl font-bold">{value}</h4>
        {change && (
          <p
            className={cn(
              "mt-1 text-xs font-medium",
              isPositive ? "text-success" : "text-destructive"
            )}
          >
            {isPositive ? "+" : "-"}
            {change}
          </p>
        )}
      </div>
    </Card>
  );
};

export default StatCard;