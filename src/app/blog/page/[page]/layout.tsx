import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import useSupabaseServer from '@/lib/db/supabaseServer'
import { getPageById } from "@/queries/blog/page/getPageById"
import { getCount } from '@/queries/blog/page/getCount'

export default async function PageLayout({ children, params }: { children: React.ReactNode, params: Promise<{ page: string }> }) {
  const { page: paramsPage } = await params;
  const normalizedPage = paramsPage
    ? parseInt(paramsPage, 10)
    : 1

  const queryClient = new QueryClient()
  const supabase = await useSupabaseServer()

  await prefetchQuery(queryClient, getPageById(supabase, normalizedPage))
  await prefetchQuery(queryClient, getCount(supabase))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary >
  )
}