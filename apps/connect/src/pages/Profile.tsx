import { useState } from "react";
import { User, Calendar, Award, Download, Share2, Edit, MapPin, Clock, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("timeline");

  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex.johnson@email.com",
    joinDate: "January 2024",
    location: "Mumbai, India",
    avatar: "",
    totalHours: 156,
    eventsAttended: 24,
    badgesEarned: 8,
    donationsCount: 12,
    totalDonated: 5000
  };

  const badges = [
    { id: 1, name: "First Timer", description: "Completed your first volunteer event", icon: "🌟", earned: true },
    { id: 2, name: "Helper Hero", description: "Volunteered for 30+ hours", icon: "🦸", earned: true },
    { id: 3, name: "Team Player", description: "Participated in 10+ group events", icon: "👥", earned: true },
    { id: 4, name: "Eco Warrior", description: "Participated in 5+ environmental events", icon: "🌱", earned: true },
    { id: 5, name: "Generous Heart", description: "Made 10+ donations", icon: "❤️", earned: true },
    { id: 6, name: "Community Champion", description: "Volunteered for 100+ hours", icon: "🏆", earned: false },
    { id: 7, name: "Mentor", description: "Led a volunteer team", icon: "📚", earned: false },
    { id: 8, name: "Changemaker", description: "Impacted 1000+ lives", icon: "⭐", earned: false }
  ];

  const timeline = [
    {
      id: 1,
      type: "event",
      title: "Beach Cleanup Drive",
      ngo: "Clean Coast Initiative",
      date: "March 15, 2024",
      hours: 4,
      location: "Marina Beach",
      impact: "Removed 25kg plastic waste"
    },
    {
      id: 2,
      type: "donation",
      title: "Donated to Feed the Need",
      amount: 500,
      date: "March 10, 2024",
      impact: "Provided 25 meals"
    },
    {
      id: 3,
      type: "event",
      title: "Educational Workshop",
      ngo: "Learning Together",
      date: "March 5, 2024",
      hours: 6,
      location: "Community School",
      impact: "Taught 20 children"
    },
    {
      id: 4,
      type: "badge",
      title: "Earned Helper Hero Badge",
      date: "March 1, 2024",
      description: "Completed 30+ volunteer hours"
    }
  ];

  const skills = [
    "Teaching", "Event Management", "Social Media", "Photography", 
    "First Aid", "Environmental Conservation", "Community Outreach"
  ];

  const certificates = [
    { id: 1, title: "Volunteer Leadership Certificate", issuer: "VolunteerHub", date: "March 2024" },
    { id: 2, title: "Environmental Conservation", issuer: "Clean Coast Initiative", date: "February 2024" },
    { id: 3, title: "Community Service Award", issuer: "Feed the Need", date: "January 2024" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Profile Header */}
      <div className="bg-gradient-primary px-6 pt-12 pb-8 text-white">
        <div className="flex items-start gap-4">
          <Avatar className="w-20 h-20 border-4 border-white/20">
            <AvatarImage src={user.avatar} />
            <AvatarFallback className="text-2xl bg-white text-graphite-gray">
              {user.name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-white/90">{user.email}</p>
                <div className="flex items-center gap-1 mt-1 text-white/80 text-sm">
                  <MapPin size={14} />
                  {user.location}
                </div>
              </div>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Edit size={20} />
              </Button>
            </div>
            <p className="text-white/80 text-sm mt-2">Volunteer since {user.joinDate}</p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 -mt-6 grid grid-cols-2 gap-3 mb-6">
        <Card className="shadow-elevated">
          <CardContent className="p-4 text-center">
            <Clock size={24} className="mx-auto text-teal-green mb-2" />
            <div className="text-2xl font-bold text-foreground">{user.totalHours}</div>
            <div className="text-xs text-muted-foreground">Total Hours</div>
          </CardContent>
        </Card>
        <Card className="shadow-elevated">
          <CardContent className="p-4 text-center">
            <Calendar size={24} className="mx-auto text-sunrise-yellow mb-2" />
            <div className="text-2xl font-bold text-foreground">{user.eventsAttended}</div>
            <div className="text-xs text-muted-foreground">Events Attended</div>
          </CardContent>
        </Card>
      </div>

      <div className="px-6 space-y-6 pb-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="timeline">Timeline</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
            <TabsTrigger value="resume">Resume</TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="space-y-3">
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <Card key={item.id} className="shadow-card">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      {/* Timeline dot */}
                      <div className="relative">
                        <div className={`w-3 h-3 rounded-full mt-2 ${
                          item.type === 'event' ? 'bg-teal-green' :
                          item.type === 'donation' ? 'bg-soft-coral' :
                          'bg-sunrise-yellow'
                        }`} />
                        {index < timeline.length - 1 && (
                          <div className="w-px h-12 bg-border absolute top-5 left-1/2 transform -translate-x-1/2" />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-foreground">{item.title}</h3>
                            {item.ngo && (
                              <p className="text-sm text-muted-foreground">{item.ngo}</p>
                            )}
                            {item.location && (
                              <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                                <MapPin size={12} />
                                {item.location}
                              </div>
                            )}
                          </div>
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                        </div>
                        
                        {item.impact && (
                          <div className="mt-2 p-2 bg-accent/50 rounded text-sm text-foreground">
                            Impact: {item.impact}
                          </div>
                        )}

                        {item.hours && (
                          <Badge variant="secondary" className="mt-2 bg-teal-green/20 text-teal-green">
                            {item.hours} hours
                          </Badge>
                        )}

                        {item.amount && (
                          <Badge variant="secondary" className="mt-2 bg-soft-coral/20 text-soft-coral">
                            ₹{item.amount}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="badges" className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              {badges.map((badge) => (
                <Card key={badge.id} className={`shadow-card ${badge.earned ? '' : 'opacity-50'}`}>
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl mb-2">{badge.icon}</div>
                    <h3 className="font-semibold text-foreground text-sm">{badge.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{badge.description}</p>
                    {badge.earned && (
                      <Badge variant="secondary" className="mt-2 bg-sunrise-yellow/20 text-sunrise-yellow text-xs">
                        Earned
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-4">
            {/* Impact Summary */}
            <div className="grid grid-cols-2 gap-3">
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <Heart size={24} className="mx-auto text-soft-coral mb-2" />
                  <div className="text-2xl font-bold text-foreground">{user.donationsCount}</div>
                  <div className="text-xs text-muted-foreground">Donations Made</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <TrendingUp size={24} className="mx-auto text-teal-green mb-2" />
                  <div className="text-2xl font-bold text-foreground">₹{user.totalDonated.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Total Donated</div>
                </CardContent>
              </Card>
            </div>

            {/* Causes Impact */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Impact by Cause</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Environment</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full">
                      <div className="w-4/5 h-2 bg-teal-green rounded-full" />
                    </div>
                    <span className="text-xs text-muted-foreground">80%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Education</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full">
                      <div className="w-3/5 h-2 bg-sunrise-yellow rounded-full" />
                    </div>
                    <span className="text-xs text-muted-foreground">60%</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Hunger Relief</span>
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-2 bg-muted rounded-full">
                      <div className="w-2/5 h-2 bg-soft-coral rounded-full" />
                    </div>
                    <span className="text-xs text-muted-foreground">40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resume" className="space-y-4">
            {/* Skills */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Skills & Expertise
                  <Button variant="ghost" size="sm">
                    <Edit size={16} />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Certificates */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Certificates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {certificates.map((cert) => (
                  <div key={cert.id} className="flex items-center justify-between p-3 bg-accent/30 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-sm text-foreground">{cert.title}</h3>
                      <p className="text-xs text-muted-foreground">{cert.issuer} • {cert.date}</p>
                    </div>
                    <Button variant="ghost" size="sm">
                      <Download size={16} />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Export Options */}
            <div className="grid grid-cols-2 gap-3">
              <Button variant="teal" className="h-auto p-4 flex-col gap-2">
                <Download size={20} />
                <span>Export Resume</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col gap-2">
                <Share2 size={20} />
                <span>Share Profile</span>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}