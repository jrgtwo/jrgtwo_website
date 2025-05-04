'use client'
import { useState } from 'react'
import { cva } from 'class-variance-authority'
import FeaturedPosts from './FeaturedPosts'
import type { Tables } from '@/types/db/database.types'
export type POSTS_PROP = Partial<Tables<'Blog'>>

export default function BlogSidebar({ posts }: { posts: POSTS_PROP[] | null }) {
  const [shouldMinimize, setShouldMinimize] = useState(false)
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
          <FeaturedPosts posts={posts} />
          <button onClick={() => setShouldMinimize(true)}> {`<-`} Minimize</button>
        </div>

      </section>
      <button
        className="absolute top-6/12"
        onClick={() => setShouldMinimize(false)}>Show {`->`}</button>
    </section >

  )
}