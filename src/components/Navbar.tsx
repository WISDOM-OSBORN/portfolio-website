import { motion } from 'motion/react';
import { usePortfolio } from '../PortfolioContext';
import { Briefcase, FileText } from 'lucide-react';

export default function Navbar() {
  const { personalInfo } = usePortfolio();

  if (!personalInfo) return null;

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
        <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
        <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        {personalInfo.cvUrl && (
          <a 
            href={personalInfo.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 bg-surface hover:bg-surface-hover text-sm font-medium text-foreground rounded-xl transition-colors border border-white/5"
            title="Download CV"
          >
            <FileText className="w-4 h-4 text-muted" />
            <span className="hidden sm:inline">CV</span>
          </a>
        )}
        <a 
          href="#projects"
          className="p-3 bg-surface hover:bg-surface-hover rounded-xl transition-colors"
          title="View Projects"
        >
          <Briefcase className="w-5 h-5 text-muted" />
        </a>
      </div>
    </motion.nav>
  );
}
