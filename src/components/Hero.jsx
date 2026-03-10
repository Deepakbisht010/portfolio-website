import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Sparkles } from 'lucide-react'

const FloatingShape = ({ className, delay = 0, duration = 6 }) => (
  <motion.div
    className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
    animate={{
      y: [0, -30, 0],
      scale: [1, 1.1, 1],
      opacity: [0.15, 0.25, 0.15],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: 'easeInOut',
    }}
  />
)

export default function Hero({ darkMode }) {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToSkills = () => {
    document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Shapes */}
      <FloatingShape
        className={`w-96 h-96 -top-24 -left-24 ${darkMode ? 'bg-accent' : 'bg-accent/60'}`}
        delay={0}
        duration={7}
      />
      <FloatingShape
        className={`w-80 h-80 top-1/3 -right-20 ${darkMode ? 'bg-teal-500' : 'bg-teal-400'}`}
        delay={2}
        duration={9}
      />
      <FloatingShape
        className={`w-64 h-64 bottom-20 left-1/4 ${darkMode ? 'bg-purple-600' : 'bg-purple-400'}`}
        delay={1}
        duration={8}
      />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: darkMode
            ? 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)'
            : 'radial-gradient(circle at 1px 1px, rgba(0,0,0,0.06) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-8">
          <span
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono font-medium border ${
              darkMode
                ? 'border-accent/40 text-accent bg-accent/10'
                : 'border-accent/30 text-accent bg-accent/8'
            }`}
          >
            <Sparkles size={14} />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-6xl sm:text-7xl md:text-8xl font-bold mb-4 leading-none"
        >
          Hi, I'm{' '}
          <span className="text-gradient">Deepak</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          variants={itemVariants}
          className={`font-mono text-xl sm:text-2xl md:text-3xl mb-6 font-medium ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}
        >
          <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>{'< '}</span>
          <TypeAnimation
            sequence={[
              'Web Developer', 2000,
              'Frontend Developer', 2000,
              'React Developer', 2000,
              'Android Dev Learner', 2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-gradient"
          />
          <span className={darkMode ? 'text-gray-500' : 'text-gray-400'}>{' />'}</span>
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={itemVariants}
          className={`text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
          }`}
        >
          I craft clean, modern web experiences using React & Tailwind. Passionate about
          clean code, great UI, and continuously leveling up my skills.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            onClick={scrollToContact}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(108,99,255,0.5)' }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-4 rounded-2xl font-semibold text-white bg-gradient-to-r from-accent to-indigo-500 shadow-lg shadow-accent/30 transition-all duration-300"
          >
            Contact Me
          </motion.button>

          <motion.button
            onClick={scrollToSkills}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className={`px-8 py-4 rounded-2xl font-semibold border-2 transition-all duration-300 ${
              darkMode
                ? 'border-white/20 text-white hover:border-accent/60 hover:bg-accent/10'
                : 'border-gray-300 text-gray-700 hover:border-accent/40 hover:bg-accent/5'
            }`}
          >
            View Skills
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 group ${
          darkMode ? 'text-gray-500 hover:text-gray-300' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  )
}
