import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isPortuguese = location.pathname === "/pt";

  return (
    <div className="fixed top-6 right-6 z-50 flex gap-2">
      <Button
        variant={!isPortuguese ? "cosmic" : "ghost"}
        size="sm"
        onClick={() => navigate("/")}
        className="text-lg"
      >
        🇺🇸
      </Button>
      <Button
        variant={isPortuguese ? "cosmic" : "ghost"}
        size="sm"
        onClick={() => navigate("/pt")}
        className="text-lg"
      >
        🇧🇷
      </Button>
    </div>
  );
};
