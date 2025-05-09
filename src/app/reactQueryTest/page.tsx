import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import useSupabaseServer from '@/lib/db/server'
import { getStuff } from './queries/getStuff'
import Stuff from './Stuff'

export default async function StuffPage() {
  const queryClient = new QueryClient()
  const supabase = await useSupabaseServer()

  await prefetchQuery(queryClient, getStuff(supabase))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Stuff />
    </HydrationBoundary>
  )
}