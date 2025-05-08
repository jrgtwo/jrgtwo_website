import { createClient } from '@/lib/db/client';
import type { Tables, } from "@/types/db/database.types";
import BlogPost from "@/components/blog/post/BlogPost";

type Post = Tables<'Blog'>

export async function generateStaticParams() {
  const supabase = createClient();

  const { data: posts, error } = await supabase
    .from('Blog')
    .select('*')
    .limit(5)
    .order('created_at', { ascending: false })

  if (error) return

  const mapped = posts.map((post: Post) => {
    return ({
      postId: String(post.id),
    })
  })

  return mapped
}

export default async function BlogPostPage({ params }: { params: Promise<{ postId: string }> }) {
  const { postId } = await params;

  const supabase = createClient();
  const { data, error } = await supabase
    .from('Blog')
    .select('*')
    .eq('id', parseInt(postId, 10))
    .limit(1)
    .single()

  if (error || !data) return

  return (
    <BlogPost postId={postId} post={data} />
  )
}
