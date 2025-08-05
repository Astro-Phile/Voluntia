import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { QrCodeIcon, DownloadIcon, CopyIcon, ShareIcon } from "lucide-react";

const QRGenerator = () => {
  const [eventName, setEventName] = useState("Blood Donation Drive");
  const [generatedCode, setGeneratedCode] = useState(false);

  const generateQR = () => {
    setGeneratedCode(true);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <QrCodeIcon className="h-5 w-5" />
          QR Code Generator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="event-name">Event Name</Label>
          <Input
            id="event-name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Enter event name"
          />
        </div>

        {!generatedCode ? (
          <Button onClick={generateQR} className="w-full">
            Generate QR Code
          </Button>
        ) : (
          <div className="space-y-4">
            {/* QR Code Placeholder */}
            <div className="flex justify-center">
              <div className="w-32 h-32 border-2 border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center bg-muted/20">
                <QrCodeIcon className="h-16 w-16 text-muted-foreground" />
              </div>
            </div>
            
            <div className="text-center">
              <p className="font-medium">{eventName}</p>
              <Badge variant="outline" className="mt-1">
                Check-in QR Code
              </Badge>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex-1">
                <DownloadIcon className="h-4 w-4 mr-1" />
                Download
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <CopyIcon className="h-4 w-4 mr-1" />
                Copy Link
              </Button>
              <Button variant="outline" size="sm" className="flex-1">
                <ShareIcon className="h-4 w-4 mr-1" />
                Share
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QRGenerator;