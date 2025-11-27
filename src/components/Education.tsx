import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

export default function Education() {
  const courses = [
    'Ethical Hacking',
    'Network Security',
    'Cyber Forensics',
    'Cyber Law',
    'Secure Coding'
  ];

  return (
    <section id="education" className="min-h-screen py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">Education</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 md:p-12 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10">
            <div className="absolute top-6 right-6 p-4 bg-cyan-500/10 rounded-full">
              <GraduationCap className="w-8 h-8 text-cyan-400" />
            </div>

            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                B.Sc. Computer Science with Cybersecurity
              </h3>
              <p className="text-cyan-400 text-lg font-semibold mb-2">
                Dr. SNS Rajalakshmi College of Arts and Science
              </p>
              <p className="text-gray-400">2023 – 2026</p>
            </div>

            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-green-400" />
                <h4 className="text-xl font-semibold text-white">Core Courses</h4>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {courses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-cyan-500/50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
