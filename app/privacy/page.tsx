"use client"

import { useLanguage } from "@/context/language-context"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useEffect } from "react"

export default function PrivacyPolicy() {
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
        <Button asChild variant="ghost" className="mb-6 group hover-scale">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {t("privacy.back")}
          </Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-8 gradient-text animate-gradient-shift">
          {t("privacy.title")}
        </h1>

        <div className="space-y-8 pb-8">
          {/* Section 1 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("privacy.section1.title")}</h2>
            <p className="text-muted-foreground">{t("privacy.section1.content")}</p>
          </section>

          {/* Section 2 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("privacy.section2.title")}</h2>
            <p className="text-muted-foreground mb-2">{t("privacy.section2.content")}</p>
            <a
              href="https://www.linkedin.com/company/web-wombats/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              🔗 {t("privacy.section2.link")}
            </a>
          </section>

          {/* Section 3 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("privacy.section3.title")}</h2>
            <p className="text-muted-foreground">{t("privacy.section3.content")}</p>
          </section>

          {/* Section 4 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("privacy.section4.title")}</h2>
            <p className="text-muted-foreground mb-3">{t("privacy.section4.content")}</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
              <li>{t("privacy.section4.list.1")}</li>
              <li>{t("privacy.section4.list.2")}</li>
              <li>{t("privacy.section4.list.3")}</li>
              <li>{t("privacy.section4.list.4")}</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("privacy.section5.title")}</h2>
            <p className="text-muted-foreground">{t("privacy.section5.content")}</p>
          </section>

          {/* Section 6 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("privacy.section6.title")}</h2>
            <p className="text-muted-foreground mb-3">{t("privacy.section6.content")}</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>{t("privacy.section6.list.1")}</li>
              <li>{t("privacy.section6.list.2")}</li>
              <li>{t("privacy.section6.list.3")}</li>
            </ul>
            <p className="text-muted-foreground">{t("privacy.section6.note")}</p>
          </section>

          {/* Section 7 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("privacy.section7.title")}</h2>
            <p className="text-muted-foreground">{t("privacy.section7.content")}</p>
          </section>

          {/* Section 8 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("privacy.section8.title")}</h2>
            <p className="text-muted-foreground">{t("privacy.section8.content")}</p>
          </section>

          {/* Section 9 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("privacy.section9.title")}</h2>
            <p className="text-muted-foreground mb-3">{t("privacy.section9.content")}</p>
            <ul className="list-disc pl-6 space-y-1 text-muted-foreground mb-3">
              <li>{t("privacy.section9.list.1")}</li>
              <li>{t("privacy.section9.list.2")}</li>
              <li>{t("privacy.section9.list.3")}</li>
              <li>{t("privacy.section9.list.4")}</li>
              <li>{t("privacy.section9.list.5")}</li>
              <li>{t("privacy.section9.list.6")}</li>
              <li>{t("privacy.section9.list.7")}</li>
            </ul>
            <p className="text-muted-foreground mb-2">{t("privacy.section9.contact")}</p>
            <a
              href="https://www.linkedin.com/company/web-wombats/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline flex items-center gap-1"
            >
              🔗 {t("privacy.section9.link")}
            </a>
          </section>

          {/* Section 10 */}
          <section className="reveal active">
            <h2 className="text-xl font-semibold mb-3">{t("privacy.section10.title")}</h2>
            <p className="text-muted-foreground">{t("privacy.section10.content")}</p>
          </section>
        </div>
      </div>
    </div>
  )
}
