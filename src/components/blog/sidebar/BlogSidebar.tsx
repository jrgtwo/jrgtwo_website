'use client'
import useSupabaseBrowser from '@/lib/db/supabaseBrowser'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
import FeaturedPosts from './FeaturedPosts'
import { getFeaturedPosts } from '@/queries/blog/posts/getFeaturedPosts'

export default function BlogSidebar() {
  const supabase = useSupabaseBrowser()
  const { data: posts } = useQuery(getFeaturedPosts(supabase))
  return (
    <FeaturedPosts posts={posts} />
  )
}