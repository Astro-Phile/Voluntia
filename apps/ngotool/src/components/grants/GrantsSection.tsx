import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusIcon, FileTextIcon, CalendarIcon, DollarSignIcon, CheckCircleIcon, ClockIcon, XCircleIcon } from "lucide-react";

const GrantsSection = () => {
  const [grantsProvided] = useState([
    {
      id: 1,
      name: "Youth Education Grant",
      description: "Supporting educational initiatives for underprivileged youth",
      amount: "₹50,000",
      deadline: "Dec 31, 2024",
      applications: 12
    },
    {
      id: 2,
      name: "Environmental Action Fund",
      description: "For environmental conservation and awareness projects",
      amount: "₹25,000",
      deadline: "Nov 15, 2024",
      applications: 8
    }
  ]);

  const [grantsApplied] = useState([
    {
      id: 1,
      name: "Community Health Initiative Grant",
      provider: "Health Foundation India",
      amount: "₹100,000",
      status: "pending",
      appliedDate: "Oct 15, 2024",
      documents: ["Budget Plan", "Proposal", "80G Certificate"]
    },
    {
      id: 2,
      name: "Digital Literacy Program",
      provider: "Tech for Good Foundation",
      amount: "₹75,000",
      status: "accepted",
      appliedDate: "Sep 20, 2024",
      documents: ["Project Plan", "Team Details"]
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "accepted": return "default";
      case "rejected": return "destructive";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "accepted": return <CheckCircleIcon className="h-4 w-4" />;
      case "rejected": return <XCircleIcon className="h-4 w-4" />;
      default: return <ClockIcon className="h-4 w-4" />;
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Grants Management</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="provided">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="provided">Grants Provided</TabsTrigger>
            <TabsTrigger value="applied">Grants Applied</TabsTrigger>
          </TabsList>
          
          <TabsContent value="provided" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Grants You Provide</h3>
              <Button size="sm">
                <PlusIcon className="h-4 w-4 mr-2" />
                Create Grant
              </Button>
            </div>
            
            <div className="space-y-3">
              {grantsProvided.map((grant) => (
                <Card key={grant.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                      <h4 className="font-medium">{grant.name}</h4>
                      <p className="text-sm text-muted-foreground">{grant.description}</p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <DollarSignIcon className="h-3.5 w-3.5" />
                          <span>{grant.amount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <CalendarIcon className="h-3.5 w-3.5" />
                          <span>Deadline: {grant.deadline}</span>
                        </div>
                        <Badge variant="outline">{grant.applications} applications</Badge>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="applied" className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Your Grant Applications</h3>
              <Button size="sm" variant="outline">
                <PlusIcon className="h-4 w-4 mr-2" />
                Find Grants
              </Button>
            </div>
            
            <div className="space-y-3">
              {grantsApplied.map((grant) => (
                <Card key={grant.id} className="p-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <h4 className="font-medium">{grant.name}</h4>
                        <p className="text-sm text-muted-foreground">by {grant.provider}</p>
                      </div>
                      <Badge variant={getStatusColor(grant.status)} className="gap-1">
                        {getStatusIcon(grant.status)}
                        {grant.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-1">
                        <DollarSignIcon className="h-3.5 w-3.5" />
                        <span>{grant.amount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarIcon className="h-3.5 w-3.5" />
                        <span>Applied: {grant.appliedDate}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label className="text-sm">Documents Submitted:</Label>
                      <div className="flex gap-2 flex-wrap">
                        {grant.documents.map((doc) => (
                          <Badge key={doc} variant="outline" className="gap-1">
                            <FileTextIcon className="h-3 w-3" />
                            {doc}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default GrantsSection;