"use client"

import { useEffect, useRef } from "react"

export function useScrollAnimation() {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Initialize the IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active")
            // Once the animation has played, we can stop observing this element
            observerRef.current?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when at least 10% of the element is visible
        rootMargin: "0px 0px -50px 0px", // Slightly before the element comes into view
      },
    )

    // Select all elements with the 'reveal' class
    const revealElements = document.querySelectorAll(".reveal")
    revealElements.forEach((element) => {
      observerRef.current?.observe(element)
    })

    // Cleanup
    return () => {
      if (observerRef.current) {
        revealElements.forEach((element) => {
          observerRef.current?.unobserve(element)
        })
      }
    }
  }, [])

  return null
}
