import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ShoppingCart, Car, Home, Smartphone, Clock, MapPin } from "lucide-react";
import { useState } from "react";

interface RequestHelpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RequestHelpDialog = ({ open, onOpenChange }: RequestHelpDialogProps) => {
  const [formData, setFormData] = useState({
    helpType: "",
    preferredTime: "",
    location: "22 Street, Melbourne Vic"
  });

  const helpTypes = [
    { value: "grocery", label: "Grocery Pickup", icon: ShoppingCart },
    { value: "transport", label: "Transportation", icon: Car },
    { value: "home", label: "Home Help", icon: Home },
    { value: "tech", label: "Tech Help", icon: Smartphone }
  ];

  const handleRequest = () => {
    // Handle request submission
    onOpenChange(false);
    // Reset form
    setFormData({
      helpType: "",
      preferredTime: "",
      location: "22 Street, Melbourne Vic"
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[23rem] rounded-lg">
        <DialogHeader>
          <DialogTitle className="senior-heading text-center">Help Request</DialogTitle>
          <p className="senior-text text-muted-foreground text-center">
            Tell us what you need, we'll help connect you with someone who cares
          </p>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="space-y-3">
            <Label className="senior-text">Help Needed</Label>
            <Select value={formData.helpType} onValueChange={(value) => 
              setFormData(prev => ({ ...prev, helpType: value }))
            }>
              <SelectTrigger className="h-14 text-lg">
                <SelectValue placeholder="Grocery Pickup" />
              </SelectTrigger>
              <SelectContent>
                {helpTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value} className="senior-text py-3">
                    <div className="flex items-center space-x-2">
                      <type.icon className="w-4 h-4" />
                      <span>{type.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label htmlFor="time" className="senior-text">Date & Time</Label>
            <div className="relative">
              <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="time"
                value="25 Sep, 14:00"
                onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                className="h-14 text-lg pl-12"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label htmlFor="location" className="senior-text">Enter location (if not home)</Label>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
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

export default RequestHelpDialog;