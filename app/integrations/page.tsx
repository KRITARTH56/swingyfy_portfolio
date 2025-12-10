import type { Metadata } from 'next'
import { Plug, Zap, Shield, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Integrations - SwingyFy HRMS | Connect Your Favorite Tools',
  description: 'Integrate SwingyFy HRMS with 100+ popular business tools including Slack, Microsoft Teams, Google Workspace, QuickBooks, ADP, and more. Streamline your HR workflows.',
  keywords: 'HRMS integrations, HR software integrations, payroll integrations, employee management integrations, Slack integration, QuickBooks integration, API integration',
  openGraph: {
    title: 'Integrations - SwingyFy HRMS',
    description: 'Connect SwingyFy with your favorite business tools',
    url: 'https://swingyfy.com/integrations',
  },
}

const integrations = [
  {
    category: 'Communication',
    icon: Zap,
    apps: ['Slack', 'Microsoft Teams', 'Google Workspace', 'Zoom', 'Outlook'],
    description: 'Seamlessly communicate with your team and sync calendar events.',
  },
  {
    category: 'Accounting & Finance',
    icon: Code,
    apps: ['QuickBooks', 'Xero', 'Sage', 'FreshBooks', 'Wave'],
    description: 'Automatically sync payroll data with your accounting software.',
  },
  {
    category: 'Recruitment',
    icon: Plug,
    apps: ['LinkedIn', 'Indeed', 'Glassdoor', 'Workday', 'BambooHR'],
    description: 'Import candidates and streamline your hiring process.',
  },
  {
    category: 'Security & Compliance',
    icon: Shield,
    apps: ['Okta', 'Azure AD', 'Google SSO', 'OneLogin', 'Auth0'],
    description: 'Enterprise-grade security with single sign-on capabilities.',
  },
]

export default function IntegrationsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Integrations
          </h1>
          <p className="text-xl text-muted-grey max-w-3xl mx-auto">
            Connect SwingyFy with 100+ popular business tools. Streamline your workflows and boost productivity with seamless integrations.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {integrations.map((integration, index) => {
              const Icon = integration.icon
              return (
                <div key={integration.category} className="glass rounded-2xl p-8 hover:border-primary-pink transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary-pink/20 rounded-lg">
                      <Icon className="w-6 h-6 text-primary-pink" />
                    </div>
                    <h2 className="text-2xl font-heading font-bold">{integration.category}</h2>
                  </div>
                  <p className="text-muted-grey mb-6">{integration.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {integration.apps.map((app) => (
                      <span
                        key={app}
                        className="px-4 py-2 bg-graphite-dark rounded-lg text-sm text-muted-grey border border-white/10"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Need a Custom Integration?</h2>
            <p className="text-muted-grey mb-8 max-w-2xl mx-auto">
              Our API makes it easy to build custom integrations. Contact our team to discuss your integration needs.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300"
            >
              Request Integration
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

