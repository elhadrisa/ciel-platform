"use client"

import { useState } from "react"

export default function TPCard({ title, pdf }: { title: string, pdf: string }) {

  const [file, setFile] = useState<File | null>(null)

  function handleSubmit() {

    if (!file) {
      alert("Sélectionnez un fichier")
      return
    }

    alert("TP envoyé (simulation)")
  }

  return (

    <div className="border border-cyan-400 p-6 hover:bg-cyan-400 hover:text-black transition">

      <div className="h-24 mb-4 flex items-center justify-center border border-cyan-400">
        animation réseau
      </div>

      <h2 className="text-xl mb-4 neon-text">
        {title}
      </h2>

      <div className="flex flex-col gap-3">

        <a
          href={pdf}
          target="_blank"
          className="border border-cyan-400 px-4 py-2 text-center"
        >
          Télécharger le TP
        </a>

        <input
          type="file"
          onChange={(e)=>setFile(e.target.files?.[0] || null)}
        />

        <button
          onClick={handleSubmit}
          className="border border-cyan-400 px-4 py-2"
        >
          Rendre le TP
        </button>

      </div>

    </div>

  )
}