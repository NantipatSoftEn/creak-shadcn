import { useMemo } from 'react'
import { getRouteApi } from '@tanstack/react-router'
import { EtheriaPage } from '../components/etheria-page'
import { animusById, animusList } from '../data'
import { AnimusCard } from './components/animus-card'
import { AnimusDetailDialog } from './components/animus-detail-dialog'
import { AnimusFilters } from './components/animus-filters'

const route = getRouteApi('/_authenticated/animus/')

export function AnimusPage() {
  const search = route.useSearch()
  const navigate = route.useNavigate()
  const { q = '', attr = [], rarity = [], sort = 'rarity', id } = search

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase()
    const list = animusList.filter(
      (a) =>
        (attr.length === 0 || attr.includes(a.attr)) &&
        (rarity.length === 0 || rarity.includes(a.rarity)) &&
        (!needle ||
          [a.name, a.nameTh, a.title, a.titleTh].some((s) =>
            s.toLowerCase().includes(needle)
          ))
    )
    return sort === 'name'
      ? [...list].sort((a, b) => a.name.localeCompare(b.name))
      : list // already sorted by rarity (desc) then id
  }, [q, attr, rarity, sort])

  const selected = id === undefined ? undefined : animusById.get(id)

  return (
    <EtheriaPage
      title='Animus'
      description={`รายชื่อ Animus ที่เล่นได้ทั้งหมด ${animusList.length} ตัว`}
    >
      <AnimusFilters search={search} navigate={navigate} />

      <p className='text-sm text-muted-foreground'>
        แสดง {filtered.length} จาก {animusList.length} ตัว
      </p>

      {filtered.length === 0 ? (
        <div className='rounded-lg border border-dashed p-10 text-center text-muted-foreground'>
          ไม่พบ Animus ที่ตรงกับตัวกรอง
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {filtered.map((a) => (
            <AnimusCard
              key={a.id}
              animus={a}
              onSelect={() =>
                navigate({ search: (prev) => ({ ...prev, id: a.id }) })
              }
            />
          ))}
        </div>
      )}

      <AnimusDetailDialog
        animus={selected}
        onOpenAnimus={(nextId) =>
          navigate({ search: (prev) => ({ ...prev, id: nextId }) })
        }
        onClose={() =>
          navigate({ search: (prev) => ({ ...prev, id: undefined }) })
        }
      />
    </EtheriaPage>
  )
}
