import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import profilePhoto from '@/assets/profile-photo.png';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Tech background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center mt-16 md:mt-24"
          >
            {/* Profile Picture */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-10"
            >
              <div className="relative">
                <img 
                  src={profilePhoto} 
                  alt="Anush Rao - Aspiring Software Developer" 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-2 border-primary shadow-[0_0_30px_rgba(0,0,0,0.5),0_0_15px_var(--primary)]"
                  style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5), 0 0 20px hsl(var(--primary) / 0.6)' }}
                />
              </div>
            </motion.div>

            {/* Greeting Text */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hi, I 'm{' '}
              <span className="gradient-text glow-text-cyan">
                Meenakshi Devi
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-8 font-light"
            >
             I’m an aspiring <span className="text-primary font-medium">Software Engineer</span>{' '}passionate about building{' '}
<span className="text-secondary font-medium">efficient</span>,{' '}
<span className="text-secondary font-medium">impactful</span>{' '}
full-stack solutions and exploring{' '}
<span className="text-primary font-medium">AI</span>{' '}technologies.

            </motion.p>
            

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                onClick={scrollToAbout}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-box-cyan font-semibold px-8"
              >
                Explore My Work
              </Button>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 glow-box-purple font-semibold px-8"
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowDown className="mx-auto text-primary w-8 h-8 glow-text-cyan" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
