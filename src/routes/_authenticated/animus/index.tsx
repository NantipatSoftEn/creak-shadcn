import z from 'zod'
import { createFileRoute } from '@tanstack/react-router'
import { AnimusPage } from '@/features/etheria/animus'

const animusSearchSchema = z.object({
  q: z.string().optional().catch(''),
  attr: z.array(z.number()).optional().catch([]),
  rarity: z.array(z.number()).optional().catch([]),
  sort: z.enum(['rarity', 'name']).optional().catch('rarity'),
  // id of the Animus whose detail dialog is open
  id: z.number().optional().catch(undefined),
})

export type AnimusSearch = z.infer<typeof animusSearchSchema>

export const Route = createFileRoute('/_authenticated/animus/')({
  validateSearch: animusSearchSchema,
  component: AnimusPage,
})
