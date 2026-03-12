"use client"

import Navbar from "../../components/Navbar"

export default function Dashboard() {

  return (

    <main className="min-h-screen bg-black text-green-400">

      <div className="cyber-grid"></div>

      <Navbar />

      <div className="p-10 max-w-4xl mx-auto">

        <h1 className="text-3xl mb-10 neon-text">
          Bienvenue en 2nde CIEL
        </h1>

        <div className="space-y-10">

          <a href="/cybersecurite">
            <div className="border border-green-400 p-6 hover:bg-green-400 hover:text-black transition cursor-pointer">
              <h2 className="text-xl mb-2 neon-text">Cybersécurité</h2>
              <p>
                Accédez aux cours et travaux pratiques sur la cybersécurité :
                vulnérabilités, sécurité réseau, cryptographie et bonnes pratiques.
              </p>
            </div>
          </a>

          <a href="/reseau">
            <div className="border border-cyan-400 p-6 hover:bg-cyan-400 hover:text-black transition cursor-pointer">
              <h2 className="text-xl mb-2 neon-text">Réseau informatique</h2>
              <p>
                Retrouvez les cours et TP sur les réseaux : TCP/IP,
                configuration des équipements réseau et analyse de trafic.
              </p>
            </div>
          </a>

          <a href="/electronique">
            <div className="border border-pink-400 p-6 hover:bg-pink-400 hover:text-black transition cursor-pointer">
              <h2 className="text-xl mb-2 neon-text">Electronique</h2>
              <p>
                Consultez les cours et TP sur l’électronique,
                les composants et les systèmes embarqués.
              </p>
            </div>
          </a>

        </div>

      </div>

    </main>

  )
}