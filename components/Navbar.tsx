"use client"

export default function Navbar() {

  return (

    <div className="w-full flex justify-between items-center p-4 border-b border-green-400 bg-black">

      <h1 className="text-green-400 text-xl neon-text">
        CIEL Portal
      </h1>

      <div className="flex gap-6">

        <a href="/dashboard" className="hover:text-white">
          Dashboard
        </a>

        <a href="/forum" className="hover:text-white">
          Forum
        </a>

        <a href="/calendar" className="hover:text-white">
          Calendrier
        </a>

      </div>

    </div>

  )
}