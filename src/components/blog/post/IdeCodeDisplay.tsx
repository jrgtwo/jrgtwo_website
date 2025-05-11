import { useState, useCallback } from 'react'
import { toast } from "sonner"
import { Copy } from "lucide-react"

export default function IdeCodeDispay({ children, copyText }: { children: React.ReactNode, copyText: string }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = useCallback(() => {
    setIsOpen(true)
  }, [])

  const handleClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(copyText)
    toast("Code copied to clipboard")
  }, [])

  return (
    <div className="ide-wrapper">
      <div className="ide-header">
        <button
          className="open-button"
          onClick={handleOpen}
          aria-label="open modal" />
        <button
          className="copy-button"
          onClick={handleCopy}
          aria-label="copy code" ><Copy /></button>
      </div>
      <div className={`ide-modal absolute hidden ${isOpen ? 'maximize' : ''} `}>
        <div className="ide-modal-contents">
          <div className="ide-wrapper">
            <div className="ide-header">
              <button
                className="close-button"
                onClick={handleClose}
                aria-label="close modal" />
              <button
                className="copy-button"
                onClick={handleCopy}
                aria-label="copy code" ><Copy /></button>
            </div>
            {children}
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}