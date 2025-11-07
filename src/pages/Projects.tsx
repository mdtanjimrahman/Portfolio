import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import mlProject from "@/assets/ml-project.jpg";
import webProject from "@/assets/web-project.jpg";
import dataProject from "@/assets/data-project.jpg";

const Projects = () => {
  const [searchParams] = useSearchParams();
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    const filter = searchParams.get("filter");
    if (filter) setActiveFilter(filter);
  }, [searchParams]);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ml", label: "Machine Learning" },
    { id: "web", label: "Web Development" },
    { id: "data", label: "Data Science" },
    { id: "research", label: "Research" },
  ];

  const projects = [
    {
      id: 1,
      title: "Course Recommendation System",
      category: "ml",
      tags: ["Machine Learning", "Python", "Data Analysis"],
      description: "Intelligent system analyzing completed course data to recommend personalized learning paths using collaborative filtering and content-based algorithms.",
      image: mlProject,
      link: "/projects/course-recommendation",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      category: "web",
      tags: ["Full Stack", "PHP", "MySQL", "JavaScript"],
      description: "Complete e-commerce solution with product management, shopping cart, payment integration, and comprehensive admin control panel.",
      image: webProject,
      link: "/projects/ecommerce",
    },
    {
      id: 3,
      title: "MNIST Deep Learning Model",
      category: "ml",
      tags: ["Deep Learning", "TensorFlow", "CNN"],
      description: "Convolutional Neural Network for handwritten digit recognition achieving 99%+ accuracy using TensorFlow and Keras.",
      image: mlProject,
      link: "/projects/mnist",
    },
    {
      id: 4,
      title: "Medical Image Analysis",
      category: "ml",
      tags: ["Computer Vision", "OpenCV", "Healthcare"],
      description: "Deep learning system for medical image classification and disease detection using advanced CNN architectures.",
      image: dataProject,
      link: "/projects/medical-imaging",
    },
    {
      id: 5,
      title: "ALBERT Research Project",
      category: "research",
      tags: ["NLP", "Research", "BERT", "Optimization"],
      description: "Research on A Lite BERT for Self-Supervised Learning - exploring efficient transformer architectures for natural language understanding.",
      image: mlProject,
      link: "/projects/albert",
    },
    {
      id: 6,
      title: "Business Analytics Dashboard",
      category: "data",
      tags: ["Power BI", "Data Visualization", "Analytics"],
      description: "Interactive dashboard providing real-time business insights with advanced data visualization and predictive analytics.",
      image: dataProject,
      link: "/projects/analytics",
    },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <main className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Projects
        </h1>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A showcase of my work in machine learning, web development, data science, and research.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={activeFilter === filter.id ? "gradient-primary" : ""}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="card-shadow hover:glow-blue transition-smooth overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <Button asChild variant="link" className="text-primary p-0">
                  <Link to={project.link}>View Details →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-muted-foreground text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
