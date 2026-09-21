import { motion } from 'motion/react';
import { usePortfolio } from '../PortfolioContext';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const { projects } = usePortfolio();
  
  return (
    <section id="projects" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Featured Projects</h2>
          <p className="text-muted text-lg">
            A selection of what I have built, from research models to live products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group flex flex-col bg-surface rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-colors"
            >
              <div className="aspect-[16/10] w-full bg-[#1e1e1e] relative overflow-hidden">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface to-surface-hover">
                    <span className="text-3xl font-bold tracking-tight">{project.title}</span>
                    <span className="text-xs uppercase tracking-widest text-muted">{project.type}</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-[10px] font-medium uppercase tracking-wider bg-white/5 text-muted rounded-full flex items-center gap-1.5"
                    >
                      <span className="w-1 h-1 rounded-full bg-accent/50" />
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-bold tracking-tight mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted text-sm leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Source code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
