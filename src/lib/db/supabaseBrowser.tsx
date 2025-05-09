import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/types/db/database.types'
import type { TypedSupabaseClient } from '@/lib/db/types'
import { useMemo } from 'react'

let client: TypedSupabaseClient | undefined

function getSupabaseBrowserClient() {
  if (client) {
    return client
  }

  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_DB_URL!,
    process.env.NEXT_PUBLIC_DB_KEY!
  )

  return client
}

function useSupabaseBrowser() {
  return useMemo(getSupabaseBrowserClient, [])
}

export default useSupabaseBrowser