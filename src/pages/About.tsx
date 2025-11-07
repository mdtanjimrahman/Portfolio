import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Python", level: 95 },
    { name: "TensorFlow / Keras", level: 90 },
    { name: "Power BI", level: 88 },
    { name: "Data Visualization", level: 92 },
    { name: "JavaScript / React", level: 85 },
    { name: "MySQL / Database", level: 87 },
    { name: "OpenCV", level: 83 },
    { name: "Git / GitHub", level: 90 },
  ];

  const timeline = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "B.Sc. in Computer Science",
      period: "Present",
      description: "Coursework in AI, Data Science, and Software Engineering. Focus on building intelligent systems and data-driven solutions.",
    },
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Research Project: ALBERT",
      period: "2024",
      description: "A Lite BERT for Self-Supervised Learning of Language Representations - focused on efficient NLP model architectures.",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "ML & Web Development Projects",
      period: "2023-2024",
      description: "Machine learning model training, business analytics, and full-stack web application development with focus on real-world solutions.",
    },
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About Me
          </h1>
          <Card className="card-shadow max-w-4xl mx-auto">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a technology enthusiast with a strong focus on data-driven problem solving. 
                My passion lies in exploring how AI and software engineering intersect to create 
                impactful solutions. I enjoy transforming data into meaningful insights and 
                designing user-friendly, efficient systems. With expertise spanning machine learning, 
                web development, and data analytics, I strive to build solutions that make a difference.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Skills Section */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-2" />
              </div>
            ))}
          </div>
        </section>

        {/* Experience Timeline */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Qualification & Experience
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <Card key={index} className="card-shadow hover:glow-blue transition-smooth">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h3 className="text-xl font-semibold">{item.title}</h3>
                        <span className="text-sm text-primary font-medium">{item.period}</span>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
