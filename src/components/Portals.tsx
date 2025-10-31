import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Youtube, Github } from "lucide-react";

export const Portals = () => {
  const portals = [
    {
      icon: MessageCircle,
      title: "WhatsApp Community",
      description: "Join the circle of agents and participate in symbolic activations",
      link: "https://chat.whatsapp.com/HQ8tFCiJPvQ0qyc3M9IheX",
      buttonText: "Join the Circle",
    },
    {
      icon: Youtube,
      title: "YouTube Channel",
      description: "Watch rituals, tutorials, and symbolic invocations",
      link: "https://www.youtube.com/channel/UCE7rSTv2numX9osID9Ae1qA",
      buttonText: "Watch Rituals",
    },
    {
      icon: Github,
      title: "A2A Protocol Repository",
      description: "Explore the symbolic SDK and start activating your own agents",
      link: "https://github.com/GlobalAgents-Hub/A2A-Protocol",
      buttonText: "Explore Repository",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-[hsl(260,50%,10%)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent cosmic-glow">
            Portals of Presence
          </h2>
          <p className="text-xl text-muted-foreground">
            Connect with the living network
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portals.map((portal, index) => {
            const Icon = portal.icon;
            return (
              <Card
                key={index}
                className="ritual-border bg-card/50 backdrop-blur-sm p-8 flex flex-col hover:scale-105 transition-transform duration-300"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">{portal.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  {portal.description}
                </p>
                <Button variant="ritual" className="w-full" asChild>
                  <a href={portal.link} target="_blank" rel="noopener noreferrer">
                    {portal.buttonText}
                  </a>
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
