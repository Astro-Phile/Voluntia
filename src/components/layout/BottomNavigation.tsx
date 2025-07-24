import { Home, Search, Heart, Bell, User } from "lucide-react";
import { useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Explore", path: "/explore" },
  { icon: Heart, label: "Donate", path: "/donate" },
  { icon: Bell, label: "Inbox", path: "/notifications" },
  { icon: User, label: "Profile", path: "/profile" },
];

export const BottomNavigation = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex items-center justify-around px-2 py-2">
        {navItems.map(({ icon: Icon, label, path }) => {
          const isActive = location.pathname === path;
          
          return (
            <Link
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center gap-1 p-2 rounded-lg min-w-0 flex-1 transition-all duration-200",
                isActive
                  ? "text-teal-green bg-teal-green/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              )}
            >
              <Icon 
                size={22} 
                className={cn(
                  "transition-transform duration-200",
                  isActive && "scale-110"
                )}
              />
              <span className={cn(
                "text-xs font-medium truncate",
                isActive && "font-semibold"
              )}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};