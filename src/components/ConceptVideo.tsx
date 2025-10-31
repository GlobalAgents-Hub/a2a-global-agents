export const ConceptVideo = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-[hsl(260,50%,10%)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary cosmic-glow">
            Exploring the Flow
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Watch the official video and dive into the symbolic flow of the A2A Protocol.
            <br />
            <span className="text-primary font-semibold">Presence is code. Interaction is ritual.</span>
          </p>
        </div>

        <div className="ritual-border rounded-lg overflow-hidden bg-card/20 backdrop-blur-sm p-2">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/sYjtTV-Al4c"
              title="A2A Protocol - Activating Presence and Living Networks"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
