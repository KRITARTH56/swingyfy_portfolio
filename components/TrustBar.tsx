'use client'

import { motion } from 'framer-motion'

const companies = [
  'TechCorp',
  'InnovateLabs',
  'StartupHub',
  'GrowthCo',
  'ScaleUp',
  'FutureTech',
]

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-white/10">
      <div className="container mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-grey mb-8 text-sm uppercase tracking-wider"
        >
          Trusted by 10,000+ Organizations
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <motion.div
              key={company}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="text-muted-grey hover:text-primary-pink transition-colors font-semibold text-lg opacity-60 hover:opacity-100"
            >
              {company}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}








