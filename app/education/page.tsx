"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const education = [
    {
      degree: "B.Sc. Computer Science",
      institution: "Premier University",
      duration: "2020 - Present",
      focus: ["Machine Learning", "Data Science", "Software Engineering", "Business Communication"],
      projects: ["Course Recommendation System", "E-commerce Platform", "ML Model Deployment"],
      coursework: [
        "Artificial Intelligence",
        "Data Structures",
        "Database Systems",
        "Software Project Management",
        "Advanced Algorithms",
      ],
    },
  ]

  const workshops = [
    "Advanced Machine Learning with TensorFlow",
    "AI & Deep Learning Workshop",
    "Business Communication Skill Seminars",
    "Web Development Best Practices",
    "Data Visualization Masterclass",
  ]

  return (
    <main className="flex-1">
      <Navigation />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Education Journey</h1>
          <p className="text-muted-foreground mb-12 text-lg">
            Academic foundation and continuous learning in technology
          </p>

          <div className="space-y-8 mb-12">
            {education.map((edu, idx) => (
              <Card key={idx} className="bg-card border-border">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <GraduationCap className="text-accent flex-shrink-0" size={28} />
                    <div>
                      <CardTitle className="text-accent text-2xl">{edu.degree}</CardTitle>
                      <p className="text-muted-foreground mt-1">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.duration}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-3">Focus Areas</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {edu.focus.map((area) => (
                        <div key={area} className="text-muted-foreground">
                          ✓ {area}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Key Projects</h3>
                    <ul className="space-y-2">
                      {edu.projects.map((project) => (
                        <li key={project} className="text-muted-foreground">
                          • {project}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-bold mb-3">Relevant Coursework</h3>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <span key={course} className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Workshops & Seminars</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {workshops.map((workshop, idx) => (
                <Card key={idx} className="bg-card border-border">
                  <CardContent className="pt-6">
                    <p className="text-foreground">✓ {workshop}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
