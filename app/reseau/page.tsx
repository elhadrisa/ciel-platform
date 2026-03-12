import Navbar from "../../components/Navbar"
import TPCard from "../../components/TPCard"
import NetworkAnimation from "../../components/NetworkAnimation"
import BackgroundTerminal from "../../components/BackgroundTerminal"

export default function Reseau() {

  return (

      <main className="min-h-screen text-green-400 relative">

  <div className="cyber-grid-network"></div>
  <div className="absolute inset-0 bg-black -z-10"></div>
  <BackgroundTerminal />

  <Navbar />

      <div className="p-10">

        <h1 className="text-3xl neon-text mb-6">
          Réseau informatique
        </h1>

        <p>
          Ici vous trouverez les cours et TP sur les réseaux informatiques.
        </p>

        <div className="mt-6 border border-cyan-400 p-4">
          <NetworkAnimation/>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <TPCard
          title="TP VLAN"
          pdf="/tp/TP1 - VLAN.pdf"
        />

      </div>

    </main>

  )
}