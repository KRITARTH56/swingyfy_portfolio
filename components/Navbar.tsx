'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ExternalLink } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/features', label: 'Features' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-strong' : 'bg-transparent'
      }`}
      style={{ border: 'none', outline: 'none', borderBottom: 'none' }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center gap-0">
              <motion.div 
                className="w-10 h-10 flex items-center justify-center"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{ 
                  rotate: { duration: 0.6, ease: "easeInOut" },
                  scale: { duration: 0.2 }
                }}
              >
                <img 
                  src="/logo-icon.svg" 
                  alt="SwingyFy Logo" 
                  className="w-10 h-9"
                />
              </motion.div>
              <motion.span 
                className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
              >
                SwingyFy
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href
              return (
                <motion.div
                  key={link.href}
                  initial={false}
                  animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                  transition={isMounted ? { duration: 0.3, delay: index * 0.1 } : {}}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    href={link.href}
                    className={`relative transition-colors font-medium group ${
                      isActive 
                        ? 'text-primary-pink' 
                        : 'text-muted-grey hover:text-primary-pink'
                    }`}
                  >
                    {link.label}
                    <motion.span
                      className="absolute bottom-0 left-0 h-0.5 bg-primary-pink"
                      initial={false}
                      animate={{ width: isActive ? '100%' : 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://app.swingyfy.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative px-6 py-2 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300 overflow-hidden group cursor-pointer inline-block"
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative z-10">Get Free Trial</span>
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-muted-grey hover:text-primary-pink transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-strong border-t border-white/10"
          >
            <div className="container mx-auto px-4 py-6 space-y-4">
              {navLinks.map((link, index) => {
                const isActive = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={false}
                    animate={isMounted ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
                    transition={isMounted ? { delay: index * 0.1 } : {}}
                  >
                    <Link
                      href={link.href}
                      className={`block transition-colors font-medium py-2 ${
                        isActive 
                          ? 'text-primary-pink' 
                          : 'text-muted-grey hover:text-primary-pink'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <a
                  href="https://app.swingyfy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-6 py-2 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Free Trial
                </a>
                
                {/* Powered by AlgoFission */}
                <div className="text-center pt-2">
                  <p className="text-muted-grey text-xl">
                    Powered by{' '}
                    <a 
                      href="https://algofission.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary-pink hover:text-primary-pink-dark transition-colors font-large inline-flex items-center gap-1"
                    >
                      AlgoFission
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
