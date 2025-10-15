import { notFound } from "next/navigation"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

// Project data
const projects = {
  "rank-one": {
    title: "Rank One",
    year: "2024",
    description:
      "Rank One is a badminton app that allows tournament and match results to be recorded and used to rank players.",
    tags: ["Frontend", "UX/UI", "Mobile"],
    heroImage: "/rank-one-hero.jpg",
    sections: [
      { type: "text", content: "Project description text here..." },
      { type: "images", images: ["/rank-one-screens-1.jpg", "/rank-one-screens-2.jpg"] },
      { type: "list", items: ["Item 1", "Item 2", "Item 3"] },
    ],
  },
  skrindle: {
    title: "Skrindle",
    year: "2023",
    description:
      "A collaborative design tool for modern teams that enables real-time collaboration and seamless workflow integration.",
    tags: ["React", "TypeScript", "WebSocket", "Design Tools"],
    heroImage: "/modern-design-tool-interface.jpg",
    sections: [
      { type: "text", content: "Project description text here..." },
    ],
  },
}

// Tell Next.js which slugs to pre-render
export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) notFound()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back link */}
      <section className="pt-20 px-6 sm:px-8 lg:px-16 container mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </section>

      {/* Hero */}
      <section className="pt-8 pb-16 px-6 sm:px-8 lg:px-16 container mx-auto">
        <div className="max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {project.title} ({project.year})
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="px-6 sm:px-8 lg:px-16 container mx-auto mb-16">
        <div className="rounded-lg overflow-hidden bg-muted">
          <img
            src={project.heroImage}
            alt={`${project.title} hero`}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Project sections */}
      <section className="px-6 sm:px-8 lg:px-16 container mx-auto pb-20">
        <div className="max-w-3xl mx-auto">
          {project.sections.map((section, index) => {
            switch (section.type) {
              case "heading":
                return (
                  <h2
                    key={index}
                    className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-16 mb-6"
                  >
                    {section.content}
                  </h2>
                )
              case "text":
                return (
                  <p
                    key={index}
                    className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6"
                  >
                    {section.content}
                  </p>
                )
              case "images":
                return (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                    {section.images?.map((img, i) => (
                      <div key={i} className="rounded-lg overflow-hidden bg-muted">
                        <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-auto" />
                      </div>
                    ))}
                  </div>
                )
              case "list":
                return (
                  <ul key={index} className="space-y-3 mb-6 ml-6 list-disc">
                    {section.items?.map((item, i) => (
                      <li key={i} className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              default:
                return null
            }
          })}
        </div>
      </section>

      {/* Back to projects */}
      <section className="px-6 sm:px-8 lg:px-16 container mx-auto pb-20">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </Link>
        </div>
      </section>
    </div>
  )
}
