import type { Metadata } from 'next'
import { Code, Key, BookOpen, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'API Documentation - SwingyFy HRMS | Developer Resources',
  description: 'Access SwingyFy HRMS API documentation. Build custom integrations, automate workflows, and connect with your existing systems using our comprehensive REST API.',
  keywords: 'HRMS API, HR software API, payroll API, employee management API, REST API, API documentation, developer tools, HR automation API',
  openGraph: {
    title: 'API Documentation - SwingyFy HRMS',
    description: 'Build custom integrations with SwingyFy API',
    url: 'https://swingyfy.com/api',
  },
}

const apiFeatures = [
  {
    icon: Code,
    title: 'RESTful API',
    description: 'Standard REST API with JSON responses. Easy to integrate with any programming language.',
  },
  {
    icon: Key,
    title: 'API Keys',
    description: 'Secure authentication using API keys. Manage access and permissions with granular control.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Docs',
    description: 'Detailed documentation with code examples, SDKs, and interactive API explorer.',
  },
  {
    icon: Terminal,
    title: 'Webhooks',
    description: 'Real-time event notifications via webhooks. Stay updated on all HR activities.',
  },
]

export default function APIPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            API Documentation
          </h1>
          <p className="text-xl text-muted-grey max-w-3xl mx-auto">
            Build powerful integrations with SwingyFy's comprehensive REST API. Automate workflows, sync data, and create custom solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {apiFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div key={feature.title} className="glass rounded-2xl p-8 hover:border-primary-pink transition-all duration-300">
                  <div className="p-4 bg-primary-pink/20 rounded-lg w-fit mb-4">
                    <Icon className="w-8 h-8 text-primary-pink" />
                  </div>
                  <h2 className="text-2xl font-heading font-bold mb-3">{feature.title}</h2>
                  <p className="text-muted-grey">{feature.description}</p>
                </div>
              )
            })}
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-heading font-bold mb-6">Quick Start</h2>
            <div className="bg-graphite-dark rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm text-soft-white">
                <code>{`// Get your API key from Settings > API
const API_KEY = 'your-api-key-here';
const BASE_URL = 'https://api.swingyfy.com/v1';

// Example: Fetch employees
fetch(\`\${BASE_URL}/employees\`, {
  headers: {
    'Authorization': \`Bearer \${API_KEY}\`,
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));`}</code>
              </pre>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-grey mb-8 max-w-2xl mx-auto">
              Access full API documentation, code samples, and SDKs in our developer portal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300"
              >
                Get API Access
              </a>
              <a
                href="/contact"
                className="px-8 py-4 glass border border-white/20 text-soft-white rounded-lg font-semibold hover:border-primary-pink transition-all duration-300"
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

