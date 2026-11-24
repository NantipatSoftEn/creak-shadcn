import { Link } from '@tanstack/react-router'
import { cn } from '@/lib/utils'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { AttrBadge } from '../components/attr-badge'
import { EtheriaPage } from '../components/etheria-page'
import { animusList, attrs, rarities } from '../data'

const count = (attr?: number, rarity?: number) =>
  animusList.filter(
    (a) =>
      (attr === undefined || a.attr === attr) &&
      (rarity === undefined || a.rarity === rarity)
  ).length

const maxCell = Math.max(
  ...attrs.flatMap((a) => rarities.map((r) => count(a.id, r)))
)

function CountLink({
  value,
  attr,
  rarity,
  heat = false,
}: {
  value: number
  attr?: number
  rarity?: number
  heat?: boolean
}) {
  if (value === 0) {
    return (
      <span className='block py-2 text-center text-muted-foreground'>–</span>
    )
  }
  // opacity steps for a simple heat-map shade
  const level = Math.ceil((value / maxCell) * 4)
  return (
    <Link
      to='/animus'
      search={{
        attr: attr === undefined ? undefined : [attr],
        rarity: rarity === undefined ? undefined : [rarity],
      }}
      className={cn(
        'block rounded-md py-2 text-center font-medium tabular-nums transition-colors hover:ring-2 hover:ring-ring/50',
        heat &&
          [
            'bg-primary/5',
            'bg-primary/10',
            'bg-primary/20',
            'bg-primary/30',
            'bg-primary/40',
          ][level]
      )}
      title={`ดู Animus ${value} ตัว`}
    >
      {value}
    </Link>
  )
}

export function AttrMatrixPage() {
  return (
    <EtheriaPage
      title='เมทริกซ์ธาตุ'
      description='จำนวน Animus ที่เล่นได้ แยกตามธาตุและความหายาก — คลิกตัวเลขเพื่อดูรายชื่อ'
    >
      <div className='max-w-2xl overflow-x-auto rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ธาตุ</TableHead>
              {rarities.map((r) => (
                <TableHead key={r} className='w-24 text-center'>
                  {r} ★
                </TableHead>
              ))}
              <TableHead className='w-24 text-center'>รวม</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attrs.map((a) => (
              <TableRow key={a.id}>
                <TableCell>
                  <AttrBadge attr={a.id} />
                </TableCell>
                {rarities.map((r) => (
                  <TableCell key={r} className='p-1'>
                    <CountLink
                      value={count(a.id, r)}
                      attr={a.id}
                      rarity={r}
                      heat
                    />
                  </TableCell>
                ))}
                <TableCell className='p-1'>
                  <CountLink value={count(a.id)} attr={a.id} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell>รวม</TableCell>
              {rarities.map((r) => (
                <TableCell key={r} className='p-1'>
                  <CountLink value={count(undefined, r)} rarity={r} />
                </TableCell>
              ))}
              <TableCell className='p-1'>
                <CountLink value={count()} />
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </EtheriaPage>
  )
}
