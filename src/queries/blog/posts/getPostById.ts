import { TypedSupabaseClient } from '@/lib/db/types'

export function getPostById(client: TypedSupabaseClient, postId: number) {
  return client
    .from('Blog')
    .select('*')
    .eq('id', postId)
    .limit(1)
    .single()
} 