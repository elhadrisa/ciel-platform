"use client"

import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabaseclient"
import Navbar from "../../components/Navbar"

export default function ProfPage() {

  const [files, setFiles] = useState<any[]>([])

  async function loadFiles() {

    const { data, error } = await supabase
      .storage
      .from("rendus")
      .list()

    if (error) {
      console.log(error)
    } else {
      setFiles(data)
    }

  }

  useEffect(() => {
    loadFiles()
  }, [])

  return (

    <main className="min-h-screen bg-black text-green-400">

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl neon-text mb-10">
          Rendus des TP
        </h1>

        <div className="space-y-4">

          {files.map((file) => (

            <div
              key={file.name}
              className="border border-green-400 p-4 flex justify-between"
            >

              <span>{file.name}</span>

              <a
                href={`https://ihyfyfyvuwnalykfqtih.supabase.co/storage/v1/object/public/rendus/${file.name}`}
                target="_blank"
                className="border border-green-400 px-4 py-1"
              >
                Télécharger
              </a>

            </div>

          ))}

        </div>

      </div>

    </main>

  )
}