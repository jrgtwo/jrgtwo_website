# Blog Retirement Plan

## Context

The blog is outdated and there is no interest in upkeep. The chosen path is **Plan C** below: keep all blog code in the repo as dormant/archive (no live archive page), remove the link from the main nav, and disable routing so `/blog` and `/editor` return 404. Plans A and B from earlier brainstorming are kept further down for reference.

Exploration confirmed the blog is the **only** consumer of Supabase in this repo. Plan C does NOT free Supabase space on its own — see "Supabase cleanup (optional, follow-up)" below.

---

## Plan C — Chosen: soft hide, preserve code in-place

Smallest possible change. Reversible by renaming two folders back.

### C.1 — Disable routing without deleting code

Next.js App Router treats any folder prefixed with `_` as a **private folder** — it is excluded from routing entirely but the files remain part of the project. Use that:

- Rename `src/app/blog/` → `src/app/_blog/`
- Rename `src/app/editor/` → `src/app/_editor/`

Effect:
- `/blog`, `/blog/page/[page]`, `/blog/post/[postId]`, and `/editor` all return Next.js 404.
- All files (layouts, pages, loading states, MDX assets) stay in place with their imports intact.
- Nothing else needs to move — `src/components/blog/`, `src/queries/`, `src/lib/db/`, `src/types/db/database.types.ts` all stay exactly where they are. Tree-shaking drops them from the production bundle because no active route imports them.

### C.2 — Remove the nav link

Edit `src/components/mainNav/MainNav.tsx`: delete the blog `<li>` and the preceding `<Separator />` separator (lines 27–28):

```tsx
<li><Separator orientation="vertical" /></li>
<li><Link href="/blog" ...>Blog</Link></li>
```

No other place in the codebase links to `/blog` except the breadcrumb inside the now-private `_blog/post/[postId]` subtree, which is unreachable so doesn't matter.

### C.3 — Leave everything else untouched

Do **not** touch in Plan C:
- `package.json` — Supabase, MDX, Sandpack, TanStack Query deps all stay (they're imported by the dormant code).
- `next.config.ts` — the `nvqrxmwjwwludwohgocs.supabase.co` `remotePatterns` entry stays (the private subtree still references it; harmless if unused at runtime).
- `.env` / Vercel env vars — `NEXT_PUBLIC_DB_URL` and `NEXT_PUBLIC_DB_KEY` can stay set or be removed; the active site doesn't read them. Removing them is fine and is recommended once you've confirmed nothing breaks.
- `README.md`, `CLAUDE.md` — optional follow-up: add a one-line note that the blog is dormant. Not required for the change to land.

### C.4 — Verification

1. `npm run dev` — visit `/`, confirm the nav no longer shows "Blog".
2. Hit `/blog`, `/blog/page/2`, `/blog/post/1`, `/editor` — all should return Next.js 404.
3. `npm run lint` — passes.
4. `npm run build` — succeeds. Check the route table in build output: no `/blog` or `/editor` entries should appear.
5. `grep -r '"/blog"\|href="/blog"' src/` — only hits should be inside the new `src/app/_blog/` subtree (the breadcrumb component). No active code should link to `/blog`.

### C.5 — Files touched

- Renamed: `src/app/blog/` → `src/app/_blog/`, `src/app/editor/` → `src/app/_editor/`
- Edited: `src/components/mainNav/MainNav.tsx` (drop two `<li>` lines)
- Created: none
- Deleted: none

### C.6 — Reverting later

Rename `_blog` → `blog`, rename `_editor` → `editor`, restore the nav `<li>`. One small commit; no data work needed as long as the Supabase project is still alive.

---

## Supabase cleanup (optional, follow-up — not part of Plan C)

Plan C alone doesn't free Supabase storage/rows. If/when you want to reclaim Supabase space:

1. (Recommended first) **Export the data** via Supabase Studio → Table Editor → `Blog` → Export → JSON. Drop the file at `archive/blog/posts.json` and commit.
2. (Optional) Download Supabase Storage objects referenced by `thumbnail` / `image` columns into `archive/blog/images/`.
3. Drop the Supabase `Blog` table.
4. Delete the storage bucket.
5. Pause or delete the Supabase project.
6. Remove `NEXT_PUBLIC_DB_URL` / `NEXT_PUBLIC_DB_KEY` from Vercel env.

⚠️ If you do step 3 without step 1, the data is gone for good. The dormant code in `src/app/_blog/` will still build but any attempt to resurrect the routes will get DB errors at runtime.

---

## Plans A and B (alternative paths — kept for reference)

### Plan A — Archive content as MDX, then delete code

Export the Supabase `Blog` table to JSON, run a one-shot Node script to split rows into per-post MDX files under `archive/blog/posts/*.mdx`, optionally download images into `archive/blog/images/`, then delete every blog route, component, query, Supabase client, and unused dependency. End state: blog content preserved in plain text in git, zero active blog code, Supabase fully decommissioned.

Use this if you want a minimal repo and are confident you won't resurrect the blog inside this Next.js codebase — the MDX would be re-publishable from any future framework.

### Plan B — Complete removal, no archive

Same code-removal footprint as Plan A but skip the archive step entirely. Smallest repo, fastest to execute, but the writing is lost (only recoverable from Supabase backups while they exist, or from git history of the blog *components* — never from the database content, which only ever lived in Supabase).

### Shared inventory used by Plans A and B (not Plan C)

Routes to delete: `src/app/blog/`, `src/app/editor/`. Components: `src/components/blog/`. Queries: `src/queries/`. DB wiring: `src/lib/db/`, `src/types/db/`. Edits: drop the blog nav `<li>`; remove the Supabase image remote pattern from `next.config.ts`; drop the `createMDX` wrapper and `md`/`mdx` from `pageExtensions`; remove blog-only deps from `package.json` (`@supabase/*`, `@supabase-cache-helpers/*`, `@codesandbox/sandpack-*`, `@mdx-js/*`, `@mdxeditor/editor`, `@next/mdx`, `@types/mdx`, `next-mdx-remote-client`, `react-markdown`, `react-syntax-highlighter`, `@types/react-syntax-highlighter`, devDep `supabase`); remove `sync-db-types` from `scripts`; rip out TanStack Query too (`@tanstack/react-query`, `@tanstack/eslint-plugin-query`, `src/components/providers/ReactQueryClientProvider`) since nothing else uses it.
