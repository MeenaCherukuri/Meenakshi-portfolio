import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CodingChallenges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

const platforms = [
  {
    name: "LeetCode",
    stats: {
      highlight: "100+ Problems Solved 💪",
      focus: "Data Structures & Algorithms",
    },
    icon: "🎯",
    link: "https://leetcode.com/u/Meenakshi_917/",
    color: "from-primary to-accent",
  },
  {
    name: "Codechef",
    stats: {
      highlight: "500+ Problems Solved",
      focus: "Programming & Problem Solving",
    },
    icon: "🧠",
    link: "https://leetcode.com/medal/?showImg=0&id=7985259&isLevel=false",
    color: "from-accent to-secondary",
  },
  {
    name: "Certifications",
    stats: {
      highlight: "🎓 20+ Certifications",
      focus: "Python, FSD, AIML, DS",
    },
    icon: "🚀",
    link: "https://github.com/MeenaCherukuri/Certifications",
    color: "from-secondary to-primary",
  },
];

const achievements = [
  "🏅 Earned Daily Streak Diamond Badge, Problem Solver Gold Badge, Contest Contender Silver Badge - Codechef",
  "🎯 Earned YOLO Badge, Pull Shark Badge, Quick Draw Badge – Github",
  "⚡ Earned 50 Days Streak Badge – Leetcode",
  "🚀 Secured 4th Place – AI Arena Event Conducted by IEEE.",
];


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="milestones" className="py-20 relative">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Milestones</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto glow-box-cyan" />
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Focused on building strong problem-solving foundations and exploring new technologies through continuous learning.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card className="h-full bg-card border-border hover:border-primary transition-all duration-300 glow-box-purple group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-5xl group-hover:scale-110 transition-transform">{platform.icon}</span>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="hover:text-primary hover:bg-primary/10"
                      asChild
                    >
                      <a href={platform.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                    {platform.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(platform.stats).map(([key, value], i) => (
                    <div key={i} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground capitalize">{key}:</span>
                      <span className={`text-sm font-bold bg-gradient-to-r ${platform.color} bg-clip-text text-transparent`}>
                        {value}
                      </span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-secondary glow-text-purple">
            Recent Achievements
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="bg-card border border-border rounded-lg p-4 hover:border-primary transition-all glow-box-cyan"
              >
                <p className="text-sm">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingChallenges;
