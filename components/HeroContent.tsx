import Link from 'next/link'
import { ArrowRight, Play } from 'lucide-react'
import RatingsBadge from './RatingsBadge'
import FeatureCard from './FeatureCard'

// Server component for initial render - no client-side dependencies
export default function HeroContent() {
  const featureCards = [
    { icon: '💰', title: 'Payroll', color: 'from-primary-pink to-primary-pink-dark' },
    { icon: '📊', title: 'Analytics', color: 'from-primary-pink-dark to-success-green' },
    { icon: '⏰', title: 'Attendance', color: 'from-success-green to-accent-blue' },
    { icon: '👥', title: 'Recruitment', color: 'from-accent-blue to-primary-pink' },
    { icon: '📈', title: 'Performance', color: 'from-primary-pink to-primary-pink-dark' },
  ]

  return (
    <>
      {/* Left Column - Content */}
      <div className="opacity-100 relative z-30" style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 md:mb-6 leading-tight text-soft-white" style={{ opacity: 1, visibility: 'visible', display: 'block', color: '#F5F7FA' }}>
          <span className="text-soft-white" style={{ color: '#F5F7FA', opacity: 1, visibility: 'visible' }}>Modern HRMS to{' '}</span>
          <span className="bg-gradient-to-r from-primary-pink via-primary-pink-dark to-success-green bg-clip-text text-transparent inline-block" style={{ opacity: 1, visibility: 'visible' }}>
            Empower Growing Teams
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-grey mb-6 md:mb-8 leading-relaxed" style={{ opacity: 1, visibility: 'visible', display: 'block' }}>
          SwingyFy helps companies manage payroll, employees, attendance, hiring and productivity with automation and insights.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 mb-6 md:mb-8 relative z-30" style={{ display: 'flex', opacity: 1, visibility: 'visible' }}>
          <div className="relative z-30">
            <a
              href="https://app.swingyfy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-primary-pink to-primary-pink-dark text-white rounded-lg font-semibold hover:shadow-pink-glow transition-all duration-300 flex items-center justify-center gap-2 group overflow-hidden text-sm md:text-base z-30"
              style={{ display: 'flex', visibility: 'visible', opacity: 1 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Free Trial
                <ArrowRight className="w-5 h-5" />
              </span>
            </a>
          </div>
          <div className="relative z-30">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 glass border border-white/20 text-soft-white rounded-lg font-semibold hover:border-primary-pink transition-all duration-300 flex items-center justify-center gap-2 group relative overflow-hidden text-sm md:text-base z-30"
              style={{ display: 'flex', visibility: 'visible', opacity: 1 }}
            >
              <Play className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Book a Demo</span>
            </Link>
          </div>
        </div>

        {/* Rating Badges */}
        <div className="flex flex-wrap gap-4 relative z-30" style={{ display: 'flex', opacity: 1, visibility: 'visible' }}>
          <div>
            <RatingsBadge platform="G2" rating={4.7} />
          </div>
          <div>
            <RatingsBadge platform="Capterra" rating={4.6} />
          </div>
        </div>
      </div>

      {/* Right Column - Feature Cards */}
      <div className="grid grid-cols-2 gap-3 md:gap-4 mt-8 lg:mt-0 opacity-100 relative z-30" style={{ display: 'grid', opacity: 1, visibility: 'visible' }}>
        {featureCards.map((card) => (
          <div key={card.title}>
            <FeatureCard {...card} />
          </div>
        ))}
      </div>
    </>
  )
}

