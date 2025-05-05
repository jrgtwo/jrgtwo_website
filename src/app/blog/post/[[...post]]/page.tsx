import { supabaseClient as supabase } from "@/lib/supabase";
import type { Database } from "@/types/db/database.types";

type BlogPostPage = Database['public']['Tables']['Blog']['Row']
export function createMarkup(dirty) {
  return { __html: dirty };
}
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
    <article className="text-">
      <a href={`/blog/post/${postId}`}><h2 className="text-3xl font-[Cal_Sans] ">{post.title}</h2></a>
      <p>{new Date(post.created_at).toLocaleDateString()}</p>
      <div className="p-4">
        <p>{post.short_blurb}</p>
        {post.image && (
          <div className="p-8">
            <img src={post.image} alt="" />
            <p>{post.image_description}</p>
          </div>
        )}
        <div dangerouslySetInnerHTML={createMarkup(post.post)} />
      </div>
    </article>

  )
}
