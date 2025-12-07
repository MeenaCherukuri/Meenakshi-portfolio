import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import visit1 from "@/assets/visit1.jpg";
import visit2 from "@/assets/visit2.jpg";
import visit4 from "@/assets/visit4.jpg";
import visit5 from "@/assets/visit5.jpg";


const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Replace techEvents with industry images
  const industryImages = [
    { id: 1, src:visit2 , alt: "Industry Visit " },
    { id: 2, src:visit1 , alt: "Industry Visit " },
    { id: 3, src:visit5, alt: "Industry Visit " },
    { id: 4, src:visit4, alt: "Industry Visit" },

  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % industryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto glow-box-cyan" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.9 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary glow-text-cyan">
              My Journey
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm an aspiring software engineer passionate about building practical and meaningful applications. My journey in tech began with curiosity about how software works and has grown into a drive to solve real-world problems through code.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I focus on full-stack development, working with frontend technologies like HTML, CSS, and JavaScript, and backend tools such as Node.js, Express, MongoDB, and SQL. I enjoy applying problem-solving skills learned through DSA and programming practice to create efficient, reliable, and scalable solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I am eager to contribute to a team where I can continue learning, growing, and building impactful software, while bringing both creativity and technical expertise to every project.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My philosophy: <span className="text-secondary font-semibold">"Bugs are the universe’s way of teaching patience and persistence."</span>
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative w-full aspect-square rounded-lg overflow-hidden glow-box-purple"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={industryImages[currentIndex].id}
                src={industryImages[currentIndex].src}
                alt={industryImages[currentIndex].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover rounded-lg"
              />
            </AnimatePresence>

            {/* Optional thumbnails */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              {industryImages.map((img, index) => (
                <motion.img
                  key={img.id}
                  src={img.src}
                  alt={img.alt}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full h-24 object-cover rounded-lg cursor-pointer border-2 ${
                    index === currentIndex ? "border-primary" : "border-transparent"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
