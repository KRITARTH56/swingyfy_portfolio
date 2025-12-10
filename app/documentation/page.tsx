import type { Metadata } from 'next'
import { BookOpen, Search, Code, Video, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Documentation - SwingyFy HRMS | User Guides & API Docs',
  description: 'Comprehensive documentation for SwingyFy HRMS. Get started guides, API documentation, tutorials, and best practices to maximize your HRMS usage.',
  keywords: 'HRMS documentation, HR software guides, payroll documentation, employee management docs, API documentation, user manual, help docs',
  openGraph: {
    title: 'Documentation - SwingyFy HRMS',
    description: 'Complete guides and documentation for SwingyFy',
    url: 'https://swingyfy.com/documentation',
  },
}

const docCategories = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    description: 'Quick start guides and setup instructions for new users.',
    topics: ['Account Setup', 'First Steps', 'User Roles', 'Basic Configuration'],
  },
  {
    icon: Code,
    title: 'API Reference',
    description: 'Complete API documentation with examples and code samples.',
    topics: ['Authentication', 'Endpoints', 'Webhooks', 'SDKs'],
  },
  {
    icon: Video,
    title: 'Video Tutorials',
    description: 'Step-by-step video guides for common tasks and features.',
    topics: ['Payroll Setup', 'Employee Management', 'Reports', 'Integrations'],
  },
  {
    icon: FileText,
    title: 'User Guides',
    description: 'Detailed guides for all features and functionalities.',
    topics: ['Payroll', 'Attendance', 'Leave Management', 'Recruitment'],
  },
]

export default function DocumentationPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Documentation
          </h1>
          <p className="text-xl text-muted-grey max-w-3xl mx-auto">
            Everything you need to get the most out of SwingyFy HRMS
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-2xl p-6 mb-12">
            <div className="flex items-center gap-4">
              <Search className="w-6 h-6 text-primary-pink" />
              <input
                type="search"
                placeholder="Search documentation..."
                className="flex-1 bg-graphite-dark border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-pink transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {docCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={category.title} className="glass rounded-2xl p-8 hover:border-primary-pink transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary-pink/20 rounded-lg">
                      <Icon className="w-6 h-6 text-primary-pink" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold">{category.title}</h2>
                  </div>
                  <p className="text-muted-grey mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.topics.map((topic) => (
                      <li key={topic} className="flex items-center gap-2 text-muted-grey">
                        <span className="w-1.5 h-1.5 bg-primary-pink rounded-full" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Need More Help?</h2>
            <p className="text-muted-grey mb-8 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300"
              >
                Contact Support
              </a>
              <a
                href="/help-center"
                className="px-8 py-4 glass border border-white/20 text-soft-white rounded-lg font-semibold hover:border-primary-pink transition-all duration-300"
              >
                Visit Help Center
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

