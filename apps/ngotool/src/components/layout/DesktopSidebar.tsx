import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  HomeIcon,
  CalendarIcon,
  UsersIcon,
  PieChartIcon,
  UserCircleIcon,
  Settings2Icon,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const DesktopSidebar = () => {
  const menuItems = [
    { to: "/", icon: HomeIcon, label: "Home" },
    { to: "/events", icon: CalendarIcon, label: "Events" },
    { to: "/volunteers", icon: UsersIcon, label: "Volunteers" },
    { to: "/reports", icon: PieChartIcon, label: "Reports" },
    { to: "/profile", icon: UserCircleIcon, label: "Profile" },
    { to: "/settings", icon: Settings2Icon, label: "Settings" },
  ];

  return (
    <nav className="hidden border-r bg-card md:flex md:w-64">
      <div className="flex w-full flex-col gap-2 p-4">
        {menuItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end
            className={({ isActive }) =>
              cn(
                "group flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default DesktopSidebar;