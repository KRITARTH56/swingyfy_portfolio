import type { Metadata } from 'next'
import FeaturesGrid from '@/components/FeaturesGrid'
import WhySwingyFy from '@/components/WhySwingyFy'

export const metadata: Metadata = {
  title: 'Features - SwingyFy HRMS',
  description: 'Discover all the powerful features of SwingyFy HRMS: Payroll automation, attendance tracking, employee management, recruitment, performance management, and more.',
  keywords: 'HRMS features, payroll automation, attendance tracking, employee management, recruitment software, performance management, HR features',
  openGraph: {
    title: 'Features - SwingyFy HRMS',
    description: 'Discover all the powerful features of SwingyFy HRMS',
    url: 'https://swingyfy.com/features',
  },
}

export default function FeaturesPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Powerful Features for Modern HR
          </h1>
          <p className="text-xl text-muted-grey max-w-2xl mx-auto">
            Everything you need to manage your workforce efficiently and grow your business
          </p>
        </div>
        <FeaturesGrid />
        <WhySwingyFy />
      </div>
    </div>
  )
}

