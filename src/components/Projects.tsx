import { motion } from 'framer-motion';
import { Code2, Bot, Wifi, HardDrive, FileSearch, Shield } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'AI Story & Poem Generator',
      description: 'Streamlit app using Gemini API with multilingual & rhyme control.',
      icon: Bot,
      tags: ['Python', 'Streamlit', 'Gemini API', 'AI']
    },
    {
      title: 'Agentic AI Form Automation',
      description: 'Automated form-filling using n8n and AI parsing.',
      icon: Code2,
      tags: ['n8n', 'AI', 'Automation', 'Workflow']
    },
    {
      title: 'Wi-Fi Pentest Simulation',
      description: 'Conducted deauth, spoofing, and phishing on test networks.',
      icon: Wifi,
      tags: ['Kali Linux', 'Pentesting', 'Networking', 'Security']
    },
    {
      title: 'Digital Forensics Case Study',
      description: 'Used Autopsy & FTK to recover deleted artifacts.',
      icon: HardDrive,
      tags: ['Autopsy', 'FTK Imager', 'Forensics', 'Investigation']
    },
    {
      title: 'Log Analysis CLI Tool',
      description: 'Python utility for real-time anomaly detection and monitoring.',
      icon: FileSearch,
      tags: ['Python', 'CLI', 'Security', 'Monitoring']
    },
    {
      title: 'Vulnerability Testing',
      description: 'Black-box audit on test site; found SQLi and XSS flaws.',
      icon: Shield,
      tags: ['Burp Suite', 'SQLmap', 'Web Security', 'Pentesting']
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 cursor-pointer"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/10 transition-all"></div>

                <div className="relative z-10">
                  <div className="p-3 bg-cyan-500/10 rounded-lg w-fit mb-4 group-hover:bg-cyan-500/20 transition-colors">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-800 text-green-400 text-xs rounded-md border border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
