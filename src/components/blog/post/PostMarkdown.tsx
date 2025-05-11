import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism"
import IdeCodeDispay from './IdeCodeDisplay'
import './post-styles.css'

export const PostMarkdown = ({ post }) => {
  return (
    <ReactMarkdown
      components={{
        code({ className, children, ...rest }) {
          const match = /language-(\w+)/.exec(className || "");
          return match ? (
            <IdeCodeDispay
              copyText={String(children)}>

              <SyntaxHighlighter
                PreTag="div"
                language={match[1]}
                {...(rest as any)}
                style={oneDark}
              >
                {String(children)}
              </SyntaxHighlighter>
            </IdeCodeDispay>
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