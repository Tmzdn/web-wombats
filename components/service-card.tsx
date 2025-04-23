import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
      className="h-full transition-all hover-lift hover-glow reveal card-hover group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <CardHeader>
        <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center mb-4 transition-all duration-500 icon-container group-hover:bg-primary/20">
          <Icon className="h-6 w-6 text-primary transition-all duration-500 group-hover:text-primary/90" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
