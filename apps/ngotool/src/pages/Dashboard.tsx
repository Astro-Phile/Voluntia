import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import StatCard from "@/components/dashboard/StatCard";
import ActivityItem from "@/components/dashboard/ActivityItem";
import EventCard from "@/components/dashboard/EventCard";
import TimeBasedGreeting from "@/components/dashboard/TimeBasedGreeting";
import QuickActions from "@/components/dashboard/QuickActions";
import {
  UsersIcon,
  DollarSignIcon,
  CalendarIcon,
  TrendingUpIcon,
  UserPlusIcon,
  CreditCardIcon,
  Leaf as TreeIcon,
  BarChart3Icon,
  EyeIcon,
  AlertTriangleIcon,
  MapPinIcon,
  ClockIcon,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <TimeBasedGreeting />
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <EyeIcon className="mr-2 h-4 w-4" />
            Analytics
          </Button>
          <Button size="sm">
            <BarChart3Icon className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>
      
      {/* Smart Alerts Panel */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        <Badge variant="destructive" className="flex items-center gap-1 px-3 py-1">
          <AlertTriangleIcon className="h-3 w-3" />
          3 pending KYC verifications
        </Badge>
        <Badge variant="secondary" className="flex items-center gap-1 px-3 py-1">
          <ClockIcon className="h-3 w-3" />
          Event reminder: Blood donation in 2 hours
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
          <MapPinIcon className="h-3 w-3" />
          5 volunteers active in field
        </Badge>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard
          icon={<UsersIcon className="h-5 w-5" />}
          title="Active Volunteers"
          value="142"
          change="8 this week"
          isPositive={true}
        />
        <StatCard
          icon={<DollarSignIcon className="h-5 w-5" />}
          title="Donations"
          value="₹2.4L"
          change="12% this month"
          isPositive={true}
        />
        <StatCard
          icon={<CalendarIcon className="h-5 w-5" />}
          title="Active Events"
          value="5"
          change="2 new"
          isPositive={true}
        />
        <StatCard
          icon={<TrendingUpIcon className="h-5 w-5" />}
          title="Impact Score"
          value="89"
          change="6% this month"
          isPositive={true}
        />
      </div>

      {/* Quick Actions */}
      <QuickActions />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">Recent Activity</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent className="px-2">
            <ActivityItem
              icon={<UserPlusIcon className="h-4 w-4" />}
              title="3 volunteers joined"
              time="2 hours ago"
              iconClassName="bg-primary/10 text-primary"
            />
            <ActivityItem
              icon={<CreditCardIcon className="h-4 w-4" />}
              title="₹15,000 received today via UPI"
              time="4 hours ago"
              iconClassName="bg-accent/20 text-accent-foreground"
            />
            <ActivityItem
              icon={<TreeIcon className="h-4 w-4" />}
              title="Tree Plantation event started"
              time="6 hours ago"
              iconClassName="bg-success/10 text-success"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-xl font-medium">Upcoming Events</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <EventCard
              title="Blood Donation Drive"
              date="Aug 20, 10:00 AM"
              location="City Hospital"
              volunteers={18}
              maxVolunteers={25}
              category="Health Camp"
              organizers="Dr. Smith, Nurse Jane"
            />
            <EventCard
              title="Legal Workshop"
              date="Aug 25, 2:00 PM"
              location="Community Hall"
              volunteers={12}
              maxVolunteers={20}
              category="Education"
              organizers="Adv. Patel, Legal Team"
            />
          </CardContent>
        </Card>
      </div>

      {/* NGO Tools Integration */}
      <div className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPinIcon className="h-5 w-5" />
              Active Volunteers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Field Volunteers</span>
                <Badge variant="secondary">5 Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Event Coordinators</span>
                <Badge variant="secondary">3 Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">On Break</span>
                <Badge variant="outline">2 Volunteers</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangleIcon className="h-5 w-5" />
              Pending Tasks
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">KYC Verifications</span>
                <Badge variant="destructive">3 Pending</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Document Renewals</span>
                <Badge variant="secondary">2 Due</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Event Approvals</span>
                <Badge variant="outline">1 Waiting</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSignIcon className="h-5 w-5" />
              Recent Donations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Today</span>
                <Badge variant="default">₹15,000</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">This Week</span>
                <Badge variant="secondary">₹45,000</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Monthly Goal</span>
                <Badge variant="outline">₹2,00,000</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;