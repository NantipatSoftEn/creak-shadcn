import { cn } from '@/lib/utils'
import { attrById } from '../data'
import { attrImageUrl } from '../data/images'
import { GameImage } from './game-image'

export function AttrBadge({
  attr,
  className,
}: {
  attr: number
  className?: string
}) {
  const meta = attrById.get(attr)
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-xs font-medium whitespace-nowrap',
        meta?.badgeClass ?? 'bg-muted text-muted-foreground',
        className
      )}
    >
      <GameImage
        src={attrImageUrl(attr)}
        alt=''
        fallback={null}
        className='size-3.5 object-contain'
      />
      {meta?.name ?? `ธาตุ ${attr}`}
    </span>
  )
}
