"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect } from "react"

export default function TermsOfService() {
  const { t } = useLanguage()

  // Initialize scroll animations
  useScrollAnimation()

  // Force scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container py-8 max-w-4xl mx-auto animate-fade-in">
      <div className="pt-20">
        <Button asChild variant="ghost" className="mb-6 group hover-scale" data-analytics-event="click_button">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {t("terms.back")}
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-2 gradient-text animate-gradient-shift">{t("terms.title")}</h1>
        <p className="text-muted-foreground mb-8">{t("terms.date")}</p>

        <div className="space-y-8 pb-8">
          {/* Section 1 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("terms.section1.title")}</h2>
            <p className="text-muted-foreground">{t("terms.section1.content")}</p>
          </section>

          {/* Section 2 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("terms.section2.title")}</h2>
            <p className="text-muted-foreground">{t("terms.section2.content")}</p>
          </section>

          {/* Section 3 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("terms.section3.title")}</h2>
            <p className="text-muted-foreground">{t("terms.section3.content")}</p>
          </section>

          {/* Section 4 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("terms.section4.title")}</h2>
            <p className="text-muted-foreground">{t("terms.section4.content")}</p>
          </section>

          {/* Section 5 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("terms.section5.title")}</h2>
            <p className="text-muted-foreground mb-2">{t("terms.section5.content")}</p>
            <Link href="/privacy" className="text-primary hover:underline">
              {t("terms.section5.link")}
            </Link>
          </section>

          {/* Section 6 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("terms.section6.title")}</h2>
            <p className="text-muted-foreground">{t("terms.section6.content")}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
