import heroImage from "@/assets/hero-community-illustration.jpg";

const HeroSection = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-br from-background to-[hsl(var(--background-soft))]">
      <div className="container mx-auto px-4 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full mb-8">
          <span className="text-2xl">🌱</span>
          <span className="text-sm font-medium text-muted-foreground">
            Built for Community Impact
          </span>
          <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          The <span className="bg-gradient-to-r from-brand-green via-brand-blue to-brand-purple bg-clip-text text-transparent">Open-Source Platform</span>
          <br />
          for <span className="bg-gradient-to-r from-brand-purple to-brand-pink bg-clip-text text-transparent">Grassroots Causes</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          A simple, flexible, and free platform to find and manage volunteer opportunities.
        </p>

        {/* Visual Container */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-border">
            <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-brand-blue/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-brand-blue text-2xl">📊</span>
                </div>
                <p className="text-sm text-muted-foreground">UI Dashboard Preview</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-brand-purple/10 to-brand-pink/10 rounded-2xl p-8">
            <div className="aspect-video bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 rounded-lg flex items-center justify-center overflow-hidden">
              <img 
                src={heroImage} 
                alt="Community volunteers engaging in grassroots activities" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Trust Indicator */}
        <div className="mt-16 flex items-center justify-center gap-2 text-muted-foreground">
          <div className="w-2 h-2 bg-brand-green rounded-full"></div>
          <span className="text-sm">Open source and community-driven</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;