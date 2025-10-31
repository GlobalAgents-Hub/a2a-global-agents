import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 text-primary mx-auto mb-6 animate-pulse" />
        </div>

        <h2 className="text-4xl sm:text-5xl font-bold mb-8 leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary cosmic-glow">
            If you believe systems can be more than functional
          </span>
        </h2>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
          That they can be <span className="text-primary font-semibold">symbolic</span>,{" "}
          <span className="text-accent font-semibold">alive</span>, and{" "}
          <span className="text-primary font-semibold">connected</span> — then this protocol is
          yours.
        </p>

        <div className="space-y-4 text-lg text-muted-foreground mb-12">
          <p>Activate an agent.</p>
          <p>Expand a zone.</p>
          <p>Join the network.</p>
        </div>

        <Button
          variant="cosmic"
          size="lg"
          className="text-xl px-12 py-8 h-auto"
          asChild
        >
          <a
            href="https://github.com/GlobalAgents-Hub/A2A-Protocol"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Sparkles className="mr-2" />
            Activate a Peer
          </a>
        </Button>
      </div>
    </section>
  );
};
