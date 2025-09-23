import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MapPin, Clock, User, CheckCircle, X } from "lucide-react";

interface RequestDetailsDialogProps {
  request: any;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RequestDetailsDialog = ({ request, open, onOpenChange }: RequestDetailsDialogProps) => {
  if (!request) return null;

  const handleAccept = () => {
    // Handle accept request
    onOpenChange(false);
  };

  const handleDecline = () => {
    // Handle decline request
    onOpenChange(false);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-warning text-warning-foreground";
      case "Completed":
        return "bg-success text-success-foreground";
      case "Accepted":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[23rem]">
        <DialogHeader>
          <DialogTitle className="senior-heading text-center text-primary">
            Help Request
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Task Type */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {request.taskType}
            </h3>
          </div>

          {/* Request Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Senior Name:</span>
                <p className="senior-text font-medium">{request.seniorName}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Scheduled Date & Time:</span>
                <p className="senior-text font-medium">{request.time}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <div>
                <span className="text-sm text-muted-foreground">Location:</span>
                <p className="senior-text font-medium">{request.location}</p>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-sm text-muted-foreground">Status:</span>
              <Badge className={getStatusColor(request.status)}>
                {request.status}
              </Badge>
            </div>
          </div>

          {/* Action Buttons */}
          {request.status === "Pending" && (
            <div className="flex space-x-3">
              <Button 
                onClick={handleAccept}
                className="flex-1 senior-button bg-success hover:bg-success/90 text-success-foreground"
                size="lg"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                Accept
              </Button>
              <Button 
                onClick={handleDecline}
                variant="outline"
                className="flex-1 senior-button border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
                size="lg"
              >
                <X className="w-5 h-5 mr-2" />
                Decline
              </Button>
            </div>
          )}

          {request.status === "Accepted" && (
            <Button 
              onClick={() => onOpenChange(false)}
              className="w-full senior-button gradient-primary hover:opacity-90"
              size="lg"
            >
              Close
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RequestDetailsDialog;