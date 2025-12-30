import Link from 'next/link'
import { Card } from '@/components/ui/card'

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-ocean-500/20 ring-1 ring-ocean-300/20" />
            <div>
              <div className="text-lg font-semibold tracking-tight">MizuFi</div>
              <div className="text-sm text-white/60">DLMM Liquidity Manager</div>
            </div>
          </div>
          <Link
            className="rounded-xl bg-ocean-500/20 px-4 py-2 text-sm ring-1 ring-ocean-300/20 hover:bg-ocean-500/30"
            href="/pools"
          >
            Open App
          </Link>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold leading-tight">
              One-click DLMM liquidity for Solana.
            </h1>
            <p className="mt-4 text-white/70">
              Explore fresh pools, deploy bins fast, track fees, and manage positions — built for
              new launches and high-velocity markets.
            </p>
            <div className="mt-8 flex gap-3">
              <Link className="rounded-xl bg-ocean-500 px-5 py-3 text-sm font-medium text-black" href="/pools">
                Browse Pools
              </Link>
              <Link className="rounded-xl bg-white/5 px-5 py-3 text-sm ring-1 ring-white/10 hover:bg-white/10" href="/portfolio">
                Portfolio
              </Link>
            </div>
          </div>

          <Card>
            <div className="space-y-3">
              <div className="text-sm text-white/60">Status</div>
              <div className="text-xl font-semibold">Beta (Mainnet-ready)</div>
              <div className="text-white/70 text-sm">
                Non-custodial. Wallet stays yours. Transactions are transparent on Solscan.
              </div>
              <div className="mt-4 text-xs text-white/50">
                Next: DLMM pool insights + pumpfun fresh scanner.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  )
}
