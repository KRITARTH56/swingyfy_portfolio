import type { Metadata } from 'next'
import { HelpCircle, MessageCircle, Mail, Book } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center - SwingyFy HRMS | Support & FAQs',
  description: 'Get help with SwingyFy HRMS. Browse FAQs, troubleshooting guides, contact support, and find answers to common questions about payroll, attendance, and employee management.',
  keywords: 'HRMS help, HR software support, payroll help, employee management support, FAQs, troubleshooting, customer support',
  openGraph: {
    title: 'Help Center - SwingyFy HRMS',
    description: 'Get help and support for SwingyFy',
    url: 'https://swingyfy.com/help-center',
  },
}

const faqCategories = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I set up my SwingyFy account?',
        a: 'Setting up your account is easy. After signing up, you\'ll be guided through a setup wizard that helps you configure your company details, add employees, and set up payroll.',
      },
      {
        q: 'What information do I need to get started?',
        a: 'You\'ll need basic company information, employee details, and payroll configuration. Our setup wizard will guide you through each step.',
      },
    ],
  },
  {
    category: 'Payroll',
    questions: [
      {
        q: 'How does payroll processing work?',
        a: 'SwingyFy automates payroll calculations including taxes, deductions, and benefits. Simply review and approve, and we handle the rest including direct deposits.',
      },
      {
        q: 'Can I process payroll for multiple locations?',
        a: 'Yes, SwingyFy supports multi-location payroll with different tax rules and pay schedules for each location.',
      },
    ],
  },
  {
    category: 'Billing',
    questions: [
      {
        q: 'How does billing work?',
        a: 'We charge monthly based on your plan. You can upgrade, downgrade, or cancel at any time. All plans include a 14-day free trial.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit cards and ACH transfers for annual plans. Invoices are available for enterprise customers.',
      },
    ],
  },
]

const supportOptions = [
  {
    icon: MessageCircle,
    title: 'Live Chat',
    description: 'Chat with our support team in real-time',
    action: 'Start Chat',
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us an email and we\'ll respond within 24 hours',
    action: 'Send Email',
  },
  {
    icon: Book,
    title: 'Knowledge Base',
    description: 'Browse our comprehensive documentation',
    action: 'View Docs',
  },
]

export default function HelpCenterPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Help Center
          </h1>
          <p className="text-xl text-muted-grey max-w-3xl mx-auto">
            Find answers to common questions and get the support you need
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {supportOptions.map((option, index) => {
              const Icon = option.icon
              return (
                <div key={option.title} className="glass rounded-2xl p-6 hover:border-primary-pink transition-all duration-300 text-center">
                  <div className="p-4 bg-primary-pink/20 rounded-lg w-fit mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary-pink" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold mb-2">{option.title}</h3>
                  <p className="text-muted-grey text-sm mb-4">{option.description}</p>
                  <a
                    href="/contact"
                    className="text-primary-pink hover:text-primary-pink-dark font-semibold text-sm"
                  >
                    {option.action} →
                  </a>
                </div>
              )
            })}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqCategories.map((category, catIndex) => (
                <div key={category.category} className="glass rounded-2xl p-6 md:p-8">
                  <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-3">
                    <HelpCircle className="w-6 h-6 text-primary-pink" />
                    {category.category}
                  </h3>
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex}>
                        <h4 className="text-lg font-semibold mb-2 text-soft-white">{faq.q}</h4>
                        <p className="text-muted-grey leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Still Need Help?</h2>
            <p className="text-muted-grey mb-8 max-w-2xl mx-auto">
              Our support team is available 24/7 to assist you with any questions or issues.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

