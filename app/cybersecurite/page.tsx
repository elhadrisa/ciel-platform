import Navbar from "../../components/Navbar"

export default function Cyber() {

  return (

    <main className="min-h-screen bg-black text-green-400">

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl neon-text mb-6">
          Cybersécurité
        </h1>

        <p>
          Ici vous trouverez les cours et travaux pratiques de cybersécurité.
        </p>

      </div>

    </main>

  )
}