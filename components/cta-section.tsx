"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/context/language-context"

interface CTASectionProps {
  titleKey: string
  descriptionKey: string
  buttonTextKey: string
  buttonLink: string
  isExternal?: boolean
  className?: string
}

export function CTASection({
  titleKey,
  descriptionKey,
  buttonTextKey,
  buttonLink,
  isExternal = false,
  className = "",
}: CTASectionProps) {
  const { t } = useLanguage()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (isExternal) return // Don't handle click for external links

    e.preventDefault()
    const targetId = path.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for header height
        behavior: "smooth",
      })
    }
  }

  return (
    <section className={`bg-accent py-16 ${className}`}>
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4 animate-in">{t(titleKey)}</h2>
        <p
          className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-in"
          style={{ animationDelay: "100ms" }}
        >
          {t(descriptionKey)}
        </p>
        <Button asChild size="lg" className="group animate-in" style={{ animationDelay: "200ms" }}>
          <a
            href={buttonLink}
            onClick={(e) => !isExternal && handleNavClick(e, buttonLink)}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="flex items-center gap-2"
          >
            {t(buttonTextKey)}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </Button>
      </div>
    </section>
  )
}
