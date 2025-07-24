import { Settings, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { QRScanner } from "@/components/QRScanner";

export const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showQRScanner, setShowQRScanner] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <header className="bg-background border-b border-border px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Mobile Header - Company Name */}
          <div className="flex items-center gap-2 md:hidden">
            <div className="w-8 h-8 bg-teal-green rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <span className="font-bold text-lg text-foreground">Voluntree</span>
          </div>

          {/* Desktop Header - Greeting */}
          <div className="hidden md:block">
            <h1 className="text-2xl font-bold text-foreground">
              {getGreeting()}, Volunteer! 👋
            </h1>
            <p className="text-muted-foreground">
              Welcome to your volunteer dashboard
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {formatDate(currentTime)} • {formatTime(currentTime)}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowQRScanner(true)}
              className="text-muted-foreground hover:text-foreground"
            >
              <QrCode size={20} />
            </Button>
            <Link to="/settings">
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-foreground"
              >
                <Settings size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <QRScanner 
        isOpen={showQRScanner} 
        onClose={() => setShowQRScanner(false)} 
      />
    </>
  );
};