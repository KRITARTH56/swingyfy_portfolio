import type { Metadata } from 'next'
import { Briefcase, MapPin, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers - SwingyFy HRMS | Join Our Team',
  description: 'Join the SwingyFy team and help shape the future of HR technology. Explore open positions in engineering, product, sales, marketing, and customer success.',
  keywords: 'SwingyFy careers, HRMS jobs, software engineering jobs, remote jobs, tech careers, HR software careers',
  openGraph: {
    title: 'Careers - SwingyFy HRMS',
    description: 'Join our team and build the future of HR technology',
    url: 'https://swingyfy.com/careers',
  },
}

const openPositions = [
  {
    title: 'Senior Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote / San Francisco',
    type: 'Full-time',
    description: 'Build scalable features for our HRMS platform using React, Node.js, and modern cloud technologies.',
  },
  {
    title: 'Product Manager',
    department: 'Product',
    location: 'Remote / New York',
    type: 'Full-time',
    description: 'Lead product strategy and work with cross-functional teams to deliver exceptional HR solutions.',
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Remote',
    type: 'Full-time',
    description: 'Help customers maximize the value of SwingyFy and ensure their success with our platform.',
  },
  {
    title: 'Sales Development Representative',
    department: 'Sales',
    location: 'Remote / Austin',
    type: 'Full-time',
    description: 'Identify and qualify new business opportunities in the HRMS market.',
  },
]

const benefits = [
  { icon: Users, title: 'Great Team', description: 'Work with talented, passionate people' },
  { icon: Briefcase, title: 'Growth Opportunities', description: 'Advance your career with us' },
  { icon: MapPin, title: 'Remote First', description: 'Work from anywhere in the world' },
  { icon: Clock, title: 'Flexible Hours', description: 'Balance work and life your way' },
]

export default function CareersPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-muted-grey max-w-3xl mx-auto">
            Help us build the future of HR technology. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={benefit.title} className="glass rounded-2xl p-6 hover:border-primary-pink transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary-pink/20 rounded-lg">
                      <Icon className="w-6 h-6 text-primary-pink" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-grey">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-8">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover:border-primary-pink transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold mb-2">{position.title}</h3>
                      <p className="text-muted-grey mb-3">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-grey">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300 whitespace-nowrap"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Don't See a Role That Fits?</h2>
            <p className="text-muted-grey mb-8 max-w-2xl mx-auto">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

