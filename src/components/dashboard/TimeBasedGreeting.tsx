import { useState, useEffect } from "react";

const TimeBasedGreeting = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = currentTime.getHours();
    
    if (hour < 12) {
      return "Good morning";
    } else if (hour < 17) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  const formatTime = () => {
    return currentTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  const formatDate = () => {
    return currentTime.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight">
        {getGreeting()}, Admin!
      </h1>
      <div className="flex flex-col gap-1 text-muted-foreground">
        <p>Welcome to your NGO management dashboard</p>
        <p className="text-sm">
          {formatDate()} • {formatTime()}
        </p>
      </div>
    </div>
  );
};

export default TimeBasedGreeting;