import { Hero } from "@/components/Hero";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { About } from "@/components/About";
import { Philosophy } from "@/components/Philosophy";
import { ConceptVideo } from "@/components/ConceptVideo";
import { SDK } from "@/components/SDK";
import { RitualTemplates } from "@/components/RitualTemplates";
import { CallToAction } from "@/components/CallToAction";
import { Portals } from "@/components/Portals";

const Landing = () => {
  return (
    <div className="min-h-screen">
      <LanguageSwitcher />
      <Hero />
      <About />
      <Philosophy />
      <ConceptVideo />
      <SDK />
      <RitualTemplates />
      <CallToAction />
      <Portals />
      
      {/* Footer */}
      <footer className="py-8 px-4 text-center border-t border-border/50">
        <p className="text-muted-foreground">
          GlobalAgents · A2A Protocol · {new Date().getFullYear()}
        </p>
        <p className="text-sm text-muted-foreground/70 mt-2">
          Presence is code. Interaction is ritual.
        </p>
      </footer>
    </div>
  );
};

export default Landing;
