import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

import './post-styles.css'

export const PostMarkdown = ({ post }) => {

  return (
    <ReactMarkdown
      components={{
        code({ className, children, ...rest }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            // @ts-expect-error - react-markdown type issues
            <SyntaxHighlighter
              PreTag="div"
              language={match[1]}
              {...rest}
              style={oneDark}
            >
              {children}
            </SyntaxHighlighter>
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