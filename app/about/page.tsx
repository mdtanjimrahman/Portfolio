"use client"

import { useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const skills = [
    "Python",
    "TensorFlow",
    "Keras",
    "OpenCV",
    "Scikit-learn",
    "JavaScript",
    "React",
    "Next.js",
    "PHP",
    "HTML5",
    "CSS",
    "MySQL",
    "Git",
    "Power BI",
    "Pandas",
    "Matplotlib",
  ]

  return (
    <main className="flex-1">
      <Navigation />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">About Me</h1>

          <div className="prose prose-invert max-w-none mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I'm a technology enthusiast with a strong focus on data-driven problem solving. My passion lies in
              exploring how AI and software engineering intersect to create impactful solutions. I enjoy transforming
              data into meaningful insights and designing user-friendly, efficient systems.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Skills & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {skills.map((skill, idx) => (
                <Card key={idx} className="bg-card border-border hover:border-accent transition-colors">
                  <CardContent className="pt-4">
                    <p className="text-center text-sm font-medium text-accent">{skill}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Education & Experience</h2>
            <div className="space-y-6">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-accent">B.Sc. Computer Science</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3">Coursework in AI, Data Science, and Software Engineering</p>
                  <p className="text-sm text-muted-foreground">
                    Focus Areas: Machine Learning, Neural Networks, Database Systems, Software Project Management
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-accent">Research Project: ALBERT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    A Lite BERT for Self-Supervised Learning of Language Representations. Explored lightweight NLP
                    models and their applications in modern NLP systems.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-accent">Professional Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Machine learning model training, business analytics, and full-stack web application development.
                    Experience with deployment, optimization, and production ML systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
