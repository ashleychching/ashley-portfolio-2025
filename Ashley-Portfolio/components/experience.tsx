const experiences = [
  {
    period: "May 2025 - Aug 2025",
    company: "BAE Systems",
    role: "Software Developer Intern",
    description:
      "● Resolved front end errors such as form validation and modernizing deprecated functions, refining user experience and code stability for a user base of 70,000+\n● Designed and prototyped 7+ user centric pages and userflows in Adobe XD cutting design-to-development timelines by 50% through collaboration with product managers and engineers\n● Developed responsive component based interfaces in a virtual environment with TypeScript, JavaScript, and React, improving cross-browser support across 3 major browsers (Chrome, Edge, Firefox)\n● Collaborated in 10+ Agile Sprints using Azure DevOps to ensure features are delivered on time, supporting a team of 6+ developers to meet sprint goals",
    tags: ["TypeScript", "JavaScript", "React", "Adobe XD", "Azure DevOps"],
  },
  {
    period: "Sept 2024 - Dec 2024",
    company: "Harp Research",
    role: "UX Developer Intern",
    description:
      "● Engineered a scalable web application with reusable UI component, enabling rapid prototyping and MVP delivery within 3 months; accelerated feature development cycles by 25%\n● Optimized Vue.js code to increase scalability, improving site performance by 35% across platforms\n● Integrated a backend with PostgreSQL to process and persist 2 distinct form types, enabling structured storage of 1,000+ submissions and improving data retrieval speed by 40%\n● Led a redesign team of 3 by creating 4+ iterations of the full end to end user experience in Figma",
    tags: ["Vue.js", "PostgreSQL", "Figma", "UI/UX Design"],
  },
  {
    period: "Jun 2023 - Aug 2023",
    company: "Apex Enterprises International",
    role: "Front End Software Developer",
    description:
      "● Deployed a fully functional 6+ page website for a private orthopedic practice, handling the entire process from UI/UX design to production\n● Conducted 15+ cross-browser and device tests, achieving 99% uptime and ensuring seamless performance across desktop and mobile\n● Partnered with the client to define requirements, reducing revision cycles by 30% and ensuring 10+ requirement features were delivered in the final product\n● Built and refactored 5+ reusable components in Vue.js and Tailwind, improving code efficiency and reducing future development time by 20%",
    tags: ["Vue.js", "Tailwind CSS", "UI/UX Design"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20 lg:py-24 bg-accent relative">
      <div className="hidden sm:block absolute top-20 right-4 sm:right-10 lg:right-20 opacity-10">
        <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-accent" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-border mb-10 sm:mb-16">
          Experience
        </h2>

        <div className="space-y-8 sm:space-y-12 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="grid grid-cols-[auto_1fr] gap-4 sm:gap-8">
              {/* Left side - Period */}
              <div className="text-xs sm:text-sm text-border font-mono pt-1 whitespace-nowrap">
                {exp.period}
              </div>

              {/* Right side - Experience details */}
              <div className="relative pl-6 sm:pl-8 border-l-2 border-border">
                {/* Timeline dot */}
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-border border-2 border-background" />


                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-semibold text-border">{exp.company}</h3>
                    <p className="text-base sm:text-lg text-border">{exp.role}</p>
                  </div>
                  <p className="text-sm sm:text-base text-border leading-relaxed whitespace-pre-line">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-3 py-1 text-xs font-medium rounded-full bg-accent/20 text-accent-foreground border border-accent/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}