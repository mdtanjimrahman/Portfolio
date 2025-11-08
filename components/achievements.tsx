import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function Achievements() {
  const achievements = [
    {
      title: "Course Recommendation System",
      description: "Built an intelligent system analyzing completed course data with collaborative filtering",
    },
    {
      title: "E-Commerce Platform",
      description: "Developed full-stack platform with product management and admin control panel",
    },
    {
      title: "Deep Learning Models",
      description: "Designed and deployed models for MNIST digit recognition and medical image analysis",
    },
    {
      title: "ALBERT Research",
      description: "Presented research on lightweight NLP models for self-supervised language learning",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center">Key Achievements</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Recognition and accomplishments across ML, web development, and data science
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, idx) => (
            <Card key={idx} className="bg-card border-border">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <CheckCircle2 className="text-accent flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-2">{achievement.title}</h3>
                    <p className="text-muted-foreground text-sm">{achievement.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
