export type JupiterQuote = unknown;

export async function getQuote(params: Record<string, string>) {
  const qs = new URLSearchParams(params).toString();
  const res = await fetch(`https://quote-api.jup.ag/v6/quote?${qs}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Jupiter quote failed");
  return (await res.json()) as JupiterQuote;
}
