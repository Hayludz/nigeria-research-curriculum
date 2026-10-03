// Resolves each YouTube search query in data.js to real, embeddable videos.
// Usage: node scripts/fetch-videos.mjs   (writes videos.js)
import fs from "node:fs";
import vm from "node:vm";

const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync("data.js", "utf8"), ctx);
const queries = new Set();
ctx.window.TRACKS.forEach(t => t.topics.forEach(x => [...x.g, ...x.n].forEach(v => queries.add(v[1]))));
ctx.window.GUIDELINES.forEach(g => queries.add(g.g + " reporting guideline tutorial how to use"));

const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36";
const out = fs.existsSync("videos.json") ? JSON.parse(fs.readFileSync("videos.json", "utf8")) : {};
const checked = new Map();

function secs(t) {
  if (!t) return 0;
  return t.split(":").reverse().reduce((a, p, i) => a + (+p) * 60 ** i, 0);
}
async function search(q) {
  const r = await fetch("https://www.youtube.com/results?search_query=" + encodeURIComponent(q) + "&hl=en&gl=NG", {
    headers: { "user-agent": UA, "accept-language": "en-US,en;q=0.9", cookie: "CONSENT=YES+1" }
  });
  const html = await r.text();
  const m = html.match(/var ytInitialData = (\{.*?\});<\/script>/s);
  if (!m) return [];
  const found = [];
  (function walk(o) {
    if (!o || typeof o !== "object") return;
    if (o.videoRenderer && o.videoRenderer.videoId) found.push(o.videoRenderer);
    for (const k in o) walk(o[k]);
  })(JSON.parse(m[1]));
  return found.map(v => ({
    id: v.videoId,
    title: v.title?.runs?.[0]?.text || "",
    channel: v.ownerText?.runs?.[0]?.text || "",
    dur: v.lengthText?.simpleText || "",
    views: v.viewCountText?.simpleText || "",
    when: v.publishedTimeText?.simpleText || ""
  }));
}
async function embeddable(id) {
  if (checked.has(id)) return checked.get(id);
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const r = await fetch("https://www.youtube.com/oembed?format=json&url=" + encodeURIComponent("https://www.youtube.com/watch?v=" + id), { headers: { "user-agent": UA } });
      if (r.status === 429 || r.status >= 500) { await new Promise(res => setTimeout(res, 2000 * (attempt + 1))); continue; }
      checked.set(id, r.ok);
      return r.ok;
    } catch { await new Promise(res => setTimeout(res, 1500)); }
  }
  return false; // not cached, so a later run retries
}
async function resolve(q) {
  const res = await search(q);
  const good = [];
  const seen = new Set();
  for (const v of res) {
    if (good.length >= 3) break;
    const s = secs(v.dur);
    if (!v.id || seen.has(v.id) || s < 240 || s > 4 * 3600) continue; // skip shorts, live, marathons
    seen.add(v.id);
    if (await embeddable(v.id)) good.push(v);
  }
  return good;
}

const list = [...queries].filter(q => !(out[q] && out[q].length));
console.log(queries.size, "queries,", list.length, "to fetch");
let i = 0;
async function worker() {
  while (i < list.length) {
    const q = list[i++];
    try { out[q] = await resolve(q); } catch (e) { out[q] = []; console.log("ERR", q, e.message); }
    console.log(`${i}/${list.length} ${out[q].length} ${q}`);
    await new Promise(r => setTimeout(r, 500));
  }
}
await Promise.all([worker(), worker()]);
fs.writeFileSync("videos.json", JSON.stringify(out, null, 1));
fs.writeFileSync("videos.js", "window.VIDEOS = " + JSON.stringify(out) + ";\n");
const empty = Object.entries(out).filter(([, v]) => !v.length).map(([q]) => q);
console.log("done. empty:", empty.length); empty.forEach(q => console.log("  -", q));
