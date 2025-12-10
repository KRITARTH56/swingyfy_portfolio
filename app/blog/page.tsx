import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Blog - SwingyFy HRMS | HR Insights, Tips & Best Practices',
  description: 'Read the latest articles on HR management, payroll best practices, employee engagement, recruitment strategies, and HR technology trends from SwingyFy.',
  keywords: 'HR blog, HRMS blog, HR tips, payroll best practices, employee management, recruitment strategies, HR technology, workplace productivity',
  openGraph: {
    title: 'Blog - SwingyFy HRMS',
    description: 'Latest insights on HR management and best practices',
    url: 'https://swingyfy.com/blog',
  },
}

const blogPosts = [
  {
    title: '10 Essential HR Metrics Every Manager Should Track',
    excerpt: 'Discover the key HR metrics that drive business success and help you make data-driven decisions for your workforce.',
    date: 'January 15, 2025',
    author: 'Sarah Johnson',
    category: 'HR Analytics',
  },
  {
    title: 'The Future of Remote Work: HR Strategies for 2025',
    excerpt: 'Learn how to build effective remote work policies and maintain team productivity in a distributed workforce.',
    date: 'January 10, 2025',
    author: 'Michael Chen',
    category: 'Remote Work',
  },
  {
    title: 'Payroll Automation: Saving Time and Reducing Errors',
    excerpt: 'Explore how automated payroll systems can streamline your processes and ensure compliance with tax regulations.',
    date: 'January 5, 2025',
    author: 'Emily Rodriguez',
    category: 'Payroll',
  },
  {
    title: 'Building a Strong Company Culture: A Complete Guide',
    excerpt: 'Practical strategies for creating an inclusive, engaging workplace culture that attracts and retains top talent.',
    date: 'December 28, 2024',
    author: 'David Kim',
    category: 'Culture',
  },
  {
    title: 'Recruitment Best Practices for Modern HR Teams',
    excerpt: 'Learn how to optimize your hiring process with modern recruitment tools and proven strategies.',
    date: 'December 20, 2024',
    author: 'Sarah Johnson',
    category: 'Recruitment',
  },
  {
    title: 'Employee Onboarding: Creating Memorable First Experiences',
    excerpt: 'Design an onboarding program that sets new hires up for success and improves retention rates.',
    date: 'December 15, 2024',
    author: 'Michael Chen',
    category: 'Onboarding',
  },
]

export default function BlogPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-muted-grey max-w-3xl mx-auto">
            Latest insights, tips, and best practices for HR professionals and business leaders
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link
                key={index}
                href="#"
                className="glass rounded-2xl p-6 hover:border-primary-pink transition-all duration-300 group"
              >
                <div className="mb-4">
                  <span className="px-3 py-1 bg-primary-pink/20 text-primary-pink rounded-full text-xs font-semibold">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-heading font-bold mb-3 group-hover:text-primary-pink transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted-grey mb-4 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-xs text-muted-grey mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {post.author}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-primary-pink font-semibold text-sm group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-grey mb-4">More articles coming soon!</p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300"
            >
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

