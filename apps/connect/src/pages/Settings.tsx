import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  User, Bell, Shield, Link, Settings as SettingsIcon, 
  Moon, Sun, Globe, Smartphone, Mail, Calendar, 
  LinkedinIcon, Download, Trash2, Eye, EyeOff 
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [fontSize, setFontSize] = useState("medium");
  const [notifications, setNotifications] = useState({
    events: true,
    applications: true,
    reminders: true,
    digest: false
  });
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved",
      description: "Your preferences have been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto p-6">
        <div className="flex items-center gap-2 mb-6">
          <SettingsIcon size={24} className="text-teal-green" />
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        </div>

        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="general" className="flex items-center gap-2">
              <User size={16} />
              <span className="hidden sm:inline">General</span>
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center gap-2">
              <Bell size={16} />
              <span className="hidden sm:inline">Notifications</span>
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex items-center gap-2">
              <Shield size={16} />
              <span className="hidden sm:inline">Privacy</span>
            </TabsTrigger>
            <TabsTrigger value="integrations" className="flex items-center gap-2">
              <Link size={16} />
              <span className="hidden sm:inline">Integrations</span>
            </TabsTrigger>
            <TabsTrigger value="preferences" className="flex items-center gap-2">
              <SettingsIcon size={16} />
              <span className="hidden sm:inline">Preferences</span>
            </TabsTrigger>
          </TabsList>

          {/* General Tab */}
          <TabsContent value="general" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="displayName">Display Name</Label>
                    <Input id="displayName" defaultValue="Alex Volunteer" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="alex@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" defaultValue="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <Select defaultValue="asia-kolkata">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asia-kolkata">Asia/Kolkata (IST)</SelectItem>
                        <SelectItem value="utc">UTC</SelectItem>
                        <SelectItem value="america-new_york">America/New_York (EST)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Display Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Theme</Label>
                    <p className="text-sm text-muted-foreground">Choose your preferred theme</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sun size={16} />
                    <Switch
                      checked={isDarkMode}
                      onCheckedChange={setIsDarkMode}
                    />
                    <Moon size={16} />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Font Size</Label>
                  <Select value={fontSize} onValueChange={setFontSize}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="small">Small</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="large">Large</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select defaultValue="en">
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">हिंदी (Hindi)</SelectItem>
                      <SelectItem value="bn">বাংলা (Bengali)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Event Alerts</Label>
                      <p className="text-sm text-muted-foreground">Join confirmations, changes, cancellations</p>
                    </div>
                    <Switch
                      checked={notifications.events}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, events: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Application Updates</Label>
                      <p className="text-sm text-muted-foreground">When your applications are accepted or declined</p>
                    </div>
                    <Switch
                      checked={notifications.applications}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, applications: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Smart Reminders</Label>
                      <p className="text-sm text-muted-foreground">2-hour before event reminders</p>
                    </div>
                    <Switch
                      checked={notifications.reminders}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, reminders: checked }))
                      }
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Weekly Digest</Label>
                      <p className="text-sm text-muted-foreground">Summary of opportunities and impact</p>
                    </div>
                    <Switch
                      checked={notifications.digest}
                      onCheckedChange={(checked) => 
                        setNotifications(prev => ({ ...prev, digest: checked }))
                      }
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold">Delivery Methods</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Smartphone size={16} />
                        <span className="font-medium">Push Notifications</span>
                      </div>
                      <Badge variant="secondary">Enabled</Badge>
                    </Card>
                    
                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Mail size={16} />
                        <span className="font-medium">Email</span>
                      </div>
                      <Badge variant="secondary">Enabled</Badge>
                    </Card>

                    <Card className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-green-600">📱</span>
                        <span className="font-medium">WhatsApp</span>
                      </div>
                      <Badge variant="outline">Available</Badge>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Privacy Tab */}
          <TabsContent value="privacy" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Privacy Controls</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label>Anonymous Mode</Label>
                    <p className="text-sm text-muted-foreground">Hide your name in volunteer lists and leaderboards</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye size={16} />
                    <Switch
                      checked={isAnonymous}
                      onCheckedChange={setIsAnonymous}
                    />
                    <EyeOff size={16} />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold">Account Security</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Shield size={16} className="mr-2" />
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Smartphone size={16} className="mr-2" />
                      Setup Two-Factor Authentication
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Globe size={16} className="mr-2" />
                      Manage Active Sessions
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold">Data Management</h4>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download size={16} className="mr-2" />
                      Export Your Data
                    </Button>
                    <Button variant="destructive" className="w-full justify-start">
                      <Trash2 size={16} className="mr-2" />
                      Delete Account
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Integrations Tab */}
          <TabsContent value="integrations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Connected Accounts</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar size={20} className="text-blue-600" />
                        <span className="font-medium">Google Calendar</span>
                      </div>
                      <Badge variant="secondary">Connected</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">Auto-sync events and reminders</p>
                    <Button variant="outline" size="sm">Disconnect</Button>
                  </Card>

                  <Card className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <LinkedinIcon size={20} className="text-blue-700" />
                        <span className="font-medium">LinkedIn</span>
                      </div>
                      <Badge variant="outline">Not Connected</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">One-click resume export</p>
                    <Button variant="teal" size="sm">Connect</Button>
                  </Card>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Payment Methods</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border border-border rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded flex items-center justify-center text-white text-xs font-bold">
                        UPI
                      </div>
                      <div>
                        <p className="font-medium">alex@paytm</p>
                        <p className="text-sm text-muted-foreground">UPI ID</p>
                      </div>
                    </div>
                    <Badge variant="secondary">Primary</Badge>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    Add Payment Method
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Preferences Tab */}
          <TabsContent value="preferences" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Volunteer Preferences</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label className="text-base font-medium">Preferred Causes</Label>
                    <p className="text-sm text-muted-foreground mb-3">Select up to 3 causes you're most interested in</p>
                    <div className="flex flex-wrap gap-2">
                      {["Education", "Healthcare", "Environment", "Animal Welfare", "Disaster Relief", "Community Development"].map((cause) => (
                        <Badge 
                          key={cause} 
                          variant={["Education", "Healthcare", "Environment"].includes(cause) ? "default" : "outline"}
                          className="cursor-pointer"
                        >
                          {cause}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Location Radius</Label>
                    <Select defaultValue="10km">
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="5km">5 km</SelectItem>
                        <SelectItem value="10km">10 km</SelectItem>
                        <SelectItem value="25km">25 km</SelectItem>
                        <SelectItem value="50km">50 km</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label className="text-base font-medium">Your Skills</Label>
                    <p className="text-sm text-muted-foreground mb-3">Help us match you with relevant opportunities</p>
                    <div className="flex flex-wrap gap-2">
                      {["Teaching", "First Aid", "Event Management", "Digital Marketing", "Photography", "Translation"].map((skill) => (
                        <Badge 
                          key={skill} 
                          variant={["Teaching", "First Aid", "Event Management"].includes(skill) ? "default" : "outline"}
                          className="cursor-pointer"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold">Gamification & Social</h4>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Progress Badges</Label>
                      <p className="text-sm text-muted-foreground">Show progress rings and badges on dashboard</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Leaderboards</Label>
                      <p className="text-sm text-muted-foreground">Participate in volunteer leaderboards</p>
                    </div>
                    <Switch defaultChecked />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Referral Invites</Label>
                      <p className="text-sm text-muted-foreground">Enable friend invitations and referral rewards</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end pt-6">
          <Button onClick={handleSave} className="px-8">
            Save All Changes
          </Button>
        </div>
      </div>
    </div>
  );
}