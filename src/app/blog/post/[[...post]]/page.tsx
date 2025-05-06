import { supabaseClient as supabase } from "@/lib/supabase";
import type { Database } from "@/types/db/database.types";
import BlogPost from "@/components/blog/post/BlogPost";
type BlogPostPage = Database['public']['Tables']['Blog']['Row']

export default async function BlogPostPage({ params }: { params: Promise<{ post: string }> }) {
  const { post: paramsPost } = await params;
  const postId = paramsPost?.[0]

  if (!supabase) return
  const { data: post, error } = await supabase
    .from('Blog')
    .select('*')
    .eq('id', parseInt(postId, 10))
    .limit(1)
    .single()

  if (error || !post) return

  return (
    <BlogPost postId={postId} post={post} />
  )
}
