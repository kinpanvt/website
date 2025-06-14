import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, Award } from 'lucide-react'

export const Experience = () => {
  const experiences = [
    {
      title: "Technical Consultant",
      company: "Simple Coaching Inc. - Internship",
      location: "Remote",
      period: "Mar 2025 - Present",
      description: "As a digital strategy consultant for Simple Coaching Inc., I led the end-to-end design and optimization of their website—revamping service pages, event galleries, and testimonials—to elevate user experience and brand visibility. I implemented targeted SEO and analytics, driving higher site traffic and conversion rates, while conducting digital audits to refine customer journeys and uncover growth opportunities. Collaborating closely with business leaders, I aligned online strategies with organizational goals and supported new service launches through strategic content creation and platform enhancements.",
      achievements: ["boost engagement and conversions", "drove organic traffic growth", "Streamlined digital audits and client workflows"],
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Student Leader",
      company: "Virginia Tech - Part-time",
      location: "Blacksburg, VA",
      period: "Aug 2024 - Dec 2024",
      description: "As a Student Leader at Virginia Tech, I mentor and support 150 residents daily, championing inclusion and belonging through mental-health and diversity training. I organize community events, uphold residential standards, and navigate high-pressure situations to foster a welcoming campus environment.",
      achievements: ["led 10+ inclusive workshops and events", "Provided one-on-one support to over 300 students", "improving well-being"],
      color: "from-gold-400 to-orange-400"
    },
    {
      title: "Undergraduate Career Bridge Experience",
      company: "Virginia Tech - Internship",
      location: "Blacksburg, VA",
      period: "Jan 2024 - Dec 2024",
      description: "As a Career Bridge Program participant, I translated academic theory into practice through internships and undergraduate research, recording my professional growth in CS 3900 on my transcript.",
      achievements: ["delivering real-world CS solutions", "Strengthened technical, analytical, and collaboration skills"],
      color: "from-green-400 to-teal-400"
    },
    {
      title: "Peer Mentor",
      company: "Virginia Tech - Part-time",
      location: "Blacksburg, VA",
      period: "Jul 2023 - Aug 2024",
      description: "As a two-time Summer Start Peer Mentor, I guided first-year students through academic and social transitions, fostering community and collaboration—skills vital for interdisciplinary AI/ML teams.",
      achievements: ["Led and mentored 50+ freshmen", "Organized interactive events", "boosted student engagement", "data-driven insights in AI/ML projects"],
      color: "from-blue-400 to-indigo-400"
    },
    {
      title: "Back End Developer",
      company: "GBCS Group - Part-time",
      location: "Remote",
      period: "Feb 2024 - Dec 2024",
      description: "As a Back End Developer Intern at GBCS Group, I build scalable back-end architectures, optimize databases, and develop APIs to power high-performance software solutions.",
      achievements: ["implemented a scalable back-end system", "Optimized database schemas and queries", "Developed and integrated RESTful APIs"],
      color: "from-blue-400 to-indigo-400"
    },
    {
      title: "Microsoft Learn Student Ambassador",
      company: "Microsoft - Part-time",
      location: "Remote",
      period: "Jan 2024 - Dec 2024",
      description: "As a Microsoft Learn Student Ambassador, I bridge academic and practical tech learning by educating peers on Microsoft technologies, building a vibrant campus community, and continuously sharing new insights.",
      achievements: ["led 10+ hands-on workshops", "empowered over 200 students", "Mentored peers", "strengthened our community’s presence and engagement"],
      color: "from-blue-400 to-indigo-400"
    },
    {
      title: "Student Ambassador",
      company: "IBM - Part-time",
      location: "Remote",
      period: "Nov 2023 - Jun 2024",
      description: "As an IBM Z Student Ambassador, I champion mainframe technology’s role in AI/ML by organizing educational events, building collaborative networks, and continuously upskilling through IBM certifications.",
      achievements: ["Organized workshops and seminars", "Cultivated a cross-disciplinary community", "Completed multiple IBM Z certifications"],
      color: "from-blue-400 to-indigo-400"
    },
    {
      title: "Team Leader",
      company: "Google Developer Student Club - Part-time",
      location: "Blacksburg, VA",
      period: "Oct 2023 - Jun 2024",
      description: "As a Google Developer Student Club Lead, I organize technical workshops and hackathons, mentor peers in software development, and bridge the gap between industry and academia to advance AI/ML learning.",
      achievements: ["Hosted 8+ workshops and hackathons", "300+ participants", "lead to a 20% improvement in projects"],
      color: "from-blue-400 to-indigo-400"
    },
    {
      title: "AI Intern",
      company: "CodSoft - Part-time",
      location: "Remote",
      period: "Jan 2024 - Feb 2024",
      description: "As an AI Intern at CodSoft, I apply AI technologies to real-world projects across NLP, computer vision, and game theory, collaborate with industry experts, and document my work to share insights with the tech community.",
      achievements: ["delivered two AI-driven prototypes", "refine algorithms and integrate solutions", "Published detailed project repositories"],
      color: "from-blue-400 to-indigo-400"
    },
    {
      title: "Coding & Cryptography Researcher",
      company: "Commonwealth Cyber Initiative Southwest Virginia - Part-time",
      location: "Blacksburg, VA",
      period: "Oct 2023 - Jan 2024",
      description: "At the Commonwealth Cyber Initiative and Virginia Tech, I applied algorithm development, data analysis, and cryptographic principles to advance AI/ML research while collaborating on multi-disciplinary projects.",
      achievements: ["Developed and optimized algorithms", "Contributed to research papers and presentations", "Completed targeted workshops in cryptography and coding theory"],
      color: "from-blue-400 to-indigo-400"
    },
    {
      title: "Upper Class Leader",
      company: "Virginia Tech Center for the Enhancement of Engineering Diversity",
      location: "Blacksburg, VA",
      period: "Aug 2023 - Oct 2023",
      description: "As an Upper Class Leader in the Galipatia Living Learning Community, I led ML-focused projects and managed digital platforms to foster an inclusive environment and drive AI-driven innovations.",
      achievements: ["managed design competitions and ML projects", "Maintained the community website and social channels", "Co-developed a smart calendar app with ML-driven recommendations"],
      color: "from-blue-400 to-indigo-400"
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
            <Briefcase className="h-16 w-16 text-gold-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-pink-400 bg-clip-text text-transparent">
                Experience
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              My professional journey showcases growth, innovation, and dedication to excellence in every role.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-gold-400 via-pink-400 to-purple-400 hidden lg:block" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
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
                  <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 group">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${exp.color} text-black font-semibold text-sm`}>
                        {exp.period}
                      </div>
                      <div className="flex items-center text-white/60 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {exp.location}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold-300 transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <h4 className={`text-xl font-semibold mb-4 bg-gradient-to-r ${exp.color} bg-clip-text text-transparent`}>
                      {exp.company}
                    </h4>
                    <p className="text-white/80 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="space-y-2">
                      <h5 className="text-lg font-semibold text-gold-300 flex items-center">
                        <Award className="h-4 w-4 mr-2" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement) => (
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

      {/* Skills Summary */}
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
                Professional Impact
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Years Experience", value: "4+", icon: "⏰" },
              { title: "Projects Completed", value: "50+", icon: "🚀" },
              { title: "Team Members Led", value: "500+", icon: "👥" }
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
    </div>
  )
}
