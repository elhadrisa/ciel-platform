"use client"

import { useEffect, useState } from "react"

export default function Navbar() {

  const [avatar, setAvatar] = useState("")
  const [name, setName] = useState("Élève")

  useEffect(() => {

    const savedAvatar = localStorage.getItem("avatar")

    if(savedAvatar){
      setAvatar(savedAvatar)
    }

  }, [])

  return (

    <div className="w-full flex justify-between items-center p-4 border-b border-green-400 bg-black relative z-10">

      <h1 className="text-green-400 text-xl neon-text">
        CIEL Portal
      </h1>

      <div className="flex items-center gap-8">

        <a href="/dashboard">Dashboard</a>
        <a href="/forum">Forum</a>
        <a href="/calendar">Calendrier</a>
        <a href="/profile">Profil</a>

        <div className="flex items-center gap-3">

          <span>{name}</span>

          {avatar && (
            <img
              src={avatar}
              className="w-10 h-10 rounded-full border border-green-400"
            />
          )}

        </div>

      </div>

    </div>

  )
}