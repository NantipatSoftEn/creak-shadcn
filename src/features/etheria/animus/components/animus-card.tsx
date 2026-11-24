import { cn } from '@/lib/utils'
import { AttrBadge } from '../../components/attr-badge'
import { GameImage } from '../../components/game-image'
import { RarityStars } from '../../components/rarity-stars'
import { attrById } from '../../data'
import { animusImageUrl } from '../../data/images'
import { type Animus } from '../../data/types'

type AnimusCardProps = {
  animus: Animus
  onSelect: () => void
}

export function AnimusCard({ animus, onSelect }: AnimusCardProps) {
  const attr = attrById.get(animus.attr)
  return (
    <button
      type='button'
      onClick={onSelect}
      className='group relative flex items-center gap-3 overflow-hidden rounded-xl border bg-card p-3 text-start shadow-xs transition-colors hover:bg-accent focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-none'
    >
      <span
        className={cn(
          'absolute inset-y-0 start-0 w-1',
          attr?.accentClass ?? 'bg-muted'
        )}
        aria-hidden
      />
      <GameImage
        src={animusImageUrl(animus.id)}
        alt={animus.name}
        className='size-14 shrink-0 rounded-lg bg-muted'
        fallback={
          <span
            className={cn(
              'flex size-14 shrink-0 items-center justify-center rounded-lg text-lg font-semibold text-white',
              attr?.accentClass ?? 'bg-muted'
            )}
            aria-hidden
          >
            {animus.name.slice(0, 2)}
          </span>
        }
      />
      <span className='flex min-w-0 flex-1 flex-col gap-1'>
        <span className='truncate font-semibold'>{animus.nameTh}</span>
        <span className='truncate text-sm text-muted-foreground'>
          {animus.titleTh}
        </span>
        <span className='flex items-center gap-2'>
          <AttrBadge attr={animus.attr} />
          <RarityStars rarity={animus.rarity} />
        </span>
      </span>
    </button>
  )
}
