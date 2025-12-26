'use client'

import { useState } from 'react'
import { Check, ArrowRight, Info, Zap, Shield, Users, BarChart3, Clock, Globe, Lock, Sparkles, TrendingUp, Award, MessageSquare, FileText, Settings, Code, Headphones, Calendar } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 29,
    yearlyPrice: 290,
    perEmployeeMonthly: 1.16,
    perEmployeeYearly: 0.97,
    description: 'Perfect for small teams',
    employeeLimit: 25,
    storage: '10 GB',
    apiCalls: '1,000/month',
    supportResponse: '24 hours',
    features: [
      { text: 'Up to 25 employees', icon: Users, value: '25' },
      { text: 'Basic payroll processing', icon: FileText, value: 'Standard' },
      { text: 'Attendance tracking', icon: Clock, value: 'Real-time' },
      { text: 'Leave management', icon: Calendar, value: 'Unlimited' },
      { text: 'Email support', icon: MessageSquare, value: '24h response' },
      { text: 'Mobile app access', icon: Globe, value: 'iOS & Android' },
      { text: 'Basic reports', icon: BarChart3, value: '5 templates' },
      { text: 'Data storage', icon: Shield, value: '10 GB' },
    ],
    popular: false,
    savings: null,
  },
  {
    name: 'Professional',
    monthlyPrice: 79,
    yearlyPrice: 790,
    perEmployeeMonthly: 0.79,
    perEmployeeYearly: 0.66,
    description: 'For growing companies',
    employeeLimit: 100,
    storage: '100 GB',
    apiCalls: '10,000/month',
    supportResponse: '4 hours',
    features: [
      { text: 'Up to 100 employees', icon: Users, value: '100' },
      { text: 'Advanced payroll & tax', icon: TrendingUp, value: 'Auto-calc' },
      { text: 'Recruitment tools', icon: Zap, value: 'ATS included' },
      { text: 'Performance management', icon: Award, value: '360 reviews' },
      { text: 'Advanced analytics', icon: BarChart3, value: 'Custom dashboards' },
      { text: 'Priority support', icon: Headphones, value: '4h response' },
      { text: 'Custom reports', icon: FileText, value: 'Unlimited' },
      { text: 'API access', icon: Code, value: '10K calls/mo' },
      { text: 'Data storage', icon: Shield, value: '100 GB' },
      { text: 'Integrations', icon: Settings, value: '50+ apps' },
    ],
    popular: true,
    savings: '17%',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 199,
    yearlyPrice: 1990,
    perEmployeeMonthly: 'Custom',
    perEmployeeYearly: 'Custom',
    description: 'For large organizations',
    employeeLimit: 'Unlimited',
    storage: 'Unlimited',
    apiCalls: 'Unlimited',
    supportResponse: '1 hour',
    features: [
      { text: 'Unlimited employees', icon: Users, value: '∞' },
      { text: 'Full feature access', icon: Sparkles, value: 'All modules' },
      { text: 'Dedicated account manager', icon: Headphones, value: '1-on-1' },
      { text: 'Custom integrations', icon: Settings, value: 'Unlimited' },
      { text: '24/7 phone support', icon: Headphones, value: 'Instant' },
      { text: 'Advanced security', icon: Lock, value: 'SOC 2' },
      { text: 'White-label options', icon: Globe, value: 'Full branding' },
      { text: 'Training & onboarding', icon: Award, value: 'Dedicated' },
      { text: 'Data storage', icon: Shield, value: 'Unlimited' },
      { text: 'API access', icon: Code, value: 'Unlimited' },
      { text: 'SLA guarantee', icon: Shield, value: '99.9% uptime' },
    ],
    popular: false,
    savings: '17%',
  },
]

export default function PricingTable() {
  const [isYearly, setIsYearly] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)
  const [employeeCount, setEmployeeCount] = useState(25)

  const calculateSavings = (plan: typeof plans[0]) => {
    if (isYearly) {
      const monthlyTotal = plan.monthlyPrice * 12
      const yearlyTotal = plan.yearlyPrice
      return monthlyTotal - yearlyTotal
    }
    return 0
  }

  const calculatePerEmployee = (plan: typeof plans[0]) => {
    if (typeof plan.perEmployeeMonthly === 'number') {
      return isYearly ? plan.perEmployeeYearly : plan.perEmployeeMonthly
    }
    return plan.perEmployeeMonthly
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Toggle */}
      <motion.div 
        className="flex items-center justify-center gap-4 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className={`text-lg font-medium transition-colors ${!isYearly ? 'text-soft-white' : 'text-muted-grey'}`}>
          Monthly
        </span>
        <motion.button
          onClick={() => setIsYearly(!isYearly)}
          className={`relative w-16 h-9 rounded-full transition-colors ${
            isYearly ? 'bg-gradient-to-r from-primary-pink to-primary-pink-dark' : 'bg-white/20'
          }`}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
        >
          <motion.div
            className={`absolute top-1 left-1 w-7 h-7 bg-white rounded-full transition-transform shadow-lg ${
              isYearly ? 'translate-x-7' : 'translate-x-0'
            }`}
            layout
          />
        </motion.button>
        <div className="flex items-center gap-2">
          <span className={`text-lg font-medium transition-colors ${isYearly ? 'text-soft-white' : 'text-muted-grey'}`}>
            Yearly
          </span>
          {isYearly && (
            <motion.span 
              className="text-success-green text-sm font-semibold px-2 py-1 bg-success-green/10 rounded"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
            >
              Save 17%
            </motion.span>
          )}
        </div>
      </motion.div>

      {/* Employee Count Calculator */}
      <motion.div 
        className="mb-12 glass rounded-xl p-6 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="flex items-center justify-between mb-4">
          <label className="text-soft-white font-medium flex items-center gap-2">
            <Users className="w-5 h-5 text-primary-pink" />
            Number of Employees
          </label>
          <span className="text-primary-pink font-bold text-xl">{employeeCount}</span>
        </div>
        <input
          type="range"
          min="1"
          max="500"
          value={employeeCount}
          onChange={(e) => setEmployeeCount(Number(e.target.value))}
          className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary-pink"
        />
        <div className="flex justify-between text-xs text-muted-grey mt-2">
          <span>1</span>
          <span>250</span>
          <span>500+</span>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-sm text-muted-grey mb-2">Estimated Monthly Cost:</div>
          <div className="grid grid-cols-3 gap-4">
            {plans.map((plan) => {
              const fitsPlan = 
                plan.employeeLimit === 'Unlimited' || 
                (typeof plan.employeeLimit === 'number' && employeeCount <= plan.employeeLimit)
              
              if (!fitsPlan) {
                return (
                  <div key={plan.name} className="text-center">
                    <div className="text-xs text-muted-grey">Not available</div>
                    <div className="text-xs text-muted-grey mt-1">{plan.name}</div>
                  </div>
                )
              }

              const basePrice = isYearly ? plan.yearlyPrice / 12 : plan.monthlyPrice
              const perEmployeeRate = isYearly ? plan.perEmployeeYearly : plan.perEmployeeMonthly
              const estimatedCost = typeof plan.perEmployeeMonthly === 'number' && typeof perEmployeeRate === 'number'
                ? basePrice + (employeeCount * perEmployeeRate)
                : basePrice

              return (
                <div key={plan.name} className="text-center">
                  <div className="text-lg font-bold text-primary-pink">
                    ${Math.round(estimatedCost)}
                  </div>
                  <div className="text-xs text-muted-grey mt-1">{plan.name}</div>
                </div>
              )
            })}
          </div>
        </div>
      </motion.div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {plans.map((plan, index) => {
          const savings = calculateSavings(plan)
          const perEmployee = calculatePerEmployee(plan)
          const isExpanded = expandedPlan === plan.name
          const isHovered = hoveredPlan === plan.name
          
          return (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onHoverStart={() => setHoveredPlan(plan.name)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`glass rounded-2xl p-8 relative overflow-hidden cursor-pointer transition-all duration-300 ${
                plan.popular
                  ? 'border-2 border-primary-pink shadow-pink-glow scale-105'
                  : 'border border-white/10'
              } ${isHovered ? 'border-primary-pink shadow-lg' : ''}`}
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-pink to-primary-pink-dark rounded-full text-sm font-semibold z-20 flex items-center gap-1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-4 h-4" />
                  Most Popular
                </motion.div>
              )}
              
              {/* Savings Badge */}
              {isYearly && savings > 0 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 bg-success-green/20 text-success-green px-3 py-1 rounded-full text-xs font-semibold"
                >
                  Save ${savings}/year
                </motion.div>
              )}

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-heading font-bold mb-1">{plan.name}</h3>
                    <p className="text-muted-grey text-sm">{plan.description}</p>
                  </div>
                </div>

                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-grey">/{isYearly ? 'year' : 'month'}</span>
                  </div>
                  {typeof perEmployee === 'number' && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-grey">
                      <Info className="w-4 h-4" />
                      <span>${perEmployee.toFixed(2)} per employee/{isYearly ? 'year' : 'month'}</span>
                    </div>
                  )}
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="glass rounded-lg p-3 border border-white/5">
                    <div className="text-xs text-muted-grey mb-1">Employees</div>
                    <div className="text-lg font-bold">{plan.employeeLimit}</div>
                  </div>
                  <div className="glass rounded-lg p-3 border border-white/5">
                    <div className="text-xs text-muted-grey mb-1">Storage</div>
                    <div className="text-lg font-bold">{plan.storage}</div>
                  </div>
                  <div className="glass rounded-lg p-3 border border-white/5">
                    <div className="text-xs text-muted-grey mb-1">API Calls</div>
                    <div className="text-lg font-bold">{plan.apiCalls}</div>
                  </div>
                  <div className="glass rounded-lg p-3 border border-white/5">
                    <div className="text-xs text-muted-grey mb-1">Support</div>
                    <div className="text-lg font-bold">{plan.supportResponse}</div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {plan.features.slice(0, isExpanded ? plan.features.length : 6).map((feature, idx) => {
                    const Icon = feature.icon
                    return (
                      <motion.li 
                        key={feature.text} 
                        className="flex items-start gap-3 group"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + idx * 0.05 }}
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex-shrink-0 mt-0.5">
                          <Icon className="w-5 h-5 text-primary-pink" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-muted-grey group-hover:text-soft-white transition-colors">
                              {feature.text}
                            </span>
                            {feature.value && (
                              <span className="text-xs text-primary-pink font-semibold bg-primary-pink/10 px-2 py-0.5 rounded">
                                {feature.value}
                              </span>
                            )}
                          </div>
                        </div>
                      </motion.li>
                    )
                  })}
                </ul>

                {/* Expand/Collapse Button */}
                {plan.features.length > 6 && (
                  <button
                    onClick={() => setExpandedPlan(isExpanded ? null : plan.name)}
                    className="text-primary-pink text-sm font-medium mb-6 hover:underline flex items-center gap-1"
                  >
                    {isExpanded ? 'Show Less' : `+${plan.features.length - 6} More Features`}
                    <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                  </button>
                )}

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href="https://app.swingyfy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden ${
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
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </a>
                </motion.div>
              </div>

              {/* Hover Glow Effect */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-pink/10 to-primary-pink-dark/10 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Comparison Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="glass rounded-2xl p-8 overflow-x-auto"
      >
        <h3 className="text-2xl font-heading font-bold mb-6 text-center">Feature Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-4 text-muted-grey font-medium">Feature</th>
                {plans.map((plan) => (
                  <th key={plan.name} className="text-center py-4 px-4 font-bold">
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-muted-grey">Max Employees</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-4 px-4 text-center">
                    {plan.employeeLimit}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-muted-grey">Storage</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-4 px-4 text-center">
                    {plan.storage}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-muted-grey">API Calls</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-4 px-4 text-center">
                    {plan.apiCalls}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-muted-grey">Support Response</td>
                {plans.map((plan) => (
                  <td key={plan.name} className="py-4 px-4 text-center">
                    {plan.supportResponse}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-muted-grey">Payroll Processing</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-success-green mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-success-green mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-success-green mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-muted-grey">Recruitment Tools</td>
                <td className="py-4 px-4 text-center text-muted-grey">—</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-success-green mx-auto" />
                </td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-success-green mx-auto" />
                </td>
              </tr>
              <tr className="border-b border-white/5">
                <td className="py-4 px-4 text-muted-grey">Custom Integrations</td>
                <td className="py-4 px-4 text-center text-muted-grey">—</td>
                <td className="py-4 px-4 text-center text-muted-grey">Limited</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-success-green mx-auto" />
                </td>
              </tr>
              <tr>
                <td className="py-4 px-4 text-muted-grey">Dedicated Support</td>
                <td className="py-4 px-4 text-center text-muted-grey">—</td>
                <td className="py-4 px-4 text-center text-muted-grey">—</td>
                <td className="py-4 px-4 text-center">
                  <Check className="w-5 h-5 text-success-green mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}


