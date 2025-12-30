// TODO: Implement using @meteora-ag/dlmm + @solana/web3.js
// Goal: fetch pools/positions/fees directly from chain (RPC), not limited by REST API.

export type PoolSummary = {
  id: string;
  tokenA: string;
  tokenB: string;
  tvlUsd?: number;
  volume24hUsd?: number;
  apy?: number;
  feeRate?: number;
  binStep?: number;
  createdAt?: string;
};

export async function listPools(): Promise<PoolSummary[]> {
  // placeholder
  return [];
}

export async function getPool(id: string): Promise<PoolSummary | null> {
  // placeholder
  return null;
}
