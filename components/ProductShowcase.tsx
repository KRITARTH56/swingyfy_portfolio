'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

const productScreenshots = [
  {
    id: 1,
    title: 'Employee Dashboard',
    description: 'Comprehensive employee management with intuitive interface',
    image: '/screenshots/dashboard.png',
    category: 'Dashboard'
  },
  {
    id: 2,
    title: 'Attendance Management',
    description: 'Real-time attendance tracking and reporting',
    image: '/screenshots/attendance.png',
    category: 'Attendance'
  },
  {
    id: 3,
    title: 'Leave Management',
    description: 'Streamlined leave request and approval system',
    image: '/screenshots/leave.png',
    category: 'Leave'
  },
  {
    id: 4,
    title: 'Payroll Processing',
    description: 'Automated payroll calculation and management',
    image: '/screenshots/payroll.png',
    category: 'Payroll'
  },
  {
    id: 5,
    title: 'Performance Analytics',
    description: 'Detailed insights and performance metrics',
    image: '/screenshots/analytics.png',
    category: 'Analytics'
  },
  {
    id: 6,
    title: 'Employee Profile',
    description: 'Complete employee information management',
    image: '/screenshots/profile.png',
    category: 'Profile'
  }
]

export default function ProductShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(productScreenshots.map(item => item.category)))]
  
  const filteredScreenshots = selectedCategory === 'All' 
    ? productScreenshots 
    : productScreenshots.filter(item => item.category === selectedCategory)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredScreenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredScreenshots.length) % filteredScreenshots.length)
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold mb-4"
          >
            See Our{' '}
            <span className="bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
              Product in Action
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-grey max-w-2xl mx-auto"
          >
            Explore the powerful features and intuitive interface of SwingyFy HRMS
          </motion.p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => {
                setSelectedCategory(category)
                setCurrentIndex(0)
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-pink text-white'
                  : 'glass text-muted-grey hover:text-primary-pink hover:border-primary-pink'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Main Screenshot Display */}
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            key={`${selectedCategory}-${currentIndex}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-2xl overflow-hidden glass-strong"
          >
            {/* Actual Screenshot Display */}
            <div className="relative bg-gradient-to-br from-graphite-dark to-deep-charcoal">
              <img
                src={filteredScreenshots[currentIndex]?.image}
                alt={filteredScreenshots[currentIndex]?.title}
                className="w-full h-auto object-contain"
              />
            </div>
            
            {/* Screenshot Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-deep-charcoal/90 to-transparent p-6">
              <h3 className="text-xl font-heading font-bold mb-2">
                {filteredScreenshots[currentIndex]?.title}
              </h3>
              <p className="text-muted-grey">
                {filteredScreenshots[currentIndex]?.description}
              </p>
            </div>
          </motion.div>

          {/* Navigation Arrows */}
          {filteredScreenshots.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full hover:border-primary-pink hover:shadow-pink-glow transition-all duration-300"
                aria-label="Previous screenshot"
              >
                <ChevronLeft className="w-6 h-6 text-primary-pink" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 glass rounded-full hover:border-primary-pink hover:shadow-pink-glow transition-all duration-300"
                aria-label="Next screenshot"
              >
                <ChevronRight className="w-6 h-6 text-primary-pink" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-8 max-w-6xl mx-auto">
          {filteredScreenshots.map((screenshot, index) => (
            <motion.button
              key={screenshot.id}
              onClick={() => setCurrentIndex(index)}
              className={`aspect-video rounded-lg overflow-hidden transition-all duration-300 ${
                index === currentIndex
                  ? 'ring-2 ring-primary-pink'
                  : 'opacity-60 hover:opacity-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={screenshot.image}
                alt={screenshot.title}
                className="w-full h-full object-contain bg-gradient-to-br from-graphite-dark to-deep-charcoal"
              />
            </motion.button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <p className="text-muted-grey">
              Ready to experience SwingyFy for yourself?
            </p>
            <a
              href="https://ems-zemplify-feat-modules-clone-93u.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white font-semibold rounded-lg hover:shadow-pink-glow transition-all duration-300"
            >
              Try Free Demo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}