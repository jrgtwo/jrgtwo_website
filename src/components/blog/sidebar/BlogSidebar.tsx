"use client"
import { useEffect, useState } from 'react'
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.NEXT_PUBLIC_DB_URL
const supabaseKey = process.env.NEXT_PUBLIC_DB_KEY
const supabase = (supabaseKey && supabaseUrl) && createClient(supabaseUrl, supabaseKey)

export default function BlogSidebar() {
  const [posts, setBlogPosts] = useState<unknown[] | null>(null)
  useEffect(() => {
    if (!supabase) return () => ignore = true;

    let ignore = false;

    (async () => {
      const { data, error } = await supabase.from('Blog').select('*')
      console.log(data, error)
      if (ignore || error || !data) return () => ignore = true;

      setBlogPosts(data)
    })()
    return () => ignore = true;
  }, [])

  return (
    <section>
      <h1>hi</h1>
      <pre>{JSON.stringify(posts)}</pre>
    </section>

  )
}