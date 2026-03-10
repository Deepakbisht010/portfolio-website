import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const webSkills = [
  { name: 'HTML', level: 85, icon: '🌐', color: 'from-orange-500 to-orange-400' },
  { name: 'CSS', level: 80, icon: '🎨', color: 'from-blue-500 to-blue-400' },
  { name: 'JavaScript', level: 70, icon: '⚡', color: 'from-yellow-500 to-yellow-400' },
  { name: 'React JS', level: 65, icon: '⚛️', color: 'from-cyan-500 to-cyan-400' },
  { name: 'Tailwind CSS', level: 75, icon: '💨', color: 'from-teal-500 to-teal-400' },
]

const androidSkills = [
  { name: 'Android Dev', level: 70, icon: '🤖', color: 'from-green-500 to-green-400', tag: 'Beginner' },
]

const ProgressBar = ({ level, color, darkMode, inView, delay }) => (
  <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`}>
    <motion.div
      className={`h-full rounded-full bg-gradient-to-r ${color}`}
      initial={{ width: 0 }}
      animate={inView ? { width: `${level}%` } : { width: 0 }}
      transition={{ duration: 1.2, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  </div>
)

const SkillCard = ({ skill, darkMode, inView, delay, showTag }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -6, scale: 1.01 }}
    className={`group p-5 rounded-2xl border transition-all duration-400 card-hover ${darkMode
        ? 'bg-gray-900/60 border-white/8 hover:border-accent/40 hover:bg-gray-900/80'
        : 'bg-white border-gray-200 hover:border-accent/30 shadow-sm hover:shadow-md'
      }`}
    style={{
      boxShadow: darkMode ? undefined : undefined,
    }}
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center gap-3">
        <motion.span
          className="text-2xl"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {skill.icon}
        </motion.span>
        <div>
          <span className={`font-semibold text-sm ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>
            {skill.name}
          </span>
          {showTag && (
            <span className={`ml-2 text-xs px-2 py-0.5 rounded-full font-mono ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'
              }`}>
              {skill.tag}
            </span>
          )}
        </div>
      </div>
      <motion.span
        className={`font-mono text-sm font-bold ${darkMode ? 'text-gray-400' : 'text-gray-500'
          } group-hover:text-accent transition-colors duration-300`}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: delay + 0.8 }}
      >
        {skill.level}%
      </motion.span>
    </div>
    <ProgressBar
      level={skill.level}
      color={skill.color}
      darkMode={darkMode}
      inView={inView}
      delay={delay + 0.3}
    />
  </motion.div>
)

export default function Skills({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" ref={ref} className="py-28 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at 30% 60%, rgba(0,212,170,0.04) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 30% 60%, rgba(0,212,170,0.05) 0%, transparent 60%)',
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
          <span className="font-mono text-sm text-accent tracking-widest uppercase">02.</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className={`flex-1 h-px ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`} />
        </motion.div>

        {/* Web Dev Skills */}
        <div className="mb-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-lg">🌐</span>
            <h3 className={`font-display text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Web Development
            </h3>
            <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${darkMode ? 'bg-accent/15 text-accent' : 'bg-accent/10 text-accent'
              }`}>
              Primary Focus
            </span>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {webSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                darkMode={darkMode}
                inView={inView}
                delay={0.15 + i * 0.08}
                showTag={false}
              />
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className={`h-px mb-14 ${darkMode ? 'bg-white/8' : 'bg-gray-100'}`} />

        {/* Android Skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="text-lg">📱</span>
            <h3 className={`font-display text-2xl font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Android Development
            </h3>
            <span className={`text-xs font-mono px-2.5 py-1 rounded-full ${darkMode ? 'bg-green-500/15 text-green-400' : 'bg-green-100 text-green-600'
              }`}>
              Exploring
            </span>
          </motion.div>

          <div className="max-w-md">
            {androidSkills.map((skill, i) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                darkMode={darkMode}
                inView={inView}
                delay={0.6 + i * 0.08}
                showTag={true}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
