export function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export type Named = { id: string; keys: string[] };

/** Longest key contained in the answer wins, so "bisturi elétrico" is not scored as "bisturi". */
export function matchId(input: string, items: Named[]): string | null {
  const n = normalize(input);
  if (n.length < 3) return null;
  let best: { id: string; len: number } | null = null;
  for (const item of items) {
    for (const key of item.keys) {
      const k = normalize(key);
      if (k.length < 3) continue;
      if (n.includes(k) && (!best || k.length > best.len)) {
        best = { id: item.id, len: k.length };
      }
    }
  }
  return best?.id ?? null;
}

export function keywordHits(input: string, keywords: string[]) {
  const n = normalize(input);
  return keywords.filter((word) => n.includes(normalize(word)));
}
