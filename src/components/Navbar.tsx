import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Briefcase } from 'lucide-react';

export default function Navbar() {
  const firstName = personalInfo.name.split(' ')[0];
  const lastName = personalInfo.name.split(' ')[1];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 bg-background/95 border-b border-white/5"
    >
      <div className="flex flex-col">
        <div className="text-xl font-display font-bold tracking-tight leading-none">
          {firstName}{lastName}
        </div>
        <div className="text-[10px] text-muted tracking-widest uppercase mt-1">
          portfolio
        </div>
      </div>
      
      <div className="hidden md:flex items-center gap-10 text-sm font-medium text-foreground">
        <a href="#about" className="hover:text-accent transition-colors">About Me</a>
        <a href="#projects" className="hover:text-accent transition-colors">Jobs</a>
        <a href="#contact" className="hover:text-accent transition-colors">Review</a>
      </div>

      <a 
        href="#projects"
        className="p-3 bg-surface hover:bg-surface-hover rounded-xl transition-colors"
      >
        <Briefcase className="w-5 h-5 text-muted" />
      </a>
    </motion.nav>
  );
}
