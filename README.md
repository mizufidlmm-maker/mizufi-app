MizuFi

DLMM liquidity management dashboard for Solana.
Built for fast-moving pools, fresh launches, and fee-first LP operators.

Status
- Beta (actively developing)
- Non-custodial
- Solana mainnet focus
- DLMM: Meteora integration

Core Modules
- Pools Explorer (live + fresh pools)
- Pool Detail (bins, APY, risk badges)
- Portfolio (positions, fees, claim, remove)
- Swap (Jupiter)
- History (on-chain activity)
- Claim (single + bulk)
- Settings (RPC, network, display)

Tech
- Next.js (App Router) + TypeScript
- TailwindCSS
- Reown AppKit (wallet connect)
- Solana web3.js

Local Dev
- set NEXT_PUBLIC_REOWN_PROJECT_ID in .env.local
- npm install
- npm run dev

Security
No private key storage. Wallet signs transactions client-side.
