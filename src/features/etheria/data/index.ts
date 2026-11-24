import animusJson from './animus.json'
import setsJson from './sets.json'
import shellsJson from './shells.json'
import { type Animus, type PropRef, type Shell, type ShellSet } from './types'

export const animusList = animusJson as Animus[]
export const shells = shellsJson as Shell[]
export const shellSets = new Map((setsJson as ShellSet[]).map((s) => [s.id, s]))
export const animusById = new Map(animusList.map((a) => [a.id, a]))

export type AttrMeta = {
  id: number
  name: string
  /** classes for a small solid badge */
  badgeClass: string
  /** classes for the card's accent stripe / avatar */
  accentClass: string
}

// The client data has no attribute name table. Ids are matched through each
// unit's internal name suffix (e.g. "Helkid_Light" -> attr 1); display names
// follow the element icons in Supabase Storage (ele_reason, ele_odd, ...).
export const attrs: AttrMeta[] = [
  {
    id: 1,
    name: 'Reason',
    badgeClass: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
    accentClass: 'bg-amber-500',
  },
  {
    id: 2,
    name: 'Odd',
    badgeClass: 'bg-violet-500/15 text-violet-700 dark:text-violet-300',
    accentClass: 'bg-violet-500',
  },
  {
    id: 3,
    name: 'Hollow',
    badgeClass: 'bg-sky-500/15 text-sky-700 dark:text-sky-300',
    accentClass: 'bg-sky-500',
  },
  {
    id: 4,
    name: 'Disorder',
    badgeClass: 'bg-rose-500/15 text-rose-700 dark:text-rose-300',
    accentClass: 'bg-rose-500',
  },
  {
    id: 5,
    name: 'Constant',
    badgeClass: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
    accentClass: 'bg-emerald-500',
  },
]

export const attrById = new Map(attrs.map((a) => [a.id, a]))

/** rarities that actually occur among playable Animus, high to low */
export const rarities = [...new Set(animusList.map((a) => a.rarity))].sort(
  (a, b) => b - a
)

export function formatPropValue(prop: PropRef, value: number) {
  if (prop.isRate) return `${Number((value * 100).toFixed(1))}%`
  return value.toLocaleString()
}
