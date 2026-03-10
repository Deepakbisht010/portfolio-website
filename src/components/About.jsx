import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code2, Lightbulb, Rocket, Heart } from 'lucide-react'

const highlights = [
  { icon: Code2, label: 'Clean Code', color: 'text-accent' },
  { icon: Lightbulb, label: 'Creative', color: 'text-yellow-400' },
  { icon: Rocket, label: 'Fast Learner', color: 'text-teal-400' },
  { icon: Heart, label: 'Passionate', color: 'text-rose-400' },
]

const AvatarIllustration = ({ darkMode }) => (
  <div className="relative flex items-center justify-center">
    {/* Outer rotating ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute w-64 h-64 rounded-full border border-dashed border-accent/30"
    />
    {/* Middle ring */}
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      className="absolute w-52 h-52 rounded-full border border-dashed border-teal-500/20"
    />

    {/* Avatar Box */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className={`relative w-44 h-44 rounded-3xl flex items-center justify-center text-8xl shadow-2xl ${
        darkMode
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10'
          : 'bg-gradient-to-br from-white to-gray-100 border border-gray-200'
      }`}
      style={{
        boxShadow: darkMode
          ? '0 0 60px rgba(108,99,255,0.2), 0 20px 60px rgba(0,0,0,0.5)'
          : '0 20px 60px rgba(0,0,0,0.1)',
      }}
    >
      👨‍💻
    </motion.div>

    {/* Floating badges */}
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      className={`absolute -top-2 -right-4 px-3 py-1.5 rounded-full text-xs font-mono font-medium ${
        darkMode
          ? 'bg-accent/20 text-accent border border-accent/30'
          : 'bg-accent/10 text-accent border border-accent/20'
      }`}
    >
      React Dev
    </motion.div>
    <motion.div
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      className={`absolute -bottom-2 -left-4 px-3 py-1.5 rounded-full text-xs font-mono font-medium ${
        darkMode
          ? 'bg-teal-500/20 text-teal-400 border border-teal-500/30'
          : 'bg-teal-500/10 text-teal-600 border border-teal-500/20'
      }`}
    >
      Open to Work
    </motion.div>
  </div>
)

export default function About({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  }

  const leftVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  const rightVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section
      id="about"
      ref={ref}
      className={`py-28 relative overflow-hidden ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}
    >
      {/* Section background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.05) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 70% 50%, rgba(108,99,255,0.03) 0%, transparent 60%)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="font-mono text-sm text-accent tracking-widest uppercase">01.</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className={`flex-1 h-px ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`} />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 gap-16 items-center"
        >
          {/* Left: Text */}
          <motion.div variants={leftVariants} className="space-y-6">
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I am a{' '}
              <span className="text-gradient font-semibold">passionate developer</span> interested
              in building modern web applications using HTML, CSS, JavaScript and React. I also
              explore Android development and continuously work on improving my development skills.
            </p>

            <p className={`text-base leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              I love turning complex problems into simple, beautiful, and intuitive designs.
              When I'm not coding, I'm exploring new technologies and pushing my boundaries
              as a developer.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              {highlights.map(({ icon: Icon, label, color }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.04, y: -2 }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300 cursor-default ${
                    darkMode
                      ? 'bg-white/5 border-white/8 hover:border-white/15'
                      : 'bg-white border-gray-200 hover:border-gray-300 shadow-sm'
                  }`}
                >
                  <Icon size={18} className={color} />
                  <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Illustration */}
          <motion.div variants={rightVariants} className="flex justify-center">
            <AvatarIllustration darkMode={darkMode} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
