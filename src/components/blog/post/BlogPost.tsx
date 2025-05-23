
import Link from 'next/link'
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import type { Tables } from "@/types/db/database.types";
import { MDXRemote } from 'next-mdx-remote-client/rsc'
import Playground from './Playground'
import ReactPlayground from './ReactPlayground';
import './post-styles.css'

type POST = Tables<'Blog'> | undefined | null

export default function BlogPost({ postId, post }: { postId: string, post: POST }) {

  return (
    <section className="mt-8">

      <Separator />
      <Link href={`/blog/post/${postId}`}>
        <h2 className="py-8 text-5xl md:text-7xl text-center font-[Cal_Sans] ">{post?.title}</h2>
        <blockquote className="text-center text-xl italic">{post?.short_blurb}</blockquote>
      </Link>
      {/* <Separator /> */}

      <div className="p-4">

        {post?.image && (
          <div className="p-8" >
            <div className="m-auto w-fit">
              <Image
                src={post?.image}
                alt={post?.image_description || ""}
                priority
                width={750}
                height={500} />
              <p className="italic">{post?.image_description}</p>
            </div>
          </div>
        )}
        <article className="flex flex-col gap-6 blog-post-article">
          <MDXRemote
            source={post?.post || ''}
            components={{
              Playground,
              ReactPlayground
            }} />
        </article>
      </div>
    </section >
  )
}