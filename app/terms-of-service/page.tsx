import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service - SwingyFy HRMS | Legal Terms & Conditions',
  description: 'Read SwingyFy\'s Terms of Service to understand the terms and conditions for using our HRMS platform, including user responsibilities, service limitations, and legal agreements.',
  keywords: 'terms of service, terms and conditions, user agreement, HRMS terms, legal terms, service agreement',
  openGraph: {
    title: 'Terms of Service - SwingyFy HRMS',
    description: 'Terms and conditions for using SwingyFy',
    url: 'https://swingyfy.com/terms-of-service',
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-muted-grey">Last updated: January 1, 2025</p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-grey leading-relaxed">
                By accessing and using SwingyFy HRMS, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">2. Description of Service</h2>
              <p className="text-muted-grey leading-relaxed">
                SwingyFy provides cloud-based Human Resources Management System (HRMS) software including payroll processing, employee management, attendance tracking, and related HR services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">3. User Accounts</h2>
              <p className="text-muted-grey leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-grey space-y-2 ml-4">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Providing accurate and complete information</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">4. Payment Terms</h2>
              <p className="text-muted-grey leading-relaxed mb-4">
                Subscription fees are billed monthly or annually based on your selected plan. You agree to pay all fees associated with your account. We reserve the right to change our pricing with 30 days notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">5. Service Availability</h2>
              <p className="text-muted-grey leading-relaxed">
                We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. We may perform maintenance that temporarily affects service availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-grey leading-relaxed">
                SwingyFy shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">7. Contact Information</h2>
              <p className="text-muted-grey leading-relaxed">
                For questions about these Terms of Service, contact us at{' '}
                <a href="mailto:legal@swingyfy.com" className="text-primary-pink hover:text-primary-pink-dark">
                  legal@swingyfy.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

