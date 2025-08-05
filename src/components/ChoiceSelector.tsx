import { Button } from "@/components/ui/button";
import communityImage from "@/assets/community-volunteers.jpg";
import heroImage from "@/assets/hero-community-illustration.jpg";

interface ChoiceSelectorProps {
  onViewChange: (view: 'ngo' | 'volunteer') => void;
}

const ChoiceSelector = ({ onViewChange }: ChoiceSelectorProps) => {
  const handleViewChange = (view: 'ngo' | 'volunteer') => {
    // Scroll to top when changing views
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onViewChange(view);
  };

  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          How will you make a difference?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose your path to creating lasting impact in your community
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* NGO Card */}
          <div 
            onClick={() => handleViewChange('ngo')}
            className="group cursor-pointer bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:scale-[1.03] hover:border-l-4 hover:border-l-orange-400 transition-all duration-300 overflow-hidden animate-fade-in"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={heroImage} 
                alt="NGO Dashboard" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-blue to-brand-green rounded-xl flex items-center justify-center">
                  <span className="text-2xl text-white">🏢</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">NGO/ORGANIZATION</h3>
              </div>
              <p className="text-muted-foreground text-left">
                Powerful tools to manage volunteers, track impact, and streamline your organization's operations.
              </p>
            </div>
          </div>

          {/* Volunteer Card */}
          <div 
            onClick={() => handleViewChange('volunteer')}
            className="group cursor-pointer bg-white rounded-2xl border border-border shadow-sm hover:shadow-lg hover:scale-[1.03] hover:border-l-4 hover:border-l-orange-400 transition-all duration-300 overflow-hidden animate-fade-in"
          >
            <div className="aspect-video relative overflow-hidden">
              <img 
                src={communityImage} 
                alt="Volunteer Community" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-pink rounded-xl flex items-center justify-center">
                  <span className="text-2xl text-white">🙋‍♀️</span>
                </div>
                <h3 className="text-xl font-bold text-foreground">VOLUNTEER</h3>
              </div>
              <p className="text-muted-foreground text-left">
                Find meaningful opportunities, track your impact, and connect with like-minded changemakers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoiceSelector;