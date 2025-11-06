import { Sparkles } from "lucide-react";

export const PhilosophyPT = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[hsl(260,50%,10%)] to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-primary" />
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent cosmic-glow">
              Nossa Filosofia
            </h2>
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
        </div>

        <div className="ritual-border rounded-lg p-8 bg-card/30 backdrop-blur-sm">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            O Protocolo A2A nasceu da comunidade Global Agents e cresce com o apoio da inteligência artificial. Usamos IA para acelerar a prototipagem e dar vida às primeiras versões, mas cada etapa é revisada, refinada e melhorada coletivamente.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed text-center mt-4">
            Não se trata de quem escreve cada linha de código — trata-se de como evoluímos juntos. A2A é transparente, aberto e impulsionado pela comunidade: um protocolo vivo moldado pela presença e colaboração coletiva.
          </p>
        </div>
      </div>
    </section>
  );
};
