import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Heart, ArrowLeft, Upload } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "senior";
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    location: "",
    password: "",
    emergencyContactName: "",
    emergencyContactNumber: "",
    services: {
      transportation: false,
      techHelp: false,
      mealPrep: false,
      homeHelp: false,
      companionship: false,
    },
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleServiceChange = (service: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      services: { ...prev.services, [service]: checked },
    }));
  };

  const handleRegister = () => {
    // For now, navigate to login
    // This will be replaced with real registration when Supabase is connected
    navigate(`/login?role=${role}`);
  };

  const serviceOptions = [
    { id: "transportation", label: "Transportation assistance" },
    { id: "techHelp", label: "Tech help (TV, phone, apps)" },
    { id: "mealPrep", label: "Meal preparation" },
    { id: "homeHelp", label: "Light housekeeping" },
    { id: "companionship", label: "Companionship" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate(`/login?role=${role}`)}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Login</span>
        </Button>
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <img src="/logo.png" alt="CareSync Logo" className="" />
          </div>
          <h1 className="text-[#2086AE] text-xl font-bold italic font-arvo text-foreground">
            CareSync
          </h1>
        </div>
      </div>

      {/* Registration Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="senior-heading">
                {role === "senior" ? "Join CareSync" : "Become a Helper"}
              </CardTitle>
              <p className="senior-text text-muted-foreground">
                {role === "senior"
                  ? "Get the help you need from caring neighbors"
                  : "Help seniors in your community"}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="senior-text">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="your name here"
                  value={formData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="h-14 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="senior-text">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="username@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="h-14 text-lg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="senior-text">
                  Phone
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="4801234321"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="h-14 text-lg"
                />
              </div>

              {role === "senior" && (
                <div className="space-y-2">
                  <Label htmlFor="location" className="senior-text">
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="123, Melbourne"
                    value={formData.location}
                    onChange={(e) =>
                      handleInputChange("location", e.target.value)
                    }
                    className="h-14 text-lg"
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="password" className="senior-text">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="h-14 text-lg"
                />
              </div>

              {role === "senior" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="emergencyName" className="senior-text">
                      Emergency Contact Name
                    </Label>
                    <Input
                      id="emergencyName"
                      placeholder="Emergency contact"
                      value={formData.emergencyContactName}
                      onChange={(e) =>
                        handleInputChange(
                          "emergencyContactName",
                          e.target.value
                        )
                      }
                      className="h-14 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="emergencyPhone" className="senior-text">
                      Emergency Contact Number
                    </Label>
                    <Input
                      id="emergencyPhone"
                      type="tel"
                      placeholder="1234567890"
                      value={formData.emergencyContactNumber}
                      onChange={(e) =>
                        handleInputChange(
                          "emergencyContactNumber",
                          e.target.value
                        )
                      }
                      className="h-14 text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label className="senior-text">Profile Picture</Label>
                    <Button variant="outline" className="w-full h-14 text-lg">
                      <Upload className="w-5 h-5 mr-2" />
                      profile_picture.jpg
                    </Button>
                  </div>
                </>
              )}

              {role === "caregiver" && (
                <div className="space-y-3">
                  <Label className="senior-text">Type of Service</Label>
                  {serviceOptions.map((service) => (
                    <div
                      key={service.id}
                      className="flex items-center space-x-3"
                    >
                      <Checkbox
                        id={service.id}
                        checked={
                          formData.services[
                            service.id as keyof typeof formData.services
                          ]
                        }
                        onCheckedChange={(checked) =>
                          handleServiceChange(service.id, checked as boolean)
                        }
                        className="w-5 h-5"
                      />
                      <Label htmlFor={service.id} className="senior-text">
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </div>
              )}

              <Button
                onClick={handleRegister}
                className="w-full senior-button gradient-primary hover:opacity-90 mt-6"
                size="lg"
              >
                Continue
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
