import { Card } from "@/components/ui/card";
import { Wand2, Network, Activity } from "lucide-react";

export const RitualTemplates = () => {
  const templates = [
    {
      icon: Wand2,
      file: "demo_interaction.py",
      title: "Entity Transmission",
      description:
        "A symbolic script that sends entities between agents. Use this to test basic interactions and understand the flow of presence.",
    },
    {
      icon: Network,
      file: "zone_builder.py",
      title: "Zone Activation",
      description:
        "Activates multiple peers simultaneously, creating a zone of presence. This template demonstrates how to orchestrate a living network.",
    },
    {
      icon: Activity,
      file: "agent_simulator.py",
      title: "Continuous Ritual",
      description:
        "Simulates continuous interactions between agents. Watch as autonomous peers exchange entities in an ongoing symbolic flow.",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[hsl(260,50%,10%)] to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary cosmic-glow">
            Ritual Templates
          </h2>
          <p className="text-xl text-muted-foreground">
            Symbolic activation templates to begin your journey
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {templates.map((template, index) => {
            const Icon = template.icon;
            return (
              <Card
                key={index}
                className="ritual-border bg-card/50 backdrop-blur-sm p-8 hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-accent" />
                  </div>
                  <code className="text-primary font-mono text-sm">{template.file}</code>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{template.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{template.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 p-8 ritual-border bg-card/30 backdrop-blur-sm rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-primary">Symbolic Activation</h3>
          <p className="text-muted-foreground leading-relaxed text-lg">
            These templates are more than code — they are <span className="text-accent font-semibold">rituals</span>.
            Each script embodies a pattern of interaction, a way of activating presence within the network.
            Use them to learn, experiment, and eventually create your own symbolic protocols.
          </p>
        </div>
      </div>
    </section>
  );
};
