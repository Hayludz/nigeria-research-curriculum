# Nigeria Research Curriculum

A free, static web app that teaches research methods globally and in the Nigerian context: study design, systematic reviews and meta-analysis, biostatistics, ethics (NHREC), funding (TETFund and international), publishing, open science and AI use.

- 68 topics across 11 tracks, each with key points, global and Nigeria-focused YouTube lesson lists, and trusted references
- Step-by-step systematic review path with progress tracking
- Reporting guideline finder (CONSORT, STROBE, PRISMA, COREQ and more)
- Nigeria quick directory of regulators, funders, data sources and tools
- Light and dark themes, works offline-friendly on slow connections, no build step

## Run locally

```bash
python -m http.server 4173
```

Open http://localhost:4173.

## Edit the content

All content lives in `data.js`. Video entries are `[label, YouTube search query]`; each opens a live YouTube search so links never go stale. To pin a specific video, replace the generated URL logic in `app.js` (`yt()`) for that entry.

## Deploy

Static site: deploy the repository root on Vercel (framework preset "Other", no build command).
