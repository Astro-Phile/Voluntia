import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import EventCard from "@/components/dashboard/EventCard";
import DonationEventForm from "@/components/events/DonationEventForm";
import {
  PlusIcon,
  CalendarIcon,
  GridIcon,
  ListIcon,
  FilterIcon,
  SearchIcon,
} from "lucide-react";

const Events = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [eventType, setEventType] = useState("all");
  const [showDonationForm, setShowDonationForm] = useState(false);

  const upcomingEvents = [
    {
      id: 1,
      title: "Blood Donation Drive",
      date: "Aug 20, 10:00 AM",
      location: "City Hospital",
      volunteers: 18,
      maxVolunteers: 25,
    },
    {
      id: 2,
      title: "Legal Workshop",
      date: "Aug 25, 2:00 PM",
      location: "Community Hall",
      volunteers: 12,
      maxVolunteers: 20,
    },
    {
      id: 3,
      title: "Food Distribution",
      date: "Aug 30, 9:00 AM",
      location: "Central Park",
      volunteers: 8,
      maxVolunteers: 15,
    },
    {
      id: 4,
      title: "Coding Workshop",
      date: "Sep 5, 3:00 PM",
      location: "Tech Hub",
      volunteers: 5,
      maxVolunteers: 10,
    },
  ];

  const ongoingEvents = [
    {
      id: 5,
      title: "Tree Plantation Drive",
      date: "Jul 15 - Aug 15",
      location: "City Outskirts",
      volunteers: 28,
      maxVolunteers: 30,
    },
  ];

  const pastEvents = [
    {
      id: 6,
      title: "Medical Camp",
      date: "Jul 10, 9:00 AM",
      location: "Rural Village",
      volunteers: 22,
      maxVolunteers: 25,
    },
    {
      id: 7,
      title: "Beach Cleanup",
      date: "Jul 5, 7:00 AM",
      location: "City Beach",
      volunteers: 45,
      maxVolunteers: 50,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Events</h1>
          <p className="text-muted-foreground">
            Create and manage your organization's events
          </p>
        </div>
        <div className="flex gap-2">
          <Select value={eventType} onValueChange={setEventType}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Event Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Events</SelectItem>
              <SelectItem value="volunteer">Volunteer</SelectItem>
              <SelectItem value="workshop">Workshop</SelectItem>
              <SelectItem value="awareness">Awareness</SelectItem>
              <SelectItem value="fundraiser">Fundraiser</SelectItem>
            </SelectContent>
          </Select>
          <Button>
            <PlusIcon className="mr-2 h-4 w-4" />
            Create Event
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search events..."
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
          <Button variant="outline" size="sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            Calendar
          </Button>
        </div>
      </div>

      {eventType === "fundraiser" && (
        <DonationEventForm />
      )}

      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
          <TabsTrigger value="all">All Events</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="mt-6">
          <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "space-y-4"}>
            {upcomingEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                volunteers={event.volunteers}
                maxVolunteers={event.maxVolunteers}
                category="Health Camp"
                organizers="Dr. Smith, Nurse Jane"
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ongoing" className="mt-6">
          <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "space-y-4"}>
            {ongoingEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                volunteers={event.volunteers}
                maxVolunteers={event.maxVolunteers}
                category="Environment"
                organizers="Green Team Lead"
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="past" className="mt-6">
          <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "space-y-4"}>
            {pastEvents.map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                volunteers={event.volunteers}
                maxVolunteers={event.maxVolunteers}
                category={event.id === 6 ? "Health Camp" : "Environment"}
                organizers={event.id === 6 ? "Dr. Kumar, Medical Team" : "Coast Guard Team"}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="all" className="mt-6">
          <div className={viewMode === "grid" ? "grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "space-y-4"}>
            {[...upcomingEvents, ...ongoingEvents, ...pastEvents].map((event) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                location={event.location}
                volunteers={event.volunteers}
                maxVolunteers={event.maxVolunteers}
                category={
                  event.title.includes("Blood") || event.title.includes("Medical") ? "Health Camp" :
                  event.title.includes("Tree") || event.title.includes("Beach") ? "Environment" :
                  event.title.includes("Legal") ? "Legal Aid" : "Education"
                }
                organizers={
                  event.title.includes("Blood") ? "Dr. Smith, Nurse Jane" :
                  event.title.includes("Legal") ? "Adv. Patel, Legal Team" :
                  event.title.includes("Tree") ? "Green Team Lead" :
                  event.title.includes("Medical") ? "Dr. Kumar, Medical Team" :
                  event.title.includes("Beach") ? "Coast Guard Team" : "Tech Coordinator"
                }
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Events;