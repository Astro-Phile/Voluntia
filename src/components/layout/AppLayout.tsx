import { ReactNode } from "react";
import { BottomNavigation } from "./BottomNavigation";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-20 min-h-screen">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};