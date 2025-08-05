import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChoiceSelector from "@/components/ChoiceSelector";
import OrganizationContent from "@/components/OrganizationContent";
import VolunteerContent from "@/components/VolunteerContent";
import StickyLoginButton from "@/components/StickyLoginButton";

type ViewMode = 'default' | 'ngo' | 'volunteer';

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('default');
  const [isAtBottom, setIsAtBottom] = useState(false);

  const handleViewChange = (view: 'ngo' | 'volunteer') => {
    setViewMode(view);
  };

  const handleBackToDefault = () => {
    setViewMode('default');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const documentHeight = document.body.offsetHeight;
      setIsAtBottom(scrollPosition >= documentHeight - 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {viewMode === 'default' && (
        <>
          <HeroSection />
          <ChoiceSelector onViewChange={handleViewChange} />
        </>
      )}
      
      {viewMode === 'ngo' && (
        <OrganizationContent onBack={handleBackToDefault} />
      )}
      
      {viewMode === 'volunteer' && (
        <VolunteerContent onBack={handleBackToDefault} />
      )}
      
      {/* Sticky Login Button */}
      {viewMode !== 'default' && (
        <StickyLoginButton 
          viewMode={viewMode} 
          isAtBottom={isAtBottom} 
        />
      )}
    </div>
  );
};

export default Index;
