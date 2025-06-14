import { motion } from 'framer-motion'
import { useNavigate } from "react-router-dom"
import { Github, Linkedin, Twitter, Mail, ArrowDown, Sparkles, Crown, Heart } from 'lucide-react'

export const Home = () => {
  const navigate = useNavigate()
  const socialLinks = [
    { icon: Github, href: 'https://github.com/kinpanvt/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/kinjalpandey/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:kinjalpandey@umass.edu', label: 'Email' },
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <Crown className="h-8 w-8 text-gold-400 mr-3" />
              <span className="text-gold-400 text-lg font-medium">Hey there, I'm</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-gold-300 to-pink-300 bg-clip-text text-transparent">
                Kinjal
              </span>
              <br />
              <span className="bg-gradient-to-r from-gold-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Pandey
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-2xl md:text-3xl text-gold-300 mb-4 font-light"
            >
              MS in Computer Science CS (Security, AI policy)
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-white/80 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              I’m Kinjal Pandey, a recent Computer Science graduate from Virginia Tech with a passion for harnessing Artificial Intelligence and Machine Learning to drive innovation and create meaningful impact. My journey has been shaped by leadership, research, and a commitment to using technology for social good and real-world problem-solving.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start space-x-6 mb-12"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center text-white hover:bg-gold-400/20 hover:text-gold-300 transition-all duration-300 border border-white/20"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={() => navigate("/experience")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-400 to-pink-400 text-black px-8 py-4 rounded-full font-semibold text-lg hover:from-gold-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore My Journey
            </motion.button>
          </motion.div>

          {/* Right Side - Graphic Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-0 border-2 border-gradient-to-r from-gold-400 to-pink-400 rounded-full"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="absolute inset-4 border-2 border-gradient-to-l from-purple-400 to-pink-400 rounded-full"
              />
              <div className="absolute inset-8 bg-gradient-to-br from-gold-400/20 to-pink-400/20 rounded-full backdrop-blur-sm flex items-center justify-center">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="text-6xl lg:text-8xl"
                >
                  <Sparkles className="h-20 w-20 lg:h-24 lg:w-24 text-gold-400" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-white/60 flex flex-col items-center"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </section>

      {/* What I Do Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-pink-400 bg-clip-text text-transparent">
                What I Do
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Throughout my academic career, I’ve combined technical expertise with leadership roles as a Google Developer Student Club Lead, Microsoft Learn Ambassador, and IBM Z Student Ambassador. These experiences have allowed me to bridge the gap between technology and community empowerment, inspiring others while solving complex challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google Lead",
                description: "Organized hands-on workshops, hackathons, and bootcamps on Google technologies, demystifying complex topics for a diverse student audience. Mentored peers in coding and algorithm design, strengthening their foundation in software development and AI/ML principles. Built partnerships with faculty and industry, managed club resources, and kept the community current on emerging tech. Oversaw logistics and budgeting, honing the organizational skills needed for large-scale AI/ML projects.",
                icon: "🗃️",
                color: "from-pink-400 to-purple-400"
              },
              {
                title: "IBM Z Student Ambassador",
                description: "As an IBM Z Student Ambassador, I champion mainframe technology in AI/ML by organizing workshops and events that make complex concepts accessible. I foster a vibrant community of students, professionals, and educators, driving collaboration and knowledge sharing. Continuously pursuing IBM certifications, I stay at the forefront of AI and ML advancements and apply creative problem-solving to innovate machine learning models across diverse domains.",
                icon: "📟",
                color: "from-purple-400 to-blue-400"
              },
              {
                title: "Back End Developer",
                description: "As a Back End Developer Intern at GBCS Group, I apply my computer science expertise to build and optimize scalable back-end systems. I collaborate on designing efficient architectures, manage and secure databases, and develop RESTful APIs for seamless integration. By championing best practices like code reviews and continuous integration, I help ensure our software solutions deliver high performance and reliability for a diverse client base.",
                icon: "👩🏻‍💻",
                color: "from-gold-400 to-orange-400"
              },
              {
                title: "Coding & Cryptography Researcher",
                description: "At the Commonwealth Cyber Initiative and Virginia Tech, I honed my algorithm development and data-analysis skills—grounded in cryptography and coding theory—to inform robust machine-learning models. Collaborating on research projects, I communicated complex findings through reports and papers while continually sharpening my expertise via workshops and seminars. Through active networking and a commitment to ethical standards, I applied innovative problem-solving to advance AI/ML research.",
                icon: "🔬",
                color: "from-green-400 to-teal-400"
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative group"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="text-4xl mb-6 inline-block"
                  >
                    {service.icon}
                  </motion.div>
                  <h3 className={`text-2xl font-bold mb-4 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                    {service.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="absolute inset-0 bg-gradient-to-r from-gold-400/5 to-pink-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's create something extraordinary together.
            </p>
            <motion.button
              onClick={() => navigate("/experience")}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-gold-400 to-pink-400 text-black px-10 py-4 rounded-full font-semibold text-lg hover:from-gold-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Let's Connect</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
