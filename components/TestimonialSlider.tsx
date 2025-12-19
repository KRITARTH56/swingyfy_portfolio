'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'HR Director',
    company: 'Aeroyantra',
    content: 'SwingyFy has transformed how we manage our workforce. The automation features saved us countless hours, and our team loves the intuitive interface.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'CEO',
    company: 'Algofission',
    content: 'As a growing company, we needed an HRMS that could scale with us. SwingyFy has been perfect - it grows with our team and the support is exceptional.',
    rating: 5,
  },
  {
    name: 'Amit Singh',
    role: 'People Operations Manager',
    company: 'SSP Enterprise',
    content: 'The analytics and insights we get from SwingyFy help us make data-driven decisions. It\'s become an essential tool for our HR operations.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'CFO',
    company: 'Cody',
    content: 'Payroll processing used to take days. Now it\'s automated and takes minutes. SwingyFy has been a game-changer for our finance and HR teams.',
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = (e?: React.MouseEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = (e?: React.MouseEvent) => {
    e?.preventDefault()
    e?.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 opacity-100">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Loved by{' '}
            <span className="bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
              Teams Worldwide
            </span>
          </h2>
          <p className="text-xl text-muted-grey max-w-2xl mx-auto">
            See what our customers have to say about SwingyFy
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative overflow-visible">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`testimonial-${currentIndex}`}
              initial={{ x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ 
                duration: 0.4, 
                type: "spring", 
                stiffness: 300,
                damping: 30
              }}
              className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden opacity-100"
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary-pink/5 to-primary-pink-dark/5"
                key={`bg-${currentIndex}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div
                key={`quote-${currentIndex}`}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.1, type: "spring" }}
              >
                <Quote className="w-12 h-12 text-primary-pink mb-6 relative z-10" />
              </motion.div>
              
              <motion.p 
                key={`content-${currentIndex}`}
                className="text-xl md:text-2xl text-soft-white mb-8 leading-relaxed relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                "{testimonials[currentIndex].content}"
              </motion.p>
              
              <motion.div 
                key={`info-${currentIndex}`}
                className="flex items-center justify-between relative z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div>
                  <motion.div 
                    className="font-heading font-semibold text-lg mb-1"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                  >
                    {testimonials[currentIndex].name}
                  </motion.div>
                  <motion.div 
                    className="text-muted-grey"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                  </motion.div>
                </div>
                <motion.div 
                  className="flex gap-1"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <motion.span 
                      key={`star-${currentIndex}-${i}`}
                      className="text-amber-glow text-xl"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        duration: 0.25, 
                        delay: 0.7 + i * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.3, rotate: 360 }}
                    >
                      ⭐
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => prevTestimonial(e)}
            type="button"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 p-3 glass rounded-full hover:border-primary-pink hover:shadow-pink-glow transition-all duration-300 z-30 cursor-pointer flex items-center justify-center min-w-[48px] min-h-[48px]"
            aria-label="Previous testimonial"
            onMouseDown={(e) => e.preventDefault()}
          >
            <motion.div
              whileHover={{ scale: 1.2, x: -2 }}
              animate={{ x: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none"
            >
              <ChevronLeft className="w-6 h-6 text-primary-pink" />
            </motion.div>
          </button>
          <button
            onClick={(e) => nextTestimonial(e)}
            type="button"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 p-3 glass rounded-full hover:border-primary-pink hover:shadow-pink-glow transition-all duration-300 z-30 cursor-pointer flex items-center justify-center min-w-[48px] min-h-[48px]"
            aria-label="Next testimonial"
            onMouseDown={(e) => e.preventDefault()}
          >
            <motion.div
              whileHover={{ scale: 1.2, x: 2 }}
              animate={{ x: [0, 2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none"
            >
              <ChevronRight className="w-6 h-6 text-primary-pink" />
            </motion.div>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-pink w-8'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

