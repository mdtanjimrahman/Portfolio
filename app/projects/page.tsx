"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const projects = [
    {
      id: 1,
      title: "Course Recommendation System",
      category: "Machine Learning",
      description:
        "Intelligent recommendation engine analyzing user course data with collaborative filtering algorithms",
      technologies: ["Python", "Scikit-learn", "Pandas", "MySQL"],
      results: "Achieved 85% recommendation accuracy",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "Full-stack e-commerce application with product management and admin control panel",
      technologies: ["React", "Next.js", "PHP", "MySQL", "Stripe"],
      results: "Supports 1000+ products with real-time inventory",
    },
    {
      id: 3,
      title: "MNIST Deep Learning Model",
      category: "Machine Learning",
      description: "Convolutional Neural Network for handwritten digit recognition",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Python"],
      results: "99.2% accuracy on test dataset",
    },
    {
      id: 4,
      title: "Medical Image Analysis",
      category: "Data Science",
      description: "Deep learning model for analyzing and classifying medical imaging data",
      technologies: ["TensorFlow", "OpenCV", "NumPy", "Matplotlib"],
      results: "94% classification accuracy",
    },
    {
      id: 5,
      title: "Data Visualization Dashboard",
      category: "Data Science",
      description: "Interactive dashboard for business analytics and KPI tracking",
      technologies: ["Power BI", "Python", "SQL", "Excel"],
      results: "Reduced reporting time by 70%",
    },
    {
      id: 6,
      title: "ALBERT NLP Research",
      category: "Research",
      description: "Research on lightweight BERT model optimization for efficient language understanding",
      technologies: ["PyTorch", "Hugging Face", "Python", "CUDA"],
      results: "Published research paper with findings",
    },
  ]

  const categories = ["All", "Machine Learning", "Web Development", "Data Science", "Research"]

  const filtered =
    selectedCategory === null || selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory)

  return (
    <main className="flex-1">
      <Navigation />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Projects</h1>
          <p className="text-muted-foreground mb-12 text-lg">
            Explore my work across machine learning, web development, and data science
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === "All" ? null : cat)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  (selectedCategory === null && cat === "All") || selectedCategory === cat
                    ? "bg-accent text-accent-foreground"
                    : "bg-card border border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((project) => (
              <Card
                key={project.id}
                className="bg-card border-border hover:border-accent transition-all hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-accent mb-2">{project.title}</CardTitle>
                      <Badge variant="outline" className="text-xs border-accent text-accent">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-accent font-medium">{project.results}</p>
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
