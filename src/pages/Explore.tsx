import { useState } from "react";
import { Search, Filter, MapPin, Clock, Bookmark, Users, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function Explore() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  // Mock events data
  const events = [
    {
      id: 1,
      title: "Tree Plantation Drive",
      ngo: "Green Earth Foundation",
      location: "Central Park",
      date: "Today, 9:00 AM",
      cause: "Environment",
      participants: 25,
      maxParticipants: 50,
      description: "Join us in planting 100 trees to make our city greener",
      saved: false
    },
    {
      id: 2,
      title: "Elderly Care Visit",
      ngo: "Senior Smile",
      location: "Happy Home",
      date: "Tomorrow, 2:00 PM",
      cause: "Healthcare",
      participants: 8,
      maxParticipants: 15,
      description: "Spend quality time with elderly residents",
      saved: true
    },
    {
      id: 3,
      title: "Educational Workshop",
      ngo: "Learning Together",
      location: "Community School",
      date: "Saturday, 10:00 AM",
      cause: "Education",
      participants: 12,
      maxParticipants: 20,
      description: "Teach basic computer skills to underprivileged children",
      saved: false
    }
  ];

  const causes = ["All", "Environment", "Education", "Healthcare", "Poverty"];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary px-6 pt-12 pb-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Explore Events</h1>
        <p className="text-white/90">Find opportunities to make a difference</p>
      </div>

      <div className="px-6 -mt-2 space-y-6 pb-6">
        {/* Search and Filters */}
        <Card className="shadow-card">
          <CardContent className="p-4 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search events, NGOs, or causes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Cause Filters */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {causes.map((cause) => (
                <Badge
                  key={cause}
                  variant={cause === "All" ? "default" : "secondary"}
                  className="whitespace-nowrap cursor-pointer hover:bg-teal-green hover:text-white"
                >
                  {cause}
                </Badge>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "list" ? "teal" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  List
                </Button>
                <Button
                  variant={viewMode === "map" ? "teal" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                >
                  <Map size={16} className="mr-1" />
                  Map
                </Button>
              </div>
              <Button variant="ghost" size="sm">
                <Filter size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Events List */}
        {viewMode === "list" ? (
          <div className="space-y-4">
            {events.map((event) => (
              <Card key={event.id} className="shadow-card hover:shadow-elevated transition-all duration-200">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    {/* NGO Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-sm">
                        {event.ngo.split(' ').map(word => word[0]).join('')}
                      </span>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">{event.ngo}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className={event.saved ? "text-soft-coral" : "text-muted-foreground"}
                        >
                          <Bookmark size={16} fill={event.saved ? "currentColor" : "none"} />
                        </Button>
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {event.description}
                      </p>

                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          {event.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={12} />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={12} />
                          {event.participants}/{event.maxParticipants}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="bg-teal-green/20 text-teal-green">
                          {event.cause}
                        </Badge>
                        <Button variant="teal" size="sm">
                          Join Event
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Map View Placeholder */
          <Card className="shadow-card">
            <CardContent className="p-8 text-center">
              <Map size={48} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Map View</h3>
              <p className="text-muted-foreground">Interactive map coming soon!</p>
            </CardContent>
          </Card>
        )}

        {/* AI Suggestions */}
        <div>
          <h2 className="text-lg font-bold text-foreground mb-3">Recommended for You</h2>
          <div className="flex gap-3 overflow-x-auto pb-2">
            {events.slice(0, 2).map((event) => (
              <Card key={`rec-${event.id}`} className="shadow-card min-w-[280px] flex-shrink-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-sunrise-yellow/20 text-sunrise-yellow text-xs">
                      AI Match
                    </Badge>
                    <span className="text-xs text-muted-foreground">95% match</span>
                  </div>
                  <h3 className="font-semibold text-sm text-foreground">{event.title}</h3>
                  <p className="text-xs text-muted-foreground">{event.ngo}</p>
                  <Button variant="teal" size="sm" className="w-full mt-3">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}