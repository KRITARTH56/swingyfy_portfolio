'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

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
                  <p className="text-muted-grey">swingyfy@gmail.com</p>
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
                  <p className="text-muted-grey">+91 9076664984</p>
                  <p className="text-muted-grey">Mon-Fri 9am-6pm IST</p>
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
                  <p className="text-muted-grey">127/B, Chinhat</p>
                  <p className="text-muted-grey">Lucknow, Uttar Pradesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="glass rounded-2xl p-8">
      <h2 className="text-2xl font-heading font-bold mb-6">Send us a message</h2>
      
      {submitStatus === 'success' && (
        <div className="mb-6 p-4 bg-success-green/20 border border-success-green/30 rounded-lg">
          <p className="text-success-green">Thank you! Your message has been sent successfully.</p>
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg">
          <p className="text-red-400">Sorry, there was an error sending your message. Please try again.</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
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
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
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
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
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
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 bg-graphite-dark border border-white/10 rounded-lg focus:outline-none focus:border-primary-pink transition-colors resize-none"
            placeholder="Tell us more about your needs..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white font-semibold rounded-lg hover:shadow-pink-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

