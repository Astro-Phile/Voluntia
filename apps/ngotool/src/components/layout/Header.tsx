import { Button } from "@/components/ui/button";
import { MenuIcon, BellIcon, BoltIcon, Route} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const [notifications] = useState(3); // Example notification count

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onMenuClick}
          >
            <MenuIcon className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Voluntia Logo"
              className="h-8 w-8 object-contain"
            />
            <span className="hidden text-xl font-semibold md:inline-block">
              Voluntree
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative">
            <BellIcon className="h-5 w-5" />
            {notifications > 0 && (
              <div>
                 <span className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-medium text-destructive-foreground">
                {notifications}
              </span>
              <span>
                <span className="sr-only"></span>
              </span>
              </div>
             
            )}
          </Button>
          <Link to="/settings" className="flex items-center">
            <Button variant="ghost" size="icon" className="relative">
              <BoltIcon className="h-5 w-5" />
              <span className="sr-only">Settings</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;