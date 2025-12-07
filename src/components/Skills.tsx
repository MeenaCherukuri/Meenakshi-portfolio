import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const skillCategories = [
  {
    category: "Frontend",
    skills: [
      { name: "HTML", level: 95, icon: "🧱" },
      { name: "CSS", level: 80, icon: "🎨" },
      { name: "JavaScript", level: 80, icon: "⚡" },
      { name: "React (Basics)", level: 55, icon: "⚛️" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js (Basics)", level: 50, icon: "🟢" },
      { name: "Express (Basics)", level: 55, icon: "🚂" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "SQL", level: 85, icon: "🗄️" },
    ],
  },
  {
    category: "Programming & Tools",
    skills: [
      { name: "Java", level: 80, icon: "☕" },
      { name: "Python", level: 75, icon: "🐍" },
      { name: "Git", level: 85, icon: "🔧" },
      { name: "GitHub", level: 85, icon: "🐙" },
    ],
  },
];


const achievements = [
  { label: "LeetCode Problems Solved", count: "100+", icon: "💻" },
  { label: "Chess Champion", count: "🏅", icon: "♟️" },
  { label: "Cambridge Certification", count: "✓", icon: "🎓" },

];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto glow-box-cyan" />
        </motion.div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-4 text-center glow-box-purple hover:scale-105 transition-transform"
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <div className="text-2xl font-bold text-primary glow-text-cyan mb-1">{achievement.count}</div>
              <div className="text-xs text-muted-foreground">{achievement.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills by Category */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="space-y-6"
            >
              <h3 className="text-xl font-semibold text-secondary glow-text-purple mb-4">
                {category.category}
              </h3>
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  variants={itemVariants}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <Badge variant="secondary" className="bg-secondary/20 text-secondary border-secondary/50">
                      {skill.level}%
                    </Badge>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-primary to-secondary glow-box-cyan"
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
