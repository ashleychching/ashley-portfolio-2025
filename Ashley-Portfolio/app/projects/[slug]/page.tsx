import { notFound } from "next/navigation"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"

// Project data - in a real app, this would come from a CMS or database
const projects = {
  "rank-one": {
    title: "Rank One",
    year: "2024",
    description:
      "Rank One is a badminton app that allows tournament and match results to be recorded and used to rank players. Seamlessly track your progress, connect with fellow enthusiasts, and elevate your game to new heights.",
    tags: ["Frontend", "UX/UI", "Mobile"],
    heroImage: "/rank-one-hero.jpg",
    sections: [
      {
        type: "text",
        content: `At a time when the badminton court I still play has no system to organize the many friends who I recognize that the community needs more. I saw a gap in the market for a comprehensive app that could seamlessly track player rankings, facilitate tournament organization, and foster a sense of community among badminton enthusiasts.`,
      },
      {
        type: "text",
        content: `In short, Gamification was a platform where creators could ask their digital art and NFTs to collectors. Everything was created from scratch and built on top of the Ethereum blockchain. The platform was designed to be user-friendly and accessible to both creators and collectors.`,
      },
      {
        type: "heading",
        content: "The problem",
      },
      {
        type: "text",
        content: `The problem was clear: badminton players lacked a centralized platform to track their progress, connect with other players, and participate in organized tournaments. Existing solutions were fragmented, difficult to use, and lacked the social features that modern players expect.`,
      },
      {
        type: "images",
        images: ["/rank-one-screens-1.jpg", "/rank-one-screens-2.jpg"],
      },
      {
        type: "heading",
        content: "My role",
      },
      {
        type: "text",
        content: `I played a senior UX/UI designer and developer role in this project. I was responsible for the entire design process, from initial research and wireframing to final UI design and prototyping. I also contributed to the front-end development, ensuring that the design vision was accurately translated into code.`,
      },
      {
        type: "list",
        items: [
          "Conducted user research and competitive analysis",
          "Created wireframes and interactive prototypes",
          "Designed the complete UI system and component library",
          "Collaborated with developers to ensure design fidelity",
          "Conducted usability testing and iterated based on feedback",
        ],
      },
      {
        type: "heading",
        content: "Open sourcing",
      },
      {
        type: "text",
        content: `When deciding which I contributed to in March 2023, we decided to open source the codebase. This was a strategic decision to give back to the community and allow other developers to learn from our work. The response has been overwhelmingly positive, with developers from around the world contributing improvements and building upon our foundation.`,
      },
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
      {
        type: "text",
        content: `Skrindle was born from the need for a more intuitive and collaborative design tool that could bridge the gap between designers and developers.`,
      },
      {
        type: "heading",
        content: "The challenge",
      },
      {
        type: "text",
        content: `Modern design teams needed a tool that could handle real-time collaboration without sacrificing performance or user experience.`,
      },
    ],
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug as keyof typeof projects]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="pt-35 px-6 sm:px-8 lg:px-16 container mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors font-medium group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back
        </Link>
      </section>

      {/* Hero Section */}
      <section className="pt-8 pb-16 px-6 sm:px-8 lg:px-16 container mx-auto">
        <div className="max-w-4xl">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            {project.title} ({project.year})
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-6">{project.description}</p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map((tag) => (
              <span key={tag} className="px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium">
                {tag}
              </span>
            ))}
          </div>

          <Link
            href="#case-study"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Case Study
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-6 sm:px-8 lg:px-16 container mx-auto mb-16">
        <div className="rounded-lg overflow-hidden bg-muted">
          <img
            src={project.heroImage || "/placeholder.svg?height=600&width=1200"}
            alt={`${project.title} hero`}
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Content Sections */}
      <section id="case-study" className="px-6 sm:px-8 lg:px-16 container mx-auto pb-20">
        <div className="max-w-3xl mx-auto">
          {project.sections.map((section, index) => {
            if (section.type === "heading") {
              return (
                <h2 key={index} className="font-serif text-3xl sm:text-4xl font-bold text-foreground mt-16 mb-6">
                  {section.content}
                </h2>
              )
            }

            if (section.type === "text") {
              return (
                <p key={index} className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  {section.content}
                </p>
              )
            }

            if (section.type === "images" && section.images) {
              return (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-6 my-12">
                  {section.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="rounded-lg overflow-hidden bg-muted">
                      <img
                        src={image || "/placeholder.svg?height=400&width=600"}
                        alt={`${project.title} screenshot ${imgIndex + 1}`}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              )
            }

            if (section.type === "list" && section.items) {
              return (
                <ul key={index} className="space-y-3 mb-6 ml-6">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="text-base sm:text-lg text-muted-foreground leading-relaxed list-disc"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )
            }

            return null
          })}
        </div>
      </section>

      {/* Back to Projects */}
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
