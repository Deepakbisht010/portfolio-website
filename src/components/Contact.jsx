import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Send, Mail, MessageSquare, CheckCircle } from 'lucide-react'

const InputField = ({ label, icon: Icon, darkMode, type = 'text', textarea = false, ...props }) => {
  const [focused, setFocused] = useState(false)

  const baseClass = `w-full px-4 py-3.5 rounded-2xl font-body text-sm outline-none transition-all duration-300 resize-none ${darkMode
    ? 'bg-white/5 border text-gray-200 placeholder-gray-600'
    : 'bg-white border text-gray-800 placeholder-gray-400'
    } ${focused
      ? darkMode
        ? 'border-accent/60 bg-white/8 shadow-lg shadow-accent/10'
        : 'border-accent/50 shadow-lg shadow-accent/8'
      : darkMode
        ? 'border-white/10 hover:border-white/20'
        : 'border-gray-200 hover:border-gray-300'
    }`

  return (
    <div className="relative">
      <label className={`block text-xs font-mono font-medium mb-2 tracking-wider uppercase ${darkMode ? 'text-gray-400' : 'text-gray-500'
        }`}>
        {label}
      </label>
      <div className="relative">
        <div className={`absolute left-4 top-3.5 transition-colors duration-300 pointer-events-none ${focused ? 'text-accent' : darkMode ? 'text-gray-600' : 'text-gray-400'
          }`}>
          <Icon size={16} />
        </div>
        {textarea ? (
          <textarea
            className={`${baseClass} pl-10 min-h-32`}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
        ) : (
          <input
            type={type}
            className={`${baseClass} pl-10`}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            {...props}
          />
        )}
        {/* Focus ring glow */}
        {focused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ boxShadow: '0 0 0 2px rgba(108,99,255,0.3)' }}
          />
        )}
      </div>
    </div>
  )
}

export default function Contact({ darkMode }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [formData, setFormData] = useState({ email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.email || !formData.message) return
    setLoading(true)
    // Simulate send
    setTimeout(() => {
      setLoading(false)
      setSent(true)
      setFormData({ email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1500)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`py-28 relative overflow-hidden ${darkMode ? 'bg-gray-900/50' : 'bg-gray-50'}`}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? 'radial-gradient(ellipse at 50% 80%, rgba(108,99,255,0.07) 0%, transparent 60%)'
            : 'radial-gradient(ellipse at 50% 80%, rgba(108,99,255,0.04) 0%, transparent 60%)',
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
          <span className="font-mono text-sm text-accent tracking-widest uppercase">03.</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className={`flex-1 h-px ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`} />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className={`text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm always open to new opportunities, collaborations, or just a friendly chat.
              Whether you have a project in mind or just want to connect — feel free to reach out!
            </p>

            <div className="space-y-4 pt-2">
              {[
                { icon: '📧', label: 'Email me', value: 'deepakbisht4050@gmail.com' },
                { icon: '💼', label: 'Open to', value: 'Internships & Projects' },
                { icon: '⏱️', label: 'Response time', value: 'Within 24 hours' },
              ].map(({ icon, label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border ${darkMode
                    ? 'bg-white/4 border-white/8'
                    : 'bg-white border-gray-200 shadow-sm'
                    }`}
                >
                  <span className="text-xl">{icon}</span>
                  <div>
                    <p className={`text-xs font-mono uppercase tracking-wider ${darkMode ? 'text-gray-500' : 'text-gray-400'
                      }`}>{label}</p>
                    <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <InputField
                label="Your Email"
                icon={Mail}
                darkMode={darkMode}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@gmail.com"
                required
              />
              <InputField
                label="Your Message"
                icon={MessageSquare}
                darkMode={darkMode}
                textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Hello Deepak, I'd love to connect about..."
                required
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(108,99,255,0.4)' }}
                whileTap={{ scale: 0.97 }}
                disabled={loading || sent}
                className={`w-full py-4 rounded-2xl font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 ${sent
                  ? 'bg-gradient-to-r from-green-500 to-teal-500 shadow-lg shadow-green-500/20'
                  : 'bg-gradient-to-r from-accent to-indigo-500 shadow-lg shadow-accent/30 hover:shadow-accent/40'
                  } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {loading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                    />
                    Sending...
                  </>
                ) : sent ? (
                  <>
                    <CheckCircle size={18} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
