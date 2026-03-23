import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 overflow-hidden px-6 md:px-12 bg-background">
      {/* Dotted pattern background on the left */}
      <div className="absolute left-0 top-1/4 bottom-0 w-64 pointer-events-none opacity-30"
           style={{
             backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)',
             backgroundSize: '30px 30px'
           }}
      />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center flex-1 flex flex-col justify-center items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1] mb-6"
        >
          Hi! Welcome to My <span className="text-muted">Portfolio</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl text-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          <p className="mb-2">
            I'm a <span className="relative inline-block font-medium">
              Full-Stack
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-white" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="transparent" />
              </svg>
            </span> website developer
          </p>
          <p>Let's build your online presence quickly and efficiently.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a 
            href="#about"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-surface border border-white/10 text-foreground rounded-full font-medium hover:bg-surface-hover transition-all"
          >
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
              <ArrowRight className="w-4 h-4" />
            </div>
            Learn a little about ME!
          </a>
        </motion.div>
      </div>

      {/* VS Code Mockup Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl mx-auto mt-20"
      >
        <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-surface rounded-t-3xl border-t border-l border-r border-white/10 overflow-hidden relative shadow-2xl">
          {/* Mockup Header */}
          <div className="h-10 bg-[#1e1e1e] border-b border-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <div className="flex-1 text-center text-xs text-muted font-mono">Hero.tsx - VS Code</div>
          </div>
          {/* Mockup Body Placeholder */}
          <div className="p-6 font-mono text-sm text-muted/50 flex flex-col gap-2">
            <p><span className="text-blue-400">import</span> {'{'} motion {'}'} <span className="text-blue-400">from</span> <span className="text-green-400">'motion/react'</span>;</p>
            <p><span className="text-blue-400">export default function</span> <span className="text-yellow-200">Hero</span>() {'{'}</p>
            <p className="pl-4"><span className="text-blue-400">return</span> (</p>
            <p className="pl-8">{'<section className="bg-background">'}</p>
            <p className="pl-12">{'<h1>Welcome to my Portfolio</h1>'}</p>
            <p className="pl-8">{'</section>'}</p>
            <p className="pl-4">);</p>
            <p>{'}'}</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
