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
              subText="Manage the full volunteer lifecycle, from onboarding and attendance to feedback and recognition—all in one place."
              color="blue"
            />
            <FeatureCard
              icon="📅"
              title="Event Planning"
              description="Plan, manage, and track your events from conception to completion with integrated tools."
              subText="Focus on long-term community building, not just one-off event logistics."
              color="green"
            />
            <FeatureCard
              icon="📊"
              title="Impact Analytics"
              description="Measure and showcase your impact with comprehensive reporting and analytics tools."
              subText="Simple dashboards that help you tell your story to supporters and funders."
              color="purple"
            />
            <FeatureCard
              icon="💝"
              title="Donation Tracking"
              description="Streamline donation collection and tracking with integrated payment solutions."
              subText="Transparent tracking that builds trust with your community supporters."
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* Built For Section */}
      <section className="w-full py-20 bg-gradient-to-br from-muted/30 to-background">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-4 text-foreground">
            Built <span className="bg-gradient-to-r from-brand-green to-brand-blue bg-clip-text text-transparent">For</span>
          </h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Designed specifically for the grassroots organizations that need simple, effective tools
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🎓</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">The College Eco-Club</h4>
              <p className="text-sm text-muted-foreground text-center">Student organizations driving campus sustainability</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-green to-brand-purple rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🤝</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">The Rural Self-Help Group</h4>
              <p className="text-sm text-muted-foreground text-center">Community groups creating local economic opportunities</p>
            </div>
            
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-white">🏘️</span>
              </div>
              <h4 className="font-semibold text-foreground mb-2">The Neighborhood Initiative</h4>
              <p className="text-sm text-muted-foreground text-center">Local groups tackling community challenges together</p>
            </div>
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