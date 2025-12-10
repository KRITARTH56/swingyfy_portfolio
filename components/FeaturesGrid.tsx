'use client'

import { motion } from 'framer-motion'
import { 
  DollarSign, 
  Users, 
  Clock, 
  Briefcase, 
  BarChart3, 
  CheckCircle2 
} from 'lucide-react'

const features = [
  {
    icon: DollarSign,
    title: 'Payroll Automation',
    description: 'Automate payroll processing with tax calculations, compliance, and direct deposits.',
    bgColor: 'bg-primary-pink/20',
    iconColor: 'text-primary-pink',
  },
  {
    icon: Users,
    title: 'Employee Management',
    description: 'Complete employee lifecycle management from onboarding to offboarding.',
    bgColor: 'bg-primary-pink-dark/20',
    iconColor: 'text-primary-pink-dark',
  },
  {
    icon: Clock,
    title: 'Attendance Tracking',
    description: 'Real-time attendance tracking with biometric integration and leave management.',
    bgColor: 'bg-success-green/20',
    iconColor: 'text-success-green',
  },
  {
    icon: Briefcase,
    title: 'Recruitment',
    description: 'Streamline hiring with applicant tracking, interviews, and candidate management.',
    bgColor: 'bg-accent-blue/20',
    iconColor: 'text-accent-blue',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Powerful analytics dashboard with actionable insights and custom reports.',
    bgColor: 'bg-primary-pink/20',
    iconColor: 'text-primary-pink',
  },
  {
    icon: CheckCircle2,
    title: 'Performance Management',
    description: 'Set goals, track performance, and conduct reviews with our comprehensive system.',
    bgColor: 'bg-primary-pink-dark/20',
    iconColor: 'text-primary-pink-dark',
  },
]

export default function FeaturesGrid() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-100">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
              Manage Your Workforce
            </span>
          </h2>
          <p className="text-xl text-muted-grey max-w-2xl mx-auto">
            Powerful features designed to streamline your HR operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={false}
                whileInView={{ y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.08, 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
                className="glass rounded-2xl p-8 hover:border-primary-pink transition-all duration-300 group cursor-pointer relative overflow-hidden opacity-100"
              >
                {/* Animated background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.bgColor.replace('/20', '/5')} opacity-0 group-hover:opacity-100 rounded-2xl`}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Icon container with animation */}
                <motion.div 
                  className={`p-4 ${feature.bgColor} rounded-lg w-fit mb-4 group-hover:shadow-glow transition-all duration-300 relative z-10`}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                      ease: "easeInOut"
                    }}
                  >
                    <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </motion.div>
                </motion.div>
                
                <h3 className="text-xl font-heading font-semibold mb-3 relative z-10 group-hover:text-primary-pink transition-colors">
                  {feature.title}
                </h3>
                <motion.p 
                  className="text-muted-grey leading-relaxed relative z-10"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {feature.description}
                </motion.p>
                
                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

