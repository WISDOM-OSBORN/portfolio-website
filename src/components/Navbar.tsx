import { motion } from 'motion/react';
import { personalInfo } from '../data';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/80 border-b border-white/10"
    >
      <div className="text-xl font-display font-bold tracking-tighter">
        {personalInfo.name.split(' ')[0]}<span className="text-muted">.</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
        <a href="#about" className="hover:text-foreground transition-colors">About</a>
        <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
        <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
      </div>
      <a 
        href="#contact"
        className="px-4 py-2 text-sm font-medium bg-foreground text-background rounded-full hover:bg-foreground/90 transition-colors"
      >
        Let's Talk
      </a>
    </motion.nav>
  );
}
