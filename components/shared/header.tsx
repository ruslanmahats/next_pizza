import { cn } from '@/lib/utils'

type HeaderProps = {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  return (
    <div className={cn('border border-b', className)}>
      <h1>Header</h1>
    </div>
  )
}
