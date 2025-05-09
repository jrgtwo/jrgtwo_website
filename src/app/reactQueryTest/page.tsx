import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { prefetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import { cookies } from 'next/headers'
import createClient from '@/lib/db/server'
import { getStuff } from './queries/getStuff'
import Stuff from './Stuff'

export default async function CountryPage({ params }: { params: { id: number } }) {
  const queryClient = new QueryClient()
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  await prefetchQuery(queryClient, getStuff(supabase))

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Stuff />
    </HydrationBoundary>
  )
}