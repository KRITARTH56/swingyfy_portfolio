'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Zap, Shield, TrendingUp } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Automation First',
    description: 'Reduce manual work by 80% with intelligent automation',
    bgColor: 'bg-primary-pink/20',
    iconColor: 'text-primary-pink',
  },
  {
    icon: Shield,
    title: 'Secure & Compliant',
    description: 'Enterprise-grade security with GDPR and SOC 2 compliance',
    bgColor: 'bg-primary-pink-dark/20',
    iconColor: 'text-primary-pink-dark',
  },
  {
    icon: TrendingUp,
    title: 'Scalable Growth',
    description: 'Grows with your team from startup to enterprise',
    bgColor: 'bg-success-green/20',
    iconColor: 'text-success-green',
  },
  {
    icon: CheckCircle2,
    title: 'Easy Integration',
    description: 'Seamlessly integrate with your existing tools and workflows',
    bgColor: 'bg-accent-blue/20',
    iconColor: 'text-accent-blue',
  },
]

export default function WhySwingyFy() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-strong rounded-3xl p-8 md:p-12"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                Why Choose{' '}
                <span className="bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
                  SwingyFy?
                </span>
              </h2>
              <p className="text-xl text-muted-grey max-w-2xl mx-auto">
                Built for modern teams who value efficiency, security, and growth
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-start gap-4 p-6 rounded-xl hover:bg-white/5 transition-all duration-300"
                  >
                    <motion.div 
                      className={`p-3 ${benefit.bgColor} rounded-lg flex-shrink-0`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className={`w-6 h-6 ${benefit.iconColor}`} />
                    </motion.div>
                    <div>
                      <h3 className="text-lg font-heading font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-grey">{benefit.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid md:grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent mb-2">
                  10K+
                </div>
                <div className="text-muted-grey">Active Companies</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent mb-2">
                  500K+
                </div>
                <div className="text-muted-grey">Employees Managed</div>
              </motion.div>
              <motion.div 
                className="text-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent mb-2">
                  99.9%
                </div>
                <div className="text-muted-grey">Uptime SLA</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}












