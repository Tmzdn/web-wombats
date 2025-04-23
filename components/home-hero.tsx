"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/language-context"
import { ArrowRight } from "lucide-react"

export function HomeHero() {
  const { t } = useLanguage()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
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
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
            <span
              dangerouslySetInnerHTML={{
                __html: t("home.hero.title")
                  .replace(
                    "Straightforward",
                    '<span class="gradient-text animate-gradient-shift relative inline-block"><span class="shine-effect absolute inset-0"></span>Straightforward</span>',
                  )
                  .replace(
                    "Unkomplizierte",
                    '<span class="gradient-text animate-gradient-shift relative inline-block"><span class="shine-effect absolute inset-0"></span>Unkomplizierte</span>',
                  ),
              }}
            />
          </h1>
          <p className="text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
            {t("home.hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "200ms" }}>
            <Button asChild size="lg" className="group hover-scale">
              <a
                href="https://www.linkedin.com/company/web-wombats/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                {t("home.cta.button")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="group hover-scale">
              <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="flex items-center gap-2">
                {t("home.services.button")}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-3/4 bg-accent/50 rounded-l-3xl -z-10 hidden lg:block animate-float"></div>

      {/* Add decorative elements with animations */}
      <div
        className="absolute top-20 right-20 w-16 h-16 rounded-full bg-primary/10 animate-float hidden lg:block"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-20 left-[10%] w-8 h-8 rounded-full bg-primary/20 animate-float hidden lg:block"
        style={{ animationDelay: "1.5s" }}
      ></div>
      <div
        className="absolute top-[30%] left-[20%] w-4 h-4 rounded-full bg-primary/30 animate-float hidden lg:block"
        style={{ animationDelay: "0.5s" }}
      ></div>
    </section>
  )
}
