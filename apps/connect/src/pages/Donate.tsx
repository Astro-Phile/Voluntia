import { useState } from "react";
import { Heart, Shield, TrendingUp, IndianRupee, Star, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Donate() {
  const [donationAmount, setDonationAmount] = useState("");
  const [selectedNGO, setSelectedNGO] = useState<number | null>(null);

  const ngos = [
    {
      id: 1,
      name: "Clean Coast Initiative",
      cause: "Environment",
      rating: 4.8,
      verified: true,
      description: "Protecting marine life through beach cleanups",
      impact: "₹500 = 50 kg plastic removed",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=200&fit=crop",
      raised: 250000,
      goal: 500000
    },
    {
      id: 2,
      name: "Feed the Need",
      cause: "Hunger",
      rating: 4.9,
      verified: true,
      description: "Providing meals to underprivileged families",
      impact: "₹200 = 10 meals served",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=200&fit=crop",
      raised: 180000,
      goal: 300000
    },
    {
      id: 3,
      name: "Learning Together",
      cause: "Education",
      rating: 4.7,
      verified: true,
      description: "Educating children in rural communities",
      impact: "₹1000 = 1 month education",
      image: "https://images.unsplash.com/photo-1497486751825-1233686d5d80?w=400&h=200&fit=crop",
      raised: 420000,
      goal: 600000
    }
  ];

  const donationHistory = [
    { id: 1, ngo: "Clean Coast Initiative", amount: 500, date: "2 days ago", impact: "50 kg plastic removed" },
    { id: 2, ngo: "Feed the Need", amount: 200, date: "1 week ago", impact: "10 meals served" },
    { id: 3, ngo: "Learning Together", amount: 1000, date: "2 weeks ago", impact: "1 month education provided" }
  ];

  const totalDonated = donationHistory.reduce((sum, donation) => sum + donation.amount, 0);

  const presetAmounts = [100, 250, 500, 1000];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-warm px-6 pt-12 pb-6 text-white">
        <h1 className="text-2xl font-bold mb-2">Donate & Impact</h1>
        <p className="text-white/90">Every rupee creates a meaningful change</p>
      </div>

      <div className="px-6 -mt-2 space-y-6 pb-6">
        <Tabs defaultValue="ngos" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="ngos">NGOs</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="impact">Impact</TabsTrigger>
          </TabsList>

          <TabsContent value="ngos" className="space-y-4">
            {/* Quick Donate Card */}
            {selectedNGO && (
              <Card className="shadow-elevated border-teal-green/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="text-soft-coral" size={20} />
                    Quick Donate
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-2">
                    {presetAmounts.map((amount) => (
                      <Button
                        key={amount}
                        variant={donationAmount === amount.toString() ? "orange" : "outline"}
                        onClick={() => setDonationAmount(amount.toString())}
                      >
                        ₹{amount}
                      </Button>
                    ))}
                  </div>
                  <div className="relative">
                    <IndianRupee size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input
                      placeholder="Custom amount"
                      value={donationAmount}
                      onChange={(e) => setDonationAmount(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button variant="orange" className="w-full" size="lg">
                    Donate ₹{donationAmount || "0"} Now
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* NGO Cards */}
            <div className="space-y-4">
              {ngos.map((ngo) => (
                <Card 
                  key={ngo.id} 
                  className={`shadow-card hover:shadow-elevated transition-all duration-200 cursor-pointer ${
                    selectedNGO === ngo.id ? 'ring-2 ring-teal-green' : ''
                  }`}
                  onClick={() => setSelectedNGO(selectedNGO === ngo.id ? null : ngo.id)}
                >
                  <CardContent className="p-0">
                    {/* Cover Image */}
                    <div className="relative h-32 bg-gradient-primary rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 bg-teal-green/20" />
                      <div className="absolute top-3 right-3 flex gap-2">
                        {ngo.verified && (
                          <Badge className="bg-badge-blue text-white">
                            <Shield size={12} className="mr-1" />
                            Verified
                          </Badge>
                        )}
                        <Badge variant="secondary" className="bg-white/90 text-graphite-gray">
                          {ngo.cause}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-4 space-y-3">
                      {/* NGO Info */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-bold text-foreground">{ngo.name}</h3>
                          <p className="text-sm text-muted-foreground">{ngo.description}</p>
                        </div>
                        <div className="flex items-center gap-1 text-sunrise-yellow">
                          <Star size={14} fill="currentColor" />
                          <span className="text-sm font-medium">{ngo.rating}</span>
                        </div>
                      </div>

                      {/* Impact Statement */}
                      <div className="bg-accent/50 rounded-lg p-3">
                        <p className="text-sm font-medium text-foreground">{ngo.impact}</p>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Raised</span>
                          <span className="font-medium">₹{ngo.raised.toLocaleString()} / ₹{ngo.goal.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-teal-green h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(ngo.raised / ngo.goal) * 100}%` }}
                          />
                        </div>
                      </div>

                      <Button 
                        variant="teal" 
                        className="w-full"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedNGO(ngo.id);
                        }}
                      >
                        <Heart size={16} className="mr-2" />
                        Donate Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            {/* Summary Card */}
            <Card className="shadow-card">
              <CardContent className="p-6 text-center">
                <TrendingUp size={32} className="mx-auto text-teal-green mb-2" />
                <div className="text-2xl font-bold text-foreground">₹{totalDonated.toLocaleString()}</div>
                <div className="text-muted-foreground">Total Donated</div>
                <Badge variant="secondary" className="mt-2 bg-sunrise-yellow/20 text-sunrise-yellow">
                  <Award size={12} className="mr-1" />
                  Generous Donor
                </Badge>
              </CardContent>
            </Card>

            {/* History List */}
            <div className="space-y-3">
              {donationHistory.map((donation) => (
                <Card key={donation.id} className="shadow-card">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">{donation.ngo}</h3>
                        <p className="text-sm text-muted-foreground">{donation.date}</p>
                        <p className="text-xs text-success mt-1">Impact: {donation.impact}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-foreground">₹{donation.amount}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="impact" className="space-y-4">
            {/* Impact Summary */}
            <div className="grid grid-cols-2 gap-3">
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-teal-green">3</div>
                  <div className="text-xs text-muted-foreground">NGOs Supported</div>
                </CardContent>
              </Card>
              <Card className="shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-soft-coral">15</div>
                  <div className="text-xs text-muted-foreground">Lives Impacted</div>
                </CardContent>
              </Card>
            </div>

            {/* Impact Stories */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Your Impact Story</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gradient-to-r from-teal-green/10 to-sunrise-yellow/10 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    "Thanks to your donations, we've been able to provide 25 meals to families in need and remove 50 kg of plastic from our beaches. Your support is creating real change!"
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">- Combined impact from your donations</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}