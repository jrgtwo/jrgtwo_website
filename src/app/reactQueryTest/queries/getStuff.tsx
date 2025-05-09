import { TypedSupabaseClient } from '@/lib/db/types'

export function getStuff(client: TypedSupabaseClient) {
  return client
    .from('Blog')
    .select('*')
    .limit(10)
} 