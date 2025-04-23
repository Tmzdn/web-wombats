"use client"

import type React from "react"
import { useLanguage } from "@/context/language-context"
import Link from "next/link"

export function Footer() {
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
    <footer className="border-t bg-muted/40">
      <div className="container py-8">
        <div className="text-center reveal">
          <a
            href="#home"
            className="text-xl font-bold gradient-text animate-gradient-shift"
            onClick={(e) => handleNavClick(e, "#home")}
          >
            Web Wombats
          </a>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("footer.tagline")}
            <br />
            {t("footer.worldwide")}
          </p>
        </div>

        <div
          className="mt-6 pt-4 border-t text-center text-xs text-muted-foreground reveal"
          style={{ transitionDelay: "100ms" }}
        >
          <p>{t("footer.copyright").replace("2023", new Date().getFullYear().toString())}</p>
          <div className="mt-1">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              {t("footer.privacy")}
            </Link>
            {" • "}
            <Link href="/terms" className="hover:text-primary transition-colors">
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
