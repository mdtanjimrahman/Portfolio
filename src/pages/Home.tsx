import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Brain, Code, Database, FileText } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

const Home = () => {
  const specializations = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Machine Learning & AI",
      description: "Predictive modeling, CNNs, NLP, and deep learning solutions.",
      link: "/projects?filter=ml",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Development",
      description: "Full-stack web applications with responsive, modern UI.",
      link: "/projects?filter=web",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Science",
      description: "Data preprocessing, visualization, and statistical analysis.",
      link: "/projects?filter=data",
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Research",
      description: "NLP and efficient model architecture studies.",
      link: "/projects?filter=research",
    },
  ];

  const achievements = [
    "Built a Course Recommendation System analyzing completed course data",
    "Developed an E-Commerce platform with product management and admin control panel",
    "Designed and deployed deep learning models for MNIST and medical image analysis",
    "Presented research work on lightweight NLP models such as ALBERT",
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-fade-in">
                Md. Tanjim Rahman
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-gradient mb-6 md:mb-8 animate-fade-in font-semibold">
                Data Analyst | Machine Learning & Data Science Enthusiast
              </p>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 md:mb-12 animate-fade-in">
                I'm a Machine Learning and Data Science enthusiast passionate about building 
                intelligent systems and web solutions that bridge data and design. I specialize 
                in developing end-to-end ML models, data-driven insights, and interactive digital platforms.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in">
                <Button asChild size="lg" className="gradient-primary glow-blue">
                  <Link to="/projects">
                    View Projects <ArrowRight className="ml-2" size={20} />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/about">About Me</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 animate-fade-in">
              <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full blur-3xl" />
                <img
                  src="/placeholder.svg"
                  alt="Md. Tanjim Rahman"
                  className="relative w-full h-full object-contain drop-shadow-2xl hover:scale-105 transition-smooth"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Key Achievements & Recognition
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <Card key={index} className="card-shadow hover:glow-blue transition-smooth">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <p className="text-foreground">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Specialization Areas
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="card-shadow hover:glow-blue transition-smooth group cursor-pointer"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-smooth">
                    {spec.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{spec.title}</h3>
                  <p className="text-muted-foreground mb-4">{spec.description}</p>
                  <Button asChild variant="link" className="text-primary p-0">
                    <Link to={spec.link}>
                      View Projects <ArrowRight className="ml-2" size={16} />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
