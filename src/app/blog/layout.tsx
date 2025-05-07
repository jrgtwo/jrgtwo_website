import { PropsWithChildren } from "react"
import { createClient } from '@/lib/db/server';
import BlogSidebar from "@/components/blog/sidebar/BlogSidebar"
import { Separator } from "@/components/ui/separator"

export default async function BlogLayout({ children }: PropsWithChildren) {
  const supabase = await createClient();

  const { data: featuredPosts, error } = await supabase
    .from('Blog')
    .select('id, featured, created_at, title')
    .is('featured', true)
    .limit(5)
    .order('created_at', { ascending: false })

  if (error) return

  return (
    <>
      <section className="py-full-section">
        <h2 className=" text-center text-5xl font-[Cal_Sans]" style={{ 'textShadow': '#860202 0px 3px 0px, white 0px 2px 0px' }}>Jonathan's Explorations 🧑‍🚀 🚀</h2>
        <Separator className="my-8" />
        <section className="flex flex-col-reverse  lg:flex-row gap-8">
          <section className="w-[310px] px-4 lg:block">
            <BlogSidebar posts={featuredPosts} />
          </section>
          <section className="w-full">
            {children}
          </section>
        </section>
      </section >
    </>
  )
}