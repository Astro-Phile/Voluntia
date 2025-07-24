import { Home, Calendar, Search, Heart, Bell, User, Settings, Menu } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Calendar, label: "Events", path: "/explore" },
  { icon: Heart, label: "Donate", path: "/donate" },
  { icon: Bell, label: "Notifications", path: "/notifications" },
  { icon: User, label: "Profile", path: "/profile" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

export const Sidebar = () => {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={cn(
      "fixed left-0 top-0 h-screen bg-card border-r border-border transition-all duration-300 z-40",
      isCollapsed ? "w-16" : "w-64"
    )}>
      <div className="flex items-center justify-between p-4 border-b border-border">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-lg text-foreground">Voluntree</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto"
        >
          <Menu size={20} />
        </Button>
      </div>

      <nav className="p-4 space-y-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex items-center gap-3 p-3 rounded-lg transition-all duration-200 group",
                isActive
                  ? "bg-teal-green/10 text-teal-green"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <Icon 
                size={20} 
                className={cn(
                  "transition-transform duration-200",
                  isActive && "scale-110"
                )}
              />
              {!isCollapsed && (
                <span className={cn(
                  "font-medium transition-all duration-200",
                  isActive && "font-semibold"
                )}>
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};