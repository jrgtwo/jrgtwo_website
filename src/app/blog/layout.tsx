import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import useSupabaseServer from '@/lib/db/supabaseServer'
import { getFeaturedPosts } from '@/queries/blog/posts/getFeaturedPosts'
import { getPageById } from '@/queries/blog/page/getPageById'
import { getCount } from '@/queries/blog/page/getCount'
import BlogSidebar from "@/components/blog/sidebar/BlogSidebar"
import { Separator } from "@/components/ui/separator"

export default async function BlogLayout({ children }: { children: React.ReactNode }) {
  const queryClient = new QueryClient()
  const supabase = await useSupabaseServer()

  await prefetchQuery(queryClient, getFeaturedPosts(supabase))
  await prefetchQuery(queryClient, getPageById(supabase, 1))
  await prefetchQuery(queryClient, getCount(supabase))

  return (
    <>
      <section className="py-full-section">
        <h2 className=" text-center text-5xl font-[Cal_Sans]" style={{ 'textShadow': '#860202 0px 3px 0px, white 0px 2px 0px' }}>Jonathan's Explorations 🧑‍🚀 🚀</h2>
        <Separator className="my-8" />
        <section className="flex flex-col-reverse  lg:flex-row">
          <HydrationBoundary state={dehydrate(queryClient)}>
            <section className="min-w-[240px] max-w[240px] px-4 lg:block">
              <BlogSidebar />
            </section>
            <section className=" flex-1 min-w-0">
              {children}
            </section>
          </HydrationBoundary>
        </section>
      </section >
    </>
  )
}