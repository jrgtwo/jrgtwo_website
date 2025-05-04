import { PropsWithChildren } from "react"
import BlogSidebar from "@/components/blog/sidebar/BlogSidebar"
import { Separator } from "@/components/ui/separator"

export default function BlogLayout({ children }: PropsWithChildren) {
  return (
    <>
      <section className="py-full-section">
        <h2 className="hidden md:block text-center text-5xl font-[Cal_Sans]" style={{ 'textShadow': '#860202 0px 3px 0px, white 0px 2px 0px' }}>Jonathan's Explorations 🧑‍🚀 🚀</h2>
        <Separator className="my-8" />
        <section className="flex gap-8 px-8">
          <BlogSidebar />
          <section className="w-full">
            {children}
          </section>
        </section>

      </section >
    </>
  )
}