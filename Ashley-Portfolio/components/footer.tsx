import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left side - Monogram and contact */}
          <div className="space-y-6">
            <div className="font-serif text-6xl font-bold text-foreground">AC</div>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Hello there!</p>
              <p className="text-foreground">ashleychan1353@gmail.com</p>
            </div>
            <div className="flex gap-4">
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:ashleychan1353@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
             
            </div>
          </div>

          {/* Right side - Navigation and hummingbird */}
          <div className="flex justify-between items-start">
            <div className="space-y-4">
              <Link
                href="#about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About me
              </Link>
              <Link
                href="#projects"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#experience"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Experience
              </Link>
            </div>

            {/* Hummingbird illustration */}
            <div className="relative w-32 h-32">
              <img
                src="/hummingbird-ink-drawing-illustration.jpg"
                alt="Hummingbird illustration"
                className="w-full h-full object-contain opacity-80"
              />
            </div>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute bottom-8 left-8 opacity-10">
          <div className="grid grid-cols-4 gap-1.5">
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="w-1 h-1 rounded-full bg-primary" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
