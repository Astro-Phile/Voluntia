import { HomeIcon, CalendarIcon, UsersIcon, PieChartIcon, UserCircleIcon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const MobileNavigation = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around border-t bg-background/80 backdrop-blur-lg md:hidden">
      <NavItem to="/" icon={<HomeIcon className="h-5 w-5" />} label="Home" />
      <NavItem
        to="/events"
        icon={<CalendarIcon className="h-5 w-5" />}
        label="Events"
      />
      <NavItem
        to="/volunteers"
        icon={<UsersIcon className="h-5 w-5" />}
        label="Volunteers"
      />
      <NavItem
        to="/reports"
        icon={<PieChartIcon className="h-5 w-5" />}
        label="Reports"
      />
      <NavItem
        to="/profile"
        icon={<UserCircleIcon className="h-5 w-5" />}
        label="Profile"
      />
    </nav>
  );
};

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "flex flex-col items-center gap-1 p-2 transition-colors",
        isActive
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      )
    }
    end
  >
    {icon}
    <span className="text-xs font-medium">{label}</span>
  </NavLink>
);

export default MobileNavigation;