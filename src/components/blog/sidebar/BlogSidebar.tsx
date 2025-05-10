'use client'
import useSupabaseBrowser from '@/lib/db/supabaseBrowser'
import { Suspense } from 'react'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
import FeaturedPosts from './FeaturedPosts'
import { getFeaturedPosts } from '@/queries/blog/posts/getFeaturedPosts'
import Loading from '@/components/loading/Loading'

export default function BlogSidebar() {
  const supabase = useSupabaseBrowser()
  const { data: posts } = useQuery(getFeaturedPosts(supabase))
  return (
    <Suspense fallback={<Loading />}>
      <FeaturedPosts posts={posts} />
    </Suspense >
  )
}