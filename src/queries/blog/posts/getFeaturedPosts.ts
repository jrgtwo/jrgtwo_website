import { TypedSupabaseClient } from '@/lib/db/types'
import { Tables } from '@/types/db/database.types'

export type POST_PROP = Partial<Tables<'Blog'>> | null | undefined
export type POSTS_PROP = POST_PROP[] | null | undefined

export function getFeaturedPosts(client: TypedSupabaseClient) {
  return client
    .from('Blog')
    .select('id, featured, created_at, title')
    .is('featured', true)
    .limit(5)
    .order('created_at', { ascending: false })
    .filter('published', 'eq', true)
} 