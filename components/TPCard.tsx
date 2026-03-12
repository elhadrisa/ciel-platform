"use client"

import { useState } from "react"
import { supabase } from "../lib/supabaseclient"

export default function TPCard({ title, pdf }: { title: string, pdf: string }) {

  const [file, setFile] = useState<File | null>(null)

  async function handleSubmit() {

    if (!file) {
      alert("Sélectionnez un fichier")
      return
    }

    const fileName = Date.now() + "_" + file.name

    const { error } = await supabase
      .storage
      .from("rendus")
      .upload(fileName, file)

    if (error) {
      alert("Erreur upload")
      console.log(error)
    } else {
      alert("TP envoyé avec succès")
    }

  }

  return (

    <div className="border border-cyan-400 p-6">

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