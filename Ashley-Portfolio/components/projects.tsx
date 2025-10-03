"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRef, useEffect } from "react"

const projects = [
  {
    title: "Rank One",
    slug: "rank-one",
    description: "A badminton tournament and ranking app",
    image: "/rank-one-hero.png",
    tags: ["Frontend", "UX/UI", "Mobile"],
  },
  {
    title: "Skrunkle",
    slug: "skrindle",
    description: "A collaborative design tool for modern teams",
    image: "/Skrunkle.png",
    tags: ["React", "TypeScript", "WebSocket"],
  },
  {
    title: "Orthopedic Site",
    slug: "skrindle",
    description: "Mobile-first experience for seamless collaboration",
    image: "/Doctor.png",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "Harp Research",
    slug: "portfolio",
    description: "Personal portfolio showcasing creative work",
    image: "/harp-research.png",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
  {
    title: "Fix City",
    slug: "portfolio",
    description: "Personal portfolio showcasing creative work",
    image: "/fix-city.png",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
  },
]

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  
  // Triple the projects array for infinite scroll
  const infiniteProjects = [...projects, ...projects, ...projects]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const cardWidth = 320
    const singleSetWidth = projects.length * cardWidth

    // Start at the middle set
    container.scrollLeft = singleSetWidth

    const handleScroll = () => {
      if (!container) return
      const { scrollLeft, scrollWidth, clientWidth } = container

      const maxScroll = scrollWidth - clientWidth

      // Jump to middle set when hitting edges
      if (scrollLeft <= 0) {
        container.scrollLeft = singleSetWidth
      } else if (scrollLeft >= maxScroll) {
        container.scrollLeft = singleSetWidth
      }
    }

    container.addEventListener("scroll", handleScroll)
    return () => container.removeEventListener("scroll", handleScroll)
  }, [])

  // Smooth manual scroll (with easing)
  const smoothScroll = (distance: number) => {
    if (!scrollContainerRef.current) return
    const container = scrollContainerRef.current
    const start = container.scrollLeft
    const target = start + distance
    const duration = 600 // ms
    const startTime = performance.now()

    const step = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)

      // easeInOutQuad
      const ease = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress

      container.scrollLeft = start + (target - start) * ease

      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }

  const scroll = (direction: "left" | "right") => {
    const cardWidth = 340
    smoothScroll(direction === "left" ? -cardWidth : cardWidth)
  }

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-background relative">
      {/* Decorative dots */}
      <div className="hidden sm:block absolute bottom-20 left-4 sm:left-10 lg:left-20 opacity-10">
        <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
          {Array.from({ length: 36 }).map((_, i) => (
            <div key={i} className="w-0.5 h-0.5 sm:w-1 sm:h-1 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between mb-8 sm:mb-12">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            Projects
          </h2>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 rounded-full border border-border hover:bg-muted transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Projects */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide"
        >
          {infiniteProjects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-lg bg-card border border-border hover:shadow-lg transition-all duration-300 flex-shrink-0 w-64 sm:w-72 lg:w-80"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-card from-40% via-card/90 via-50% to-transparent">
                <h3 className="font-serif text-lg sm:text-xl font-semibold text-card-foreground mb-1">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}