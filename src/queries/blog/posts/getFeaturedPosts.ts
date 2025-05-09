import { TypedSupabaseClient } from '@/lib/db/types'

export function getFeaturedPosts(client: TypedSupabaseClient) {

  return client
    .from('Blog')
    .select('id, featured, created_at, title')
    .is('featured', true)
    .limit(5)
    .order('created_at', { ascending: false })
} 