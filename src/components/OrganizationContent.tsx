import FeatureCard from "./FeatureCard";
import Stat from "./Stat";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface OrganizationContentProps {
  onBack: () => void;
}

const OrganizationContent = ({ onBack }: OrganizationContentProps) => {
  return (
    <div className="w-full animate-fade-in">
      {/* Back Button */}
      <div className="container mx-auto px-4 pt-8">
        <Button 
          onClick={onBack}
          variant="ghost" 
          className="mb-8 hover:bg-muted"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to choices
        </Button>
      </div>

      {/* Feature Grid */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Everything you need to manage your NGO
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful tools designed specifically for non-profit organizations to streamline operations and maximize impact
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FeatureCard
              icon="👥"
              title="Volunteer Management"
              description="Organize and engage your volunteers with powerful tools for recruitment, scheduling, and communication."
              color="blue"
            />
            <FeatureCard
              icon="📅"
              title="Event Planning"
              description="Plan, manage, and track your events from conception to completion with integrated tools."
              color="green"
            />
            <FeatureCard
              icon="📊"
              title="Impact Analytics"
              description="Measure and showcase your impact with comprehensive reporting and analytics tools."
              color="purple"
            />
            <FeatureCard
              icon="💝"
              title="Donation Tracking"
              description="Streamline donation collection and tracking with integrated payment solutions."
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="w-full py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Our First <span className="bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent">10 Partners</span>
          </h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Building the foundation for lasting impact
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <Stat value="10+" label="Partner NGOs" color="blue" />
            <Stat value="100+" label="Early Volunteers" color="green" />
            <Stat value="50+" label="Test Events" color="purple" />
            <Stat value="₹10L+" label="MVP Funding" color="pink" />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Streamline Your Operations?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of NGOs already using Voluntree to create lasting impact in their communities
            </p>
            
            <a 
              href="/ngo/login"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-brand-blue to-brand-green rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Go to Dashboard
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OrganizationContent;