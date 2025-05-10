import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import Image from "next/image"

export default function BlogList({ data }) {
  return (
    <>
      <h2 className="text-3xl font-[Cal_Sans] text-destructive">Latest Posts</h2>
      <Separator className="my-4" />

      {data?.map((post, index) => (
        <div key={`latest-posts-${post.id}`}>
          {index !== 0 && <Separator className="my-4" />}
          <div>
            <Link href={`/blog/post/${post.id}`}>
              <h3 className="font-[Cal_Sans] text-2xl">{post.title}</h3>
              <p className="font-[Roboto_Condensed] text-sm">{new Date(post.created_at).toLocaleDateString()}</p>
              <div className="flex gap-4 mt-4 p-4 items-center">
                <Image
                  src={post.thumbnail}
                  alt=""
                  width={100}
                  height={70} />
                <p>{post.short_blurb}</p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}