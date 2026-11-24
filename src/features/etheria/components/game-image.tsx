import { useState } from 'react'
import { cn } from '@/lib/utils'

type GameImageProps = {
  src: string | undefined
  alt: string
  /** shown when there is no image or it fails to load */
  fallback: React.ReactNode
  className?: string
}

export function GameImage({ src, alt, fallback, className }: GameImageProps) {
  const [failedSrc, setFailedSrc] = useState<string>()

  if (!src || failedSrc === src) return <>{fallback}</>

  return (
    <img
      src={src}
      alt={alt}
      loading='lazy'
      decoding='async'
      onError={() => setFailedSrc(src)}
      className={cn('object-cover', className)}
    />
  )
}
