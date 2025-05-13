import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query'
import { prefetchQuery, fetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import useSupabaseServer from '@/lib/db/supabaseServer'
import { createClient } from '@/lib/db/supabaseBrowser'
import { getPostById } from "@/queries/blog/posts/getPostById"
import { getLatestPosts } from '@/queries/blog/posts/getLatestPosts'

export async function generateStaticParams() {
  const supabase = createClient();

  const { data: posts, error } = await getLatestPosts(supabase)

  if (error) return


  const mapped = posts.map((post) => {
    return ({
      postId: String(post.id),
    })
  })

  return mapped
}

export async function generateMetadata({ params }) {
  const { postId } = await params

  const queryClient = new QueryClient()
  const supabase = await useSupabaseServer()
  const { data: post } = await fetchQuery(queryClient, getPostById(supabase, parseInt(postId, 10)))

  if (!post) return {}
  return {
    title: post.title,
    openGraph: {
      title: post.title,
      description: post.short_blurb,
      images: [post.image],
      url: `${process.env.NEXT_PUBLIC_SHARE_HOST}/blog/post/${post.id}`
    },
    twitter: {
      card: post.image_description,
      title: post.title,
      description: post.short_blurb,
      creator: '@jonathanraygarcia.bsky.social',
      images: [post.image]
    }
  }
};


export default async function PostLayout({ children, params }: { children: React.ReactNode, params: Promise<{ postId: string }> }) {
  const { postId } = await params
  const queryClient = new QueryClient()
  const supabase = await useSupabaseServer()

  await prefetchQuery(queryClient, getPostById(supabase, parseInt(postId, 10)))

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary >
  )
}
