export function About() {
  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-secondary text-foreground">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Innovation */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 opacity-20">
                <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-primary" />
                  ))}
                </div>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-background mb-3 sm:mb-4">Innovation</h2>
            </div>
            <p className="text-sm sm:text-base text-background leading-relaxed">
              I specialize in creating visually stunning, progressive websites that adapt seamlessly to any device. With
              a passion for user-centered design, I build experiences that are not only functional but delightful to
              interact with. From wireframes to deployment, every pixel and line of code is a testament to precision and
              creativity.
            </p>
          </div>

          {/* Problem-Solving */}
          <div className="space-y-4 sm:space-y-6">
            <div className="relative">
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 opacity-20">
                <div className="grid grid-cols-5 gap-1 sm:gap-1.5">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-accent" />
                  ))}
                </div>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-background mb-3 sm:mb-4">
                Problem-Solving
              </h2>
            </div>
            <p className="text-sm sm:text-base text-background leading-relaxed">
              As a web designer, I focus on solving complex user interaction challenges with intuitive and engaging
              solutions. I thrive at the intersection of art and technology, transforming ideas into coherent digital
              experiences. My design prioritizes accessibility, ensuring everyone can navigate with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
