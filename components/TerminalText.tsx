"use client"

import { useEffect, useState } from "react"

export default function TerminalText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    let i = 0

    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i))
      i++

      if (i > text.length) {
        clearInterval(interval)
      }
    }, 40)

    return () => clearInterval(interval)
  }, [text])

  return (
    <p className="font-mono text-green-400">
      {displayText}
    </p>
  )
}