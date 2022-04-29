// SyntaxHighlight.tsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { duotoneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

const SyntaxHighlight = {
  code({ inline, className, ...props }) {
    // Set code language declared in code block: ```lang
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
      <SyntaxHighlighter
        style={duotoneDark}
        language={match[1]}
        className="codeStyle"
        showLineNumbers={true}
        {...props}
      />
    ) : (
      <code className={`${className} chakra-code`} {...props} />
    )
  }
}

export default SyntaxHighlight
