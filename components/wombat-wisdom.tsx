"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const wisdomQuotes = [
  "Good analytics isn't about collecting more data, it's about asking better questions.",
  "The best tracking setup is the one that actually gets implemented.",
  "When in doubt, simplify your tracking. You can always add complexity later.",
  "Data without context is just numbers on a screen.",
  "The goal isn't to track everything, but to track what matters.",
  "A good dashboard answers questions before they're asked.",
  "GA4 might seem complex, but so was riding a bike... at first.",
  "The most valuable conversion is the one you're not tracking yet.",
]

export function WombatWisdom() {
  const [quote, setQuote] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setQuote(wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)])

    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setQuote(wisdomQuotes[Math.floor(Math.random() * wisdomQuotes.length)])
        setIsAnimating(false)
      }, 500)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-accent/50 border-accent hover:shadow-md transition-all">
      <CardContent className="pt-6 pb-4 px-6">
        <div className="flex gap-4 items-start">
          <Quote className="h-6 w-6 text-primary shrink-0 mt-0.5" />
          <div className={`transition-opacity duration-500 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            <p className="text-sm italic">{quote}</p>
            <p className="text-xs text-muted-foreground mt-2">Wombat Wisdom</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
