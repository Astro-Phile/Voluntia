import { useState } from "react";
import { Bell, MessageCircle, Settings, Check, Clock, Users, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "event",
      title: "Event Reminder",
      message: "Beach Cleanup Drive starts in 2 hours at Marina Beach",
      time: "2 hours ago",
      read: false,
      icon: Clock,
      color: "text-alert-orange"
    },
    {
      id: 2,
      type: "volunteer",
      title: "New Volunteers Joined",
      message: "3 volunteers joined your Tree Plantation event",
      time: "4 hours ago",
      read: false,
      icon: Users,
      color: "text-teal-green"
    },
    {
      id: 3,
      type: "donation",
      title: "Donation Impact",
      message: "Your ₹500 donation helped serve 25 meals to families",
      time: "1 day ago",
      read: true,
      icon: Heart,
      color: "text-soft-coral"
    },
    {
      id: 4,
      type: "achievement",
      title: "Badge Earned!",
      message: "Congratulations! You've earned the 'Helper Hero' badge",
      time: "2 days ago",
      read: true,
      icon: Check,
      color: "text-sunrise-yellow"
    }
  ]);

  const messages = [
    {
      id: 1,
      sender: "Clean Coast Initiative",
      message: "Thank you for joining our beach cleanup! Here are the photos from the event.",
      time: "1 hour ago",
      unread: true,
      avatar: "CC"
    },
    {
      id: 2,
      sender: "Feed the Need",
      message: "Your next volunteer shift is scheduled for tomorrow at 2 PM",
      time: "3 hours ago",
      unread: true,
      avatar: "FN"
    },
    {
      id: 3,
      sender: "Learning Together",
      message: "The children loved your workshop! Thank you for making a difference.",
      time: "2 days ago",
      unread: false,
      avatar: "LT"
    }
  ];

  const notificationSettings = [
    { id: "events", label: "Event Updates", enabled: true },
    { id: "messages", label: "NGO Messages", enabled: true },
    { id: "achievements", label: "Achievements & Badges", enabled: true },
    { id: "donations", label: "Donation Impact", enabled: true },
    { id: "reminders", label: "Event Reminders", enabled: true },
    { id: "marketing", label: "Marketing Updates", enabled: false }
  ];

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const unreadCount = notifications.filter(n => !n.read).length;
  const unreadMessages = messages.filter(m => m.unread).length;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-primary px-6 pt-12 pb-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold mb-2">Notifications</h1>
            <p className="text-white/90">Stay updated with your volunteer activities</p>
          </div>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Settings size={20} />
          </Button>
        </div>
      </div>

      <div className="px-6 -mt-2 space-y-6 pb-6">
        <Tabs defaultValue="alerts" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="alerts" className="relative">
              Alerts
              {unreadCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-alert-orange text-white text-xs h-5 w-5 flex items-center justify-center p-0">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="messages" className="relative">
              Messages
              {unreadMessages > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-alert-orange text-white text-xs h-5 w-5 flex items-center justify-center p-0">
                  {unreadMessages}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-3">
            {notifications.length > 0 ? (
              notifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`shadow-card hover:shadow-elevated transition-all duration-200 cursor-pointer ${
                    !notification.read ? 'border-l-4 border-l-teal-green bg-accent/30' : ''
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full bg-background flex items-center justify-center ${notification.color}`}>
                        <notification.icon size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className={`font-semibold ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {notification.title}
                          </h3>
                          <span className="text-xs text-muted-foreground">{notification.time}</span>
                        </div>
                        <p className={`text-sm mt-1 ${!notification.read ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {notification.message}
                        </p>
                        {!notification.read && (
                          <Badge variant="secondary" className="mt-2 bg-teal-green/20 text-teal-green text-xs">
                            New
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="shadow-card">
                <CardContent className="p-8 text-center">
                  <Bell size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">No notifications</h3>
                  <p className="text-muted-foreground">Check back later for updates!</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="messages" className="space-y-3">
            {messages.length > 0 ? (
              messages.map((message) => (
                <Card key={message.id} className="shadow-card hover:shadow-elevated transition-all duration-200 cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-white font-bold text-sm">
                        {message.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className={`font-semibold ${message.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {message.sender}
                          </h3>
                          <span className="text-xs text-muted-foreground">{message.time}</span>
                        </div>
                        <p className={`text-sm mt-1 ${message.unread ? 'text-foreground' : 'text-muted-foreground'}`}>
                          {message.message}
                        </p>
                        {message.unread && (
                          <div className="w-2 h-2 bg-alert-orange rounded-full mt-2" />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Card className="shadow-card">
                <CardContent className="p-8 text-center">
                  <MessageCircle size={48} className="mx-auto text-muted-foreground mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">No messages</h3>
                  <p className="text-muted-foreground">NGOs will send you updates here</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="settings" className="space-y-4">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {notificationSettings.map((setting) => (
                  <div key={setting.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-foreground">{setting.label}</p>
                    </div>
                    <Switch checked={setting.enabled} />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Delivery Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">Push Notifications</p>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">Email</p>
                  <Switch defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <Switch />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}