import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ShoppingCart,
  Car,
  Home,
  Smartphone,
  Clock,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { useState } from "react";

interface RequestHelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RequestOtherHelpDialog = ({
  open,
  onOpenChange,
}: RequestHelpDialogProps) => {
  const [formData, setFormData] = useState({
    helpType: "",
    preferredTime: "",
    location: "22 Street, Melbourne Vic",
  });

  const handleRequest = () => {
    // Handle request submission
    onOpenChange(false);
    // Reset form
    setFormData({
      helpType: "",
      preferredTime: "",
      location: "22 Street, Melbourne Vic",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="senior-heading text-center">
            Help Request
          </DialogTitle>
          <p className="senior-text text-muted-foreground text-center">
            Tell us what you need, we'll help connect you with someone who cares
          </p>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-3">
            <Label htmlFor="time" className="senior-text">
              Help Needed
            </Label>
            <div className="relative">
              <HeartHandshake className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="time"
                placeholder="e.g., Need someone to walk my dog"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    preferredTime: e.target.value,
                  }))
                }
                className="h-14 text-lg pl-12"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="time" className="senior-text">
              Date & Time
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="time"
                value="25 Sep, 14:00"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    helpType: e.target.value,
                  }))
                }
                className="h-14 text-lg pl-12"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="location" className="senior-text">
              Enter location (if not home)
            </Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="location"
                value={formData.location}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, location: e.target.value }))
                }
                className="h-14 text-lg pl-12"
              />
            </div>
          </div>

          <Button
            onClick={handleRequest}
            className="w-full senior-button gradient-primary hover:opacity-90"
            size="lg"
          >
            Request
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RequestOtherHelpDialog;
