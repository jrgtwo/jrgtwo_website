import { TypedSupabaseClient } from '@/lib/db/types'

export function getPostById(client: TypedSupabaseClient, postId: number) {
  return client
    .from('Blog')
    .select('*')
    .eq('id', postId)
    .filter('published', 'eq', true)
    .limit(1)
    .single()
} 