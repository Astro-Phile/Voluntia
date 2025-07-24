import { ReactNode } from "react";
import { BottomNavigation } from "./BottomNavigation";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden md:block">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div className="md:ml-64">
        <Header />
        <main className="pb-20 md:pb-6 min-h-screen">
          {children}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden">
        <BottomNavigation />
      </div>
    </div>
  );
};