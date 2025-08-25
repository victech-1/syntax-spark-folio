import { ExternalLink, Github, Code, Database, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "E-Commerce Web Application",
    description: "Full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
    techStack: ["React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    category: "Frontend Development",
    icon: Code,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    title: "Sales Data Analytics Dashboard",
    description: "Interactive dashboard for analyzing sales data using Python, pandas, and Plotly. Provides insights into sales trends, customer behavior, and revenue optimization.",
    techStack: ["Python", "pandas", "Plotly", "Jupyter", "SQL"],
    category: "Data Science",
    icon: Database,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    title: "Customer Churn Prediction Model",
    description: "Machine learning model to predict customer churn using classification algorithms. Achieved 92% accuracy using ensemble methods and feature engineering.",
    techStack: ["Python", "scikit-learn", "pandas", "NumPy", "Matplotlib"],
    category: "Machine Learning",
    icon: Brain,
    githubUrl: "https://github.com",
    featured: true
  },
  {
    title: "Responsive Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations and optimized performance.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    category: "Frontend Development",
    icon: Code,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com"
  },
  {
    title: "Stock Price Prediction",
    description: "Time series forecasting model for stock price prediction using LSTM neural networks and technical indicators.",
    techStack: ["Python", "TensorFlow", "Keras", "pandas", "yfinance"],
    category: "Machine Learning",
    icon: Brain,
    githubUrl: "https://github.com"
  },
  {
    title: "Data Visualization Library",
    description: "Custom Python library for creating interactive data visualizations with support for multiple chart types and export formats.",
    techStack: ["Python", "Matplotlib", "Plotly", "D3.js", "JavaScript"],
    category: "Data Science",
    icon: Database,
    githubUrl: "https://github.com"
  }
];

const categories = ["All", "Frontend Development", "Data Science", "Machine Learning"];

export const Projects = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold">My Projects</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of my work spanning frontend development, data science, and machine learning. 
              Each project represents a unique challenge and showcases different aspects of my technical expertise.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {projects.filter(project => project.featured).map((project, index) => (
              <div 
                key={project.title} 
                className="card-elevated p-8 group hover:scale-[1.02] transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <span className="text-sm text-primary font-medium">{project.category}</span>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* All Projects Grid */}
          <h2 className="text-3xl font-bold mb-12 text-center">All Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div 
                key={`${project.title}-${index}`} 
                className="card-elevated p-6 group hover:scale-105 transition-all duration-200"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <project.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg leading-tight">{project.title}</h3>
                    <span className="text-xs text-primary font-medium">{project.category}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.techStack.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-1 bg-muted text-xs rounded text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.techStack.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="h-3 w-3" />
                    <span className="text-xs">Code</span>
                  </a>
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-3 w-3" />
                      <span className="text-xs">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};