'use client'
import '@/components/blog/post/post-styles.css'

import Post from './post.mdx'

export default function EditorPage() {

  console.log(Post)
  return (
    <>
      <h2>Editor </h2>
      <section className="w-[42em] m-auto ">
        <article className="blog-post-article flex flex-col gap-6 blog-post-article">
          <Post />
        </article>
      </section>
    </>
  )
}