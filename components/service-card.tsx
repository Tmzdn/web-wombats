import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  delay?: number
}

export function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <Card
      className="h-full transition-all hover-lift reveal group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardHeader className="relative z-10 space-y-4">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="relative z-10">
        <p className="text-muted-foreground leading-relaxed text-base">{description}</p>
      </CardContent>
    </Card>
  )
}
