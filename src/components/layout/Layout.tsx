import { Outlet } from "react-router-dom";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import DesktopSidebar from "./DesktopSidebar";
import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header onMenuClick={() => setMobileMenuOpen(true)} />

      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SheetContent side="left" className="w-64 p-0">
          <DesktopSidebar />
        </SheetContent>
      </Sheet>

      <div className="flex flex-1">
        <DesktopSidebar />
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>

      <MobileNavigation />
    </div>
  );
}