import { Sparkles } from "lucide-react";

export const Philosophy = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[hsl(260,50%,10%)] to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent cosmic-glow">
              Our Philosophy
            </h2>
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
        </div>

        <div className="ritual-border rounded-lg p-8 bg-card/30 backdrop-blur-sm">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            The A2A Protocol was born from the Global Agents community and grows with the support of artificial intelligence. We use AI to accelerate prototyping and bring early versions to life, but every step is reviewed, refined, and improved collectively.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mt-4">
            It's not about who writes each line of code — it's about how we evolve together. A2A is transparent, open, and community‑driven: a living protocol shaped by collective presence and collaboration.
          </p>
        </div>
      </div>
    </section>
  );
};
