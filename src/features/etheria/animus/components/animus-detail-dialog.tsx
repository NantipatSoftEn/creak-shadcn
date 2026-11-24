import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { AttrBadge } from '../../components/attr-badge'
import { GameImage } from '../../components/game-image'
import { RarityStars } from '../../components/rarity-stars'
import { animusById } from '../../data'
import { animusImageUrl, shellImageUrl } from '../../data/images'
import { type Animus } from '../../data/types'

type AnimusDetailDialogProps = {
  animus: Animus | undefined
  onOpenAnimus: (id: number) => void
  onClose: () => void
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className='flex flex-col gap-1.5'>
      <h3 className='text-sm font-medium text-muted-foreground'>{title}</h3>
      {children}
    </section>
  )
}

const chip =
  'inline-flex items-center rounded-md border px-2 py-1 text-sm whitespace-nowrap'

export function AnimusDetailDialog({
  animus,
  onOpenAnimus,
  onClose,
}: AnimusDetailDialogProps) {
  const rec = animus?.recommendation

  return (
    <Dialog open={!!animus} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className='max-h-[90vh] overflow-y-auto sm:max-w-lg'>
        {animus && (
          <>
            <DialogHeader className='flex-row items-center gap-4 text-start'>
              <GameImage
                src={animusImageUrl(animus.id)}
                alt={animus.name}
                fallback={null}
                className='size-20 shrink-0 rounded-xl bg-muted'
              />
              <div className='flex flex-col gap-1.5'>
                <DialogTitle className='text-xl'>{animus.nameTh}</DialogTitle>
                <DialogDescription>{animus.titleTh}</DialogDescription>
                <div className='flex items-center gap-2'>
                  <AttrBadge attr={animus.attr} />
                  <RarityStars rarity={animus.rarity} />
                  <span className='text-xs text-muted-foreground'>
                    #{animus.id}
                  </span>
                </div>
              </div>
            </DialogHeader>

            <div className='flex flex-col gap-4'>
              {rec ? (
                <>
                  <Section title='Shell แนะนำ (สำหรับเริ่มต้น)'>
                    <div className='flex flex-wrap gap-1.5'>
                      {rec.starterShells.map((s) => (
                        <span key={s.id} className={`${chip} gap-1.5`}>
                          <GameImage
                            src={shellImageUrl(s.id)}
                            alt=''
                            fallback={null}
                            className='size-5 rounded-sm'
                          />
                          {s.nameTh}
                        </span>
                      ))}
                    </div>
                  </Section>

                  <Section title='เพื่อนร่วมทีมที่แนะนำ'>
                    <div className='flex flex-wrap gap-1.5'>
                      {rec.partners.map((p) =>
                        animusById.has(p.id) ? (
                          <button
                            key={p.id}
                            type='button'
                            onClick={() => onOpenAnimus(p.id)}
                            className={`${chip} gap-1.5 hover:bg-accent`}
                          >
                            <GameImage
                              src={animusImageUrl(p.id)}
                              alt=''
                              fallback={null}
                              className='size-5 rounded-sm'
                            />
                            {p.nameTh}
                          </button>
                        ) : (
                          <span key={p.id} className={chip}>
                            {p.nameTh}
                          </span>
                        )
                      )}
                    </div>
                  </Section>

                  <Section title='สถานะที่ควรเน้น'>
                    <div className='flex flex-wrap gap-1.5'>
                      {rec.keyProps.map((p) => (
                        <span key={p.id} className={chip}>
                          {p.nameTh}
                        </span>
                      ))}
                    </div>
                  </Section>
                </>
              ) : (
                <p className='text-sm text-muted-foreground'>
                  ยังไม่มีข้อมูลการแนะนำสำหรับ Animus ตัวนี้
                </p>
              )}

              {animus.cv && (
                <Section title='นักพากย์'>
                  <dl className='grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-sm'>
                    <dt className='text-muted-foreground'>ญี่ปุ่น</dt>
                    <dd>{animus.cv.ja ?? '-'}</dd>
                    <dt className='text-muted-foreground'>จีน</dt>
                    <dd>{animus.cv.zh ?? '-'}</dd>
                  </dl>
                </Section>
              )}

              <Section title='รหัสสกิล'>
                <p className='font-mono text-xs text-muted-foreground'>
                  {animus.skillIds.join(', ')}
                </p>
              </Section>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
