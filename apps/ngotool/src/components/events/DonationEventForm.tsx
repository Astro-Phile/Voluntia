import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { DollarSignIcon, QrCodeIcon, LinkIcon, ShareIcon } from "lucide-react";

const DonationEventForm = () => {
  const [goalAmount, setGoalAmount] = useState("");
  const [purpose, setPurpose] = useState("");
  const [fundsUsage, setFundsUsage] = useState("");
  const [allowRecurring, setAllowRecurring] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState<string[]>([]);
  const [donationLink, setDonationLink] = useState("");

  const generateDonationLink = () => {
    const link = `https://donate.voluntree.org/campaign/${Date.now()}`;
    setDonationLink(link);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <DollarSignIcon className="h-5 w-5" />
          Fundraiser Event Details
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="goal-amount">Fundraising Goal (₹)</Label>
            <Input
              id="goal-amount"
              type="number"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              placeholder="50000"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="funds-usage">Where will funds go?</Label>
            <Select value={fundsUsage} onValueChange={setFundsUsage}>
              <SelectTrigger>
                <SelectValue placeholder="Select usage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="medical">Medical Aid</SelectItem>
                <SelectItem value="education">Education Support</SelectItem>
                <SelectItem value="environment">Environmental Projects</SelectItem>
                <SelectItem value="disaster">Disaster Relief</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="purpose">Why are you raising funds?</Label>
          <Textarea
            id="purpose"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            placeholder="Describe the cause and impact of this fundraiser..."
            rows={3}
          />
        </div>

        <div className="space-y-4">
          <Label>Payment Methods</Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {["UPI", "Bank Transfer", "Razorpay", "PayPal"].map((method) => (
              <Badge
                key={method}
                variant={paymentMethods.includes(method) ? "default" : "outline"}
                className="cursor-pointer justify-center p-2"
                onClick={() => {
                  setPaymentMethods(prev =>
                    prev.includes(method)
                      ? prev.filter(m => m !== method)
                      : [...prev, method]
                  );
                }}
              >
                {method}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Label htmlFor="recurring">Allow recurring donations</Label>
          <Switch
            id="recurring"
            checked={allowRecurring}
            onCheckedChange={setAllowRecurring}
          />
        </div>

        <div className="space-y-3">
          <Button onClick={generateDonationLink} className="w-full">
            <LinkIcon className="mr-2 h-4 w-4" />
            Generate Donation Link
          </Button>
          
          {donationLink && (
            <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Donation Link Generated</span>
                <Badge variant="outline">Active</Badge>
              </div>
              <div className="flex gap-2">
                <Input value={donationLink} readOnly className="flex-1" />
                <Button variant="outline" size="sm">
                  <QrCodeIcon className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ShareIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default DonationEventForm;