export default function IdeCodeDisplay({ children }: { children: React.ReactNode, copyText?: string }) {
  return (
    <div className="ide-wrapper">
      <div className="ide-header">

        <div className="open-button"></div>
      </div>
      {children}
    </div>
  )
}