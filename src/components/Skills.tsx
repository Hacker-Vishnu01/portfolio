import { motion } from 'framer-motion';
import { Code, Shield, Search, Database } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['Python', 'Java', 'C', 'C++', 'Bash', 'HTML', 'CSS', 'JavaScript'],
      color: 'cyan'
    },
    {
      title: 'Security Tools',
      icon: Shield,
      skills: ['Kali Linux', 'Burp Suite', 'Wireshark', 'Nmap', 'Metasploit', 'SQLmap', 'Hydra', 'Nikto', 'Maltego'],
      color: 'green'
    },
    {
      title: 'Forensics & OSINT',
      icon: Search,
      skills: ['Autopsy', 'FTK Imager', 'OSINT Framework'],
      color: 'cyan'
    },
    {
      title: 'Platforms',
      icon: Database,
      skills: ['Streamlit', 'VS Code', 'VirtualBox', 'Gemini API', 'n8n', 'MySQL', 'Oracle'],
      color: 'green'
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const colorClass = category.color === 'cyan' ? 'cyan' : 'green';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl border border-${colorClass}-500/30 hover:border-${colorClass}-500 transition-all duration-300 hover:shadow-xl hover:shadow-${colorClass}-500/20`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 bg-${colorClass}-500/10 rounded-lg`}>
                    <Icon className={`w-6 h-6 text-${colorClass}-400`} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                      viewport={{ once: true }}
                      className={`px-4 py-2 bg-gray-800 text-${colorClass}-400 rounded-lg text-sm font-medium border border-gray-700 hover:border-${colorClass}-500 hover:shadow-lg hover:shadow-${colorClass}-500/20 transition-all cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
