import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - SwingyFy HRMS | Data Protection & Privacy',
  description: 'Read SwingyFy\'s privacy policy to understand how we collect, use, and protect your personal information and employee data. GDPR and SOC 2 compliant.',
  keywords: 'privacy policy, data protection, GDPR compliance, employee data privacy, HRMS privacy, data security, privacy rights',
  openGraph: {
    title: 'Privacy Policy - SwingyFy HRMS',
    description: 'How we protect your privacy and data',
    url: 'https://swingyfy.com/privacy-policy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-muted-grey">Last updated: January 1, 2025</p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-grey leading-relaxed mb-4">
                SwingyFy ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our HRMS platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-grey leading-relaxed mb-4">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-muted-grey space-y-2 ml-4">
                <li>Company and employee information</li>
                <li>Payroll and financial data</li>
                <li>Contact information</li>
                <li>Usage data and analytics</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-grey leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-grey space-y-2 ml-4">
                <li>Provide and maintain our HRMS services</li>
                <li>Process payroll and manage employee data</li>
                <li>Improve our platform and develop new features</li>
                <li>Comply with legal obligations</li>
                <li>Send important updates and communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-grey leading-relaxed">
                We implement industry-standard security measures including encryption, access controls, and regular security audits. We are SOC 2 Type II certified and GDPR compliant.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">5. Your Rights</h2>
              <p className="text-muted-grey leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-grey space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">6. Contact Us</h2>
              <p className="text-muted-grey leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@swingyfy.com" className="text-primary-pink hover:text-primary-pink-dark">
                  privacy@swingyfy.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

