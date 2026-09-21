import { motion } from 'motion/react';
import { usePortfolio } from '../PortfolioContext';
import { Mail, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { personalInfo } = usePortfolio();

  if (!personalInfo) return null;

  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="px-4 py-2 text-sm font-medium uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-8 inline-block">
            What's Next?
          </span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            Let's talk.
          </h2>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12">
            I'm open to roles, research positions and collaborations in AI, data and health technology. Send me a message and I'll get back to you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all w-full sm:w-auto justify-center"
            >
              <Mail className="w-5 h-5" />
              Say Hello
            </a>
            <a 
              href={`https://wa.me/${personalInfo.phone.replace('+', '')}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-white/5 text-foreground border border-white/10 rounded-full font-medium hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-foreground transition-colors" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted"
        >
          <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
            <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">X (Twitter)</a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
