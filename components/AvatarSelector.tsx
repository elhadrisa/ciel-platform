"use client"

import { useState } from "react"

const avatars = [
  "/avatars/hacker.png",
  "/avatars/robot.png",
  "/avatars/ninja.png",
  "/avatars/drone.png",
  "/avatars/ai.png"
]

export default function AvatarSelector() {

  const [selected, setSelected] = useState("")

  return (

    <div className="grid grid-cols-3 gap-4">

      {avatars.map((avatar) => (

        <img
          key={avatar}
          src={avatar}
          className={`w-20 h-20 cursor-pointer border ${selected === avatar ? "border-green-400" : "border-gray-600"}`}
          onClick={()=>setSelected(avatar)}
        />

      ))}

    </div>

  )
}