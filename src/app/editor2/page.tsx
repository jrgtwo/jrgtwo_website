'use client'

import { ForwardRefEditor } from "./ForwardRefEditor"
import { useRef } from 'react';
export default function EditorPage() {
  const editorRef = useRef(null)
  return (
    <>
      <ForwardRefEditor markdown="hello" ref={editorRef} />
    </>
  )
}