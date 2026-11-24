import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

export function RarityStars({
  rarity,
  className,
}: {
  rarity: number
  className?: string
}) {
  return (
    <span
      className={cn('inline-flex items-center gap-0.5', className)}
      aria-label={`${rarity} ดาว`}
      title={`${rarity} ดาว`}
    >
      {Array.from({ length: rarity }, (_, i) => (
        <Star
          key={i}
          className='size-3.5 fill-amber-400 text-amber-400'
          aria-hidden
        />
      ))}
    </span>
  )
}
