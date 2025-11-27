import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-cyan-500/20 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Vishnu Palanisamy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ethical Hacker Aspirant passionate about cybersecurity, penetration testing, and building secure systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/Hacker-Vishnu01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-lg hover:bg-cyan-500 transition-colors group"
              >
                <Github className="w-5 h-5 text-cyan-400 group-hover:text-white" />
              </a>
              <a
                href="https://www.linkedin.com/in/vishnu-palanisamy"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-900 rounded-lg hover:bg-cyan-500 transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-cyan-400 group-hover:text-white" />
              </a>
              <a
                href="mailto:vishnu10956@gmail.com"
                className="p-3 bg-gray-900 rounded-lg hover:bg-cyan-500 transition-colors group"
              >
                <Mail className="w-5 h-5 text-cyan-400 group-hover:text-white" />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8"></div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 text-sm"
        >
          <p className="flex items-center justify-center gap-2">
            © 2025 Vishnu Palanisamy. Built with
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            and React
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
