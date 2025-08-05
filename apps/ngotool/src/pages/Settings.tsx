import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  UserIcon,
  MailIcon,
  KeyIcon,
  BellIcon,
  UsersIcon,
  ShieldIcon,
  LinkIcon,
  GlobeIcon,
  SunIcon,
  MoonIcon,
  LanguagesIcon,
  LogOutIcon,
  CreditCardIcon,
  CalendarIcon,
  MessageSquareIcon,
  TrashIcon,
  DownloadIcon,
  ArchiveIcon,
  RefreshCcwIcon,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
          <p className="text-muted-foreground">
            Manage your organization's settings and preferences
          </p>
        </div>
        <Button variant="outline">
          <RefreshCcwIcon className="mr-2 h-4 w-4" />
          Switch NGO
        </Button>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="users">Users & Roles</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="ngo-name">NGO Display Name</Label>
                  <Input id="ngo-name" defaultValue="Voluntree" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="short-description">Short Description</Label>
                  <Input
                    id="short-description"
                    defaultValue="Empowering communities through education and environmental initiatives"
                  />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select defaultValue="asia-kolkata">
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="Select timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asia-kolkata">
                        Asia/Kolkata (GMT+5:30)
                      </SelectItem>
                      <SelectItem value="america-newyork">
                        America/New York (GMT-4:00)
                      </SelectItem>
                      <SelectItem value="europe-london">
                        Europe/London (GMT+1:00)
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="language">Language Preference</Label>
                  <Select defaultValue="en">
                    <SelectTrigger id="language">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="hi">Hindi</SelectItem>
                      <SelectItem value="ta">Tamil</SelectItem>
                      <SelectItem value="bn">Bengali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="campaign-visibility">
                      Default Campaign Visibility
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Set the default visibility for new campaigns
                    </p>
                  </div>
                  <Select defaultValue="public">
                    <SelectTrigger
                      id="campaign-visibility"
                      className="w-[180px]"
                    >
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="private">Private</SelectItem>
                      <SelectItem value="team-only">Team Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="theme">Interface Theme</Label>
                    <p className="text-sm text-muted-foreground">
                      Choose your preferred theme
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <SunIcon className="h-4 w-4 text-muted-foreground" />
                    <Switch id="theme" />
                    <MoonIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Types</h3>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="volunteer-applications">
                      Volunteer Applications
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified when new volunteers apply
                    </p>
                  </div>
                  <Switch id="volunteer-applications" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="donation-confirmations">
                      Donation Confirmations
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get notified for each donation received
                    </p>
                  </div>
                  <Switch id="donation-confirmations" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="performance-summary">
                      Monthly Performance Summary
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Receive monthly stats and insights
                    </p>
                  </div>
                  <Switch id="performance-summary" defaultChecked />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label htmlFor="document-expiration">
                      Document Expiration Alerts
                    </Label>
                    <p className="text-sm text-muted-foreground">
                      Get alerts before documents expire
                    </p>
                  </div>
                  <Switch id="document-expiration" defaultChecked />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Method</h3>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <Switch id="email-notifications" defaultChecked />
                    <Label htmlFor="email-notifications">
                      <MailIcon className="mr-1 inline-block h-4 w-4" /> Email
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="sms-notifications" />
                    <Label htmlFor="sms-notifications">
                      <MessageSquareIcon className="mr-1 inline-block h-4 w-4" />{" "}
                      SMS
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch id="inapp-notifications" defaultChecked />
                    <Label htmlFor="inapp-notifications">
                      <BellIcon className="mr-1 inline-block h-4 w-4" /> In-app
                    </Label>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Notification Frequency</h3>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
                    <Badge variant="outline">Instant</Badge>
                    <p className="text-center text-sm">
                      Receive notifications as they happen
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border bg-primary/5 p-4 ring-1 ring-primary">
                    <Badge>Daily Digest</Badge>
                    <p className="text-center text-sm">
                      Receive a daily summary of notifications
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-2 rounded-lg border p-4">
                    <Badge variant="outline">Weekly Summary</Badge>
                    <p className="text-center text-sm">
                      Receive a weekly summary of notifications
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6 space-y-6">
          <div className="flex justify-end">
            <Button>
              <UserIcon className="mr-2 h-4 w-4" />
              Invite Member
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Team Members & Roles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="rounded-md border">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <UserIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Priya Sharma</h3>
                      <p className="text-sm text-muted-foreground">
                        priya@example.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Owner</Badge>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <UserIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Rajesh Gupta</h3>
                      <p className="text-sm text-muted-foreground">
                        rajesh@example.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Admin</Badge>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <UserIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Ananya Singh</h3>
                      <p className="text-sm text-muted-foreground">
                        ananya@example.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Event Manager</Badge>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
                <Separator />
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <UserIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-medium">Vikram Mehta</h3>
                      <p className="text-sm text-muted-foreground">
                        vikram@example.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge>Finance Head</Badge>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Permissions Matrix</h3>
                <div className="overflow-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="whitespace-nowrap p-2 text-left font-medium">
                          Role
                        </th>
                        <th className="whitespace-nowrap p-2 text-center font-medium">
                          View
                        </th>
                        <th className="whitespace-nowrap p-2 text-center font-medium">
                          Add
                        </th>
                        <th className="whitespace-nowrap p-2 text-center font-medium">
                          Edit
                        </th>
                        <th className="whitespace-nowrap p-2 text-center font-medium">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        "Owner",
                        "Admin",
                        "Event Manager",
                        "Finance Head",
                        "Volunteer Coordinator",
                      ].map((role) => (
                        <tr key={role} className="border-b">
                          <td className="whitespace-nowrap p-2 text-left font-medium">
                            {role}
                          </td>
                          <td className="p-2 text-center">
                            <Switch
                              defaultChecked
                              disabled={role === "Owner" || role === "Admin"}
                            />
                          </td>
                          <td className="p-2 text-center">
                            <Switch
                              defaultChecked
                              disabled={role === "Owner" || role === "Admin"}
                            />
                          </td>
                          <td className="p-2 text-center">
                            <Switch
                              defaultChecked={
                                role !== "Volunteer Coordinator"
                              }
                              disabled={role === "Owner" || role === "Admin"}
                            />
                          </td>
                          <td className="p-2 text-center">
                            <Switch
                              defaultChecked={
                                role === "Owner" || role === "Admin"
                              }
                              disabled={role === "Owner" || role === "Admin"}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground">
                  * Owner and Admin roles cannot be modified
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Password & Authentication</h3>

                <div className="space-y-2">
                  <Label htmlFor="current-password">Current Password</Label>
                  <Input
                    id="current-password"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New Password</Label>
                    <Input
                      id="new-password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <Button>
                  <KeyIcon className="mr-2 h-4 w-4" />
                  Change Password
                </Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication (2FA)</Label>
                    <p className="text-sm text-muted-foreground">
                      Add an extra layer of security to your account
                    </p>
                  </div>
                  <Switch id="2fa" />
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <ShieldIcon className="h-5 w-5 text-muted-foreground" />
                    <h4 className="font-medium">Security Health</h4>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Medium</span>
                      <span className="text-sm text-muted-foreground">
                        2/4 security features enabled
                      </span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-muted">
                      <div
                        className="h-2 rounded-full bg-accent"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Enable 2FA to improve your security score
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Active Sessions</h3>

                <div className="space-y-3">
                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <UserIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Chrome on Windows</h4>
                        <p className="text-xs text-muted-foreground">
                          Mumbai, India • Current session
                        </p>
                      </div>
                    </div>
                    <Badge>Active Now</Badge>
                  </div>

                  <div className="flex items-center justify-between rounded-lg border p-3">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <UserIcon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">Safari on iPhone</h4>
                        <p className="text-xs text-muted-foreground">
                          Mumbai, India • Last active 2 hours ago
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <LogOutIcon className="mr-2 h-4 w-4" />
                      Log out
                    </Button>
                  </div>
                </div>

                <Button variant="outline">
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  Log out of all devices
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Connected Services</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Payment Gateways</h3>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CreditCardIcon className="h-5 w-5" />
                        </div>
                        <h4 className="font-medium">Razorpay</h4>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Connected on 12 Jan 2023
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        Settings
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        Disconnect
                      </Button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CreditCardIcon className="h-5 w-5" />
                        </div>
                        <h4 className="font-medium">Paytm</h4>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Not connected
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CreditCardIcon className="h-5 w-5" />
                        </div>
                        <h4 className="font-medium">Stripe</h4>
                      </div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Not connected
                    </p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Other Integrations</h3>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="flex flex-col gap-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <CalendarIcon className="h-5 w-5" />
                        </div>
                        <h4 className="font-medium">Google Calendar</h4>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Syncs events with your Google Calendar
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <MessageSquareIcon className="h-5 w-5" />
                        </div>
                        <h4 className="font-medium">WhatsApp Business</h4>
                      </div>
                      <Switch />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Send volunteer communications via WhatsApp
                    </p>
                  </div>

                  <div className="flex flex-col gap-2 rounded-lg border p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <MailIcon className="h-5 w-5" />
                        </div>
                        <h4 className="font-medium">Email Service</h4>
                      </div>
                      <Switch defaultChecked />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      SendGrid for transactional emails
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="advanced" className="mt-6 space-y-6">
          <Card className="border-amber-200 bg-amber-50 dark:border-amber-800 dark:bg-amber-950">
            <CardHeader>
              <CardTitle className="text-amber-800 dark:text-amber-200">
                Danger Zone
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-destructive/20 p-4">
                <h3 className="font-medium text-destructive">
                  Request Account Deletion
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  This action is irreversible. All your data will be permanently
                  removed.
                </p>
                <Button variant="destructive" className="mt-4">
                  <TrashIcon className="mr-2 h-4 w-4" />
                  Delete Account
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Download Full NGO Data</h3>
                    <p className="text-sm text-muted-foreground">
                      Export all your organization's data as a ZIP file
                    </p>
                  </div>
                  <Button variant="outline">
                    <DownloadIcon className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Archive Old Events</h3>
                    <p className="text-sm text-muted-foreground">
                      Move events older than 1 year to archives
                    </p>
                  </div>
                  <Button variant="outline">
                    <ArchiveIcon className="mr-2 h-4 w-4" />
                    Archive
                  </Button>
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Reset Dashboard Widgets</h3>
                    <p className="text-sm text-muted-foreground">
                      Restore default dashboard layout and widgets
                    </p>
                  </div>
                  <Button variant="outline">
                    <RefreshCcwIcon className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="font-medium">Future Features</h3>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Coming Soon</Badge>
                    <span className="text-sm">Multi-org Account Support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">Coming Soon</Badge>
                    <span className="text-sm">
                      Child Profiles for Regional Chapters
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;