import type { Metadata } from 'next'
import { Video, Calendar, Clock, Users } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Webinars - SwingyFy HRMS | Free HR Training & Workshops',
  description: 'Join free webinars on HR best practices, payroll management, recruitment strategies, and HR technology. Learn from industry experts and improve your HR skills.',
  keywords: 'HR webinars, HR training, payroll webinars, HR workshops, free HR courses, HR education, HR best practices training',
  openGraph: {
    title: 'Webinars - SwingyFy HRMS',
    description: 'Free HR training webinars and workshops',
    url: 'https://swingyfy.com/webinars',
  },
}

const upcomingWebinars = [
  {
    title: 'Mastering Payroll Automation: A Complete Guide',
    date: 'February 15, 2025',
    time: '2:00 PM EST',
    duration: '60 minutes',
    speaker: 'Sarah Johnson, HR Director',
    description: 'Learn how to automate your payroll process and reduce errors by 90%.',
  },
  {
    title: 'Building High-Performance Teams in 2025',
    date: 'February 22, 2025',
    time: '3:00 PM EST',
    duration: '45 minutes',
    speaker: 'Michael Chen, People Ops Expert',
    description: 'Strategies for building and managing high-performing remote and hybrid teams.',
  },
  {
    title: 'HR Compliance: Staying Ahead of Regulations',
    date: 'March 1, 2025',
    time: '1:00 PM EST',
    duration: '60 minutes',
    speaker: 'Emily Rodriguez, Compliance Specialist',
    description: 'Navigate the latest HR regulations and ensure your company stays compliant.',
  },
]

const pastWebinars = [
  {
    title: 'Introduction to Modern HRMS',
    date: 'January 10, 2025',
    description: 'Learn the fundamentals of modern HR management systems.',
  },
  {
    title: 'Recruitment Best Practices',
    date: 'December 15, 2024',
    description: 'Optimize your hiring process with proven recruitment strategies.',
  },
  {
    title: 'Employee Engagement Strategies',
    date: 'November 20, 2024',
    description: 'Boost employee satisfaction and retention with engagement tactics.',
  },
]

export default function WebinarsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Webinars
          </h1>
          <p className="text-xl text-muted-grey max-w-3xl mx-auto">
            Free educational webinars on HR best practices, payroll management, and more
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold mb-8 flex items-center gap-3">
              <Video className="w-8 h-8 text-primary-pink" />
              Upcoming Webinars
            </h2>
            <div className="space-y-6">
              {upcomingWebinars.map((webinar, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 md:p-8 hover:border-primary-pink transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold mb-3">{webinar.title}</h3>
                      <p className="text-muted-grey mb-4">{webinar.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-grey">
                        <span className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {webinar.date}
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {webinar.time} ({webinar.duration})
                        </span>
                        <span className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {webinar.speaker}
                        </span>
                      </div>
                    </div>
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300 whitespace-nowrap"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-heading font-bold mb-8">Past Webinars</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {pastWebinars.map((webinar, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 hover:border-primary-pink transition-all duration-300"
                >
                  <div className="text-sm text-muted-grey mb-2">{webinar.date}</div>
                  <h3 className="text-lg font-heading font-semibold mb-2">{webinar.title}</h3>
                  <p className="text-muted-grey text-sm mb-4">{webinar.description}</p>
                  <a
                    href="/contact"
                    className="text-primary-pink hover:text-primary-pink-dark font-semibold text-sm"
                  >
                    Watch Recording →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Stay Updated</h2>
            <p className="text-muted-grey mb-8 max-w-2xl mx-auto">
              Subscribe to get notified about upcoming webinars and access exclusive content.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300"
            >
              Subscribe to Webinars
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

