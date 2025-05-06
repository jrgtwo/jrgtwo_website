
import { Separator } from "@/components/ui/separator"
import type { POSTS_PROP } from "./BlogSidebar"
export default function FeaturedPosts({ posts }: { posts: POSTS_PROP[] | null }) {


  return (
    <>
      <h2 className="text-3xl font-[Cal_Sans] text-destructive">Featured Posts</h2>
      <Separator className="my-4" />
      <menu className="list-disc">
        {posts?.map((post) => (
          <li key={`featured-post-${post.id}`}><a href={`/blog/post/${post.id}`}> {post.title}</a></li>
        ))}
      </menu>
    </>
  )
}