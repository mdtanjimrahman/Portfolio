import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-balance">
          Md. <span className="text-accent">Tanjim Rahman</span>
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground mb-4 text-balance">
          Data Analyst & Machine Learning Specialist
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          I'm a Machine Learning and Data Science enthusiast passionate about building intelligent systems and web
          solutions that bridge data and design. I specialize in developing end-to-end ML models, data-driven insights,
          and interactive digital platforms.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent/10 bg-transparent"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
