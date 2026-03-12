"use client"

import { useEffect, useState } from "react"

export default function BackgroundTerminal(){

  const lines = [
    "> nmap -sS 192.168.1.0/24",
    "> scanning network...",
    "> open port 22 detected",
    "> ssh connection established",
    "> checking vulnerabilities...",
    "> exploit loaded",
    "> access granted",
    "> monitoring packets..."
  ]

  const [display,setDisplay] = useState<string[]>([])

  useEffect(()=>{

    const interval = setInterval(()=>{

      setDisplay(prev => {

        const next = [...prev, lines[Math.floor(Math.random()*lines.length)]]

        if(next.length > 12){
          next.shift()
        }

        return next

      })

    },800)

    return ()=>clearInterval(interval)

  },[])

  return(

    <div className="terminal-background">

      {display.map((line,i)=>(
        <div key={i}>{line}</div>
      ))}

    </div>

  )

}