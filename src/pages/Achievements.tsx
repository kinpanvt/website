import { motion } from 'framer-motion'
import { Trophy, Award, Star, Medal } from 'lucide-react'

export const Achievements = () => {
  const achievements = [
    {
      title: "International Impact Award",
      organization: "Northeastern University",
      year: "May 2025",
      description: "Recognized for exceptional academic achievement and global impact potential with the International Impact Award, covering 5% of graduate tuition. Selected through a highly competitive review by Northeastern University’s scholarship committee.",
      icon: Trophy,
      color: "from-gold-400 to-orange-400",
      category: "Leadership"
    },
    {
      title: "Silicon Valley Campus Scholarship",
      organization: "Northeastern University",
      year: "May 2025",
      description: "Selected for a merit-based scholarship covering 25% of graduate tuition in recognition of academic excellence, leadership potential, and commitment to innovation in artificial intelligence. Awarded by the scholarship committee at Northeastern’s Silicon Valley campus as part of its initiative to support emerging talent in tech.",
      icon: Trophy,
      color: "from-gold-400 to-orange-400",
      category: "Leadership"
    },
    {
      title: "The Action Taker",
      organization: "LISC Massachusetts & the IXL Center",
      year: "May 2025",
      description: "Recognized as one of the standout participants in the competitive LISC Digital Growth Accelerator, hosted by LISC Massachusetts in collaboration with the IXL Center. This award was presented for demonstrating exceptional initiative, execution, and impact in digitally transforming Simple Coaching Inc. Through hands-on strategy, digital upgrades, and consistent implementation, I helped position the business for sustainable growth and improved client engagement.",
      icon: Star,
      color: "from-blue-400 to-indigo-400",
      category: "Academic"
    },
    {
      title: "KickStart VT Seed Grant Winner – CalendAI",
      organization: "Apex Systems Center for Innovation and Entrepreneurship",
      year: "Nov 2024",
      description: "Honored to be selected as a KickStart VT Seed Grant Winner for my startup, CalendAI, an AI-powered calendar app designed to transform productivity through intelligent scheduling. KickStart VT recognizes promising student-led ventures in the early stages, and this award underscores the innovative potential of CalendAI. With this support, I am taking significant steps forward in development, joining a network of fellow entrepreneurs, and refining my vision to bring cutting-edge AI solutions to everyday productivity challenges.",
      icon: Award,
      color: "from-purple-400 to-pink-400",
      category: "Design"
    },
    {
      title: "Student Affairs Scholarship winner 2024",
      organization: "Virginia Tech",
      year: "Sep 2024",
      description: "Awarded for exemplary leadership and commitment to fostering student engagement and learning at Virginia Tech. This scholarship supports my dedication to enhancing the student experience through leadership, well-being, and empowerment initiatives both inside and outside the classroom.",
      icon: Trophy,
      color: "from-gold-400 to-orange-400",
      category: "Leadership"
    },
    {
      title: "Virginia Pell Initiative Grant",
      organization: "Virginia Tech",
      year: "Aug 2024",
      description: "The Virginia Pell Initiative Grant from the Virginia Employment Commission is awarded to students who demonstrate strong academic potential and a commitment to furthering their education in Virginia. This grant supports those with a clear vision for their future, helping them access the resources needed to advance their studies and career aspirations. It reflects Virginia’s commitment to empowering students to achieve their educational goals and contribute to the state's workforce.",
      icon: Star,
      color: "from-blue-400 to-indigo-400",
      category: "Academic"
    },
    {
      title: "Buzz's Bunch Scholarship award winner 2024-25",
      organization: "Virginia Tech",
      year: "Jun 2024",
      description: "The ideal candidate embodies the character strengths of leadership, integrity, and commitment to improving our world in the spirit of Ut Prosim.",
      icon: Trophy,
      color: "from-gold-400 to-orange-400",
      category: "Leadership"
    },
    {
      title: "Deans List with Distinction",
      organization: "Virginia Tech",
      year: "Apr 2023",
      description: "Achieved Dean's List with Distinction standing for the Fall Semester 2022. The “distinction” list was instituted in 1995 to acknowledge the truly outstanding achievements of students earning a QCA of 3.75 and above for the semester.",
      icon: Star,
      color: "from-blue-400 to-indigo-400",
      category: "Academic"
    },
    {
      title: "Undergraduate Research Excellence Program Member",
      organization: "Virginia Tech",
      year: "Jan 2023",
      description: "As a member of the Undergraduate Research Excellence Program (UREP) at Virginia Tech, I am deeply involved in cutting-edge research projects that aim to address real-world challenges. Collaborating with experienced faculty mentors, I have the opportunity to develop advanced research skills and contribute to innovative solutions. My work through UREP has not only enhanced my academic knowledge but has also sharpened my critical thinking, problem-solving, and project management abilities. This experience aligns with my passion for driving impactful research and sets a strong foundation for future graduate studies or professional growth in research-intensive fields.",
      icon: Medal,
      color: "from-green-400 to-teal-400",
      category: "Innovation"
    }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
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
          >
            <Trophy className="h-16 w-16 text-gold-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-pink-400 bg-clip-text text-transparent">
                Achievements
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Recognition and milestones that mark my journey of excellence, innovation, and dedication to making a positive impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full relative overflow-hidden">
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${achievement.color}`}>
                        <achievement.icon className="h-8 w-8 text-black" />
                      </div>
                      <div className="text-right">
                        <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-black text-sm font-semibold`}>
                          {achievement.category}
                        </div>
                        <div className="text-white/60 text-sm mt-1">{achievement.year}</div>
                      </div>
                    </div>

                    {/* Title and Organization */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <h4 className={`text-lg font-semibold mb-4 bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
                      {achievement.organization}
                    </h4>

                    {/* Description */}
                    <p className="text-white/80 leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Star className="h-12 w-12 text-gold-400" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Stats */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-pink-400 bg-clip-text text-transparent">
                Recognition Summary
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Awards Won", value: "9+", icon: "🏆" },
              { title: "Speaking Events", value: "25+", icon: "🎤" }
            ].map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 text-center border border-white/10"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-gold-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white">{stat.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center"
          >
            <div className="text-6xl mb-6">✨</div>
            <blockquote className="text-2xl md:text-3xl font-light text-white/90 mb-8 italic leading-relaxed">
              "My journey has been shaped by leadership, research, and a commitment to using technology for social good and real-world problem-solving."
            </blockquote>
            <div className="text-gold-400 font-semibold text-lg">
              — Kinjal Pandey
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
