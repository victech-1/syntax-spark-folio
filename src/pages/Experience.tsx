import { Calendar, MapPin, Award, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "2023 - Present",
    type: "Full-time",
    description: "Lead frontend development for enterprise web applications serving 100k+ users. Collaborate with cross-functional teams to deliver high-quality user experiences.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led migration from legacy React to modern tech stack",
      "Mentored 3 junior developers and established coding standards"
    ],
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
  },
  {
    title: "Data Science Intern",
    company: "DataInsights Inc.",
    location: "Remote",
    period: "Summer 2023",
    type: "Internship",
    description: "Developed machine learning models for customer behavior analysis and implemented data visualization dashboards for business intelligence.",
    achievements: [
      "Built predictive models with 89% accuracy for customer segmentation",
      "Created automated reporting system reducing manual work by 60%",
      "Presented findings to C-level executives"
    ],
    technologies: ["Python", "pandas", "scikit-learn", "Tableau", "SQL"]
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "2022 - 2023",
    type: "Freelance",
    description: "Provided web development services to small businesses and startups, focusing on responsive design and user experience optimization.",
    achievements: [
      "Delivered 15+ successful projects for various clients",
      "Achieved 98% client satisfaction rate",
      "Increased client website conversion rates by average 35%"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "Shopify"]
  },
  {
    title: "Computer Science Student",
    company: "University of Technology",
    location: "Boston, MA",
    period: "2020 - 2024",
    type: "Education",
    description: "Bachelor of Science in Computer Science with focus on Machine Learning and Data Science. Relevant coursework included algorithms, data structures, and AI.",
    achievements: [
      "Graduated Magna Cum Laude with 3.8 GPA",
      "Published research paper on neural network optimization",
      "Led university hackathon team to 2nd place finish"
    ],
    technologies: ["Python", "Java", "C++", "MATLAB", "TensorFlow"]
  }
];

const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    url: "https://aws.amazon.com"
  },
  {
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    date: "2023",
    url: "https://grow.google"
  },
  {
    name: "Meta Frontend Developer Certificate",
    issuer: "Meta",
    date: "2022",
    url: "https://facebook.com"
  }
];

export const Experience = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold">Experience</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey spanning software development, data science, and continuous learning. 
              Each role has contributed to my growth as a well-rounded developer.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Professional Timeline</h2>
          
          <div className="max-w-4xl mx-auto">
            {experiences.map((experience, index) => (
              <div 
                key={experience.title + experience.company} 
                className="relative pl-8 pb-12 last:pb-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border"></div>
                
                {/* Timeline Dot */}
                <div className="absolute left-0 top-6 w-3 h-3 bg-primary rounded-full transform -translate-x-[5px] shadow-lg"></div>
                
                {/* Content Card */}
                <div className="card-elevated p-6 ml-6 group hover:scale-[1.02] transition-all duration-200">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="space-y-2 mb-4 lg:mb-0">
                      <h3 className="text-xl font-semibold">{experience.title}</h3>
                      <div className="flex items-center space-x-4 text-muted-foreground">
                        <span className="font-medium text-primary">{experience.company}</span>
                        <span className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span className="text-sm">{experience.location}</span>
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col lg:items-end space-y-2">
                      <div className="flex items-center space-x-1 text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span className="text-sm">{experience.period}</span>
                      </div>
                      <span className={`px-3 py-1 text-xs rounded-full ${
                        experience.type === 'Full-time' ? 'bg-success/10 text-success' :
                        experience.type === 'Internship' ? 'bg-accent/10 text-accent' :
                        experience.type === 'Freelance' ? 'bg-warning/10 text-warning' :
                        'bg-primary/10 text-primary'
                      }`}>
                        {experience.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {experience.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3 mb-6">
                    <h4 className="font-medium flex items-center space-x-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span>Key Achievements</span>
                    </h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name} 
                className="card-elevated p-6 text-center group hover:scale-105 transition-all duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{cert.name}</h3>
                <p className="text-muted-foreground text-sm mb-3">{cert.issuer}</p>
                <p className="text-primary text-sm font-medium mb-4">{cert.date}</p>
                <a 
                  href={cert.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors"
                >
                  <span className="text-sm">Verify Certificate</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};