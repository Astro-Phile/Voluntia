import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ChoiceSelector from "@/components/ChoiceSelector";
import OrganizationContent from "@/components/OrganizationContent";
import VolunteerContent from "@/components/VolunteerContent";

type ViewMode = 'default' | 'organization' | 'volunteer';

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>('default');

  const handleViewChange = (view: 'organization' | 'volunteer') => {
    setViewMode(view);
  };

  const handleBackToDefault = () => {
    setViewMode('default');
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {viewMode === 'default' && (
        <>
          <HeroSection />
          <ChoiceSelector onViewChange={handleViewChange} />
        </>
      )}
      
      {viewMode === 'organization' && (
        <OrganizationContent onBack={handleBackToDefault} />
      )}
      
      {viewMode === 'volunteer' && (
        <VolunteerContent onBack={handleBackToDefault} />
      )}
    </div>
  );
};

export default Index;
