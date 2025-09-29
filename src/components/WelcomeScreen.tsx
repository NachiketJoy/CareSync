import { Card } from "@/components/ui/card";
import { Heart, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomeScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and Title */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
              <img src="/logo.png" alt="CareSync Logo" className="" />
            </div>
            <h1 className="text-[#2086AE] text-3xl font-bold italic font-arvo text-foreground">
              CareSync
            </h1>
          </div>
          <p className="senior-text text-muted-foreground text-center max-w-sm mx-auto">
            {/* Connecting seniors with caring helpers in your community */}
            Where Compassion Meets Innovation
          </p>
        </div>

        {/* Role Selection Cards */}
        <div className="space-y-4">
          <Card
            className="p-6 border-2 hover:border-primary transition-smooth cursor-pointer"
            onClick={() => navigate("/login?role=senior")}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                {/* <h3 className="text-xl font-semibold text-foreground">I need help</h3> */}
                <h3 className="text-lg font-semibold text-foreground">
                  Seniors
                </h3>
                <p className="text-muted-foreground text-base">
                  Request assistance from local caregivers
                </p>
              </div>
            </div>
          </Card>

          <Card
            className="p-6 border-2 hover:border-primary transition-smooth cursor-pointer"
            onClick={() => navigate("/login?role=caregiver")}
          >
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                {/* <h3 className="text-xl font-semibold text-foreground">I want to help</h3> */}
                <h3 className="text-lg font-semibold text-foreground">
                  Helper
                </h3>
                <p className="text-muted-foreground text-base">
                  Provide care services to seniors
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center pt-8">
          <div className="relative w-fit mx-auto">
            <p className="text-sm text-muted-foreground text-center">
              Building stronger communities through care
            </p>
            <div className="absolute bottom-0 left-1/2 w-3/4 h-[1px] bg-[#2086AE] transform -translate-x-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
