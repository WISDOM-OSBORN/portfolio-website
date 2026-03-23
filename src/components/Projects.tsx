import { motion } from 'motion/react';
import { projects, personalInfo } from '../data';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
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
            A collection of my recent work and experiments
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
              {/* Image Placeholder */}
              <div className="aspect-[16/10] w-full bg-[#1e1e1e] relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/${project.id}/800/500`} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
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
                  <a 
                    href={personalInfo?.github || "https://github.com"} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-muted hover:text-foreground transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Github
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
