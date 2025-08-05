import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CheckCircleIcon, XCircleIcon, ClockIcon, FileTextIcon, UserIcon } from "lucide-react";

const KYCVerifier = () => {
  const pendingVerifications = [
    {
      id: 1,
      name: "Nisha Kapoor",
      avatar: "",
      documents: ["Aadhaar", "PAN"],
      submittedAt: "2 hours ago",
      priority: "high",
    },
    {
      id: 2,
      name: "Arjun Reddy",
      avatar: "",
      documents: ["Aadhaar"],
      submittedAt: "1 day ago",
      priority: "medium",
    },
    {
      id: 3,
      name: "Kavya Singh",
      avatar: "",
      documents: ["PAN", "Address Proof"],
      submittedAt: "3 hours ago",
      priority: "high",
    },
  ];

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-destructive/10 text-destructive";
      case "medium":
        return "bg-accent/10 text-accent-foreground";
      default:
        return "bg-muted/50 text-muted-foreground";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileTextIcon className="h-5 w-5" />
          KYC Verification Queue
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {pendingVerifications.map((verification) => (
            <div key={verification.id} className="flex items-center justify-between p-4 rounded-lg border bg-card/50">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={verification.avatar} alt={verification.name} />
                  <AvatarFallback className="text-sm">
                    {getInitials(verification.name)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{verification.name}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {verification.documents.map((doc) => (
                        <Badge key={doc} variant="outline" className="text-xs">
                          {doc}
                        </Badge>
                      ))}
                    </div>
                    <Badge variant="outline" className={getPriorityColor(verification.priority)}>
                      {verification.priority}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <ClockIcon className="h-3 w-3" />
                    {verification.submittedAt}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <XCircleIcon className="h-4 w-4 mr-1" />
                  Reject
                </Button>
                <Button variant="default" size="sm">
                  <CheckCircleIcon className="h-4 w-4 mr-1" />
                  Approve
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KYCVerifier;