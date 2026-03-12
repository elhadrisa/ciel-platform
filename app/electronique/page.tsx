import Navbar from "../../components/Navbar"

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

      </div>

    </main>

  )
}