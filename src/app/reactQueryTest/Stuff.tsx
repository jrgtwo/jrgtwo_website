'use client'

import useSupabaseBrowser from '@/lib/db/supabaseBrowser'
import { getStuff } from './queries/getStuff'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'

export default function Stuff() {
  const supabase = useSupabaseBrowser()
  const { data } = useQuery(getStuff(supabase))

  return (
    <div>
      <h1>SSR: {JSON.stringify(data)}</h1>
    </div>
  )
}