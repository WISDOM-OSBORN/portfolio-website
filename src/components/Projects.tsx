import { motion } from 'motion/react';
import { projects } from '../data';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Featured Work</h2>
          <p className="text-xl text-muted max-w-2xl">
            A selection of my recent projects spanning Machine Learning, E-Commerce, and Full-Stack Development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative flex flex-col justify-between bg-background rounded-3xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent rounded-3xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <span className="px-3 py-1 text-xs font-medium uppercase tracking-wider text-accent bg-accent/10 rounded-full">
                    {project.type}
                  </span>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="p-3 bg-white/5 rounded-full text-muted hover:text-foreground hover:bg-white/10 transition-all"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>

                <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted text-lg leading-relaxed mb-8">
                  {project.description}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/5 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium bg-white/5 text-muted rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
