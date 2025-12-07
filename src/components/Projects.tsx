import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 2,
      title: "DocSpot",
      description: "Developed DocSpot, a full-stack platform for booking doctor appointments with role-based dashboards for patients, doctors, and admins. Designed a responsive interface and RESTful backend with MongoDB for managing appointments efficiently.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js","Express.js","MongoDB"],
      demoLink: "https://docspot-7jfw.onrender.com/",
      githubLink: "https://github.com/Health-Appointment-booking-app/SmartBridge-Project",
      icon: "🩺"
    },
    {
      id: 3,
      title: "BEAM (Business Engagement Architecture for Marketplaces)",
      description: "An AI-driven B2B marketplace using Python Full Stack to connect MNCs and startups, enabling secure project posting, verified bidding, and seamless business collaboration among them.",
      tags: ["PythonFullstack", "Django", "React", "BusinessCollaboration","AiAgent"],
      demoLink: "https://beam-client.vercel.app/",
      githubLink: "https://github.com/MeenaCherukuri/beam_client",
      icon: "🤝"
    },
    {
      id: 1,
      title: "Human Emotion Detection from Voice",
      description: "Built an ML-based system using Python, Librosa, and Scikit-learn; extracted MFCC features, trained classi f iers (SVM, Random Forest), and achieved 85% accuracy on the RAVDESS dataset with a real-time Streamlit interface.",
      tags: ["Python", "Librosa", "Scikit-learn", "Streamlit", "ML"],
      // demoLink: "#",
      githubLink: "https://github.com/MeenaCherukuri/AIML-Internship",
      icon: "❤️"
    },
    {
      id: 4,
      title: "Memory Card Game",
      description: "Built a browser-based Memory Card Game using HTML, CSS, and JavaScript with features like dynamic card rendering, flip animations, random shuffle logic, timer, scoreboard, and win detection to deliver an interactive gaming experience.",
      tags: ["HTML","CSS","JavaScript"],
      demoLink: "https://chronomatchgame.netlify.app/",
      githubLink: "https://github.com/MeenaCherukuri/Memory-Card-Game/tree/master",
      icon: "🎮"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto glow-box-cyan" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for building exceptional applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary transition-all duration-300 glow-box-purple group">
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-5xl group-hover:scale-110 transition-transform">{project.icon}</span>
                    <div className="flex gap-2">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                          <Github className="w-5 h-5" />
                        </a>
                      </Button>
                      {project.demoLink && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="hover:text-primary hover:bg-primary/10"
                        asChild
                      >
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                      )}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border group-hover:border-primary/50 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
