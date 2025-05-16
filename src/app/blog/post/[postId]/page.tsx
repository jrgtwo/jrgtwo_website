import useSupabaseServer from '@/lib/db/supabaseServer'
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import { QueryClient } from '@tanstack/react-query'
import { fetchQuery } from '@supabase-cache-helpers/postgrest-react-query'
import BlogPost from '@/components/blog/post/BlogPost'
import { getPostById } from "@/queries/blog/posts/getPostById"
import BreadCrumbMenu from '@/components/blog/post/BreadCrumbMenu'
import Playground from './ReactSandbox'

export default async function PostPage({ params }: { params: { postId: string } }) {
  const { postId } = await params
  const queryClient = new QueryClient()
  const supabase = await useSupabaseServer()

  const code = `const myCoolPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Delayed Value');
  }, 2000);
});

myCoolPromise.then((val) => {
  console.log(val);
  // Logs out Delayed Value after 2000 milliseconds
});`;
  const { data: post } = await fetchQuery(queryClient, getPostById(supabase, parseInt(postId, 10)))
  return (
    <>
      <BreadCrumbMenu routeName={post?.title} />
      <BlogPost post={post} postId={postId} />
      <MDXRemote
        source={`<Playground code="${code}"/>`}
        components={{
          // Specify the Playground here:
          Playground,
        }} />
    </>
  )
}
