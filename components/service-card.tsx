import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
}

export function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <Card className="h-full transition-all hover:shadow-md hover:translate-y-[-5px] duration-300">
      <CardHeader>
        <div className="bg-primary/10 w-12 h-12 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80">{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
