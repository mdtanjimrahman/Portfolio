"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

export default function Certifications() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const certifications = [
    {
      title: "Machine Learning Specialization",
      provider: "Coursera / Andrew Ng",
      date: "2024",
      credentialId: "ML-SPEC-2024",
      description:
        "Comprehensive specialization covering supervised and unsupervised learning, neural networks, and machine learning best practices.",
    },
    {
      title: "Deep Learning with TensorFlow",
      provider: "Google / TensorFlow Certification",
      date: "2024",
      credentialId: "DL-TF-2024",
      description: "Professional certification in TensorFlow and deep learning model development.",
    },
    {
      title: "Data Analysis with Python",
      provider: "Kaggle",
      date: "2023",
      credentialId: "DA-PYTHON-2023",
      description: "Advanced data analysis techniques using Python, pandas, and data visualization libraries.",
    },
    {
      title: "Web Development Bootcamp",
      provider: "Udemy",
      date: "2023",
      credentialId: "WEB-BOOT-2023",
      description: "Full-stack web development bootcamp covering frontend, backend, and deployment practices.",
    },
    {
      title: "Business Communication Essentials",
      provider: "University Coursework",
      date: "2023",
      credentialId: "BUS-COMM-2023",
      description: "Essential communication and presentation skills for professional environments.",
    },
    {
      title: "Advanced SQL & Database Design",
      provider: "Udemy",
      date: "2023",
      credentialId: "SQL-ADV-2023",
      description: "Advanced SQL queries, optimization, and database design principles.",
    },
  ]

  return (
    <main className="flex-1">
      <Navigation />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Certifications & Training</h1>
          <p className="text-muted-foreground mb-12 text-lg">Professional certifications and training credentials</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <Card key={idx} className="bg-card border-border hover:border-accent transition-all">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <Award className="text-accent flex-shrink-0" size={24} />
                    <div className="flex-1">
                      <CardTitle className="text-accent">{cert.title}</CardTitle>
                      <p className="text-sm text-muted-foreground mt-1">{cert.provider}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{cert.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-muted-foreground">
                      ID: <span className="text-accent font-mono">{cert.credentialId}</span>
                    </div>
                    <Badge variant="outline" className="text-xs border-muted text-muted-foreground">
                      {cert.date}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
