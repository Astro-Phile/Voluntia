import { Calendar, Clock, MapPin, Users, Award, FileText, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  // Mock data - in real app this would come from API
  const userName = "Alex";
  const todayEvents = [
    {
      id: 1,
      title: "Beach Cleanup Drive",
      ngo: "Clean Coast Initiative",
      time: "9:00 AM",
      location: "Marina Beach",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Food Distribution",
      ngo: "Feed the Need",
      time: "2:00 PM", 
      location: "Community Center",
      status: "joined"
    }
  ];

  const progressData = {
    currentHours: 24,
    nextBadgeHours: 30,
    nextBadge: "Helper Hero"
  };

  const stats = {
    totalEvents: 12,
    totalHours: 24,
    badgesEarned: 3
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="bg-gradient-primary px-6 pt-8 pb-8 text-white md:hidden">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">Hey {userName}! 👋</h1>
            <p className="text-white/90">You have {todayEvents.length} events today</p>
          </div>
        </div>
        <p className="text-lg text-white/95">Let's make an impact together!</p>
      </div>

      {/* Desktop Welcome Section */}
      <div className="hidden md:block px-6 py-6 bg-gradient-primary text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg text-white/95">Welcome back! You have {todayEvents.length} events today</p>
            <p className="text-lg text-white/95">Let's make an impact together!</p>
          </div>
        </div>
      </div>

      <div className="px-6 -mt-4 space-y-6 pb-6">
        {/* Progress Ring Card */}
        <Card className="shadow-elevated">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-8 border-muted flex items-center justify-center relative">
                  <div 
                    className="absolute inset-0 rounded-full border-8 border-sunrise-yellow"
                    style={{
                      clipPath: `polygon(0 0, ${(progressData.currentHours / progressData.nextBadgeHours) * 100}% 0, ${(progressData.currentHours / progressData.nextBadgeHours) * 100}% 100%, 0% 100%)`
                    }}
                  />
                  <div className="text-center z-10">
                    <div className="text-lg font-bold text-foreground">{progressData.currentHours}</div>
                    <div className="text-xs text-muted-foreground">hrs</div>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground">Progress to {progressData.nextBadge}</h3>
                <p className="text-sm text-muted-foreground">
                  {progressData.nextBadgeHours - progressData.currentHours} hours to go
                </p>
                <div className="mt-2">
                  <Badge variant="secondary" className="bg-sunrise-yellow/20 text-sunrise-yellow border-sunrise-yellow/30">
                    <Award size={12} className="mr-1" />
                    Next Badge
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Today's Events */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-foreground">Today's Events</h2>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
          
          {todayEvents.length > 0 ? (
            <div className="space-y-3">
              {todayEvents.map((event) => (
                <Card key={event.id} className="shadow-card hover:shadow-elevated transition-all duration-200">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full bg-teal-green/20 flex items-center justify-center">
                        <Users size={20} className="text-teal-green" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{event.title}</h3>
                        <p className="text-sm text-muted-foreground">{event.ngo}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock size={12} />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={12} />
                            {event.location}
                          </div>
                        </div>
                      </div>
                      <Button variant="teal" size="sm">
                        {event.status === "joined" ? "Joined" : "Join"}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <Card className="shadow-card">
              <CardContent className="p-8 text-center">
                <Calendar size={48} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="font-semibold text-foreground mb-2">No events today</h3>
                <p className="text-muted-foreground mb-4">Explore events to get started!</p>
                <Button variant="teal">Explore Events</Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Quick Actions */}
        <div>
          <h2 className="text-xl font-bold text-foreground mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="h-auto p-4 flex-col gap-2">
              <FileText size={24} />
              <span>My Contributions</span>
            </Button>
            <Button variant="teal" className="h-auto p-4 flex-col gap-2">
              <Award size={24} />
              <span>Generate Resume</span>
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-teal-green">{stats.totalEvents}</div>
              <div className="text-xs text-muted-foreground">Events</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-sunrise-yellow">{stats.totalHours}</div>
              <div className="text-xs text-muted-foreground">Hours</div>
            </CardContent>
          </Card>
          <Card className="shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-soft-coral">{stats.badgesEarned}</div>
              <div className="text-xs text-muted-foreground">Badges</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}