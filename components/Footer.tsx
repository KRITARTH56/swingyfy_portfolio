'use client'

import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const footerLinks = {
  product: [
    { label: 'Features', href: '/features' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Integrations', href: '/integrations' },
    { label: 'API', href: '/api' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ],
  resources: [
    { label: 'Documentation', href: '/documentation' },
    { label: 'Help Center', href: '/help-center' },
    { label: 'Community', href: '/community' },
    { label: 'Webinars', href: '/webinars' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms of Service', href: '/terms-of-service' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
    { label: 'Security', href: '/security' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: 'https://www.linkedin.com/company/swingyfy', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-12 md:mt-20 bg-transparent">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* CTA Section */}
        <div className="mb-12 md:mb-16">
          <div className="relative rounded-2xl p-8 md:p-12 bg-gradient-to-br from-primary-pink-dark via-primary-pink to-primary-pink-dark overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
            
            <div className="relative z-10 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold mb-6 md:mb-8 text-white leading-[1.1] tracking-[-0.02em]"
                style={{ 
                  textShadow: '0 4px 20px rgba(0,0,0,0.4), 0 2px 8px rgba(0,0,0,0.3)',
                }}
              >
                Have an awesome{' '}
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]">
                    project
                  </span>
                </span>{' '}
                in mind?
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-4"
              >
                <Link
                  href="/contact"
                  className="inline-block px-8 md:px-12 py-3 md:py-4 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Lets Discuss!
                </Link>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white text-sm md:text-base"
              >
                Lets discuss it and make your<br />
                dream software come true!
              </motion.p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 mb-6 md:mb-0">
            <motion.div
              whileHover={{ scale: 1.05 }}
            >
              <Link href="/" className="flex items-center gap-0 mb-4">
                <img 
                  src="/logo-icon.svg" 
                  alt="SwingyFy Logo" 
                  className="w-10 h-10"
                />
                <span className="text-2xl font-heading font-bold bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
                  SwingyFy
                </span>
              </Link>
            </motion.div>
            <p className="text-muted-grey mb-4 md:mb-6 text-sm md:text-base max-w-sm">
              Modern HRMS to Empower Growing Teams. Automating HR for modern companies.
            </p>
            <div className="flex gap-3 md:gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="p-2 glass rounded-lg hover:border-primary-pink transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-muted-grey hover:text-primary-pink transition-colors" />
                  </motion.a>
                )
              })}
            </div>
          </div>

          {/* Product Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Product</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-grey hover:text-primary-pink transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="mb-4 md:mb-0">
            <h3 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-grey hover:text-primary-pink transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <h3 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Resources</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-grey hover:text-primary-pink transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
            <h3 className="font-heading font-semibold mb-3 md:mb-4 text-sm md:text-base">Legal</h3>
            <ul className="space-y-2 md:space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-grey hover:text-primary-pink transition-colors text-sm md:text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <p className="text-muted-grey text-xs md:text-sm text-center md:text-left">
            © {new Date().getFullYear()} SwingyFy. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-grey text-xs md:text-sm">
            <Mail className="w-3 h-3 md:w-4 md:h-4" />
            <a href="mailto:swingyfy@gmail.com" className="hover:text-primary-pink transition-colors">
              swingyfy@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

