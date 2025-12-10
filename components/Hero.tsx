'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import RatingsBadge from './RatingsBadge'
import FeatureCard from './FeatureCard'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Simplified scroll effect - removed to ensure content renders
  const y = '0%'
  const opacity = 1

  const featureCards = [
    { icon: '💰', title: 'Payroll', color: 'from-primary-pink to-primary-pink-dark' },
    { icon: '📊', title: 'Analytics', color: 'from-primary-pink-dark to-success-green' },
    { icon: '⏰', title: 'Attendance', color: 'from-success-green to-accent-blue' },
    { icon: '👥', title: 'Recruitment', color: 'from-accent-blue to-primary-pink' },
    { icon: '📈', title: 'Performance', color: 'from-primary-pink to-primary-pink-dark' },
  ]

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-20 overflow-hidden bg-deep-charcoal w-full">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-pink/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-pink-dark/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-success-green/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 md:mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                Modern HRMS to{' '}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-primary-pink via-primary-pink-dark to-success-green bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Empower Growing Teams
              </motion.span>
            </motion.h1>
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-grey mb-6 md:mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              SwingyFy helps companies manage payroll, employees, attendance, hiring and productivity with automation and insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-6 md:mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/pricing"
                  className="relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-sm md:text-base"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary-pink-dark to-primary-pink opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Trial
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 glass border border-white/20 text-soft-white rounded-lg font-semibold hover:border-primary-pink transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden text-sm md:text-base"
                >
                  <motion.div
                    className="absolute inset-0 bg-primary-pink/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={false}
                  />
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="relative z-10"
                  >
                    <Play className="w-5 h-5" />
                  </motion.div>
                  <span className="relative z-10">Book a Demo</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Rating Badges */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <RatingsBadge platform="G2" rating={4.7} />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <RatingsBadge platform="Capterra" rating={4.6} />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Feature Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 gap-3 md:gap-4 mt-8 lg:mt-0"
          >
            {featureCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 200,
                  damping: 15
                }}
              >
                <FeatureCard {...card} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

