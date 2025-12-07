import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import CodingChallenges from '@/components/CodingChallenges';
import Contact from '@/components/Contact';
import StickyResumeButton from '@/components/StickyResumeButton'; 

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CodingChallenges />
      <Contact />
       <StickyResumeButton />
    </div>
  );
};

export default Index;
