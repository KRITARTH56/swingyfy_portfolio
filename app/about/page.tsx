import type { Metadata } from 'next'
import { Users, Target, Zap, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - SwingyFy HRMS',
  description: 'Learn about SwingyFy - our mission to empower growing teams with modern HRMS solutions. We\'re building the future of HR management.',
  keywords: 'about SwingyFy, HRMS company, HR software company, about us',
  openGraph: {
    title: 'About Us - SwingyFy HRMS',
    description: 'Learn about SwingyFy and our mission',
    url: 'https://swingyfy.com/about',
  },
}

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32 pb-12 md:pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            About SwingyFy
          </h1>
          <p className="text-base md:text-xl text-muted-grey max-w-2xl mx-auto px-4">
            Empowering growing teams with modern HRMS solutions
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="glass rounded-2xl p-6 md:p-8 lg:p-12 mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 md:mb-6">Our Mission</h2>
            <p className="text-base md:text-lg text-muted-grey leading-relaxed mb-4">
              At SwingyFy, we believe that great companies are built by great teams. Our mission is to provide modern, intuitive HRMS solutions that empower organizations to focus on what matters most - their people.
            </p>
            <p className="text-base md:text-lg text-muted-grey leading-relaxed">
              We're committed to making HR management simple, automated, and insightful, so you can build a workplace where people thrive and businesses grow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12">
            <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary-pink transition-all duration-300">
              <div className="p-3 md:p-4 bg-primary-pink/20 rounded-lg w-fit mb-4">
                <Target className="w-6 h-6 md:w-8 md:h-8 text-primary-pink" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">Our Vision</h3>
              <p className="text-sm md:text-base text-muted-grey">
                To become the leading HRMS platform that transforms how companies manage their workforce, making HR operations seamless and people-focused.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 md:p-8 hover:border-primary-pink-dark transition-all duration-300">
              <div className="p-3 md:p-4 bg-primary-pink-dark/20 rounded-lg w-fit mb-4">
                <Zap className="w-6 h-6 md:w-8 md:h-8 text-primary-pink-dark" />
              </div>
              <h3 className="text-xl md:text-2xl font-heading font-bold mb-3">Our Values</h3>
              <p className="text-sm md:text-base text-muted-grey">
                Innovation, reliability, and people-first approach drive everything we do. We're committed to delivering solutions that make a real difference.
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 md:p-8 lg:p-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold mb-6 md:mb-8 text-center">Why Choose SwingyFy?</h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-pink/20 rounded-lg">
                  <Users className="w-6 h-6 text-primary-pink" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">People-Focused</h4>
                  <p className="text-sm text-muted-grey">Built with HR professionals and employees in mind</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-accent-blue/20 rounded-lg">
                  <Zap className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Automation First</h4>
                  <p className="text-sm text-muted-grey">Streamline processes with intelligent automation</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-success-green/20 rounded-lg">
                  <Target className="w-6 h-6 text-success-green" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Data-Driven</h4>
                  <p className="text-sm text-muted-grey">Make informed decisions with powerful analytics</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 bg-primary-pink-dark/20 rounded-lg">
                  <Heart className="w-6 h-6 text-primary-pink-dark" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Customer Success</h4>
                  <p className="text-sm text-muted-grey">Dedicated support to help you succeed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

