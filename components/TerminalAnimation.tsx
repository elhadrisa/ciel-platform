"use client"

import { useEffect, useState } from "react"

const lines = [
  "> scanning network...",
  "> checking ports...",
  "> vulnerability found",
  "> exploiting...",
  "> access granted"
]

export default function TerminalAnimation(){

  const [index,setIndex] = useState(0)

  useEffect(()=>{

    const interval = setInterval(()=>{

      setIndex((prev)=> (prev + 1) % lines.length)

    },1000)

    return ()=>clearInterval(interval)

  },[])

  return(

    <div className="text-green-400 font-mono text-sm">

      {lines.slice(0,index+1).map((line,i)=>(
        <div key={i}>{line}</div>
      ))}

    </div>

  )

}