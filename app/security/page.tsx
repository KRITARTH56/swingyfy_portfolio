import type { Metadata } from 'next'
import { Shield, Lock, CheckCircle2, Server } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security - SwingyFy HRMS | Enterprise-Grade Security & Compliance',
  description: 'Learn about SwingyFy\'s enterprise-grade security measures including encryption, SOC 2 compliance, GDPR compliance, data protection, and security certifications.',
  keywords: 'HRMS security, data security, SOC 2 compliance, GDPR compliance, encryption, data protection, enterprise security, HR software security',
  openGraph: {
    title: 'Security - SwingyFy HRMS',
    description: 'Enterprise-grade security and compliance',
    url: 'https://swingyfy.com/security',
  },
}

const securityFeatures = [
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data is encrypted in transit and at rest using industry-standard AES-256 encryption.',
  },
  {
    icon: Shield,
    title: 'SOC 2 Type II Certified',
    description: 'We maintain SOC 2 Type II certification, ensuring the highest standards of security and availability.',
  },
  {
    icon: CheckCircle2,
    title: 'GDPR Compliant',
    description: 'Fully compliant with GDPR and other international data protection regulations.',
  },
  {
    icon: Server,
    title: 'Secure Infrastructure',
    description: 'Hosted on secure cloud infrastructure with regular security audits and penetration testing.',
  },
]

const securityPractices = [
  'Regular security audits and vulnerability assessments',
  'Multi-factor authentication (MFA) for all accounts',
  'Role-based access control (RBAC)',
  'Automated backup and disaster recovery',
  '24/7 security monitoring and threat detection',
  'Employee security training and background checks',
]

export default function SecurityPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Security & Compliance
          </h1>
          <p className="text-xl text-muted-grey max-w-3xl mx-auto">
            Enterprise-grade security to protect your sensitive HR and payroll data
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {securityFeatures.map((feature, index) => {
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
            <h2 className="text-3xl font-heading font-bold mb-6">Security Practices</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {securityPractices.map((practice, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success-green flex-shrink-0 mt-0.5" />
                  <span className="text-muted-grey">{practice}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-3xl font-heading font-bold mb-6">Compliance & Certifications</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-graphite-dark rounded-lg">
                <div className="text-3xl font-bold text-primary-pink mb-2">SOC 2</div>
                <div className="text-muted-grey text-sm">Type II Certified</div>
              </div>
              <div className="text-center p-6 bg-graphite-dark rounded-lg">
                <div className="text-3xl font-bold text-primary-pink mb-2">GDPR</div>
                <div className="text-muted-grey text-sm">Compliant</div>
              </div>
              <div className="text-center p-6 bg-graphite-dark rounded-lg">
                <div className="text-3xl font-bold text-primary-pink mb-2">ISO 27001</div>
                <div className="text-muted-grey text-sm">Certified</div>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Security Questions?</h2>
            <p className="text-muted-grey mb-8 max-w-2xl mx-auto">
              Our security team is available to answer any questions about our security practices and compliance.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300"
            >
              Contact Security Team
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

