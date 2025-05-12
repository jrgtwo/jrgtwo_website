import { PostMarkdown } from "./PostMarkdown";
import Link from 'next/link'
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import type { Tables } from "@/types/db/database.types";


type POST = Tables<'Blog'> | undefined | null

export default function BlogPost({ postId, post }: { postId: string, post: POST }) {

  return (
    <section className="mt-4">
      <a href={`https://bsky.app/intent/compose?text=${encodeURIComponent(post.title)}`} target="_blank">Share</a>
      <Link href={`/blog/post/${postId}`}>
        <h2 className="p-8 text-7xl text-center font-[Cal_Sans] text-shadow-[0px_0px_2px_red,-1px_1px_2px_white,-2px_2px_2px_red,-3px_3px_1px_white]">{post.title}</h2>
      </Link>
      {/* <p>{new Date(post.created_at).getMonth()}</p> */}
      <Separator />

      <div className="p-4">
        <p>{post?.short_blurb}</p>
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
          <PostMarkdown post={post?.post} />
        </article>
      </div>
    </section >
  )
}