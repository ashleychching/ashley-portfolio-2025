"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Download, Menu, X } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-8">
        <nav className="flex items-start justify-between">
          {/* Name + Subtitle */}
         <Link href="/" className="flex flex-col">
            <span className="font-serif text-2xl sm:text-3xl font-bold text-foreground hover:text-primary transition-colors">
              Ashley Chan
            </span>
            <span className="text-sm sm:text-base text-muted-foreground">
              UX Engineer
            </span>
          </Link>


          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About me
            </Link>
            <Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Experience
            </Link>
            <a
              href="/ashley-chan-resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-border pt-4">
            <Link
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About me
            </Link>
            <Link
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#experience"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </Link>
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors w-fit"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>
        )}
      </div>
    </header>
  )
}
