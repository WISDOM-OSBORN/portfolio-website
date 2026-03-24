import { motion } from 'motion/react';
import { personalInfo } from '../data';
import { Github, Mail, MessageCircle, Twitter } from 'lucide-react';

export default function About() {
  const firstName = personalInfo.name.split(' ')[0];
  const lastName = personalInfo.name.split(' ')[1];

  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-white text-[#1a1a1a]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
              {firstName}<span className="text-accent">-</span>{lastName}
            </h2>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-2 text-[#1a1a1a]">
              Know more
            </h3>
            <h3 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-accent">
              About me
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
              {personalInfo.about}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a href={`mailto:${personalInfo.email}`} className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href={`https://wa.me/${personalInfo.phone.replace('+', '')}`} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-green-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href={personalInfo.twitter} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:text-black transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="h-12 px-4 rounded-xl bg-gray-100 flex items-center justify-center text-gray-700 font-bold hover:bg-gray-200 hover:text-green-500 transition-colors">
                fiverr.
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Image Placeholder */}
            <div className="aspect-[4/5] w-full max-w-md mx-auto bg-gray-200 rounded-2xl overflow-hidden relative shadow-xl">
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              
              {/* Blocky white overlay pattern at bottom right */}
              <div className="absolute bottom-0 right-0 w-32 h-32">
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-white" />
                <div className="absolute bottom-16 right-0 w-8 h-8 bg-white" />
                <div className="absolute bottom-0 right-16 w-8 h-16 bg-white" />
                <div className="absolute bottom-8 right-24 w-8 h-8 bg-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
