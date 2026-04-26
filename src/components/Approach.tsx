import { motion } from 'motion/react';
import { Phone } from 'lucide-react';

const steps = [
  {
    number: "1",
    title: "Client Requirements Gathering",
    description: "Understanding the clients needs and objectives to build a roadmap for the project."
  },
  {
    number: "2",
    title: "Design and Development",
    description: "Creating design mockups and developing the website, ensuring it meets the clients expectations."
  },
  {
    number: "3",
    title: "Testing and Optimization",
    description: "Thoroughly testing the website for bugs, performance, and responsiveness across devices."
  },
  {
    number: "4",
    title: "Launch and Maintenance",
    description: "Launching the website and providing ongoing support for any updates or maintenance."
  }
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
            My Web Development<br />Approach
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            I follow a structured approach to delivering high-quality websites that cater to my clients' needs. From gathering requirements to product launch and ongoing maintenance, each step is essential to the success of the project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-square bg-[#1e1e1e] rounded-3xl overflow-hidden relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80" 
              alt="Web Design Workflow"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Steps */}
          <div className="relative">
            <h3 className="text-sm font-medium tracking-widest uppercase text-muted mb-8">Steps</h3>
            
            <div className="space-y-12 relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-2 bottom-2 w-px bg-white/10" />

              {steps.map((step, index) => (
                <motion.div 
                  key={index}
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
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
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
                <Phone className="w-4 h-4" />
                Schedule a consultation
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}