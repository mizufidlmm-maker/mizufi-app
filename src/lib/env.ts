export const env = {
  SOLANA_RPC_URL: process.env.NEXT_PUBLIC_SOLANA_RPC_URL!,
  REOWN_PROJECT_ID: process.env.NEXT_PUBLIC_REOWN_PROJECT_ID!,
  APP_NAME: process.env.NEXT_PUBLIC_APP_NAME ?? "MizuFi",
  APP_URL: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  APP_ICON: process.env.NEXT_PUBLIC_APP_ICON ?? "",
} as const;

export function assertEnv() {
  const missing = Object.entries(env)
    .filter(([, v]) => !v)
    .map(([k]) => k);

  if (missing.length) {
    throw new Error(`Missing env: ${missing.join(", ")}`);
  }
}
