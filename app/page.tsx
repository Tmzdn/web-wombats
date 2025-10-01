"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import {
  Brain,
  Database,
  Workflow,
  Sparkles,
  TrendingUp,
  Zap,
  ArrowRight,
  Mail,
  Cog,
  GraduationCap,
  Target,
} from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export default function Home() {
  // Initialize scroll animations
  useScrollAnimation()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault()
    const targetId = path.substring(1)
    const element = document.getElementById(targetId)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse-slower"></div>

        <div className="container relative z-10 py-32">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in">
              Intelligent Data
              <br />
              <span className="gradient-text-enhanced">Powered by AI</span>
            </h1>

            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              Transform your business with AI analytics, automated workflows, and expert strategic guidance for
              data-driven growth.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <Button
                asChild
                size="lg"
                className="group text-base px-8 py-6 h-auto rounded-full"
                data-analytics-event="click_button"
              >
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group text-base px-8 py-6 h-auto rounded-full border-2 bg-transparent"
                data-analytics-event="click_button"
              >
                <a href="#services" onClick={(e) => handleNavClick(e, "#services")} className="flex items-center gap-2">
                  Our Services
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-subtle">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary/50 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 scroll-mt-16 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        <div className="container relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold reveal">Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal" style={{ transitionDelay: "100ms" }}>
              End-to-end solutions for modern data infrastructure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <ServiceCard
              title="AI & Machine Learning"
              description="Build and deploy custom ML models for predictive analytics, recommendation systems, and intelligent automation."
              icon={Brain}
              delay={100}
            />
            <ServiceCard
              title="Data Warehouse Solutions"
              description="Design and implement scalable data warehouses on BigQuery, Snowflake, or Redshift optimized for your workload."
              icon={Database}
              delay={200}
            />
            <ServiceCard
              title="Process Automation"
              description="Streamline operations with intelligent automation, eliminating manual tasks and optimizing workflows for maximum efficiency."
              icon={Workflow}
              delay={300}
            />
            <ServiceCard
              title="Business Process Optimization"
              description="Analyze and redesign business processes to reduce costs, improve quality, and accelerate time-to-market with data-driven insights."
              icon={Cog}
              delay={400}
            />
            <ServiceCard
              title="Data Analytics Training"
              description="Empower your team with hands-on training in modern analytics tools, AI/ML concepts, and data-driven decision making."
              icon={GraduationCap}
              delay={500}
            />
            <ServiceCard
              title="Strategy Consulting"
              description="Expert guidance on AI adoption, data strategy, digital transformation, and building a data-driven organizational culture."
              icon={Target}
              delay={600}
            />
            <ServiceCard
              title="Real-Time Analytics"
              description="Stream processing infrastructure for instant insights with Kafka, Flink, and real-time data platforms."
              icon={Zap}
              delay={700}
            />
            <ServiceCard
              title="Business Intelligence"
              description="Transform data into actionable insights with custom dashboards, reports, and visualization solutions."
              icon={TrendingUp}
              delay={800}
            />
            <ServiceCard
              title="AI Implementation"
              description="Full-cycle AI project delivery from proof-of-concept to production deployment with continuous monitoring and optimization."
              icon={Sparkles}
              delay={900}
            />
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-32 bg-muted/20 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        <div className="container relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold reveal">Technology Stack</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal" style={{ transitionDelay: "100ms" }}>
              Built on industry-leading platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Google Cloud Platform",
              "BigQuery",
              "TensorFlow",
              "Python",
              "Apache Airflow",
              "dbt",
              "Snowflake",
              "Apache Kafka",
              "Power BI",
              "Tableau",
              "Looker",
              "Kubernetes",
            ].map((tech, index) => (
              <div
                key={tech}
                className="text-center p-8 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover-lift reveal"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="text-lg font-semibold">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

        <div className="container relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-5xl md:text-6xl font-bold reveal">Our Approach</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto reveal" style={{ transitionDelay: "100ms" }}>
              Strategic, hands-on, and results-focused
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div className="text-center space-y-6 reveal" style={{ transitionDelay: "100ms" }}>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-primary">1</span>
              </div>
              <h3 className="text-2xl font-bold">Discover & Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                We analyze your current processes, data infrastructure, and business objectives to design a tailored
                roadmap for transformation.
              </p>
            </div>

            <div className="text-center space-y-6 reveal" style={{ transitionDelay: "200ms" }}>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-primary">2</span>
              </div>
              <h3 className="text-2xl font-bold">Implement & Optimize</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build scalable solutions, automate workflows, and train your team with hands-on implementation and
                continuous optimization.
              </p>
            </div>

            <div className="text-center space-y-6 reveal" style={{ transitionDelay: "300ms" }}>
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-primary">3</span>
              </div>
              <h3 className="text-2xl font-bold">Scale & Sustain</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitor performance, scale infrastructure, and provide ongoing strategic guidance to ensure long-term
                success and ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 scroll-mt-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px]"></div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold reveal">Let's Build Something</h2>
              <p className="text-xl text-muted-foreground reveal" style={{ transitionDelay: "100ms" }}>
                Ready to transform your data infrastructure? Get in touch.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: "200ms" }}>
              <Button
                asChild
                size="lg"
                className="group text-base px-8 py-6 h-auto rounded-full"
                data-analytics-event="click_button"
              >
                <a
                  href="https://www.linkedin.com/company/web-wombats/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Contact Us
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
