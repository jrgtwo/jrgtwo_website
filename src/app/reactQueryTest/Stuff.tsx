'use client'

import useSupabaseBrowser from '@/lib/db/supabaseBrowser'
import { getStuff } from './queries/getStuff'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'

export default function Stuff() {
  const supabase = useSupabaseBrowser()
  // This useQuery could just as well happen in some deeper
  // child to <Posts>, data will be available immediately either way
  const { data } = useQuery(getStuff(supabase))

  return (
    <div>
      <h1>SSR: {JSON.stringify(data)}</h1>
    </div>
  )
}