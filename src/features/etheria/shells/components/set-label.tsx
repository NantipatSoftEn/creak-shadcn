import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { formatPropValue, shellSets } from '../../data'
import { type ShellSet } from '../../data/types'

// The client data has no readable set names (their text keys point to quest
// strings), so a set is labelled by its id and its first-tier bonus.
function setSummary(set: ShellSet) {
  const first = set.bonuses[0]
  if (!first) return `ชุด ${set.id}`
  const effect = first.props
    .map((p) => `${p.nameTh} +${formatPropValue(p, p.value)}`)
    .join(', ')
  return effect
}

export function SetBonusList({ set }: { set: ShellSet }) {
  return (
    <ul className='flex flex-col gap-0.5'>
      {set.bonuses.map((b) => (
        <li key={b.pieces}>
          <span className='font-medium'>{b.pieces} ชิ้น:</span>{' '}
          {b.props
            .map((p) => `${p.nameTh} +${formatPropValue(p, p.value)}`)
            .join(', ')}
        </li>
      ))}
    </ul>
  )
}

export function SetChip({ setId }: { setId: number }) {
  const set = shellSets.get(setId)
  if (!set) return null
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className='inline-flex cursor-default items-center gap-1 rounded-md border px-1.5 py-0.5 text-xs whitespace-nowrap'>
          <span className='text-muted-foreground'>#{set.id}</span>
          {setSummary(set)}
        </span>
      </TooltipTrigger>
      <TooltipContent className='text-xs'>
        <SetBonusList set={set} />
      </TooltipContent>
    </Tooltip>
  )
}
