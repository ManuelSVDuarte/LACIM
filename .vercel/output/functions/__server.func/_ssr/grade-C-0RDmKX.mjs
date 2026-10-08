//#region node_modules/.nitro/vite/services/ssr/assets/grade-C-0RDmKX.js
function normalize(value) {
	return value.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}
/** Longest key contained in the answer wins, so "bisturi elétrico" is not scored as "bisturi". */
function matchId(input, items) {
	const n = normalize(input);
	if (n.length < 3) return null;
	let best = null;
	for (const item of items) for (const key of item.keys) {
		const k = normalize(key);
		if (k.length < 3) continue;
		if (n.includes(k) && (!best || k.length > best.len)) best = {
			id: item.id,
			len: k.length
		};
	}
	return best?.id ?? null;
}
function keywordHits(input, keywords) {
	const n = normalize(input);
	return keywords.filter((word) => n.includes(normalize(word)));
}
//#endregion
export { matchId as n, keywordHits as t };
