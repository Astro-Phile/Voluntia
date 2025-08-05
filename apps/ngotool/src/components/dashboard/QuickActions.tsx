import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  PlusIcon,
  QrCodeIcon,
  UserPlusIcon,
  FileTextIcon,
  MapPinIcon,
  BellIcon,
  DollarSignIcon,
  MessageSquareIcon,
} from "lucide-react";

const QuickActions = () => {
  const quickActions = [
    {
      icon: <PlusIcon className="h-4 w-4" />,
      label: "Create Event",
      variant: "default" as const,
      className: "bg-primary text-primary-foreground hover:bg-primary/90",
    },
    {
      icon: <UserPlusIcon className="h-4 w-4" />,
      label: "Add Volunteer",
      variant: "secondary" as const,
    },
    {
      icon: <QrCodeIcon className="h-4 w-4" />,
      label: "Generate QR",
      variant: "outline" as const,
    },
    {
      icon: <FileTextIcon className="h-4 w-4" />,
      label: "Quick Report",
      variant: "outline" as const,
    },
    {
      icon: <MapPinIcon className="h-4 w-4" />,
      label: "Live Volunteer Map",
      variant: "outline" as const,
    },
    {
      icon: <DollarSignIcon className="h-4 w-4" />,
      label: "Donation Request",
      variant: "outline" as const,
    },
    {
      icon: <BellIcon className="h-4 w-4" />,
      label: "Send Alert",
      variant: "outline" as const,
    },
    {
      icon: <MessageSquareIcon className="h-4 w-4" />,
      label: "Volunteer Feedback",
      variant: "outline" as const,
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Smart Tools</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
          {quickActions.map((action, index) => (
            <Button
              key={index}
              variant={action.variant}
              size="sm"
              className={`h-auto flex-col gap-2 py-4 ${action.className || ""}`}
            >
              {action.icon}
              <span className="text-xs font-medium">{action.label}</span>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActions;