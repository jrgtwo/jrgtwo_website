'use client'
import { useState, useCallback, type ChangeEventHandler, type FormEventHandler } from 'react'
import { PostMarkdown } from "@/components/blog/post/PostMarkdown";
import { Textarea } from "@/components/ui/textarea"

export default function EditorPage() {
  const [post, setPost] = useState('')

  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback((event) => {
    const text = event.target.value
    setPost(text)
  }, [])

  return (
    <>
      <h2>Editor </h2>
      <section>
        <section className="flex-auto">
          <p>Markdown Input</p>
          <Textarea
            placeholder="Enter Markdown here"
            onChange={handleChange}
            className="border-1 border-red-50 rounded-2xl p-4  h-80" />
        </section>
        <section className="flex-auto mt-8">
          <p>Markdown Output</p>
          <article className="border-1 border-red-50 rounded-2xl p-4 min-h-80">
            <PostMarkdown post={post} />
          </article>
        </section>
      </section>
    </>
  )
}