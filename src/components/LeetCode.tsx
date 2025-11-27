import { motion } from 'framer-motion';
import { Code, Trophy, ExternalLink } from 'lucide-react';

export default function LeetCode() {
  const profiles = [
    {
      username: 'vishnu2705',
      url: 'https://leetcode.com/u/vishnu2705',
      solved: 35
    },
    {
      username: 'vishnu1101',
      url: 'https://leetcode.com/u/vishnu1101',
      solved: 35
    }
  ];

  return (
    <section id="leetcode" className="min-h-screen py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-400">LeetCode</span> Progress
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-green-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-cyan-500/30 mb-8 text-center"
          >
            <div className="inline-flex items-center justify-center p-4 bg-cyan-500/10 rounded-full mb-4">
              <Trophy className="w-12 h-12 text-yellow-400" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-2">70+</h3>
            <p className="text-gray-400 text-lg">Total Problems Solved</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {profiles.map((profile, index) => (
              <motion.a
                key={index}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="group bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-colors">
                      <Code className="w-6 h-6 text-green-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors">
                        @{profile.username}
                      </h4>
                      <p className="text-gray-400 text-sm">LeetCode Profile</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-green-400 transition-colors" />
                </div>

                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-3xl font-bold text-green-400">{profile.solved}</span>
                    <span className="text-gray-400">problems</span>
                  </div>
                  <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-green-500 to-cyan-500"
                      style={{ width: '35%' }}
                    ></div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
