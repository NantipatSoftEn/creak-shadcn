import { type ColumnDef } from '@tanstack/react-table'
import { DataTableColumnHeader } from '@/components/data-table'
import { GameImage } from '../../components/game-image'
import { shellImageUrl } from '../../data/images'
import { type Shell } from '../../data/types'
import { SetChip } from './set-label'

const statColumn = (
  key: 'hp' | 'atk' | 'def' | 'spd',
  title: string
): ColumnDef<Shell> => ({
  accessorKey: key,
  header: ({ column }) => (
    <DataTableColumnHeader column={column} title={title} />
  ),
  cell: ({ row }) => (
    <div className='ps-3 tabular-nums'>
      {row.original[key].toLocaleString()}
    </div>
  ),
  enableHiding: false,
  sortDescFirst: true,
})

export const shellsColumns: ColumnDef<Shell>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='ชื่อ' />
    ),
    cell: ({ row }) => (
      <div className='flex items-center gap-3 ps-3 font-medium whitespace-nowrap'>
        <GameImage
          src={shellImageUrl(row.original.id)}
          alt=''
          className='size-10 shrink-0 rounded-md bg-muted'
          fallback={<span className='size-10 shrink-0 rounded-md bg-muted' />}
        />
        {row.original.nameTh}
      </div>
    ),
    filterFn: (row, _id, value: string) => {
      const needle = value.trim().toLowerCase()
      return (
        row.original.name.toLowerCase().includes(needle) ||
        row.original.nameTh.toLowerCase().includes(needle)
      )
    },
    enableHiding: false,
  },
  {
    accessorKey: 'type',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='ประเภท' />
    ),
    cell: ({ row }) => <div className='ps-3'>{row.original.type}</div>,
    filterFn: (row, id, value: string[]) =>
      value.includes(String(row.getValue(id))),
    enableHiding: false,
  },
  statColumn('hp', 'HP'),
  statColumn('atk', 'ATK'),
  statColumn('def', 'DEF'),
  statColumn('spd', 'SPD'),
  {
    id: 'sets',
    header: 'Set ที่สุ่มได้',
    cell: ({ row }) => (
      <div className='flex min-w-72 flex-wrap gap-1'>
        {row.original.setIds.map((id) => (
          <SetChip key={id} setId={id} />
        ))}
      </div>
    ),
    enableSorting: false,
  },
]
