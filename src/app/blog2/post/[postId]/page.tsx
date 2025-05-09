'use client'
import useSupabaseBrowser from '@/lib/db/supabaseBrowser'
import { useParams } from 'next/navigation'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
import BlogPost from '@/components/blog/post/BlogPost'
import { getPostById } from "@/queries/blog/posts/getPostById"

export default function PostPage() {
  const { postId } = useParams<{ postId: string }>()
  const supabase = useSupabaseBrowser()
  const { data: post } = useQuery(getPostById(supabase, postId))
  return (
    <>
      <BlogPost post={post} postId={postId} />
    </>
  )
}
