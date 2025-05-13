'use client'
import { useState, useCallback, useEffect, type ChangeEventHandler, type MouseEvent } from 'react'
import { PostMarkdown } from "@/components/blog/post/PostMarkdown";
import { Textarea } from "@/components/ui/textarea"

type currentSelect = {
  start: number,
  end: number
}

export default function EditorPage() {
  const [post, setPost] = useState('')
  const [currentSelection, setCurrentSelection] = useState<currentSelect | null>(null)
  const handleChange: ChangeEventHandler<HTMLTextAreaElement> = useCallback((event) => {
    const text = event.target.value
    setPost(text)
  }, [])


  const handleMouseUp = (event: MouseEvent<HTMLTextAreaElement>) => {
    const target = event.currentTarget
    const end = target.selectionEnd
    const start = target.selectionStart

    setCurrentSelection({ start, end })
  }

  useEffect(() => {
    // TODO: lets figure something out soon or get rid of this 5/11/25
    console.log(currentSelection?.start, (currentSelection?.start || 0) + (currentSelection?.end || 0))
  }, [currentSelection])

  return (
    <>
      <h2>Editor </h2>
      <section>
        <section className="flex-auto">
          <p>Markdown Input</p>
          <Textarea
            onMouseUp={handleMouseUp}
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