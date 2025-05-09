import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import useSupabaseServer from '@/lib/db/supabaseServer'
import { getPostById } from "@/queries/blog/posts/getPostById"

export default async function PostLayout({ children, params }: { children: React.ReactNode, params: Promise<{ postId: string }> }) {
  const { postId } = await params
  const queryClient = new QueryClient()
  const supabase = await useSupabaseServer()

  await prefetchQuery(queryClient, getPostById(supabase, parseInt(postId, 10)))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary >
  )
}
