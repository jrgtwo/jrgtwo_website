import { PostMarkdown } from "./PostMarkdown";
import Link from 'next/link'
import Image from "next/image";

export default function BlogPost({ postId, post }) {

  return (
    <section className="text-">
      <Link href={`/blog/post/${postId}`}><h2 className="text-3xl font-[Cal_Sans] ">{post.title}</h2></Link>
      <p>{new Date(post.created_at).toLocaleDateString()}</p>
      <div className="p-4">
        <p>{post.short_blurb}</p>
        {post.image && (
          <div className="p-8">
            <p className="italic">{post.image_description}</p>
            <Image
              src={post.image}
              alt={post.image_description}
              width={750}
              height={500} />

          </div>
        )}
        <article className="flex flex-col gap-6">
          <PostMarkdown post={post.post} />
        </article>
      </div>
    </section>
  )
}