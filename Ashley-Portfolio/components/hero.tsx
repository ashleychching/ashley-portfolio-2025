export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="absolute top-20 right-4 sm:right-10 lg:right-20 opacity-20">
        <div className="grid grid-cols-4 gap-1 sm:gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center py-20 lg:py-20">
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-2">
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              I build things for the Web.
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl text-pretty leading-relaxed">
              I'm passionate about designing scalable, user-focused solutions to complex problems.
            </p>
          </div>
        </div>

        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] flex items-center justify-center">
          <img
            src="/mainTree.png"
            alt="Bonsai tree illustration"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[120px] sm:h-[120px] lg:h-[120px] block"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
            fill="#5E503F"
          />
        </svg>
      </div>

    </section>
  )
}
