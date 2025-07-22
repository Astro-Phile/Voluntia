import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPinIcon, UsersIcon, CalendarIcon } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  volunteers: number;
  maxVolunteers: number;
}

const EventCard = ({
  title,
  date,
  location,
  volunteers,
  maxVolunteers,
}: EventCardProps) => {
  return (
    <Card variant="interactive" className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription className="flex items-center gap-1">
          <CalendarIcon className="h-3.5 w-3.5" />
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPinIcon className="h-3.5 w-3.5" />
          <span>{location}</span>
        </div>
        <div className="flex items-center gap-1 text-sm text-muted-foreground">
          <UsersIcon className="h-3.5 w-3.5" />
          <span>
            {volunteers}/{maxVolunteers} volunteers
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between border-t bg-muted/20 p-3">
        <Button variant="outline" size="sm">
          Edit
        </Button>
        <Button variant="default" size="sm">
          Manage
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;