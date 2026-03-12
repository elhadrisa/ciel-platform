"use client"

import TerminalText from "../../components/TerminalText"

export default function Dashboard() {

  return (

    <main className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center">

      <div className="cyber-grid"></div>

      <div className="text-center mb-16 space-y-2">
        <TerminalText text="> connexion serveur CIEL..." />
        <TerminalText text="> authentification réussie" />
        <TerminalText text="> Bonjour élève" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-3/4">

        <a href="/themes/cybersecurite" className="border border-green-400 p-8 text-center hover:bg-green-400 hover:text-black transition">
          Cybersécurité
        </a>

        <a href="/themes/reseau" className="border border-cyan-400 p-8 text-center hover:bg-cyan-400 hover:text-black transition">
          Réseau informatique
        </a>

        <a href="/themes/electronique" className="border border-pink-400 p-8 text-center hover:bg-pink-400 hover:text-black transition">
          Electronique
        </a>

        <a href="/forum" className="border border-yellow-400 p-8 text-center hover:bg-yellow-400 hover:text-black transition">
          Forum
        </a>

        <a href="/calendar" className="border border-purple-400 p-8 text-center hover:bg-purple-400 hover:text-black transition">
          Calendrier
        </a>

      </div>

    </main>

  )
}