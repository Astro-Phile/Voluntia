import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DownloadIcon,
  FileTextIcon,
  MailIcon,
  Calendar,
  UserIcon,
  CreditCardIcon,
  CalendarIcon,
  TagIcon,
  EditIcon,
  BarChart3Icon,
  PieChartIcon,
  LineChartIcon,
  ArrowUpRightIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  DollarSignIcon,
  UsersIcon,
  PinIcon,
} from "lucide-react";

// Placeholder for a chart component
const ChartPlaceholder = ({ type, height = "h-64" }: { type: string; height?: string }) => (
  <div className={`${height} w-full rounded-lg bg-muted/30 flex items-center justify-center flex-col gap-2 border`}>
    {type === "bar" && <BarChart3Icon className="h-8 w-8 text-muted-foreground" />}
    {type === "line" && <LineChartIcon className="h-8 w-8 text-muted-foreground" />}
    {type === "pie" && <PieChartIcon className="h-8 w-8 text-muted-foreground" />}
    <p className="text-sm text-muted-foreground">
      {type.charAt(0).toUpperCase() + type.slice(1)} Chart
    </p>
  </div>
);

// Map placeholder
const MapPlaceholder = () => (
  <div className="h-72 w-full rounded-lg bg-muted/30 flex items-center justify-center flex-col gap-2 border">
    <PinIcon className="h-8 w-8 text-muted-foreground" />
    <p className="text-sm text-muted-foreground">Impact Map</p>
  </div>
);

const MetricCard = ({
  title,
  value,
  change,
  isPositive = true,
  icon,
}: {
  title: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  icon: React.ReactNode;
}) => (
  <Card>
    <CardContent className="p-6">
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-1 text-2xl font-bold">{value}</p>
          {change && (
            <div className="mt-1 flex items-center gap-1">
              {isPositive ? (
                <TrendingUpIcon className="h-4 w-4 text-success" />
              ) : (
                <TrendingDownIcon className="h-4 w-4 text-destructive" />
              )}
              <span
                className={
                  isPositive ? "text-sm text-success" : "text-sm text-destructive"
                }
              >
                {change}
              </span>
            </div>
          )}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          {icon}
        </div>
      </div>
    </CardContent>
  </Card>
);

const Reports = () => {
  const [dateRange, setDateRange] = useState("30days");

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            View analytics and generate reports for your organization
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button variant="outline" size="sm">
            <DownloadIcon className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
          <Button variant="outline" size="sm">
            <FileTextIcon className="mr-2 h-4 w-4" />
            Export CSV
          </Button>
          <Button variant="outline" size="sm">
            <MailIcon className="mr-2 h-4 w-4" />
            Email Report
          </Button>
        </div>
      </div>

      <div className="flex gap-4 overflow-auto pb-2">
        <Button
          variant={dateRange === "7days" ? "default" : "outline"}
          size="sm"
          onClick={() => setDateRange("7days")}
        >
          Last 7 Days
        </Button>
        <Button
          variant={dateRange === "30days" ? "default" : "outline"}
          size="sm"
          onClick={() => setDateRange("30days")}
        >
          Last 30 Days
        </Button>
        <Button
          variant={dateRange === "90days" ? "default" : "outline"}
          size="sm"
          onClick={() => setDateRange("90days")}
        >
          Last 90 Days
        </Button>
        <Button
          variant={dateRange === "year" ? "default" : "outline"}
          size="sm"
          onClick={() => setDateRange("year")}
        >
          This Year
        </Button>
        <Button
          variant={dateRange === "custom" ? "default" : "outline"}
          size="sm"
          onClick={() => setDateRange("custom")}
        >
          Custom Range
        </Button>
      </div>

      <Tabs defaultValue="summary">
        <TabsList>
          <TabsTrigger value="summary">Summary</TabsTrigger>
          <TabsTrigger value="activities">Activities</TabsTrigger>
          <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
          <TabsTrigger value="donations">Donations</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="custom">Custom</TabsTrigger>
        </TabsList>

        <TabsContent value="summary" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <MetricCard
              title="Total Projects"
              value="32"
              change="15% ↑"
              isPositive={true}
              icon={<EditIcon className="h-6 w-6 text-primary" />}
            />
            <MetricCard
              title="Total Events"
              value="128"
              change="8% ↑"
              isPositive={true}
              icon={<CalendarIcon className="h-6 w-6 text-primary" />}
            />
            <MetricCard
              title="Volunteer Hours"
              value="3,426"
              change="12% ↑"
              isPositive={true}
              icon={<UserIcon className="h-6 w-6 text-primary" />}
            />
            <MetricCard
              title="Total Donations"
              value="₹8.6L"
              change="5% ↑"
              isPositive={true}
              icon={<DollarSignIcon className="h-6 w-6 text-primary" />}
            />
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Impact Map</CardTitle>
              </CardHeader>
              <CardContent>
                <MapPlaceholder />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Activity Trends</CardTitle>
                <Button variant="ghost" size="sm">
                  <ArrowUpRightIcon className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent>
                <ChartPlaceholder type="line" />
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Overall Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Participation Rate</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Funds Utilization</span>
                    <span className="text-sm font-medium">72%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "72%" }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Impact Score</span>
                    <span className="text-sm font-medium">91%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: "91%" }}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activities" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Activities by Type</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder type="bar" height="h-80" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="volunteers" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Volunteer Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartPlaceholder type="line" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Retention Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartPlaceholder type="line" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Skill Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartPlaceholder type="pie" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="donations" className="mt-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Donation Trend</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartPlaceholder type="line" height="h-80" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Donation Sources</CardTitle>
              </CardHeader>
              <CardContent>
                <ChartPlaceholder type="pie" height="h-80" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="events" className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartPlaceholder type="bar" height="h-80" />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="mt-6 space-y-6">
          <Card className="p-6">
            <div className="text-center">
              <h3 className="text-lg font-medium">Build Your Custom Report</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Drag and drop report modules to create your custom report
              </p>
              <Button className="mt-4">
                <EditIcon className="mr-2 h-4 w-4" />
                Start Building
              </Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Reports;