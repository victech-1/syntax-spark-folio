import { Link } from "react-router-dom";
import { ArrowRight, Code, Database, Brain, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React, responsive design"
  },
  {
    icon: Database,
    title: "Python & Data Science",
    description: "NumPy, pandas, data analysis, visualization"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "ML algorithms, model implementation, AI solutions"
  }
];

export const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-surface to-surface-elevated overflow-hidden">
        <div className="absolute inset-0 bg-gradient-animated opacity-5"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-gradient">John Developer</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                A passionate software developer specializing in frontend development, 
                Python data science, and machine learning. I create innovative solutions 
                that bridge technology and user experience.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/projects">
                <Button className="btn-primary group">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="btn-secondary">Get In Touch</Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-surface-elevated rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-surface-elevated rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:john@example.com" 
                className="p-3 bg-surface-elevated rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={heroImage} 
                alt="Professional developer workspace" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold">Core Expertise</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining technical skills with creative problem-solving to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={skill.title} 
                className="card-elevated p-8 text-center group hover:scale-105 transition-all duration-200"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              I'm always excited to work on new projects and collaborate with talented teams. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-primary hover:bg-gray-100 shadow-lg hover:shadow-xl">
                  Start a Project
                </Button>
              </Link>
              <Link to="/projects">
                <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};