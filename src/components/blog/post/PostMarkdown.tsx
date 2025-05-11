import type { MouseEvent } from 'react'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

import './post-styles.css'

export const PostMarkdown = ({ post }) => {
  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    const frame = event.currentTarget.nextSibling as HTMLElement | null;
    frame?.classList.add('maximize')
  }
  const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
    const frame = event.currentTarget.closest('.ide-modal')
    frame?.classList.remove('maximize')
  }

  return (
    <ReactMarkdown
      components={{
        code({ className, children, ...rest }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (

            <div className="ide-wrapper">
              <button
                className="open-button"
                onClick={handleOpen}
                aria-label="open modal" />
              <div className="ide-modal absolute hidden">
                <div className="ide-modal-contents">
                  <div className="ide-wrapper">
                    <button
                      className="close-button"
                      onClick={handleClose}
                      aria-label="close modal" />
                    <SyntaxHighlighter
                      PreTag="div"
                      language={match[1]}
                      {...(rest as any)}
                      style={oneDark}
                    >
                      {String(children)}
                    </SyntaxHighlighter>
                  </div>
                </div>
              </div>
              <SyntaxHighlighter
                PreTag="div"
                language={match[1]}
                {...(rest as any)}
                style={oneDark}
              >
                {String(children)}
              </SyntaxHighlighter>
            </div>
          ) : (
            <code {...rest} className={className}>
              {children}
            </code>
          );
        },
      }}>
      {post}
    </ReactMarkdown>
  )
}