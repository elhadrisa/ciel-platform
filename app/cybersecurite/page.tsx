import Navbar from "../../components/Navbar"
import CourseCard from "../../components/CourseCard"

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

      <div className="grid md:grid-cols-2 gap-8 mt-10">

<CourseCard
title="Introduction cybersécurité"
pdf="/cours/cyber-intro.pdf"
/>

<CourseCard
title="Sécurité des mots de passe"
pdf="/cours/password.pdf"
/>

</div>

    </main>

  )
}