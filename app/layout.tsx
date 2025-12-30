import './globals.css'
import type { Metadata } from 'next'
import { ReownProvider } from '@/lib/reown/provider'

export const metadata: Metadata = {
  title: 'MizuFi',
  description: 'DLMM liquidity management dashboard for Solana DeFi.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ReownProvider>{children}</ReownProvider>
      </body>
    </html>
  )
}
