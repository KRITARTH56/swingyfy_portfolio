interface RatingsBadgeProps {
  platform: 'G2' | 'Capterra'
  rating: number
}

export default function RatingsBadge({ platform, rating }: RatingsBadgeProps) {
  return (
    <div className="glass rounded-lg p-4 flex items-center gap-3 hover:border-primary-pink transition-all duration-300">
      <div className="text-amber-glow font-bold text-lg">{rating}</div>
      <div>
        <div className="flex gap-1 mb-1">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-amber-glow text-sm">⭐</span>
          ))}
        </div>
        <div className="text-xs text-muted-grey">
          {rating} rating on {platform}
        </div>
      </div>
    </div>
  )
}












