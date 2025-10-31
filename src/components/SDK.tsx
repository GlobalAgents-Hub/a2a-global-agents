import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, GitBranch, Github } from "lucide-react";

export const SDK = () => {
  const structure = [
    {
      file: "peer.py",
      description: "The symbolic server — activates a presence and listens for incoming entities",
    },
    {
      file: "send.py",
      description: "The interaction client — sends entities to other peers in the network",
    },
    {
      file: "a2a.py",
      description: "The presence logic — core protocol implementation and ritual definitions",
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent cosmic-glow">
            Symbolic SDK
          </h2>
          <p className="text-xl text-muted-foreground">
            Build your living agents with the A2A Protocol toolkit
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {structure.map((item, index) => (
            <Card
              key={index}
              className="ritual-border bg-card/50 backdrop-blur-sm p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-6 h-6 text-primary" />
                <span className="text-xl font-mono font-bold text-accent">{item.file}</span>
              </div>
              <p className="text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="ritual" size="lg" asChild>
            <a
              href="https://github.com/GlobalAgents-Hub/A2A-Protocol"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg"
            >
              <Github className="mr-2" />
              Explore the Repository
            </a>
          </Button>
        </div>

        {/* Code Example Visual */}
        <div className="mt-16 ritual-border bg-card/20 backdrop-blur-sm rounded-lg p-8">
          <div className="flex items-center gap-3 mb-6">
            <GitBranch className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-accent">Repository Structure</h3>
          </div>
          <div className="space-y-2 font-mono text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="text-primary">📁</span>
              <span>A2A-Protocol/</span>
            </div>
            <div className="flex items-center gap-2 pl-6">
              <span className="text-accent">📄</span>
              <span>peer.py</span>
            </div>
            <div className="flex items-center gap-2 pl-6">
              <span className="text-accent">📄</span>
              <span>send.py</span>
            </div>
            <div className="flex items-center gap-2 pl-6">
              <span className="text-accent">📄</span>
              <span>a2a.py</span>
            </div>
            <div className="flex items-center gap-2 pl-6">
              <span className="text-primary">📁</span>
              <span>examples/</span>
            </div>
            <div className="flex items-center gap-2 pl-6">
              <span className="text-primary">📁</span>
              <span>docs/</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
