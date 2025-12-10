'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

interface FeatureCardProps {
  icon: string
  title: string
  color?: string
}

export default function FeatureCard({ icon, title, color = 'from-primary-pink to-primary-pink-dark' }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ 
        scale: 1.08, 
        y: -8,
      }}
      whileTap={{ scale: 0.95 }}
      style={{ perspective: 1000 }}
      className="glass rounded-2xl p-6 cursor-pointer group hover:border-primary-pink transition-all duration-300 relative overflow-hidden"
    >
      {/* Animated background gradient on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-r ${color} rounded-2xl`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
      
      {/* Icon with animation */}
      <motion.div 
        className={`text-4xl mb-3 bg-gradient-to-r ${color} bg-clip-text text-transparent relative z-10`}
        animate={{ 
          scale: isHovered ? 1.15 : 1,
          rotate: isHovered ? 5 : 0,
        }}
        transition={{ 
          duration: 0.3,
          type: "spring",
          stiffness: 300
        }}
      >
        {icon}
      </motion.div>
      
      <h3 className="text-lg font-heading font-semibold mb-2 relative z-10">{title}</h3>
      
      {/* Animated underline */}
      <motion.div 
        className={`h-1 bg-gradient-to-r ${color} rounded-full relative z-10`}
        initial={{ width: 48 }}
        animate={{ width: isHovered ? 64 : 48 }}
        transition={{ 
          duration: 0.3, 
          ease: "easeOut",
          type: "spring",
          stiffness: 200
        }}
      />
      
      {/* Shimmer effect */}
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ duration: 0.6 }}
        />
      )}
    </motion.div>
  )
}

