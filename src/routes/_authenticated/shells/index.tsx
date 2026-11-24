import { createFileRoute } from '@tanstack/react-router'
import { ShellsPage } from '@/features/etheria/shells'

export const Route = createFileRoute('/_authenticated/shells/')({
  component: ShellsPage,
})
