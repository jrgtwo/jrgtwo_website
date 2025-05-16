
import Link from 'next/link'
import Image from "next/image";
// import { Toaster } from "@/components/ui/sonner"
import { Separator } from "@/components/ui/separator";
import type { Tables } from "@/types/db/database.types";
import { PostMarkdown } from "./PostMarkdown";
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import Playground from './ReactSandbox'


type POST = Tables<'Blog'> | undefined | null

export default function BlogPost({ postId, post }: { postId: string, post: POST }) {

  return (
    <section className="mt-4">
      <a href={`https://bsky.app/intent/compose?text=${encodeURI(`${post?.title}: ${process.env.NEXT_PUBLIC_SHARE_HOST}/blog/post/${post?.id}`)}`} target="_blank">Share</a>
      <Link href={`/blog/post/${postId}`}>
        <h2 className="py-8 text-5xl md:text-7xl text-center font-[Cal_Sans] text-shadow-[0px_0px_2px_red,-1px_1px_2px_white,-2px_2px_2px_red,-3px_3px_1px_white]">{post.title}</h2>
      </Link>
      {/* <p>{new Date(post.created_at).getMonth()}</p> */}
      <Separator />

      <div className="p-4">
        <blockquote className="text-center text-xl italic">{post?.short_blurb}</blockquote>
        {post?.image && (
          <div className="p-8">
            <Image
              src={post?.image}
              alt={post?.image_description || ""}
              priority
              width={750}
              height={500} />
            <p className="italic">{post?.image_description}</p>
          </div>
        )}
        <article className="flex flex-col gap-6">
          {/* <PostMarkdown post={post?.post} /> */}
          <MDXRemote
            source={post?.post || ''}
            components={{
              // Specify the Playground here:
              Playground,
            }} />
        </article>
      </div>
      {/* <Toaster /> */}
    </section >
  )
}