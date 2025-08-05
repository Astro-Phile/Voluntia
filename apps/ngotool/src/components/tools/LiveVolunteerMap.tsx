import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPinIcon, UserIcon, ClockIcon } from "lucide-react";

const LiveVolunteerMap = () => {
  const activeVolunteers = [
    { id: 1, name: "Alex Johnson", location: "City Hospital", status: "active", duration: "2h 15m" },
    { id: 2, name: "Priya Sharma", location: "Community Hall", status: "active", duration: "1h 45m" },
    { id: 3, name: "Rahul Mehta", location: "Central Park", status: "break", duration: "3h 20m" },
    { id: 4, name: "Maya Patel", location: "Tech Hub", status: "active", duration: "45m" },
    { id: 5, name: "Vikram Singh", location: "Rural Village", status: "active", duration: "4h 10m" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-success/10 text-success";
      case "break":
        return "bg-accent/10 text-accent-foreground";
      default:
        return "bg-muted/50 text-muted-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPinIcon className="h-5 w-5" />
          Live Volunteer Map
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {activeVolunteers.map((volunteer) => (
            <div key={volunteer.id} className="flex items-center justify-between p-3 rounded-lg border bg-card/50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <UserIcon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">{volunteer.name}</p>
                  <p className="text-xs text-muted-foreground flex items-center gap-1">
                    <MapPinIcon className="h-3 w-3" />
                    {volunteer.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <ClockIcon className="h-3 w-3" />
                  {volunteer.duration}
                </div>
                <Badge variant="outline" className={getStatusColor(volunteer.status)}>
                  {volunteer.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveVolunteerMap;