import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      year: '2025',
      title: 'Certified Wi-Fi Pentesting 101',
      organization: 'Cappriciosec University'
    },
    {
      year: '2025',
      title: 'Cybersecurity Analyst Job Simulation',
      organization: 'Forage'
    },
    {
      year: '2025',
      title: 'Ethical Hacking Internship',
      organization: 'Hackup Technology'
    }
  ];

  return (
    <section id="certifications" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Training</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-green-500 to-cyan-500"></div>

            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto md:text-left'}`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-black transform -translate-x-1/2 shadow-lg shadow-cyan-500/50"></div>

                <div className="ml-20 md:ml-0 md:w-11/12 bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-500 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 font-semibold">{cert.year}</span>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="p-2 bg-cyan-500/10 rounded-lg">
                      <Award className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{cert.title}</h3>
                      <p className="text-gray-400 text-sm">{cert.organization}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
