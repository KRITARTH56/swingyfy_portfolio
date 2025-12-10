import type { Metadata } from 'next'
import PricingTable from '@/components/PricingTable'

export const metadata: Metadata = {
  title: 'Pricing - SwingyFy HRMS',
  description: 'Choose the perfect plan for your business. Flexible pricing options for startups, growing companies, and enterprises. Start your free trial today.',
  keywords: 'HRMS pricing, HR software pricing, payroll software cost, employee management pricing, SaaS HR pricing',
  openGraph: {
    title: 'Pricing - SwingyFy HRMS',
    description: 'Choose the perfect plan for your business',
    url: 'https://swingyfy.com/pricing',
  },
}

export default function PricingPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-grey max-w-2xl mx-auto">
            Choose the plan that fits your team. All plans include a 14-day free trial.
          </p>
        </div>
        <PricingTable />
      </div>
    </div>
  )
}

