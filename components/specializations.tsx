import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, Code2, BarChart3, BookOpen } from "lucide-react"

export default function Specializations() {
  const specializations = [
    {
      icon: Brain,
      title: "Machine Learning & AI",
      description: "Predictive modeling, CNNs, NLP",
      details: "Building intelligent systems with TensorFlow, PyTorch, and Scikit-learn for complex problem-solving.",
    },
    {
      icon: Code2,
      title: "Web Development",
      description: "Full-stack web apps with responsive UI",
      details: "Creating dynamic, responsive applications using React, Next.js, and modern web technologies.",
    },
    {
      icon: BarChart3,
      title: "Data Science",
      description: "Data preprocessing, visualization, and analysis",
      details: "Transforming raw data into meaningful insights using Python, Power BI, and statistical analysis.",
    },
    {
      icon: BookOpen,
      title: "Research",
      description: "NLP and efficient model architectures",
      details: "Exploring lightweight NLP models and cutting-edge research in machine learning optimization.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Specializations</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Key areas where I excel and create impactful solutions
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {specializations.map((spec, idx) => {
            const Icon = spec.icon
            return (
              <Card key={idx} className="bg-background border-border hover:border-accent transition-colors">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-accent">{spec.title}</CardTitle>
                      <CardDescription>{spec.description}</CardDescription>
                    </div>
                    <Icon className="text-accent" size={28} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{spec.details}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-accent hover:bg-accent/10 border-accent bg-transparent"
                  >
                    View Projects
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
