import { TypedSupabaseClient } from '@/lib/db/types'

export function getLatestPosts(client: TypedSupabaseClient) {
  return client
    .from('Blog')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10)
} 