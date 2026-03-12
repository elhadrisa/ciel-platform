"use client"

import { supabase } from "../../lib/supabaseclient"
import { useRouter } from "next/navigation"
import { useState } from "react"
import TerminalText from "../../components/TerminalText"


export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

    async function handleLogin() {

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  })

  if (error) {
    alert("Erreur de connexion")
  } else {
    router.push("/dashboard")
  }

}

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-green-400">

      <div className="cyber-grid"></div>

      <h1 className="text-4xl neon-text mb-10">
        CIEL Portal
      </h1>

      <div className="mb-10 text-center space-y-2">
        <TerminalText text="> connexion serveur CIEL..." />
        <TerminalText text="> authentification requise" />
      </div>

      <div className="border border-green-400 p-8 w-80">

        <input
          type="email"
          placeholder="email"
          className="w-full mb-4 p-2 bg-black border border-green-400"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="mot de passe"
          className="w-full mb-6 p-2 bg-black border border-green-400"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
onClick={handleLogin}
className="w-full border border-green-400 py-2 hover:bg-green-400 hover:text-black transition"
>
se connecter
</button>

      </div>

    </main>
  )
}