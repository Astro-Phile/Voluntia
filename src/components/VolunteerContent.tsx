import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ProgressWidget from "./ProgressWidget";
import MyImpactWidget from "./MyImpactWidget";
import SuggestedEventWidget from "./SuggestedEventWidget";
import MapViewWidget from "./MapViewWidget";

interface VolunteerContentProps {
  onBack: () => void;
}

const VolunteerContent = ({ onBack }: VolunteerContentProps) => {
  return (
    <div className="w-full animate-fade-in">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button 
          onClick={onBack}
          variant="outline" 
          className="mb-8 bg-muted/50 backdrop-blur-sm hover:bg-muted fixed top-4 left-4 z-50 shadow-md"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to choices
        </Button>
      </div>

      {/* Dashboard Preview */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your Personal Impact Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find verified NGOs and donation opportunities, track your contributions, and discover meaningful ways to help your community
            </p>
          </div>

          {/* Dashboard Widgets */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <ProgressWidget />
              <MyImpactWidget />
              <SuggestedEventWidget />
              <MapViewWidget />
            </div>
            
            {/* Preview Animation */}
            <div className="bg-gradient-to-br from-brand-purple/5 to-brand-pink/5 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  See Your Impact Come to Life
                </h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Watch your contributions create ripples of change in your community
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-blue to-brand-green rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <span className="text-white text-3xl">🎯</span>
                  </div>
                  <h4 className="font-semibold mb-2">Find Verified NGOs</h4>
                  <p className="text-sm text-muted-foreground">Discover trusted organizations near you with verified credentials</p>
                </div>
                
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-3xl">💝</span>
                  </div>
                  <h4 className="font-semibold mb-2">Secure Donations</h4>
                  <p className="text-sm text-muted-foreground">Make verified donations to fundraising events with full transparency</p>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center items-center gap-2 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-green to-brand-blue rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">📍</span>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">🏆</span>
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">Location & Impact Based</h4>
                  <p className="text-sm text-muted-foreground">Find opportunities by location, urgency, and track your growing impact</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full py-20 bg-gradient-to-br from-brand-purple/5 to-brand-pink/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of volunteers already making a difference in their communities through Voluntree
            </p>
            
            <a 
              href="/volunteer/login"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-pink rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Join the Community
              <span className="ml-2">🚀</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VolunteerContent;