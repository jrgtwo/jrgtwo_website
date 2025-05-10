import { createBrowserClient } from '@supabase/ssr'
import type { Database } from '@/types/db/database.types'
import type { TypedSupabaseClient } from '@/lib/db/types'
import { useMemo } from 'react'

let client: TypedSupabaseClient | undefined

export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_DB_URL!,
    process.env.NEXT_PUBLIC_DB_KEY!
  )
}

function getSupabaseBrowserClient() {
  if (client) {
    return client
  }

  client = createClient()

  return client
}

function useSupabaseBrowser() {
  return useMemo(getSupabaseBrowserClient, [])
}

export default useSupabaseBrowser