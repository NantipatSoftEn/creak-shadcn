import { createFileRoute } from '@tanstack/react-router'
import { AttrMatrixPage } from '@/features/etheria/attr-matrix'

export const Route = createFileRoute('/_authenticated/attr-matrix/')({
  component: AttrMatrixPage,
})
