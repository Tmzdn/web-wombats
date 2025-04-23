"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSelector } from "@/components/language-selector"
import { cn } from "@/lib/utils"

// Updated order to match the page content flow: Home -> Services -> About -> Contact
const navItems = [
  { name: "Home", path: "#home" },
  { name: "Services", path: "#services" },
  { name: "About", path: "#about" },
  { name: "Contact", path: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      // Get all section elements with their positions
      const sectionPositions = navItems.map((item) => {
        const id = item.path.substring(1)
        const element = document.getElementById(id)
        if (!element) return { id, top: 0, visible: false }

        const rect = element.getBoundingClientRect()
        const top = rect.top + window.scrollY
        // A section is considered visible if it's within 200px of the top of the viewport
        const visible = rect.top < 200 && rect.bottom > 0

        return { id, top, visible }
      })

      // Find the first visible section
      const visibleSections = sectionPositions.filter((section) => section.visible)

      if (visibleSections.length > 0) {
        // If there are visible sections, set the first one as active
        setActiveSection(visibleSections[0].id)
      } else {
        // If no sections are visible (rare case), find the closest one above the viewport
        const sectionsAbove = sectionPositions.filter((section) => section.top <= window.scrollY + 200)
        if (sectionsAbove.length > 0) {
          // Get the last section above the viewport
          const closestSection = sectionsAbove[sectionsAbove.length - 1]
          setActiveSection(closestSection.id)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    // Initial check
    setTimeout(handleScroll, 100) // Slight delay to ensure DOM is fully loaded

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    const targetId = path.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
      setIsOpen(false)
      // Set active section immediately on click
      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-500",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#home" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, "#home")}>
            <span className="text-xl font-bold gradient-text animate-gradient-shift">Web Wombats</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, index) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                activeSection === item.path.substring(1) ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
              {activeSection === item.path.substring(1) && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full animate-fade-in" />
              )}
            </a>
          ))}
          <LanguageSelector />
          <ThemeToggle />
        </nav>

        {/* Mobile navigation toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSelector />
          <ThemeToggle />
          <Button variant="ghost" size="icon" aria-label="Toggle Menu" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6 animate-scale" /> : <Menu className="h-6 w-6 animate-scale" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden animate-slide-down" style={{ animationDelay: "50ms" }}>
          <div className="container py-4 flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary py-2 animate-slide-right",
                  activeSection === item.path.substring(1) ? "text-primary" : "text-muted-foreground",
                )}
                style={{ animationDelay: `${(index + 1) * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
