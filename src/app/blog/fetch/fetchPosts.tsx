
import { Tables } from '@/types/db/database.types'
import { PostgrestError } from '@supabase/supabase-js';

type Post = Partial<Tables<'Blog'>>

export const fetchFeaturedPosts = async (dbClient): Promise<Array<Post> | PostgrestError> => {

  const supabase = await dbClient()
  const { data, error } = await supabase
    .from('Blog')
    .select('id, featured, created_at, title')
    .is('featured', true)
    .limit(5)
    .order('created_at', { ascending: false })

  if (error) return error

  return data;
}