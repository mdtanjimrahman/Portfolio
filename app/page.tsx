"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Hero from "@/components/hero"
import Specializations from "@/components/specializations"
import Achievements from "@/components/achievements"
import Footer from "@/components/footer"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="flex-1">
      <Navigation />
      <Hero />
      <Specializations />
      <Achievements />
      <Footer />
    </main>
  )
}
