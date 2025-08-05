import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SearchIcon, FilterIcon, BookmarkIcon, CalendarIcon, DollarSignIcon, MapPinIcon } from "lucide-react";

const GrantDiscovery = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sector, setSector] = useState("");
  const [region, setRegion] = useState("");
  const [amountRange, setAmountRange] = useState("");

  const grants = [
    {
      id: 1,
      title: "Digital Education Initiative Grant",
      provider: "Tech Foundation India",
      amount: "₹2,00,000",
      deadline: "Nov 30, 2024",
      sector: "Education",
      region: "Pan India",
      description: "Supporting digital literacy programs in rural areas",
      eligibility: "Registered NGOs working in education sector",
      saved: false
    },
    {
      id: 2,
      title: "Women Empowerment Fund",
      provider: "Gender Equality Foundation",
      amount: "₹1,50,000",
      deadline: "Dec 15, 2024",
      sector: "Women Rights",
      region: "North India",
      description: "Empowering women through skill development and entrepreneurship",
      eligibility: "Organizations focused on women's welfare",
      saved: true
    },
    {
      id: 3,
      title: "Environmental Conservation Grant",
      provider: "Green Earth Society",
      amount: "₹3,00,000",
      deadline: "Jan 20, 2025",
      sector: "Environment",
      region: "Maharashtra",
      description: "Supporting tree plantation and waste management projects",
      eligibility: "Environmental NGOs with 3+ years experience",
      saved: false
    }
  ];

  const getDaysLeft = (deadline: string) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const diffTime = deadlineDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search grants..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-8"
          />
        </div>
        <div className="flex gap-2">
          <Select value={sector} onValueChange={setSector}>
            <SelectTrigger className="w-[140px]">
              <SelectValue placeholder="Sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="education">Education</SelectItem>
              <SelectItem value="health">Health</SelectItem>
              <SelectItem value="environment">Environment</SelectItem>
              <SelectItem value="women">Women Rights</SelectItem>
            </SelectContent>
          </Select>
          <Select value={region} onValueChange={setRegion}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Region" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pan-india">Pan India</SelectItem>
              <SelectItem value="north">North India</SelectItem>
              <SelectItem value="south">South India</SelectItem>
              <SelectItem value="west">West India</SelectItem>
              <SelectItem value="east">East India</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <FilterIcon className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {grants.map((grant) => {
          const daysLeft = getDaysLeft(grant.deadline);
          return (
            <Card key={grant.id} className="h-full">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div className="space-y-1 flex-1">
                    <CardTitle className="text-lg">{grant.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">by {grant.provider}</p>
                  </div>
                  <Button variant="ghost" size="sm">
                    <BookmarkIcon className={`h-4 w-4 ${grant.saved ? 'fill-current' : ''}`} />
                  </Button>
                </div>
                <div className="flex gap-2">
                  <Badge variant="outline">{grant.sector}</Badge>
                  {daysLeft <= 10 && (
                    <Badge variant="destructive">
                      {daysLeft} days left
                    </Badge>
                  )}
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{grant.description}</p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{grant.amount}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                    <span>Deadline: {grant.deadline}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPinIcon className="h-4 w-4 text-muted-foreground" />
                    <span>{grant.region}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Eligibility:</p>
                  <p className="text-xs">{grant.eligibility}</p>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    Apply Now
                  </Button>
                  <Button variant="outline" size="sm">
                    Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default GrantDiscovery;