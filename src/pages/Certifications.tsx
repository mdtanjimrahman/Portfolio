import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Machine Learning Specialization",
      provider: "Coursera / Andrew Ng",
      date: "2024",
      description: "Comprehensive course covering supervised learning, neural networks, and ML best practices.",
      image: "/placeholder.svg",
    },
    {
      title: "Deep Learning with TensorFlow",
      provider: "Google / TensorFlow Certification",
      date: "2024",
      description: "Advanced deep learning techniques, model deployment, and production ML systems.",
      image: "/placeholder.svg",
    },
    {
      title: "Data Analysis with Python",
      provider: "Kaggle",
      date: "2023",
      description: "Data manipulation, analysis, and visualization using Python libraries.",
      image: "/placeholder.svg",
    },
    {
      title: "Web Development Bootcamp",
      provider: "Udemy",
      date: "2023",
      description: "Full-stack web development covering HTML, CSS, JavaScript, PHP, and MySQL.",
      image: "/placeholder.svg",
    },
    {
      title: "Business Communication Essentials",
      provider: "University Coursework",
      date: "2023",
      description: "Professional communication, presentation skills, and business writing.",
      image: "/placeholder.svg",
    },
    {
      title: "Computer Vision Fundamentals",
      provider: "Coursera",
      date: "2023",
      description: "Image processing, object detection, and deep learning for computer vision.",
      image: "/placeholder.svg",
    },
  ];

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Certifications & Training
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Professional certifications and completed training programs demonstrating continuous learning and expertise.
        </p>

        <div className="space-y-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <Card
              key={index}
              className="card-shadow hover:glow-blue transition-smooth group"
            >
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Certificate Image */}
                  <div className="md:w-64 flex-shrink-0">
                    <div className="relative aspect-[4/3] md:aspect-auto md:h-full bg-muted rounded-l-lg overflow-hidden">
                      <img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="flex-1 p-6 md:py-6 md:pr-6 md:pl-0">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold">{cert.title}</h3>
                      <Award className="w-6 h-6 text-primary group-hover:scale-110 transition-smooth flex-shrink-0 ml-2" />
                    </div>
                    
                    <p className="text-primary font-medium mb-1">{cert.provider}</p>
                    <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
                    
                    <p className="text-sm text-muted-foreground">
                      {cert.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <Card className="card-shadow max-w-3xl mx-auto mt-12">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Continuous Learning
            </h3>
            <p className="text-muted-foreground">
              I believe in lifelong learning and regularly pursue new certifications and training 
              programs to stay current with the latest technologies and best practices in 
              data science, machine learning, and software development.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default Certifications;
