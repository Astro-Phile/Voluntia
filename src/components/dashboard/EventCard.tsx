import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPinIcon, UsersIcon, CalendarIcon, ImageIcon, BarChart3Icon, EditIcon } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  volunteers: number;
  maxVolunteers: number;
  category?: string;
  organizers?: string;
}

const EventCard = ({
  title,
  date,
  location,
  volunteers,
  maxVolunteers,
  category = "Health Camp",
  organizers = "Dr. Smith, Nurse Jane",
}: EventCardProps) => {
  const progressPercentage = (volunteers / maxVolunteers) * 100;
  
  return (
    <Card variant="interactive" className="h-full overflow-hidden">
      {/* Event Image/Icon Section */}
      <div className="relative h-24 bg-gradient-to-br from-muted/30 to-muted/60 flex items-center justify-center">
        <div className="w-16 h-16 bg-background/80 rounded-full flex items-center justify-center border-2 border-border/50">
          <ImageIcon className="h-8 w-8 text-muted-foreground" />
        </div>
        {category && (
          <Badge 
            variant="secondary" 
            className="absolute top-2 right-2 bg-accent/90 text-accent-foreground font-medium"
          >
            {category}
          </Badge>
        )}
      </div>

      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <div className="space-y-1">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MapPinIcon className="h-3.5 w-3.5" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <CalendarIcon className="h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="pb-4">
        {organizers && (
          <div className="mb-3">
            <p className="text-xs font-medium text-muted-foreground">Organizers</p>
            <p className="text-sm">{organizers}</p>
          </div>
        )}
        
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-1">
              <UsersIcon className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="font-medium">{volunteers} / {maxVolunteers} volunteers</span>
            </div>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300" 
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t bg-muted/20 p-3">
        <Button variant="ghost" size="sm" className="gap-1">
          <EditIcon className="h-3.5 w-3.5" />
          Edit
        </Button>
        <Button variant="ghost" size="sm" className="gap-1">
          <BarChart3Icon className="h-3.5 w-3.5" />
          Track
        </Button>
      </CardFooter>
    </Card>
  );
};

export default EventCard;