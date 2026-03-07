# JonathanRayGarcia.com

My personal website and blog — built to showcase my work and share technical writing with interactive code examples.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Database | Supabase (PostgreSQL) |
| Data fetching | TanStack Query + supabase-cache-helpers |
| Blog content | MDX via next-mdx-remote-client |
| Code sandboxes | Sandpack (CodeSandbox) |
| Analytics | PostHog, Vercel Analytics, Vercel Speed Insights |
| UI primitives | Radix UI + shadcn/ui |

---

## Design Decisions

### Blog content stored as MDX in the database

Rather than committing blog posts as `.mdx` files in the repository, post content lives in a Supabase `Blog` table as raw MDX strings. This decouples content authoring from deployments — new posts go live without touching the codebase.

At render time, `next-mdx-remote-client` compiles and renders the MDX on the server. Custom MDX components (`<Playground />`, `<ReactPlayground />`) are injected at render time, so posts can embed fully interactive sandboxes inline.

### Two Supabase client patterns

The app uses two distinct Supabase client factories:

- **`supabaseServer.ts`** — an async factory using `@supabase/ssr` that reads Next.js cookies; used in server components and route handlers where posts are pre-fetched before the page renders.
- **`supabaseBrowser.tsx`** — a module-level singleton returned via `useMemo`; used in client components for paginated blog listing where data is fetched client-side.

Query functions in `src/queries/` are framework-agnostic — they accept a `TypedSupabaseClient` and return a query builder, making them usable with both `fetchQuery` (server) and `useQuery` (client) without duplication.

### Aggressive client-side caching

The TanStack Query client is configured with `staleTime: Infinity` and `gcTime: Infinity`. Since blog content rarely changes and is public read-only data, treating cached responses as permanently fresh eliminates redundant network requests within a session.

### Server vs. client rendering split

Individual blog posts (`/blog/post/[postId]`) are **server components** — the post is fetched and pre-rendered before the HTML reaches the browser, which benefits SEO and initial load. The blog listing pages (`/blog`, `/blog/page/[page]`) are **client components** that fetch on mount, keeping pagination interactions fast without full page navigations.

### Interactive code playgrounds in blog posts

Two Sandpack-based components can be embedded directly in blog post MDX:

- **`<Playground />`** — vanilla JS sandbox (static template), single file, no framework.
- **`<ReactPlayground />`** — React sandbox with Tailwind CDN loaded as an external resource and support for multi-file setups via a `data.files` prop.

Both default to `autorun: false` so readers control when code executes. The `/editor` route provides a local MDX preview environment for drafting posts before they're saved to the database.

### Type-safe database access

Supabase TypeScript types are auto-generated from the live schema and committed to `src/types/db/database.types.ts`. All query functions and component props reference `Tables<'Blog'>` directly from that generated file, so schema changes surface as compile errors rather than runtime surprises.
