import { Download } from 'lucide-react';
import resumePdf from '../assets/Meenakshi_resume(9705197868).pdf'; 


const StickyResumeButton = () => {
  return (
    <a
      href={resumePdf}
      download
      className="
        fixed bottom-4 right-4 z-50
        glow-box-cyan font-semibold
        px-8 py-3 rounded-full flex items-center space-x-2
        transition duration-300
        
        /* --- MOBILE STYLES (Default) --- */
        bg-transparent border border-primary hover:bg-primary/10 
        
        /* CHANGE HERE: Setting a strong color for the transparent background */
        text-cyan-400 

        /* --- DESKTOP STYLES (Applied from md: breakpoint up) --- */
        md:bg-primary md:border-transparent md:hover:bg-primary/90
        
        /* OVERRIDE HERE: Reverting text color back to the default for filled background */
        md:text-primary-foreground 
      "
      aria-label="Download Resume"
      title="Download Resume"
    >
      <Download className="w-5 h-5" />
      <span>Resume</span>
    </a>
  );
};

export default StickyResumeButton;