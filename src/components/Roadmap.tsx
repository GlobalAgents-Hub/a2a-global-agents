import { Rocket } from "lucide-react";
import roadmapImage from "@/assets/roadmap-a2a.png";

export const Roadmap = () => {
  const roadmapItems = [
    {
      title: "MVP (TCP + Socket)",
      description: "first functional version, validating peer‑to‑peer communication"
    },
    {
      title: "Peer Discovery",
      description: "mechanisms for self‑discovery and dynamic agent connections"
    },
    {
      title: "Flexible Transport",
      description: "support for WebRTC, QUIC, and other protocols beyond TCP"
    },
    {
      title: "End‑to‑End Encryption",
      description: "native security in agent interactions"
    },
    {
      title: "Symbolic Messaging",
      description: "standardization of message formats and ritual semantics"
    },
    {
      title: "Integration with Open Networks",
      description: "interoperability with decentralized ecosystems (Web3, IPFS, libp2p)"
    },
    {
      title: "Commercial Version",
      description: "premium services, certifications, and consulting to sustain the community"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-[hsl(260,50%,10%)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Rocket className="w-6 h-6 text-primary" />
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent cosmic-glow">
              Roadmap
            </h2>
          </div>
          <p className="text-xl text-accent font-semibold mb-8">
            A2A Protocol (Global Agents)
          </p>
        </div>

        <div className="ritual-border rounded-lg p-8 bg-card/30 backdrop-blur-sm mb-12">
          <div className="space-y-6">
            {roadmapItems.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary"></div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <img 
            src={roadmapImage} 
            alt="A2A Protocol Roadmap Diagram" 
            className="max-w-full h-auto rounded-lg ritual-border"
          />
        </div>
      </div>
    </section>
  );
};
