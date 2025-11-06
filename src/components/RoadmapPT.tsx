import { Rocket } from "lucide-react";
import roadmapImage from "@/assets/roadmap-a2a.png";

export const RoadmapPT = () => {
  const roadmapItems = [
    {
      title: "MVP (TCP + Socket)",
      description: "primeira versão funcional, validando comunicação peer‑to‑peer"
    },
    {
      title: "Descoberta de Peers",
      description: "mecanismos de autodescoberta e conexões dinâmicas entre agentes"
    },
    {
      title: "Transporte Flexível",
      description: "suporte para WebRTC, QUIC e outros protocolos além do TCP"
    },
    {
      title: "Criptografia Ponta a Ponta",
      description: "segurança nativa nas interações entre agentes"
    },
    {
      title: "Mensagens Simbólicas",
      description: "padronização de formatos de mensagem e semântica ritual"
    },
    {
      title: "Integração com Redes Abertas",
      description: "interoperabilidade com ecossistemas descentralizados (Web3, IPFS, libp2p)"
    },
    {
      title: "Versão Comercial",
      description: "serviços premium, certificações e consultoria para sustentar a comunidade"
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
            Protocolo A2A (Global Agents)
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
            alt="Diagrama do Roadmap do Protocolo A2A" 
            className="max-w-full h-auto rounded-lg ritual-border"
          />
        </div>
      </div>
    </section>
  );
};
