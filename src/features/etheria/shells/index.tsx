import { useState } from 'react'
import {
  type ColumnFiltersState,
  type SortingState,
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { DataTableToolbar } from '@/components/data-table'
import { EtheriaPage } from '../components/etheria-page'
import { shells } from '../data'
import { shellsColumns as columns } from './components/shells-columns'

const shellTypes = [...new Set(shells.map((s) => s.type))].sort()

export function ShellsPage() {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'atk', desc: true },
  ])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  // eslint-disable-next-line react-hooks/incompatible-library
  const table = useReactTable({
    data: shells,
    columns,
    state: { sorting, columnFilters },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  })

  return (
    <EtheriaPage
      title='Shell'
      description={`Shell 5 ดาวทั้งหมด ${shells.length} ตัว ค่าสถานะตอนเลเวลเต็ม (ร่างขั้นสูง + imprint)`}
    >
      <div className='flex flex-1 flex-col gap-4'>
        <DataTableToolbar
          table={table}
          searchPlaceholder='ค้นหาชื่อ Shell...'
          searchKey='name'
          filters={[
            {
              columnId: 'type',
              title: 'ประเภท',
              options: shellTypes.map((t) => ({
                label: `ประเภท ${t}`,
                value: String(t),
              })),
            },
          ]}
        />
        <div className='overflow-x-auto rounded-md border'>
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className='align-top'>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className='h-24 text-center'
                  >
                    ไม่พบ Shell
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <p className='text-xs text-muted-foreground'>
          ข้อมูลในเกมไม่มีชื่อ Set ที่อ่านได้ จึงแสดงเป็นหมายเลข Set พร้อมโบนัสขั้นแรก —
          วางเมาส์บน Set เพื่อดูโบนัสทุกขั้น
        </p>
      </div>
    </EtheriaPage>
  )
}
