
import useSupabaseServer from '@/lib/db/supabaseServer'
import FeaturedPosts from './FeaturedPosts'
import { getFeaturedPosts } from '@/queries/blog/posts/getFeaturedPosts'

export default async function BlogSidebar() {
  const supabase = await useSupabaseServer()
  const { data: posts } = await getFeaturedPosts(supabase)

  return (
    <FeaturedPosts posts={posts} />
  )
}