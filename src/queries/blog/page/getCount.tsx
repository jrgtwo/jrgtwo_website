import { TypedSupabaseClient } from '@/lib/db/types'

export function getCount(client: TypedSupabaseClient) {
  return client
    .from('Blog')
    .select('*', { count: 'exact', head: true })
    .filter('published', 'eq', true)
}