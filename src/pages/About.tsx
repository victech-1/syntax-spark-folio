import { BookOpen, Users, Target, Heart, Code, Database, Brain, Lightbulb } from "lucide-react";

const journey = [
  {
    year: "2020",
    title: "Started Computer Science Journey",
    description: "Began studying Computer Science with a passion for problem-solving and technology innovation."
  },
  {
    year: "2021",
    title: "First Programming Projects",
    description: "Built my first web applications and discovered the joy of creating digital solutions."
  },
  {
    year: "2022",
    title: "Freelancing & Real-World Experience",
    description: "Started freelancing to apply my skills in real projects and help local businesses grow online."
  },
  {
    year: "2023",
    title: "Data Science & ML Focus",
    description: "Expanded expertise into data science and machine learning, completing several certification programs."
  },
  {
    year: "2024",
    title: "Professional Growth",
    description: "Secured full-time position as Senior Frontend Developer while continuing to explore AI/ML innovations."
  }
];

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "I believe in writing maintainable, well-documented code that stands the test of time."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Great software is built by great teams. I value open communication and knowledge sharing."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Always exploring new technologies and methodologies to solve problems more effectively."
  },
  {
    icon: Target,
    title: "Results-Driven",
    description: "Focused on delivering solutions that create real value and measurable impact."
  }
];

const interests = [
  "Machine Learning & AI",
  "Open Source Contributions",
  "Tech Mentorship",
  "Data Visualization",
  "Web Performance",
  "User Experience Design",
  "Cloud Computing",
  "Algorithmic Trading"
];

export const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold">About Me</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the person behind the code. My journey, values, and passion for technology.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Story */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">My Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey into technology began during my undergraduate studies at the University of Technology, 
                  where I discovered the power of code to solve real-world problems. What started as curiosity 
                  about how websites work evolved into a deep passion for creating digital experiences that matter.
                </p>
                <p>
                  Throughout my academic years, I immersed myself in various aspects of computer science, 
                  from algorithms and data structures to machine learning and web development. I found myself 
                  particularly drawn to the intersection of frontend development and data science, seeing how 
                  beautiful user interfaces could make complex data accessible and actionable.
                </p>
                <p>
                  Today, I continue to learn and grow in this ever-evolving field, always excited about the 
                  next challenge and the opportunity to make a positive impact through technology.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="card-elevated p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">50+</h3>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                <div className="card-elevated p-6 text-center">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Database className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">3+</h3>
                  <p className="text-sm text-muted-foreground">Years Experience</p>
                </div>
                <div className="card-elevated p-6 text-center">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Brain className="h-6 w-6 text-success" />
                  </div>
                  <h3 className="font-semibold mb-2">15+</h3>
                  <p className="text-sm text-muted-foreground">Technologies Mastered</p>
                </div>
                <div className="card-elevated p-6 text-center">
                  <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Heart className="h-6 w-6 text-warning" />
                  </div>
                  <h3 className="font-semibold mb-2">∞</h3>
                  <p className="text-sm text-muted-foreground">Passion for Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">My Journey</h2>
          
          <div className="max-w-3xl mx-auto">
            {journey.map((milestone, index) => (
              <div 
                key={milestone.year} 
                className="relative flex items-start space-x-6 pb-8 last:pb-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Line */}
                {index !== journey.length - 1 && (
                  <div className="absolute left-4 top-8 bottom-0 w-px bg-border"></div>
                )}
                
                {/* Year Badge */}
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {milestone.year.slice(-2)}
                </div>
                
                {/* Content */}
                <div className="card-elevated p-6 flex-1 group hover:scale-[1.02] transition-all duration-200">
                  <h3 className="font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values & Principles */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Values & Principles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title} 
                className="card-elevated p-6 text-center group hover:scale-105 transition-all duration-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Interests */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Education</h2>
              <div className="card-elevated p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Bachelor of Science in Computer Science</h3>
                    <p className="text-primary font-medium">University of Technology</p>
                    <p className="text-muted-foreground text-sm">2020 - 2024 • GPA: 3.8/4.0</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized in Machine Learning and Data Science with extensive coursework in 
                    algorithms, data structures, artificial intelligence, and software engineering.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-medium">Relevant Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Data Structures", "Machine Learning", "Web Development", "Database Systems", "AI & Neural Networks"].map((course) => (
                        <span key={course} className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Interests & Hobbies</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, I enjoy exploring new technologies, contributing to open source projects, 
                  and staying up-to-date with the latest developments in AI and machine learning.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map((interest, index) => (
                    <div 
                      key={interest} 
                      className="flex items-center space-x-3 p-3 bg-surface-elevated rounded-lg hover:bg-muted transition-colors"
                      style={{ animationDelay: `${index * 0.05}s` }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                      <span className="text-sm">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};