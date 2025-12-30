import Link from 'next/link'

const items = [
  { href: '/pools', label: 'Pools' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/swap', label: 'Swap' },
  { href: '/history', label: 'History' },
  { href: '/claim', label: 'Claim' },
  { href: '/settings', label: 'Settings' }
]

export function Nav() {
  return (
    <nav className="flex flex-wrap gap-2">
      <Link href="/" className="mr-3 text-sm font-semibold tracking-tight">
        MizuFi
      </Link>
      {items.map((i) => (
        <Link
          key={i.href}
          href={i.href}
          className="rounded-lg px-3 py-1.5 text-sm text-white/70 hover:bg-white/5 hover:text-white"
        >
          {i.label}
        </Link>
      ))}
    </nav>
  )
}
