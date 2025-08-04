import { Bell } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-green to-brand-blue flex items-center justify-center">
            <Bell className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Voluntree</h1>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-full">
            NGO Management Platform
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;