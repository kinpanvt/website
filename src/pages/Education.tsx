import { motion } from 'framer-motion'
import { GraduationCap, Download, Calendar, MapPin, Star } from 'lucide-react'

export const Education = () => {
  const educationData = [
    {
      degree: "MS. Computer Science",
      institution: "University of Massachusetts - Amherst",
      location: "Amherst, Massachusetts",
      period: "2025 - present",
      description: "Specialized in Artificial Intelligence and Human-Computer Interaction. Thesis on 'Enhancing User Experience through AI-Driven Interface Design'.",
      achievements: ["GPA 4.0"],
      color: "from-purple-400 to-pink-400"
    },
    {
      degree: "B.Sc Computer Science",
      institution: "Virginia Tech",
      location: "Blacksburg, VA",
      period: "2022 - 2024",
      description: "Comprehensive foundation in software development, algorithms, and system design. Active member of Women in Tech society.",
      achievements: ["Magna Cum Laude", "Deans List with Distinction", "Student Affairs Scholarship winner ", "Buzz's Bunch Scholarship award winner", "Virginia Pell Initiative Grant", "KickStart VT Seed Grant Winner"],
      color: "from-gold-400 to-orange-400"
    },
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Header Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <GraduationCap className="h-16 w-16 text-gold-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-pink-400 bg-clip-text text-transparent">
                Education
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              My educational journey has been a quest for knowledge, innovation, and excellence.
              Each step has shaped me into the visionary developer I am today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Education Timeline */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-gold-400 via-pink-400 to-purple-400 hidden lg:block" />

            {educationData.map((edu, index) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'lg:justify-start' : 'lg:justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-gold-400 to-pink-400 rounded-full border-4 border-purple-900 hidden lg:block z-10" />

                {/* Content Card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className={`w-full lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'
                  }`}
                >
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${edu.color} text-black font-semibold text-sm`}>
                        {edu.period}
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {edu.location}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                    <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                      {edu.institution}
                    </h4>
                    <p className="text-white/80 mb-6 leading-relaxed">{edu.description}</p>

                    <div className="space-y-2">
                      <h5 className="text-lg font-semibold text-gold-300 flex items-center">
                        <Star className="h-4 w-4 mr-2" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement) => (
                          <li key={achievement} className="text-white/70 text-sm flex items-center">
                            <div className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-pink-400 bg-clip-text text-transparent">
                My Resume
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              A comprehensive overview of my academic achievements, professional experience, and technical skills.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
          >
            {/* Download Button */}
            <div className="text-center">
              <motion.a
                href="/KinjalPandeyGradResume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-gold-400 to-pink-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </motion.a>
              <p className="text-white/60 text-sm mt-4">
                PDF format • Last updated: December 2024
              </p>
            </div>

          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
          >
            {[
              {
                title: "Academic Excellence",
                value: "3.6/4.0",
                description: "Cumulative GPA",
                icon: "🎯"
              },
              {
                title: "Experiences",
                value: "12+",
                description: "Roles, jobs, internships",
                icon: "📚"
              },
              {
                title: "Honors and awards",
                value: "9+",
                description: "Technical Certifications",
                icon: "🏆"
              }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10"
              >
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gold-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-1">{stat.title}</div>
                <div className="text-white/60 text-sm">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
