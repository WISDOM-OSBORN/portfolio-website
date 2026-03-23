import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Code2, Database, Layout, Sparkles } from 'lucide-react';

const skills = [
  {
    title: "Frontend Development",
    icon: <Layout className="w-6 h-6" />,
    description: "Building responsive, accessible, and performant user interfaces using React, Next.js, and Tailwind CSS."
  },
  {
    title: "Backend & Databases",
    icon: <Database className="w-6 h-6" />,
    description: "Designing robust APIs and managing data with Node.js, Python, PostgreSQL, and Supabase."
  },
  {
    title: "Machine Learning & AI",
    icon: <Sparkles className="w-6 h-6" />,
    description: "Integrating intelligent features using Python, Hugging Face, Google Gemini AI SDK, and custom models."
  },
  {
    title: "Web3 & Blockchain",
    icon: <Code2 className="w-6 h-6" />,
    description: "Exploring decentralized applications, smart contracts, and the future of the web."
  }
];

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 text-sm font-medium uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-8 inline-block">
              About Me
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 leading-tight">
              Bridging the gap between <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">design and engineering.</span>
            </h2>
            <p className="text-xl text-muted leading-relaxed mb-8">
              {personalInfo.about}
            </p>
            <p className="text-lg text-muted leading-relaxed">
              My approach focuses on creating scalable architectures, rapid development without compromising quality, and delivering high-performance solutions that grow with your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="p-8 bg-surface rounded-3xl border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-accent mb-6">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{skill.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
