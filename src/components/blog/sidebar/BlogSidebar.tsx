'use client'
import FeaturedPosts from './FeaturedPosts'
import type { Tables } from '@/types/db/database.types'
export type POSTS_PROP = Partial<Tables<'Blog'>>

export default function BlogSidebar({ posts }: { posts: POSTS_PROP[] | null }) {

  return (
    <FeaturedPosts posts={posts} />
  )
}