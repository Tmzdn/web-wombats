"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "en" | "de"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Expanded translations for all text on the site
const translations = {
  en: {
    "home.hero.title": "Clear, Simple, Straightforward Digital Analytics",
    "home.hero.subtitle":
      "We help businesses implement proper tracking, unlock insights, and boost performance with GA4, GTM, and advanced conversion tracking.",
    "home.cta.button": "Let's Talk Data",
    "home.services.button": "Our Expertise",

    "services.title": "Our Expertise",
    "services.subtitle":
      "Specialized digital analytics services to help businesses make better decisions and drive measurable growth.",

    "services.ga4.title": "GA4 Implementation & Migration",
    "services.ga4.description":
      "Expert implementation, configuration, and analysis using Google's latest analytics platform. We help businesses transition from Universal Analytics and leverage GA4's powerful event-based tracking.",

    "services.cro.title": "Conversion Rate Optimization",
    "services.cro.description":
      "Identify exactly where customers drop off and why. We specialize in data-driven improvements to your customer journey that increase sales and leads through advanced tracking and analysis.",

    "services.dashboards.title": "Executive Dashboards & Reporting",
    "services.dashboards.description":
      "Custom dashboards that show ROI and performance trends—designed for decision-makers. We transform complex data into clear, actionable insights for executives.",

    "services.serverside.title": "Server-Side Tracking",
    "services.serverside.description":
      "Specialized in server-side implementation that improves data accuracy and site performance while respecting privacy regulations. Get reliable data even with ad blockers and cookie restrictions.",

    "services.attribution.title": "Marketing Attribution & ROI",
    "services.attribution.description":
      "Advanced multi-touch attribution models that connect ad spend to actual revenue. We help you understand exactly which marketing channels drive results across the complete customer journey.",

    "services.privacy.title": "Privacy-Compliant Analytics",
    "services.privacy.description":
      "Expert implementation of GDPR-compliant tracking solutions. We create consent management systems that protect your business while maximizing data collection within privacy regulations.",

    "about.title": "About Us",
    "about.subtitle":
      "Web Wombats is a digital analytics agency helping businesses make sense of their data and drive meaningful results.",
    "about.story.title": "Our Story",
    "about.story.p1":
      "After years of working with companies struggling to make sense of their analytics data, we founded Web Wombats to provide clear, straightforward digital analytics consulting.",
    "about.story.p2":
      "Operating worldwide, we work with businesses of all sizes to implement proper tracking, unlock insights, and boost performance through data-driven decision making.",
    "about.story.p3":
      "Our approach is straightforward: we believe in simplicity over complexity, clarity over confusion, and results over buzzwords. We're passionate about helping businesses understand their data and use it to drive real growth.",

    "about.values.title": "Our Values",
    "about.values.clarity.title": "Clarity Over Complexity",
    "about.values.clarity.description": "Making analytics accessible and actionable, not overwhelming.",
    "about.values.results.title": "Results-Driven Approach",
    "about.values.results.description": "Focusing on metrics that matter and drive real business outcomes.",
    "about.values.learning.title": "Continuous Learning",
    "about.values.learning.description":
      "Staying on top of the latest analytics developments to provide cutting-edge solutions.",
    "about.values.communication.title": "Transparent Communication",
    "about.values.communication.description": "Honest, clear communication about what works and what doesn't.",

    "contact.title": "Get in Touch",
    "contact.subtitle":
      "Ready to unlock the power of your analytics? Connect with us on LinkedIn to discuss how we can help your business.",
    "contact.linkedin.title": "Connect on LinkedIn",
    "contact.linkedin.description":
      "The best way to reach us is through our LinkedIn company page. Send us a message and we'll get back to you promptly.",
    "contact.linkedin.button": "Visit Our LinkedIn",

    "cta.title": "Ready to make data-driven decisions?",
    "cta.description": "Let's work together to implement analytics that drive real business growth and measurable ROI.",
    "cta.button": "Connect on LinkedIn",

    "footer.tagline": "Clear, simple, straightforward digital analytics consulting.",
    "footer.worldwide": "Operating worldwide.",
    "footer.copyright": "© 2023 Web Wombats. All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  de: {
    "home.hero.title": "Klare, Einfache, Unkomplizierte Digitale Analyse",
    "home.hero.subtitle":
      "Wir helfen Unternehmen bei der Implementierung von korrektem Tracking, der Erschließung von Erkenntnissen und der Leistungssteigerung mit GA4, GTM und erweitertem Conversion-Tracking.",
    "home.cta.button": "Lassen Sie uns über Daten sprechen",
    "home.services.button": "Unsere Expertise",

    "services.title": "Unsere Expertise",
    "services.subtitle":
      "Spezialisierte Dienstleistungen für digitale Analysen, die Unternehmen dabei helfen, bessere Entscheidungen zu treffen und messbares Wachstum zu erzielen.",

    "services.ga4.title": "GA4-Implementierung & Migration",
    "services.ga4.description":
      "Professionelle Implementierung, Konfiguration und Analyse mit Googles neuester Analyseplattform. Wir helfen Unternehmen beim Übergang von Universal Analytics und nutzen die leistungsstarken ereignisbasierten Tracking-Funktionen von GA4.",

    "services.cro.title": "Conversion-Rate-Optimierung",
    "services.cro.description":
      "Identifizieren Sie genau, wo und warum Kunden abspringen. Wir sind spezialisiert auf datengesteuerte Verbesserungen Ihrer Customer Journey, die durch fortschrittliches Tracking und Analyse zu mehr Verkäufen und Leads führen.",

    "services.dashboards.title": "Executive Dashboards & Reporting",
    "services.dashboards.description":
      "Maßgeschneiderte Dashboards, die ROI und Leistungstrends zeigen – konzipiert für Entscheidungsträger. Wir verwandeln komplexe Daten in klare, umsetzbare Erkenntnisse für Führungskräfte.",

    "services.serverside.title": "Server-Side Tracking",
    "services.serverside.description":
      "Spezialisiert auf serverseitige Implementierung, die die Datengenauigkeit und Website-Leistung verbessert und gleichzeitig Datenschutzbestimmungen einhält. Erhalten Sie zuverlässige Daten auch bei Adblockern und Cookie-Einschränkungen.",

    "services.attribution.title": "Marketing-Attribution & ROI",
    "services.attribution.description":
      "Fortschrittliche Multi-Touch-Attributionsmodelle, die Werbeausgaben mit tatsächlichem Umsatz verbinden. Wir helfen Ihnen zu verstehen, welche Marketingkanäle über die gesamte Customer Journey hinweg Ergebnisse liefern.",

    "services.privacy.title": "Datenschutzkonforme Analyse",
    "services.privacy.description":
      "Professionelle Implementierung von DSGVO-konformen Tracking-Lösungen. Wir erstellen Consent-Management-Systeme, die Ihr Unternehmen schützen und gleichzeitig die Datenerfassung im Rahmen der Datenschutzbestimmungen maximieren.",

    "about.title": "Über Uns",
    "about.subtitle":
      "Web Wombats ist eine Agentur für digitale Analysen, die Unternehmen dabei hilft, ihre Daten zu verstehen und aussagekräftige Ergebnisse zu erzielen.",
    "about.story.title": "Unsere Geschichte",
    "about.story.p1":
      "Nach Jahren der Zusammenarbeit mit Unternehmen, die Schwierigkeiten hatten, ihre Analysedaten zu verstehen, haben wir Web Wombats gegründet, um klare, unkomplizierte Beratung zu digitalen Analysen anzubieten.",
    "about.story.p2":
      "Wir arbeiten weltweit mit Unternehmen aller Größen zusammen, um korrektes Tracking zu implementieren, Erkenntnisse zu erschließen und die Leistung durch datengesteuerte Entscheidungsfindung zu steigern.",
    "about.story.p3":
      "Unser Ansatz ist unkompliziert: Wir glauben an Einfachheit statt Komplexität, Klarheit statt Verwirrung und Ergebnisse statt Schlagwörter. Wir helfen Unternehmen leidenschaftlich gerne dabei, ihre Daten zu verstehen und für echtes Wachstum zu nutzen.",

    "about.values.title": "Unsere Werte",
    "about.values.clarity.title": "Klarheit statt Komplexität",
    "about.values.clarity.description": "Analysen zugänglich und umsetzbar machen, nicht überwältigend.",
    "about.values.results.title": "Ergebnisorientierter Ansatz",
    "about.values.results.description": "Fokus auf Metriken, die wichtig sind und echte Geschäftsergebnisse liefern.",
    "about.values.learning.title": "Kontinuierliches Lernen",
    "about.values.learning.description":
      "Wir bleiben auf dem neuesten Stand der Analyseentwicklungen, um modernste Lösungen anzubieten.",
    "about.values.communication.title": "Transparente Kommunikation",
    "about.values.communication.description": "Ehrliche, klare Kommunikation darüber, was funktioniert und was nicht.",

    "contact.title": "Kontakt",
    "contact.subtitle":
      "Bereit, die Kraft Ihrer Analysen zu entfesseln? Verbinden Sie sich mit uns auf LinkedIn, um zu besprechen, wie wir Ihrem Unternehmen helfen können.",
    "contact.linkedin.title": "Verbinden Sie sich auf LinkedIn",
    "contact.linkedin.description":
      "Der beste Weg, uns zu erreichen, ist über unsere LinkedIn-Unternehmensseite. Senden Sie uns eine Nachricht und wir werden uns umgehend bei Ihnen melden.",
    "contact.linkedin.button": "Besuchen Sie unser LinkedIn-Profil",

    "cta.title": "Bereit für datengesteuerte Entscheidungen?",
    "cta.description":
      "Lassen Sie uns zusammenarbeiten, um Analysen zu implementieren, die echtes Geschäftswachstum und messbaren ROI fördern.",
    "cta.button": "Auf LinkedIn verbinden",

    "footer.tagline": "Klare, einfache, unkomplizierte Beratung zu digitalen Analysen.",
    "footer.worldwide": "Weltweit tätig.",
    "footer.copyright": "© 2023 Web Wombats. Alle Rechte vorbehalten.",
    "footer.privacy": "Datenschutzrichtlinie",
    "footer.terms": "Nutzungsbedingungen",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
