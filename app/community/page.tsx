import type { Metadata } from 'next'
import { Users, MessageSquare, Trophy, Calendar } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community - SwingyFy HRMS | Connect with HR Professionals',
  description: 'Join the SwingyFy community of HR professionals. Share best practices, get advice, participate in discussions, and connect with peers in the HR industry.',
  keywords: 'HR community, HRMS community, HR professionals network, HR forum, HR discussions, HR best practices, HR networking',
  openGraph: {
    title: 'Community - SwingyFy HRMS',
    description: 'Join our community of HR professionals',
    url: 'https://swingyfy.com/community',
  },
}

const communityFeatures = [
  {
    icon: Users,
    title: 'Active Community',
    description: 'Connect with thousands of HR professionals sharing insights and best practices.',
  },
  {
    icon: MessageSquare,
    title: 'Discussions',
    description: 'Participate in forums covering payroll, recruitment, compliance, and more.',
  },
  {
    icon: Trophy,
    title: 'Success Stories',
    description: 'Learn from real-world implementations and success stories from peers.',
  },
  {
    icon: Calendar,
    title: 'Events',
    description: 'Join webinars, workshops, and networking events organized by the community.',
  },
]

export default function CommunityPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Community
          </h1>
          <p className="text-xl text-muted-grey max-w-3xl mx-auto">
            Join thousands of HR professionals sharing knowledge, best practices, and insights
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {communityFeatures.map((feature, index) => {
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
            <h2 className="text-3xl font-heading font-bold mb-6">Popular Discussion Topics</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                'Payroll Best Practices',
                'Recruitment Strategies',
                'Employee Engagement',
                'HR Compliance',
                'Performance Management',
                'Remote Work Policies',
              ].map((topic) => (
                <div
                  key={topic}
                  className="p-4 bg-graphite-dark rounded-lg hover:bg-primary-pink/10 transition-colors cursor-pointer"
                >
                  <span className="text-soft-white font-medium">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">Join the Community</h2>
            <p className="text-muted-grey mb-8 max-w-2xl mx-auto">
              Connect with HR professionals, share experiences, and learn from the community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300"
              >
                Join Now
              </a>
              <a
                href="/contact"
                className="px-8 py-4 glass border border-white/20 text-soft-white rounded-lg font-semibold hover:border-primary-pink transition-all duration-300"
              >
                View Forum
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

