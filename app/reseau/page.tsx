import Navbar from "../../components/Navbar"
import TPCard from "../../components/TPCard"

export default function Reseau() {

  return (

    <main className="min-h-screen text-green-400 relative">

      <div className="cyber-grid-network"></div>

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl neon-text mb-6">
          Réseau informatique
        </h1>

        <p>
          Ici vous trouverez les cours et TP sur les réseaux informatiques.
        </p>

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