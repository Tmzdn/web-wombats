"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "#home" },
  { name: "Services", path: "#services" },
  { name: "Contact", path: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)

      const sectionPositions = navItems.map((item) => {
        const id = item.path.substring(1)
        const element = document.getElementById(id)
        if (!element) return { id, top: 0, visible: false }

        const rect = element.getBoundingClientRect()
        const top = rect.top + window.scrollY
        const visible = rect.top < 200 && rect.bottom > 0

        return { id, top, visible }
      })

      const visibleSections = sectionPositions.filter((section) => section.visible)

      if (visibleSections.length > 0) {
        setActiveSection(visibleSections[0].id)
      } else {
        const sectionsAbove = sectionPositions.filter((section) => section.top <= window.scrollY + 200)
        if (sectionsAbove.length > 0) {
          const closestSection = sectionsAbove[sectionsAbove.length - 1]
          setActiveSection(closestSection.id)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    setTimeout(handleScroll, 100)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    const targetId = path.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
      setIsOpen(false)
      setActiveSection(targetId)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent border-b border-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#home" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, "#home")}>
            <span className="text-2xl font-bold">Web Wombats</span>
          </a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-12">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              onClick={(e) => handleNavClick(e, item.path)}
              className={cn(
                "text-base font-medium transition-colors hover:text-primary relative",
                activeSection === item.path.substring(1) ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Mobile navigation toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Menu"
            onClick={() => setIsOpen(!isOpen)}
            data-analytics-event="click_button"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="container py-6 flex flex-col space-y-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary py-2",
                  activeSection === item.path.substring(1) ? "text-foreground" : "text-muted-foreground",
                )}
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
