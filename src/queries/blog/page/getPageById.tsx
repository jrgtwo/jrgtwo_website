import { TypedSupabaseClient } from '@/lib/db/types'
import { PAGE_OFFSET } from '@/constants/constants'

export function getPageById(client: TypedSupabaseClient, page: number) {

  const rangeFrom = PAGE_OFFSET * (page - 1)
  const rangeTo = rangeFrom + PAGE_OFFSET - 1

  return client
    .from('Blog')
    .select('*')
    .order('created_at', { ascending: false })
    .filter('published', 'eq', true)
    .range(rangeFrom, rangeTo)
} 