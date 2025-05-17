export default function IdeCodeDisplay({ children }: { children: React.ReactNode, copyText?: string }) {
  return (
    <div className="ide-wrapper">
      <div className="ide-header"></div>
      {children}
    </div>
  )
}