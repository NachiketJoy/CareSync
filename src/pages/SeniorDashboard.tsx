import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  AlertCircle,
  Plus,
  Car,
  ShoppingCart,
  Home,
  Smartphone,
} from "lucide-react";
import { useEffect, useState } from "react";
import RequestDetailsDialogSenior from "@/components/RequestDetailsDialogSenior";
import RequestHelpDialog from "@/components/RequestHelpDialog";
import RequestOtherHelpDialog from "@/components/RequestOtherHelpDialog";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const SeniorDashboard = () => {
  const [showRequestDialog, setShowRequestDialog] = useState(false);
  const [showOtherRequestDialog, setShowOtherRequestDialog] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any>(null);
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem("senior_onboarding_shown");
    if (!hasSeen) {
      setShowOnboarding(true);
      localStorage.setItem("senior_onboarding_shown", "true");
    }
  }, []);

  const frequentRequests = [
    {
      icon: ShoppingCart,
      label: "Groceries",
      color: "bg-blue-100 text-blue-800",
    },
    {
      icon: Car,
      label: "Transportation",
      color: "bg-green-100 text-green-800",
    },
    { icon: Home, label: "Home Help", color: "bg-purple-100 text-purple-800" },
    {
      icon: Smartphone,
      label: "Tech Help",
      color: "bg-orange-100 text-orange-800",
    },
  ];

  const recentRequests = [
    {
      id: 3,
      type: "Wellness check-ins",
      helper: "Maria",
      time: "10 Sep 25 - 16:00",
      status: "Completed",
      statusColor: "bg-success text-success-foreground",
    },
  ];

  const helpRequest = [
    {
      id: 1,
      type: "Grocery Pickup",
      helper: "Peter",
      time: "12 Sep 25 - 14:00",
      status: "Accepted",
      statusColor: "bg-warning text-warning-foreground",
    },
    {
      id: 2,
      type: "Transportation Assistance",
      helper: "",
      time: "15 Sep 25 - 10:00",
      status: "Pending",
      statusColor: "bg-muted text-muted-foreground",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img src="/logo.png" alt="CareSync Logo" className="" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Hi, John!</h1>
            </div>
          </div>
          <Button
            variant="destructive"
            size="default"
            className="senior-button bg-emergency hover:bg-emergency-hover text-[17px]"
          >
            <AlertCircle className="w-5 h-5 mr-2" />
            Emergency Call
          </Button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Main Action Button */}
        <Button
          onClick={() => setShowOtherRequestDialog(true)}
          className="w-full senior-button gradient-primary hover:opacity-90 text-[17px] py-6"
          size="default"
        >
          <Plus className="w-6 h-6 mr-3" />
          Request Help
        </Button>

        {/* Frequent Requests */}
        <Card>
          <CardHeader>
            <CardTitle className="senior-heading">Suggestions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {frequentRequests.map((request, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-20 flex flex-col items-center justify-center space-y-2 hover:bg-secondary"
                  onClick={() => setShowRequestDialog(true)}
                >
                  <request.icon className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium">{request.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="senior-heading">Help Requested</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {helpRequest.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-4 bg-secondary rounded-lg cursor-pointer hover:bg-accent transition-smooth"
                  onClick={() =>
                    setSelectedRequest({
                      id: request.id,
                      seniorName: request.helper || "Not Assigned",
                      taskType: request.type,
                      time: request.time,
                      location: "123 Main St, Melbourne",
                      status: request.status,
                    })
                  }
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <ShoppingCart className="w-5 h-5 text-primary" />
                      <span className="font-medium text-base">
                        {request.type}
                      </span>
                    </div>
                    {request.helper && (
                      <p className="text-sm text-muted-foreground">
                        Helper: {request.helper}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {request.time}
                    </p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={request.statusColor}>
                      {request.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">→</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* History */}
        <Card>
          <CardHeader>
            <CardTitle className="senior-heading">History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentRequests.map((request) => (
                <div
                  key={request.id}
                  className="flex items-center justify-between p-4 bg-secondary rounded-lg cursor-pointer hover:bg-accent transition-smooth"
                  onClick={() =>
                    setSelectedRequest({
                      id: request.id,
                      seniorName: request.helper,
                      taskType: request.type,
                      time: request.time,
                      location: "123 Main St, Melbourne",
                      status: request.status,
                    })
                  }
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <ShoppingCart className="w-5 h-5 text-primary" />
                      <span className="text-base font-medium">
                        {request.type}
                      </span>
                    </div>
                    {request.helper && (
                      <p className="text-sm text-muted-foreground">
                        Helper: {request.helper}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground">
                      {request.time}
                    </p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <Badge className={request.statusColor}>
                      {request.status}
                    </Badge>
                    <span className="text-sm text-muted-foreground">→</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <RequestDetailsDialogSenior
        request={selectedRequest}
        open={!!selectedRequest}
        onOpenChange={(open) => !open && setSelectedRequest(null)}
      />

      <RequestHelpDialog
        open={showRequestDialog}
        onOpenChange={setShowRequestDialog}
      />

      <RequestOtherHelpDialog
        open={showOtherRequestDialog}
        onOpenChange={setShowOtherRequestDialog}
      />

      <Dialog open={showOnboarding} onOpenChange={setShowOnboarding}>
  <DialogContent className="max-w-[23rem] rounded-lg" hideClose>
          <DialogHeader>
            <DialogTitle className="senior-heading text-center">
              Welcome! <p className="pt-4"> Here&apos;s how to use the app</p>
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 senior-text">
            <div>
              <div className="font-semibold mb-2">✅ How to Request Help</div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Tap Request Help and fill in the task details</li>
                <li>
                  Or choose from the suggested help list (e.g., groceries,
                  appointments, home help)
                </li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">
                📥 What Happens After Requesting
              </div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>
                  Your request appears on the Home screen under “Recent
                  Requests”
                </li>
                <li>Status starts as Pending</li>
                <li>When a helper accepts, it updates to Accepted</li>
              </ul>
            </div>
            <div>
              <div className="font-semibold mb-2">🔍 How to View Status</div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Tap any request to see full details</li>
                <li>You&apos;ll see the task, time, location, and who accepted</li>
              </ul>
            </div>
            <div className="pt-2">
              <Button
                className="w-full senior-button gradient-primary hover:opacity-90"
                onClick={() => setShowOnboarding(false)}
              >
                Got it
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SeniorDashboard;
