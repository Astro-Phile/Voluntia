import { Button } from "@/components/ui/button";

interface ChoiceSelectorProps {
  onViewChange: (view: 'ngo' | 'volunteer') => void;
}

const ChoiceSelector = ({ onViewChange }: ChoiceSelectorProps) => {
  return (
    <section className="w-full py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          How will you make a difference?
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Choose your path to creating lasting impact in your community
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 max-w-2xl mx-auto">
          <Button
            onClick={() => onViewChange('ngo')}
            variant="outline"
            size="lg"
            className="flex-1 h-16 text-lg font-semibold border-2 border-border hover:border-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-brand-blue/10 group-hover:bg-white/20 flex items-center justify-center transition-colors">
                <span className="text-xl">🏢</span>
              </div>
              I'm an NGO/ORGANIZATION
            </div>
          </Button>
          
          <Button
            onClick={() => onViewChange('volunteer')}
            size="lg"
            className="flex-1 h-16 text-lg font-semibold bg-gradient-to-r from-brand-purple to-brand-pink hover:scale-105 transition-transform duration-300 text-white border-0"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center">
                <span className="text-xl">🙋‍♀️</span>
              </div>
              I'm a VOLUNTEER
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChoiceSelector;