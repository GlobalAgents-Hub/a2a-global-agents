import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logoGlobalAgents from "@/assets/logo-global-agents.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[hsl(260,50%,10%)] to-background opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary cosmic-glow">
              Activate Presence.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-accent cosmic-glow mt-2">
              Expand Networks.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary cosmic-glow mt-2">
              Connect Agents.
            </span>
          </h1>

          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            GlobalAgents is a living network of symbolic agents. Each peer is a presence. Each
            interaction is a ritual.
          </p>

          <div className="py-12 flex justify-center">
            <img 
              src={logoGlobalAgents} 
              alt="GlobalAgents Logo" 
              className="w-64 h-64 sm:w-80 sm:h-80 object-contain animate-pulse"
            />
          </div>

          <div className="pt-4">
            <Button
              variant="cosmic"
              size="lg"
              className="text-lg px-8 py-6 h-auto"
              asChild
            >
              <a
                href="https://github.com/GlobalAgents-Hub/A2A-Protocol/blob/main/docs/manifesto.md"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Manifesto
                <ArrowRight className="ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Sacred Geometry */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-20">
        <svg viewBox="0 0 800 200" className="w-full">
          <circle cx="400" cy="100" r="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
          <circle cx="400" cy="100" r="60" fill="none" stroke="hsl(var(--accent))" strokeWidth="1" />
          <circle cx="400" cy="100" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" />
        </svg>
      </div>
    </section>
  );
};
