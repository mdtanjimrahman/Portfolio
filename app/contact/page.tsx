"use client"

import type React from "react"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 2000)
  }

  return (
    <main className="flex-1">
      <Navigation />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4">Let's Connect</h1>
            <p className="text-muted-foreground text-lg">
              I'm always excited to discuss new opportunities, collaborations, or ideas. Reach out anytime!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <Mail className="text-accent mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Email</h3>
                <a href="mailto:tanjim@example.com" className="text-accent hover:underline">
                  tanjim@example.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <Phone className="text-accent mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">Phone</h3>
                <a href="tel:+1234567890" className="text-accent hover:underline">
                  +1 (234) 567-890
                </a>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="pt-6">
                <Linkedin className="text-accent mx-auto mb-4" size={32} />
                <h3 className="font-bold mb-2">LinkedIn</h3>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Connect with me
                </a>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-card border-border mb-12">
            <CardHeader>
              <CardTitle>Send me a message</CardTitle>
              <CardDescription>I'll get back to you as soon as possible</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:border-accent h-32 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                  disabled={submitted}
                >
                  {submitted ? "Message Sent! ✓" : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-6">Find me on social media</h3>
            <div className="flex justify-center gap-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Github size={32} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Linkedin size={32} />
              </a>
              <a
                href="https://kaggle.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
