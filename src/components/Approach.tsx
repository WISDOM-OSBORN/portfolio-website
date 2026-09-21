import { motion } from 'motion/react';
import { Mail } from 'lucide-react';

const skillGroups = [
  {
    title: "Health AI and research",
    items: "TensorFlow, Keras, PyTorch, U-Net++, OpenCV, BLAST, MODELLER, PyMOL",
  },
  {
    title: "Data and analysis",
    items: "Python, Pandas, NumPy, Scikit-learn, R, SQL, Streamlit",
  },
  {
    title: "Building products",
    items: "Next.js, React, TypeScript, Node.js, PostgreSQL, Redis, Vercel, Cloudflare, and AI coding tools",
  },
];

const steps = [
  {
    number: "1",
    title: "Define the problem",
    description: "Work out who will use it and what a good result looks like before building anything.",
  },
  {
    number: "2",
    title: "Structure the data",
    description: "Decide what data is needed, how it is stored and how it is checked.",
  },
  {
    number: "3",
    title: "Build the product",
    description: "Build it in small steps, test it with real data and fix what breaks.",
  },
  {
    number: "4",
    title: "Ship it",
    description: "Deploy it, watch for problems and keep improving it.",
  },
];

export default function Approach() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            What I work with<br />and how I work
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            My work sits between biomedical research, data analysis and software. I like taking a problem from a rough idea to something people can use.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full bg-[#1e1e1e] rounded-3xl p-8 md:p-10 space-y-8"
          >
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-medium tracking-widest uppercase text-muted mb-3">
                  {group.title}
                </h3>
                <p className="text-foreground leading-relaxed">{group.items}</p>
              </div>
            ))}
          </motion.div>

          {/* Steps */}
          <div className="relative">
            <h3 className="text-sm font-medium tracking-widest uppercase text-muted mb-8">How I work</h3>

            <div className="space-y-12 relative">
              <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />

              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="relative pl-12"
                >
                  <div className="absolute left-0 top-0 w-8 text-3xl font-bold text-white/20 leading-none">
                    {step.number}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 pl-12"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-foreground rounded-full text-sm font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
