import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  PlusIcon,
  SearchIcon,
  FilterIcon,
  GridIcon,
  ListIcon,
  MessageSquareIcon,
  ClipboardListIcon,
  CoinsIcon,
  StarIcon,
  MapPinIcon,
  CalendarIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Volunteer {
  id: number;
  name: string;
  avatar: string;
  location: string;
  joinDate: string;
  skills: string[];
  hours: number;
  rating: number;
  status: "active" | "inactive" | "new" | "pending";
}

const Volunteers = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const volunteers: Volunteer[] = [
    {
      id: 1,
      name: "Alex Johnson",
      avatar: "",
      location: "Mumbai",
      joinDate: "Jan 2023",
      skills: ["Medical", "Education"],
      hours: 48,
      rating: 4.8,
      status: "active",
    },
    {
      id: 2,
      name: "Priya Sharma",
      avatar: "",
      location: "Delhi",
      joinDate: "Mar 2023",
      skills: ["Tech", "Design"],
      hours: 36,
      rating: 4.9,
      status: "active",
    },
    {
      id: 3,
      name: "Rahul Mehta",
      avatar: "",
      location: "Bangalore",
      joinDate: "Jun 2023",
      skills: ["Legal", "Admin"],
      hours: 24,
      rating: 4.7,
      status: "active",
    },
    {
      id: 4,
      name: "Maya Patel",
      avatar: "",
      location: "Pune",
      joinDate: "Aug 2023",
      skills: ["Education", "Social Media"],
      hours: 18,
      rating: 4.5,
      status: "active",
    },
    {
      id: 5,
      name: "Vikram Singh",
      avatar: "",
      location: "Chennai",
      joinDate: "Jul 2023",
      skills: ["Medical", "Logistics"],
      hours: 30,
      rating: 4.6,
      status: "active",
    },
    {
      id: 6,
      name: "Nisha Kapoor",
      avatar: "",
      location: "Hyderabad",
      joinDate: "Last week",
      skills: ["Education"],
      hours: 0,
      rating: 0,
      status: "new",
    },
    {
      id: 7,
      name: "Arjun Reddy",
      avatar: "",
      location: "Kolkata",
      joinDate: "Yesterday",
      skills: ["Tech"],
      hours: 0,
      rating: 0,
      status: "pending",
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getStatusColor = (status: Volunteer["status"]) => {
    switch (status) {
      case "active":
        return "bg-success/10 text-success";
      case "inactive":
        return "bg-muted/50 text-muted-foreground";
      case "new":
        return "bg-accent/10 text-accent-foreground";
      case "pending":
        return "bg-secondary/10 text-secondary";
      default:
        return "bg-muted/50 text-muted-foreground";
    }
  };

  const VolunteerCard = ({ volunteer }: { volunteer: Volunteer }) => (
    <Card variant="hover" className="h-full overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <Avatar className="h-20 w-20">
            <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
            <AvatarFallback className="text-lg">
              {getInitials(volunteer.name)}
            </AvatarFallback>
          </Avatar>
          <h3 className="mt-4 text-lg font-semibold">{volunteer.name}</h3>
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <MapPinIcon className="h-3.5 w-3.5" />
            <span>{volunteer.location}</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-sm text-muted-foreground">
            <CalendarIcon className="h-3.5 w-3.5" />
            <span>Joined {volunteer.joinDate}</span>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-1">
            {volunteer.skills.map((skill) => (
              <Badge key={skill} variant="outline" className="font-normal">
                {skill}
              </Badge>
            ))}
          </div>
          {volunteer.status !== "new" && volunteer.status !== "pending" && (
            <div className="mt-3 flex items-center gap-2">
              <div className="flex items-center gap-1">
                <StarIcon className="h-4 w-4 text-accent" />
                <span className="font-medium">{volunteer.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">|</span>
              <div className="text-sm text-muted-foreground">
                {volunteer.hours} hrs
              </div>
            </div>
          )}
          <Badge
            className={`mt-4 ${getStatusColor(volunteer.status)}`}
            variant="outline"
          >
            {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
          </Badge>
        </div>
      </CardContent>
      <div className="flex border-t">
        <Button
          className="flex-1 rounded-none border-r"
          variant="ghost"
          size="sm"
        >
          <MessageSquareIcon className="mr-2 h-4 w-4" />
          Message
        </Button>
        <Button
          className="flex-1 rounded-none border-r"
          variant="ghost"
          size="sm"
        >
          <ClipboardListIcon className="mr-2 h-4 w-4" />
          Assign
        </Button>
        <Button className="flex-1 rounded-none" variant="ghost" size="sm">
          <CoinsIcon className="mr-2 h-4 w-4" />
          Donate
        </Button>
      </div>
    </Card>
  );

  const VolunteerRow = ({ volunteer }: { volunteer: Volunteer }) => (
    <Card variant="hover">
      <CardContent className="flex items-center justify-between p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
            <AvatarFallback>{getInitials(volunteer.name)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{volunteer.name}</h3>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <MapPinIcon className="h-3.5 w-3.5" />
                <span>{volunteer.location}</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <CalendarIcon className="h-3.5 w-3.5" />
                <span>Joined {volunteer.joinDate}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 md:flex">
            {volunteer.skills.slice(0, 2).map((skill) => (
              <Badge key={skill} variant="outline" className="font-normal">
                {skill}
              </Badge>
            ))}
          </div>
          {volunteer.status !== "new" && volunteer.status !== "pending" && (
            <div className="hidden items-center gap-2 md:flex">
              <div className="flex items-center gap-1">
                <StarIcon className="h-4 w-4 text-accent" />
                <span className="font-medium">{volunteer.rating}</span>
              </div>
              <span className="text-sm text-muted-foreground">|</span>
              <div className="text-sm text-muted-foreground">
                {volunteer.hours} hrs
              </div>
            </div>
          )}
          <Badge
            className={getStatusColor(volunteer.status)}
            variant="outline"
          >
            {volunteer.status.charAt(0).toUpperCase() + volunteer.status.slice(1)}
          </Badge>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <MessageSquareIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <ClipboardListIcon className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <CoinsIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Volunteers</h1>
          <p className="text-muted-foreground">
            Manage and engage with your organization's volunteers
          </p>
        </div>
        <Button>
          <PlusIcon className="mr-2 h-4 w-4" />
          Add Volunteer
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search volunteers..."
            className="pl-8"
          />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <FilterIcon className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <div className="flex rounded-md border">
            <Button
              variant={viewMode === "grid" ? "secondary" : "ghost"}
              size="sm"
              className="rounded-r-none"
              onClick={() => setViewMode("grid")}
            >
              <GridIcon className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "secondary" : "ghost"}
              size="sm"
              className="rounded-l-none"
              onClick={() => setViewMode("list")}
            >
              <ListIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="new">New</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
        </TabsList>
        
        {["all", "active", "new", "pending"].map((tab) => (
          <TabsContent key={tab} value={tab} className="mt-6">
            {viewMode === "grid" ? (
              <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {volunteers
                  .filter((v) => tab === "all" || v.status === tab)
                  .map((volunteer) => (
                    <VolunteerCard key={volunteer.id} volunteer={volunteer} />
                  ))}
              </div>
            ) : (
              <div className="space-y-4">
                {volunteers
                  .filter((v) => tab === "all" || v.status === tab)
                  .map((volunteer) => (
                    <VolunteerRow key={volunteer.id} volunteer={volunteer} />
                  ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Volunteers;