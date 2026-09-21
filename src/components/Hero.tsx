import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 overflow-hidden px-6 md:px-12 bg-background">
      {/* Dotted pattern background on the left */}
      <div
        className="absolute left-0 top-1/4 bottom-0 w-64 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col justify-center items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-sm md:text-base uppercase tracking-widest text-muted mb-6"
        >
          Wisdom Osborn Abuyah
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] mb-8"
        >
          Biomedical engineer building <span className="text-muted">AI and data tools</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto mb-4 leading-relaxed font-light"
        >
          I train deep learning models on medical images, build data tools like DataCern, and ship web products with AI-assisted coding.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base text-muted mb-10"
        >
          University of Ghana graduate | Co-founder and CTO, Wifra Labs (startup)
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all"
          >
            See my projects
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 bg-surface border border-white/10 text-foreground rounded-full font-medium hover:bg-surface-hover transition-all"
          >
            Get in touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
