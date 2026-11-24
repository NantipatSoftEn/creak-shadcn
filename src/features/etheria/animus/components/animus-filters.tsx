import { type AnimusSearch } from '@/routes/_authenticated/animus'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { GameImage } from '../../components/game-image'
import { attrs, rarities } from '../../data'
import { attrImageUrl } from '../../data/images'

type AnimusFiltersProps = {
  search: AnimusSearch
  navigate: (opts: {
    search: (prev: AnimusSearch) => AnimusSearch
    replace?: boolean
  }) => void
}

function toggle(list: number[] | undefined, value: number) {
  const current = list ?? []
  const next = current.includes(value)
    ? current.filter((v) => v !== value)
    : [...current, value]
  return next.length ? next : undefined
}

export function AnimusFilters({ search, navigate }: AnimusFiltersProps) {
  const { q = '', attr = [], rarity = [], sort = 'rarity' } = search
  const update = (patch: Partial<AnimusSearch>) =>
    navigate({ search: (prev) => ({ ...prev, ...patch }), replace: true })
  const isFiltered = q !== '' || attr.length > 0 || rarity.length > 0

  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-wrap items-center gap-2'>
        <Input
          placeholder='ค้นหาชื่อหรือฉายา...'
          value={q}
          onChange={(e) => update({ q: e.target.value || undefined })}
          className='h-8 w-full sm:w-64'
        />
        <Select
          value={sort}
          onValueChange={(value) =>
            update({ sort: value as AnimusSearch['sort'] })
          }
        >
          <SelectTrigger size='sm' className='w-48' aria-label='เรียงตาม'>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='rarity'>เรียงตามความหายาก</SelectItem>
            <SelectItem value='name'>เรียงตามชื่อ (A–Z)</SelectItem>
          </SelectContent>
        </Select>
        {isFiltered && (
          <Button
            variant='ghost'
            size='sm'
            className='h-8'
            onClick={() =>
              update({ q: undefined, attr: undefined, rarity: undefined })
            }
          >
            ล้างตัวกรอง
            <X className='ms-1 size-4' />
          </Button>
        )}
      </div>

      <div className='flex flex-wrap items-center gap-x-4 gap-y-2'>
        <div className='flex flex-wrap items-center gap-1.5'>
          <span className='me-1 text-sm text-muted-foreground'>ธาตุ</span>
          {attrs.map((a) => {
            const active = attr.includes(a.id)
            return (
              <button
                key={a.id}
                type='button'
                aria-pressed={active}
                onClick={() => update({ attr: toggle(attr, a.id) })}
                className={cn(
                  'inline-flex h-7 items-center gap-1.5 rounded-full border px-3 text-xs font-medium transition-colors',
                  active
                    ? cn(a.accentClass, 'border-transparent text-white')
                    : 'hover:bg-accent'
                )}
              >
                <GameImage
                  src={attrImageUrl(a.id)}
                  alt=''
                  fallback={null}
                  className='size-4 object-contain'
                />
                {a.name}
              </button>
            )
          })}
        </div>
        <div className='flex flex-wrap items-center gap-1.5'>
          <span className='me-1 text-sm text-muted-foreground'>ความหายาก</span>
          {rarities.map((r) => {
            const active = rarity.includes(r)
            return (
              <button
                key={r}
                type='button'
                aria-pressed={active}
                onClick={() => update({ rarity: toggle(rarity, r) })}
                className={cn(
                  'h-7 rounded-full border px-3 text-xs font-medium transition-colors',
                  active
                    ? 'border-transparent bg-primary text-primary-foreground'
                    : 'hover:bg-accent'
                )}
              >
                {r} ★
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
