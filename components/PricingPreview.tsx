'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: 29,
    description: 'Perfect for small teams',
    features: [
      'Up to 25 employees',
      'Basic payroll processing',
      'Attendance tracking',
      'Email support',
      'Mobile app access',
    ],
    popular: false,
  },
  {
    name: 'Professional',
    price: 79,
    description: 'For growing companies',
    features: [
      'Up to 100 employees',
      'Advanced payroll & tax',
      'Recruitment tools',
      'Performance management',
      'Priority support',
      'Custom reports',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    description: 'For large organizations',
    features: [
      'Unlimited employees',
      'Full feature access',
      'Dedicated account manager',
      'Custom integrations',
      '24/7 phone support',
      'Advanced security',
    ],
    popular: false,
  },
]

export default function PricingPreview() {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Simple, Transparent{' '}
            <span className="bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
              Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-grey max-w-2xl mx-auto">
            Choose the plan that fits your team. All plans include a 14-day free trial.
          </p>
        </motion.div>

        {/* Free Trial Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto mb-12"
        >
          <div className="glass-strong rounded-2xl p-8 text-center border-2 border-primary-pink shadow-pink-glow">
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 bg-gradient-to-r from-primary-pink to-primary-pink-dark rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <span className="text-2xl font-bold">🎉</span>
            </motion.div>
            <h3 className="text-2xl font-heading font-bold mb-2">
              Start Your Free Trial
            </h3>
            <p className="text-muted-grey mb-6">
              Experience all features with our 14-day free trial. No credit card required.
            </p>
            <motion.a
              href="https://app.swingyfy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full py-3 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white font-semibold rounded-lg hover:shadow-pink-glow transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Trial
            </motion.a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -10,
                scale: plan.popular ? 1.08 : 1.05,
                transition: { duration: 0.3 }
              }}
              className={`glass rounded-2xl p-8 relative overflow-hidden ${
                plan.popular
                  ? 'border-2 border-primary-pink shadow-pink-glow scale-105'
                  : 'border border-white/10'
              } hover:border-primary-pink transition-all duration-300`}
            >
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-pink/5 to-primary-pink-dark/5 opacity-0 group-hover:opacity-100"
                initial={false}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-pink to-primary-pink-dark rounded-full text-sm font-semibold z-20"
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  Most Popular
                </motion.div>
              )}
              <div className="relative z-10">
                <motion.h3 
                  className="text-2xl font-heading font-bold mb-2"
                  whileHover={{ scale: 1.05 }}
                >
                  {plan.name}
                </motion.h3>
                <p className="text-muted-grey mb-6">{plan.description}</p>
                <motion.div 
                  className="mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className="text-muted-grey">/month</span>
                </motion.div>
              </div>
              <ul className="space-y-3 mb-8 relative z-10">
                {plan.features.map((feature, idx) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                  >
                    <Check className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                    <span className="text-muted-grey">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative z-10"
              >
                <Link
                  href="/pricing"
                  className={`relative block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 overflow-hidden ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white hover:shadow-pink-glow'
                      : 'glass border border-white/20 hover:border-primary-pink'
                  }`}
                >
                  <motion.span
                    className="absolute inset-0 bg-white/10"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="relative z-10">Get Started</span>
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-primary-pink hover:text-primary-pink-dark transition-colors font-semibold"
          >
            View all pricing details
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

