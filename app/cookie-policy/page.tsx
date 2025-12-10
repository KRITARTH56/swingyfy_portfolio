import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy - SwingyFy HRMS | Cookie Usage & Preferences',
  description: 'Learn about how SwingyFy uses cookies to improve your experience, analyze site usage, and provide personalized content. Manage your cookie preferences.',
  keywords: 'cookie policy, cookies, website cookies, tracking cookies, cookie preferences, GDPR cookies',
  openGraph: {
    title: 'Cookie Policy - SwingyFy HRMS',
    description: 'How we use cookies on our website',
    url: 'https://swingyfy.com/cookie-policy',
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
              Cookie Policy
            </h1>
            <p className="text-muted-grey">Last updated: January 1, 2025</p>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">What Are Cookies?</h2>
              <p className="text-muted-grey leading-relaxed">
                Cookies are small text files that are placed on your device when you visit our website. They help us provide you with a better experience by remembering your preferences and analyzing how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-soft-white">Essential Cookies</h3>
                  <p className="text-muted-grey leading-relaxed">
                    These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-soft-white">Analytics Cookies</h3>
                  <p className="text-muted-grey leading-relaxed">
                    We use analytics cookies to understand how visitors interact with our website, helping us improve our services and user experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-soft-white">Functional Cookies</h3>
                  <p className="text-muted-grey leading-relaxed">
                    These cookies remember your preferences and choices to provide a more personalized experience.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Managing Cookies</h2>
              <p className="text-muted-grey leading-relaxed mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc list-inside text-muted-grey space-y-2 ml-4">
                <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                <li>Cookie preferences: Use our cookie preference center to manage your choices</li>
                <li>Third-party tools: Use browser extensions to block tracking cookies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Third-Party Cookies</h2>
              <p className="text-muted-grey leading-relaxed">
                We may use third-party services that set cookies on our website, such as analytics providers. These cookies are subject to the respective third-party privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">Contact Us</h2>
              <p className="text-muted-grey leading-relaxed">
                If you have questions about our use of cookies, please contact us at{' '}
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

