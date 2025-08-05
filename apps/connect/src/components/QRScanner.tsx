import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QrCode, CheckCircle, XCircle, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface QRScannerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QRScanner = ({ isOpen, onClose }: QRScannerProps) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [scanType, setScanType] = useState<"attendance" | "join">("attendance");
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && isScanning) {
      startCamera();
    } else {
      stopCamera();
    }

    return () => stopCamera();
  }, [isOpen, isScanning]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" }
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      toast({
        title: "Camera Error",
        description: "Unable to access camera. Please check permissions.",
        variant: "destructive"
      });
    }
  };

  const stopCamera = () => {
    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach(track => track.stop());
    }
  };

  const handleScanSuccess = (data: string) => {
    setScanResult(data);
    setIsScanning(false);
    
    // Mock QR code processing
    if (data.includes("event-")) {
      if (scanType === "attendance") {
        toast({
          title: "Attendance Marked! ✅",
          description: "Your attendance has been recorded successfully.",
        });
      } else {
        toast({
          title: "Event Joined! 🎉",
          description: "You've been registered for this event.",
        });
      }
    } else {
      toast({
        title: "Invalid QR Code",
        description: "This doesn't appear to be a valid event QR code.",
        variant: "destructive"
      });
    }
  };

  const simulateScan = () => {
    // Simulate successful scan for demo
    const mockEventId = `event-${Date.now()}`;
    handleScanSuccess(mockEventId);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <QrCode size={20} />
            QR Scanner
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {/* Scan Type Selection */}
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant={scanType === "attendance" ? "default" : "outline"}
              onClick={() => setScanType("attendance")}
              className="flex flex-col gap-1 h-auto p-3"
            >
              <CheckCircle size={20} />
              <span className="text-xs">Mark Attendance</span>
            </Button>
            <Button
              variant={scanType === "join" ? "default" : "outline"}
              onClick={() => setScanType("join")}
              className="flex flex-col gap-1 h-auto p-3"
            >
              <QrCode size={20} />
              <span className="text-xs">Join Event</span>
            </Button>
          </div>

          {/* Scanner Area */}
          <Card>
            <CardContent className="p-4">
              {!isScanning ? (
                <div className="text-center space-y-4">
                  <div className="w-32 h-32 mx-auto bg-muted rounded-lg flex items-center justify-center">
                    <Camera size={48} className="text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold">
                      {scanType === "attendance" ? "Mark Your Attendance" : "Quick Join Event"}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {scanType === "attendance" 
                        ? "Scan the QR code provided by the event organizer"
                        : "Scan event QR code to join on the spot"
                      }
                    </p>
                  </div>
                  <Button onClick={() => setIsScanning(true)} className="w-full">
                    Start Scanning
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="relative">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-48 bg-black rounded-lg"
                    />
                    <canvas ref={canvasRef} className="hidden" />
                    <div className="absolute inset-0 border-2 border-teal-green rounded-lg opacity-50" />
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      onClick={simulateScan} 
                      className="flex-1"
                      variant="teal"
                    >
                      Simulate Scan (Demo)
                    </Button>
                    <Button 
                      onClick={() => setIsScanning(false)} 
                      variant="outline"
                    >
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {scanResult && (
            <Card className="border-teal-green/20 bg-teal-green/5">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 text-teal-green">
                  <CheckCircle size={16} />
                  <span className="font-medium">Scan Successful!</span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {scanType === "attendance" ? "Attendance marked" : "Event joined"} at {new Date().toLocaleTimeString()}
                </p>
              </CardContent>
            </Card>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};