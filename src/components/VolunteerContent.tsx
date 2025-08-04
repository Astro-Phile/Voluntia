import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

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
          variant="ghost" 
          className="mb-8 hover:bg-muted"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to choices
        </Button>
      </div>

      {/* Feature List */}
      <section className="w-full py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your volunteering journey starts here
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connect with meaningful opportunities, build your impact profile, and join a community of changemakers
            </p>
          </div>

          {/* Feature 1 */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Earn Badges & Recognition
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Level up your profile! Earn points and unlock badges for every contribution. 
                  Showcase your skills, dedication, and the positive impact you're making in your community.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 px-4 py-2 rounded-full">
                    <span className="text-lg">🏆</span>
                    <span className="text-sm font-medium">Achievement Unlocked</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 px-4 py-2 rounded-full">
                    <span className="text-lg">⭐</span>
                    <span className="text-sm font-medium">500 Impact Points</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-purple/10 to-brand-pink/10 rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-brand-purple/20 to-brand-pink/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-brand-purple to-brand-pink rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
                      <span className="text-white text-3xl">🏅</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Badge Animation Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-2">
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Build Your Impact Profile
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Create a beautiful, visual passport of your contributions and get endorsed for your skills. 
                  Let your volunteering story inspire others and open doors to new opportunities.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-brand-blue/10 to-brand-green/10 px-4 py-2 rounded-full">
                    <span className="text-lg">📈</span>
                    <span className="text-sm font-medium">Profile Views: 245</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-brand-green/10 to-brand-blue/10 px-4 py-2 rounded-full">
                    <span className="text-lg">✅</span>
                    <span className="text-sm font-medium">Skill Endorsed</span>
                  </div>
                </div>
              </div>
              <div className="lg:order-1 bg-gradient-to-br from-brand-blue/10 to-brand-green/10 rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-brand-blue/20 to-brand-green/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-brand-blue to-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-3xl">👤</span>
                    </div>
                    <p className="text-sm text-muted-foreground">User Profile Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">
                  Connect With Your Crew
                </h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Discover opportunities and connect with other volunteers who share your passion. 
                  Build lasting friendships and collaborate on projects that matter to you.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 bg-gradient-to-r from-brand-green/10 to-brand-purple/10 px-4 py-2 rounded-full">
                    <span className="text-lg">👥</span>
                    <span className="text-sm font-medium">15 New Connections</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gradient-to-r from-brand-purple/10 to-brand-pink/10 px-4 py-2 rounded-full">
                    <span className="text-lg">🎯</span>
                    <span className="text-sm font-medium">3 Matched Projects</span>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-brand-green/10 to-brand-purple/10 rounded-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-brand-green/20 to-brand-purple/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="flex justify-center items-center gap-2 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-green to-brand-blue rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">👋</span>
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-pink rounded-full flex items-center justify-center">
                        <span className="text-white text-lg">🤝</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Social Feed Preview</p>
                  </div>
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