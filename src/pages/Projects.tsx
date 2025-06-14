import { motion } from 'framer-motion'
import { Github, Code } from 'lucide-react'

export const Projects = () => {
  const projects = [
    {
      title: "LISC Digital Growth Accelerator",
      description: "I was selected for the competitive LISC Digital Growth Accelerator—run by LISC Massachusetts and the IXL Center—where I serve as a student consultant for small businesses. In this role, I craft customized growth plans emphasizing digital transformation and operational efficiency, guide clients in optimizing their online presence and revenue streams, and partner with mission-driven enterprises to amplify their social impact in underserved communities. Along the way, I sharpen my consulting skills through expert-led workshops, strategic planning sessions, and peer collaboration.",
      technologies: ["React", "TypeScript", "Python", "TensorFlow"],
      image: "📈",
      gradient: "from-purple-400 to-pink-400",
      github: "https://github.com/kinpanvt/ai-design-assistant"
    },
    {
      title: "Prosthetic Hand Prototype",
      description: "Collaborating with a multidisciplinary team from July to November 2022, I helped design and build a functional prosthetic hand prototype—starting with a cardboard-and-servo mockup and advancing to a SolidWorks CAD model. We used CNC, 3D printing, and resin molding to fabricate components, then collected glove-based sensor data to train an ML model that drives adaptive, human-like finger movements. Key Achievements include: Translated a string-and-straw cardboard concept into a refined SolidWorks design, fabricating parts via CNC and 3D printing. Collected and processed sensor data to train a machine-learning model that predicts and replicates natural grasp patterns. Integrated the ML-driven control system into the servos, enabling the hand to adapt its grip through real-time learning.",
      technologies: ["Arduino", "Servos", "Potentiometers", "Solidworks", "CAD", "PyTorch"],
      image: "👌🏻",
      gradient: "from-purple-400 to-pink-400",
      github: "https://github.com/kinpanvt/ai-design-assistant"
    },
    {
      title: "AI Neurodivergent Network",
      description: "As project lead for MeAsmi, I drove the integration of machine learning into a community-psychology platform for neurodivergent individuals—overseeing data collection on diagnoses and therapy outcomes, applying clustering and predictive models to uncover treatment insights, guiding a team of professors and therapists, and designing an interactive web portal to deliver data-driven recommendations.",
      technologies: ["Python", "pandas", "NumPy", "Django", "MongoDB", "Docker"],
      image: "🧠",
      gradient: "from-purple-400 to-pink-400",
      github: "https://github.com/kinpanvt/ai-design-assistant"
    },
    {
      title: "Eventualist: AI calendar",
      description: "On the Eventualist project with Dr. Andrew Kulak, I helped design and build an AI-powered calendar app that integrates with Canvas, GrubHub, and GobblerConnect to deliver personalized scheduling recommendations. I implemented machine-learning models to analyze user behavior and optimize multi-modal search algorithms, led user-centric design and testing sessions, and collaborated across disciplines to ensure the app was both powerful and intuitive.",
      technologies: ["Python", "JavaScript", "React", "NumPy", "APIs & Integrations", "Figma"],
      image: "📅",
      gradient: "from-purple-400 to-pink-400",
      github: "https://github.com/kinpanvt/ai-design-assistant"
    }
  ]

  return (
    <div className="pt-16 min-h-screen">
      {/* Header */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Code className="h-16 w-16 text-gold-400 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gold-400 to-pink-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
              A collection of projects showcasing innovation, creativity, and technical excellence.
            </p>

            <motion.a
              href="https://github.com/kinpanvt"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 hover:border-white/40 transition-all duration-300 text-white hover:text-gold-300"
            >
              <Github className="h-5 w-5" />
              <span>View All on GitHub</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 h-full">
                  {/* Project Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-6xl filter drop-shadow-lg"
                    >
                      {project.image}
                    </motion.div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.github}
                        whileHover={{ scale: 1.1 }}
                        className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white"
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gold-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-white/80 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-white/5 rounded-full text-white/70 text-sm border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
