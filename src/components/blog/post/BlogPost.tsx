import { PostMarkdown } from "./PostMarkdown";

export default function BlogPost({ postId, post }) {

  return (
    <section className="text-">
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
        <article className="flex flex-col gap-6">
          <PostMarkdown post={post.post} />
        </article>
      </div>
    </section>
  )
}