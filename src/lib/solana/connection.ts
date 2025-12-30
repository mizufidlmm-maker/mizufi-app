import { Connection } from "@solana/web3.js";
import { env } from "@/src/lib/env";

let _conn: Connection | null = null;

export function solanaConnection(): Connection {
  if (!_conn) _conn = new Connection(env.SOLANA_RPC_URL, "confirmed");
  return _conn;
}
