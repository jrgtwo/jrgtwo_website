import { TypedSupabaseClient } from '@/lib/db/types'

export function getPostById(client: TypedSupabaseClient, postId: string) {
  return client
    .from('Blog')
    .select('*')
    .eq('id', parseInt(postId, 10))
    .limit(1)
    .single()
} 