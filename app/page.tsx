"use client"

import { Button } from "@/components/ui/button"
import { WombatWisdom } from "@/components/wombat-wisdom"
import { ServiceCard } from "@/components/service-card"
import { CTASection } from "@/components/cta-section"
import { HomeHero } from "@/components/home-hero"
import {
  BarChart3,
  LineChart,
  PieChart,
  CheckCircle2,
  Shield,
  Zap,
  Lightbulb,
  Linkedin,
  ArrowRight,
} from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Home() {
  const { t } = useLanguage()

  // Initialize scroll animations
  useScrollAnimation()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="pt-20">
        <HomeHero />
      </section>

      {/* Wombat Wisdom */}
      <section className="container py-8">
        <WombatWisdom />
      </section>

      {/* Services/Expertise Section */}
      <section id="services" className="py-16 bg-muted/30 scroll-mt-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 reveal">{t("services.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto reveal" style={{ transitionDelay: "100ms" }}>
              {t("services.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title={t("services.ga4.title")}
              description={t("services.ga4.description")}
              icon={BarChart3}
              delay={100}
            />
            <ServiceCard
              title={t("services.cro.title")}
              description={t("services.cro.description")}
              icon={LineChart}
              delay={200}
            />
            <ServiceCard
              title={t("services.dashboards.title")}
              description={t("services.dashboards.description")}
              icon={PieChart}
              delay={300}
            />
            <ServiceCard
              title={t("services.serverside.title")}
              description={t("services.serverside.description")}
              icon={Zap}
              delay={400}
            />
            <ServiceCard
              title={t("services.attribution.title")}
              description={t("services.attribution.description")}
              icon={Lightbulb}
              delay={500}
            />
            <ServiceCard
              title={t("services.privacy.title")}
              description={t("services.privacy.description")}
              icon={Shield}
              delay={600}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 scroll-mt-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 reveal">{t("about.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto reveal" style={{ transitionDelay: "100ms" }}>
              {t("about.subtitle")}
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-16">
            <h3 className="text-2xl font-bold mb-4 reveal">{t("about.story.title")}</h3>
            <div className="space-y-4 text-muted-foreground">
              <p className="reveal" style={{ transitionDelay: "100ms" }}>
                {t("about.story.p1")}
              </p>
              <p className="reveal" style={{ transitionDelay: "200ms" }}>
                {t("about.story.p2")}
              </p>
              <p className="reveal" style={{ transitionDelay: "300ms" }}>
                {t("about.story.p3")}
              </p>
            </div>
          </div>

          <div className="bg-muted/30 py-12 px-6 rounded-lg reveal hover-glow" style={{ transitionDelay: "100ms" }}>
            <h3 className="text-2xl font-bold mb-6 text-center">{t("about.values.title")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 reveal" style={{ transitionDelay: "200ms" }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 animate-pulse-subtle" />
                  <div>
                    <h4 className="font-semibold text-lg">{t("about.values.clarity.title")}</h4>
                    <p className="text-muted-foreground">{t("about.values.clarity.description")}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 reveal" style={{ transitionDelay: "300ms" }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-6 w-6 text-primary shrink-0 mt-0.5 animate-pulse-subtle"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{t("about.values.results.title")}</h4>
                    <p className="text-muted-foreground">{t("about.values.results.description")}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 reveal" style={{ transitionDelay: "400ms" }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-6 w-6 text-primary shrink-0 mt-0.5 animate-pulse-subtle"
                    style={{ animationDelay: "1s" }}
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{t("about.values.learning.title")}</h4>
                    <p className="text-muted-foreground">{t("about.values.learning.description")}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-2 reveal" style={{ transitionDelay: "500ms" }}>
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="h-6 w-6 text-primary shrink-0 mt-0.5 animate-pulse-subtle"
                    style={{ animationDelay: "1.5s" }}
                  />
                  <div>
                    <h4 className="font-semibold text-lg">{t("about.values.communication.title")}</h4>
                    <p className="text-muted-foreground">{t("about.values.communication.description")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-muted/30 scroll-mt-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 reveal">{t("contact.title")}</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto reveal" style={{ transitionDelay: "100ms" }}>
              {t("contact.subtitle")}
            </p>
          </div>

          <div className="max-w-md mx-auto text-center">
            <div
              className="bg-card p-8 rounded-lg shadow-sm border reveal hover-glow"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-subtle">
                <Linkedin className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{t("contact.linkedin.title")}</h3>
              <p className="text-muted-foreground mb-6">{t("contact.linkedin.description")}</p>
              <Button asChild size="lg" className="group hover-scale">
                <a
                  href="https://www.linkedin.com/company/web-wombats/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  {t("contact.linkedin.button")}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        titleKey="cta.title"
        descriptionKey="cta.description"
        buttonTextKey="cta.button"
        buttonLink="https://www.linkedin.com/company/web-wombats/"
        isExternal={true}
      />
    </div>
  )
}
