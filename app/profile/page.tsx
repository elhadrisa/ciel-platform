import Navbar from "../../components/Navbar"
import AvatarSelector from "../../components/AvatarSelector"

export default function ProfilePage() {

  return (

    <main className="min-h-screen bg-black text-green-400">

      <Navbar />

      <div className="p-10">

        <h1 className="text-3xl neon-text mb-8">
          Choisir un avatar
        </h1>

        <AvatarSelector />

      </div>

    </main>

  )
}