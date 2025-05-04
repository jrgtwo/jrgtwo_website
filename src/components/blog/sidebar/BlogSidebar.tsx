"use client"
import { useEffect, useState } from 'react'
import { cva } from 'class-variance-authority'
import { supabaseClient as supabase } from '@/lib/supabase'
import type { Database } from '@/types/db/database.types'
import { Separator } from '@/components/ui/separator'

type BLOG_POST = Database['public']['Tables']['Blog']["Row"]

export default function BlogSidebar() {
  const [posts, setBlogPosts] = useState<Partial<BLOG_POST>[] | null>(null)
  const [shouldMinimize, setShouldMinimize] = useState(false)
  useEffect(() => {
    if (!supabase) return

    let ignore = false;

    (async () => {
      const { data, error } = await supabase
        .from('Blog')
        .select('id, featured, created_at, title')
        .is('featured', true)
        .limit(5)
        .order('created_at', { ascending: false })

      if (ignore || error || !data) return

      setBlogPosts(data)
    })()
    return () => { ignore = true };
  }, [])

  const classes = cva(['overflow-hidden transition-all'], {
    variants: {
      minimized: {
        true: ['w-0'],
        false: ['w-[220px]']
      }
    }
  })

  return (
    <section>
      <section className={classes({ minimized: shouldMinimize })}>
        <div className="w-[220px]">
          <h2 className="text-3xl font-[Cal_Sans] text-destructive">Featured Posts</h2>
          <Separator className="my-4" />
          <menu className="list-disc">
            {posts?.map((post) => (
              <li><a href={`/blog/post/${post.id}`}> {post.title}</a></li>
            ))}
          </menu>
          <button onClick={() => setShouldMinimize(true)}> {`<-`} Minimize</button>
        </div>

      </section>
      <button
        className="absolute top-6/12"
        onClick={() => setShouldMinimize(false)}>Show {`->`}</button>
    </section >

  )
}