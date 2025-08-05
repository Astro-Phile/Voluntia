import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  PenIcon,
  UploadIcon,
  UserIcon,
  BuildingIcon,
  MapPinIcon,
  CalendarIcon,
  Languages as LanguageIcon,
  FileTextIcon,
  FileIcon,
  UserCogIcon,
  CreditCardIcon,
  Building2 as BankIcon,
  QrCodeIcon,
} from "lucide-react";
import logo from "@/assets/logo.png";

const ProfileBadge = ({
  status,
}: {
  status: "verified" | "pending" | "missing";
}) => {
  const statusConfig = {
    verified: {
      icon: CheckCircleIcon,
      text: "Verified",
      className: "bg-success/10 text-success",
    },
    pending: {
      icon: ClockIcon,
      text: "Under Review",
      className: "bg-accent/10 text-accent-foreground",
    },
    missing: {
      icon: XCircleIcon,
      text: "Missing",
      className: "bg-destructive/10 text-destructive",
    },
  };

  const { icon: Icon, text, className } = statusConfig[status];

  return (
    <Badge variant="outline" className={className}>
      <Icon className="mr-1 h-3 w-3" />
      {text}
    </Badge>
  );
};

const DocumentCard = ({
  title,
  description,
  status,
}: {
  title: string;
  description: string;
  status: "verified" | "pending" | "missing";
}) => (
  <Card variant="hover">
    <CardContent className="flex items-start justify-between p-4">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <FileTextIcon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-medium">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <ProfileBadge status={status} />
        <Button variant="ghost" size="sm">
          {status === "missing" ? (
            <UploadIcon className="h-4 w-4" />
          ) : (
            <PenIcon className="h-4 w-4" />
          )}
        </Button>
      </div>
    </CardContent>
  </Card>
);

const Profile = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
          <p className="text-muted-foreground">
            Manage your organization's profile and documents
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">View Public Page</Button>
          <Button>
            <PenIcon className="mr-2 h-4 w-4" />
            Edit
          </Button>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <div className="flex h-20 w-20 items-center justify-center rounded-lg border bg-background p-1">
              <img
                src={logo}
                alt="NGO Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center gap-2">
                <h2 className="text-2xl font-bold">Voluntree</h2>
                <ProfileBadge status="verified" />
              </div>
              <p className="text-muted-foreground">Youth Organization</p>
              <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
                <Badge variant="outline">Health</Badge>
                <Badge variant="outline">Education</Badge>
                <Badge variant="outline">Environment</Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-center md:text-right">
            <div className="flex items-center justify-center gap-1 md:justify-end">
              <CalendarIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Founded: 2020</span>
            </div>
            <div className="flex items-center justify-center gap-1 md:justify-end">
              <MapPinIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Head Office: Mumbai, India</span>
            </div>
            <div className="flex items-center justify-center gap-1 md:justify-end">
              <LanguageIcon className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm">Languages: English, Hindi</span>
            </div>
          </div>
        </div>
      </div>

      <Tabs defaultValue="basic">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="basic">Basic Info</TabsTrigger>
          <TabsTrigger value="team">Team & Founders</TabsTrigger>
          <TabsTrigger value="legal">Legal & Docs</TabsTrigger>
          <TabsTrigger value="donation">Donation Settings</TabsTrigger>
          <TabsTrigger value="stats">Credibility & Stats</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Mission & Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="mission">Mission</Label>
                  <Textarea
                    id="mission"
                    readOnly
                    defaultValue="To empower communities through education, health initiatives, and environmental conservation efforts, creating sustainable change for a better tomorrow."
                    className="h-24 resize-none"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vision">Vision</Label>
                  <Textarea
                    id="vision"
                    readOnly
                    defaultValue="A world where every community has equal access to education, healthcare, and a clean environment, empowering individuals to reach their full potential."
                    className="h-24 resize-none"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Organization Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="entity">Legal Entity Type</Label>
                  <Input
                    id="entity"
                    readOnly
                    defaultValue="Registered Trust"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="founded">Founded</Label>
                  <Input
                    id="founded"
                    readOnly
                    defaultValue="2020"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Head Office</Label>
                  <Input
                    id="location"
                    readOnly
                    defaultValue="Mumbai, India"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="languages">Languages</Label>
                  <Input
                    id="languages"
                    readOnly
                    defaultValue="English, Hindi"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="mt-6 space-y-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Founders</CardTitle>
              <Button variant="outline" size="sm">
                <PenIcon className="mr-2 h-4 w-4" />
                Edit
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Priya Sharma</h3>
                    <p className="text-sm text-muted-foreground">Co-Founder & CEO</p>
                    <p className="mt-2 text-sm">
                      Former tech executive with 15 years of experience in social impact projects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-medium">Rajesh Gupta</h3>
                    <p className="text-sm text-muted-foreground">Co-Founder & COO</p>
                    <p className="mt-2 text-sm">
                      Social entrepreneur with background in healthcare and education reform.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Current Team</CardTitle>
                <Button>
                  <UserIcon className="mr-2 h-4 w-4" />
                  Invite Member
                </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="flex items-start gap-3 rounded-lg border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Ananya Singh</h3>
                    <p className="text-sm text-muted-foreground">Program Director</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Vikram Mehta</h3>
                    <p className="text-sm text-muted-foreground">Finance Head</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg border p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <UserIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Maya Patel</h3>
                    <p className="text-sm text-muted-foreground">Volunteer Coordinator</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="legal" className="mt-6 space-y-4">
          <div className="flex justify-end">
            <Button>
              <UploadIcon className="mr-2 h-4 w-4" />
              Upload Document
            </Button>
          </div>
          <DocumentCard
            title="NGO Registration Certificate"
            description="Valid registration under Societies Act, 1860"
            status="verified"
          />
          <DocumentCard
            title="80G Certificate"
            description="Tax exemption certificate for donations"
            status="verified"
          />
          <DocumentCard
            title="12A Certificate"
            description="Income tax exemption for the organization"
            status="pending"
          />
          <DocumentCard
            title="PAN Details"
            description="Permanent Account Number details"
            status="verified"
          />
          <DocumentCard
            title="Annual Report 2023"
            description="Financial report for the year 2023"
            status="missing"
          />
          <DocumentCard
            title="FCRA Registration"
            description="Foreign Contribution Regulation Act certificate"
            status="missing"
          />
        </TabsContent>

        <TabsContent value="donation" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Default Donation Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="font-medium">Accept Donations Via</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <BankIcon className="h-5 w-5" />
                      </div>
                      <span>Bank Transfer</span>
                      <Badge className="ml-auto">Enabled</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <CreditCardIcon className="h-5 w-5" />
                      </div>
                      <span>Payment Gateway</span>
                      <Badge className="ml-auto">Enabled</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <QrCodeIcon className="h-5 w-5" />
                      </div>
                      <span>UPI</span>
                      <Badge className="ml-auto">Enabled</Badge>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium">Suggested Donation Amounts</h3>
                  <div className="grid gap-2 sm:grid-cols-2">
                    <Card className="flex items-center justify-between p-3">
                      <span>₹100</span>
                      <span className="text-sm text-muted-foreground">1 Meal</span>
                    </Card>
                    <Card className="flex items-center justify-between p-3">
                      <span>₹500</span>
                      <span className="text-sm text-muted-foreground">5 Trees</span>
                    </Card>
                    <Card className="flex items-center justify-between p-3">
                      <span>₹1000</span>
                      <span className="text-sm text-muted-foreground">1 Health Kit</span>
                    </Card>
                    <Card className="flex items-center justify-between p-3">
                      <span>₹5000</span>
                      <span className="text-sm text-muted-foreground">Education</span>
                    </Card>
                  </div>
                  <Button variant="outline" className="w-full">
                    <PenIcon className="mr-2 h-4 w-4" />
                    Edit Amounts
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Donation Campaigns</CardTitle>
                <Button>
                  <UserIcon className="mr-2 h-4 w-4" />
                  Create Campaign
                </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Card className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-4">
                      <h3 className="font-medium">Plant 1000 Trees Campaign</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Target: ₹50,000 | Raised: ₹32,500
                      </p>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        65% complete | 15 days left
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-t bg-muted/20 p-4 md:border-l md:border-t-0">
                      <Button variant="outline" size="sm">
                        <PenIcon className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button size="sm">
                        <QrCodeIcon className="mr-2 h-4 w-4" />
                        QR Code
                      </Button>
                    </div>
                  </div>
                </Card>
                <Card className="overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-4">
                      <h3 className="font-medium">Education for 100 Children</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Target: ₹1,00,000 | Raised: ₹25,000
                      </p>
                      <div className="mt-2 h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <p className="mt-1 text-xs text-muted-foreground">
                        25% complete | 30 days left
                      </p>
                    </div>
                    <div className="flex items-center gap-2 border-t bg-muted/20 p-4 md:border-l md:border-t-0">
                      <Button variant="outline" size="sm">
                        <PenIcon className="mr-2 h-4 w-4" />
                        Edit
                      </Button>
                      <Button size="sm">
                        <QrCodeIcon className="mr-2 h-4 w-4" />
                        QR Code
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stats" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Strength</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm font-medium">85% Complete</span>
                  <span className="text-sm text-muted-foreground">3 items missing</span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-muted">
                  <div className="h-2.5 rounded-full bg-primary" style={{ width: "85%" }}></div>
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-success" />
                  <span>Basic Information</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-success" />
                  <span>Team Information</span>
                </div>
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-5 w-5 text-accent" />
                  <span>Legal Documents (In Progress)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircleIcon className="h-5 w-5 text-success" />
                  <span>Donation Settings</span>
                </div>
                <div className="flex items-center gap-2">
                  <XCircleIcon className="h-5 w-5 text-destructive" />
                  <span>Annual Reports (Missing)</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Credibility & Impact</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="space-y-2 rounded-lg border p-4">
                  <h3 className="font-medium">Total Events</h3>
                  <p className="text-3xl font-bold">128</p>
                </div>
                <div className="space-y-2 rounded-lg border p-4">
                  <h3 className="font-medium">Volunteers Engaged</h3>
                  <p className="text-3xl font-bold">1,240</p>
                </div>
                <div className="space-y-2 rounded-lg border p-4">
                  <h3 className="font-medium">Lives Impacted</h3>
                  <p className="text-3xl font-bold">12K+</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="mb-3 font-medium">Partner Ratings</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center gap-3 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BuildingIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Corporate Partner XYZ</h4>
                      <div className="mt-1 flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                              <UserIcon
                              key={i}
                              className={`h-4 w-4 ${
                                i < 5 ? "text-accent" : "text-muted"
                              }`}
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border p-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <BuildingIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-medium">Foundation ABC</h4>
                      <div className="mt-1 flex">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                              <UserIcon
                              key={i}
                              className={`h-4 w-4 ${
                                i < 4 ? "text-accent" : "text-muted"
                              }`}
                            />
                          ))}
                      </div>
                    </div>
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

export default Profile;