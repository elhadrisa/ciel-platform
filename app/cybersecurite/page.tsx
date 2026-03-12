import Navbar from "../../components/Navbar"
import CourseCard from "../../components/CourseCard"
import TerminalAnimation from "../../components/TerminalAnimation"

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

        <div className="mt-6 border border-green-400 p-4">
          <TerminalAnimation/>
        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-10">

        <CourseCard
          title="Intro à la sécurité des réseaux (1ère CIEL)"
          pdf="/cours/Cours 6 - Introduction à la Cybersécurité.pdf"
        />

        <CourseCard
          title="Sécurité des réseaux (Terminale CIEL)"
          pdf="/cours/Cours 6 - La sécurité Informatique.pdf"
        />

      </div>

    </main>

  )
}