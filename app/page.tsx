import Hero from '@/components/Hero'
import FeaturesGrid from '@/components/FeaturesGrid'
import TrustBar from '@/components/TrustBar'
import WhySwingyFy from '@/components/WhySwingyFy'
import PricingPreview from '@/components/PricingPreview'
import TestimonialSlider from '@/components/TestimonialSlider'

export default function Home() {
  return (
    <div className="bg-deep-charcoal min-h-screen w-full">
      <div className="w-full">
        <Hero />
      </div>
      <div className="w-full">
        <TrustBar />
      </div>
      <div className="w-full">
        <FeaturesGrid />
      </div>
      <div className="w-full">
        <WhySwingyFy />
      </div>
      <div className="w-full">
        <PricingPreview />
      </div>
      <div className="w-full">
        <TestimonialSlider />
      </div>
    </div>
  )
}

