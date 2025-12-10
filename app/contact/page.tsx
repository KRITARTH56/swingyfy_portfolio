import type { Metadata } from 'next'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - SwingyFy HRMS',
  description: 'Get in touch with the SwingyFy team. We\'re here to help you transform your HR operations. Schedule a demo or reach out for support.',
  keywords: 'contact SwingyFy, HRMS support, schedule demo, HR software contact',
  openGraph: {
    title: 'Contact Us - SwingyFy HRMS',
    description: 'Get in touch with the SwingyFy team',
    url: 'https://swingyfy.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-grey max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8 hover:border-primary-pink transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-pink/20 rounded-lg">
                  <Mail className="w-6 h-6 text-primary-pink" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Email</h3>
                  <p className="text-muted-grey">hello@swingyfy.com</p>
                  <p className="text-muted-grey">support@swingyfy.com</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 hover:border-primary-pink transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-pink-dark/20 rounded-lg">
                  <Phone className="w-6 h-6 text-primary-pink-dark" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Phone</h3>
                  <p className="text-muted-grey">+1 (555) 123-4567</p>
                  <p className="text-muted-grey">Mon-Fri 9am-6pm EST</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8 hover:border-primary-pink transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-success-green/20 rounded-lg">
                  <MapPin className="w-6 h-6 text-success-green" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2">Office</h3>
                  <p className="text-muted-grey">123 Tech Street</p>
                  <p className="text-muted-grey">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8">
            <h2 className="text-2xl font-heading font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-graphite-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary-pink transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-graphite-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary-pink transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-graphite-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary-pink transition-colors"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-graphite-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary-pink transition-colors resize-none"
                  placeholder="Tell us more about your needs..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white font-semibold rounded-lg hover:shadow-pink-glow transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

