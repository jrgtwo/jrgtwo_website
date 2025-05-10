'use client'
import useSupabaseBrowser from '@/lib/db/supabaseBrowser'
import { useParams } from 'next/navigation'
import { useQuery } from '@supabase-cache-helpers/postgrest-react-query'
import BlogPost from '@/components/blog/post/BlogPost'
import { getPostById } from "@/queries/blog/posts/getPostById"
import BreadCrumbMenu from '@/components/blog/post/BreadCrumbMenu'

export default function PostPage() {
  const { postId } = useParams<{ postId: string }>()
  const supabase = useSupabaseBrowser()
  const { data: post } = useQuery(getPostById(supabase, parseInt(postId, 10)))
  return (
    <>
      <BreadCrumbMenu routeName={post?.title} />
      <BlogPost post={post} postId={postId} />
    </>
  )
}
