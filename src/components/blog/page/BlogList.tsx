import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import Image from "next/image"
import { Tables } from "@/types/db/database.types"

type POSTS_PROP = Tables<'Blog'>[] | undefined | null

export default function BlogList({ data }: { data: POSTS_PROP }) {
  return (
    <>
      <h2 className="text-3xl font-[Cal_Sans] text-destructive">Latest Posts</h2>
      <Separator className="my-4" />

      {data?.map((post, index) => (
        <div key={`latest-posts-${post.id}`}>
          {index !== 0 && <Separator className="my-4" />}
          <div>
            <Link href={`/blog/post/${post.id}`}>
              <div className="flex flex-col md:flex-row gap-4 mt-4 p-4 items-center">
                {post.thumbnail && (
                  <Image
                    className="w-full md:max-w-[200px]"
                    src={post.thumbnail}
                    alt=""
                    width={200}
                    height={140} />
                )}
                <div>
                  <h3 className="font-[Cal_Sans] text-2xl">{post.title}</h3>
                  <p>{post.short_blurb}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </>
  )
}