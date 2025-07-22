import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import StatCard from "@/components/dashboard/StatCard";
import ActivityItem from "@/components/dashboard/ActivityItem";
import EventCard from "@/components/dashboard/EventCard";
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
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your NGO management dashboard
          </p>
        </div>
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
            />
            <EventCard
              title="Legal Workshop"
              date="Aug 25, 2:00 PM"
              location="Community Hall"
              volunteers={12}
              maxVolunteers={20}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;