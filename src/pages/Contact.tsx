import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Heart, Star, Github, Linkedin, Twitter } from 'lucide-react'

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kinjalpandey@umass.edu",
      href: "mailto:kinjalpandey@umass.edu",
      color: "from-gold-400 to-orange-400"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Amherst, MA",
      href: "#",
      color: "from-blue-400 to-indigo-400"
    }
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/kinpanvt/", color: "hover:text-purple-400" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kinjalpandey/", color: "hover:text-blue-400" }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="h-16 w-16 text-gold-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-pink-400 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your vision to life? I'd love to hear about your project and explore how we can create something amazing together.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-gold-400 to-pink-400 bg-clip-text text-transparent">
                    Send Me a Message
                  </span>
                </h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your first name"
                      />
                    </motion.div>

                    <motion.div
                      whileFocus={{ scale: 1.02 }}
                      className="group"
                    >
                      <label className="block text-white/80 text-sm font-medium mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                        placeholder="Your last name"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    className="group"
                  >
                    <label className="block text-white/80 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project, ideas, or just say hello!"
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-gold-400 to-pink-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:from-gold-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Photo */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Personal Photo */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-gold-400/20 to-pink-400/20 rounded-full flex items-center justify-center border-4 border-white/20"
                >
                  <div className="text-6xl">👩🏻‍💻</div>
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-2">Kinjal Pandey</h3>
                <p className="text-gold-300 font-medium mb-4">Google Lead | IBM Ambassador | Microsoft Learn Ambassador | Tech Advocate & Leader | CS Student & Researcher | UMass Amherst | VT</p>
                <p className="text-white/80 leading-relaxed">
                  Passionate about creating digital experiences that inspire and empower.
                  Always excited to collaborate on meaningful projects.
                </p>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="block bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${contact.color}`}>
                        <contact.icon className="h-6 w-6 text-black" />
                      </div>
                      <div>
                        <div className="text-white/60 text-sm font-medium">{contact.label}</div>
                        <div className="text-white font-semibold group-hover:text-gold-300 transition-colors duration-300">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  Follow My Journey
                </h3>
                <div className="flex justify-center space-x-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-16 h-16 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white ${social.color} transition-all duration-300 border border-white/20 hover:border-white/40`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10"
          >
            <Star className="h-12 w-12 text-gold-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Create Something Extraordinary
            </h3>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Every great project starts with a conversation. Whether you have a clear vision or just an idea,
              I'm here to help bring it to life with creativity, expertise, and passion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
