import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Book, Users } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      period: "2021 - Present",
      focusAreas: [
        "Machine Learning",
        "Data Science",
        "Software Engineering",
        "Business Communication",
      ],
      keyProjects: [
        "Course Recommendation System",
        "E-commerce Platform",
        "ML Model Deployment",
      ],
      relevantCourses: [
        "Artificial Intelligence",
        "Data Structures & Algorithms",
        "Database Systems",
        "Software Project Management",
        "Computer Vision",
        "Natural Language Processing",
      ],
    },
  ];

  const workshops = [
    {
      title: "AI & Machine Learning Workshop",
      description: "Advanced techniques in deep learning and neural networks",
      year: "2024",
    },
    {
      title: "Business Communication Skills Seminar",
      description: "Professional communication and presentation skills development",
      year: "2023",
    },
    {
      title: "Data Science Bootcamp",
      description: "Intensive training in data analysis and visualization",
      year: "2023",
    },
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Education Journey
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Academic background and continuous learning in computer science and technology.
        </p>

        {/* Main Education */}
        <section className="mb-16">
          {education.map((edu, index) => (
            <Card key={index} className="card-shadow max-w-5xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-2">{edu.degree}</h2>
                    <p className="text-primary font-medium mb-1">{edu.institution}</p>
                    <p className="text-muted-foreground">{edu.period}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Book className="w-5 h-5 text-primary" />
                      Focus Areas
                    </h3>
                    <ul className="space-y-2">
                      {edu.focusAreas.map((area, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-4">Key Projects</h3>
                    <ul className="space-y-2">
                      {edu.keyProjects.map((project, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{project}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">Relevant Coursework</h3>
                  <div className="flex flex-wrap gap-2">
                    {edu.relevantCourses.map((course, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 bg-secondary rounded-full text-sm text-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Workshops & Seminars */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Workshops & Seminars
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card key={index} className="card-shadow hover:glow-blue transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{workshop.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {workshop.description}
                  </p>
                  <p className="text-xs text-primary font-medium">{workshop.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default Education;
