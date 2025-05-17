import useSupabaseServer from '@/lib/db/supabaseServer'

import { QueryClient } from '@tanstack/react-query'
import { fetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import BlogPost from '@/components/blog/post/BlogPost'
import { getPostById } from "@/queries/blog/posts/getPostById"
import BreadCrumbMenu from '@/components/blog/post/BreadCrumbMenu'

export default async function PostPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params
  const queryClient = new QueryClient()
  const supabase = await useSupabaseServer()

  const { data: post } = await fetchQuery(queryClient, getPostById(supabase, parseInt(postId, 10)))
  return (
    <>
      <BreadCrumbMenu routeName={post?.title} />
      <BlogPost post={post} postId={postId} />
    </>
  )
}
