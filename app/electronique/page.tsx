import Navbar from "../../components/Navbar"
import ElectricAnimation from "../../components/ElectricAnimation"

export default function Electronique() {

  return (

    <main className="min-h-screen bg-black text-green-400">

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl neon-text mb-6">
          Electronique
        </h1>

        <p>
          Ici vous trouverez les cours et TP sur l’électronique.
        </p>

        <div className="mt-6 border border-pink-400 p-4">
          <ElectricAnimation/>
        </div>

      </div>

    </main>

  )
}