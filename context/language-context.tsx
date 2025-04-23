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

    // Privacy Policy Translations
    "privacy.title": "Privacy Policy",
    "privacy.back": "Back to Home",

    "privacy.section1.title": "1. Introduction",
    "privacy.section1.content":
      "We, Web Wombats GmbH, take the protection of your personal data very seriously. This privacy policy informs you about how we collect, use, and protect personal data when you visit our website.",

    "privacy.section2.title": "2. Responsible Entity",
    "privacy.section2.content":
      "The entity responsible for data processing is Web Wombats GmbH. For privacy inquiries, please contact us through our LinkedIn profile:",
    "privacy.section2.link": "linkedin.com/company/web-wombats",

    "privacy.section3.title": "3. Collection and Processing of Personal Data",
    "privacy.section3.content":
      "We collect and process personal data only when legally permitted or when you consent to data collection. Personal data refers to all information relating to an identified or identifiable natural person.",

    "privacy.section4.title": "4. Purpose of Data Processing",
    "privacy.section4.content": "The processing of your personal data is carried out for the following purposes:",
    "privacy.section4.list.1": "Provision and optimization of our website",
    "privacy.section4.list.2": "Analysis of user behavior to improve our services",
    "privacy.section4.list.3": "Marketing and advertising purposes",
    "privacy.section4.list.4": "Fulfillment of legal obligations",

    "privacy.section5.title": "5. Legal Basis for Processing",
    "privacy.section5.content":
      "The processing of your data is based on your consent (Art. 6 Para. 1 lit. a GDPR), for the fulfillment of a contract or pre-contractual measures (Art. 6 Para. 1 lit. b GDPR), due to legal obligations (Art. 6 Para. 1 lit. c GDPR), or to protect the legitimate interests of our company (Art. 6 Para. 1 lit. f GDPR).",

    "privacy.section6.title": "6. Use of Cookies and Tracking Technologies",
    "privacy.section6.content":
      "We use cookies and similar technologies to analyze the use of our website and improve our services. We employ the following services:",
    "privacy.section6.list.1": "Google Analytics 4: To analyze user behavior on our website.",
    "privacy.section6.list.2": "Meta Pixel: To measure the effectiveness of our Facebook advertising.",
    "privacy.section6.list.3": "Google Ads: To place and analyze online advertising.",
    "privacy.section6.note":
      "These services may transfer personal data to the USA. We would like to point out that there is no level of data protection in the USA equivalent to EU data protection law. The transfer takes place on the basis of your express consent in accordance with Art. 49 Para. 1 lit. a GDPR.",

    "privacy.section7.title": "7. Data Sharing with Third Parties",
    "privacy.section7.content":
      "Your personal data will only be shared with third parties if this is necessary for contract fulfillment, if we are legally obligated to do so, or if you have consented.",

    "privacy.section8.title": "8. Storage Duration",
    "privacy.section8.content":
      "We store your personal data only as long as necessary for achieving the stated purposes or as required by legal retention periods.",

    "privacy.section9.title": "9. Your Rights",
    "privacy.section9.content": "You have the right to:",
    "privacy.section9.list.1": "Obtain information about your data stored with us",
    "privacy.section9.list.2": "Request correction of incorrect data",
    "privacy.section9.list.3": "Request deletion of your data, provided no legal retention obligations exist",
    "privacy.section9.list.4": "Request restriction of processing",
    "privacy.section9.list.5": "Object to processing",
    "privacy.section9.list.6": "Request data portability",
    "privacy.section9.list.7": "Revoke your consent at any time with effect for the future",
    "privacy.section9.contact": "To exercise your rights, please contact us through our LinkedIn profile:",
    "privacy.section9.link": "linkedin.com/company/web-wombats",

    "privacy.section10.title": "10. Changes to this Privacy Policy",
    "privacy.section10.content":
      "We reserve the right to adapt this privacy policy to ensure it always complies with current legal requirements or to implement changes to our services in the privacy policy. The new privacy policy will then apply to your subsequent visits.",

    // Terms of Service Translations
    "terms.title": "Terms of Service",
    "terms.back": "Back to Home",
    "terms.date": "Last updated: April 23, 2025",

    "terms.section1.title": "1. Scope",
    "terms.section1.content":
      "These Terms of Service apply to all services provided by Web Wombats GmbH in the areas of Digital Analytics Consulting, IT consulting, software development, and related technologies.",

    "terms.section2.title": "2. Services",
    "terms.section2.content":
      "Web Wombats offers consulting services in the areas of Google Analytics 4, Google Tag Manager, conversion tracking, IT strategy, software development, and related topics. The specific services are individually agreed upon with the client.",

    "terms.section3.title": "3. Contract Formation",
    "terms.section3.content":
      "A contract is formed when the client accepts an offer from Web Wombats or when a written confirmation is provided.",

    "terms.section4.title": "4. Liability",
    "terms.section4.content":
      "Web Wombats is only liable for damages caused by intentional or grossly negligent behavior. Liability for indirect damages or consequential damages is excluded.",

    "terms.section5.title": "5. Data Protection",
    "terms.section5.content":
      "The processing of personal data is carried out in accordance with Web Wombats' Privacy Policy. This can be viewed under Privacy Policy.",
    "terms.section5.link": "Privacy Policy",

    "terms.section6.title": "6. Final Provisions",
    "terms.section6.content":
      "The laws of Switzerland apply. The place of jurisdiction is the registered office of Web Wombats GmbH.",
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
    "footer.privacy": "Datenschutzerklärung",
    "footer.terms": "Nutzungsbedingungen",

    // Privacy Policy Translations (German original)
    "privacy.title": "Datenschutzerklärung",
    "privacy.back": "Zurück zur Startseite",

    "privacy.section1.title": "1. Einleitung",
    "privacy.section1.content":
      "Wir, die Web Wombats GmbH, nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung informiert Sie darüber, wie wir personenbezogene Daten erheben, verwenden und schützen, wenn Sie unsere Website besuchen.",

    "privacy.section2.title": "2. Verantwortliche Stelle",
    "privacy.section2.content":
      "Verantwortlich für die Datenverarbeitung ist die Web Wombats GmbH. Für Datenschutzanfragen kontaktieren Sie uns bitte über unser LinkedIn-Profil:",
    "privacy.section2.link": "linkedin.com/company/web-wombats",

    "privacy.section3.title": "3. Erhebung und Verarbeitung personenbezogener Daten",
    "privacy.section3.content":
      "Wir erheben und verarbeiten personenbezogene Daten nur, wenn dies gesetzlich erlaubt ist oder Sie in die Datenerhebung einwilligen. Personenbezogene Daten sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.",

    "privacy.section4.title": "4. Zweck der Datenverarbeitung",
    "privacy.section4.content": "Die Verarbeitung Ihrer personenbezogenen Daten erfolgt zu folgenden Zwecken:",
    "privacy.section4.list.1": "Bereitstellung und Optimierung unserer Website",
    "privacy.section4.list.2": "Analyse des Nutzerverhaltens zur Verbesserung unseres Angebots",
    "privacy.section4.list.3": "Marketing- und Werbezwecke",
    "privacy.section4.list.4": "Erfüllung gesetzlicher Verpflichtungen",

    "privacy.section5.title": "5. Rechtsgrundlage der Verarbeitung",
    "privacy.section5.content":
      "Die Verarbeitung Ihrer Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO), aufgrund rechtlicher Verpflichtungen (Art. 6 Abs. 1 lit. c DSGVO) oder zur Wahrung berechtigter Interessen unseres Unternehmens (Art. 6 Abs. 1 lit. f DSGVO).",

    "privacy.section6.title": "6. Verwendung von Cookies und Tracking-Technologien",
    "privacy.section6.content":
      "Wir verwenden Cookies und ähnliche Technologien, um die Nutzung unserer Website zu analysieren und unser Angebot zu verbessern. Dabei setzen wir folgende Dienste ein:",
    "privacy.section6.list.1": "Google Analytics 4: Zur Analyse des Nutzerverhaltens auf unserer Website.",
    "privacy.section6.list.2": "Meta Pixel: Zur Messung der Effektivität unserer Facebook-Werbung.",
    "privacy.section6.list.3": "Google Ads: Zur Schaltung und Analyse von Online-Werbung.",
    "privacy.section6.note":
      "Diese Dienste können personenbezogene Daten in die USA übertragen. Wir weisen darauf hin, dass in den USA kein dem EU-Datenschutzrecht gleichwertiges Datenschutzniveau besteht. Die Übermittlung erfolgt auf Grundlage Ihrer ausdrücklichen Einwilligung gemäß Art. 49 Abs. 1 lit. a DSGVO.",

    "privacy.section7.title": "7. Datenweitergabe an Dritte",
    "privacy.section7.content":
      "Eine Weitergabe Ihrer personenbezogenen Daten an Dritte erfolgt nur, wenn dies zur Vertragserfüllung notwendig ist, wir gesetzlich dazu verpflichtet sind oder Sie eingewilligt haben.",

    "privacy.section8.title": "8. Speicherdauer",
    "privacy.section8.content":
      "Wir speichern Ihre personenbezogenen Daten nur so lange, wie es für die Erreichung der genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen.",

    "privacy.section9.title": "9. Ihre Rechte",
    "privacy.section9.content": "Sie haben das Recht:",
    "privacy.section9.list.1": "Auskunft über Ihre bei uns gespeicherten Daten zu erhalten",
    "privacy.section9.list.2": "Berichtigung unrichtiger Daten zu verlangen",
    "privacy.section9.list.3":
      "Löschung Ihrer Daten zu verlangen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen",
    "privacy.section9.list.4": "Einschränkung der Verarbeitung zu verlangen",
    "privacy.section9.list.5": "Widerspruch gegen die Verarbeitung einzulegen",
    "privacy.section9.list.6": "Datenübertragbarkeit zu verlangen",
    "privacy.section9.list.7": "Ihre Einwilligung jederzeit mit Wirkung für die Zukunft zu widerrufen",
    "privacy.section9.contact": "Zur Ausübung Ihrer Rechte kontaktieren Sie uns bitte über unser LinkedIn-Profil:",
    "privacy.section9.link": "linkedin.com/company/web-wombats",

    "privacy.section10.title": "10. Änderungen dieser Datenschutzerklärung",
    "privacy.section10.content":
      "Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.",

    // Terms of Service Translations (German original)
    "terms.title": "Allgemeine Geschäftsbedingungen (AGB)",
    "terms.back": "Zurück zur Startseite",
    "terms.date": "Stand: 23. April 2025",

    "terms.section1.title": "1. Geltungsbereich",
    "terms.section1.content":
      "Diese AGB gelten für alle Dienstleistungen, die von der Web Wombats GmbH im Bereich Digital Analytics Consulting, IT-Beratung, Softwareentwicklung und verwandten Technologien erbracht werden.",

    "terms.section2.title": "2. Leistungen",
    "terms.section2.content":
      "Web Wombats bietet Beratungsdienstleistungen in den Bereichen Google Analytics 4, Google Tag Manager, Conversion-Tracking, IT-Strategie, Softwareentwicklung und verwandten Themen an. Die konkreten Leistungen werden individuell mit dem Kunden vereinbart.",

    "terms.section3.title": "3. Vertragsabschluss",
    "terms.section3.content":
      "Ein Vertrag kommt zustande, wenn der Kunde ein Angebot von Web Wombats annimmt oder eine schriftliche Bestätigung erfolgt.",

    "terms.section4.title": "4. Haftung",
    "terms.section4.content":
      "Web Wombats haftet nur für Schäden, die durch vorsätzliches oder grob fahrlässiges Verhalten verursacht wurden. Eine Haftung für indirekte Schäden oder Folgeschäden ist ausgeschlossen.",

    "terms.section5.title": "5. Datenschutz",
    "terms.section5.content":
      "Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung von Web Wombats. Diese ist unter Datenschutzerklärung einsehbar.",
    "terms.section5.link": "Datenschutzerklärung",

    "terms.section6.title": "6. Schlussbestimmungen",
    "terms.section6.content": "Es gilt das Recht der Schweiz. Gerichtsstand ist der Sitz der Web Wombats GmbH.",
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
