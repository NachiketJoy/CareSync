import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Heart, ArrowLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role") || "senior";
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleLogin = () => {
    if (role === "senior") {
      navigate("/senior-dashboard");
    } else {
      navigate("/caregiver-dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-6">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => navigate("/")}
          className="flex items-center space-x-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
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

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Card className="border-2">
            <CardHeader className="text-center">
              <CardTitle className="senior-heading">
                {role === "senior" ? "Welcome Back" : "Helper Login"}
              </CardTitle>
              <p className="senior-text text-muted-foreground">
                Sign in to your account
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="senior-text">
                  Phone Number
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="1234567890"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="senior-button h-14 text-lg"
                />
              </div>

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
                  className="senior-button h-14 text-lg"
                />
              </div>

              <Button
                onClick={handleLogin}
                className="w-full senior-button gradient-primary hover:opacity-90"
                size="lg"
              >
                Sign In
              </Button>

              <div className="text-center space-y-4">
                <Button
                  variant="link"
                  onClick={() => navigate(`/register?role=${role}`)}
                  className="senior-text text-primary"
                >
                  Forgot your password?
                </Button>

                <div className="pt-4 border-t">
                  <p className="senior-text text-muted-foreground mb-2">
                    Don't have an account yet?
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => navigate(`/register?role=${role}`)}
                    className="senior-button w-full"
                  >
                    Register here!
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
