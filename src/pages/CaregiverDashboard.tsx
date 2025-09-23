import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Users,
  MapPin,
  Clock,
  CheckCircle,
  ShoppingCart,
  Car,
  Home,
  Smartphone,
} from "lucide-react";
import { useState } from "react";
import RequestDetailsDialog from "@/components/RequestDetailsDialog";

const CaregiverDashboard = () => {
  const [selectedRequest, setSelectedRequest] = useState<any>(null);

  const newRequests = [
    {
      id: 1,
      seniorName: "John",
      taskType: "Transportation Assistance",
      time: "12 Sep 25 - 14:00",
      location: "123 Main St, Melbourne",
      status: "Pending",
    },
    {
      id: 2,
      seniorName: "Mary",
      taskType: "Grocery Pickup",
      time: "13 Sep 25 - 10:00",
      location: "456 Oak Ave, Melbourne",
      status: "Pending",
    },
    {
      id: 3,
      seniorName: "Robert",
      taskType: "Tech Help",
      time: "14 Sep 25 - 16:00",
      location: "789 Pine St, Melbourne",
      status: "Pending",
    },
  ];

  const requestHistory = [
    {
      id: 4,
      seniorName: "Peter",
      taskType: "Transportation Assistance",
      time: "10 Sep 25 - 14:00",
      location: "321 Elm St, Melbourne",
      status: "Completed",
    },
    {
      id: 5,
      seniorName: "Susan",
      taskType: "Meal Preparation",
      time: "9 Sep 25 - 12:00",
      location: "654 Maple Ave, Melbourne",
      status: "Completed",
    },
    {
      id: 6,
      seniorName: "James",
      taskType: "Light Housekeeping",
      time: "8 Sep 25 - 15:00",
      location: "987 Cedar St, Melbourne",
      status: "Completed",
    },
  ];

  const getTaskIcon = (taskType: string) => {
    switch (taskType) {
      case "Transportation Assistance":
        return Car;
      case "Grocery Pickup":
        return ShoppingCart;
      case "Tech Help":
        return Smartphone;
      case "Meal Preparation":
        return Home;
      case "Light Housekeeping":
        return Home;
      default:
        return Home;
    }
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full flex items-center justify-center">
              <img src="/logo.png" alt="CareSync Logo" className="" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Hi, Peter!</h1>
              <p className="text-sm text-muted-foreground">
                Ready to help today?
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-primary">
            <Users className="w-5 h-5" />
            <span className="font-medium">Helper</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="new" className="senior-text">
              New Requests
            </TabsTrigger>
            <TabsTrigger value="history" className="senior-text">
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="new" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="senior-heading flex items-center space-x-2">
                  <Users className="w-6 h-6 text-primary" />
                  <span>Care Requests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {newRequests.map((request) => {
                    const TaskIcon = getTaskIcon(request.taskType);
                    return (
                      <Card
                        key={request.id}
                        className="border-2 hover:border-primary cursor-pointer transition-smooth"
                        onClick={() => setSelectedRequest(request)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <TaskIcon className="w-5 h-5 text-primary" />
                                <span className="text-base font-semibold">
                                  {request.taskType}
                                </span>
                              </div>
                              <div className="space-y-1 text-muted-foreground text-base ">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium">Senior:</span>
                                  <span>{request.seniorName}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-4 h-4" />
                                  <span>{request.time}</span>
                                </div>
                                <div className="flex items-center space-x-2 relative pt-3">
                                  <div className="absolute w-[250px] flex items-center space-x-2">
                                    <MapPin className="w-4 h-4" />
                                    <span>{request.location}</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-col items-end space-y-2">
                              <Badge className={getStatusColor(request.status)}>
                                {request.status}
                              </Badge>
                              <span className="text-sm text-muted-foreground">
                                Tap for details
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="senior-heading flex items-center space-x-2">
                  <CheckCircle className="w-6 h-6 text-success" />
                  <span>Completed Requests</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {requestHistory.map((request) => {
                    const TaskIcon = getTaskIcon(request.taskType);
                    return (
                      <Card key={request.id} className="border border-muted">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1 text-base">
                              <div className="flex items-center space-x-3 mb-2">
                                <TaskIcon className="w-5 h-5 text-success" />
                                <span className="text-base font-semibold">
                                  {request.taskType}
                                </span>
                              </div>
                              <div className="space-y-1 text-muted-foreground">
                                <div className="flex items-center space-x-2">
                                  <span className="font-medium">Senior:</span>
                                  <span>{request.seniorName}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-4 h-4" />
                                  <span>{request.time}</span>
                                </div>
                              </div>
                            </div>
                            <Badge className={getStatusColor(request.status)}>
                              <CheckCircle className="w-3 h-3 mr-1" />
                              {request.status}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <RequestDetailsDialog
        request={selectedRequest}
        open={!!selectedRequest}
        onOpenChange={(open) => !open && setSelectedRequest(null)}
      />
    </div>
  );
};

export default CaregiverDashboard;
