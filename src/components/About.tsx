import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="min-h-screen py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
              <p className="text-gray-300 text-lg leading-relaxed">
                Cybersecurity undergraduate (B.Sc. 2023–2026) with hands-on experience in
                <span className="text-cyan-400 font-semibold"> ethical hacking</span>,
                <span className="text-green-400 font-semibold"> penetration testing</span>,
                secure development, and log analysis. Passionate about
                <span className="text-cyan-400 font-semibold"> AI-powered automation</span> and
                digital security resilience.
              </p>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-2xl -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>

            <a
              href="https://github.com/Hacker-Vishnu01"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-cyan-500 transition-colors">
                <Github className="w-6 h-6 text-cyan-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">GitHub</p>
                <p className="text-gray-400 text-sm">Hacker-Vishnu01</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/vishnu-palanisamy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-cyan-500 transition-colors">
                <Linkedin className="w-6 h-6 text-cyan-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">LinkedIn</p>
                <p className="text-gray-400 text-sm">vishnu-palanisamy</p>
              </div>
            </a>

            <a
              href="mailto:vishnu10956@gmail.com"
              className="flex items-center gap-4 p-4 bg-gray-900 rounded-xl border border-gray-800 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group"
            >
              <div className="p-3 bg-gray-800 rounded-lg group-hover:bg-cyan-500 transition-colors">
                <Mail className="w-6 h-6 text-cyan-400 group-hover:text-white" />
              </div>
              <div>
                <p className="text-white font-semibold">Email</p>
                <p className="text-gray-400 text-sm">vishnu10956@gmail.com</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
